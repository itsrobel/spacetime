import { makeTypedQueryFactory as $mkFactory } from "../runtime/library"
export const grantDeckAccess = /*#__PURE__*/ $mkFactory("INSERT INTO DeckAccess (deckId, userId, level)\nVALUES (?, ?, ?)\nON DUPLICATE KEY UPDATE level = ?;")
