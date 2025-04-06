import * as $runtime from "../runtime/library"

/**
 * @param _0
 */
export const getFlashCardsInDesk: (_0: string) => $runtime.TypedSql<getFlashCardsInDesk.Parameters, getFlashCardsInDesk.Result>

export namespace getFlashCardsInDesk {
  export type Parameters = [_0: string]
  export type Result = {
    id: string
    ownerId: string
    title: string
    content: string
    progress: string
  }
}
