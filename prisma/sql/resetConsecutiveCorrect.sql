UPDATE DeckFlash
SET consecutiveCorrect = 0
WHERE deckId = ? AND flashId = ?;