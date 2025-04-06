"use strict"
const { makeTypedQueryFactory: $mkFactory } = require("../runtime/edge.js")
exports.getDecks = /*#__PURE__*/ $mkFactory("SELECT * FROM Deck WHERE ownerId = ?;")
