"use strict"
const { makeTypedQueryFactory: $mkFactory } = require("../runtime/library")
exports.updateFlashProgress = /*#__PURE__*/ $mkFactory("UPDATE DeckFlashCard\nSET progress = ?\nWHERE deckId = ? AND flashId = ?;")
