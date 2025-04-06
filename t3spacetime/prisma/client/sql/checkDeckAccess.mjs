import { makeTypedQueryFactory as $mkFactory } from "../runtime/library"
export const checkDeckAccess = /*#__PURE__*/ $mkFactory("SELECT level FROM DeckAccess\nWHERE deckId = ? AND userId = ?;")
