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

## Dev run

styling

```sh
bunx tailwindcss -i ./spaceapp/static/input.css  -o ./spaceapp/static/output.css

```

```sh
uv run manage.py runserver
```

In the instance that Django complains about packages run:

```sh
uv run manage.py migrate
```

## future

Adding tailwind and daisyui might be worth it later
once I understand django templating.

also consider adding

- styling

  - [x] cotton https://django-cotton.com/docs/quickstart
  - [x] [tailwind](https://tailwindcss.com/docs/installation/play-cdn)
  - [x] [daisyui](https://daisyui.com/)
  - [ ] switch to using bun instead of cdn

- [ ] make the flash cards with dialog box
