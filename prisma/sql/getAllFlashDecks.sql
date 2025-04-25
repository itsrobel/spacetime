SELECT f.id AS flashId, d.id AS deckId 
FROM Flash f
JOIN DeckFlash df ON f.id = df.flashId
JOIN Deck d ON df.deckId = d.id
WHERE f.userGoogleId = ?
ORDER BY f.id;
