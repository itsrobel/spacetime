"use strict"
const { makeTypedQueryFactory: $mkFactory } = require("../runtime/library")
exports.createFlash = /*#__PURE__*/ $mkFactory("INSERT INTO FlashCard(id, ownerId, title, content)\nVALUES (UUID(), ? ,?, ?);")
