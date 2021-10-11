import os
import types
from abc import ABC, abstractmethod
import yaml
from loguru import logger
from typing import List, Any


class ConfigLoader(ABC):
    @abstractmethod
    def load(self, *args, **kwargs) -> dict:
        pass


def file_ext(file_path: str) -> str:
    _, ext = os.path.splitext(file_path)
    if ext:
        return ext[1:].lower()
    return ""


class FileConfigLoader(ConfigLoader):
    def load(self, *args, **kwargs) -> dict:
        config_file_path = args[0] or kwargs.pop("config_file_path")
        if not config_file_path:
            logger.exception("A valid config file path should be specified.")

        if self._is_yaml_file(config_file_path):
            return self._from_yaml_file(config_file_path)
        if self._is_py_file(config_file_path):
            return self._from_py_file(config_file_path)

        raise NotImplementedError("Only yaml and py file is supported")

    @staticmethod
    def _from_py_file(config_file_path: str) -> dict:
        d = types.ModuleType("config")
        d.__file__ = config_file_path
        try:
            with open(config_file_path, mode="r", encoding="utf-8") as config_file:
                exec(compile(config_file.read(), config_file_path, "exec"), d.__dict__)  # pylint: disable=W0122
        except IOError as e:
            e.strerror = "Unable to load configuration file (%s)" % e.strerror
            raise
        conf = {}
        for key in dir(d):
            if key.isupper():
                conf[key] = getattr(d, key)
        return conf

    @staticmethod
    def _from_yaml_file(config_file) -> dict:
        with open(config_file, "r", encoding="utf-8") as f:
            try:
                return yaml.safe_load(f) or {}
            except yaml.YAMLError:
                logger.exception(f"FileConfigLoader filed to load config from {config_file}")
                raise

    @staticmethod
    def _is_yaml_file(file_path: str):
        ext = file_ext(file_path)
        return ext in ["yml", "yaml"]

    @staticmethod
    def _is_py_file(file_path: str):
        ext = file_ext(file_path)
        return ext in ["py"]


class ConfigProvider:
    def __init__(self, file_path: str = None):
        from utils import get_project_root

        self.loaders: List[ConfigLoader] = []
        self.config: dict = {}

        config_file_default = os.path.join(get_project_root(), "conf/config_default.yml")
        self.config_file_path: str = file_path if file_path else config_file_default
        logger.info(f"Default configuration file: {self.config_file_path}")

        self._init_config_loader()
        self._load()

    def _init_config_loader(self):
        self.loaders.append(FileConfigLoader())
        logger.info(f"Configuration loader: {self.loaders}")

    def _load(self):
        for loader in self.loaders:
            self.config.update(loader.load(self.config_file_path))

        logger.trace(f"Config dict: {self.config}")

    def _merge(self, config, section=None):
        if not section:
            self.config.update(config)

        if section in self.config:
            self.config[section].update(config)
        else:
            self.config[section] = config

    def load(self, file_path: str, section: str = None):
        conf = {}
        for loader in self.loaders:
            conf.update(loader.load(file_path))

        self._merge(conf, section)

    def reload(self, file_path: str):
        logger.info(f"Reload configuration file: {file_path}")
        self.config_file_path = file_path
        self._load()

    def merge(self, config):
        self.config.update(config)

    def set(self, key: str, value: Any) -> None:
        self.config[key] = value

    def set_nested(self, parent_key: str, key: str, value: Any = None):
        v = self.config.get(parent_key, {})
        v[key] = value
        self.config[parent_key] = v

    def get(self, key: str, default: Any = None) -> Any:
        if key in os.environ:
            return os.environ.get(key)
        return self.config.get(key, default)

    def get_all(self) -> dict:
        return self.config


config_provider = ConfigProvider()
