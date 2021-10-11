import os.path


def get_project_root(path=__file__):
    directory = os.path.dirname(path)

    while directory != "/":
        p = os.path.join(directory, "pyproject.toml")
        if os.path.isfile(p):
            return directory
        else:
            directory = os.path.dirname(directory)

    return None