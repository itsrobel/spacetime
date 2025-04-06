"use strict"
const { makeTypedQueryFactory: $mkFactory } = require("../runtime/library")
exports.grantDeckAccess = /*#__PURE__*/ $mkFactory("INSERT INTO DeckAccess (deckId, userId, level)\nVALUES (?, ?, ?)\nON DUPLICATE KEY UPDATE level = ?;")
