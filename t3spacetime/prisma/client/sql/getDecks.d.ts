import * as $runtime from "../runtime/library"

/**
 * @param _0
 */
export const getDecks: (_0: string) => $runtime.TypedSql<getDecks.Parameters, getDecks.Result>

export namespace getDecks {
  export type Parameters = [_0: string]
  export type Result = {
    id: string
    name: string
    ownerId: string
    public: string
  }
}
