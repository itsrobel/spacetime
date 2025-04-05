SELECT f.*, df.progress
FROM Flash f
JOIN DeckFlash df ON f.id = df.flashId
WHERE df.deckId = ?;
