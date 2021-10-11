import os
from typing import Any, MutableMapping, Optional
from configuration import config_provider


def get_config(key: str, default: Any = None) -> Any:
    return config_provider.get(key, default)


def get_database_config(key: str = None, default: Any = None) -> Any:
    database_config: dict = get_config("DATABASE", {})
    if not key:
        return database_config
    return database_config.get(key, default)


def get_config_file(config_file: Optional[str] = None):
    if not config_file:
        conf = os.environ.get("CONF")
        env = os.environ.get("ENV")
        if conf is not None:
            config_file = conf
        elif env is not None:
            from utils import get_project_root

            config_file = os.path.join(get_project_root(), f"conf/config_{env}.yml")
        else:
            from utils import get_project_root

            config_file = os.path.join(get_project_root(), f"conf/config_dev.yml")

    return config_file