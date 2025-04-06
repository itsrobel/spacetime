import { makeTypedQueryFactory as $mkFactory } from "../runtime/edge.js"
export const rovokeDeckAccess = /*#__PURE__*/ $mkFactory("DELETE FROM DeckAccess\nWHERE deckId = ? AND userId = ?;")
