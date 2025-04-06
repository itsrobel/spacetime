import { makeTypedQueryFactory as $mkFactory } from "../runtime/edge.js"
export const addToDeck = /*#__PURE__*/ $mkFactory("INSERT IGNORE INTO DeckFlashCard (deckId, flashId, progress)\nVALUES (?, ?, 'BEGIN');")
