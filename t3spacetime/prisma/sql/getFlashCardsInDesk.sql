SELECT f.*, df.progress
FROM FlashCard f
JOIN DeckFlashCard df ON f.id = df.flashId
WHERE df.deckId = ?;
