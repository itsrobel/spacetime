INSERT INTO DeckAccess (deckId, userId, level)
VALUES (?, ?, ?)
ON DUPLICATE KEY UPDATE level = ?;
