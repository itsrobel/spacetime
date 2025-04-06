import * as $runtime from "../runtime/library"

/**
 * @param _0
 * @param _1
 */
export const checkDeckAccess: (_0: string, _1: string) => $runtime.TypedSql<checkDeckAccess.Parameters, checkDeckAccess.Result>

export namespace checkDeckAccess {
  export type Parameters = [_0: string, _1: string]
  export type Result = {
    level: string
  }
}
