import { makeTypedQueryFactory as $mkFactory } from "../runtime/edge.js"
export const removeFlashFromDeck = /*#__PURE__*/ $mkFactory("DELETE FROM DeckFlashCard\nWHERE deckId = ? AND flashId = ?;")
