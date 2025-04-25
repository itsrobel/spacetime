INSERT INTO DeckAccess (deckId, userGoogleId, level)
VALUES (?, ?, ?)
ON DUPLICATE KEY UPDATE level = ?;
