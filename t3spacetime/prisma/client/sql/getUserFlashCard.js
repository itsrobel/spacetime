"use strict"
const { makeTypedQueryFactory: $mkFactory } = require("../runtime/library")
exports.getUserFlashCard = /*#__PURE__*/ $mkFactory("SELECT * FROM FlashCard")
