"use strict"
const { makeTypedQueryFactory: $mkFactory } = require("../runtime/library")
exports.rovokeDeckAccess = /*#__PURE__*/ $mkFactory("DELETE FROM DeckAccess\nWHERE deckId = ? AND userId = ?;")
