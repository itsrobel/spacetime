"use strict"
const { makeTypedQueryFactory: $mkFactory } = require("../runtime/edge.js")
exports.addToDeck = /*#__PURE__*/ $mkFactory("INSERT IGNORE INTO DeckFlashCard (deckId, flashId, progress)\nVALUES (?, ?, 'BEGIN');")
