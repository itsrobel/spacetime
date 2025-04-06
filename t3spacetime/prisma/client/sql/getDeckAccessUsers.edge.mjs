import { makeTypedQueryFactory as $mkFactory } from "../runtime/edge.js"
export const getDeckAccessUsers = /*#__PURE__*/ $mkFactory("SELECT u.id, u.name, da.level\nFROM DeckAccess da\nJOIN User u ON da.userId = u.id\nWHERE da.deckId = ?;")
