import { makeTypedQueryFactory as $mkFactory } from "../runtime/edge.js"
export const checkDeckAccess = /*#__PURE__*/ $mkFactory("SELECT level FROM DeckAccess\nWHERE deckId = ? AND userId = ?;")
