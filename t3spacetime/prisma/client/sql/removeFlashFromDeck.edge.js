"use strict"
const { makeTypedQueryFactory: $mkFactory } = require("../runtime/edge.js")
exports.removeFlashFromDeck = /*#__PURE__*/ $mkFactory("DELETE FROM DeckFlashCard\nWHERE deckId = ? AND flashId = ?;")
