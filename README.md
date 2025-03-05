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
bunx tailwindcss -i ./flash/static/input.css  -o ./flash/static/output.css
```

### Run

```sh
uv run manage.py runserver
```

In the instance that Django complains about packages run:

```sh
uv run manage.py migrate
```

## TODOS

- [ ] Create the flash app

  - [ ] Create the models
    - deck
      - owner_id
      - public
      - shared
        - where shared is a list of
          the non owners that can view the deck
    - flash
      - deck_id
      - title
      - content
      - image
      - progress_enum
        - MASTERED
        - LEARNING
        - UNVERSED

The progress made on one user should
not effect the progress of another user.
Each user should have their own copy of the deck

- [ ] Create the authentication app

  - User

    - username
    - email
    - password
    - groups
    - user_permissions
    - google_calendar

  - [ ] maybe implement study groups

- [ ] Create the calendar app

  - [ ] figure out how the hell google Auth works
  - [ ] setup the call back

- [ ] figure out how data transfers and signals work in Django
- [ ] change font to something italic
- [ ] use flash card ids for selection
