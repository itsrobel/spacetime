# Spaced Rep application with Google calendar integration

## Learning Resource

- [Django](https://www.w3schools.com/django/index.php)
- [Django Cotton](https://django-cotton.com/docs/components)
- [Daisyui](https://daisyui.com/components/)
- [UV](https://docs.astral.sh/uv/)
- [Tailwindcss](https://tailwindcss.com/docs/editor-setup)

## Setup

- Install UV on Macos/Linux

```sh
curl -LsSf https://astral.sh/uv/install.sh | sh
```

- Install UV on Windows

```sh
powershell -ExecutionPolicy ByPass -c "irm https://astral.sh/uv/install.ps1 | iex"
```

```sh
uv venv --python 3.12
source .venv/bin/activate
uv pip install -r pyproject.toml
```

## Dev run

Install bun and build the styles

### Install

- Install on Macos/Linux

  ```sh
  curl -fsSL https://bun.sh/install | bash
  ```

- Install on Windows
  ```sh
  powershell -c "irm bun.sh/install.ps1|iex"
  ```

### Build

```sh
bun install
bunx tailwindcss -i ./spaceapp/static/input.css  -o ./spaceapp/static/output.css
```

### Run

```sh
uv run manage.py runserver
```

In the instance that Django complains about packages run:

```sh
uv run manage.py migrate
```
