"use strict"
const { makeTypedQueryFactory: $mkFactory } = require("../runtime/library")
exports.updateFlash = /*#__PURE__*/ $mkFactory("UPDATE FlashCard\nSET title = ?, content = ?\nWHERE id = ?;")
