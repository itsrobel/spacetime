SELECT u.id, u.name, da.level
FROM DeckAccess da
JOIN User u ON da.userId = u.id
WHERE da.deckId = ?;
