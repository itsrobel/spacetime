"use strict"
const { makeTypedQueryFactory: $mkFactory } = require("../runtime/edge.js")
exports.grantDeckAccess = /*#__PURE__*/ $mkFactory("INSERT INTO DeckAccess (deckId, userId, level)\nVALUES (?, ?, ?)\nON DUPLICATE KEY UPDATE level = ?;")
