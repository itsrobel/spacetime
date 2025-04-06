import * as $runtime from "../runtime/library"

/**
 * @param _0
 */
export const getDeckAccessUsers: (_0: string) => $runtime.TypedSql<getDeckAccessUsers.Parameters, getDeckAccessUsers.Result>

export namespace getDeckAccessUsers {
  export type Parameters = [_0: string]
  export type Result = {
    id: string
    name: string | null
    level: string
  }
}
