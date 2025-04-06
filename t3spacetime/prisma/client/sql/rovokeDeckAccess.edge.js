"use strict"
const { makeTypedQueryFactory: $mkFactory } = require("../runtime/edge.js")
exports.rovokeDeckAccess = /*#__PURE__*/ $mkFactory("DELETE FROM DeckAccess\nWHERE deckId = ? AND userId = ?;")
