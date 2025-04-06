import { makeTypedQueryFactory as $mkFactory } from "../runtime/edge.js"
export const updateFlashProgress = /*#__PURE__*/ $mkFactory("UPDATE DeckFlashCard\nSET progress = ?\nWHERE deckId = ? AND flashId = ?;")
