"use strict"
const { makeTypedQueryFactory: $mkFactory } = require("../runtime/library")
exports.getDecks = /*#__PURE__*/ $mkFactory("SELECT * FROM Deck WHERE ownerId = ?;")
