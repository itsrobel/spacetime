"use strict"
const { makeTypedQueryFactory: $mkFactory } = require("../runtime/edge.js")
exports.createDeck = /*#__PURE__*/ $mkFactory("INSERT INTO Deck (id, name , ownerId,  public)\nVALUES (UUID(), ?, ? , ?);")
