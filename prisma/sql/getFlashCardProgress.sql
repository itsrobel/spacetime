SELECT progress, consecutiveCorrect
FROM DeckFlash
WHERE deckId = ? AND flashId = ?;