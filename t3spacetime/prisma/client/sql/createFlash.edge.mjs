import { makeTypedQueryFactory as $mkFactory } from "../runtime/edge.js"
export const createFlash = /*#__PURE__*/ $mkFactory("INSERT INTO FlashCard(id, ownerId, title, content)\nVALUES (UUID(), ? ,?, ?);")
