"use strict"
const { makeTypedQueryFactory: $mkFactory } = require("../runtime/edge.js")
exports.createFlash = /*#__PURE__*/ $mkFactory("INSERT INTO FlashCard(id, ownerId, title, content)\nVALUES (UUID(), ? ,?, ?);")
