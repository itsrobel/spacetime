SELECT f.*, df.progress, df.consecutiveCorrect
FROM Flash f
JOIN DeckFlash df ON f.id = df.flashId
WHERE df.deckId = ?;
