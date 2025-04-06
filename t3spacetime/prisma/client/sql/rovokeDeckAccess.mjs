import { makeTypedQueryFactory as $mkFactory } from "../runtime/library"
export const rovokeDeckAccess = /*#__PURE__*/ $mkFactory("DELETE FROM DeckAccess\nWHERE deckId = ? AND userId = ?;")
