"use strict"
const { makeTypedQueryFactory: $mkFactory } = require("../runtime/edge.js")
exports.getUserFlashCard = /*#__PURE__*/ $mkFactory("SELECT * FROM FlashCard")
