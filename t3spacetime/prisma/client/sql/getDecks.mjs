import { makeTypedQueryFactory as $mkFactory } from "../runtime/library"
export const getDecks = /*#__PURE__*/ $mkFactory("SELECT * FROM Deck WHERE ownerId = ?;")
