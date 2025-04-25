SELECT d.*, df.progress, df.consecutiveCorrect
FROM Deck d
JOIN DeckFlash df ON d.id = df.deckId
WHERE df.flashId = ?;
