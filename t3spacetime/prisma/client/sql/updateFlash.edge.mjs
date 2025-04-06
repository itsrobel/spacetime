import { makeTypedQueryFactory as $mkFactory } from "../runtime/edge.js"
export const updateFlash = /*#__PURE__*/ $mkFactory("UPDATE FlashCard\nSET title = ?, content = ?\nWHERE id = ?;")
