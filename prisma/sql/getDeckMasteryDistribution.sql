SELECT 
  progress, 
  COUNT(*) as count
FROM DeckFlash
WHERE deckId = ?
GROUP BY progress
ORDER BY 
  CASE 
    WHEN progress = 'BEGIN' THEN 1
    WHEN progress = 'INTERM' THEN 2
    WHEN progress = 'MASTERY' THEN 3
  END;