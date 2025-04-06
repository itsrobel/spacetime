import { makeTypedQueryFactory as $mkFactory } from "../runtime/edge.js"
export const getDecks = /*#__PURE__*/ $mkFactory("SELECT * FROM Deck WHERE ownerId = ?;")
