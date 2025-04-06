import { makeTypedQueryFactory as $mkFactory } from "../runtime/library"
export const addToDeck = /*#__PURE__*/ $mkFactory("INSERT IGNORE INTO DeckFlashCard (deckId, flashId, progress)\nVALUES (?, ?, 'BEGIN');")
