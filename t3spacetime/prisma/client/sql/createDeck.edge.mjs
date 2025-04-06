import { makeTypedQueryFactory as $mkFactory } from "../runtime/edge.js"
export const createDeck = /*#__PURE__*/ $mkFactory("INSERT INTO Deck (id, name , ownerId,  public)\nVALUES (UUID(), ?, ? , ?);")
