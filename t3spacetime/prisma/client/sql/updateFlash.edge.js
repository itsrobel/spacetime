"use strict"
const { makeTypedQueryFactory: $mkFactory } = require("../runtime/edge.js")
exports.updateFlash = /*#__PURE__*/ $mkFactory("UPDATE FlashCard\nSET title = ?, content = ?\nWHERE id = ?;")
