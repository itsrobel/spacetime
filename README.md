# Spaced Rep application with Google calendar integration

## setup

### install uv on windows

```sh
powershell -ExecutionPolicy ByPass -c "irm https://astral.sh/uv/install.ps1 | iex"
```

### install uv on macos/linux

```sh
curl -LsSf https://astral.sh/uv/install.sh | sh
```

```sh
uv venv --python 3.12
source .venv/bin/activate
uv pip install -r pyproject.toml
```
