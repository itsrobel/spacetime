# README

## quick start

```sh
bun install
bunx prisma generate
bunx prisma generate --sql

```

## TODOs

- [x] add prisma
- [x] add users to the database
- [ ] turn the user id into a string
- [x] add flashcards to the database
- [x] add next auth to trpc, turn the current end points to trpc end points

- [ ] I need to add the flashcards to the decks
- [ ] I need a way to remove flashcards from deck
- [ ] I need a way to delete decks
- [ ] I need to be able to update the visibility of decks

what should the flashcard table look like?

| title | content | ...decks |

- [ ] throw a message if the flash cards decks list is empty.
      It will be placed in trash/deleted

- [ ] Have the use specify the deck(s) to add the
      new flash card into on creation.

  - [ ] ui selection
  - [ ] backend implementation

- [ ] if a flashcard is not in any decks delete the flashcard
