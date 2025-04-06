import { makeTypedQueryFactory as $mkFactory } from "../runtime/library"
export const createFlash = /*#__PURE__*/ $mkFactory("INSERT INTO FlashCard(id, ownerId, title, content)\nVALUES (UUID(), ? ,?, ?);")
