import { makeTypedQueryFactory as $mkFactory } from "../runtime/library"
export const updateFlash = /*#__PURE__*/ $mkFactory("UPDATE FlashCard\nSET title = ?, content = ?\nWHERE id = ?;")
