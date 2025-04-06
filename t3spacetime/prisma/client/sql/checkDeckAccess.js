"use strict"
const { makeTypedQueryFactory: $mkFactory } = require("../runtime/library")
exports.checkDeckAccess = /*#__PURE__*/ $mkFactory("SELECT level FROM DeckAccess\nWHERE deckId = ? AND userId = ?;")
