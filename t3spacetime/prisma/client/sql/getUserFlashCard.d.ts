import * as $runtime from "../runtime/library"

/**
 */
export const getUserFlashCard: () => $runtime.TypedSql<getUserFlashCard.Parameters, getUserFlashCard.Result>

export namespace getUserFlashCard {
  export type Parameters = []
  export type Result = {
    id: string
    ownerId: string
    title: string
    content: string
  }
}
