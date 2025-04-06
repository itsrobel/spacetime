"use strict"
const { makeTypedQueryFactory: $mkFactory } = require("../runtime/library")
exports.getFlashCardsInDesk = /*#__PURE__*/ $mkFactory("SELECT f.*, df.progress\nFROM FlashCard f\nJOIN DeckFlashCard df ON f.id = df.flashId\nWHERE df.deckId = ?;")
