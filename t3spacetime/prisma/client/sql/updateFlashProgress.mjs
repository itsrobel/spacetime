import { makeTypedQueryFactory as $mkFactory } from "../runtime/library"
export const updateFlashProgress = /*#__PURE__*/ $mkFactory("UPDATE DeckFlashCard\nSET progress = ?\nWHERE deckId = ? AND flashId = ?;")
