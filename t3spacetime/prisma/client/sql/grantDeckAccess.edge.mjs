import { makeTypedQueryFactory as $mkFactory } from "../runtime/edge.js"
export const grantDeckAccess = /*#__PURE__*/ $mkFactory("INSERT INTO DeckAccess (deckId, userId, level)\nVALUES (?, ?, ?)\nON DUPLICATE KEY UPDATE level = ?;")
