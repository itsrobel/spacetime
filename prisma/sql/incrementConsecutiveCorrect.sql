UPDATE DeckFlash
SET consecutiveCorrect = consecutiveCorrect + 1
WHERE deckId = ? AND flashId = ?;