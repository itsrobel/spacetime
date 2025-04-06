
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Post
 * 
 */
export type Post = $Result.DefaultSelection<Prisma.$PostPayload>
/**
 * Model Account
 * 
 */
export type Account = $Result.DefaultSelection<Prisma.$AccountPayload>
/**
 * Model Session
 * 
 */
export type Session = $Result.DefaultSelection<Prisma.$SessionPayload>
/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model VerificationToken
 * 
 */
export type VerificationToken = $Result.DefaultSelection<Prisma.$VerificationTokenPayload>
/**
 * Model Deck
 * 
 */
export type Deck = $Result.DefaultSelection<Prisma.$DeckPayload>
/**
 * Model FlashCard
 * 
 */
export type FlashCard = $Result.DefaultSelection<Prisma.$FlashCardPayload>
/**
 * Model DeckFlashCard
 * 
 */
export type DeckFlashCard = $Result.DefaultSelection<Prisma.$DeckFlashCardPayload>
/**
 * Model DeckAccess
 * 
 */
export type DeckAccess = $Result.DefaultSelection<Prisma.$DeckAccessPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const AccessLevel: {
  PRIVATE: 'PRIVATE',
  VIEW: 'VIEW',
  EDIT: 'EDIT',
  ADMIN: 'ADMIN'
};

export type AccessLevel = (typeof AccessLevel)[keyof typeof AccessLevel]


export const FlashCardProgress: {
  MASTERY: 'MASTERY',
  INTERM: 'INTERM',
  BEGIN: 'BEGIN'
};

export type FlashCardProgress = (typeof FlashCardProgress)[keyof typeof FlashCardProgress]

}

export type AccessLevel = $Enums.AccessLevel

export const AccessLevel: typeof $Enums.AccessLevel

export type FlashCardProgress = $Enums.FlashCardProgress

export const FlashCardProgress: typeof $Enums.FlashCardProgress

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Posts
 * const posts = await prisma.post.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Posts
   * const posts = await prisma.post.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Executes a typed SQL query and returns a typed result
   * @example
   * ```
   * import { myQuery } from '@prisma/client/sql'
   * 
   * const result = await prisma.$queryRawTyped(myQuery())
   * ```
   */
  $queryRawTyped<T>(typedSql: runtime.TypedSql<unknown[], T>): Prisma.PrismaPromise<T[]>

  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.post`: Exposes CRUD operations for the **Post** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Posts
    * const posts = await prisma.post.findMany()
    * ```
    */
  get post(): Prisma.PostDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.account`: Exposes CRUD operations for the **Account** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Accounts
    * const accounts = await prisma.account.findMany()
    * ```
    */
  get account(): Prisma.AccountDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.session`: Exposes CRUD operations for the **Session** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Sessions
    * const sessions = await prisma.session.findMany()
    * ```
    */
  get session(): Prisma.SessionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.verificationToken`: Exposes CRUD operations for the **VerificationToken** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more VerificationTokens
    * const verificationTokens = await prisma.verificationToken.findMany()
    * ```
    */
  get verificationToken(): Prisma.VerificationTokenDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.deck`: Exposes CRUD operations for the **Deck** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Decks
    * const decks = await prisma.deck.findMany()
    * ```
    */
  get deck(): Prisma.DeckDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.flashCard`: Exposes CRUD operations for the **FlashCard** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more FlashCards
    * const flashCards = await prisma.flashCard.findMany()
    * ```
    */
  get flashCard(): Prisma.FlashCardDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.deckFlashCard`: Exposes CRUD operations for the **DeckFlashCard** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more DeckFlashCards
    * const deckFlashCards = await prisma.deckFlashCard.findMany()
    * ```
    */
  get deckFlashCard(): Prisma.DeckFlashCardDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.deckAccess`: Exposes CRUD operations for the **DeckAccess** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more DeckAccesses
    * const deckAccesses = await prisma.deckAccess.findMany()
    * ```
    */
  get deckAccess(): Prisma.DeckAccessDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.5.0
   * Query Engine version: 173f8d54f8d52e692c7e27e72a88314ec7aeff60
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Post: 'Post',
    Account: 'Account',
    Session: 'Session',
    User: 'User',
    VerificationToken: 'VerificationToken',
    Deck: 'Deck',
    FlashCard: 'FlashCard',
    DeckFlashCard: 'DeckFlashCard',
    DeckAccess: 'DeckAccess'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "post" | "account" | "session" | "user" | "verificationToken" | "deck" | "flashCard" | "deckFlashCard" | "deckAccess"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Post: {
        payload: Prisma.$PostPayload<ExtArgs>
        fields: Prisma.PostFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PostFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PostFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>
          }
          findFirst: {
            args: Prisma.PostFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PostFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>
          }
          findMany: {
            args: Prisma.PostFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>[]
          }
          create: {
            args: Prisma.PostCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>
          }
          createMany: {
            args: Prisma.PostCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.PostDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>
          }
          update: {
            args: Prisma.PostUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>
          }
          deleteMany: {
            args: Prisma.PostDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PostUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.PostUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>
          }
          aggregate: {
            args: Prisma.PostAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePost>
          }
          groupBy: {
            args: Prisma.PostGroupByArgs<ExtArgs>
            result: $Utils.Optional<PostGroupByOutputType>[]
          }
          count: {
            args: Prisma.PostCountArgs<ExtArgs>
            result: $Utils.Optional<PostCountAggregateOutputType> | number
          }
        }
      }
      Account: {
        payload: Prisma.$AccountPayload<ExtArgs>
        fields: Prisma.AccountFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AccountFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AccountFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          findFirst: {
            args: Prisma.AccountFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AccountFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          findMany: {
            args: Prisma.AccountFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>[]
          }
          create: {
            args: Prisma.AccountCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          createMany: {
            args: Prisma.AccountCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.AccountDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          update: {
            args: Prisma.AccountUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          deleteMany: {
            args: Prisma.AccountDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AccountUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.AccountUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          aggregate: {
            args: Prisma.AccountAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAccount>
          }
          groupBy: {
            args: Prisma.AccountGroupByArgs<ExtArgs>
            result: $Utils.Optional<AccountGroupByOutputType>[]
          }
          count: {
            args: Prisma.AccountCountArgs<ExtArgs>
            result: $Utils.Optional<AccountCountAggregateOutputType> | number
          }
        }
      }
      Session: {
        payload: Prisma.$SessionPayload<ExtArgs>
        fields: Prisma.SessionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SessionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SessionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          findFirst: {
            args: Prisma.SessionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SessionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          findMany: {
            args: Prisma.SessionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>[]
          }
          create: {
            args: Prisma.SessionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          createMany: {
            args: Prisma.SessionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.SessionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          update: {
            args: Prisma.SessionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          deleteMany: {
            args: Prisma.SessionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SessionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.SessionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          aggregate: {
            args: Prisma.SessionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSession>
          }
          groupBy: {
            args: Prisma.SessionGroupByArgs<ExtArgs>
            result: $Utils.Optional<SessionGroupByOutputType>[]
          }
          count: {
            args: Prisma.SessionCountArgs<ExtArgs>
            result: $Utils.Optional<SessionCountAggregateOutputType> | number
          }
        }
      }
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      VerificationToken: {
        payload: Prisma.$VerificationTokenPayload<ExtArgs>
        fields: Prisma.VerificationTokenFieldRefs
        operations: {
          findUnique: {
            args: Prisma.VerificationTokenFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.VerificationTokenFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>
          }
          findFirst: {
            args: Prisma.VerificationTokenFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.VerificationTokenFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>
          }
          findMany: {
            args: Prisma.VerificationTokenFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>[]
          }
          create: {
            args: Prisma.VerificationTokenCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>
          }
          createMany: {
            args: Prisma.VerificationTokenCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.VerificationTokenDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>
          }
          update: {
            args: Prisma.VerificationTokenUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>
          }
          deleteMany: {
            args: Prisma.VerificationTokenDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.VerificationTokenUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.VerificationTokenUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>
          }
          aggregate: {
            args: Prisma.VerificationTokenAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateVerificationToken>
          }
          groupBy: {
            args: Prisma.VerificationTokenGroupByArgs<ExtArgs>
            result: $Utils.Optional<VerificationTokenGroupByOutputType>[]
          }
          count: {
            args: Prisma.VerificationTokenCountArgs<ExtArgs>
            result: $Utils.Optional<VerificationTokenCountAggregateOutputType> | number
          }
        }
      }
      Deck: {
        payload: Prisma.$DeckPayload<ExtArgs>
        fields: Prisma.DeckFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DeckFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeckPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DeckFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeckPayload>
          }
          findFirst: {
            args: Prisma.DeckFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeckPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DeckFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeckPayload>
          }
          findMany: {
            args: Prisma.DeckFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeckPayload>[]
          }
          create: {
            args: Prisma.DeckCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeckPayload>
          }
          createMany: {
            args: Prisma.DeckCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.DeckDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeckPayload>
          }
          update: {
            args: Prisma.DeckUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeckPayload>
          }
          deleteMany: {
            args: Prisma.DeckDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DeckUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.DeckUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeckPayload>
          }
          aggregate: {
            args: Prisma.DeckAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDeck>
          }
          groupBy: {
            args: Prisma.DeckGroupByArgs<ExtArgs>
            result: $Utils.Optional<DeckGroupByOutputType>[]
          }
          count: {
            args: Prisma.DeckCountArgs<ExtArgs>
            result: $Utils.Optional<DeckCountAggregateOutputType> | number
          }
        }
      }
      FlashCard: {
        payload: Prisma.$FlashCardPayload<ExtArgs>
        fields: Prisma.FlashCardFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FlashCardFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FlashCardPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FlashCardFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FlashCardPayload>
          }
          findFirst: {
            args: Prisma.FlashCardFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FlashCardPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FlashCardFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FlashCardPayload>
          }
          findMany: {
            args: Prisma.FlashCardFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FlashCardPayload>[]
          }
          create: {
            args: Prisma.FlashCardCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FlashCardPayload>
          }
          createMany: {
            args: Prisma.FlashCardCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.FlashCardDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FlashCardPayload>
          }
          update: {
            args: Prisma.FlashCardUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FlashCardPayload>
          }
          deleteMany: {
            args: Prisma.FlashCardDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FlashCardUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.FlashCardUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FlashCardPayload>
          }
          aggregate: {
            args: Prisma.FlashCardAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFlashCard>
          }
          groupBy: {
            args: Prisma.FlashCardGroupByArgs<ExtArgs>
            result: $Utils.Optional<FlashCardGroupByOutputType>[]
          }
          count: {
            args: Prisma.FlashCardCountArgs<ExtArgs>
            result: $Utils.Optional<FlashCardCountAggregateOutputType> | number
          }
        }
      }
      DeckFlashCard: {
        payload: Prisma.$DeckFlashCardPayload<ExtArgs>
        fields: Prisma.DeckFlashCardFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DeckFlashCardFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeckFlashCardPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DeckFlashCardFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeckFlashCardPayload>
          }
          findFirst: {
            args: Prisma.DeckFlashCardFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeckFlashCardPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DeckFlashCardFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeckFlashCardPayload>
          }
          findMany: {
            args: Prisma.DeckFlashCardFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeckFlashCardPayload>[]
          }
          create: {
            args: Prisma.DeckFlashCardCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeckFlashCardPayload>
          }
          createMany: {
            args: Prisma.DeckFlashCardCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.DeckFlashCardDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeckFlashCardPayload>
          }
          update: {
            args: Prisma.DeckFlashCardUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeckFlashCardPayload>
          }
          deleteMany: {
            args: Prisma.DeckFlashCardDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DeckFlashCardUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.DeckFlashCardUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeckFlashCardPayload>
          }
          aggregate: {
            args: Prisma.DeckFlashCardAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDeckFlashCard>
          }
          groupBy: {
            args: Prisma.DeckFlashCardGroupByArgs<ExtArgs>
            result: $Utils.Optional<DeckFlashCardGroupByOutputType>[]
          }
          count: {
            args: Prisma.DeckFlashCardCountArgs<ExtArgs>
            result: $Utils.Optional<DeckFlashCardCountAggregateOutputType> | number
          }
        }
      }
      DeckAccess: {
        payload: Prisma.$DeckAccessPayload<ExtArgs>
        fields: Prisma.DeckAccessFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DeckAccessFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeckAccessPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DeckAccessFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeckAccessPayload>
          }
          findFirst: {
            args: Prisma.DeckAccessFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeckAccessPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DeckAccessFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeckAccessPayload>
          }
          findMany: {
            args: Prisma.DeckAccessFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeckAccessPayload>[]
          }
          create: {
            args: Prisma.DeckAccessCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeckAccessPayload>
          }
          createMany: {
            args: Prisma.DeckAccessCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.DeckAccessDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeckAccessPayload>
          }
          update: {
            args: Prisma.DeckAccessUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeckAccessPayload>
          }
          deleteMany: {
            args: Prisma.DeckAccessDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DeckAccessUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.DeckAccessUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeckAccessPayload>
          }
          aggregate: {
            args: Prisma.DeckAccessAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDeckAccess>
          }
          groupBy: {
            args: Prisma.DeckAccessGroupByArgs<ExtArgs>
            result: $Utils.Optional<DeckAccessGroupByOutputType>[]
          }
          count: {
            args: Prisma.DeckAccessCountArgs<ExtArgs>
            result: $Utils.Optional<DeckAccessCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRawTyped: {
          args: runtime.UnknownTypedSql,
          result: Prisma.JsonObject
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    post?: PostOmit
    account?: AccountOmit
    session?: SessionOmit
    user?: UserOmit
    verificationToken?: VerificationTokenOmit
    deck?: DeckOmit
    flashCard?: FlashCardOmit
    deckFlashCard?: DeckFlashCardOmit
    deckAccess?: DeckAccessOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    accounts: number
    sessions: number
    posts: number
    decks: number
    flashcards: number
    accesses: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    accounts?: boolean | UserCountOutputTypeCountAccountsArgs
    sessions?: boolean | UserCountOutputTypeCountSessionsArgs
    posts?: boolean | UserCountOutputTypeCountPostsArgs
    decks?: boolean | UserCountOutputTypeCountDecksArgs
    flashcards?: boolean | UserCountOutputTypeCountFlashcardsArgs
    accesses?: boolean | UserCountOutputTypeCountAccessesArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountAccountsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AccountWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountSessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SessionWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountPostsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PostWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountDecksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DeckWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountFlashcardsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FlashCardWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountAccessesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DeckAccessWhereInput
  }


  /**
   * Count Type DeckCountOutputType
   */

  export type DeckCountOutputType = {
    accesses: number
    flashcards: number
    deckflashcard: number
  }

  export type DeckCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    accesses?: boolean | DeckCountOutputTypeCountAccessesArgs
    flashcards?: boolean | DeckCountOutputTypeCountFlashcardsArgs
    deckflashcard?: boolean | DeckCountOutputTypeCountDeckflashcardArgs
  }

  // Custom InputTypes
  /**
   * DeckCountOutputType without action
   */
  export type DeckCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeckCountOutputType
     */
    select?: DeckCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * DeckCountOutputType without action
   */
  export type DeckCountOutputTypeCountAccessesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DeckAccessWhereInput
  }

  /**
   * DeckCountOutputType without action
   */
  export type DeckCountOutputTypeCountFlashcardsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FlashCardWhereInput
  }

  /**
   * DeckCountOutputType without action
   */
  export type DeckCountOutputTypeCountDeckflashcardArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DeckFlashCardWhereInput
  }


  /**
   * Count Type FlashCardCountOutputType
   */

  export type FlashCardCountOutputType = {
    decks: number
    deckflashcard: number
  }

  export type FlashCardCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    decks?: boolean | FlashCardCountOutputTypeCountDecksArgs
    deckflashcard?: boolean | FlashCardCountOutputTypeCountDeckflashcardArgs
  }

  // Custom InputTypes
  /**
   * FlashCardCountOutputType without action
   */
  export type FlashCardCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FlashCardCountOutputType
     */
    select?: FlashCardCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * FlashCardCountOutputType without action
   */
  export type FlashCardCountOutputTypeCountDecksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DeckWhereInput
  }

  /**
   * FlashCardCountOutputType without action
   */
  export type FlashCardCountOutputTypeCountDeckflashcardArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DeckFlashCardWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Post
   */

  export type AggregatePost = {
    _count: PostCountAggregateOutputType | null
    _avg: PostAvgAggregateOutputType | null
    _sum: PostSumAggregateOutputType | null
    _min: PostMinAggregateOutputType | null
    _max: PostMaxAggregateOutputType | null
  }

  export type PostAvgAggregateOutputType = {
    id: number | null
  }

  export type PostSumAggregateOutputType = {
    id: number | null
  }

  export type PostMinAggregateOutputType = {
    id: number | null
    name: string | null
    createdAt: Date | null
    updatedAt: Date | null
    createdById: string | null
  }

  export type PostMaxAggregateOutputType = {
    id: number | null
    name: string | null
    createdAt: Date | null
    updatedAt: Date | null
    createdById: string | null
  }

  export type PostCountAggregateOutputType = {
    id: number
    name: number
    createdAt: number
    updatedAt: number
    createdById: number
    _all: number
  }


  export type PostAvgAggregateInputType = {
    id?: true
  }

  export type PostSumAggregateInputType = {
    id?: true
  }

  export type PostMinAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    updatedAt?: true
    createdById?: true
  }

  export type PostMaxAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    updatedAt?: true
    createdById?: true
  }

  export type PostCountAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    updatedAt?: true
    createdById?: true
    _all?: true
  }

  export type PostAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Post to aggregate.
     */
    where?: PostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Posts to fetch.
     */
    orderBy?: PostOrderByWithRelationInput | PostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Posts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Posts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Posts
    **/
    _count?: true | PostCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PostAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PostSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PostMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PostMaxAggregateInputType
  }

  export type GetPostAggregateType<T extends PostAggregateArgs> = {
        [P in keyof T & keyof AggregatePost]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePost[P]>
      : GetScalarType<T[P], AggregatePost[P]>
  }




  export type PostGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PostWhereInput
    orderBy?: PostOrderByWithAggregationInput | PostOrderByWithAggregationInput[]
    by: PostScalarFieldEnum[] | PostScalarFieldEnum
    having?: PostScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PostCountAggregateInputType | true
    _avg?: PostAvgAggregateInputType
    _sum?: PostSumAggregateInputType
    _min?: PostMinAggregateInputType
    _max?: PostMaxAggregateInputType
  }

  export type PostGroupByOutputType = {
    id: number
    name: string
    createdAt: Date
    updatedAt: Date
    createdById: string
    _count: PostCountAggregateOutputType | null
    _avg: PostAvgAggregateOutputType | null
    _sum: PostSumAggregateOutputType | null
    _min: PostMinAggregateOutputType | null
    _max: PostMaxAggregateOutputType | null
  }

  type GetPostGroupByPayload<T extends PostGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PostGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PostGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PostGroupByOutputType[P]>
            : GetScalarType<T[P], PostGroupByOutputType[P]>
        }
      >
    >


  export type PostSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    createdById?: boolean
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["post"]>



  export type PostSelectScalar = {
    id?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    createdById?: boolean
  }

  export type PostOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "createdAt" | "updatedAt" | "createdById", ExtArgs["result"]["post"]>
  export type PostInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $PostPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Post"
    objects: {
      createdBy: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      createdAt: Date
      updatedAt: Date
      createdById: string
    }, ExtArgs["result"]["post"]>
    composites: {}
  }

  type PostGetPayload<S extends boolean | null | undefined | PostDefaultArgs> = $Result.GetResult<Prisma.$PostPayload, S>

  type PostCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PostFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PostCountAggregateInputType | true
    }

  export interface PostDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Post'], meta: { name: 'Post' } }
    /**
     * Find zero or one Post that matches the filter.
     * @param {PostFindUniqueArgs} args - Arguments to find a Post
     * @example
     * // Get one Post
     * const post = await prisma.post.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PostFindUniqueArgs>(args: SelectSubset<T, PostFindUniqueArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Post that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PostFindUniqueOrThrowArgs} args - Arguments to find a Post
     * @example
     * // Get one Post
     * const post = await prisma.post.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PostFindUniqueOrThrowArgs>(args: SelectSubset<T, PostFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Post that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostFindFirstArgs} args - Arguments to find a Post
     * @example
     * // Get one Post
     * const post = await prisma.post.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PostFindFirstArgs>(args?: SelectSubset<T, PostFindFirstArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Post that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostFindFirstOrThrowArgs} args - Arguments to find a Post
     * @example
     * // Get one Post
     * const post = await prisma.post.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PostFindFirstOrThrowArgs>(args?: SelectSubset<T, PostFindFirstOrThrowArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Posts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Posts
     * const posts = await prisma.post.findMany()
     * 
     * // Get first 10 Posts
     * const posts = await prisma.post.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const postWithIdOnly = await prisma.post.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PostFindManyArgs>(args?: SelectSubset<T, PostFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Post.
     * @param {PostCreateArgs} args - Arguments to create a Post.
     * @example
     * // Create one Post
     * const Post = await prisma.post.create({
     *   data: {
     *     // ... data to create a Post
     *   }
     * })
     * 
     */
    create<T extends PostCreateArgs>(args: SelectSubset<T, PostCreateArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Posts.
     * @param {PostCreateManyArgs} args - Arguments to create many Posts.
     * @example
     * // Create many Posts
     * const post = await prisma.post.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PostCreateManyArgs>(args?: SelectSubset<T, PostCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Post.
     * @param {PostDeleteArgs} args - Arguments to delete one Post.
     * @example
     * // Delete one Post
     * const Post = await prisma.post.delete({
     *   where: {
     *     // ... filter to delete one Post
     *   }
     * })
     * 
     */
    delete<T extends PostDeleteArgs>(args: SelectSubset<T, PostDeleteArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Post.
     * @param {PostUpdateArgs} args - Arguments to update one Post.
     * @example
     * // Update one Post
     * const post = await prisma.post.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PostUpdateArgs>(args: SelectSubset<T, PostUpdateArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Posts.
     * @param {PostDeleteManyArgs} args - Arguments to filter Posts to delete.
     * @example
     * // Delete a few Posts
     * const { count } = await prisma.post.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PostDeleteManyArgs>(args?: SelectSubset<T, PostDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Posts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Posts
     * const post = await prisma.post.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PostUpdateManyArgs>(args: SelectSubset<T, PostUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Post.
     * @param {PostUpsertArgs} args - Arguments to update or create a Post.
     * @example
     * // Update or create a Post
     * const post = await prisma.post.upsert({
     *   create: {
     *     // ... data to create a Post
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Post we want to update
     *   }
     * })
     */
    upsert<T extends PostUpsertArgs>(args: SelectSubset<T, PostUpsertArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Posts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostCountArgs} args - Arguments to filter Posts to count.
     * @example
     * // Count the number of Posts
     * const count = await prisma.post.count({
     *   where: {
     *     // ... the filter for the Posts we want to count
     *   }
     * })
    **/
    count<T extends PostCountArgs>(
      args?: Subset<T, PostCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PostCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Post.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PostAggregateArgs>(args: Subset<T, PostAggregateArgs>): Prisma.PrismaPromise<GetPostAggregateType<T>>

    /**
     * Group by Post.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PostGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PostGroupByArgs['orderBy'] }
        : { orderBy?: PostGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PostGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPostGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Post model
   */
  readonly fields: PostFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Post.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PostClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    createdBy<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Post model
   */ 
  interface PostFieldRefs {
    readonly id: FieldRef<"Post", 'Int'>
    readonly name: FieldRef<"Post", 'String'>
    readonly createdAt: FieldRef<"Post", 'DateTime'>
    readonly updatedAt: FieldRef<"Post", 'DateTime'>
    readonly createdById: FieldRef<"Post", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Post findUnique
   */
  export type PostFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * Filter, which Post to fetch.
     */
    where: PostWhereUniqueInput
  }

  /**
   * Post findUniqueOrThrow
   */
  export type PostFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * Filter, which Post to fetch.
     */
    where: PostWhereUniqueInput
  }

  /**
   * Post findFirst
   */
  export type PostFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * Filter, which Post to fetch.
     */
    where?: PostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Posts to fetch.
     */
    orderBy?: PostOrderByWithRelationInput | PostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Posts.
     */
    cursor?: PostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Posts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Posts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Posts.
     */
    distinct?: PostScalarFieldEnum | PostScalarFieldEnum[]
  }

  /**
   * Post findFirstOrThrow
   */
  export type PostFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * Filter, which Post to fetch.
     */
    where?: PostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Posts to fetch.
     */
    orderBy?: PostOrderByWithRelationInput | PostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Posts.
     */
    cursor?: PostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Posts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Posts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Posts.
     */
    distinct?: PostScalarFieldEnum | PostScalarFieldEnum[]
  }

  /**
   * Post findMany
   */
  export type PostFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * Filter, which Posts to fetch.
     */
    where?: PostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Posts to fetch.
     */
    orderBy?: PostOrderByWithRelationInput | PostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Posts.
     */
    cursor?: PostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Posts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Posts.
     */
    skip?: number
    distinct?: PostScalarFieldEnum | PostScalarFieldEnum[]
  }

  /**
   * Post create
   */
  export type PostCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * The data needed to create a Post.
     */
    data: XOR<PostCreateInput, PostUncheckedCreateInput>
  }

  /**
   * Post createMany
   */
  export type PostCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Posts.
     */
    data: PostCreateManyInput | PostCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Post update
   */
  export type PostUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * The data needed to update a Post.
     */
    data: XOR<PostUpdateInput, PostUncheckedUpdateInput>
    /**
     * Choose, which Post to update.
     */
    where: PostWhereUniqueInput
  }

  /**
   * Post updateMany
   */
  export type PostUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Posts.
     */
    data: XOR<PostUpdateManyMutationInput, PostUncheckedUpdateManyInput>
    /**
     * Filter which Posts to update
     */
    where?: PostWhereInput
    /**
     * Limit how many Posts to update.
     */
    limit?: number
  }

  /**
   * Post upsert
   */
  export type PostUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * The filter to search for the Post to update in case it exists.
     */
    where: PostWhereUniqueInput
    /**
     * In case the Post found by the `where` argument doesn't exist, create a new Post with this data.
     */
    create: XOR<PostCreateInput, PostUncheckedCreateInput>
    /**
     * In case the Post was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PostUpdateInput, PostUncheckedUpdateInput>
  }

  /**
   * Post delete
   */
  export type PostDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * Filter which Post to delete.
     */
    where: PostWhereUniqueInput
  }

  /**
   * Post deleteMany
   */
  export type PostDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Posts to delete
     */
    where?: PostWhereInput
    /**
     * Limit how many Posts to delete.
     */
    limit?: number
  }

  /**
   * Post without action
   */
  export type PostDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
  }


  /**
   * Model Account
   */

  export type AggregateAccount = {
    _count: AccountCountAggregateOutputType | null
    _avg: AccountAvgAggregateOutputType | null
    _sum: AccountSumAggregateOutputType | null
    _min: AccountMinAggregateOutputType | null
    _max: AccountMaxAggregateOutputType | null
  }

  export type AccountAvgAggregateOutputType = {
    expires_at: number | null
    refresh_token_expires_in: number | null
  }

  export type AccountSumAggregateOutputType = {
    expires_at: number | null
    refresh_token_expires_in: number | null
  }

  export type AccountMinAggregateOutputType = {
    id: string | null
    userId: string | null
    type: string | null
    provider: string | null
    providerAccountId: string | null
    refresh_token: string | null
    access_token: string | null
    expires_at: number | null
    token_type: string | null
    scope: string | null
    id_token: string | null
    session_state: string | null
    refresh_token_expires_in: number | null
  }

  export type AccountMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    type: string | null
    provider: string | null
    providerAccountId: string | null
    refresh_token: string | null
    access_token: string | null
    expires_at: number | null
    token_type: string | null
    scope: string | null
    id_token: string | null
    session_state: string | null
    refresh_token_expires_in: number | null
  }

  export type AccountCountAggregateOutputType = {
    id: number
    userId: number
    type: number
    provider: number
    providerAccountId: number
    refresh_token: number
    access_token: number
    expires_at: number
    token_type: number
    scope: number
    id_token: number
    session_state: number
    refresh_token_expires_in: number
    _all: number
  }


  export type AccountAvgAggregateInputType = {
    expires_at?: true
    refresh_token_expires_in?: true
  }

  export type AccountSumAggregateInputType = {
    expires_at?: true
    refresh_token_expires_in?: true
  }

  export type AccountMinAggregateInputType = {
    id?: true
    userId?: true
    type?: true
    provider?: true
    providerAccountId?: true
    refresh_token?: true
    access_token?: true
    expires_at?: true
    token_type?: true
    scope?: true
    id_token?: true
    session_state?: true
    refresh_token_expires_in?: true
  }

  export type AccountMaxAggregateInputType = {
    id?: true
    userId?: true
    type?: true
    provider?: true
    providerAccountId?: true
    refresh_token?: true
    access_token?: true
    expires_at?: true
    token_type?: true
    scope?: true
    id_token?: true
    session_state?: true
    refresh_token_expires_in?: true
  }

  export type AccountCountAggregateInputType = {
    id?: true
    userId?: true
    type?: true
    provider?: true
    providerAccountId?: true
    refresh_token?: true
    access_token?: true
    expires_at?: true
    token_type?: true
    scope?: true
    id_token?: true
    session_state?: true
    refresh_token_expires_in?: true
    _all?: true
  }

  export type AccountAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Account to aggregate.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Accounts
    **/
    _count?: true | AccountCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AccountAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AccountSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AccountMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AccountMaxAggregateInputType
  }

  export type GetAccountAggregateType<T extends AccountAggregateArgs> = {
        [P in keyof T & keyof AggregateAccount]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAccount[P]>
      : GetScalarType<T[P], AggregateAccount[P]>
  }




  export type AccountGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AccountWhereInput
    orderBy?: AccountOrderByWithAggregationInput | AccountOrderByWithAggregationInput[]
    by: AccountScalarFieldEnum[] | AccountScalarFieldEnum
    having?: AccountScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AccountCountAggregateInputType | true
    _avg?: AccountAvgAggregateInputType
    _sum?: AccountSumAggregateInputType
    _min?: AccountMinAggregateInputType
    _max?: AccountMaxAggregateInputType
  }

  export type AccountGroupByOutputType = {
    id: string
    userId: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token: string | null
    access_token: string | null
    expires_at: number | null
    token_type: string | null
    scope: string | null
    id_token: string | null
    session_state: string | null
    refresh_token_expires_in: number | null
    _count: AccountCountAggregateOutputType | null
    _avg: AccountAvgAggregateOutputType | null
    _sum: AccountSumAggregateOutputType | null
    _min: AccountMinAggregateOutputType | null
    _max: AccountMaxAggregateOutputType | null
  }

  type GetAccountGroupByPayload<T extends AccountGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AccountGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AccountGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AccountGroupByOutputType[P]>
            : GetScalarType<T[P], AccountGroupByOutputType[P]>
        }
      >
    >


  export type AccountSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    type?: boolean
    provider?: boolean
    providerAccountId?: boolean
    refresh_token?: boolean
    access_token?: boolean
    expires_at?: boolean
    token_type?: boolean
    scope?: boolean
    id_token?: boolean
    session_state?: boolean
    refresh_token_expires_in?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["account"]>



  export type AccountSelectScalar = {
    id?: boolean
    userId?: boolean
    type?: boolean
    provider?: boolean
    providerAccountId?: boolean
    refresh_token?: boolean
    access_token?: boolean
    expires_at?: boolean
    token_type?: boolean
    scope?: boolean
    id_token?: boolean
    session_state?: boolean
    refresh_token_expires_in?: boolean
  }

  export type AccountOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "type" | "provider" | "providerAccountId" | "refresh_token" | "access_token" | "expires_at" | "token_type" | "scope" | "id_token" | "session_state" | "refresh_token_expires_in", ExtArgs["result"]["account"]>
  export type AccountInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $AccountPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Account"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      type: string
      provider: string
      providerAccountId: string
      refresh_token: string | null
      access_token: string | null
      expires_at: number | null
      token_type: string | null
      scope: string | null
      id_token: string | null
      session_state: string | null
      refresh_token_expires_in: number | null
    }, ExtArgs["result"]["account"]>
    composites: {}
  }

  type AccountGetPayload<S extends boolean | null | undefined | AccountDefaultArgs> = $Result.GetResult<Prisma.$AccountPayload, S>

  type AccountCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AccountFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AccountCountAggregateInputType | true
    }

  export interface AccountDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Account'], meta: { name: 'Account' } }
    /**
     * Find zero or one Account that matches the filter.
     * @param {AccountFindUniqueArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AccountFindUniqueArgs>(args: SelectSubset<T, AccountFindUniqueArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Account that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AccountFindUniqueOrThrowArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AccountFindUniqueOrThrowArgs>(args: SelectSubset<T, AccountFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Account that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountFindFirstArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AccountFindFirstArgs>(args?: SelectSubset<T, AccountFindFirstArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Account that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountFindFirstOrThrowArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AccountFindFirstOrThrowArgs>(args?: SelectSubset<T, AccountFindFirstOrThrowArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Accounts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Accounts
     * const accounts = await prisma.account.findMany()
     * 
     * // Get first 10 Accounts
     * const accounts = await prisma.account.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const accountWithIdOnly = await prisma.account.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AccountFindManyArgs>(args?: SelectSubset<T, AccountFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Account.
     * @param {AccountCreateArgs} args - Arguments to create a Account.
     * @example
     * // Create one Account
     * const Account = await prisma.account.create({
     *   data: {
     *     // ... data to create a Account
     *   }
     * })
     * 
     */
    create<T extends AccountCreateArgs>(args: SelectSubset<T, AccountCreateArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Accounts.
     * @param {AccountCreateManyArgs} args - Arguments to create many Accounts.
     * @example
     * // Create many Accounts
     * const account = await prisma.account.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AccountCreateManyArgs>(args?: SelectSubset<T, AccountCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Account.
     * @param {AccountDeleteArgs} args - Arguments to delete one Account.
     * @example
     * // Delete one Account
     * const Account = await prisma.account.delete({
     *   where: {
     *     // ... filter to delete one Account
     *   }
     * })
     * 
     */
    delete<T extends AccountDeleteArgs>(args: SelectSubset<T, AccountDeleteArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Account.
     * @param {AccountUpdateArgs} args - Arguments to update one Account.
     * @example
     * // Update one Account
     * const account = await prisma.account.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AccountUpdateArgs>(args: SelectSubset<T, AccountUpdateArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Accounts.
     * @param {AccountDeleteManyArgs} args - Arguments to filter Accounts to delete.
     * @example
     * // Delete a few Accounts
     * const { count } = await prisma.account.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AccountDeleteManyArgs>(args?: SelectSubset<T, AccountDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Accounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Accounts
     * const account = await prisma.account.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AccountUpdateManyArgs>(args: SelectSubset<T, AccountUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Account.
     * @param {AccountUpsertArgs} args - Arguments to update or create a Account.
     * @example
     * // Update or create a Account
     * const account = await prisma.account.upsert({
     *   create: {
     *     // ... data to create a Account
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Account we want to update
     *   }
     * })
     */
    upsert<T extends AccountUpsertArgs>(args: SelectSubset<T, AccountUpsertArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Accounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountCountArgs} args - Arguments to filter Accounts to count.
     * @example
     * // Count the number of Accounts
     * const count = await prisma.account.count({
     *   where: {
     *     // ... the filter for the Accounts we want to count
     *   }
     * })
    **/
    count<T extends AccountCountArgs>(
      args?: Subset<T, AccountCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AccountCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Account.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AccountAggregateArgs>(args: Subset<T, AccountAggregateArgs>): Prisma.PrismaPromise<GetAccountAggregateType<T>>

    /**
     * Group by Account.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AccountGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AccountGroupByArgs['orderBy'] }
        : { orderBy?: AccountGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AccountGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAccountGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Account model
   */
  readonly fields: AccountFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Account.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AccountClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Account model
   */ 
  interface AccountFieldRefs {
    readonly id: FieldRef<"Account", 'String'>
    readonly userId: FieldRef<"Account", 'String'>
    readonly type: FieldRef<"Account", 'String'>
    readonly provider: FieldRef<"Account", 'String'>
    readonly providerAccountId: FieldRef<"Account", 'String'>
    readonly refresh_token: FieldRef<"Account", 'String'>
    readonly access_token: FieldRef<"Account", 'String'>
    readonly expires_at: FieldRef<"Account", 'Int'>
    readonly token_type: FieldRef<"Account", 'String'>
    readonly scope: FieldRef<"Account", 'String'>
    readonly id_token: FieldRef<"Account", 'String'>
    readonly session_state: FieldRef<"Account", 'String'>
    readonly refresh_token_expires_in: FieldRef<"Account", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Account findUnique
   */
  export type AccountFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account findUniqueOrThrow
   */
  export type AccountFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account findFirst
   */
  export type AccountFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Accounts.
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Accounts.
     */
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * Account findFirstOrThrow
   */
  export type AccountFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Accounts.
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Accounts.
     */
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * Account findMany
   */
  export type AccountFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Accounts to fetch.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Accounts.
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * Account create
   */
  export type AccountCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * The data needed to create a Account.
     */
    data: XOR<AccountCreateInput, AccountUncheckedCreateInput>
  }

  /**
   * Account createMany
   */
  export type AccountCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Accounts.
     */
    data: AccountCreateManyInput | AccountCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Account update
   */
  export type AccountUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * The data needed to update a Account.
     */
    data: XOR<AccountUpdateInput, AccountUncheckedUpdateInput>
    /**
     * Choose, which Account to update.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account updateMany
   */
  export type AccountUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Accounts.
     */
    data: XOR<AccountUpdateManyMutationInput, AccountUncheckedUpdateManyInput>
    /**
     * Filter which Accounts to update
     */
    where?: AccountWhereInput
    /**
     * Limit how many Accounts to update.
     */
    limit?: number
  }

  /**
   * Account upsert
   */
  export type AccountUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * The filter to search for the Account to update in case it exists.
     */
    where: AccountWhereUniqueInput
    /**
     * In case the Account found by the `where` argument doesn't exist, create a new Account with this data.
     */
    create: XOR<AccountCreateInput, AccountUncheckedCreateInput>
    /**
     * In case the Account was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AccountUpdateInput, AccountUncheckedUpdateInput>
  }

  /**
   * Account delete
   */
  export type AccountDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter which Account to delete.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account deleteMany
   */
  export type AccountDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Accounts to delete
     */
    where?: AccountWhereInput
    /**
     * Limit how many Accounts to delete.
     */
    limit?: number
  }

  /**
   * Account without action
   */
  export type AccountDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
  }


  /**
   * Model Session
   */

  export type AggregateSession = {
    _count: SessionCountAggregateOutputType | null
    _min: SessionMinAggregateOutputType | null
    _max: SessionMaxAggregateOutputType | null
  }

  export type SessionMinAggregateOutputType = {
    id: string | null
    sessionToken: string | null
    userId: string | null
    expires: Date | null
  }

  export type SessionMaxAggregateOutputType = {
    id: string | null
    sessionToken: string | null
    userId: string | null
    expires: Date | null
  }

  export type SessionCountAggregateOutputType = {
    id: number
    sessionToken: number
    userId: number
    expires: number
    _all: number
  }


  export type SessionMinAggregateInputType = {
    id?: true
    sessionToken?: true
    userId?: true
    expires?: true
  }

  export type SessionMaxAggregateInputType = {
    id?: true
    sessionToken?: true
    userId?: true
    expires?: true
  }

  export type SessionCountAggregateInputType = {
    id?: true
    sessionToken?: true
    userId?: true
    expires?: true
    _all?: true
  }

  export type SessionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Session to aggregate.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Sessions
    **/
    _count?: true | SessionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SessionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SessionMaxAggregateInputType
  }

  export type GetSessionAggregateType<T extends SessionAggregateArgs> = {
        [P in keyof T & keyof AggregateSession]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSession[P]>
      : GetScalarType<T[P], AggregateSession[P]>
  }




  export type SessionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SessionWhereInput
    orderBy?: SessionOrderByWithAggregationInput | SessionOrderByWithAggregationInput[]
    by: SessionScalarFieldEnum[] | SessionScalarFieldEnum
    having?: SessionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SessionCountAggregateInputType | true
    _min?: SessionMinAggregateInputType
    _max?: SessionMaxAggregateInputType
  }

  export type SessionGroupByOutputType = {
    id: string
    sessionToken: string
    userId: string
    expires: Date
    _count: SessionCountAggregateOutputType | null
    _min: SessionMinAggregateOutputType | null
    _max: SessionMaxAggregateOutputType | null
  }

  type GetSessionGroupByPayload<T extends SessionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SessionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SessionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SessionGroupByOutputType[P]>
            : GetScalarType<T[P], SessionGroupByOutputType[P]>
        }
      >
    >


  export type SessionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sessionToken?: boolean
    userId?: boolean
    expires?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["session"]>



  export type SessionSelectScalar = {
    id?: boolean
    sessionToken?: boolean
    userId?: boolean
    expires?: boolean
  }

  export type SessionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "sessionToken" | "userId" | "expires", ExtArgs["result"]["session"]>
  export type SessionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $SessionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Session"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      sessionToken: string
      userId: string
      expires: Date
    }, ExtArgs["result"]["session"]>
    composites: {}
  }

  type SessionGetPayload<S extends boolean | null | undefined | SessionDefaultArgs> = $Result.GetResult<Prisma.$SessionPayload, S>

  type SessionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SessionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SessionCountAggregateInputType | true
    }

  export interface SessionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Session'], meta: { name: 'Session' } }
    /**
     * Find zero or one Session that matches the filter.
     * @param {SessionFindUniqueArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SessionFindUniqueArgs>(args: SelectSubset<T, SessionFindUniqueArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Session that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SessionFindUniqueOrThrowArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SessionFindUniqueOrThrowArgs>(args: SelectSubset<T, SessionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Session that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindFirstArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SessionFindFirstArgs>(args?: SelectSubset<T, SessionFindFirstArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Session that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindFirstOrThrowArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SessionFindFirstOrThrowArgs>(args?: SelectSubset<T, SessionFindFirstOrThrowArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Sessions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Sessions
     * const sessions = await prisma.session.findMany()
     * 
     * // Get first 10 Sessions
     * const sessions = await prisma.session.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const sessionWithIdOnly = await prisma.session.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SessionFindManyArgs>(args?: SelectSubset<T, SessionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Session.
     * @param {SessionCreateArgs} args - Arguments to create a Session.
     * @example
     * // Create one Session
     * const Session = await prisma.session.create({
     *   data: {
     *     // ... data to create a Session
     *   }
     * })
     * 
     */
    create<T extends SessionCreateArgs>(args: SelectSubset<T, SessionCreateArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Sessions.
     * @param {SessionCreateManyArgs} args - Arguments to create many Sessions.
     * @example
     * // Create many Sessions
     * const session = await prisma.session.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SessionCreateManyArgs>(args?: SelectSubset<T, SessionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Session.
     * @param {SessionDeleteArgs} args - Arguments to delete one Session.
     * @example
     * // Delete one Session
     * const Session = await prisma.session.delete({
     *   where: {
     *     // ... filter to delete one Session
     *   }
     * })
     * 
     */
    delete<T extends SessionDeleteArgs>(args: SelectSubset<T, SessionDeleteArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Session.
     * @param {SessionUpdateArgs} args - Arguments to update one Session.
     * @example
     * // Update one Session
     * const session = await prisma.session.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SessionUpdateArgs>(args: SelectSubset<T, SessionUpdateArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Sessions.
     * @param {SessionDeleteManyArgs} args - Arguments to filter Sessions to delete.
     * @example
     * // Delete a few Sessions
     * const { count } = await prisma.session.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SessionDeleteManyArgs>(args?: SelectSubset<T, SessionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Sessions
     * const session = await prisma.session.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SessionUpdateManyArgs>(args: SelectSubset<T, SessionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Session.
     * @param {SessionUpsertArgs} args - Arguments to update or create a Session.
     * @example
     * // Update or create a Session
     * const session = await prisma.session.upsert({
     *   create: {
     *     // ... data to create a Session
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Session we want to update
     *   }
     * })
     */
    upsert<T extends SessionUpsertArgs>(args: SelectSubset<T, SessionUpsertArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Sessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionCountArgs} args - Arguments to filter Sessions to count.
     * @example
     * // Count the number of Sessions
     * const count = await prisma.session.count({
     *   where: {
     *     // ... the filter for the Sessions we want to count
     *   }
     * })
    **/
    count<T extends SessionCountArgs>(
      args?: Subset<T, SessionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SessionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Session.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SessionAggregateArgs>(args: Subset<T, SessionAggregateArgs>): Prisma.PrismaPromise<GetSessionAggregateType<T>>

    /**
     * Group by Session.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SessionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SessionGroupByArgs['orderBy'] }
        : { orderBy?: SessionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SessionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSessionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Session model
   */
  readonly fields: SessionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Session.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SessionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Session model
   */ 
  interface SessionFieldRefs {
    readonly id: FieldRef<"Session", 'String'>
    readonly sessionToken: FieldRef<"Session", 'String'>
    readonly userId: FieldRef<"Session", 'String'>
    readonly expires: FieldRef<"Session", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Session findUnique
   */
  export type SessionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session findUniqueOrThrow
   */
  export type SessionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session findFirst
   */
  export type SessionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sessions.
     */
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * Session findFirstOrThrow
   */
  export type SessionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sessions.
     */
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * Session findMany
   */
  export type SessionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Sessions to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * Session create
   */
  export type SessionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * The data needed to create a Session.
     */
    data: XOR<SessionCreateInput, SessionUncheckedCreateInput>
  }

  /**
   * Session createMany
   */
  export type SessionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Sessions.
     */
    data: SessionCreateManyInput | SessionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Session update
   */
  export type SessionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * The data needed to update a Session.
     */
    data: XOR<SessionUpdateInput, SessionUncheckedUpdateInput>
    /**
     * Choose, which Session to update.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session updateMany
   */
  export type SessionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Sessions.
     */
    data: XOR<SessionUpdateManyMutationInput, SessionUncheckedUpdateManyInput>
    /**
     * Filter which Sessions to update
     */
    where?: SessionWhereInput
    /**
     * Limit how many Sessions to update.
     */
    limit?: number
  }

  /**
   * Session upsert
   */
  export type SessionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * The filter to search for the Session to update in case it exists.
     */
    where: SessionWhereUniqueInput
    /**
     * In case the Session found by the `where` argument doesn't exist, create a new Session with this data.
     */
    create: XOR<SessionCreateInput, SessionUncheckedCreateInput>
    /**
     * In case the Session was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SessionUpdateInput, SessionUncheckedUpdateInput>
  }

  /**
   * Session delete
   */
  export type SessionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter which Session to delete.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session deleteMany
   */
  export type SessionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Sessions to delete
     */
    where?: SessionWhereInput
    /**
     * Limit how many Sessions to delete.
     */
    limit?: number
  }

  /**
   * Session without action
   */
  export type SessionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
  }


  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    emailVerified: Date | null
    image: string | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    emailVerified: Date | null
    image: string | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    name: number
    email: number
    emailVerified: number
    image: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    emailVerified?: true
    image?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    emailVerified?: true
    image?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    emailVerified?: true
    image?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    name: string | null
    email: string | null
    emailVerified: Date | null
    image: string | null
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    emailVerified?: boolean
    image?: boolean
    accounts?: boolean | User$accountsArgs<ExtArgs>
    sessions?: boolean | User$sessionsArgs<ExtArgs>
    posts?: boolean | User$postsArgs<ExtArgs>
    decks?: boolean | User$decksArgs<ExtArgs>
    flashcards?: boolean | User$flashcardsArgs<ExtArgs>
    accesses?: boolean | User$accessesArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>



  export type UserSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    emailVerified?: boolean
    image?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "emailVerified" | "image", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    accounts?: boolean | User$accountsArgs<ExtArgs>
    sessions?: boolean | User$sessionsArgs<ExtArgs>
    posts?: boolean | User$postsArgs<ExtArgs>
    decks?: boolean | User$decksArgs<ExtArgs>
    flashcards?: boolean | User$flashcardsArgs<ExtArgs>
    accesses?: boolean | User$accessesArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      accounts: Prisma.$AccountPayload<ExtArgs>[]
      sessions: Prisma.$SessionPayload<ExtArgs>[]
      posts: Prisma.$PostPayload<ExtArgs>[]
      decks: Prisma.$DeckPayload<ExtArgs>[]
      flashcards: Prisma.$FlashCardPayload<ExtArgs>[]
      accesses: Prisma.$DeckAccessPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string | null
      email: string | null
      emailVerified: Date | null
      image: string | null
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    accounts<T extends User$accountsArgs<ExtArgs> = {}>(args?: Subset<T, User$accountsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    sessions<T extends User$sessionsArgs<ExtArgs> = {}>(args?: Subset<T, User$sessionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    posts<T extends User$postsArgs<ExtArgs> = {}>(args?: Subset<T, User$postsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    decks<T extends User$decksArgs<ExtArgs> = {}>(args?: Subset<T, User$decksArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DeckPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    flashcards<T extends User$flashcardsArgs<ExtArgs> = {}>(args?: Subset<T, User$flashcardsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FlashCardPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    accesses<T extends User$accessesArgs<ExtArgs> = {}>(args?: Subset<T, User$accessesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DeckAccessPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */ 
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly emailVerified: FieldRef<"User", 'DateTime'>
    readonly image: FieldRef<"User", 'String'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data?: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.accounts
   */
  export type User$accountsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    where?: AccountWhereInput
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    cursor?: AccountWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * User.sessions
   */
  export type User$sessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    where?: SessionWhereInput
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    cursor?: SessionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * User.posts
   */
  export type User$postsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    where?: PostWhereInput
    orderBy?: PostOrderByWithRelationInput | PostOrderByWithRelationInput[]
    cursor?: PostWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PostScalarFieldEnum | PostScalarFieldEnum[]
  }

  /**
   * User.decks
   */
  export type User$decksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Deck
     */
    select?: DeckSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Deck
     */
    omit?: DeckOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeckInclude<ExtArgs> | null
    where?: DeckWhereInput
    orderBy?: DeckOrderByWithRelationInput | DeckOrderByWithRelationInput[]
    cursor?: DeckWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DeckScalarFieldEnum | DeckScalarFieldEnum[]
  }

  /**
   * User.flashcards
   */
  export type User$flashcardsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FlashCard
     */
    select?: FlashCardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FlashCard
     */
    omit?: FlashCardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FlashCardInclude<ExtArgs> | null
    where?: FlashCardWhereInput
    orderBy?: FlashCardOrderByWithRelationInput | FlashCardOrderByWithRelationInput[]
    cursor?: FlashCardWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FlashCardScalarFieldEnum | FlashCardScalarFieldEnum[]
  }

  /**
   * User.accesses
   */
  export type User$accessesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeckAccess
     */
    select?: DeckAccessSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DeckAccess
     */
    omit?: DeckAccessOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeckAccessInclude<ExtArgs> | null
    where?: DeckAccessWhereInput
    orderBy?: DeckAccessOrderByWithRelationInput | DeckAccessOrderByWithRelationInput[]
    cursor?: DeckAccessWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DeckAccessScalarFieldEnum | DeckAccessScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model VerificationToken
   */

  export type AggregateVerificationToken = {
    _count: VerificationTokenCountAggregateOutputType | null
    _min: VerificationTokenMinAggregateOutputType | null
    _max: VerificationTokenMaxAggregateOutputType | null
  }

  export type VerificationTokenMinAggregateOutputType = {
    identifier: string | null
    token: string | null
    expires: Date | null
  }

  export type VerificationTokenMaxAggregateOutputType = {
    identifier: string | null
    token: string | null
    expires: Date | null
  }

  export type VerificationTokenCountAggregateOutputType = {
    identifier: number
    token: number
    expires: number
    _all: number
  }


  export type VerificationTokenMinAggregateInputType = {
    identifier?: true
    token?: true
    expires?: true
  }

  export type VerificationTokenMaxAggregateInputType = {
    identifier?: true
    token?: true
    expires?: true
  }

  export type VerificationTokenCountAggregateInputType = {
    identifier?: true
    token?: true
    expires?: true
    _all?: true
  }

  export type VerificationTokenAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which VerificationToken to aggregate.
     */
    where?: VerificationTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VerificationTokens to fetch.
     */
    orderBy?: VerificationTokenOrderByWithRelationInput | VerificationTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: VerificationTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VerificationTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VerificationTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned VerificationTokens
    **/
    _count?: true | VerificationTokenCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VerificationTokenMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VerificationTokenMaxAggregateInputType
  }

  export type GetVerificationTokenAggregateType<T extends VerificationTokenAggregateArgs> = {
        [P in keyof T & keyof AggregateVerificationToken]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVerificationToken[P]>
      : GetScalarType<T[P], AggregateVerificationToken[P]>
  }




  export type VerificationTokenGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VerificationTokenWhereInput
    orderBy?: VerificationTokenOrderByWithAggregationInput | VerificationTokenOrderByWithAggregationInput[]
    by: VerificationTokenScalarFieldEnum[] | VerificationTokenScalarFieldEnum
    having?: VerificationTokenScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VerificationTokenCountAggregateInputType | true
    _min?: VerificationTokenMinAggregateInputType
    _max?: VerificationTokenMaxAggregateInputType
  }

  export type VerificationTokenGroupByOutputType = {
    identifier: string
    token: string
    expires: Date
    _count: VerificationTokenCountAggregateOutputType | null
    _min: VerificationTokenMinAggregateOutputType | null
    _max: VerificationTokenMaxAggregateOutputType | null
  }

  type GetVerificationTokenGroupByPayload<T extends VerificationTokenGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VerificationTokenGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VerificationTokenGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VerificationTokenGroupByOutputType[P]>
            : GetScalarType<T[P], VerificationTokenGroupByOutputType[P]>
        }
      >
    >


  export type VerificationTokenSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    identifier?: boolean
    token?: boolean
    expires?: boolean
  }, ExtArgs["result"]["verificationToken"]>



  export type VerificationTokenSelectScalar = {
    identifier?: boolean
    token?: boolean
    expires?: boolean
  }

  export type VerificationTokenOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"identifier" | "token" | "expires", ExtArgs["result"]["verificationToken"]>

  export type $VerificationTokenPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "VerificationToken"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      identifier: string
      token: string
      expires: Date
    }, ExtArgs["result"]["verificationToken"]>
    composites: {}
  }

  type VerificationTokenGetPayload<S extends boolean | null | undefined | VerificationTokenDefaultArgs> = $Result.GetResult<Prisma.$VerificationTokenPayload, S>

  type VerificationTokenCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<VerificationTokenFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: VerificationTokenCountAggregateInputType | true
    }

  export interface VerificationTokenDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['VerificationToken'], meta: { name: 'VerificationToken' } }
    /**
     * Find zero or one VerificationToken that matches the filter.
     * @param {VerificationTokenFindUniqueArgs} args - Arguments to find a VerificationToken
     * @example
     * // Get one VerificationToken
     * const verificationToken = await prisma.verificationToken.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends VerificationTokenFindUniqueArgs>(args: SelectSubset<T, VerificationTokenFindUniqueArgs<ExtArgs>>): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one VerificationToken that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {VerificationTokenFindUniqueOrThrowArgs} args - Arguments to find a VerificationToken
     * @example
     * // Get one VerificationToken
     * const verificationToken = await prisma.verificationToken.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends VerificationTokenFindUniqueOrThrowArgs>(args: SelectSubset<T, VerificationTokenFindUniqueOrThrowArgs<ExtArgs>>): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first VerificationToken that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenFindFirstArgs} args - Arguments to find a VerificationToken
     * @example
     * // Get one VerificationToken
     * const verificationToken = await prisma.verificationToken.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends VerificationTokenFindFirstArgs>(args?: SelectSubset<T, VerificationTokenFindFirstArgs<ExtArgs>>): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first VerificationToken that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenFindFirstOrThrowArgs} args - Arguments to find a VerificationToken
     * @example
     * // Get one VerificationToken
     * const verificationToken = await prisma.verificationToken.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends VerificationTokenFindFirstOrThrowArgs>(args?: SelectSubset<T, VerificationTokenFindFirstOrThrowArgs<ExtArgs>>): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more VerificationTokens that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all VerificationTokens
     * const verificationTokens = await prisma.verificationToken.findMany()
     * 
     * // Get first 10 VerificationTokens
     * const verificationTokens = await prisma.verificationToken.findMany({ take: 10 })
     * 
     * // Only select the `identifier`
     * const verificationTokenWithIdentifierOnly = await prisma.verificationToken.findMany({ select: { identifier: true } })
     * 
     */
    findMany<T extends VerificationTokenFindManyArgs>(args?: SelectSubset<T, VerificationTokenFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a VerificationToken.
     * @param {VerificationTokenCreateArgs} args - Arguments to create a VerificationToken.
     * @example
     * // Create one VerificationToken
     * const VerificationToken = await prisma.verificationToken.create({
     *   data: {
     *     // ... data to create a VerificationToken
     *   }
     * })
     * 
     */
    create<T extends VerificationTokenCreateArgs>(args: SelectSubset<T, VerificationTokenCreateArgs<ExtArgs>>): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many VerificationTokens.
     * @param {VerificationTokenCreateManyArgs} args - Arguments to create many VerificationTokens.
     * @example
     * // Create many VerificationTokens
     * const verificationToken = await prisma.verificationToken.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends VerificationTokenCreateManyArgs>(args?: SelectSubset<T, VerificationTokenCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a VerificationToken.
     * @param {VerificationTokenDeleteArgs} args - Arguments to delete one VerificationToken.
     * @example
     * // Delete one VerificationToken
     * const VerificationToken = await prisma.verificationToken.delete({
     *   where: {
     *     // ... filter to delete one VerificationToken
     *   }
     * })
     * 
     */
    delete<T extends VerificationTokenDeleteArgs>(args: SelectSubset<T, VerificationTokenDeleteArgs<ExtArgs>>): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one VerificationToken.
     * @param {VerificationTokenUpdateArgs} args - Arguments to update one VerificationToken.
     * @example
     * // Update one VerificationToken
     * const verificationToken = await prisma.verificationToken.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends VerificationTokenUpdateArgs>(args: SelectSubset<T, VerificationTokenUpdateArgs<ExtArgs>>): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more VerificationTokens.
     * @param {VerificationTokenDeleteManyArgs} args - Arguments to filter VerificationTokens to delete.
     * @example
     * // Delete a few VerificationTokens
     * const { count } = await prisma.verificationToken.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends VerificationTokenDeleteManyArgs>(args?: SelectSubset<T, VerificationTokenDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more VerificationTokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many VerificationTokens
     * const verificationToken = await prisma.verificationToken.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends VerificationTokenUpdateManyArgs>(args: SelectSubset<T, VerificationTokenUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one VerificationToken.
     * @param {VerificationTokenUpsertArgs} args - Arguments to update or create a VerificationToken.
     * @example
     * // Update or create a VerificationToken
     * const verificationToken = await prisma.verificationToken.upsert({
     *   create: {
     *     // ... data to create a VerificationToken
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the VerificationToken we want to update
     *   }
     * })
     */
    upsert<T extends VerificationTokenUpsertArgs>(args: SelectSubset<T, VerificationTokenUpsertArgs<ExtArgs>>): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of VerificationTokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenCountArgs} args - Arguments to filter VerificationTokens to count.
     * @example
     * // Count the number of VerificationTokens
     * const count = await prisma.verificationToken.count({
     *   where: {
     *     // ... the filter for the VerificationTokens we want to count
     *   }
     * })
    **/
    count<T extends VerificationTokenCountArgs>(
      args?: Subset<T, VerificationTokenCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VerificationTokenCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a VerificationToken.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends VerificationTokenAggregateArgs>(args: Subset<T, VerificationTokenAggregateArgs>): Prisma.PrismaPromise<GetVerificationTokenAggregateType<T>>

    /**
     * Group by VerificationToken.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends VerificationTokenGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: VerificationTokenGroupByArgs['orderBy'] }
        : { orderBy?: VerificationTokenGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, VerificationTokenGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVerificationTokenGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the VerificationToken model
   */
  readonly fields: VerificationTokenFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for VerificationToken.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__VerificationTokenClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the VerificationToken model
   */ 
  interface VerificationTokenFieldRefs {
    readonly identifier: FieldRef<"VerificationToken", 'String'>
    readonly token: FieldRef<"VerificationToken", 'String'>
    readonly expires: FieldRef<"VerificationToken", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * VerificationToken findUnique
   */
  export type VerificationTokenFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * Filter, which VerificationToken to fetch.
     */
    where: VerificationTokenWhereUniqueInput
  }

  /**
   * VerificationToken findUniqueOrThrow
   */
  export type VerificationTokenFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * Filter, which VerificationToken to fetch.
     */
    where: VerificationTokenWhereUniqueInput
  }

  /**
   * VerificationToken findFirst
   */
  export type VerificationTokenFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * Filter, which VerificationToken to fetch.
     */
    where?: VerificationTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VerificationTokens to fetch.
     */
    orderBy?: VerificationTokenOrderByWithRelationInput | VerificationTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for VerificationTokens.
     */
    cursor?: VerificationTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VerificationTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VerificationTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of VerificationTokens.
     */
    distinct?: VerificationTokenScalarFieldEnum | VerificationTokenScalarFieldEnum[]
  }

  /**
   * VerificationToken findFirstOrThrow
   */
  export type VerificationTokenFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * Filter, which VerificationToken to fetch.
     */
    where?: VerificationTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VerificationTokens to fetch.
     */
    orderBy?: VerificationTokenOrderByWithRelationInput | VerificationTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for VerificationTokens.
     */
    cursor?: VerificationTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VerificationTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VerificationTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of VerificationTokens.
     */
    distinct?: VerificationTokenScalarFieldEnum | VerificationTokenScalarFieldEnum[]
  }

  /**
   * VerificationToken findMany
   */
  export type VerificationTokenFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * Filter, which VerificationTokens to fetch.
     */
    where?: VerificationTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VerificationTokens to fetch.
     */
    orderBy?: VerificationTokenOrderByWithRelationInput | VerificationTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing VerificationTokens.
     */
    cursor?: VerificationTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VerificationTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VerificationTokens.
     */
    skip?: number
    distinct?: VerificationTokenScalarFieldEnum | VerificationTokenScalarFieldEnum[]
  }

  /**
   * VerificationToken create
   */
  export type VerificationTokenCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * The data needed to create a VerificationToken.
     */
    data: XOR<VerificationTokenCreateInput, VerificationTokenUncheckedCreateInput>
  }

  /**
   * VerificationToken createMany
   */
  export type VerificationTokenCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many VerificationTokens.
     */
    data: VerificationTokenCreateManyInput | VerificationTokenCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * VerificationToken update
   */
  export type VerificationTokenUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * The data needed to update a VerificationToken.
     */
    data: XOR<VerificationTokenUpdateInput, VerificationTokenUncheckedUpdateInput>
    /**
     * Choose, which VerificationToken to update.
     */
    where: VerificationTokenWhereUniqueInput
  }

  /**
   * VerificationToken updateMany
   */
  export type VerificationTokenUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update VerificationTokens.
     */
    data: XOR<VerificationTokenUpdateManyMutationInput, VerificationTokenUncheckedUpdateManyInput>
    /**
     * Filter which VerificationTokens to update
     */
    where?: VerificationTokenWhereInput
    /**
     * Limit how many VerificationTokens to update.
     */
    limit?: number
  }

  /**
   * VerificationToken upsert
   */
  export type VerificationTokenUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * The filter to search for the VerificationToken to update in case it exists.
     */
    where: VerificationTokenWhereUniqueInput
    /**
     * In case the VerificationToken found by the `where` argument doesn't exist, create a new VerificationToken with this data.
     */
    create: XOR<VerificationTokenCreateInput, VerificationTokenUncheckedCreateInput>
    /**
     * In case the VerificationToken was found with the provided `where` argument, update it with this data.
     */
    update: XOR<VerificationTokenUpdateInput, VerificationTokenUncheckedUpdateInput>
  }

  /**
   * VerificationToken delete
   */
  export type VerificationTokenDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * Filter which VerificationToken to delete.
     */
    where: VerificationTokenWhereUniqueInput
  }

  /**
   * VerificationToken deleteMany
   */
  export type VerificationTokenDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which VerificationTokens to delete
     */
    where?: VerificationTokenWhereInput
    /**
     * Limit how many VerificationTokens to delete.
     */
    limit?: number
  }

  /**
   * VerificationToken without action
   */
  export type VerificationTokenDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
  }


  /**
   * Model Deck
   */

  export type AggregateDeck = {
    _count: DeckCountAggregateOutputType | null
    _min: DeckMinAggregateOutputType | null
    _max: DeckMaxAggregateOutputType | null
  }

  export type DeckMinAggregateOutputType = {
    id: string | null
    name: string | null
    ownerId: string | null
    public: $Enums.AccessLevel | null
  }

  export type DeckMaxAggregateOutputType = {
    id: string | null
    name: string | null
    ownerId: string | null
    public: $Enums.AccessLevel | null
  }

  export type DeckCountAggregateOutputType = {
    id: number
    name: number
    ownerId: number
    public: number
    _all: number
  }


  export type DeckMinAggregateInputType = {
    id?: true
    name?: true
    ownerId?: true
    public?: true
  }

  export type DeckMaxAggregateInputType = {
    id?: true
    name?: true
    ownerId?: true
    public?: true
  }

  export type DeckCountAggregateInputType = {
    id?: true
    name?: true
    ownerId?: true
    public?: true
    _all?: true
  }

  export type DeckAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Deck to aggregate.
     */
    where?: DeckWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Decks to fetch.
     */
    orderBy?: DeckOrderByWithRelationInput | DeckOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DeckWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Decks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Decks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Decks
    **/
    _count?: true | DeckCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DeckMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DeckMaxAggregateInputType
  }

  export type GetDeckAggregateType<T extends DeckAggregateArgs> = {
        [P in keyof T & keyof AggregateDeck]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDeck[P]>
      : GetScalarType<T[P], AggregateDeck[P]>
  }




  export type DeckGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DeckWhereInput
    orderBy?: DeckOrderByWithAggregationInput | DeckOrderByWithAggregationInput[]
    by: DeckScalarFieldEnum[] | DeckScalarFieldEnum
    having?: DeckScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DeckCountAggregateInputType | true
    _min?: DeckMinAggregateInputType
    _max?: DeckMaxAggregateInputType
  }

  export type DeckGroupByOutputType = {
    id: string
    name: string
    ownerId: string
    public: $Enums.AccessLevel
    _count: DeckCountAggregateOutputType | null
    _min: DeckMinAggregateOutputType | null
    _max: DeckMaxAggregateOutputType | null
  }

  type GetDeckGroupByPayload<T extends DeckGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DeckGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DeckGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DeckGroupByOutputType[P]>
            : GetScalarType<T[P], DeckGroupByOutputType[P]>
        }
      >
    >


  export type DeckSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    ownerId?: boolean
    public?: boolean
    owner?: boolean | UserDefaultArgs<ExtArgs>
    accesses?: boolean | Deck$accessesArgs<ExtArgs>
    flashcards?: boolean | Deck$flashcardsArgs<ExtArgs>
    deckflashcard?: boolean | Deck$deckflashcardArgs<ExtArgs>
    _count?: boolean | DeckCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["deck"]>



  export type DeckSelectScalar = {
    id?: boolean
    name?: boolean
    ownerId?: boolean
    public?: boolean
  }

  export type DeckOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "ownerId" | "public", ExtArgs["result"]["deck"]>
  export type DeckInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    owner?: boolean | UserDefaultArgs<ExtArgs>
    accesses?: boolean | Deck$accessesArgs<ExtArgs>
    flashcards?: boolean | Deck$flashcardsArgs<ExtArgs>
    deckflashcard?: boolean | Deck$deckflashcardArgs<ExtArgs>
    _count?: boolean | DeckCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $DeckPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Deck"
    objects: {
      owner: Prisma.$UserPayload<ExtArgs>
      accesses: Prisma.$DeckAccessPayload<ExtArgs>[]
      flashcards: Prisma.$FlashCardPayload<ExtArgs>[]
      deckflashcard: Prisma.$DeckFlashCardPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      ownerId: string
      public: $Enums.AccessLevel
    }, ExtArgs["result"]["deck"]>
    composites: {}
  }

  type DeckGetPayload<S extends boolean | null | undefined | DeckDefaultArgs> = $Result.GetResult<Prisma.$DeckPayload, S>

  type DeckCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DeckFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DeckCountAggregateInputType | true
    }

  export interface DeckDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Deck'], meta: { name: 'Deck' } }
    /**
     * Find zero or one Deck that matches the filter.
     * @param {DeckFindUniqueArgs} args - Arguments to find a Deck
     * @example
     * // Get one Deck
     * const deck = await prisma.deck.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DeckFindUniqueArgs>(args: SelectSubset<T, DeckFindUniqueArgs<ExtArgs>>): Prisma__DeckClient<$Result.GetResult<Prisma.$DeckPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Deck that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DeckFindUniqueOrThrowArgs} args - Arguments to find a Deck
     * @example
     * // Get one Deck
     * const deck = await prisma.deck.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DeckFindUniqueOrThrowArgs>(args: SelectSubset<T, DeckFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DeckClient<$Result.GetResult<Prisma.$DeckPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Deck that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeckFindFirstArgs} args - Arguments to find a Deck
     * @example
     * // Get one Deck
     * const deck = await prisma.deck.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DeckFindFirstArgs>(args?: SelectSubset<T, DeckFindFirstArgs<ExtArgs>>): Prisma__DeckClient<$Result.GetResult<Prisma.$DeckPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Deck that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeckFindFirstOrThrowArgs} args - Arguments to find a Deck
     * @example
     * // Get one Deck
     * const deck = await prisma.deck.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DeckFindFirstOrThrowArgs>(args?: SelectSubset<T, DeckFindFirstOrThrowArgs<ExtArgs>>): Prisma__DeckClient<$Result.GetResult<Prisma.$DeckPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Decks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeckFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Decks
     * const decks = await prisma.deck.findMany()
     * 
     * // Get first 10 Decks
     * const decks = await prisma.deck.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const deckWithIdOnly = await prisma.deck.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DeckFindManyArgs>(args?: SelectSubset<T, DeckFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DeckPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Deck.
     * @param {DeckCreateArgs} args - Arguments to create a Deck.
     * @example
     * // Create one Deck
     * const Deck = await prisma.deck.create({
     *   data: {
     *     // ... data to create a Deck
     *   }
     * })
     * 
     */
    create<T extends DeckCreateArgs>(args: SelectSubset<T, DeckCreateArgs<ExtArgs>>): Prisma__DeckClient<$Result.GetResult<Prisma.$DeckPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Decks.
     * @param {DeckCreateManyArgs} args - Arguments to create many Decks.
     * @example
     * // Create many Decks
     * const deck = await prisma.deck.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DeckCreateManyArgs>(args?: SelectSubset<T, DeckCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Deck.
     * @param {DeckDeleteArgs} args - Arguments to delete one Deck.
     * @example
     * // Delete one Deck
     * const Deck = await prisma.deck.delete({
     *   where: {
     *     // ... filter to delete one Deck
     *   }
     * })
     * 
     */
    delete<T extends DeckDeleteArgs>(args: SelectSubset<T, DeckDeleteArgs<ExtArgs>>): Prisma__DeckClient<$Result.GetResult<Prisma.$DeckPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Deck.
     * @param {DeckUpdateArgs} args - Arguments to update one Deck.
     * @example
     * // Update one Deck
     * const deck = await prisma.deck.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DeckUpdateArgs>(args: SelectSubset<T, DeckUpdateArgs<ExtArgs>>): Prisma__DeckClient<$Result.GetResult<Prisma.$DeckPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Decks.
     * @param {DeckDeleteManyArgs} args - Arguments to filter Decks to delete.
     * @example
     * // Delete a few Decks
     * const { count } = await prisma.deck.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DeckDeleteManyArgs>(args?: SelectSubset<T, DeckDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Decks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeckUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Decks
     * const deck = await prisma.deck.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DeckUpdateManyArgs>(args: SelectSubset<T, DeckUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Deck.
     * @param {DeckUpsertArgs} args - Arguments to update or create a Deck.
     * @example
     * // Update or create a Deck
     * const deck = await prisma.deck.upsert({
     *   create: {
     *     // ... data to create a Deck
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Deck we want to update
     *   }
     * })
     */
    upsert<T extends DeckUpsertArgs>(args: SelectSubset<T, DeckUpsertArgs<ExtArgs>>): Prisma__DeckClient<$Result.GetResult<Prisma.$DeckPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Decks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeckCountArgs} args - Arguments to filter Decks to count.
     * @example
     * // Count the number of Decks
     * const count = await prisma.deck.count({
     *   where: {
     *     // ... the filter for the Decks we want to count
     *   }
     * })
    **/
    count<T extends DeckCountArgs>(
      args?: Subset<T, DeckCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DeckCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Deck.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeckAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends DeckAggregateArgs>(args: Subset<T, DeckAggregateArgs>): Prisma.PrismaPromise<GetDeckAggregateType<T>>

    /**
     * Group by Deck.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeckGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends DeckGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DeckGroupByArgs['orderBy'] }
        : { orderBy?: DeckGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, DeckGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDeckGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Deck model
   */
  readonly fields: DeckFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Deck.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DeckClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    owner<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    accesses<T extends Deck$accessesArgs<ExtArgs> = {}>(args?: Subset<T, Deck$accessesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DeckAccessPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    flashcards<T extends Deck$flashcardsArgs<ExtArgs> = {}>(args?: Subset<T, Deck$flashcardsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FlashCardPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    deckflashcard<T extends Deck$deckflashcardArgs<ExtArgs> = {}>(args?: Subset<T, Deck$deckflashcardArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DeckFlashCardPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Deck model
   */ 
  interface DeckFieldRefs {
    readonly id: FieldRef<"Deck", 'String'>
    readonly name: FieldRef<"Deck", 'String'>
    readonly ownerId: FieldRef<"Deck", 'String'>
    readonly public: FieldRef<"Deck", 'AccessLevel'>
  }
    

  // Custom InputTypes
  /**
   * Deck findUnique
   */
  export type DeckFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Deck
     */
    select?: DeckSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Deck
     */
    omit?: DeckOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeckInclude<ExtArgs> | null
    /**
     * Filter, which Deck to fetch.
     */
    where: DeckWhereUniqueInput
  }

  /**
   * Deck findUniqueOrThrow
   */
  export type DeckFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Deck
     */
    select?: DeckSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Deck
     */
    omit?: DeckOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeckInclude<ExtArgs> | null
    /**
     * Filter, which Deck to fetch.
     */
    where: DeckWhereUniqueInput
  }

  /**
   * Deck findFirst
   */
  export type DeckFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Deck
     */
    select?: DeckSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Deck
     */
    omit?: DeckOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeckInclude<ExtArgs> | null
    /**
     * Filter, which Deck to fetch.
     */
    where?: DeckWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Decks to fetch.
     */
    orderBy?: DeckOrderByWithRelationInput | DeckOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Decks.
     */
    cursor?: DeckWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Decks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Decks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Decks.
     */
    distinct?: DeckScalarFieldEnum | DeckScalarFieldEnum[]
  }

  /**
   * Deck findFirstOrThrow
   */
  export type DeckFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Deck
     */
    select?: DeckSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Deck
     */
    omit?: DeckOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeckInclude<ExtArgs> | null
    /**
     * Filter, which Deck to fetch.
     */
    where?: DeckWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Decks to fetch.
     */
    orderBy?: DeckOrderByWithRelationInput | DeckOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Decks.
     */
    cursor?: DeckWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Decks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Decks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Decks.
     */
    distinct?: DeckScalarFieldEnum | DeckScalarFieldEnum[]
  }

  /**
   * Deck findMany
   */
  export type DeckFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Deck
     */
    select?: DeckSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Deck
     */
    omit?: DeckOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeckInclude<ExtArgs> | null
    /**
     * Filter, which Decks to fetch.
     */
    where?: DeckWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Decks to fetch.
     */
    orderBy?: DeckOrderByWithRelationInput | DeckOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Decks.
     */
    cursor?: DeckWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Decks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Decks.
     */
    skip?: number
    distinct?: DeckScalarFieldEnum | DeckScalarFieldEnum[]
  }

  /**
   * Deck create
   */
  export type DeckCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Deck
     */
    select?: DeckSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Deck
     */
    omit?: DeckOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeckInclude<ExtArgs> | null
    /**
     * The data needed to create a Deck.
     */
    data: XOR<DeckCreateInput, DeckUncheckedCreateInput>
  }

  /**
   * Deck createMany
   */
  export type DeckCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Decks.
     */
    data: DeckCreateManyInput | DeckCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Deck update
   */
  export type DeckUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Deck
     */
    select?: DeckSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Deck
     */
    omit?: DeckOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeckInclude<ExtArgs> | null
    /**
     * The data needed to update a Deck.
     */
    data: XOR<DeckUpdateInput, DeckUncheckedUpdateInput>
    /**
     * Choose, which Deck to update.
     */
    where: DeckWhereUniqueInput
  }

  /**
   * Deck updateMany
   */
  export type DeckUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Decks.
     */
    data: XOR<DeckUpdateManyMutationInput, DeckUncheckedUpdateManyInput>
    /**
     * Filter which Decks to update
     */
    where?: DeckWhereInput
    /**
     * Limit how many Decks to update.
     */
    limit?: number
  }

  /**
   * Deck upsert
   */
  export type DeckUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Deck
     */
    select?: DeckSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Deck
     */
    omit?: DeckOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeckInclude<ExtArgs> | null
    /**
     * The filter to search for the Deck to update in case it exists.
     */
    where: DeckWhereUniqueInput
    /**
     * In case the Deck found by the `where` argument doesn't exist, create a new Deck with this data.
     */
    create: XOR<DeckCreateInput, DeckUncheckedCreateInput>
    /**
     * In case the Deck was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DeckUpdateInput, DeckUncheckedUpdateInput>
  }

  /**
   * Deck delete
   */
  export type DeckDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Deck
     */
    select?: DeckSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Deck
     */
    omit?: DeckOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeckInclude<ExtArgs> | null
    /**
     * Filter which Deck to delete.
     */
    where: DeckWhereUniqueInput
  }

  /**
   * Deck deleteMany
   */
  export type DeckDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Decks to delete
     */
    where?: DeckWhereInput
    /**
     * Limit how many Decks to delete.
     */
    limit?: number
  }

  /**
   * Deck.accesses
   */
  export type Deck$accessesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeckAccess
     */
    select?: DeckAccessSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DeckAccess
     */
    omit?: DeckAccessOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeckAccessInclude<ExtArgs> | null
    where?: DeckAccessWhereInput
    orderBy?: DeckAccessOrderByWithRelationInput | DeckAccessOrderByWithRelationInput[]
    cursor?: DeckAccessWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DeckAccessScalarFieldEnum | DeckAccessScalarFieldEnum[]
  }

  /**
   * Deck.flashcards
   */
  export type Deck$flashcardsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FlashCard
     */
    select?: FlashCardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FlashCard
     */
    omit?: FlashCardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FlashCardInclude<ExtArgs> | null
    where?: FlashCardWhereInput
    orderBy?: FlashCardOrderByWithRelationInput | FlashCardOrderByWithRelationInput[]
    cursor?: FlashCardWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FlashCardScalarFieldEnum | FlashCardScalarFieldEnum[]
  }

  /**
   * Deck.deckflashcard
   */
  export type Deck$deckflashcardArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeckFlashCard
     */
    select?: DeckFlashCardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DeckFlashCard
     */
    omit?: DeckFlashCardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeckFlashCardInclude<ExtArgs> | null
    where?: DeckFlashCardWhereInput
    orderBy?: DeckFlashCardOrderByWithRelationInput | DeckFlashCardOrderByWithRelationInput[]
    cursor?: DeckFlashCardWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DeckFlashCardScalarFieldEnum | DeckFlashCardScalarFieldEnum[]
  }

  /**
   * Deck without action
   */
  export type DeckDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Deck
     */
    select?: DeckSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Deck
     */
    omit?: DeckOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeckInclude<ExtArgs> | null
  }


  /**
   * Model FlashCard
   */

  export type AggregateFlashCard = {
    _count: FlashCardCountAggregateOutputType | null
    _min: FlashCardMinAggregateOutputType | null
    _max: FlashCardMaxAggregateOutputType | null
  }

  export type FlashCardMinAggregateOutputType = {
    id: string | null
    ownerId: string | null
    title: string | null
    content: string | null
  }

  export type FlashCardMaxAggregateOutputType = {
    id: string | null
    ownerId: string | null
    title: string | null
    content: string | null
  }

  export type FlashCardCountAggregateOutputType = {
    id: number
    ownerId: number
    title: number
    content: number
    _all: number
  }


  export type FlashCardMinAggregateInputType = {
    id?: true
    ownerId?: true
    title?: true
    content?: true
  }

  export type FlashCardMaxAggregateInputType = {
    id?: true
    ownerId?: true
    title?: true
    content?: true
  }

  export type FlashCardCountAggregateInputType = {
    id?: true
    ownerId?: true
    title?: true
    content?: true
    _all?: true
  }

  export type FlashCardAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FlashCard to aggregate.
     */
    where?: FlashCardWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FlashCards to fetch.
     */
    orderBy?: FlashCardOrderByWithRelationInput | FlashCardOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FlashCardWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FlashCards from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FlashCards.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned FlashCards
    **/
    _count?: true | FlashCardCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FlashCardMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FlashCardMaxAggregateInputType
  }

  export type GetFlashCardAggregateType<T extends FlashCardAggregateArgs> = {
        [P in keyof T & keyof AggregateFlashCard]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFlashCard[P]>
      : GetScalarType<T[P], AggregateFlashCard[P]>
  }




  export type FlashCardGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FlashCardWhereInput
    orderBy?: FlashCardOrderByWithAggregationInput | FlashCardOrderByWithAggregationInput[]
    by: FlashCardScalarFieldEnum[] | FlashCardScalarFieldEnum
    having?: FlashCardScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FlashCardCountAggregateInputType | true
    _min?: FlashCardMinAggregateInputType
    _max?: FlashCardMaxAggregateInputType
  }

  export type FlashCardGroupByOutputType = {
    id: string
    ownerId: string
    title: string
    content: string
    _count: FlashCardCountAggregateOutputType | null
    _min: FlashCardMinAggregateOutputType | null
    _max: FlashCardMaxAggregateOutputType | null
  }

  type GetFlashCardGroupByPayload<T extends FlashCardGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FlashCardGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FlashCardGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FlashCardGroupByOutputType[P]>
            : GetScalarType<T[P], FlashCardGroupByOutputType[P]>
        }
      >
    >


  export type FlashCardSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    ownerId?: boolean
    title?: boolean
    content?: boolean
    owner?: boolean | UserDefaultArgs<ExtArgs>
    decks?: boolean | FlashCard$decksArgs<ExtArgs>
    deckflashcard?: boolean | FlashCard$deckflashcardArgs<ExtArgs>
    _count?: boolean | FlashCardCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["flashCard"]>



  export type FlashCardSelectScalar = {
    id?: boolean
    ownerId?: boolean
    title?: boolean
    content?: boolean
  }

  export type FlashCardOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "ownerId" | "title" | "content", ExtArgs["result"]["flashCard"]>
  export type FlashCardInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    owner?: boolean | UserDefaultArgs<ExtArgs>
    decks?: boolean | FlashCard$decksArgs<ExtArgs>
    deckflashcard?: boolean | FlashCard$deckflashcardArgs<ExtArgs>
    _count?: boolean | FlashCardCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $FlashCardPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "FlashCard"
    objects: {
      owner: Prisma.$UserPayload<ExtArgs>
      decks: Prisma.$DeckPayload<ExtArgs>[]
      deckflashcard: Prisma.$DeckFlashCardPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      ownerId: string
      title: string
      content: string
    }, ExtArgs["result"]["flashCard"]>
    composites: {}
  }

  type FlashCardGetPayload<S extends boolean | null | undefined | FlashCardDefaultArgs> = $Result.GetResult<Prisma.$FlashCardPayload, S>

  type FlashCardCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<FlashCardFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FlashCardCountAggregateInputType | true
    }

  export interface FlashCardDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['FlashCard'], meta: { name: 'FlashCard' } }
    /**
     * Find zero or one FlashCard that matches the filter.
     * @param {FlashCardFindUniqueArgs} args - Arguments to find a FlashCard
     * @example
     * // Get one FlashCard
     * const flashCard = await prisma.flashCard.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FlashCardFindUniqueArgs>(args: SelectSubset<T, FlashCardFindUniqueArgs<ExtArgs>>): Prisma__FlashCardClient<$Result.GetResult<Prisma.$FlashCardPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one FlashCard that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FlashCardFindUniqueOrThrowArgs} args - Arguments to find a FlashCard
     * @example
     * // Get one FlashCard
     * const flashCard = await prisma.flashCard.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FlashCardFindUniqueOrThrowArgs>(args: SelectSubset<T, FlashCardFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FlashCardClient<$Result.GetResult<Prisma.$FlashCardPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first FlashCard that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FlashCardFindFirstArgs} args - Arguments to find a FlashCard
     * @example
     * // Get one FlashCard
     * const flashCard = await prisma.flashCard.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FlashCardFindFirstArgs>(args?: SelectSubset<T, FlashCardFindFirstArgs<ExtArgs>>): Prisma__FlashCardClient<$Result.GetResult<Prisma.$FlashCardPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first FlashCard that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FlashCardFindFirstOrThrowArgs} args - Arguments to find a FlashCard
     * @example
     * // Get one FlashCard
     * const flashCard = await prisma.flashCard.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FlashCardFindFirstOrThrowArgs>(args?: SelectSubset<T, FlashCardFindFirstOrThrowArgs<ExtArgs>>): Prisma__FlashCardClient<$Result.GetResult<Prisma.$FlashCardPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more FlashCards that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FlashCardFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all FlashCards
     * const flashCards = await prisma.flashCard.findMany()
     * 
     * // Get first 10 FlashCards
     * const flashCards = await prisma.flashCard.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const flashCardWithIdOnly = await prisma.flashCard.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends FlashCardFindManyArgs>(args?: SelectSubset<T, FlashCardFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FlashCardPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a FlashCard.
     * @param {FlashCardCreateArgs} args - Arguments to create a FlashCard.
     * @example
     * // Create one FlashCard
     * const FlashCard = await prisma.flashCard.create({
     *   data: {
     *     // ... data to create a FlashCard
     *   }
     * })
     * 
     */
    create<T extends FlashCardCreateArgs>(args: SelectSubset<T, FlashCardCreateArgs<ExtArgs>>): Prisma__FlashCardClient<$Result.GetResult<Prisma.$FlashCardPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many FlashCards.
     * @param {FlashCardCreateManyArgs} args - Arguments to create many FlashCards.
     * @example
     * // Create many FlashCards
     * const flashCard = await prisma.flashCard.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FlashCardCreateManyArgs>(args?: SelectSubset<T, FlashCardCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a FlashCard.
     * @param {FlashCardDeleteArgs} args - Arguments to delete one FlashCard.
     * @example
     * // Delete one FlashCard
     * const FlashCard = await prisma.flashCard.delete({
     *   where: {
     *     // ... filter to delete one FlashCard
     *   }
     * })
     * 
     */
    delete<T extends FlashCardDeleteArgs>(args: SelectSubset<T, FlashCardDeleteArgs<ExtArgs>>): Prisma__FlashCardClient<$Result.GetResult<Prisma.$FlashCardPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one FlashCard.
     * @param {FlashCardUpdateArgs} args - Arguments to update one FlashCard.
     * @example
     * // Update one FlashCard
     * const flashCard = await prisma.flashCard.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FlashCardUpdateArgs>(args: SelectSubset<T, FlashCardUpdateArgs<ExtArgs>>): Prisma__FlashCardClient<$Result.GetResult<Prisma.$FlashCardPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more FlashCards.
     * @param {FlashCardDeleteManyArgs} args - Arguments to filter FlashCards to delete.
     * @example
     * // Delete a few FlashCards
     * const { count } = await prisma.flashCard.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FlashCardDeleteManyArgs>(args?: SelectSubset<T, FlashCardDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FlashCards.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FlashCardUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many FlashCards
     * const flashCard = await prisma.flashCard.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FlashCardUpdateManyArgs>(args: SelectSubset<T, FlashCardUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one FlashCard.
     * @param {FlashCardUpsertArgs} args - Arguments to update or create a FlashCard.
     * @example
     * // Update or create a FlashCard
     * const flashCard = await prisma.flashCard.upsert({
     *   create: {
     *     // ... data to create a FlashCard
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the FlashCard we want to update
     *   }
     * })
     */
    upsert<T extends FlashCardUpsertArgs>(args: SelectSubset<T, FlashCardUpsertArgs<ExtArgs>>): Prisma__FlashCardClient<$Result.GetResult<Prisma.$FlashCardPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of FlashCards.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FlashCardCountArgs} args - Arguments to filter FlashCards to count.
     * @example
     * // Count the number of FlashCards
     * const count = await prisma.flashCard.count({
     *   where: {
     *     // ... the filter for the FlashCards we want to count
     *   }
     * })
    **/
    count<T extends FlashCardCountArgs>(
      args?: Subset<T, FlashCardCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FlashCardCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a FlashCard.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FlashCardAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends FlashCardAggregateArgs>(args: Subset<T, FlashCardAggregateArgs>): Prisma.PrismaPromise<GetFlashCardAggregateType<T>>

    /**
     * Group by FlashCard.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FlashCardGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends FlashCardGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FlashCardGroupByArgs['orderBy'] }
        : { orderBy?: FlashCardGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, FlashCardGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFlashCardGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the FlashCard model
   */
  readonly fields: FlashCardFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for FlashCard.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FlashCardClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    owner<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    decks<T extends FlashCard$decksArgs<ExtArgs> = {}>(args?: Subset<T, FlashCard$decksArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DeckPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    deckflashcard<T extends FlashCard$deckflashcardArgs<ExtArgs> = {}>(args?: Subset<T, FlashCard$deckflashcardArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DeckFlashCardPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the FlashCard model
   */ 
  interface FlashCardFieldRefs {
    readonly id: FieldRef<"FlashCard", 'String'>
    readonly ownerId: FieldRef<"FlashCard", 'String'>
    readonly title: FieldRef<"FlashCard", 'String'>
    readonly content: FieldRef<"FlashCard", 'String'>
  }
    

  // Custom InputTypes
  /**
   * FlashCard findUnique
   */
  export type FlashCardFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FlashCard
     */
    select?: FlashCardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FlashCard
     */
    omit?: FlashCardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FlashCardInclude<ExtArgs> | null
    /**
     * Filter, which FlashCard to fetch.
     */
    where: FlashCardWhereUniqueInput
  }

  /**
   * FlashCard findUniqueOrThrow
   */
  export type FlashCardFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FlashCard
     */
    select?: FlashCardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FlashCard
     */
    omit?: FlashCardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FlashCardInclude<ExtArgs> | null
    /**
     * Filter, which FlashCard to fetch.
     */
    where: FlashCardWhereUniqueInput
  }

  /**
   * FlashCard findFirst
   */
  export type FlashCardFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FlashCard
     */
    select?: FlashCardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FlashCard
     */
    omit?: FlashCardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FlashCardInclude<ExtArgs> | null
    /**
     * Filter, which FlashCard to fetch.
     */
    where?: FlashCardWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FlashCards to fetch.
     */
    orderBy?: FlashCardOrderByWithRelationInput | FlashCardOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FlashCards.
     */
    cursor?: FlashCardWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FlashCards from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FlashCards.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FlashCards.
     */
    distinct?: FlashCardScalarFieldEnum | FlashCardScalarFieldEnum[]
  }

  /**
   * FlashCard findFirstOrThrow
   */
  export type FlashCardFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FlashCard
     */
    select?: FlashCardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FlashCard
     */
    omit?: FlashCardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FlashCardInclude<ExtArgs> | null
    /**
     * Filter, which FlashCard to fetch.
     */
    where?: FlashCardWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FlashCards to fetch.
     */
    orderBy?: FlashCardOrderByWithRelationInput | FlashCardOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FlashCards.
     */
    cursor?: FlashCardWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FlashCards from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FlashCards.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FlashCards.
     */
    distinct?: FlashCardScalarFieldEnum | FlashCardScalarFieldEnum[]
  }

  /**
   * FlashCard findMany
   */
  export type FlashCardFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FlashCard
     */
    select?: FlashCardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FlashCard
     */
    omit?: FlashCardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FlashCardInclude<ExtArgs> | null
    /**
     * Filter, which FlashCards to fetch.
     */
    where?: FlashCardWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FlashCards to fetch.
     */
    orderBy?: FlashCardOrderByWithRelationInput | FlashCardOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing FlashCards.
     */
    cursor?: FlashCardWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FlashCards from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FlashCards.
     */
    skip?: number
    distinct?: FlashCardScalarFieldEnum | FlashCardScalarFieldEnum[]
  }

  /**
   * FlashCard create
   */
  export type FlashCardCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FlashCard
     */
    select?: FlashCardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FlashCard
     */
    omit?: FlashCardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FlashCardInclude<ExtArgs> | null
    /**
     * The data needed to create a FlashCard.
     */
    data: XOR<FlashCardCreateInput, FlashCardUncheckedCreateInput>
  }

  /**
   * FlashCard createMany
   */
  export type FlashCardCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many FlashCards.
     */
    data: FlashCardCreateManyInput | FlashCardCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * FlashCard update
   */
  export type FlashCardUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FlashCard
     */
    select?: FlashCardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FlashCard
     */
    omit?: FlashCardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FlashCardInclude<ExtArgs> | null
    /**
     * The data needed to update a FlashCard.
     */
    data: XOR<FlashCardUpdateInput, FlashCardUncheckedUpdateInput>
    /**
     * Choose, which FlashCard to update.
     */
    where: FlashCardWhereUniqueInput
  }

  /**
   * FlashCard updateMany
   */
  export type FlashCardUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update FlashCards.
     */
    data: XOR<FlashCardUpdateManyMutationInput, FlashCardUncheckedUpdateManyInput>
    /**
     * Filter which FlashCards to update
     */
    where?: FlashCardWhereInput
    /**
     * Limit how many FlashCards to update.
     */
    limit?: number
  }

  /**
   * FlashCard upsert
   */
  export type FlashCardUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FlashCard
     */
    select?: FlashCardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FlashCard
     */
    omit?: FlashCardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FlashCardInclude<ExtArgs> | null
    /**
     * The filter to search for the FlashCard to update in case it exists.
     */
    where: FlashCardWhereUniqueInput
    /**
     * In case the FlashCard found by the `where` argument doesn't exist, create a new FlashCard with this data.
     */
    create: XOR<FlashCardCreateInput, FlashCardUncheckedCreateInput>
    /**
     * In case the FlashCard was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FlashCardUpdateInput, FlashCardUncheckedUpdateInput>
  }

  /**
   * FlashCard delete
   */
  export type FlashCardDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FlashCard
     */
    select?: FlashCardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FlashCard
     */
    omit?: FlashCardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FlashCardInclude<ExtArgs> | null
    /**
     * Filter which FlashCard to delete.
     */
    where: FlashCardWhereUniqueInput
  }

  /**
   * FlashCard deleteMany
   */
  export type FlashCardDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FlashCards to delete
     */
    where?: FlashCardWhereInput
    /**
     * Limit how many FlashCards to delete.
     */
    limit?: number
  }

  /**
   * FlashCard.decks
   */
  export type FlashCard$decksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Deck
     */
    select?: DeckSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Deck
     */
    omit?: DeckOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeckInclude<ExtArgs> | null
    where?: DeckWhereInput
    orderBy?: DeckOrderByWithRelationInput | DeckOrderByWithRelationInput[]
    cursor?: DeckWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DeckScalarFieldEnum | DeckScalarFieldEnum[]
  }

  /**
   * FlashCard.deckflashcard
   */
  export type FlashCard$deckflashcardArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeckFlashCard
     */
    select?: DeckFlashCardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DeckFlashCard
     */
    omit?: DeckFlashCardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeckFlashCardInclude<ExtArgs> | null
    where?: DeckFlashCardWhereInput
    orderBy?: DeckFlashCardOrderByWithRelationInput | DeckFlashCardOrderByWithRelationInput[]
    cursor?: DeckFlashCardWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DeckFlashCardScalarFieldEnum | DeckFlashCardScalarFieldEnum[]
  }

  /**
   * FlashCard without action
   */
  export type FlashCardDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FlashCard
     */
    select?: FlashCardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FlashCard
     */
    omit?: FlashCardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FlashCardInclude<ExtArgs> | null
  }


  /**
   * Model DeckFlashCard
   */

  export type AggregateDeckFlashCard = {
    _count: DeckFlashCardCountAggregateOutputType | null
    _min: DeckFlashCardMinAggregateOutputType | null
    _max: DeckFlashCardMaxAggregateOutputType | null
  }

  export type DeckFlashCardMinAggregateOutputType = {
    deckId: string | null
    flashId: string | null
    progress: $Enums.FlashCardProgress | null
    createdAt: Date | null
  }

  export type DeckFlashCardMaxAggregateOutputType = {
    deckId: string | null
    flashId: string | null
    progress: $Enums.FlashCardProgress | null
    createdAt: Date | null
  }

  export type DeckFlashCardCountAggregateOutputType = {
    deckId: number
    flashId: number
    progress: number
    createdAt: number
    _all: number
  }


  export type DeckFlashCardMinAggregateInputType = {
    deckId?: true
    flashId?: true
    progress?: true
    createdAt?: true
  }

  export type DeckFlashCardMaxAggregateInputType = {
    deckId?: true
    flashId?: true
    progress?: true
    createdAt?: true
  }

  export type DeckFlashCardCountAggregateInputType = {
    deckId?: true
    flashId?: true
    progress?: true
    createdAt?: true
    _all?: true
  }

  export type DeckFlashCardAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DeckFlashCard to aggregate.
     */
    where?: DeckFlashCardWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DeckFlashCards to fetch.
     */
    orderBy?: DeckFlashCardOrderByWithRelationInput | DeckFlashCardOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DeckFlashCardWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DeckFlashCards from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DeckFlashCards.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned DeckFlashCards
    **/
    _count?: true | DeckFlashCardCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DeckFlashCardMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DeckFlashCardMaxAggregateInputType
  }

  export type GetDeckFlashCardAggregateType<T extends DeckFlashCardAggregateArgs> = {
        [P in keyof T & keyof AggregateDeckFlashCard]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDeckFlashCard[P]>
      : GetScalarType<T[P], AggregateDeckFlashCard[P]>
  }




  export type DeckFlashCardGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DeckFlashCardWhereInput
    orderBy?: DeckFlashCardOrderByWithAggregationInput | DeckFlashCardOrderByWithAggregationInput[]
    by: DeckFlashCardScalarFieldEnum[] | DeckFlashCardScalarFieldEnum
    having?: DeckFlashCardScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DeckFlashCardCountAggregateInputType | true
    _min?: DeckFlashCardMinAggregateInputType
    _max?: DeckFlashCardMaxAggregateInputType
  }

  export type DeckFlashCardGroupByOutputType = {
    deckId: string
    flashId: string
    progress: $Enums.FlashCardProgress
    createdAt: Date
    _count: DeckFlashCardCountAggregateOutputType | null
    _min: DeckFlashCardMinAggregateOutputType | null
    _max: DeckFlashCardMaxAggregateOutputType | null
  }

  type GetDeckFlashCardGroupByPayload<T extends DeckFlashCardGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DeckFlashCardGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DeckFlashCardGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DeckFlashCardGroupByOutputType[P]>
            : GetScalarType<T[P], DeckFlashCardGroupByOutputType[P]>
        }
      >
    >


  export type DeckFlashCardSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    deckId?: boolean
    flashId?: boolean
    progress?: boolean
    createdAt?: boolean
    deck?: boolean | DeckDefaultArgs<ExtArgs>
    flash?: boolean | FlashCardDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["deckFlashCard"]>



  export type DeckFlashCardSelectScalar = {
    deckId?: boolean
    flashId?: boolean
    progress?: boolean
    createdAt?: boolean
  }

  export type DeckFlashCardOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"deckId" | "flashId" | "progress" | "createdAt", ExtArgs["result"]["deckFlashCard"]>
  export type DeckFlashCardInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    deck?: boolean | DeckDefaultArgs<ExtArgs>
    flash?: boolean | FlashCardDefaultArgs<ExtArgs>
  }

  export type $DeckFlashCardPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "DeckFlashCard"
    objects: {
      deck: Prisma.$DeckPayload<ExtArgs>
      flash: Prisma.$FlashCardPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      deckId: string
      flashId: string
      progress: $Enums.FlashCardProgress
      createdAt: Date
    }, ExtArgs["result"]["deckFlashCard"]>
    composites: {}
  }

  type DeckFlashCardGetPayload<S extends boolean | null | undefined | DeckFlashCardDefaultArgs> = $Result.GetResult<Prisma.$DeckFlashCardPayload, S>

  type DeckFlashCardCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DeckFlashCardFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DeckFlashCardCountAggregateInputType | true
    }

  export interface DeckFlashCardDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['DeckFlashCard'], meta: { name: 'DeckFlashCard' } }
    /**
     * Find zero or one DeckFlashCard that matches the filter.
     * @param {DeckFlashCardFindUniqueArgs} args - Arguments to find a DeckFlashCard
     * @example
     * // Get one DeckFlashCard
     * const deckFlashCard = await prisma.deckFlashCard.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DeckFlashCardFindUniqueArgs>(args: SelectSubset<T, DeckFlashCardFindUniqueArgs<ExtArgs>>): Prisma__DeckFlashCardClient<$Result.GetResult<Prisma.$DeckFlashCardPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one DeckFlashCard that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DeckFlashCardFindUniqueOrThrowArgs} args - Arguments to find a DeckFlashCard
     * @example
     * // Get one DeckFlashCard
     * const deckFlashCard = await prisma.deckFlashCard.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DeckFlashCardFindUniqueOrThrowArgs>(args: SelectSubset<T, DeckFlashCardFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DeckFlashCardClient<$Result.GetResult<Prisma.$DeckFlashCardPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DeckFlashCard that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeckFlashCardFindFirstArgs} args - Arguments to find a DeckFlashCard
     * @example
     * // Get one DeckFlashCard
     * const deckFlashCard = await prisma.deckFlashCard.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DeckFlashCardFindFirstArgs>(args?: SelectSubset<T, DeckFlashCardFindFirstArgs<ExtArgs>>): Prisma__DeckFlashCardClient<$Result.GetResult<Prisma.$DeckFlashCardPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DeckFlashCard that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeckFlashCardFindFirstOrThrowArgs} args - Arguments to find a DeckFlashCard
     * @example
     * // Get one DeckFlashCard
     * const deckFlashCard = await prisma.deckFlashCard.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DeckFlashCardFindFirstOrThrowArgs>(args?: SelectSubset<T, DeckFlashCardFindFirstOrThrowArgs<ExtArgs>>): Prisma__DeckFlashCardClient<$Result.GetResult<Prisma.$DeckFlashCardPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more DeckFlashCards that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeckFlashCardFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all DeckFlashCards
     * const deckFlashCards = await prisma.deckFlashCard.findMany()
     * 
     * // Get first 10 DeckFlashCards
     * const deckFlashCards = await prisma.deckFlashCard.findMany({ take: 10 })
     * 
     * // Only select the `deckId`
     * const deckFlashCardWithDeckIdOnly = await prisma.deckFlashCard.findMany({ select: { deckId: true } })
     * 
     */
    findMany<T extends DeckFlashCardFindManyArgs>(args?: SelectSubset<T, DeckFlashCardFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DeckFlashCardPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a DeckFlashCard.
     * @param {DeckFlashCardCreateArgs} args - Arguments to create a DeckFlashCard.
     * @example
     * // Create one DeckFlashCard
     * const DeckFlashCard = await prisma.deckFlashCard.create({
     *   data: {
     *     // ... data to create a DeckFlashCard
     *   }
     * })
     * 
     */
    create<T extends DeckFlashCardCreateArgs>(args: SelectSubset<T, DeckFlashCardCreateArgs<ExtArgs>>): Prisma__DeckFlashCardClient<$Result.GetResult<Prisma.$DeckFlashCardPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many DeckFlashCards.
     * @param {DeckFlashCardCreateManyArgs} args - Arguments to create many DeckFlashCards.
     * @example
     * // Create many DeckFlashCards
     * const deckFlashCard = await prisma.deckFlashCard.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DeckFlashCardCreateManyArgs>(args?: SelectSubset<T, DeckFlashCardCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a DeckFlashCard.
     * @param {DeckFlashCardDeleteArgs} args - Arguments to delete one DeckFlashCard.
     * @example
     * // Delete one DeckFlashCard
     * const DeckFlashCard = await prisma.deckFlashCard.delete({
     *   where: {
     *     // ... filter to delete one DeckFlashCard
     *   }
     * })
     * 
     */
    delete<T extends DeckFlashCardDeleteArgs>(args: SelectSubset<T, DeckFlashCardDeleteArgs<ExtArgs>>): Prisma__DeckFlashCardClient<$Result.GetResult<Prisma.$DeckFlashCardPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one DeckFlashCard.
     * @param {DeckFlashCardUpdateArgs} args - Arguments to update one DeckFlashCard.
     * @example
     * // Update one DeckFlashCard
     * const deckFlashCard = await prisma.deckFlashCard.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DeckFlashCardUpdateArgs>(args: SelectSubset<T, DeckFlashCardUpdateArgs<ExtArgs>>): Prisma__DeckFlashCardClient<$Result.GetResult<Prisma.$DeckFlashCardPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more DeckFlashCards.
     * @param {DeckFlashCardDeleteManyArgs} args - Arguments to filter DeckFlashCards to delete.
     * @example
     * // Delete a few DeckFlashCards
     * const { count } = await prisma.deckFlashCard.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DeckFlashCardDeleteManyArgs>(args?: SelectSubset<T, DeckFlashCardDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DeckFlashCards.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeckFlashCardUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many DeckFlashCards
     * const deckFlashCard = await prisma.deckFlashCard.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DeckFlashCardUpdateManyArgs>(args: SelectSubset<T, DeckFlashCardUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one DeckFlashCard.
     * @param {DeckFlashCardUpsertArgs} args - Arguments to update or create a DeckFlashCard.
     * @example
     * // Update or create a DeckFlashCard
     * const deckFlashCard = await prisma.deckFlashCard.upsert({
     *   create: {
     *     // ... data to create a DeckFlashCard
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the DeckFlashCard we want to update
     *   }
     * })
     */
    upsert<T extends DeckFlashCardUpsertArgs>(args: SelectSubset<T, DeckFlashCardUpsertArgs<ExtArgs>>): Prisma__DeckFlashCardClient<$Result.GetResult<Prisma.$DeckFlashCardPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of DeckFlashCards.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeckFlashCardCountArgs} args - Arguments to filter DeckFlashCards to count.
     * @example
     * // Count the number of DeckFlashCards
     * const count = await prisma.deckFlashCard.count({
     *   where: {
     *     // ... the filter for the DeckFlashCards we want to count
     *   }
     * })
    **/
    count<T extends DeckFlashCardCountArgs>(
      args?: Subset<T, DeckFlashCardCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DeckFlashCardCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a DeckFlashCard.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeckFlashCardAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends DeckFlashCardAggregateArgs>(args: Subset<T, DeckFlashCardAggregateArgs>): Prisma.PrismaPromise<GetDeckFlashCardAggregateType<T>>

    /**
     * Group by DeckFlashCard.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeckFlashCardGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends DeckFlashCardGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DeckFlashCardGroupByArgs['orderBy'] }
        : { orderBy?: DeckFlashCardGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, DeckFlashCardGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDeckFlashCardGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the DeckFlashCard model
   */
  readonly fields: DeckFlashCardFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for DeckFlashCard.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DeckFlashCardClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    deck<T extends DeckDefaultArgs<ExtArgs> = {}>(args?: Subset<T, DeckDefaultArgs<ExtArgs>>): Prisma__DeckClient<$Result.GetResult<Prisma.$DeckPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    flash<T extends FlashCardDefaultArgs<ExtArgs> = {}>(args?: Subset<T, FlashCardDefaultArgs<ExtArgs>>): Prisma__FlashCardClient<$Result.GetResult<Prisma.$FlashCardPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the DeckFlashCard model
   */ 
  interface DeckFlashCardFieldRefs {
    readonly deckId: FieldRef<"DeckFlashCard", 'String'>
    readonly flashId: FieldRef<"DeckFlashCard", 'String'>
    readonly progress: FieldRef<"DeckFlashCard", 'FlashCardProgress'>
    readonly createdAt: FieldRef<"DeckFlashCard", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * DeckFlashCard findUnique
   */
  export type DeckFlashCardFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeckFlashCard
     */
    select?: DeckFlashCardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DeckFlashCard
     */
    omit?: DeckFlashCardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeckFlashCardInclude<ExtArgs> | null
    /**
     * Filter, which DeckFlashCard to fetch.
     */
    where: DeckFlashCardWhereUniqueInput
  }

  /**
   * DeckFlashCard findUniqueOrThrow
   */
  export type DeckFlashCardFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeckFlashCard
     */
    select?: DeckFlashCardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DeckFlashCard
     */
    omit?: DeckFlashCardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeckFlashCardInclude<ExtArgs> | null
    /**
     * Filter, which DeckFlashCard to fetch.
     */
    where: DeckFlashCardWhereUniqueInput
  }

  /**
   * DeckFlashCard findFirst
   */
  export type DeckFlashCardFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeckFlashCard
     */
    select?: DeckFlashCardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DeckFlashCard
     */
    omit?: DeckFlashCardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeckFlashCardInclude<ExtArgs> | null
    /**
     * Filter, which DeckFlashCard to fetch.
     */
    where?: DeckFlashCardWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DeckFlashCards to fetch.
     */
    orderBy?: DeckFlashCardOrderByWithRelationInput | DeckFlashCardOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DeckFlashCards.
     */
    cursor?: DeckFlashCardWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DeckFlashCards from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DeckFlashCards.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DeckFlashCards.
     */
    distinct?: DeckFlashCardScalarFieldEnum | DeckFlashCardScalarFieldEnum[]
  }

  /**
   * DeckFlashCard findFirstOrThrow
   */
  export type DeckFlashCardFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeckFlashCard
     */
    select?: DeckFlashCardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DeckFlashCard
     */
    omit?: DeckFlashCardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeckFlashCardInclude<ExtArgs> | null
    /**
     * Filter, which DeckFlashCard to fetch.
     */
    where?: DeckFlashCardWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DeckFlashCards to fetch.
     */
    orderBy?: DeckFlashCardOrderByWithRelationInput | DeckFlashCardOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DeckFlashCards.
     */
    cursor?: DeckFlashCardWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DeckFlashCards from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DeckFlashCards.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DeckFlashCards.
     */
    distinct?: DeckFlashCardScalarFieldEnum | DeckFlashCardScalarFieldEnum[]
  }

  /**
   * DeckFlashCard findMany
   */
  export type DeckFlashCardFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeckFlashCard
     */
    select?: DeckFlashCardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DeckFlashCard
     */
    omit?: DeckFlashCardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeckFlashCardInclude<ExtArgs> | null
    /**
     * Filter, which DeckFlashCards to fetch.
     */
    where?: DeckFlashCardWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DeckFlashCards to fetch.
     */
    orderBy?: DeckFlashCardOrderByWithRelationInput | DeckFlashCardOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing DeckFlashCards.
     */
    cursor?: DeckFlashCardWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DeckFlashCards from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DeckFlashCards.
     */
    skip?: number
    distinct?: DeckFlashCardScalarFieldEnum | DeckFlashCardScalarFieldEnum[]
  }

  /**
   * DeckFlashCard create
   */
  export type DeckFlashCardCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeckFlashCard
     */
    select?: DeckFlashCardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DeckFlashCard
     */
    omit?: DeckFlashCardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeckFlashCardInclude<ExtArgs> | null
    /**
     * The data needed to create a DeckFlashCard.
     */
    data: XOR<DeckFlashCardCreateInput, DeckFlashCardUncheckedCreateInput>
  }

  /**
   * DeckFlashCard createMany
   */
  export type DeckFlashCardCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many DeckFlashCards.
     */
    data: DeckFlashCardCreateManyInput | DeckFlashCardCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * DeckFlashCard update
   */
  export type DeckFlashCardUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeckFlashCard
     */
    select?: DeckFlashCardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DeckFlashCard
     */
    omit?: DeckFlashCardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeckFlashCardInclude<ExtArgs> | null
    /**
     * The data needed to update a DeckFlashCard.
     */
    data: XOR<DeckFlashCardUpdateInput, DeckFlashCardUncheckedUpdateInput>
    /**
     * Choose, which DeckFlashCard to update.
     */
    where: DeckFlashCardWhereUniqueInput
  }

  /**
   * DeckFlashCard updateMany
   */
  export type DeckFlashCardUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update DeckFlashCards.
     */
    data: XOR<DeckFlashCardUpdateManyMutationInput, DeckFlashCardUncheckedUpdateManyInput>
    /**
     * Filter which DeckFlashCards to update
     */
    where?: DeckFlashCardWhereInput
    /**
     * Limit how many DeckFlashCards to update.
     */
    limit?: number
  }

  /**
   * DeckFlashCard upsert
   */
  export type DeckFlashCardUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeckFlashCard
     */
    select?: DeckFlashCardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DeckFlashCard
     */
    omit?: DeckFlashCardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeckFlashCardInclude<ExtArgs> | null
    /**
     * The filter to search for the DeckFlashCard to update in case it exists.
     */
    where: DeckFlashCardWhereUniqueInput
    /**
     * In case the DeckFlashCard found by the `where` argument doesn't exist, create a new DeckFlashCard with this data.
     */
    create: XOR<DeckFlashCardCreateInput, DeckFlashCardUncheckedCreateInput>
    /**
     * In case the DeckFlashCard was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DeckFlashCardUpdateInput, DeckFlashCardUncheckedUpdateInput>
  }

  /**
   * DeckFlashCard delete
   */
  export type DeckFlashCardDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeckFlashCard
     */
    select?: DeckFlashCardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DeckFlashCard
     */
    omit?: DeckFlashCardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeckFlashCardInclude<ExtArgs> | null
    /**
     * Filter which DeckFlashCard to delete.
     */
    where: DeckFlashCardWhereUniqueInput
  }

  /**
   * DeckFlashCard deleteMany
   */
  export type DeckFlashCardDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DeckFlashCards to delete
     */
    where?: DeckFlashCardWhereInput
    /**
     * Limit how many DeckFlashCards to delete.
     */
    limit?: number
  }

  /**
   * DeckFlashCard without action
   */
  export type DeckFlashCardDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeckFlashCard
     */
    select?: DeckFlashCardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DeckFlashCard
     */
    omit?: DeckFlashCardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeckFlashCardInclude<ExtArgs> | null
  }


  /**
   * Model DeckAccess
   */

  export type AggregateDeckAccess = {
    _count: DeckAccessCountAggregateOutputType | null
    _min: DeckAccessMinAggregateOutputType | null
    _max: DeckAccessMaxAggregateOutputType | null
  }

  export type DeckAccessMinAggregateOutputType = {
    deckId: string | null
    userId: string | null
    level: $Enums.AccessLevel | null
    createdAt: Date | null
  }

  export type DeckAccessMaxAggregateOutputType = {
    deckId: string | null
    userId: string | null
    level: $Enums.AccessLevel | null
    createdAt: Date | null
  }

  export type DeckAccessCountAggregateOutputType = {
    deckId: number
    userId: number
    level: number
    createdAt: number
    _all: number
  }


  export type DeckAccessMinAggregateInputType = {
    deckId?: true
    userId?: true
    level?: true
    createdAt?: true
  }

  export type DeckAccessMaxAggregateInputType = {
    deckId?: true
    userId?: true
    level?: true
    createdAt?: true
  }

  export type DeckAccessCountAggregateInputType = {
    deckId?: true
    userId?: true
    level?: true
    createdAt?: true
    _all?: true
  }

  export type DeckAccessAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DeckAccess to aggregate.
     */
    where?: DeckAccessWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DeckAccesses to fetch.
     */
    orderBy?: DeckAccessOrderByWithRelationInput | DeckAccessOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DeckAccessWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DeckAccesses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DeckAccesses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned DeckAccesses
    **/
    _count?: true | DeckAccessCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DeckAccessMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DeckAccessMaxAggregateInputType
  }

  export type GetDeckAccessAggregateType<T extends DeckAccessAggregateArgs> = {
        [P in keyof T & keyof AggregateDeckAccess]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDeckAccess[P]>
      : GetScalarType<T[P], AggregateDeckAccess[P]>
  }




  export type DeckAccessGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DeckAccessWhereInput
    orderBy?: DeckAccessOrderByWithAggregationInput | DeckAccessOrderByWithAggregationInput[]
    by: DeckAccessScalarFieldEnum[] | DeckAccessScalarFieldEnum
    having?: DeckAccessScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DeckAccessCountAggregateInputType | true
    _min?: DeckAccessMinAggregateInputType
    _max?: DeckAccessMaxAggregateInputType
  }

  export type DeckAccessGroupByOutputType = {
    deckId: string
    userId: string
    level: $Enums.AccessLevel
    createdAt: Date
    _count: DeckAccessCountAggregateOutputType | null
    _min: DeckAccessMinAggregateOutputType | null
    _max: DeckAccessMaxAggregateOutputType | null
  }

  type GetDeckAccessGroupByPayload<T extends DeckAccessGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DeckAccessGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DeckAccessGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DeckAccessGroupByOutputType[P]>
            : GetScalarType<T[P], DeckAccessGroupByOutputType[P]>
        }
      >
    >


  export type DeckAccessSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    deckId?: boolean
    userId?: boolean
    level?: boolean
    createdAt?: boolean
    deck?: boolean | DeckDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["deckAccess"]>



  export type DeckAccessSelectScalar = {
    deckId?: boolean
    userId?: boolean
    level?: boolean
    createdAt?: boolean
  }

  export type DeckAccessOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"deckId" | "userId" | "level" | "createdAt", ExtArgs["result"]["deckAccess"]>
  export type DeckAccessInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    deck?: boolean | DeckDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $DeckAccessPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "DeckAccess"
    objects: {
      deck: Prisma.$DeckPayload<ExtArgs>
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      deckId: string
      userId: string
      level: $Enums.AccessLevel
      createdAt: Date
    }, ExtArgs["result"]["deckAccess"]>
    composites: {}
  }

  type DeckAccessGetPayload<S extends boolean | null | undefined | DeckAccessDefaultArgs> = $Result.GetResult<Prisma.$DeckAccessPayload, S>

  type DeckAccessCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DeckAccessFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DeckAccessCountAggregateInputType | true
    }

  export interface DeckAccessDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['DeckAccess'], meta: { name: 'DeckAccess' } }
    /**
     * Find zero or one DeckAccess that matches the filter.
     * @param {DeckAccessFindUniqueArgs} args - Arguments to find a DeckAccess
     * @example
     * // Get one DeckAccess
     * const deckAccess = await prisma.deckAccess.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DeckAccessFindUniqueArgs>(args: SelectSubset<T, DeckAccessFindUniqueArgs<ExtArgs>>): Prisma__DeckAccessClient<$Result.GetResult<Prisma.$DeckAccessPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one DeckAccess that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DeckAccessFindUniqueOrThrowArgs} args - Arguments to find a DeckAccess
     * @example
     * // Get one DeckAccess
     * const deckAccess = await prisma.deckAccess.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DeckAccessFindUniqueOrThrowArgs>(args: SelectSubset<T, DeckAccessFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DeckAccessClient<$Result.GetResult<Prisma.$DeckAccessPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DeckAccess that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeckAccessFindFirstArgs} args - Arguments to find a DeckAccess
     * @example
     * // Get one DeckAccess
     * const deckAccess = await prisma.deckAccess.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DeckAccessFindFirstArgs>(args?: SelectSubset<T, DeckAccessFindFirstArgs<ExtArgs>>): Prisma__DeckAccessClient<$Result.GetResult<Prisma.$DeckAccessPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DeckAccess that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeckAccessFindFirstOrThrowArgs} args - Arguments to find a DeckAccess
     * @example
     * // Get one DeckAccess
     * const deckAccess = await prisma.deckAccess.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DeckAccessFindFirstOrThrowArgs>(args?: SelectSubset<T, DeckAccessFindFirstOrThrowArgs<ExtArgs>>): Prisma__DeckAccessClient<$Result.GetResult<Prisma.$DeckAccessPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more DeckAccesses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeckAccessFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all DeckAccesses
     * const deckAccesses = await prisma.deckAccess.findMany()
     * 
     * // Get first 10 DeckAccesses
     * const deckAccesses = await prisma.deckAccess.findMany({ take: 10 })
     * 
     * // Only select the `deckId`
     * const deckAccessWithDeckIdOnly = await prisma.deckAccess.findMany({ select: { deckId: true } })
     * 
     */
    findMany<T extends DeckAccessFindManyArgs>(args?: SelectSubset<T, DeckAccessFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DeckAccessPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a DeckAccess.
     * @param {DeckAccessCreateArgs} args - Arguments to create a DeckAccess.
     * @example
     * // Create one DeckAccess
     * const DeckAccess = await prisma.deckAccess.create({
     *   data: {
     *     // ... data to create a DeckAccess
     *   }
     * })
     * 
     */
    create<T extends DeckAccessCreateArgs>(args: SelectSubset<T, DeckAccessCreateArgs<ExtArgs>>): Prisma__DeckAccessClient<$Result.GetResult<Prisma.$DeckAccessPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many DeckAccesses.
     * @param {DeckAccessCreateManyArgs} args - Arguments to create many DeckAccesses.
     * @example
     * // Create many DeckAccesses
     * const deckAccess = await prisma.deckAccess.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DeckAccessCreateManyArgs>(args?: SelectSubset<T, DeckAccessCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a DeckAccess.
     * @param {DeckAccessDeleteArgs} args - Arguments to delete one DeckAccess.
     * @example
     * // Delete one DeckAccess
     * const DeckAccess = await prisma.deckAccess.delete({
     *   where: {
     *     // ... filter to delete one DeckAccess
     *   }
     * })
     * 
     */
    delete<T extends DeckAccessDeleteArgs>(args: SelectSubset<T, DeckAccessDeleteArgs<ExtArgs>>): Prisma__DeckAccessClient<$Result.GetResult<Prisma.$DeckAccessPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one DeckAccess.
     * @param {DeckAccessUpdateArgs} args - Arguments to update one DeckAccess.
     * @example
     * // Update one DeckAccess
     * const deckAccess = await prisma.deckAccess.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DeckAccessUpdateArgs>(args: SelectSubset<T, DeckAccessUpdateArgs<ExtArgs>>): Prisma__DeckAccessClient<$Result.GetResult<Prisma.$DeckAccessPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more DeckAccesses.
     * @param {DeckAccessDeleteManyArgs} args - Arguments to filter DeckAccesses to delete.
     * @example
     * // Delete a few DeckAccesses
     * const { count } = await prisma.deckAccess.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DeckAccessDeleteManyArgs>(args?: SelectSubset<T, DeckAccessDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DeckAccesses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeckAccessUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many DeckAccesses
     * const deckAccess = await prisma.deckAccess.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DeckAccessUpdateManyArgs>(args: SelectSubset<T, DeckAccessUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one DeckAccess.
     * @param {DeckAccessUpsertArgs} args - Arguments to update or create a DeckAccess.
     * @example
     * // Update or create a DeckAccess
     * const deckAccess = await prisma.deckAccess.upsert({
     *   create: {
     *     // ... data to create a DeckAccess
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the DeckAccess we want to update
     *   }
     * })
     */
    upsert<T extends DeckAccessUpsertArgs>(args: SelectSubset<T, DeckAccessUpsertArgs<ExtArgs>>): Prisma__DeckAccessClient<$Result.GetResult<Prisma.$DeckAccessPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of DeckAccesses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeckAccessCountArgs} args - Arguments to filter DeckAccesses to count.
     * @example
     * // Count the number of DeckAccesses
     * const count = await prisma.deckAccess.count({
     *   where: {
     *     // ... the filter for the DeckAccesses we want to count
     *   }
     * })
    **/
    count<T extends DeckAccessCountArgs>(
      args?: Subset<T, DeckAccessCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DeckAccessCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a DeckAccess.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeckAccessAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends DeckAccessAggregateArgs>(args: Subset<T, DeckAccessAggregateArgs>): Prisma.PrismaPromise<GetDeckAccessAggregateType<T>>

    /**
     * Group by DeckAccess.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeckAccessGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends DeckAccessGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DeckAccessGroupByArgs['orderBy'] }
        : { orderBy?: DeckAccessGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, DeckAccessGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDeckAccessGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the DeckAccess model
   */
  readonly fields: DeckAccessFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for DeckAccess.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DeckAccessClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    deck<T extends DeckDefaultArgs<ExtArgs> = {}>(args?: Subset<T, DeckDefaultArgs<ExtArgs>>): Prisma__DeckClient<$Result.GetResult<Prisma.$DeckPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the DeckAccess model
   */ 
  interface DeckAccessFieldRefs {
    readonly deckId: FieldRef<"DeckAccess", 'String'>
    readonly userId: FieldRef<"DeckAccess", 'String'>
    readonly level: FieldRef<"DeckAccess", 'AccessLevel'>
    readonly createdAt: FieldRef<"DeckAccess", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * DeckAccess findUnique
   */
  export type DeckAccessFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeckAccess
     */
    select?: DeckAccessSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DeckAccess
     */
    omit?: DeckAccessOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeckAccessInclude<ExtArgs> | null
    /**
     * Filter, which DeckAccess to fetch.
     */
    where: DeckAccessWhereUniqueInput
  }

  /**
   * DeckAccess findUniqueOrThrow
   */
  export type DeckAccessFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeckAccess
     */
    select?: DeckAccessSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DeckAccess
     */
    omit?: DeckAccessOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeckAccessInclude<ExtArgs> | null
    /**
     * Filter, which DeckAccess to fetch.
     */
    where: DeckAccessWhereUniqueInput
  }

  /**
   * DeckAccess findFirst
   */
  export type DeckAccessFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeckAccess
     */
    select?: DeckAccessSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DeckAccess
     */
    omit?: DeckAccessOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeckAccessInclude<ExtArgs> | null
    /**
     * Filter, which DeckAccess to fetch.
     */
    where?: DeckAccessWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DeckAccesses to fetch.
     */
    orderBy?: DeckAccessOrderByWithRelationInput | DeckAccessOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DeckAccesses.
     */
    cursor?: DeckAccessWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DeckAccesses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DeckAccesses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DeckAccesses.
     */
    distinct?: DeckAccessScalarFieldEnum | DeckAccessScalarFieldEnum[]
  }

  /**
   * DeckAccess findFirstOrThrow
   */
  export type DeckAccessFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeckAccess
     */
    select?: DeckAccessSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DeckAccess
     */
    omit?: DeckAccessOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeckAccessInclude<ExtArgs> | null
    /**
     * Filter, which DeckAccess to fetch.
     */
    where?: DeckAccessWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DeckAccesses to fetch.
     */
    orderBy?: DeckAccessOrderByWithRelationInput | DeckAccessOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DeckAccesses.
     */
    cursor?: DeckAccessWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DeckAccesses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DeckAccesses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DeckAccesses.
     */
    distinct?: DeckAccessScalarFieldEnum | DeckAccessScalarFieldEnum[]
  }

  /**
   * DeckAccess findMany
   */
  export type DeckAccessFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeckAccess
     */
    select?: DeckAccessSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DeckAccess
     */
    omit?: DeckAccessOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeckAccessInclude<ExtArgs> | null
    /**
     * Filter, which DeckAccesses to fetch.
     */
    where?: DeckAccessWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DeckAccesses to fetch.
     */
    orderBy?: DeckAccessOrderByWithRelationInput | DeckAccessOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing DeckAccesses.
     */
    cursor?: DeckAccessWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DeckAccesses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DeckAccesses.
     */
    skip?: number
    distinct?: DeckAccessScalarFieldEnum | DeckAccessScalarFieldEnum[]
  }

  /**
   * DeckAccess create
   */
  export type DeckAccessCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeckAccess
     */
    select?: DeckAccessSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DeckAccess
     */
    omit?: DeckAccessOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeckAccessInclude<ExtArgs> | null
    /**
     * The data needed to create a DeckAccess.
     */
    data: XOR<DeckAccessCreateInput, DeckAccessUncheckedCreateInput>
  }

  /**
   * DeckAccess createMany
   */
  export type DeckAccessCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many DeckAccesses.
     */
    data: DeckAccessCreateManyInput | DeckAccessCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * DeckAccess update
   */
  export type DeckAccessUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeckAccess
     */
    select?: DeckAccessSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DeckAccess
     */
    omit?: DeckAccessOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeckAccessInclude<ExtArgs> | null
    /**
     * The data needed to update a DeckAccess.
     */
    data: XOR<DeckAccessUpdateInput, DeckAccessUncheckedUpdateInput>
    /**
     * Choose, which DeckAccess to update.
     */
    where: DeckAccessWhereUniqueInput
  }

  /**
   * DeckAccess updateMany
   */
  export type DeckAccessUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update DeckAccesses.
     */
    data: XOR<DeckAccessUpdateManyMutationInput, DeckAccessUncheckedUpdateManyInput>
    /**
     * Filter which DeckAccesses to update
     */
    where?: DeckAccessWhereInput
    /**
     * Limit how many DeckAccesses to update.
     */
    limit?: number
  }

  /**
   * DeckAccess upsert
   */
  export type DeckAccessUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeckAccess
     */
    select?: DeckAccessSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DeckAccess
     */
    omit?: DeckAccessOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeckAccessInclude<ExtArgs> | null
    /**
     * The filter to search for the DeckAccess to update in case it exists.
     */
    where: DeckAccessWhereUniqueInput
    /**
     * In case the DeckAccess found by the `where` argument doesn't exist, create a new DeckAccess with this data.
     */
    create: XOR<DeckAccessCreateInput, DeckAccessUncheckedCreateInput>
    /**
     * In case the DeckAccess was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DeckAccessUpdateInput, DeckAccessUncheckedUpdateInput>
  }

  /**
   * DeckAccess delete
   */
  export type DeckAccessDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeckAccess
     */
    select?: DeckAccessSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DeckAccess
     */
    omit?: DeckAccessOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeckAccessInclude<ExtArgs> | null
    /**
     * Filter which DeckAccess to delete.
     */
    where: DeckAccessWhereUniqueInput
  }

  /**
   * DeckAccess deleteMany
   */
  export type DeckAccessDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DeckAccesses to delete
     */
    where?: DeckAccessWhereInput
    /**
     * Limit how many DeckAccesses to delete.
     */
    limit?: number
  }

  /**
   * DeckAccess without action
   */
  export type DeckAccessDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeckAccess
     */
    select?: DeckAccessSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DeckAccess
     */
    omit?: DeckAccessOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeckAccessInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const PostScalarFieldEnum: {
    id: 'id',
    name: 'name',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    createdById: 'createdById'
  };

  export type PostScalarFieldEnum = (typeof PostScalarFieldEnum)[keyof typeof PostScalarFieldEnum]


  export const AccountScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    type: 'type',
    provider: 'provider',
    providerAccountId: 'providerAccountId',
    refresh_token: 'refresh_token',
    access_token: 'access_token',
    expires_at: 'expires_at',
    token_type: 'token_type',
    scope: 'scope',
    id_token: 'id_token',
    session_state: 'session_state',
    refresh_token_expires_in: 'refresh_token_expires_in'
  };

  export type AccountScalarFieldEnum = (typeof AccountScalarFieldEnum)[keyof typeof AccountScalarFieldEnum]


  export const SessionScalarFieldEnum: {
    id: 'id',
    sessionToken: 'sessionToken',
    userId: 'userId',
    expires: 'expires'
  };

  export type SessionScalarFieldEnum = (typeof SessionScalarFieldEnum)[keyof typeof SessionScalarFieldEnum]


  export const UserScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    emailVerified: 'emailVerified',
    image: 'image'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const VerificationTokenScalarFieldEnum: {
    identifier: 'identifier',
    token: 'token',
    expires: 'expires'
  };

  export type VerificationTokenScalarFieldEnum = (typeof VerificationTokenScalarFieldEnum)[keyof typeof VerificationTokenScalarFieldEnum]


  export const DeckScalarFieldEnum: {
    id: 'id',
    name: 'name',
    ownerId: 'ownerId',
    public: 'public'
  };

  export type DeckScalarFieldEnum = (typeof DeckScalarFieldEnum)[keyof typeof DeckScalarFieldEnum]


  export const FlashCardScalarFieldEnum: {
    id: 'id',
    ownerId: 'ownerId',
    title: 'title',
    content: 'content'
  };

  export type FlashCardScalarFieldEnum = (typeof FlashCardScalarFieldEnum)[keyof typeof FlashCardScalarFieldEnum]


  export const DeckFlashCardScalarFieldEnum: {
    deckId: 'deckId',
    flashId: 'flashId',
    progress: 'progress',
    createdAt: 'createdAt'
  };

  export type DeckFlashCardScalarFieldEnum = (typeof DeckFlashCardScalarFieldEnum)[keyof typeof DeckFlashCardScalarFieldEnum]


  export const DeckAccessScalarFieldEnum: {
    deckId: 'deckId',
    userId: 'userId',
    level: 'level',
    createdAt: 'createdAt'
  };

  export type DeckAccessScalarFieldEnum = (typeof DeckAccessScalarFieldEnum)[keyof typeof DeckAccessScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const PostOrderByRelevanceFieldEnum: {
    name: 'name',
    createdById: 'createdById'
  };

  export type PostOrderByRelevanceFieldEnum = (typeof PostOrderByRelevanceFieldEnum)[keyof typeof PostOrderByRelevanceFieldEnum]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const AccountOrderByRelevanceFieldEnum: {
    id: 'id',
    userId: 'userId',
    type: 'type',
    provider: 'provider',
    providerAccountId: 'providerAccountId',
    refresh_token: 'refresh_token',
    access_token: 'access_token',
    token_type: 'token_type',
    scope: 'scope',
    id_token: 'id_token',
    session_state: 'session_state'
  };

  export type AccountOrderByRelevanceFieldEnum = (typeof AccountOrderByRelevanceFieldEnum)[keyof typeof AccountOrderByRelevanceFieldEnum]


  export const SessionOrderByRelevanceFieldEnum: {
    id: 'id',
    sessionToken: 'sessionToken',
    userId: 'userId'
  };

  export type SessionOrderByRelevanceFieldEnum = (typeof SessionOrderByRelevanceFieldEnum)[keyof typeof SessionOrderByRelevanceFieldEnum]


  export const UserOrderByRelevanceFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    image: 'image'
  };

  export type UserOrderByRelevanceFieldEnum = (typeof UserOrderByRelevanceFieldEnum)[keyof typeof UserOrderByRelevanceFieldEnum]


  export const VerificationTokenOrderByRelevanceFieldEnum: {
    identifier: 'identifier',
    token: 'token'
  };

  export type VerificationTokenOrderByRelevanceFieldEnum = (typeof VerificationTokenOrderByRelevanceFieldEnum)[keyof typeof VerificationTokenOrderByRelevanceFieldEnum]


  export const DeckOrderByRelevanceFieldEnum: {
    id: 'id',
    name: 'name',
    ownerId: 'ownerId'
  };

  export type DeckOrderByRelevanceFieldEnum = (typeof DeckOrderByRelevanceFieldEnum)[keyof typeof DeckOrderByRelevanceFieldEnum]


  export const FlashCardOrderByRelevanceFieldEnum: {
    id: 'id',
    ownerId: 'ownerId',
    title: 'title',
    content: 'content'
  };

  export type FlashCardOrderByRelevanceFieldEnum = (typeof FlashCardOrderByRelevanceFieldEnum)[keyof typeof FlashCardOrderByRelevanceFieldEnum]


  export const DeckFlashCardOrderByRelevanceFieldEnum: {
    deckId: 'deckId',
    flashId: 'flashId'
  };

  export type DeckFlashCardOrderByRelevanceFieldEnum = (typeof DeckFlashCardOrderByRelevanceFieldEnum)[keyof typeof DeckFlashCardOrderByRelevanceFieldEnum]


  export const DeckAccessOrderByRelevanceFieldEnum: {
    deckId: 'deckId',
    userId: 'userId'
  };

  export type DeckAccessOrderByRelevanceFieldEnum = (typeof DeckAccessOrderByRelevanceFieldEnum)[keyof typeof DeckAccessOrderByRelevanceFieldEnum]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'AccessLevel'
   */
  export type EnumAccessLevelFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AccessLevel'>
    


  /**
   * Reference to a field of type 'FlashCardProgress'
   */
  export type EnumFlashCardProgressFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'FlashCardProgress'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type PostWhereInput = {
    AND?: PostWhereInput | PostWhereInput[]
    OR?: PostWhereInput[]
    NOT?: PostWhereInput | PostWhereInput[]
    id?: IntFilter<"Post"> | number
    name?: StringFilter<"Post"> | string
    createdAt?: DateTimeFilter<"Post"> | Date | string
    updatedAt?: DateTimeFilter<"Post"> | Date | string
    createdById?: StringFilter<"Post"> | string
    createdBy?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type PostOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    createdById?: SortOrder
    createdBy?: UserOrderByWithRelationInput
    _relevance?: PostOrderByRelevanceInput
  }

  export type PostWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: PostWhereInput | PostWhereInput[]
    OR?: PostWhereInput[]
    NOT?: PostWhereInput | PostWhereInput[]
    name?: StringFilter<"Post"> | string
    createdAt?: DateTimeFilter<"Post"> | Date | string
    updatedAt?: DateTimeFilter<"Post"> | Date | string
    createdById?: StringFilter<"Post"> | string
    createdBy?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type PostOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    createdById?: SortOrder
    _count?: PostCountOrderByAggregateInput
    _avg?: PostAvgOrderByAggregateInput
    _max?: PostMaxOrderByAggregateInput
    _min?: PostMinOrderByAggregateInput
    _sum?: PostSumOrderByAggregateInput
  }

  export type PostScalarWhereWithAggregatesInput = {
    AND?: PostScalarWhereWithAggregatesInput | PostScalarWhereWithAggregatesInput[]
    OR?: PostScalarWhereWithAggregatesInput[]
    NOT?: PostScalarWhereWithAggregatesInput | PostScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Post"> | number
    name?: StringWithAggregatesFilter<"Post"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Post"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Post"> | Date | string
    createdById?: StringWithAggregatesFilter<"Post"> | string
  }

  export type AccountWhereInput = {
    AND?: AccountWhereInput | AccountWhereInput[]
    OR?: AccountWhereInput[]
    NOT?: AccountWhereInput | AccountWhereInput[]
    id?: StringFilter<"Account"> | string
    userId?: StringFilter<"Account"> | string
    type?: StringFilter<"Account"> | string
    provider?: StringFilter<"Account"> | string
    providerAccountId?: StringFilter<"Account"> | string
    refresh_token?: StringNullableFilter<"Account"> | string | null
    access_token?: StringNullableFilter<"Account"> | string | null
    expires_at?: IntNullableFilter<"Account"> | number | null
    token_type?: StringNullableFilter<"Account"> | string | null
    scope?: StringNullableFilter<"Account"> | string | null
    id_token?: StringNullableFilter<"Account"> | string | null
    session_state?: StringNullableFilter<"Account"> | string | null
    refresh_token_expires_in?: IntNullableFilter<"Account"> | number | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type AccountOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    provider?: SortOrder
    providerAccountId?: SortOrder
    refresh_token?: SortOrderInput | SortOrder
    access_token?: SortOrderInput | SortOrder
    expires_at?: SortOrderInput | SortOrder
    token_type?: SortOrderInput | SortOrder
    scope?: SortOrderInput | SortOrder
    id_token?: SortOrderInput | SortOrder
    session_state?: SortOrderInput | SortOrder
    refresh_token_expires_in?: SortOrderInput | SortOrder
    user?: UserOrderByWithRelationInput
    _relevance?: AccountOrderByRelevanceInput
  }

  export type AccountWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    provider_providerAccountId?: AccountProviderProviderAccountIdCompoundUniqueInput
    AND?: AccountWhereInput | AccountWhereInput[]
    OR?: AccountWhereInput[]
    NOT?: AccountWhereInput | AccountWhereInput[]
    userId?: StringFilter<"Account"> | string
    type?: StringFilter<"Account"> | string
    provider?: StringFilter<"Account"> | string
    providerAccountId?: StringFilter<"Account"> | string
    refresh_token?: StringNullableFilter<"Account"> | string | null
    access_token?: StringNullableFilter<"Account"> | string | null
    expires_at?: IntNullableFilter<"Account"> | number | null
    token_type?: StringNullableFilter<"Account"> | string | null
    scope?: StringNullableFilter<"Account"> | string | null
    id_token?: StringNullableFilter<"Account"> | string | null
    session_state?: StringNullableFilter<"Account"> | string | null
    refresh_token_expires_in?: IntNullableFilter<"Account"> | number | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "provider_providerAccountId">

  export type AccountOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    provider?: SortOrder
    providerAccountId?: SortOrder
    refresh_token?: SortOrderInput | SortOrder
    access_token?: SortOrderInput | SortOrder
    expires_at?: SortOrderInput | SortOrder
    token_type?: SortOrderInput | SortOrder
    scope?: SortOrderInput | SortOrder
    id_token?: SortOrderInput | SortOrder
    session_state?: SortOrderInput | SortOrder
    refresh_token_expires_in?: SortOrderInput | SortOrder
    _count?: AccountCountOrderByAggregateInput
    _avg?: AccountAvgOrderByAggregateInput
    _max?: AccountMaxOrderByAggregateInput
    _min?: AccountMinOrderByAggregateInput
    _sum?: AccountSumOrderByAggregateInput
  }

  export type AccountScalarWhereWithAggregatesInput = {
    AND?: AccountScalarWhereWithAggregatesInput | AccountScalarWhereWithAggregatesInput[]
    OR?: AccountScalarWhereWithAggregatesInput[]
    NOT?: AccountScalarWhereWithAggregatesInput | AccountScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Account"> | string
    userId?: StringWithAggregatesFilter<"Account"> | string
    type?: StringWithAggregatesFilter<"Account"> | string
    provider?: StringWithAggregatesFilter<"Account"> | string
    providerAccountId?: StringWithAggregatesFilter<"Account"> | string
    refresh_token?: StringNullableWithAggregatesFilter<"Account"> | string | null
    access_token?: StringNullableWithAggregatesFilter<"Account"> | string | null
    expires_at?: IntNullableWithAggregatesFilter<"Account"> | number | null
    token_type?: StringNullableWithAggregatesFilter<"Account"> | string | null
    scope?: StringNullableWithAggregatesFilter<"Account"> | string | null
    id_token?: StringNullableWithAggregatesFilter<"Account"> | string | null
    session_state?: StringNullableWithAggregatesFilter<"Account"> | string | null
    refresh_token_expires_in?: IntNullableWithAggregatesFilter<"Account"> | number | null
  }

  export type SessionWhereInput = {
    AND?: SessionWhereInput | SessionWhereInput[]
    OR?: SessionWhereInput[]
    NOT?: SessionWhereInput | SessionWhereInput[]
    id?: StringFilter<"Session"> | string
    sessionToken?: StringFilter<"Session"> | string
    userId?: StringFilter<"Session"> | string
    expires?: DateTimeFilter<"Session"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type SessionOrderByWithRelationInput = {
    id?: SortOrder
    sessionToken?: SortOrder
    userId?: SortOrder
    expires?: SortOrder
    user?: UserOrderByWithRelationInput
    _relevance?: SessionOrderByRelevanceInput
  }

  export type SessionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    sessionToken?: string
    AND?: SessionWhereInput | SessionWhereInput[]
    OR?: SessionWhereInput[]
    NOT?: SessionWhereInput | SessionWhereInput[]
    userId?: StringFilter<"Session"> | string
    expires?: DateTimeFilter<"Session"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "sessionToken">

  export type SessionOrderByWithAggregationInput = {
    id?: SortOrder
    sessionToken?: SortOrder
    userId?: SortOrder
    expires?: SortOrder
    _count?: SessionCountOrderByAggregateInput
    _max?: SessionMaxOrderByAggregateInput
    _min?: SessionMinOrderByAggregateInput
  }

  export type SessionScalarWhereWithAggregatesInput = {
    AND?: SessionScalarWhereWithAggregatesInput | SessionScalarWhereWithAggregatesInput[]
    OR?: SessionScalarWhereWithAggregatesInput[]
    NOT?: SessionScalarWhereWithAggregatesInput | SessionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Session"> | string
    sessionToken?: StringWithAggregatesFilter<"Session"> | string
    userId?: StringWithAggregatesFilter<"Session"> | string
    expires?: DateTimeWithAggregatesFilter<"Session"> | Date | string
  }

  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    name?: StringNullableFilter<"User"> | string | null
    email?: StringNullableFilter<"User"> | string | null
    emailVerified?: DateTimeNullableFilter<"User"> | Date | string | null
    image?: StringNullableFilter<"User"> | string | null
    accounts?: AccountListRelationFilter
    sessions?: SessionListRelationFilter
    posts?: PostListRelationFilter
    decks?: DeckListRelationFilter
    flashcards?: FlashCardListRelationFilter
    accesses?: DeckAccessListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    emailVerified?: SortOrderInput | SortOrder
    image?: SortOrderInput | SortOrder
    accounts?: AccountOrderByRelationAggregateInput
    sessions?: SessionOrderByRelationAggregateInput
    posts?: PostOrderByRelationAggregateInput
    decks?: DeckOrderByRelationAggregateInput
    flashcards?: FlashCardOrderByRelationAggregateInput
    accesses?: DeckAccessOrderByRelationAggregateInput
    _relevance?: UserOrderByRelevanceInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringNullableFilter<"User"> | string | null
    emailVerified?: DateTimeNullableFilter<"User"> | Date | string | null
    image?: StringNullableFilter<"User"> | string | null
    accounts?: AccountListRelationFilter
    sessions?: SessionListRelationFilter
    posts?: PostListRelationFilter
    decks?: DeckListRelationFilter
    flashcards?: FlashCardListRelationFilter
    accesses?: DeckAccessListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    emailVerified?: SortOrderInput | SortOrder
    image?: SortOrderInput | SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    name?: StringNullableWithAggregatesFilter<"User"> | string | null
    email?: StringNullableWithAggregatesFilter<"User"> | string | null
    emailVerified?: DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null
    image?: StringNullableWithAggregatesFilter<"User"> | string | null
  }

  export type VerificationTokenWhereInput = {
    AND?: VerificationTokenWhereInput | VerificationTokenWhereInput[]
    OR?: VerificationTokenWhereInput[]
    NOT?: VerificationTokenWhereInput | VerificationTokenWhereInput[]
    identifier?: StringFilter<"VerificationToken"> | string
    token?: StringFilter<"VerificationToken"> | string
    expires?: DateTimeFilter<"VerificationToken"> | Date | string
  }

  export type VerificationTokenOrderByWithRelationInput = {
    identifier?: SortOrder
    token?: SortOrder
    expires?: SortOrder
    _relevance?: VerificationTokenOrderByRelevanceInput
  }

  export type VerificationTokenWhereUniqueInput = Prisma.AtLeast<{
    token?: string
    identifier_token?: VerificationTokenIdentifierTokenCompoundUniqueInput
    AND?: VerificationTokenWhereInput | VerificationTokenWhereInput[]
    OR?: VerificationTokenWhereInput[]
    NOT?: VerificationTokenWhereInput | VerificationTokenWhereInput[]
    identifier?: StringFilter<"VerificationToken"> | string
    expires?: DateTimeFilter<"VerificationToken"> | Date | string
  }, "token" | "identifier_token">

  export type VerificationTokenOrderByWithAggregationInput = {
    identifier?: SortOrder
    token?: SortOrder
    expires?: SortOrder
    _count?: VerificationTokenCountOrderByAggregateInput
    _max?: VerificationTokenMaxOrderByAggregateInput
    _min?: VerificationTokenMinOrderByAggregateInput
  }

  export type VerificationTokenScalarWhereWithAggregatesInput = {
    AND?: VerificationTokenScalarWhereWithAggregatesInput | VerificationTokenScalarWhereWithAggregatesInput[]
    OR?: VerificationTokenScalarWhereWithAggregatesInput[]
    NOT?: VerificationTokenScalarWhereWithAggregatesInput | VerificationTokenScalarWhereWithAggregatesInput[]
    identifier?: StringWithAggregatesFilter<"VerificationToken"> | string
    token?: StringWithAggregatesFilter<"VerificationToken"> | string
    expires?: DateTimeWithAggregatesFilter<"VerificationToken"> | Date | string
  }

  export type DeckWhereInput = {
    AND?: DeckWhereInput | DeckWhereInput[]
    OR?: DeckWhereInput[]
    NOT?: DeckWhereInput | DeckWhereInput[]
    id?: StringFilter<"Deck"> | string
    name?: StringFilter<"Deck"> | string
    ownerId?: StringFilter<"Deck"> | string
    public?: EnumAccessLevelFilter<"Deck"> | $Enums.AccessLevel
    owner?: XOR<UserScalarRelationFilter, UserWhereInput>
    accesses?: DeckAccessListRelationFilter
    flashcards?: FlashCardListRelationFilter
    deckflashcard?: DeckFlashCardListRelationFilter
  }

  export type DeckOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    ownerId?: SortOrder
    public?: SortOrder
    owner?: UserOrderByWithRelationInput
    accesses?: DeckAccessOrderByRelationAggregateInput
    flashcards?: FlashCardOrderByRelationAggregateInput
    deckflashcard?: DeckFlashCardOrderByRelationAggregateInput
    _relevance?: DeckOrderByRelevanceInput
  }

  export type DeckWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: DeckWhereInput | DeckWhereInput[]
    OR?: DeckWhereInput[]
    NOT?: DeckWhereInput | DeckWhereInput[]
    name?: StringFilter<"Deck"> | string
    ownerId?: StringFilter<"Deck"> | string
    public?: EnumAccessLevelFilter<"Deck"> | $Enums.AccessLevel
    owner?: XOR<UserScalarRelationFilter, UserWhereInput>
    accesses?: DeckAccessListRelationFilter
    flashcards?: FlashCardListRelationFilter
    deckflashcard?: DeckFlashCardListRelationFilter
  }, "id">

  export type DeckOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    ownerId?: SortOrder
    public?: SortOrder
    _count?: DeckCountOrderByAggregateInput
    _max?: DeckMaxOrderByAggregateInput
    _min?: DeckMinOrderByAggregateInput
  }

  export type DeckScalarWhereWithAggregatesInput = {
    AND?: DeckScalarWhereWithAggregatesInput | DeckScalarWhereWithAggregatesInput[]
    OR?: DeckScalarWhereWithAggregatesInput[]
    NOT?: DeckScalarWhereWithAggregatesInput | DeckScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Deck"> | string
    name?: StringWithAggregatesFilter<"Deck"> | string
    ownerId?: StringWithAggregatesFilter<"Deck"> | string
    public?: EnumAccessLevelWithAggregatesFilter<"Deck"> | $Enums.AccessLevel
  }

  export type FlashCardWhereInput = {
    AND?: FlashCardWhereInput | FlashCardWhereInput[]
    OR?: FlashCardWhereInput[]
    NOT?: FlashCardWhereInput | FlashCardWhereInput[]
    id?: StringFilter<"FlashCard"> | string
    ownerId?: StringFilter<"FlashCard"> | string
    title?: StringFilter<"FlashCard"> | string
    content?: StringFilter<"FlashCard"> | string
    owner?: XOR<UserScalarRelationFilter, UserWhereInput>
    decks?: DeckListRelationFilter
    deckflashcard?: DeckFlashCardListRelationFilter
  }

  export type FlashCardOrderByWithRelationInput = {
    id?: SortOrder
    ownerId?: SortOrder
    title?: SortOrder
    content?: SortOrder
    owner?: UserOrderByWithRelationInput
    decks?: DeckOrderByRelationAggregateInput
    deckflashcard?: DeckFlashCardOrderByRelationAggregateInput
    _relevance?: FlashCardOrderByRelevanceInput
  }

  export type FlashCardWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: FlashCardWhereInput | FlashCardWhereInput[]
    OR?: FlashCardWhereInput[]
    NOT?: FlashCardWhereInput | FlashCardWhereInput[]
    ownerId?: StringFilter<"FlashCard"> | string
    title?: StringFilter<"FlashCard"> | string
    content?: StringFilter<"FlashCard"> | string
    owner?: XOR<UserScalarRelationFilter, UserWhereInput>
    decks?: DeckListRelationFilter
    deckflashcard?: DeckFlashCardListRelationFilter
  }, "id">

  export type FlashCardOrderByWithAggregationInput = {
    id?: SortOrder
    ownerId?: SortOrder
    title?: SortOrder
    content?: SortOrder
    _count?: FlashCardCountOrderByAggregateInput
    _max?: FlashCardMaxOrderByAggregateInput
    _min?: FlashCardMinOrderByAggregateInput
  }

  export type FlashCardScalarWhereWithAggregatesInput = {
    AND?: FlashCardScalarWhereWithAggregatesInput | FlashCardScalarWhereWithAggregatesInput[]
    OR?: FlashCardScalarWhereWithAggregatesInput[]
    NOT?: FlashCardScalarWhereWithAggregatesInput | FlashCardScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"FlashCard"> | string
    ownerId?: StringWithAggregatesFilter<"FlashCard"> | string
    title?: StringWithAggregatesFilter<"FlashCard"> | string
    content?: StringWithAggregatesFilter<"FlashCard"> | string
  }

  export type DeckFlashCardWhereInput = {
    AND?: DeckFlashCardWhereInput | DeckFlashCardWhereInput[]
    OR?: DeckFlashCardWhereInput[]
    NOT?: DeckFlashCardWhereInput | DeckFlashCardWhereInput[]
    deckId?: StringFilter<"DeckFlashCard"> | string
    flashId?: StringFilter<"DeckFlashCard"> | string
    progress?: EnumFlashCardProgressFilter<"DeckFlashCard"> | $Enums.FlashCardProgress
    createdAt?: DateTimeFilter<"DeckFlashCard"> | Date | string
    deck?: XOR<DeckScalarRelationFilter, DeckWhereInput>
    flash?: XOR<FlashCardScalarRelationFilter, FlashCardWhereInput>
  }

  export type DeckFlashCardOrderByWithRelationInput = {
    deckId?: SortOrder
    flashId?: SortOrder
    progress?: SortOrder
    createdAt?: SortOrder
    deck?: DeckOrderByWithRelationInput
    flash?: FlashCardOrderByWithRelationInput
    _relevance?: DeckFlashCardOrderByRelevanceInput
  }

  export type DeckFlashCardWhereUniqueInput = Prisma.AtLeast<{
    deckId_flashId?: DeckFlashCardDeckIdFlashIdCompoundUniqueInput
    AND?: DeckFlashCardWhereInput | DeckFlashCardWhereInput[]
    OR?: DeckFlashCardWhereInput[]
    NOT?: DeckFlashCardWhereInput | DeckFlashCardWhereInput[]
    deckId?: StringFilter<"DeckFlashCard"> | string
    flashId?: StringFilter<"DeckFlashCard"> | string
    progress?: EnumFlashCardProgressFilter<"DeckFlashCard"> | $Enums.FlashCardProgress
    createdAt?: DateTimeFilter<"DeckFlashCard"> | Date | string
    deck?: XOR<DeckScalarRelationFilter, DeckWhereInput>
    flash?: XOR<FlashCardScalarRelationFilter, FlashCardWhereInput>
  }, "deckId_flashId">

  export type DeckFlashCardOrderByWithAggregationInput = {
    deckId?: SortOrder
    flashId?: SortOrder
    progress?: SortOrder
    createdAt?: SortOrder
    _count?: DeckFlashCardCountOrderByAggregateInput
    _max?: DeckFlashCardMaxOrderByAggregateInput
    _min?: DeckFlashCardMinOrderByAggregateInput
  }

  export type DeckFlashCardScalarWhereWithAggregatesInput = {
    AND?: DeckFlashCardScalarWhereWithAggregatesInput | DeckFlashCardScalarWhereWithAggregatesInput[]
    OR?: DeckFlashCardScalarWhereWithAggregatesInput[]
    NOT?: DeckFlashCardScalarWhereWithAggregatesInput | DeckFlashCardScalarWhereWithAggregatesInput[]
    deckId?: StringWithAggregatesFilter<"DeckFlashCard"> | string
    flashId?: StringWithAggregatesFilter<"DeckFlashCard"> | string
    progress?: EnumFlashCardProgressWithAggregatesFilter<"DeckFlashCard"> | $Enums.FlashCardProgress
    createdAt?: DateTimeWithAggregatesFilter<"DeckFlashCard"> | Date | string
  }

  export type DeckAccessWhereInput = {
    AND?: DeckAccessWhereInput | DeckAccessWhereInput[]
    OR?: DeckAccessWhereInput[]
    NOT?: DeckAccessWhereInput | DeckAccessWhereInput[]
    deckId?: StringFilter<"DeckAccess"> | string
    userId?: StringFilter<"DeckAccess"> | string
    level?: EnumAccessLevelFilter<"DeckAccess"> | $Enums.AccessLevel
    createdAt?: DateTimeFilter<"DeckAccess"> | Date | string
    deck?: XOR<DeckScalarRelationFilter, DeckWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type DeckAccessOrderByWithRelationInput = {
    deckId?: SortOrder
    userId?: SortOrder
    level?: SortOrder
    createdAt?: SortOrder
    deck?: DeckOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
    _relevance?: DeckAccessOrderByRelevanceInput
  }

  export type DeckAccessWhereUniqueInput = Prisma.AtLeast<{
    deckId_userId?: DeckAccessDeckIdUserIdCompoundUniqueInput
    AND?: DeckAccessWhereInput | DeckAccessWhereInput[]
    OR?: DeckAccessWhereInput[]
    NOT?: DeckAccessWhereInput | DeckAccessWhereInput[]
    deckId?: StringFilter<"DeckAccess"> | string
    userId?: StringFilter<"DeckAccess"> | string
    level?: EnumAccessLevelFilter<"DeckAccess"> | $Enums.AccessLevel
    createdAt?: DateTimeFilter<"DeckAccess"> | Date | string
    deck?: XOR<DeckScalarRelationFilter, DeckWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "deckId_userId">

  export type DeckAccessOrderByWithAggregationInput = {
    deckId?: SortOrder
    userId?: SortOrder
    level?: SortOrder
    createdAt?: SortOrder
    _count?: DeckAccessCountOrderByAggregateInput
    _max?: DeckAccessMaxOrderByAggregateInput
    _min?: DeckAccessMinOrderByAggregateInput
  }

  export type DeckAccessScalarWhereWithAggregatesInput = {
    AND?: DeckAccessScalarWhereWithAggregatesInput | DeckAccessScalarWhereWithAggregatesInput[]
    OR?: DeckAccessScalarWhereWithAggregatesInput[]
    NOT?: DeckAccessScalarWhereWithAggregatesInput | DeckAccessScalarWhereWithAggregatesInput[]
    deckId?: StringWithAggregatesFilter<"DeckAccess"> | string
    userId?: StringWithAggregatesFilter<"DeckAccess"> | string
    level?: EnumAccessLevelWithAggregatesFilter<"DeckAccess"> | $Enums.AccessLevel
    createdAt?: DateTimeWithAggregatesFilter<"DeckAccess"> | Date | string
  }

  export type PostCreateInput = {
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    createdBy: UserCreateNestedOneWithoutPostsInput
  }

  export type PostUncheckedCreateInput = {
    id?: number
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    createdById: string
  }

  export type PostUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: UserUpdateOneRequiredWithoutPostsNestedInput
  }

  export type PostUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdById?: StringFieldUpdateOperationsInput | string
  }

  export type PostCreateManyInput = {
    id?: number
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    createdById: string
  }

  export type PostUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PostUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdById?: StringFieldUpdateOperationsInput | string
  }

  export type AccountCreateInput = {
    id?: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token?: string | null
    access_token?: string | null
    expires_at?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_state?: string | null
    refresh_token_expires_in?: number | null
    user: UserCreateNestedOneWithoutAccountsInput
  }

  export type AccountUncheckedCreateInput = {
    id?: string
    userId: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token?: string | null
    access_token?: string | null
    expires_at?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_state?: string | null
    refresh_token_expires_in?: number | null
  }

  export type AccountUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
    refresh_token_expires_in?: NullableIntFieldUpdateOperationsInput | number | null
    user?: UserUpdateOneRequiredWithoutAccountsNestedInput
  }

  export type AccountUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
    refresh_token_expires_in?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type AccountCreateManyInput = {
    id?: string
    userId: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token?: string | null
    access_token?: string | null
    expires_at?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_state?: string | null
    refresh_token_expires_in?: number | null
  }

  export type AccountUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
    refresh_token_expires_in?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type AccountUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
    refresh_token_expires_in?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type SessionCreateInput = {
    id?: string
    sessionToken: string
    expires: Date | string
    user: UserCreateNestedOneWithoutSessionsInput
  }

  export type SessionUncheckedCreateInput = {
    id?: string
    sessionToken: string
    userId: string
    expires: Date | string
  }

  export type SessionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionToken?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutSessionsNestedInput
  }

  export type SessionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionToken?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionCreateManyInput = {
    id?: string
    sessionToken: string
    userId: string
    expires: Date | string
  }

  export type SessionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionToken?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionToken?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateInput = {
    id?: string
    name?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    accounts?: AccountCreateNestedManyWithoutUserInput
    sessions?: SessionCreateNestedManyWithoutUserInput
    posts?: PostCreateNestedManyWithoutCreatedByInput
    decks?: DeckCreateNestedManyWithoutOwnerInput
    flashcards?: FlashCardCreateNestedManyWithoutOwnerInput
    accesses?: DeckAccessCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    name?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    posts?: PostUncheckedCreateNestedManyWithoutCreatedByInput
    decks?: DeckUncheckedCreateNestedManyWithoutOwnerInput
    flashcards?: FlashCardUncheckedCreateNestedManyWithoutOwnerInput
    accesses?: DeckAccessUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    accounts?: AccountUpdateManyWithoutUserNestedInput
    sessions?: SessionUpdateManyWithoutUserNestedInput
    posts?: PostUpdateManyWithoutCreatedByNestedInput
    decks?: DeckUpdateManyWithoutOwnerNestedInput
    flashcards?: FlashCardUpdateManyWithoutOwnerNestedInput
    accesses?: DeckAccessUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    posts?: PostUncheckedUpdateManyWithoutCreatedByNestedInput
    decks?: DeckUncheckedUpdateManyWithoutOwnerNestedInput
    flashcards?: FlashCardUncheckedUpdateManyWithoutOwnerNestedInput
    accesses?: DeckAccessUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    name?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    image?: string | null
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type VerificationTokenCreateInput = {
    identifier: string
    token: string
    expires: Date | string
  }

  export type VerificationTokenUncheckedCreateInput = {
    identifier: string
    token: string
    expires: Date | string
  }

  export type VerificationTokenUpdateInput = {
    identifier?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VerificationTokenUncheckedUpdateInput = {
    identifier?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VerificationTokenCreateManyInput = {
    identifier: string
    token: string
    expires: Date | string
  }

  export type VerificationTokenUpdateManyMutationInput = {
    identifier?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VerificationTokenUncheckedUpdateManyInput = {
    identifier?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DeckCreateInput = {
    id?: string
    name: string
    public?: $Enums.AccessLevel
    owner: UserCreateNestedOneWithoutDecksInput
    accesses?: DeckAccessCreateNestedManyWithoutDeckInput
    flashcards?: FlashCardCreateNestedManyWithoutDecksInput
    deckflashcard?: DeckFlashCardCreateNestedManyWithoutDeckInput
  }

  export type DeckUncheckedCreateInput = {
    id?: string
    name: string
    ownerId: string
    public?: $Enums.AccessLevel
    accesses?: DeckAccessUncheckedCreateNestedManyWithoutDeckInput
    flashcards?: FlashCardUncheckedCreateNestedManyWithoutDecksInput
    deckflashcard?: DeckFlashCardUncheckedCreateNestedManyWithoutDeckInput
  }

  export type DeckUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    public?: EnumAccessLevelFieldUpdateOperationsInput | $Enums.AccessLevel
    owner?: UserUpdateOneRequiredWithoutDecksNestedInput
    accesses?: DeckAccessUpdateManyWithoutDeckNestedInput
    flashcards?: FlashCardUpdateManyWithoutDecksNestedInput
    deckflashcard?: DeckFlashCardUpdateManyWithoutDeckNestedInput
  }

  export type DeckUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    ownerId?: StringFieldUpdateOperationsInput | string
    public?: EnumAccessLevelFieldUpdateOperationsInput | $Enums.AccessLevel
    accesses?: DeckAccessUncheckedUpdateManyWithoutDeckNestedInput
    flashcards?: FlashCardUncheckedUpdateManyWithoutDecksNestedInput
    deckflashcard?: DeckFlashCardUncheckedUpdateManyWithoutDeckNestedInput
  }

  export type DeckCreateManyInput = {
    id?: string
    name: string
    ownerId: string
    public?: $Enums.AccessLevel
  }

  export type DeckUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    public?: EnumAccessLevelFieldUpdateOperationsInput | $Enums.AccessLevel
  }

  export type DeckUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    ownerId?: StringFieldUpdateOperationsInput | string
    public?: EnumAccessLevelFieldUpdateOperationsInput | $Enums.AccessLevel
  }

  export type FlashCardCreateInput = {
    id?: string
    title: string
    content: string
    owner: UserCreateNestedOneWithoutFlashcardsInput
    decks?: DeckCreateNestedManyWithoutFlashcardsInput
    deckflashcard?: DeckFlashCardCreateNestedManyWithoutFlashInput
  }

  export type FlashCardUncheckedCreateInput = {
    id?: string
    ownerId: string
    title: string
    content: string
    decks?: DeckUncheckedCreateNestedManyWithoutFlashcardsInput
    deckflashcard?: DeckFlashCardUncheckedCreateNestedManyWithoutFlashInput
  }

  export type FlashCardUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    owner?: UserUpdateOneRequiredWithoutFlashcardsNestedInput
    decks?: DeckUpdateManyWithoutFlashcardsNestedInput
    deckflashcard?: DeckFlashCardUpdateManyWithoutFlashNestedInput
  }

  export type FlashCardUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    ownerId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    decks?: DeckUncheckedUpdateManyWithoutFlashcardsNestedInput
    deckflashcard?: DeckFlashCardUncheckedUpdateManyWithoutFlashNestedInput
  }

  export type FlashCardCreateManyInput = {
    id?: string
    ownerId: string
    title: string
    content: string
  }

  export type FlashCardUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
  }

  export type FlashCardUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    ownerId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
  }

  export type DeckFlashCardCreateInput = {
    progress?: $Enums.FlashCardProgress
    createdAt?: Date | string
    deck: DeckCreateNestedOneWithoutDeckflashcardInput
    flash: FlashCardCreateNestedOneWithoutDeckflashcardInput
  }

  export type DeckFlashCardUncheckedCreateInput = {
    deckId: string
    flashId: string
    progress?: $Enums.FlashCardProgress
    createdAt?: Date | string
  }

  export type DeckFlashCardUpdateInput = {
    progress?: EnumFlashCardProgressFieldUpdateOperationsInput | $Enums.FlashCardProgress
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deck?: DeckUpdateOneRequiredWithoutDeckflashcardNestedInput
    flash?: FlashCardUpdateOneRequiredWithoutDeckflashcardNestedInput
  }

  export type DeckFlashCardUncheckedUpdateInput = {
    deckId?: StringFieldUpdateOperationsInput | string
    flashId?: StringFieldUpdateOperationsInput | string
    progress?: EnumFlashCardProgressFieldUpdateOperationsInput | $Enums.FlashCardProgress
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DeckFlashCardCreateManyInput = {
    deckId: string
    flashId: string
    progress?: $Enums.FlashCardProgress
    createdAt?: Date | string
  }

  export type DeckFlashCardUpdateManyMutationInput = {
    progress?: EnumFlashCardProgressFieldUpdateOperationsInput | $Enums.FlashCardProgress
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DeckFlashCardUncheckedUpdateManyInput = {
    deckId?: StringFieldUpdateOperationsInput | string
    flashId?: StringFieldUpdateOperationsInput | string
    progress?: EnumFlashCardProgressFieldUpdateOperationsInput | $Enums.FlashCardProgress
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DeckAccessCreateInput = {
    level?: $Enums.AccessLevel
    createdAt?: Date | string
    deck: DeckCreateNestedOneWithoutAccessesInput
    user: UserCreateNestedOneWithoutAccessesInput
  }

  export type DeckAccessUncheckedCreateInput = {
    deckId: string
    userId: string
    level?: $Enums.AccessLevel
    createdAt?: Date | string
  }

  export type DeckAccessUpdateInput = {
    level?: EnumAccessLevelFieldUpdateOperationsInput | $Enums.AccessLevel
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deck?: DeckUpdateOneRequiredWithoutAccessesNestedInput
    user?: UserUpdateOneRequiredWithoutAccessesNestedInput
  }

  export type DeckAccessUncheckedUpdateInput = {
    deckId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    level?: EnumAccessLevelFieldUpdateOperationsInput | $Enums.AccessLevel
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DeckAccessCreateManyInput = {
    deckId: string
    userId: string
    level?: $Enums.AccessLevel
    createdAt?: Date | string
  }

  export type DeckAccessUpdateManyMutationInput = {
    level?: EnumAccessLevelFieldUpdateOperationsInput | $Enums.AccessLevel
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DeckAccessUncheckedUpdateManyInput = {
    deckId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    level?: EnumAccessLevelFieldUpdateOperationsInput | $Enums.AccessLevel
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type PostOrderByRelevanceInput = {
    fields: PostOrderByRelevanceFieldEnum | PostOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type PostCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    createdById?: SortOrder
  }

  export type PostAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type PostMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    createdById?: SortOrder
  }

  export type PostMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    createdById?: SortOrder
  }

  export type PostSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type AccountOrderByRelevanceInput = {
    fields: AccountOrderByRelevanceFieldEnum | AccountOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type AccountProviderProviderAccountIdCompoundUniqueInput = {
    provider: string
    providerAccountId: string
  }

  export type AccountCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    provider?: SortOrder
    providerAccountId?: SortOrder
    refresh_token?: SortOrder
    access_token?: SortOrder
    expires_at?: SortOrder
    token_type?: SortOrder
    scope?: SortOrder
    id_token?: SortOrder
    session_state?: SortOrder
    refresh_token_expires_in?: SortOrder
  }

  export type AccountAvgOrderByAggregateInput = {
    expires_at?: SortOrder
    refresh_token_expires_in?: SortOrder
  }

  export type AccountMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    provider?: SortOrder
    providerAccountId?: SortOrder
    refresh_token?: SortOrder
    access_token?: SortOrder
    expires_at?: SortOrder
    token_type?: SortOrder
    scope?: SortOrder
    id_token?: SortOrder
    session_state?: SortOrder
    refresh_token_expires_in?: SortOrder
  }

  export type AccountMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    provider?: SortOrder
    providerAccountId?: SortOrder
    refresh_token?: SortOrder
    access_token?: SortOrder
    expires_at?: SortOrder
    token_type?: SortOrder
    scope?: SortOrder
    id_token?: SortOrder
    session_state?: SortOrder
    refresh_token_expires_in?: SortOrder
  }

  export type AccountSumOrderByAggregateInput = {
    expires_at?: SortOrder
    refresh_token_expires_in?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type SessionOrderByRelevanceInput = {
    fields: SessionOrderByRelevanceFieldEnum | SessionOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type SessionCountOrderByAggregateInput = {
    id?: SortOrder
    sessionToken?: SortOrder
    userId?: SortOrder
    expires?: SortOrder
  }

  export type SessionMaxOrderByAggregateInput = {
    id?: SortOrder
    sessionToken?: SortOrder
    userId?: SortOrder
    expires?: SortOrder
  }

  export type SessionMinOrderByAggregateInput = {
    id?: SortOrder
    sessionToken?: SortOrder
    userId?: SortOrder
    expires?: SortOrder
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type AccountListRelationFilter = {
    every?: AccountWhereInput
    some?: AccountWhereInput
    none?: AccountWhereInput
  }

  export type SessionListRelationFilter = {
    every?: SessionWhereInput
    some?: SessionWhereInput
    none?: SessionWhereInput
  }

  export type PostListRelationFilter = {
    every?: PostWhereInput
    some?: PostWhereInput
    none?: PostWhereInput
  }

  export type DeckListRelationFilter = {
    every?: DeckWhereInput
    some?: DeckWhereInput
    none?: DeckWhereInput
  }

  export type FlashCardListRelationFilter = {
    every?: FlashCardWhereInput
    some?: FlashCardWhereInput
    none?: FlashCardWhereInput
  }

  export type DeckAccessListRelationFilter = {
    every?: DeckAccessWhereInput
    some?: DeckAccessWhereInput
    none?: DeckAccessWhereInput
  }

  export type AccountOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SessionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PostOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type DeckOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type FlashCardOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type DeckAccessOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserOrderByRelevanceInput = {
    fields: UserOrderByRelevanceFieldEnum | UserOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    emailVerified?: SortOrder
    image?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    emailVerified?: SortOrder
    image?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    emailVerified?: SortOrder
    image?: SortOrder
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type VerificationTokenOrderByRelevanceInput = {
    fields: VerificationTokenOrderByRelevanceFieldEnum | VerificationTokenOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type VerificationTokenIdentifierTokenCompoundUniqueInput = {
    identifier: string
    token: string
  }

  export type VerificationTokenCountOrderByAggregateInput = {
    identifier?: SortOrder
    token?: SortOrder
    expires?: SortOrder
  }

  export type VerificationTokenMaxOrderByAggregateInput = {
    identifier?: SortOrder
    token?: SortOrder
    expires?: SortOrder
  }

  export type VerificationTokenMinOrderByAggregateInput = {
    identifier?: SortOrder
    token?: SortOrder
    expires?: SortOrder
  }

  export type EnumAccessLevelFilter<$PrismaModel = never> = {
    equals?: $Enums.AccessLevel | EnumAccessLevelFieldRefInput<$PrismaModel>
    in?: $Enums.AccessLevel[]
    notIn?: $Enums.AccessLevel[]
    not?: NestedEnumAccessLevelFilter<$PrismaModel> | $Enums.AccessLevel
  }

  export type DeckFlashCardListRelationFilter = {
    every?: DeckFlashCardWhereInput
    some?: DeckFlashCardWhereInput
    none?: DeckFlashCardWhereInput
  }

  export type DeckFlashCardOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type DeckOrderByRelevanceInput = {
    fields: DeckOrderByRelevanceFieldEnum | DeckOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type DeckCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    ownerId?: SortOrder
    public?: SortOrder
  }

  export type DeckMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    ownerId?: SortOrder
    public?: SortOrder
  }

  export type DeckMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    ownerId?: SortOrder
    public?: SortOrder
  }

  export type EnumAccessLevelWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AccessLevel | EnumAccessLevelFieldRefInput<$PrismaModel>
    in?: $Enums.AccessLevel[]
    notIn?: $Enums.AccessLevel[]
    not?: NestedEnumAccessLevelWithAggregatesFilter<$PrismaModel> | $Enums.AccessLevel
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAccessLevelFilter<$PrismaModel>
    _max?: NestedEnumAccessLevelFilter<$PrismaModel>
  }

  export type FlashCardOrderByRelevanceInput = {
    fields: FlashCardOrderByRelevanceFieldEnum | FlashCardOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type FlashCardCountOrderByAggregateInput = {
    id?: SortOrder
    ownerId?: SortOrder
    title?: SortOrder
    content?: SortOrder
  }

  export type FlashCardMaxOrderByAggregateInput = {
    id?: SortOrder
    ownerId?: SortOrder
    title?: SortOrder
    content?: SortOrder
  }

  export type FlashCardMinOrderByAggregateInput = {
    id?: SortOrder
    ownerId?: SortOrder
    title?: SortOrder
    content?: SortOrder
  }

  export type EnumFlashCardProgressFilter<$PrismaModel = never> = {
    equals?: $Enums.FlashCardProgress | EnumFlashCardProgressFieldRefInput<$PrismaModel>
    in?: $Enums.FlashCardProgress[]
    notIn?: $Enums.FlashCardProgress[]
    not?: NestedEnumFlashCardProgressFilter<$PrismaModel> | $Enums.FlashCardProgress
  }

  export type DeckScalarRelationFilter = {
    is?: DeckWhereInput
    isNot?: DeckWhereInput
  }

  export type FlashCardScalarRelationFilter = {
    is?: FlashCardWhereInput
    isNot?: FlashCardWhereInput
  }

  export type DeckFlashCardOrderByRelevanceInput = {
    fields: DeckFlashCardOrderByRelevanceFieldEnum | DeckFlashCardOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type DeckFlashCardDeckIdFlashIdCompoundUniqueInput = {
    deckId: string
    flashId: string
  }

  export type DeckFlashCardCountOrderByAggregateInput = {
    deckId?: SortOrder
    flashId?: SortOrder
    progress?: SortOrder
    createdAt?: SortOrder
  }

  export type DeckFlashCardMaxOrderByAggregateInput = {
    deckId?: SortOrder
    flashId?: SortOrder
    progress?: SortOrder
    createdAt?: SortOrder
  }

  export type DeckFlashCardMinOrderByAggregateInput = {
    deckId?: SortOrder
    flashId?: SortOrder
    progress?: SortOrder
    createdAt?: SortOrder
  }

  export type EnumFlashCardProgressWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.FlashCardProgress | EnumFlashCardProgressFieldRefInput<$PrismaModel>
    in?: $Enums.FlashCardProgress[]
    notIn?: $Enums.FlashCardProgress[]
    not?: NestedEnumFlashCardProgressWithAggregatesFilter<$PrismaModel> | $Enums.FlashCardProgress
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumFlashCardProgressFilter<$PrismaModel>
    _max?: NestedEnumFlashCardProgressFilter<$PrismaModel>
  }

  export type DeckAccessOrderByRelevanceInput = {
    fields: DeckAccessOrderByRelevanceFieldEnum | DeckAccessOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type DeckAccessDeckIdUserIdCompoundUniqueInput = {
    deckId: string
    userId: string
  }

  export type DeckAccessCountOrderByAggregateInput = {
    deckId?: SortOrder
    userId?: SortOrder
    level?: SortOrder
    createdAt?: SortOrder
  }

  export type DeckAccessMaxOrderByAggregateInput = {
    deckId?: SortOrder
    userId?: SortOrder
    level?: SortOrder
    createdAt?: SortOrder
  }

  export type DeckAccessMinOrderByAggregateInput = {
    deckId?: SortOrder
    userId?: SortOrder
    level?: SortOrder
    createdAt?: SortOrder
  }

  export type UserCreateNestedOneWithoutPostsInput = {
    create?: XOR<UserCreateWithoutPostsInput, UserUncheckedCreateWithoutPostsInput>
    connectOrCreate?: UserCreateOrConnectWithoutPostsInput
    connect?: UserWhereUniqueInput
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type UserUpdateOneRequiredWithoutPostsNestedInput = {
    create?: XOR<UserCreateWithoutPostsInput, UserUncheckedCreateWithoutPostsInput>
    connectOrCreate?: UserCreateOrConnectWithoutPostsInput
    upsert?: UserUpsertWithoutPostsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutPostsInput, UserUpdateWithoutPostsInput>, UserUncheckedUpdateWithoutPostsInput>
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserCreateNestedOneWithoutAccountsInput = {
    create?: XOR<UserCreateWithoutAccountsInput, UserUncheckedCreateWithoutAccountsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAccountsInput
    connect?: UserWhereUniqueInput
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserUpdateOneRequiredWithoutAccountsNestedInput = {
    create?: XOR<UserCreateWithoutAccountsInput, UserUncheckedCreateWithoutAccountsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAccountsInput
    upsert?: UserUpsertWithoutAccountsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutAccountsInput, UserUpdateWithoutAccountsInput>, UserUncheckedUpdateWithoutAccountsInput>
  }

  export type UserCreateNestedOneWithoutSessionsInput = {
    create?: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSessionsInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutSessionsNestedInput = {
    create?: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSessionsInput
    upsert?: UserUpsertWithoutSessionsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutSessionsInput, UserUpdateWithoutSessionsInput>, UserUncheckedUpdateWithoutSessionsInput>
  }

  export type AccountCreateNestedManyWithoutUserInput = {
    create?: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput> | AccountCreateWithoutUserInput[] | AccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutUserInput | AccountCreateOrConnectWithoutUserInput[]
    createMany?: AccountCreateManyUserInputEnvelope
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
  }

  export type SessionCreateNestedManyWithoutUserInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
  }

  export type PostCreateNestedManyWithoutCreatedByInput = {
    create?: XOR<PostCreateWithoutCreatedByInput, PostUncheckedCreateWithoutCreatedByInput> | PostCreateWithoutCreatedByInput[] | PostUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: PostCreateOrConnectWithoutCreatedByInput | PostCreateOrConnectWithoutCreatedByInput[]
    createMany?: PostCreateManyCreatedByInputEnvelope
    connect?: PostWhereUniqueInput | PostWhereUniqueInput[]
  }

  export type DeckCreateNestedManyWithoutOwnerInput = {
    create?: XOR<DeckCreateWithoutOwnerInput, DeckUncheckedCreateWithoutOwnerInput> | DeckCreateWithoutOwnerInput[] | DeckUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: DeckCreateOrConnectWithoutOwnerInput | DeckCreateOrConnectWithoutOwnerInput[]
    createMany?: DeckCreateManyOwnerInputEnvelope
    connect?: DeckWhereUniqueInput | DeckWhereUniqueInput[]
  }

  export type FlashCardCreateNestedManyWithoutOwnerInput = {
    create?: XOR<FlashCardCreateWithoutOwnerInput, FlashCardUncheckedCreateWithoutOwnerInput> | FlashCardCreateWithoutOwnerInput[] | FlashCardUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: FlashCardCreateOrConnectWithoutOwnerInput | FlashCardCreateOrConnectWithoutOwnerInput[]
    createMany?: FlashCardCreateManyOwnerInputEnvelope
    connect?: FlashCardWhereUniqueInput | FlashCardWhereUniqueInput[]
  }

  export type DeckAccessCreateNestedManyWithoutUserInput = {
    create?: XOR<DeckAccessCreateWithoutUserInput, DeckAccessUncheckedCreateWithoutUserInput> | DeckAccessCreateWithoutUserInput[] | DeckAccessUncheckedCreateWithoutUserInput[]
    connectOrCreate?: DeckAccessCreateOrConnectWithoutUserInput | DeckAccessCreateOrConnectWithoutUserInput[]
    createMany?: DeckAccessCreateManyUserInputEnvelope
    connect?: DeckAccessWhereUniqueInput | DeckAccessWhereUniqueInput[]
  }

  export type AccountUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput> | AccountCreateWithoutUserInput[] | AccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutUserInput | AccountCreateOrConnectWithoutUserInput[]
    createMany?: AccountCreateManyUserInputEnvelope
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
  }

  export type SessionUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
  }

  export type PostUncheckedCreateNestedManyWithoutCreatedByInput = {
    create?: XOR<PostCreateWithoutCreatedByInput, PostUncheckedCreateWithoutCreatedByInput> | PostCreateWithoutCreatedByInput[] | PostUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: PostCreateOrConnectWithoutCreatedByInput | PostCreateOrConnectWithoutCreatedByInput[]
    createMany?: PostCreateManyCreatedByInputEnvelope
    connect?: PostWhereUniqueInput | PostWhereUniqueInput[]
  }

  export type DeckUncheckedCreateNestedManyWithoutOwnerInput = {
    create?: XOR<DeckCreateWithoutOwnerInput, DeckUncheckedCreateWithoutOwnerInput> | DeckCreateWithoutOwnerInput[] | DeckUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: DeckCreateOrConnectWithoutOwnerInput | DeckCreateOrConnectWithoutOwnerInput[]
    createMany?: DeckCreateManyOwnerInputEnvelope
    connect?: DeckWhereUniqueInput | DeckWhereUniqueInput[]
  }

  export type FlashCardUncheckedCreateNestedManyWithoutOwnerInput = {
    create?: XOR<FlashCardCreateWithoutOwnerInput, FlashCardUncheckedCreateWithoutOwnerInput> | FlashCardCreateWithoutOwnerInput[] | FlashCardUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: FlashCardCreateOrConnectWithoutOwnerInput | FlashCardCreateOrConnectWithoutOwnerInput[]
    createMany?: FlashCardCreateManyOwnerInputEnvelope
    connect?: FlashCardWhereUniqueInput | FlashCardWhereUniqueInput[]
  }

  export type DeckAccessUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<DeckAccessCreateWithoutUserInput, DeckAccessUncheckedCreateWithoutUserInput> | DeckAccessCreateWithoutUserInput[] | DeckAccessUncheckedCreateWithoutUserInput[]
    connectOrCreate?: DeckAccessCreateOrConnectWithoutUserInput | DeckAccessCreateOrConnectWithoutUserInput[]
    createMany?: DeckAccessCreateManyUserInputEnvelope
    connect?: DeckAccessWhereUniqueInput | DeckAccessWhereUniqueInput[]
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type AccountUpdateManyWithoutUserNestedInput = {
    create?: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput> | AccountCreateWithoutUserInput[] | AccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutUserInput | AccountCreateOrConnectWithoutUserInput[]
    upsert?: AccountUpsertWithWhereUniqueWithoutUserInput | AccountUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AccountCreateManyUserInputEnvelope
    set?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    disconnect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    delete?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    update?: AccountUpdateWithWhereUniqueWithoutUserInput | AccountUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AccountUpdateManyWithWhereWithoutUserInput | AccountUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AccountScalarWhereInput | AccountScalarWhereInput[]
  }

  export type SessionUpdateManyWithoutUserNestedInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    upsert?: SessionUpsertWithWhereUniqueWithoutUserInput | SessionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    set?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    disconnect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    delete?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    update?: SessionUpdateWithWhereUniqueWithoutUserInput | SessionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SessionUpdateManyWithWhereWithoutUserInput | SessionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SessionScalarWhereInput | SessionScalarWhereInput[]
  }

  export type PostUpdateManyWithoutCreatedByNestedInput = {
    create?: XOR<PostCreateWithoutCreatedByInput, PostUncheckedCreateWithoutCreatedByInput> | PostCreateWithoutCreatedByInput[] | PostUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: PostCreateOrConnectWithoutCreatedByInput | PostCreateOrConnectWithoutCreatedByInput[]
    upsert?: PostUpsertWithWhereUniqueWithoutCreatedByInput | PostUpsertWithWhereUniqueWithoutCreatedByInput[]
    createMany?: PostCreateManyCreatedByInputEnvelope
    set?: PostWhereUniqueInput | PostWhereUniqueInput[]
    disconnect?: PostWhereUniqueInput | PostWhereUniqueInput[]
    delete?: PostWhereUniqueInput | PostWhereUniqueInput[]
    connect?: PostWhereUniqueInput | PostWhereUniqueInput[]
    update?: PostUpdateWithWhereUniqueWithoutCreatedByInput | PostUpdateWithWhereUniqueWithoutCreatedByInput[]
    updateMany?: PostUpdateManyWithWhereWithoutCreatedByInput | PostUpdateManyWithWhereWithoutCreatedByInput[]
    deleteMany?: PostScalarWhereInput | PostScalarWhereInput[]
  }

  export type DeckUpdateManyWithoutOwnerNestedInput = {
    create?: XOR<DeckCreateWithoutOwnerInput, DeckUncheckedCreateWithoutOwnerInput> | DeckCreateWithoutOwnerInput[] | DeckUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: DeckCreateOrConnectWithoutOwnerInput | DeckCreateOrConnectWithoutOwnerInput[]
    upsert?: DeckUpsertWithWhereUniqueWithoutOwnerInput | DeckUpsertWithWhereUniqueWithoutOwnerInput[]
    createMany?: DeckCreateManyOwnerInputEnvelope
    set?: DeckWhereUniqueInput | DeckWhereUniqueInput[]
    disconnect?: DeckWhereUniqueInput | DeckWhereUniqueInput[]
    delete?: DeckWhereUniqueInput | DeckWhereUniqueInput[]
    connect?: DeckWhereUniqueInput | DeckWhereUniqueInput[]
    update?: DeckUpdateWithWhereUniqueWithoutOwnerInput | DeckUpdateWithWhereUniqueWithoutOwnerInput[]
    updateMany?: DeckUpdateManyWithWhereWithoutOwnerInput | DeckUpdateManyWithWhereWithoutOwnerInput[]
    deleteMany?: DeckScalarWhereInput | DeckScalarWhereInput[]
  }

  export type FlashCardUpdateManyWithoutOwnerNestedInput = {
    create?: XOR<FlashCardCreateWithoutOwnerInput, FlashCardUncheckedCreateWithoutOwnerInput> | FlashCardCreateWithoutOwnerInput[] | FlashCardUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: FlashCardCreateOrConnectWithoutOwnerInput | FlashCardCreateOrConnectWithoutOwnerInput[]
    upsert?: FlashCardUpsertWithWhereUniqueWithoutOwnerInput | FlashCardUpsertWithWhereUniqueWithoutOwnerInput[]
    createMany?: FlashCardCreateManyOwnerInputEnvelope
    set?: FlashCardWhereUniqueInput | FlashCardWhereUniqueInput[]
    disconnect?: FlashCardWhereUniqueInput | FlashCardWhereUniqueInput[]
    delete?: FlashCardWhereUniqueInput | FlashCardWhereUniqueInput[]
    connect?: FlashCardWhereUniqueInput | FlashCardWhereUniqueInput[]
    update?: FlashCardUpdateWithWhereUniqueWithoutOwnerInput | FlashCardUpdateWithWhereUniqueWithoutOwnerInput[]
    updateMany?: FlashCardUpdateManyWithWhereWithoutOwnerInput | FlashCardUpdateManyWithWhereWithoutOwnerInput[]
    deleteMany?: FlashCardScalarWhereInput | FlashCardScalarWhereInput[]
  }

  export type DeckAccessUpdateManyWithoutUserNestedInput = {
    create?: XOR<DeckAccessCreateWithoutUserInput, DeckAccessUncheckedCreateWithoutUserInput> | DeckAccessCreateWithoutUserInput[] | DeckAccessUncheckedCreateWithoutUserInput[]
    connectOrCreate?: DeckAccessCreateOrConnectWithoutUserInput | DeckAccessCreateOrConnectWithoutUserInput[]
    upsert?: DeckAccessUpsertWithWhereUniqueWithoutUserInput | DeckAccessUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: DeckAccessCreateManyUserInputEnvelope
    set?: DeckAccessWhereUniqueInput | DeckAccessWhereUniqueInput[]
    disconnect?: DeckAccessWhereUniqueInput | DeckAccessWhereUniqueInput[]
    delete?: DeckAccessWhereUniqueInput | DeckAccessWhereUniqueInput[]
    connect?: DeckAccessWhereUniqueInput | DeckAccessWhereUniqueInput[]
    update?: DeckAccessUpdateWithWhereUniqueWithoutUserInput | DeckAccessUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: DeckAccessUpdateManyWithWhereWithoutUserInput | DeckAccessUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: DeckAccessScalarWhereInput | DeckAccessScalarWhereInput[]
  }

  export type AccountUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput> | AccountCreateWithoutUserInput[] | AccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutUserInput | AccountCreateOrConnectWithoutUserInput[]
    upsert?: AccountUpsertWithWhereUniqueWithoutUserInput | AccountUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AccountCreateManyUserInputEnvelope
    set?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    disconnect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    delete?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    update?: AccountUpdateWithWhereUniqueWithoutUserInput | AccountUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AccountUpdateManyWithWhereWithoutUserInput | AccountUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AccountScalarWhereInput | AccountScalarWhereInput[]
  }

  export type SessionUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    upsert?: SessionUpsertWithWhereUniqueWithoutUserInput | SessionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    set?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    disconnect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    delete?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    update?: SessionUpdateWithWhereUniqueWithoutUserInput | SessionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SessionUpdateManyWithWhereWithoutUserInput | SessionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SessionScalarWhereInput | SessionScalarWhereInput[]
  }

  export type PostUncheckedUpdateManyWithoutCreatedByNestedInput = {
    create?: XOR<PostCreateWithoutCreatedByInput, PostUncheckedCreateWithoutCreatedByInput> | PostCreateWithoutCreatedByInput[] | PostUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: PostCreateOrConnectWithoutCreatedByInput | PostCreateOrConnectWithoutCreatedByInput[]
    upsert?: PostUpsertWithWhereUniqueWithoutCreatedByInput | PostUpsertWithWhereUniqueWithoutCreatedByInput[]
    createMany?: PostCreateManyCreatedByInputEnvelope
    set?: PostWhereUniqueInput | PostWhereUniqueInput[]
    disconnect?: PostWhereUniqueInput | PostWhereUniqueInput[]
    delete?: PostWhereUniqueInput | PostWhereUniqueInput[]
    connect?: PostWhereUniqueInput | PostWhereUniqueInput[]
    update?: PostUpdateWithWhereUniqueWithoutCreatedByInput | PostUpdateWithWhereUniqueWithoutCreatedByInput[]
    updateMany?: PostUpdateManyWithWhereWithoutCreatedByInput | PostUpdateManyWithWhereWithoutCreatedByInput[]
    deleteMany?: PostScalarWhereInput | PostScalarWhereInput[]
  }

  export type DeckUncheckedUpdateManyWithoutOwnerNestedInput = {
    create?: XOR<DeckCreateWithoutOwnerInput, DeckUncheckedCreateWithoutOwnerInput> | DeckCreateWithoutOwnerInput[] | DeckUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: DeckCreateOrConnectWithoutOwnerInput | DeckCreateOrConnectWithoutOwnerInput[]
    upsert?: DeckUpsertWithWhereUniqueWithoutOwnerInput | DeckUpsertWithWhereUniqueWithoutOwnerInput[]
    createMany?: DeckCreateManyOwnerInputEnvelope
    set?: DeckWhereUniqueInput | DeckWhereUniqueInput[]
    disconnect?: DeckWhereUniqueInput | DeckWhereUniqueInput[]
    delete?: DeckWhereUniqueInput | DeckWhereUniqueInput[]
    connect?: DeckWhereUniqueInput | DeckWhereUniqueInput[]
    update?: DeckUpdateWithWhereUniqueWithoutOwnerInput | DeckUpdateWithWhereUniqueWithoutOwnerInput[]
    updateMany?: DeckUpdateManyWithWhereWithoutOwnerInput | DeckUpdateManyWithWhereWithoutOwnerInput[]
    deleteMany?: DeckScalarWhereInput | DeckScalarWhereInput[]
  }

  export type FlashCardUncheckedUpdateManyWithoutOwnerNestedInput = {
    create?: XOR<FlashCardCreateWithoutOwnerInput, FlashCardUncheckedCreateWithoutOwnerInput> | FlashCardCreateWithoutOwnerInput[] | FlashCardUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: FlashCardCreateOrConnectWithoutOwnerInput | FlashCardCreateOrConnectWithoutOwnerInput[]
    upsert?: FlashCardUpsertWithWhereUniqueWithoutOwnerInput | FlashCardUpsertWithWhereUniqueWithoutOwnerInput[]
    createMany?: FlashCardCreateManyOwnerInputEnvelope
    set?: FlashCardWhereUniqueInput | FlashCardWhereUniqueInput[]
    disconnect?: FlashCardWhereUniqueInput | FlashCardWhereUniqueInput[]
    delete?: FlashCardWhereUniqueInput | FlashCardWhereUniqueInput[]
    connect?: FlashCardWhereUniqueInput | FlashCardWhereUniqueInput[]
    update?: FlashCardUpdateWithWhereUniqueWithoutOwnerInput | FlashCardUpdateWithWhereUniqueWithoutOwnerInput[]
    updateMany?: FlashCardUpdateManyWithWhereWithoutOwnerInput | FlashCardUpdateManyWithWhereWithoutOwnerInput[]
    deleteMany?: FlashCardScalarWhereInput | FlashCardScalarWhereInput[]
  }

  export type DeckAccessUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<DeckAccessCreateWithoutUserInput, DeckAccessUncheckedCreateWithoutUserInput> | DeckAccessCreateWithoutUserInput[] | DeckAccessUncheckedCreateWithoutUserInput[]
    connectOrCreate?: DeckAccessCreateOrConnectWithoutUserInput | DeckAccessCreateOrConnectWithoutUserInput[]
    upsert?: DeckAccessUpsertWithWhereUniqueWithoutUserInput | DeckAccessUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: DeckAccessCreateManyUserInputEnvelope
    set?: DeckAccessWhereUniqueInput | DeckAccessWhereUniqueInput[]
    disconnect?: DeckAccessWhereUniqueInput | DeckAccessWhereUniqueInput[]
    delete?: DeckAccessWhereUniqueInput | DeckAccessWhereUniqueInput[]
    connect?: DeckAccessWhereUniqueInput | DeckAccessWhereUniqueInput[]
    update?: DeckAccessUpdateWithWhereUniqueWithoutUserInput | DeckAccessUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: DeckAccessUpdateManyWithWhereWithoutUserInput | DeckAccessUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: DeckAccessScalarWhereInput | DeckAccessScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutDecksInput = {
    create?: XOR<UserCreateWithoutDecksInput, UserUncheckedCreateWithoutDecksInput>
    connectOrCreate?: UserCreateOrConnectWithoutDecksInput
    connect?: UserWhereUniqueInput
  }

  export type DeckAccessCreateNestedManyWithoutDeckInput = {
    create?: XOR<DeckAccessCreateWithoutDeckInput, DeckAccessUncheckedCreateWithoutDeckInput> | DeckAccessCreateWithoutDeckInput[] | DeckAccessUncheckedCreateWithoutDeckInput[]
    connectOrCreate?: DeckAccessCreateOrConnectWithoutDeckInput | DeckAccessCreateOrConnectWithoutDeckInput[]
    createMany?: DeckAccessCreateManyDeckInputEnvelope
    connect?: DeckAccessWhereUniqueInput | DeckAccessWhereUniqueInput[]
  }

  export type FlashCardCreateNestedManyWithoutDecksInput = {
    create?: XOR<FlashCardCreateWithoutDecksInput, FlashCardUncheckedCreateWithoutDecksInput> | FlashCardCreateWithoutDecksInput[] | FlashCardUncheckedCreateWithoutDecksInput[]
    connectOrCreate?: FlashCardCreateOrConnectWithoutDecksInput | FlashCardCreateOrConnectWithoutDecksInput[]
    connect?: FlashCardWhereUniqueInput | FlashCardWhereUniqueInput[]
  }

  export type DeckFlashCardCreateNestedManyWithoutDeckInput = {
    create?: XOR<DeckFlashCardCreateWithoutDeckInput, DeckFlashCardUncheckedCreateWithoutDeckInput> | DeckFlashCardCreateWithoutDeckInput[] | DeckFlashCardUncheckedCreateWithoutDeckInput[]
    connectOrCreate?: DeckFlashCardCreateOrConnectWithoutDeckInput | DeckFlashCardCreateOrConnectWithoutDeckInput[]
    createMany?: DeckFlashCardCreateManyDeckInputEnvelope
    connect?: DeckFlashCardWhereUniqueInput | DeckFlashCardWhereUniqueInput[]
  }

  export type DeckAccessUncheckedCreateNestedManyWithoutDeckInput = {
    create?: XOR<DeckAccessCreateWithoutDeckInput, DeckAccessUncheckedCreateWithoutDeckInput> | DeckAccessCreateWithoutDeckInput[] | DeckAccessUncheckedCreateWithoutDeckInput[]
    connectOrCreate?: DeckAccessCreateOrConnectWithoutDeckInput | DeckAccessCreateOrConnectWithoutDeckInput[]
    createMany?: DeckAccessCreateManyDeckInputEnvelope
    connect?: DeckAccessWhereUniqueInput | DeckAccessWhereUniqueInput[]
  }

  export type FlashCardUncheckedCreateNestedManyWithoutDecksInput = {
    create?: XOR<FlashCardCreateWithoutDecksInput, FlashCardUncheckedCreateWithoutDecksInput> | FlashCardCreateWithoutDecksInput[] | FlashCardUncheckedCreateWithoutDecksInput[]
    connectOrCreate?: FlashCardCreateOrConnectWithoutDecksInput | FlashCardCreateOrConnectWithoutDecksInput[]
    connect?: FlashCardWhereUniqueInput | FlashCardWhereUniqueInput[]
  }

  export type DeckFlashCardUncheckedCreateNestedManyWithoutDeckInput = {
    create?: XOR<DeckFlashCardCreateWithoutDeckInput, DeckFlashCardUncheckedCreateWithoutDeckInput> | DeckFlashCardCreateWithoutDeckInput[] | DeckFlashCardUncheckedCreateWithoutDeckInput[]
    connectOrCreate?: DeckFlashCardCreateOrConnectWithoutDeckInput | DeckFlashCardCreateOrConnectWithoutDeckInput[]
    createMany?: DeckFlashCardCreateManyDeckInputEnvelope
    connect?: DeckFlashCardWhereUniqueInput | DeckFlashCardWhereUniqueInput[]
  }

  export type EnumAccessLevelFieldUpdateOperationsInput = {
    set?: $Enums.AccessLevel
  }

  export type UserUpdateOneRequiredWithoutDecksNestedInput = {
    create?: XOR<UserCreateWithoutDecksInput, UserUncheckedCreateWithoutDecksInput>
    connectOrCreate?: UserCreateOrConnectWithoutDecksInput
    upsert?: UserUpsertWithoutDecksInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutDecksInput, UserUpdateWithoutDecksInput>, UserUncheckedUpdateWithoutDecksInput>
  }

  export type DeckAccessUpdateManyWithoutDeckNestedInput = {
    create?: XOR<DeckAccessCreateWithoutDeckInput, DeckAccessUncheckedCreateWithoutDeckInput> | DeckAccessCreateWithoutDeckInput[] | DeckAccessUncheckedCreateWithoutDeckInput[]
    connectOrCreate?: DeckAccessCreateOrConnectWithoutDeckInput | DeckAccessCreateOrConnectWithoutDeckInput[]
    upsert?: DeckAccessUpsertWithWhereUniqueWithoutDeckInput | DeckAccessUpsertWithWhereUniqueWithoutDeckInput[]
    createMany?: DeckAccessCreateManyDeckInputEnvelope
    set?: DeckAccessWhereUniqueInput | DeckAccessWhereUniqueInput[]
    disconnect?: DeckAccessWhereUniqueInput | DeckAccessWhereUniqueInput[]
    delete?: DeckAccessWhereUniqueInput | DeckAccessWhereUniqueInput[]
    connect?: DeckAccessWhereUniqueInput | DeckAccessWhereUniqueInput[]
    update?: DeckAccessUpdateWithWhereUniqueWithoutDeckInput | DeckAccessUpdateWithWhereUniqueWithoutDeckInput[]
    updateMany?: DeckAccessUpdateManyWithWhereWithoutDeckInput | DeckAccessUpdateManyWithWhereWithoutDeckInput[]
    deleteMany?: DeckAccessScalarWhereInput | DeckAccessScalarWhereInput[]
  }

  export type FlashCardUpdateManyWithoutDecksNestedInput = {
    create?: XOR<FlashCardCreateWithoutDecksInput, FlashCardUncheckedCreateWithoutDecksInput> | FlashCardCreateWithoutDecksInput[] | FlashCardUncheckedCreateWithoutDecksInput[]
    connectOrCreate?: FlashCardCreateOrConnectWithoutDecksInput | FlashCardCreateOrConnectWithoutDecksInput[]
    upsert?: FlashCardUpsertWithWhereUniqueWithoutDecksInput | FlashCardUpsertWithWhereUniqueWithoutDecksInput[]
    set?: FlashCardWhereUniqueInput | FlashCardWhereUniqueInput[]
    disconnect?: FlashCardWhereUniqueInput | FlashCardWhereUniqueInput[]
    delete?: FlashCardWhereUniqueInput | FlashCardWhereUniqueInput[]
    connect?: FlashCardWhereUniqueInput | FlashCardWhereUniqueInput[]
    update?: FlashCardUpdateWithWhereUniqueWithoutDecksInput | FlashCardUpdateWithWhereUniqueWithoutDecksInput[]
    updateMany?: FlashCardUpdateManyWithWhereWithoutDecksInput | FlashCardUpdateManyWithWhereWithoutDecksInput[]
    deleteMany?: FlashCardScalarWhereInput | FlashCardScalarWhereInput[]
  }

  export type DeckFlashCardUpdateManyWithoutDeckNestedInput = {
    create?: XOR<DeckFlashCardCreateWithoutDeckInput, DeckFlashCardUncheckedCreateWithoutDeckInput> | DeckFlashCardCreateWithoutDeckInput[] | DeckFlashCardUncheckedCreateWithoutDeckInput[]
    connectOrCreate?: DeckFlashCardCreateOrConnectWithoutDeckInput | DeckFlashCardCreateOrConnectWithoutDeckInput[]
    upsert?: DeckFlashCardUpsertWithWhereUniqueWithoutDeckInput | DeckFlashCardUpsertWithWhereUniqueWithoutDeckInput[]
    createMany?: DeckFlashCardCreateManyDeckInputEnvelope
    set?: DeckFlashCardWhereUniqueInput | DeckFlashCardWhereUniqueInput[]
    disconnect?: DeckFlashCardWhereUniqueInput | DeckFlashCardWhereUniqueInput[]
    delete?: DeckFlashCardWhereUniqueInput | DeckFlashCardWhereUniqueInput[]
    connect?: DeckFlashCardWhereUniqueInput | DeckFlashCardWhereUniqueInput[]
    update?: DeckFlashCardUpdateWithWhereUniqueWithoutDeckInput | DeckFlashCardUpdateWithWhereUniqueWithoutDeckInput[]
    updateMany?: DeckFlashCardUpdateManyWithWhereWithoutDeckInput | DeckFlashCardUpdateManyWithWhereWithoutDeckInput[]
    deleteMany?: DeckFlashCardScalarWhereInput | DeckFlashCardScalarWhereInput[]
  }

  export type DeckAccessUncheckedUpdateManyWithoutDeckNestedInput = {
    create?: XOR<DeckAccessCreateWithoutDeckInput, DeckAccessUncheckedCreateWithoutDeckInput> | DeckAccessCreateWithoutDeckInput[] | DeckAccessUncheckedCreateWithoutDeckInput[]
    connectOrCreate?: DeckAccessCreateOrConnectWithoutDeckInput | DeckAccessCreateOrConnectWithoutDeckInput[]
    upsert?: DeckAccessUpsertWithWhereUniqueWithoutDeckInput | DeckAccessUpsertWithWhereUniqueWithoutDeckInput[]
    createMany?: DeckAccessCreateManyDeckInputEnvelope
    set?: DeckAccessWhereUniqueInput | DeckAccessWhereUniqueInput[]
    disconnect?: DeckAccessWhereUniqueInput | DeckAccessWhereUniqueInput[]
    delete?: DeckAccessWhereUniqueInput | DeckAccessWhereUniqueInput[]
    connect?: DeckAccessWhereUniqueInput | DeckAccessWhereUniqueInput[]
    update?: DeckAccessUpdateWithWhereUniqueWithoutDeckInput | DeckAccessUpdateWithWhereUniqueWithoutDeckInput[]
    updateMany?: DeckAccessUpdateManyWithWhereWithoutDeckInput | DeckAccessUpdateManyWithWhereWithoutDeckInput[]
    deleteMany?: DeckAccessScalarWhereInput | DeckAccessScalarWhereInput[]
  }

  export type FlashCardUncheckedUpdateManyWithoutDecksNestedInput = {
    create?: XOR<FlashCardCreateWithoutDecksInput, FlashCardUncheckedCreateWithoutDecksInput> | FlashCardCreateWithoutDecksInput[] | FlashCardUncheckedCreateWithoutDecksInput[]
    connectOrCreate?: FlashCardCreateOrConnectWithoutDecksInput | FlashCardCreateOrConnectWithoutDecksInput[]
    upsert?: FlashCardUpsertWithWhereUniqueWithoutDecksInput | FlashCardUpsertWithWhereUniqueWithoutDecksInput[]
    set?: FlashCardWhereUniqueInput | FlashCardWhereUniqueInput[]
    disconnect?: FlashCardWhereUniqueInput | FlashCardWhereUniqueInput[]
    delete?: FlashCardWhereUniqueInput | FlashCardWhereUniqueInput[]
    connect?: FlashCardWhereUniqueInput | FlashCardWhereUniqueInput[]
    update?: FlashCardUpdateWithWhereUniqueWithoutDecksInput | FlashCardUpdateWithWhereUniqueWithoutDecksInput[]
    updateMany?: FlashCardUpdateManyWithWhereWithoutDecksInput | FlashCardUpdateManyWithWhereWithoutDecksInput[]
    deleteMany?: FlashCardScalarWhereInput | FlashCardScalarWhereInput[]
  }

  export type DeckFlashCardUncheckedUpdateManyWithoutDeckNestedInput = {
    create?: XOR<DeckFlashCardCreateWithoutDeckInput, DeckFlashCardUncheckedCreateWithoutDeckInput> | DeckFlashCardCreateWithoutDeckInput[] | DeckFlashCardUncheckedCreateWithoutDeckInput[]
    connectOrCreate?: DeckFlashCardCreateOrConnectWithoutDeckInput | DeckFlashCardCreateOrConnectWithoutDeckInput[]
    upsert?: DeckFlashCardUpsertWithWhereUniqueWithoutDeckInput | DeckFlashCardUpsertWithWhereUniqueWithoutDeckInput[]
    createMany?: DeckFlashCardCreateManyDeckInputEnvelope
    set?: DeckFlashCardWhereUniqueInput | DeckFlashCardWhereUniqueInput[]
    disconnect?: DeckFlashCardWhereUniqueInput | DeckFlashCardWhereUniqueInput[]
    delete?: DeckFlashCardWhereUniqueInput | DeckFlashCardWhereUniqueInput[]
    connect?: DeckFlashCardWhereUniqueInput | DeckFlashCardWhereUniqueInput[]
    update?: DeckFlashCardUpdateWithWhereUniqueWithoutDeckInput | DeckFlashCardUpdateWithWhereUniqueWithoutDeckInput[]
    updateMany?: DeckFlashCardUpdateManyWithWhereWithoutDeckInput | DeckFlashCardUpdateManyWithWhereWithoutDeckInput[]
    deleteMany?: DeckFlashCardScalarWhereInput | DeckFlashCardScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutFlashcardsInput = {
    create?: XOR<UserCreateWithoutFlashcardsInput, UserUncheckedCreateWithoutFlashcardsInput>
    connectOrCreate?: UserCreateOrConnectWithoutFlashcardsInput
    connect?: UserWhereUniqueInput
  }

  export type DeckCreateNestedManyWithoutFlashcardsInput = {
    create?: XOR<DeckCreateWithoutFlashcardsInput, DeckUncheckedCreateWithoutFlashcardsInput> | DeckCreateWithoutFlashcardsInput[] | DeckUncheckedCreateWithoutFlashcardsInput[]
    connectOrCreate?: DeckCreateOrConnectWithoutFlashcardsInput | DeckCreateOrConnectWithoutFlashcardsInput[]
    connect?: DeckWhereUniqueInput | DeckWhereUniqueInput[]
  }

  export type DeckFlashCardCreateNestedManyWithoutFlashInput = {
    create?: XOR<DeckFlashCardCreateWithoutFlashInput, DeckFlashCardUncheckedCreateWithoutFlashInput> | DeckFlashCardCreateWithoutFlashInput[] | DeckFlashCardUncheckedCreateWithoutFlashInput[]
    connectOrCreate?: DeckFlashCardCreateOrConnectWithoutFlashInput | DeckFlashCardCreateOrConnectWithoutFlashInput[]
    createMany?: DeckFlashCardCreateManyFlashInputEnvelope
    connect?: DeckFlashCardWhereUniqueInput | DeckFlashCardWhereUniqueInput[]
  }

  export type DeckUncheckedCreateNestedManyWithoutFlashcardsInput = {
    create?: XOR<DeckCreateWithoutFlashcardsInput, DeckUncheckedCreateWithoutFlashcardsInput> | DeckCreateWithoutFlashcardsInput[] | DeckUncheckedCreateWithoutFlashcardsInput[]
    connectOrCreate?: DeckCreateOrConnectWithoutFlashcardsInput | DeckCreateOrConnectWithoutFlashcardsInput[]
    connect?: DeckWhereUniqueInput | DeckWhereUniqueInput[]
  }

  export type DeckFlashCardUncheckedCreateNestedManyWithoutFlashInput = {
    create?: XOR<DeckFlashCardCreateWithoutFlashInput, DeckFlashCardUncheckedCreateWithoutFlashInput> | DeckFlashCardCreateWithoutFlashInput[] | DeckFlashCardUncheckedCreateWithoutFlashInput[]
    connectOrCreate?: DeckFlashCardCreateOrConnectWithoutFlashInput | DeckFlashCardCreateOrConnectWithoutFlashInput[]
    createMany?: DeckFlashCardCreateManyFlashInputEnvelope
    connect?: DeckFlashCardWhereUniqueInput | DeckFlashCardWhereUniqueInput[]
  }

  export type UserUpdateOneRequiredWithoutFlashcardsNestedInput = {
    create?: XOR<UserCreateWithoutFlashcardsInput, UserUncheckedCreateWithoutFlashcardsInput>
    connectOrCreate?: UserCreateOrConnectWithoutFlashcardsInput
    upsert?: UserUpsertWithoutFlashcardsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutFlashcardsInput, UserUpdateWithoutFlashcardsInput>, UserUncheckedUpdateWithoutFlashcardsInput>
  }

  export type DeckUpdateManyWithoutFlashcardsNestedInput = {
    create?: XOR<DeckCreateWithoutFlashcardsInput, DeckUncheckedCreateWithoutFlashcardsInput> | DeckCreateWithoutFlashcardsInput[] | DeckUncheckedCreateWithoutFlashcardsInput[]
    connectOrCreate?: DeckCreateOrConnectWithoutFlashcardsInput | DeckCreateOrConnectWithoutFlashcardsInput[]
    upsert?: DeckUpsertWithWhereUniqueWithoutFlashcardsInput | DeckUpsertWithWhereUniqueWithoutFlashcardsInput[]
    set?: DeckWhereUniqueInput | DeckWhereUniqueInput[]
    disconnect?: DeckWhereUniqueInput | DeckWhereUniqueInput[]
    delete?: DeckWhereUniqueInput | DeckWhereUniqueInput[]
    connect?: DeckWhereUniqueInput | DeckWhereUniqueInput[]
    update?: DeckUpdateWithWhereUniqueWithoutFlashcardsInput | DeckUpdateWithWhereUniqueWithoutFlashcardsInput[]
    updateMany?: DeckUpdateManyWithWhereWithoutFlashcardsInput | DeckUpdateManyWithWhereWithoutFlashcardsInput[]
    deleteMany?: DeckScalarWhereInput | DeckScalarWhereInput[]
  }

  export type DeckFlashCardUpdateManyWithoutFlashNestedInput = {
    create?: XOR<DeckFlashCardCreateWithoutFlashInput, DeckFlashCardUncheckedCreateWithoutFlashInput> | DeckFlashCardCreateWithoutFlashInput[] | DeckFlashCardUncheckedCreateWithoutFlashInput[]
    connectOrCreate?: DeckFlashCardCreateOrConnectWithoutFlashInput | DeckFlashCardCreateOrConnectWithoutFlashInput[]
    upsert?: DeckFlashCardUpsertWithWhereUniqueWithoutFlashInput | DeckFlashCardUpsertWithWhereUniqueWithoutFlashInput[]
    createMany?: DeckFlashCardCreateManyFlashInputEnvelope
    set?: DeckFlashCardWhereUniqueInput | DeckFlashCardWhereUniqueInput[]
    disconnect?: DeckFlashCardWhereUniqueInput | DeckFlashCardWhereUniqueInput[]
    delete?: DeckFlashCardWhereUniqueInput | DeckFlashCardWhereUniqueInput[]
    connect?: DeckFlashCardWhereUniqueInput | DeckFlashCardWhereUniqueInput[]
    update?: DeckFlashCardUpdateWithWhereUniqueWithoutFlashInput | DeckFlashCardUpdateWithWhereUniqueWithoutFlashInput[]
    updateMany?: DeckFlashCardUpdateManyWithWhereWithoutFlashInput | DeckFlashCardUpdateManyWithWhereWithoutFlashInput[]
    deleteMany?: DeckFlashCardScalarWhereInput | DeckFlashCardScalarWhereInput[]
  }

  export type DeckUncheckedUpdateManyWithoutFlashcardsNestedInput = {
    create?: XOR<DeckCreateWithoutFlashcardsInput, DeckUncheckedCreateWithoutFlashcardsInput> | DeckCreateWithoutFlashcardsInput[] | DeckUncheckedCreateWithoutFlashcardsInput[]
    connectOrCreate?: DeckCreateOrConnectWithoutFlashcardsInput | DeckCreateOrConnectWithoutFlashcardsInput[]
    upsert?: DeckUpsertWithWhereUniqueWithoutFlashcardsInput | DeckUpsertWithWhereUniqueWithoutFlashcardsInput[]
    set?: DeckWhereUniqueInput | DeckWhereUniqueInput[]
    disconnect?: DeckWhereUniqueInput | DeckWhereUniqueInput[]
    delete?: DeckWhereUniqueInput | DeckWhereUniqueInput[]
    connect?: DeckWhereUniqueInput | DeckWhereUniqueInput[]
    update?: DeckUpdateWithWhereUniqueWithoutFlashcardsInput | DeckUpdateWithWhereUniqueWithoutFlashcardsInput[]
    updateMany?: DeckUpdateManyWithWhereWithoutFlashcardsInput | DeckUpdateManyWithWhereWithoutFlashcardsInput[]
    deleteMany?: DeckScalarWhereInput | DeckScalarWhereInput[]
  }

  export type DeckFlashCardUncheckedUpdateManyWithoutFlashNestedInput = {
    create?: XOR<DeckFlashCardCreateWithoutFlashInput, DeckFlashCardUncheckedCreateWithoutFlashInput> | DeckFlashCardCreateWithoutFlashInput[] | DeckFlashCardUncheckedCreateWithoutFlashInput[]
    connectOrCreate?: DeckFlashCardCreateOrConnectWithoutFlashInput | DeckFlashCardCreateOrConnectWithoutFlashInput[]
    upsert?: DeckFlashCardUpsertWithWhereUniqueWithoutFlashInput | DeckFlashCardUpsertWithWhereUniqueWithoutFlashInput[]
    createMany?: DeckFlashCardCreateManyFlashInputEnvelope
    set?: DeckFlashCardWhereUniqueInput | DeckFlashCardWhereUniqueInput[]
    disconnect?: DeckFlashCardWhereUniqueInput | DeckFlashCardWhereUniqueInput[]
    delete?: DeckFlashCardWhereUniqueInput | DeckFlashCardWhereUniqueInput[]
    connect?: DeckFlashCardWhereUniqueInput | DeckFlashCardWhereUniqueInput[]
    update?: DeckFlashCardUpdateWithWhereUniqueWithoutFlashInput | DeckFlashCardUpdateWithWhereUniqueWithoutFlashInput[]
    updateMany?: DeckFlashCardUpdateManyWithWhereWithoutFlashInput | DeckFlashCardUpdateManyWithWhereWithoutFlashInput[]
    deleteMany?: DeckFlashCardScalarWhereInput | DeckFlashCardScalarWhereInput[]
  }

  export type DeckCreateNestedOneWithoutDeckflashcardInput = {
    create?: XOR<DeckCreateWithoutDeckflashcardInput, DeckUncheckedCreateWithoutDeckflashcardInput>
    connectOrCreate?: DeckCreateOrConnectWithoutDeckflashcardInput
    connect?: DeckWhereUniqueInput
  }

  export type FlashCardCreateNestedOneWithoutDeckflashcardInput = {
    create?: XOR<FlashCardCreateWithoutDeckflashcardInput, FlashCardUncheckedCreateWithoutDeckflashcardInput>
    connectOrCreate?: FlashCardCreateOrConnectWithoutDeckflashcardInput
    connect?: FlashCardWhereUniqueInput
  }

  export type EnumFlashCardProgressFieldUpdateOperationsInput = {
    set?: $Enums.FlashCardProgress
  }

  export type DeckUpdateOneRequiredWithoutDeckflashcardNestedInput = {
    create?: XOR<DeckCreateWithoutDeckflashcardInput, DeckUncheckedCreateWithoutDeckflashcardInput>
    connectOrCreate?: DeckCreateOrConnectWithoutDeckflashcardInput
    upsert?: DeckUpsertWithoutDeckflashcardInput
    connect?: DeckWhereUniqueInput
    update?: XOR<XOR<DeckUpdateToOneWithWhereWithoutDeckflashcardInput, DeckUpdateWithoutDeckflashcardInput>, DeckUncheckedUpdateWithoutDeckflashcardInput>
  }

  export type FlashCardUpdateOneRequiredWithoutDeckflashcardNestedInput = {
    create?: XOR<FlashCardCreateWithoutDeckflashcardInput, FlashCardUncheckedCreateWithoutDeckflashcardInput>
    connectOrCreate?: FlashCardCreateOrConnectWithoutDeckflashcardInput
    upsert?: FlashCardUpsertWithoutDeckflashcardInput
    connect?: FlashCardWhereUniqueInput
    update?: XOR<XOR<FlashCardUpdateToOneWithWhereWithoutDeckflashcardInput, FlashCardUpdateWithoutDeckflashcardInput>, FlashCardUncheckedUpdateWithoutDeckflashcardInput>
  }

  export type DeckCreateNestedOneWithoutAccessesInput = {
    create?: XOR<DeckCreateWithoutAccessesInput, DeckUncheckedCreateWithoutAccessesInput>
    connectOrCreate?: DeckCreateOrConnectWithoutAccessesInput
    connect?: DeckWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutAccessesInput = {
    create?: XOR<UserCreateWithoutAccessesInput, UserUncheckedCreateWithoutAccessesInput>
    connectOrCreate?: UserCreateOrConnectWithoutAccessesInput
    connect?: UserWhereUniqueInput
  }

  export type DeckUpdateOneRequiredWithoutAccessesNestedInput = {
    create?: XOR<DeckCreateWithoutAccessesInput, DeckUncheckedCreateWithoutAccessesInput>
    connectOrCreate?: DeckCreateOrConnectWithoutAccessesInput
    upsert?: DeckUpsertWithoutAccessesInput
    connect?: DeckWhereUniqueInput
    update?: XOR<XOR<DeckUpdateToOneWithWhereWithoutAccessesInput, DeckUpdateWithoutAccessesInput>, DeckUncheckedUpdateWithoutAccessesInput>
  }

  export type UserUpdateOneRequiredWithoutAccessesNestedInput = {
    create?: XOR<UserCreateWithoutAccessesInput, UserUncheckedCreateWithoutAccessesInput>
    connectOrCreate?: UserCreateOrConnectWithoutAccessesInput
    upsert?: UserUpsertWithoutAccessesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutAccessesInput, UserUpdateWithoutAccessesInput>, UserUncheckedUpdateWithoutAccessesInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedEnumAccessLevelFilter<$PrismaModel = never> = {
    equals?: $Enums.AccessLevel | EnumAccessLevelFieldRefInput<$PrismaModel>
    in?: $Enums.AccessLevel[]
    notIn?: $Enums.AccessLevel[]
    not?: NestedEnumAccessLevelFilter<$PrismaModel> | $Enums.AccessLevel
  }

  export type NestedEnumAccessLevelWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AccessLevel | EnumAccessLevelFieldRefInput<$PrismaModel>
    in?: $Enums.AccessLevel[]
    notIn?: $Enums.AccessLevel[]
    not?: NestedEnumAccessLevelWithAggregatesFilter<$PrismaModel> | $Enums.AccessLevel
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAccessLevelFilter<$PrismaModel>
    _max?: NestedEnumAccessLevelFilter<$PrismaModel>
  }

  export type NestedEnumFlashCardProgressFilter<$PrismaModel = never> = {
    equals?: $Enums.FlashCardProgress | EnumFlashCardProgressFieldRefInput<$PrismaModel>
    in?: $Enums.FlashCardProgress[]
    notIn?: $Enums.FlashCardProgress[]
    not?: NestedEnumFlashCardProgressFilter<$PrismaModel> | $Enums.FlashCardProgress
  }

  export type NestedEnumFlashCardProgressWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.FlashCardProgress | EnumFlashCardProgressFieldRefInput<$PrismaModel>
    in?: $Enums.FlashCardProgress[]
    notIn?: $Enums.FlashCardProgress[]
    not?: NestedEnumFlashCardProgressWithAggregatesFilter<$PrismaModel> | $Enums.FlashCardProgress
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumFlashCardProgressFilter<$PrismaModel>
    _max?: NestedEnumFlashCardProgressFilter<$PrismaModel>
  }

  export type UserCreateWithoutPostsInput = {
    id?: string
    name?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    accounts?: AccountCreateNestedManyWithoutUserInput
    sessions?: SessionCreateNestedManyWithoutUserInput
    decks?: DeckCreateNestedManyWithoutOwnerInput
    flashcards?: FlashCardCreateNestedManyWithoutOwnerInput
    accesses?: DeckAccessCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutPostsInput = {
    id?: string
    name?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    decks?: DeckUncheckedCreateNestedManyWithoutOwnerInput
    flashcards?: FlashCardUncheckedCreateNestedManyWithoutOwnerInput
    accesses?: DeckAccessUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutPostsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutPostsInput, UserUncheckedCreateWithoutPostsInput>
  }

  export type UserUpsertWithoutPostsInput = {
    update: XOR<UserUpdateWithoutPostsInput, UserUncheckedUpdateWithoutPostsInput>
    create: XOR<UserCreateWithoutPostsInput, UserUncheckedCreateWithoutPostsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutPostsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutPostsInput, UserUncheckedUpdateWithoutPostsInput>
  }

  export type UserUpdateWithoutPostsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    accounts?: AccountUpdateManyWithoutUserNestedInput
    sessions?: SessionUpdateManyWithoutUserNestedInput
    decks?: DeckUpdateManyWithoutOwnerNestedInput
    flashcards?: FlashCardUpdateManyWithoutOwnerNestedInput
    accesses?: DeckAccessUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutPostsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    decks?: DeckUncheckedUpdateManyWithoutOwnerNestedInput
    flashcards?: FlashCardUncheckedUpdateManyWithoutOwnerNestedInput
    accesses?: DeckAccessUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutAccountsInput = {
    id?: string
    name?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    sessions?: SessionCreateNestedManyWithoutUserInput
    posts?: PostCreateNestedManyWithoutCreatedByInput
    decks?: DeckCreateNestedManyWithoutOwnerInput
    flashcards?: FlashCardCreateNestedManyWithoutOwnerInput
    accesses?: DeckAccessCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutAccountsInput = {
    id?: string
    name?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    posts?: PostUncheckedCreateNestedManyWithoutCreatedByInput
    decks?: DeckUncheckedCreateNestedManyWithoutOwnerInput
    flashcards?: FlashCardUncheckedCreateNestedManyWithoutOwnerInput
    accesses?: DeckAccessUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutAccountsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutAccountsInput, UserUncheckedCreateWithoutAccountsInput>
  }

  export type UserUpsertWithoutAccountsInput = {
    update: XOR<UserUpdateWithoutAccountsInput, UserUncheckedUpdateWithoutAccountsInput>
    create: XOR<UserCreateWithoutAccountsInput, UserUncheckedCreateWithoutAccountsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutAccountsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutAccountsInput, UserUncheckedUpdateWithoutAccountsInput>
  }

  export type UserUpdateWithoutAccountsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    sessions?: SessionUpdateManyWithoutUserNestedInput
    posts?: PostUpdateManyWithoutCreatedByNestedInput
    decks?: DeckUpdateManyWithoutOwnerNestedInput
    flashcards?: FlashCardUpdateManyWithoutOwnerNestedInput
    accesses?: DeckAccessUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutAccountsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    posts?: PostUncheckedUpdateManyWithoutCreatedByNestedInput
    decks?: DeckUncheckedUpdateManyWithoutOwnerNestedInput
    flashcards?: FlashCardUncheckedUpdateManyWithoutOwnerNestedInput
    accesses?: DeckAccessUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutSessionsInput = {
    id?: string
    name?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    accounts?: AccountCreateNestedManyWithoutUserInput
    posts?: PostCreateNestedManyWithoutCreatedByInput
    decks?: DeckCreateNestedManyWithoutOwnerInput
    flashcards?: FlashCardCreateNestedManyWithoutOwnerInput
    accesses?: DeckAccessCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutSessionsInput = {
    id?: string
    name?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    posts?: PostUncheckedCreateNestedManyWithoutCreatedByInput
    decks?: DeckUncheckedCreateNestedManyWithoutOwnerInput
    flashcards?: FlashCardUncheckedCreateNestedManyWithoutOwnerInput
    accesses?: DeckAccessUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutSessionsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
  }

  export type UserUpsertWithoutSessionsInput = {
    update: XOR<UserUpdateWithoutSessionsInput, UserUncheckedUpdateWithoutSessionsInput>
    create: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutSessionsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutSessionsInput, UserUncheckedUpdateWithoutSessionsInput>
  }

  export type UserUpdateWithoutSessionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    accounts?: AccountUpdateManyWithoutUserNestedInput
    posts?: PostUpdateManyWithoutCreatedByNestedInput
    decks?: DeckUpdateManyWithoutOwnerNestedInput
    flashcards?: FlashCardUpdateManyWithoutOwnerNestedInput
    accesses?: DeckAccessUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutSessionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    posts?: PostUncheckedUpdateManyWithoutCreatedByNestedInput
    decks?: DeckUncheckedUpdateManyWithoutOwnerNestedInput
    flashcards?: FlashCardUncheckedUpdateManyWithoutOwnerNestedInput
    accesses?: DeckAccessUncheckedUpdateManyWithoutUserNestedInput
  }

  export type AccountCreateWithoutUserInput = {
    id?: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token?: string | null
    access_token?: string | null
    expires_at?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_state?: string | null
    refresh_token_expires_in?: number | null
  }

  export type AccountUncheckedCreateWithoutUserInput = {
    id?: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token?: string | null
    access_token?: string | null
    expires_at?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_state?: string | null
    refresh_token_expires_in?: number | null
  }

  export type AccountCreateOrConnectWithoutUserInput = {
    where: AccountWhereUniqueInput
    create: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput>
  }

  export type AccountCreateManyUserInputEnvelope = {
    data: AccountCreateManyUserInput | AccountCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type SessionCreateWithoutUserInput = {
    id?: string
    sessionToken: string
    expires: Date | string
  }

  export type SessionUncheckedCreateWithoutUserInput = {
    id?: string
    sessionToken: string
    expires: Date | string
  }

  export type SessionCreateOrConnectWithoutUserInput = {
    where: SessionWhereUniqueInput
    create: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput>
  }

  export type SessionCreateManyUserInputEnvelope = {
    data: SessionCreateManyUserInput | SessionCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type PostCreateWithoutCreatedByInput = {
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PostUncheckedCreateWithoutCreatedByInput = {
    id?: number
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PostCreateOrConnectWithoutCreatedByInput = {
    where: PostWhereUniqueInput
    create: XOR<PostCreateWithoutCreatedByInput, PostUncheckedCreateWithoutCreatedByInput>
  }

  export type PostCreateManyCreatedByInputEnvelope = {
    data: PostCreateManyCreatedByInput | PostCreateManyCreatedByInput[]
    skipDuplicates?: boolean
  }

  export type DeckCreateWithoutOwnerInput = {
    id?: string
    name: string
    public?: $Enums.AccessLevel
    accesses?: DeckAccessCreateNestedManyWithoutDeckInput
    flashcards?: FlashCardCreateNestedManyWithoutDecksInput
    deckflashcard?: DeckFlashCardCreateNestedManyWithoutDeckInput
  }

  export type DeckUncheckedCreateWithoutOwnerInput = {
    id?: string
    name: string
    public?: $Enums.AccessLevel
    accesses?: DeckAccessUncheckedCreateNestedManyWithoutDeckInput
    flashcards?: FlashCardUncheckedCreateNestedManyWithoutDecksInput
    deckflashcard?: DeckFlashCardUncheckedCreateNestedManyWithoutDeckInput
  }

  export type DeckCreateOrConnectWithoutOwnerInput = {
    where: DeckWhereUniqueInput
    create: XOR<DeckCreateWithoutOwnerInput, DeckUncheckedCreateWithoutOwnerInput>
  }

  export type DeckCreateManyOwnerInputEnvelope = {
    data: DeckCreateManyOwnerInput | DeckCreateManyOwnerInput[]
    skipDuplicates?: boolean
  }

  export type FlashCardCreateWithoutOwnerInput = {
    id?: string
    title: string
    content: string
    decks?: DeckCreateNestedManyWithoutFlashcardsInput
    deckflashcard?: DeckFlashCardCreateNestedManyWithoutFlashInput
  }

  export type FlashCardUncheckedCreateWithoutOwnerInput = {
    id?: string
    title: string
    content: string
    decks?: DeckUncheckedCreateNestedManyWithoutFlashcardsInput
    deckflashcard?: DeckFlashCardUncheckedCreateNestedManyWithoutFlashInput
  }

  export type FlashCardCreateOrConnectWithoutOwnerInput = {
    where: FlashCardWhereUniqueInput
    create: XOR<FlashCardCreateWithoutOwnerInput, FlashCardUncheckedCreateWithoutOwnerInput>
  }

  export type FlashCardCreateManyOwnerInputEnvelope = {
    data: FlashCardCreateManyOwnerInput | FlashCardCreateManyOwnerInput[]
    skipDuplicates?: boolean
  }

  export type DeckAccessCreateWithoutUserInput = {
    level?: $Enums.AccessLevel
    createdAt?: Date | string
    deck: DeckCreateNestedOneWithoutAccessesInput
  }

  export type DeckAccessUncheckedCreateWithoutUserInput = {
    deckId: string
    level?: $Enums.AccessLevel
    createdAt?: Date | string
  }

  export type DeckAccessCreateOrConnectWithoutUserInput = {
    where: DeckAccessWhereUniqueInput
    create: XOR<DeckAccessCreateWithoutUserInput, DeckAccessUncheckedCreateWithoutUserInput>
  }

  export type DeckAccessCreateManyUserInputEnvelope = {
    data: DeckAccessCreateManyUserInput | DeckAccessCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type AccountUpsertWithWhereUniqueWithoutUserInput = {
    where: AccountWhereUniqueInput
    update: XOR<AccountUpdateWithoutUserInput, AccountUncheckedUpdateWithoutUserInput>
    create: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput>
  }

  export type AccountUpdateWithWhereUniqueWithoutUserInput = {
    where: AccountWhereUniqueInput
    data: XOR<AccountUpdateWithoutUserInput, AccountUncheckedUpdateWithoutUserInput>
  }

  export type AccountUpdateManyWithWhereWithoutUserInput = {
    where: AccountScalarWhereInput
    data: XOR<AccountUpdateManyMutationInput, AccountUncheckedUpdateManyWithoutUserInput>
  }

  export type AccountScalarWhereInput = {
    AND?: AccountScalarWhereInput | AccountScalarWhereInput[]
    OR?: AccountScalarWhereInput[]
    NOT?: AccountScalarWhereInput | AccountScalarWhereInput[]
    id?: StringFilter<"Account"> | string
    userId?: StringFilter<"Account"> | string
    type?: StringFilter<"Account"> | string
    provider?: StringFilter<"Account"> | string
    providerAccountId?: StringFilter<"Account"> | string
    refresh_token?: StringNullableFilter<"Account"> | string | null
    access_token?: StringNullableFilter<"Account"> | string | null
    expires_at?: IntNullableFilter<"Account"> | number | null
    token_type?: StringNullableFilter<"Account"> | string | null
    scope?: StringNullableFilter<"Account"> | string | null
    id_token?: StringNullableFilter<"Account"> | string | null
    session_state?: StringNullableFilter<"Account"> | string | null
    refresh_token_expires_in?: IntNullableFilter<"Account"> | number | null
  }

  export type SessionUpsertWithWhereUniqueWithoutUserInput = {
    where: SessionWhereUniqueInput
    update: XOR<SessionUpdateWithoutUserInput, SessionUncheckedUpdateWithoutUserInput>
    create: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput>
  }

  export type SessionUpdateWithWhereUniqueWithoutUserInput = {
    where: SessionWhereUniqueInput
    data: XOR<SessionUpdateWithoutUserInput, SessionUncheckedUpdateWithoutUserInput>
  }

  export type SessionUpdateManyWithWhereWithoutUserInput = {
    where: SessionScalarWhereInput
    data: XOR<SessionUpdateManyMutationInput, SessionUncheckedUpdateManyWithoutUserInput>
  }

  export type SessionScalarWhereInput = {
    AND?: SessionScalarWhereInput | SessionScalarWhereInput[]
    OR?: SessionScalarWhereInput[]
    NOT?: SessionScalarWhereInput | SessionScalarWhereInput[]
    id?: StringFilter<"Session"> | string
    sessionToken?: StringFilter<"Session"> | string
    userId?: StringFilter<"Session"> | string
    expires?: DateTimeFilter<"Session"> | Date | string
  }

  export type PostUpsertWithWhereUniqueWithoutCreatedByInput = {
    where: PostWhereUniqueInput
    update: XOR<PostUpdateWithoutCreatedByInput, PostUncheckedUpdateWithoutCreatedByInput>
    create: XOR<PostCreateWithoutCreatedByInput, PostUncheckedCreateWithoutCreatedByInput>
  }

  export type PostUpdateWithWhereUniqueWithoutCreatedByInput = {
    where: PostWhereUniqueInput
    data: XOR<PostUpdateWithoutCreatedByInput, PostUncheckedUpdateWithoutCreatedByInput>
  }

  export type PostUpdateManyWithWhereWithoutCreatedByInput = {
    where: PostScalarWhereInput
    data: XOR<PostUpdateManyMutationInput, PostUncheckedUpdateManyWithoutCreatedByInput>
  }

  export type PostScalarWhereInput = {
    AND?: PostScalarWhereInput | PostScalarWhereInput[]
    OR?: PostScalarWhereInput[]
    NOT?: PostScalarWhereInput | PostScalarWhereInput[]
    id?: IntFilter<"Post"> | number
    name?: StringFilter<"Post"> | string
    createdAt?: DateTimeFilter<"Post"> | Date | string
    updatedAt?: DateTimeFilter<"Post"> | Date | string
    createdById?: StringFilter<"Post"> | string
  }

  export type DeckUpsertWithWhereUniqueWithoutOwnerInput = {
    where: DeckWhereUniqueInput
    update: XOR<DeckUpdateWithoutOwnerInput, DeckUncheckedUpdateWithoutOwnerInput>
    create: XOR<DeckCreateWithoutOwnerInput, DeckUncheckedCreateWithoutOwnerInput>
  }

  export type DeckUpdateWithWhereUniqueWithoutOwnerInput = {
    where: DeckWhereUniqueInput
    data: XOR<DeckUpdateWithoutOwnerInput, DeckUncheckedUpdateWithoutOwnerInput>
  }

  export type DeckUpdateManyWithWhereWithoutOwnerInput = {
    where: DeckScalarWhereInput
    data: XOR<DeckUpdateManyMutationInput, DeckUncheckedUpdateManyWithoutOwnerInput>
  }

  export type DeckScalarWhereInput = {
    AND?: DeckScalarWhereInput | DeckScalarWhereInput[]
    OR?: DeckScalarWhereInput[]
    NOT?: DeckScalarWhereInput | DeckScalarWhereInput[]
    id?: StringFilter<"Deck"> | string
    name?: StringFilter<"Deck"> | string
    ownerId?: StringFilter<"Deck"> | string
    public?: EnumAccessLevelFilter<"Deck"> | $Enums.AccessLevel
  }

  export type FlashCardUpsertWithWhereUniqueWithoutOwnerInput = {
    where: FlashCardWhereUniqueInput
    update: XOR<FlashCardUpdateWithoutOwnerInput, FlashCardUncheckedUpdateWithoutOwnerInput>
    create: XOR<FlashCardCreateWithoutOwnerInput, FlashCardUncheckedCreateWithoutOwnerInput>
  }

  export type FlashCardUpdateWithWhereUniqueWithoutOwnerInput = {
    where: FlashCardWhereUniqueInput
    data: XOR<FlashCardUpdateWithoutOwnerInput, FlashCardUncheckedUpdateWithoutOwnerInput>
  }

  export type FlashCardUpdateManyWithWhereWithoutOwnerInput = {
    where: FlashCardScalarWhereInput
    data: XOR<FlashCardUpdateManyMutationInput, FlashCardUncheckedUpdateManyWithoutOwnerInput>
  }

  export type FlashCardScalarWhereInput = {
    AND?: FlashCardScalarWhereInput | FlashCardScalarWhereInput[]
    OR?: FlashCardScalarWhereInput[]
    NOT?: FlashCardScalarWhereInput | FlashCardScalarWhereInput[]
    id?: StringFilter<"FlashCard"> | string
    ownerId?: StringFilter<"FlashCard"> | string
    title?: StringFilter<"FlashCard"> | string
    content?: StringFilter<"FlashCard"> | string
  }

  export type DeckAccessUpsertWithWhereUniqueWithoutUserInput = {
    where: DeckAccessWhereUniqueInput
    update: XOR<DeckAccessUpdateWithoutUserInput, DeckAccessUncheckedUpdateWithoutUserInput>
    create: XOR<DeckAccessCreateWithoutUserInput, DeckAccessUncheckedCreateWithoutUserInput>
  }

  export type DeckAccessUpdateWithWhereUniqueWithoutUserInput = {
    where: DeckAccessWhereUniqueInput
    data: XOR<DeckAccessUpdateWithoutUserInput, DeckAccessUncheckedUpdateWithoutUserInput>
  }

  export type DeckAccessUpdateManyWithWhereWithoutUserInput = {
    where: DeckAccessScalarWhereInput
    data: XOR<DeckAccessUpdateManyMutationInput, DeckAccessUncheckedUpdateManyWithoutUserInput>
  }

  export type DeckAccessScalarWhereInput = {
    AND?: DeckAccessScalarWhereInput | DeckAccessScalarWhereInput[]
    OR?: DeckAccessScalarWhereInput[]
    NOT?: DeckAccessScalarWhereInput | DeckAccessScalarWhereInput[]
    deckId?: StringFilter<"DeckAccess"> | string
    userId?: StringFilter<"DeckAccess"> | string
    level?: EnumAccessLevelFilter<"DeckAccess"> | $Enums.AccessLevel
    createdAt?: DateTimeFilter<"DeckAccess"> | Date | string
  }

  export type UserCreateWithoutDecksInput = {
    id?: string
    name?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    accounts?: AccountCreateNestedManyWithoutUserInput
    sessions?: SessionCreateNestedManyWithoutUserInput
    posts?: PostCreateNestedManyWithoutCreatedByInput
    flashcards?: FlashCardCreateNestedManyWithoutOwnerInput
    accesses?: DeckAccessCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutDecksInput = {
    id?: string
    name?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    posts?: PostUncheckedCreateNestedManyWithoutCreatedByInput
    flashcards?: FlashCardUncheckedCreateNestedManyWithoutOwnerInput
    accesses?: DeckAccessUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutDecksInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutDecksInput, UserUncheckedCreateWithoutDecksInput>
  }

  export type DeckAccessCreateWithoutDeckInput = {
    level?: $Enums.AccessLevel
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutAccessesInput
  }

  export type DeckAccessUncheckedCreateWithoutDeckInput = {
    userId: string
    level?: $Enums.AccessLevel
    createdAt?: Date | string
  }

  export type DeckAccessCreateOrConnectWithoutDeckInput = {
    where: DeckAccessWhereUniqueInput
    create: XOR<DeckAccessCreateWithoutDeckInput, DeckAccessUncheckedCreateWithoutDeckInput>
  }

  export type DeckAccessCreateManyDeckInputEnvelope = {
    data: DeckAccessCreateManyDeckInput | DeckAccessCreateManyDeckInput[]
    skipDuplicates?: boolean
  }

  export type FlashCardCreateWithoutDecksInput = {
    id?: string
    title: string
    content: string
    owner: UserCreateNestedOneWithoutFlashcardsInput
    deckflashcard?: DeckFlashCardCreateNestedManyWithoutFlashInput
  }

  export type FlashCardUncheckedCreateWithoutDecksInput = {
    id?: string
    ownerId: string
    title: string
    content: string
    deckflashcard?: DeckFlashCardUncheckedCreateNestedManyWithoutFlashInput
  }

  export type FlashCardCreateOrConnectWithoutDecksInput = {
    where: FlashCardWhereUniqueInput
    create: XOR<FlashCardCreateWithoutDecksInput, FlashCardUncheckedCreateWithoutDecksInput>
  }

  export type DeckFlashCardCreateWithoutDeckInput = {
    progress?: $Enums.FlashCardProgress
    createdAt?: Date | string
    flash: FlashCardCreateNestedOneWithoutDeckflashcardInput
  }

  export type DeckFlashCardUncheckedCreateWithoutDeckInput = {
    flashId: string
    progress?: $Enums.FlashCardProgress
    createdAt?: Date | string
  }

  export type DeckFlashCardCreateOrConnectWithoutDeckInput = {
    where: DeckFlashCardWhereUniqueInput
    create: XOR<DeckFlashCardCreateWithoutDeckInput, DeckFlashCardUncheckedCreateWithoutDeckInput>
  }

  export type DeckFlashCardCreateManyDeckInputEnvelope = {
    data: DeckFlashCardCreateManyDeckInput | DeckFlashCardCreateManyDeckInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutDecksInput = {
    update: XOR<UserUpdateWithoutDecksInput, UserUncheckedUpdateWithoutDecksInput>
    create: XOR<UserCreateWithoutDecksInput, UserUncheckedCreateWithoutDecksInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutDecksInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutDecksInput, UserUncheckedUpdateWithoutDecksInput>
  }

  export type UserUpdateWithoutDecksInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    accounts?: AccountUpdateManyWithoutUserNestedInput
    sessions?: SessionUpdateManyWithoutUserNestedInput
    posts?: PostUpdateManyWithoutCreatedByNestedInput
    flashcards?: FlashCardUpdateManyWithoutOwnerNestedInput
    accesses?: DeckAccessUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutDecksInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    posts?: PostUncheckedUpdateManyWithoutCreatedByNestedInput
    flashcards?: FlashCardUncheckedUpdateManyWithoutOwnerNestedInput
    accesses?: DeckAccessUncheckedUpdateManyWithoutUserNestedInput
  }

  export type DeckAccessUpsertWithWhereUniqueWithoutDeckInput = {
    where: DeckAccessWhereUniqueInput
    update: XOR<DeckAccessUpdateWithoutDeckInput, DeckAccessUncheckedUpdateWithoutDeckInput>
    create: XOR<DeckAccessCreateWithoutDeckInput, DeckAccessUncheckedCreateWithoutDeckInput>
  }

  export type DeckAccessUpdateWithWhereUniqueWithoutDeckInput = {
    where: DeckAccessWhereUniqueInput
    data: XOR<DeckAccessUpdateWithoutDeckInput, DeckAccessUncheckedUpdateWithoutDeckInput>
  }

  export type DeckAccessUpdateManyWithWhereWithoutDeckInput = {
    where: DeckAccessScalarWhereInput
    data: XOR<DeckAccessUpdateManyMutationInput, DeckAccessUncheckedUpdateManyWithoutDeckInput>
  }

  export type FlashCardUpsertWithWhereUniqueWithoutDecksInput = {
    where: FlashCardWhereUniqueInput
    update: XOR<FlashCardUpdateWithoutDecksInput, FlashCardUncheckedUpdateWithoutDecksInput>
    create: XOR<FlashCardCreateWithoutDecksInput, FlashCardUncheckedCreateWithoutDecksInput>
  }

  export type FlashCardUpdateWithWhereUniqueWithoutDecksInput = {
    where: FlashCardWhereUniqueInput
    data: XOR<FlashCardUpdateWithoutDecksInput, FlashCardUncheckedUpdateWithoutDecksInput>
  }

  export type FlashCardUpdateManyWithWhereWithoutDecksInput = {
    where: FlashCardScalarWhereInput
    data: XOR<FlashCardUpdateManyMutationInput, FlashCardUncheckedUpdateManyWithoutDecksInput>
  }

  export type DeckFlashCardUpsertWithWhereUniqueWithoutDeckInput = {
    where: DeckFlashCardWhereUniqueInput
    update: XOR<DeckFlashCardUpdateWithoutDeckInput, DeckFlashCardUncheckedUpdateWithoutDeckInput>
    create: XOR<DeckFlashCardCreateWithoutDeckInput, DeckFlashCardUncheckedCreateWithoutDeckInput>
  }

  export type DeckFlashCardUpdateWithWhereUniqueWithoutDeckInput = {
    where: DeckFlashCardWhereUniqueInput
    data: XOR<DeckFlashCardUpdateWithoutDeckInput, DeckFlashCardUncheckedUpdateWithoutDeckInput>
  }

  export type DeckFlashCardUpdateManyWithWhereWithoutDeckInput = {
    where: DeckFlashCardScalarWhereInput
    data: XOR<DeckFlashCardUpdateManyMutationInput, DeckFlashCardUncheckedUpdateManyWithoutDeckInput>
  }

  export type DeckFlashCardScalarWhereInput = {
    AND?: DeckFlashCardScalarWhereInput | DeckFlashCardScalarWhereInput[]
    OR?: DeckFlashCardScalarWhereInput[]
    NOT?: DeckFlashCardScalarWhereInput | DeckFlashCardScalarWhereInput[]
    deckId?: StringFilter<"DeckFlashCard"> | string
    flashId?: StringFilter<"DeckFlashCard"> | string
    progress?: EnumFlashCardProgressFilter<"DeckFlashCard"> | $Enums.FlashCardProgress
    createdAt?: DateTimeFilter<"DeckFlashCard"> | Date | string
  }

  export type UserCreateWithoutFlashcardsInput = {
    id?: string
    name?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    accounts?: AccountCreateNestedManyWithoutUserInput
    sessions?: SessionCreateNestedManyWithoutUserInput
    posts?: PostCreateNestedManyWithoutCreatedByInput
    decks?: DeckCreateNestedManyWithoutOwnerInput
    accesses?: DeckAccessCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutFlashcardsInput = {
    id?: string
    name?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    posts?: PostUncheckedCreateNestedManyWithoutCreatedByInput
    decks?: DeckUncheckedCreateNestedManyWithoutOwnerInput
    accesses?: DeckAccessUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutFlashcardsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutFlashcardsInput, UserUncheckedCreateWithoutFlashcardsInput>
  }

  export type DeckCreateWithoutFlashcardsInput = {
    id?: string
    name: string
    public?: $Enums.AccessLevel
    owner: UserCreateNestedOneWithoutDecksInput
    accesses?: DeckAccessCreateNestedManyWithoutDeckInput
    deckflashcard?: DeckFlashCardCreateNestedManyWithoutDeckInput
  }

  export type DeckUncheckedCreateWithoutFlashcardsInput = {
    id?: string
    name: string
    ownerId: string
    public?: $Enums.AccessLevel
    accesses?: DeckAccessUncheckedCreateNestedManyWithoutDeckInput
    deckflashcard?: DeckFlashCardUncheckedCreateNestedManyWithoutDeckInput
  }

  export type DeckCreateOrConnectWithoutFlashcardsInput = {
    where: DeckWhereUniqueInput
    create: XOR<DeckCreateWithoutFlashcardsInput, DeckUncheckedCreateWithoutFlashcardsInput>
  }

  export type DeckFlashCardCreateWithoutFlashInput = {
    progress?: $Enums.FlashCardProgress
    createdAt?: Date | string
    deck: DeckCreateNestedOneWithoutDeckflashcardInput
  }

  export type DeckFlashCardUncheckedCreateWithoutFlashInput = {
    deckId: string
    progress?: $Enums.FlashCardProgress
    createdAt?: Date | string
  }

  export type DeckFlashCardCreateOrConnectWithoutFlashInput = {
    where: DeckFlashCardWhereUniqueInput
    create: XOR<DeckFlashCardCreateWithoutFlashInput, DeckFlashCardUncheckedCreateWithoutFlashInput>
  }

  export type DeckFlashCardCreateManyFlashInputEnvelope = {
    data: DeckFlashCardCreateManyFlashInput | DeckFlashCardCreateManyFlashInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutFlashcardsInput = {
    update: XOR<UserUpdateWithoutFlashcardsInput, UserUncheckedUpdateWithoutFlashcardsInput>
    create: XOR<UserCreateWithoutFlashcardsInput, UserUncheckedCreateWithoutFlashcardsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutFlashcardsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutFlashcardsInput, UserUncheckedUpdateWithoutFlashcardsInput>
  }

  export type UserUpdateWithoutFlashcardsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    accounts?: AccountUpdateManyWithoutUserNestedInput
    sessions?: SessionUpdateManyWithoutUserNestedInput
    posts?: PostUpdateManyWithoutCreatedByNestedInput
    decks?: DeckUpdateManyWithoutOwnerNestedInput
    accesses?: DeckAccessUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutFlashcardsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    posts?: PostUncheckedUpdateManyWithoutCreatedByNestedInput
    decks?: DeckUncheckedUpdateManyWithoutOwnerNestedInput
    accesses?: DeckAccessUncheckedUpdateManyWithoutUserNestedInput
  }

  export type DeckUpsertWithWhereUniqueWithoutFlashcardsInput = {
    where: DeckWhereUniqueInput
    update: XOR<DeckUpdateWithoutFlashcardsInput, DeckUncheckedUpdateWithoutFlashcardsInput>
    create: XOR<DeckCreateWithoutFlashcardsInput, DeckUncheckedCreateWithoutFlashcardsInput>
  }

  export type DeckUpdateWithWhereUniqueWithoutFlashcardsInput = {
    where: DeckWhereUniqueInput
    data: XOR<DeckUpdateWithoutFlashcardsInput, DeckUncheckedUpdateWithoutFlashcardsInput>
  }

  export type DeckUpdateManyWithWhereWithoutFlashcardsInput = {
    where: DeckScalarWhereInput
    data: XOR<DeckUpdateManyMutationInput, DeckUncheckedUpdateManyWithoutFlashcardsInput>
  }

  export type DeckFlashCardUpsertWithWhereUniqueWithoutFlashInput = {
    where: DeckFlashCardWhereUniqueInput
    update: XOR<DeckFlashCardUpdateWithoutFlashInput, DeckFlashCardUncheckedUpdateWithoutFlashInput>
    create: XOR<DeckFlashCardCreateWithoutFlashInput, DeckFlashCardUncheckedCreateWithoutFlashInput>
  }

  export type DeckFlashCardUpdateWithWhereUniqueWithoutFlashInput = {
    where: DeckFlashCardWhereUniqueInput
    data: XOR<DeckFlashCardUpdateWithoutFlashInput, DeckFlashCardUncheckedUpdateWithoutFlashInput>
  }

  export type DeckFlashCardUpdateManyWithWhereWithoutFlashInput = {
    where: DeckFlashCardScalarWhereInput
    data: XOR<DeckFlashCardUpdateManyMutationInput, DeckFlashCardUncheckedUpdateManyWithoutFlashInput>
  }

  export type DeckCreateWithoutDeckflashcardInput = {
    id?: string
    name: string
    public?: $Enums.AccessLevel
    owner: UserCreateNestedOneWithoutDecksInput
    accesses?: DeckAccessCreateNestedManyWithoutDeckInput
    flashcards?: FlashCardCreateNestedManyWithoutDecksInput
  }

  export type DeckUncheckedCreateWithoutDeckflashcardInput = {
    id?: string
    name: string
    ownerId: string
    public?: $Enums.AccessLevel
    accesses?: DeckAccessUncheckedCreateNestedManyWithoutDeckInput
    flashcards?: FlashCardUncheckedCreateNestedManyWithoutDecksInput
  }

  export type DeckCreateOrConnectWithoutDeckflashcardInput = {
    where: DeckWhereUniqueInput
    create: XOR<DeckCreateWithoutDeckflashcardInput, DeckUncheckedCreateWithoutDeckflashcardInput>
  }

  export type FlashCardCreateWithoutDeckflashcardInput = {
    id?: string
    title: string
    content: string
    owner: UserCreateNestedOneWithoutFlashcardsInput
    decks?: DeckCreateNestedManyWithoutFlashcardsInput
  }

  export type FlashCardUncheckedCreateWithoutDeckflashcardInput = {
    id?: string
    ownerId: string
    title: string
    content: string
    decks?: DeckUncheckedCreateNestedManyWithoutFlashcardsInput
  }

  export type FlashCardCreateOrConnectWithoutDeckflashcardInput = {
    where: FlashCardWhereUniqueInput
    create: XOR<FlashCardCreateWithoutDeckflashcardInput, FlashCardUncheckedCreateWithoutDeckflashcardInput>
  }

  export type DeckUpsertWithoutDeckflashcardInput = {
    update: XOR<DeckUpdateWithoutDeckflashcardInput, DeckUncheckedUpdateWithoutDeckflashcardInput>
    create: XOR<DeckCreateWithoutDeckflashcardInput, DeckUncheckedCreateWithoutDeckflashcardInput>
    where?: DeckWhereInput
  }

  export type DeckUpdateToOneWithWhereWithoutDeckflashcardInput = {
    where?: DeckWhereInput
    data: XOR<DeckUpdateWithoutDeckflashcardInput, DeckUncheckedUpdateWithoutDeckflashcardInput>
  }

  export type DeckUpdateWithoutDeckflashcardInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    public?: EnumAccessLevelFieldUpdateOperationsInput | $Enums.AccessLevel
    owner?: UserUpdateOneRequiredWithoutDecksNestedInput
    accesses?: DeckAccessUpdateManyWithoutDeckNestedInput
    flashcards?: FlashCardUpdateManyWithoutDecksNestedInput
  }

  export type DeckUncheckedUpdateWithoutDeckflashcardInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    ownerId?: StringFieldUpdateOperationsInput | string
    public?: EnumAccessLevelFieldUpdateOperationsInput | $Enums.AccessLevel
    accesses?: DeckAccessUncheckedUpdateManyWithoutDeckNestedInput
    flashcards?: FlashCardUncheckedUpdateManyWithoutDecksNestedInput
  }

  export type FlashCardUpsertWithoutDeckflashcardInput = {
    update: XOR<FlashCardUpdateWithoutDeckflashcardInput, FlashCardUncheckedUpdateWithoutDeckflashcardInput>
    create: XOR<FlashCardCreateWithoutDeckflashcardInput, FlashCardUncheckedCreateWithoutDeckflashcardInput>
    where?: FlashCardWhereInput
  }

  export type FlashCardUpdateToOneWithWhereWithoutDeckflashcardInput = {
    where?: FlashCardWhereInput
    data: XOR<FlashCardUpdateWithoutDeckflashcardInput, FlashCardUncheckedUpdateWithoutDeckflashcardInput>
  }

  export type FlashCardUpdateWithoutDeckflashcardInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    owner?: UserUpdateOneRequiredWithoutFlashcardsNestedInput
    decks?: DeckUpdateManyWithoutFlashcardsNestedInput
  }

  export type FlashCardUncheckedUpdateWithoutDeckflashcardInput = {
    id?: StringFieldUpdateOperationsInput | string
    ownerId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    decks?: DeckUncheckedUpdateManyWithoutFlashcardsNestedInput
  }

  export type DeckCreateWithoutAccessesInput = {
    id?: string
    name: string
    public?: $Enums.AccessLevel
    owner: UserCreateNestedOneWithoutDecksInput
    flashcards?: FlashCardCreateNestedManyWithoutDecksInput
    deckflashcard?: DeckFlashCardCreateNestedManyWithoutDeckInput
  }

  export type DeckUncheckedCreateWithoutAccessesInput = {
    id?: string
    name: string
    ownerId: string
    public?: $Enums.AccessLevel
    flashcards?: FlashCardUncheckedCreateNestedManyWithoutDecksInput
    deckflashcard?: DeckFlashCardUncheckedCreateNestedManyWithoutDeckInput
  }

  export type DeckCreateOrConnectWithoutAccessesInput = {
    where: DeckWhereUniqueInput
    create: XOR<DeckCreateWithoutAccessesInput, DeckUncheckedCreateWithoutAccessesInput>
  }

  export type UserCreateWithoutAccessesInput = {
    id?: string
    name?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    accounts?: AccountCreateNestedManyWithoutUserInput
    sessions?: SessionCreateNestedManyWithoutUserInput
    posts?: PostCreateNestedManyWithoutCreatedByInput
    decks?: DeckCreateNestedManyWithoutOwnerInput
    flashcards?: FlashCardCreateNestedManyWithoutOwnerInput
  }

  export type UserUncheckedCreateWithoutAccessesInput = {
    id?: string
    name?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    posts?: PostUncheckedCreateNestedManyWithoutCreatedByInput
    decks?: DeckUncheckedCreateNestedManyWithoutOwnerInput
    flashcards?: FlashCardUncheckedCreateNestedManyWithoutOwnerInput
  }

  export type UserCreateOrConnectWithoutAccessesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutAccessesInput, UserUncheckedCreateWithoutAccessesInput>
  }

  export type DeckUpsertWithoutAccessesInput = {
    update: XOR<DeckUpdateWithoutAccessesInput, DeckUncheckedUpdateWithoutAccessesInput>
    create: XOR<DeckCreateWithoutAccessesInput, DeckUncheckedCreateWithoutAccessesInput>
    where?: DeckWhereInput
  }

  export type DeckUpdateToOneWithWhereWithoutAccessesInput = {
    where?: DeckWhereInput
    data: XOR<DeckUpdateWithoutAccessesInput, DeckUncheckedUpdateWithoutAccessesInput>
  }

  export type DeckUpdateWithoutAccessesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    public?: EnumAccessLevelFieldUpdateOperationsInput | $Enums.AccessLevel
    owner?: UserUpdateOneRequiredWithoutDecksNestedInput
    flashcards?: FlashCardUpdateManyWithoutDecksNestedInput
    deckflashcard?: DeckFlashCardUpdateManyWithoutDeckNestedInput
  }

  export type DeckUncheckedUpdateWithoutAccessesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    ownerId?: StringFieldUpdateOperationsInput | string
    public?: EnumAccessLevelFieldUpdateOperationsInput | $Enums.AccessLevel
    flashcards?: FlashCardUncheckedUpdateManyWithoutDecksNestedInput
    deckflashcard?: DeckFlashCardUncheckedUpdateManyWithoutDeckNestedInput
  }

  export type UserUpsertWithoutAccessesInput = {
    update: XOR<UserUpdateWithoutAccessesInput, UserUncheckedUpdateWithoutAccessesInput>
    create: XOR<UserCreateWithoutAccessesInput, UserUncheckedCreateWithoutAccessesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutAccessesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutAccessesInput, UserUncheckedUpdateWithoutAccessesInput>
  }

  export type UserUpdateWithoutAccessesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    accounts?: AccountUpdateManyWithoutUserNestedInput
    sessions?: SessionUpdateManyWithoutUserNestedInput
    posts?: PostUpdateManyWithoutCreatedByNestedInput
    decks?: DeckUpdateManyWithoutOwnerNestedInput
    flashcards?: FlashCardUpdateManyWithoutOwnerNestedInput
  }

  export type UserUncheckedUpdateWithoutAccessesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    posts?: PostUncheckedUpdateManyWithoutCreatedByNestedInput
    decks?: DeckUncheckedUpdateManyWithoutOwnerNestedInput
    flashcards?: FlashCardUncheckedUpdateManyWithoutOwnerNestedInput
  }

  export type AccountCreateManyUserInput = {
    id?: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token?: string | null
    access_token?: string | null
    expires_at?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_state?: string | null
    refresh_token_expires_in?: number | null
  }

  export type SessionCreateManyUserInput = {
    id?: string
    sessionToken: string
    expires: Date | string
  }

  export type PostCreateManyCreatedByInput = {
    id?: number
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DeckCreateManyOwnerInput = {
    id?: string
    name: string
    public?: $Enums.AccessLevel
  }

  export type FlashCardCreateManyOwnerInput = {
    id?: string
    title: string
    content: string
  }

  export type DeckAccessCreateManyUserInput = {
    deckId: string
    level?: $Enums.AccessLevel
    createdAt?: Date | string
  }

  export type AccountUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
    refresh_token_expires_in?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type AccountUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
    refresh_token_expires_in?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type AccountUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
    refresh_token_expires_in?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type SessionUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionToken?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionToken?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionToken?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PostUpdateWithoutCreatedByInput = {
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PostUncheckedUpdateWithoutCreatedByInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PostUncheckedUpdateManyWithoutCreatedByInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DeckUpdateWithoutOwnerInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    public?: EnumAccessLevelFieldUpdateOperationsInput | $Enums.AccessLevel
    accesses?: DeckAccessUpdateManyWithoutDeckNestedInput
    flashcards?: FlashCardUpdateManyWithoutDecksNestedInput
    deckflashcard?: DeckFlashCardUpdateManyWithoutDeckNestedInput
  }

  export type DeckUncheckedUpdateWithoutOwnerInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    public?: EnumAccessLevelFieldUpdateOperationsInput | $Enums.AccessLevel
    accesses?: DeckAccessUncheckedUpdateManyWithoutDeckNestedInput
    flashcards?: FlashCardUncheckedUpdateManyWithoutDecksNestedInput
    deckflashcard?: DeckFlashCardUncheckedUpdateManyWithoutDeckNestedInput
  }

  export type DeckUncheckedUpdateManyWithoutOwnerInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    public?: EnumAccessLevelFieldUpdateOperationsInput | $Enums.AccessLevel
  }

  export type FlashCardUpdateWithoutOwnerInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    decks?: DeckUpdateManyWithoutFlashcardsNestedInput
    deckflashcard?: DeckFlashCardUpdateManyWithoutFlashNestedInput
  }

  export type FlashCardUncheckedUpdateWithoutOwnerInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    decks?: DeckUncheckedUpdateManyWithoutFlashcardsNestedInput
    deckflashcard?: DeckFlashCardUncheckedUpdateManyWithoutFlashNestedInput
  }

  export type FlashCardUncheckedUpdateManyWithoutOwnerInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
  }

  export type DeckAccessUpdateWithoutUserInput = {
    level?: EnumAccessLevelFieldUpdateOperationsInput | $Enums.AccessLevel
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deck?: DeckUpdateOneRequiredWithoutAccessesNestedInput
  }

  export type DeckAccessUncheckedUpdateWithoutUserInput = {
    deckId?: StringFieldUpdateOperationsInput | string
    level?: EnumAccessLevelFieldUpdateOperationsInput | $Enums.AccessLevel
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DeckAccessUncheckedUpdateManyWithoutUserInput = {
    deckId?: StringFieldUpdateOperationsInput | string
    level?: EnumAccessLevelFieldUpdateOperationsInput | $Enums.AccessLevel
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DeckAccessCreateManyDeckInput = {
    userId: string
    level?: $Enums.AccessLevel
    createdAt?: Date | string
  }

  export type DeckFlashCardCreateManyDeckInput = {
    flashId: string
    progress?: $Enums.FlashCardProgress
    createdAt?: Date | string
  }

  export type DeckAccessUpdateWithoutDeckInput = {
    level?: EnumAccessLevelFieldUpdateOperationsInput | $Enums.AccessLevel
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutAccessesNestedInput
  }

  export type DeckAccessUncheckedUpdateWithoutDeckInput = {
    userId?: StringFieldUpdateOperationsInput | string
    level?: EnumAccessLevelFieldUpdateOperationsInput | $Enums.AccessLevel
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DeckAccessUncheckedUpdateManyWithoutDeckInput = {
    userId?: StringFieldUpdateOperationsInput | string
    level?: EnumAccessLevelFieldUpdateOperationsInput | $Enums.AccessLevel
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FlashCardUpdateWithoutDecksInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    owner?: UserUpdateOneRequiredWithoutFlashcardsNestedInput
    deckflashcard?: DeckFlashCardUpdateManyWithoutFlashNestedInput
  }

  export type FlashCardUncheckedUpdateWithoutDecksInput = {
    id?: StringFieldUpdateOperationsInput | string
    ownerId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    deckflashcard?: DeckFlashCardUncheckedUpdateManyWithoutFlashNestedInput
  }

  export type FlashCardUncheckedUpdateManyWithoutDecksInput = {
    id?: StringFieldUpdateOperationsInput | string
    ownerId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
  }

  export type DeckFlashCardUpdateWithoutDeckInput = {
    progress?: EnumFlashCardProgressFieldUpdateOperationsInput | $Enums.FlashCardProgress
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    flash?: FlashCardUpdateOneRequiredWithoutDeckflashcardNestedInput
  }

  export type DeckFlashCardUncheckedUpdateWithoutDeckInput = {
    flashId?: StringFieldUpdateOperationsInput | string
    progress?: EnumFlashCardProgressFieldUpdateOperationsInput | $Enums.FlashCardProgress
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DeckFlashCardUncheckedUpdateManyWithoutDeckInput = {
    flashId?: StringFieldUpdateOperationsInput | string
    progress?: EnumFlashCardProgressFieldUpdateOperationsInput | $Enums.FlashCardProgress
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DeckFlashCardCreateManyFlashInput = {
    deckId: string
    progress?: $Enums.FlashCardProgress
    createdAt?: Date | string
  }

  export type DeckUpdateWithoutFlashcardsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    public?: EnumAccessLevelFieldUpdateOperationsInput | $Enums.AccessLevel
    owner?: UserUpdateOneRequiredWithoutDecksNestedInput
    accesses?: DeckAccessUpdateManyWithoutDeckNestedInput
    deckflashcard?: DeckFlashCardUpdateManyWithoutDeckNestedInput
  }

  export type DeckUncheckedUpdateWithoutFlashcardsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    ownerId?: StringFieldUpdateOperationsInput | string
    public?: EnumAccessLevelFieldUpdateOperationsInput | $Enums.AccessLevel
    accesses?: DeckAccessUncheckedUpdateManyWithoutDeckNestedInput
    deckflashcard?: DeckFlashCardUncheckedUpdateManyWithoutDeckNestedInput
  }

  export type DeckUncheckedUpdateManyWithoutFlashcardsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    ownerId?: StringFieldUpdateOperationsInput | string
    public?: EnumAccessLevelFieldUpdateOperationsInput | $Enums.AccessLevel
  }

  export type DeckFlashCardUpdateWithoutFlashInput = {
    progress?: EnumFlashCardProgressFieldUpdateOperationsInput | $Enums.FlashCardProgress
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deck?: DeckUpdateOneRequiredWithoutDeckflashcardNestedInput
  }

  export type DeckFlashCardUncheckedUpdateWithoutFlashInput = {
    deckId?: StringFieldUpdateOperationsInput | string
    progress?: EnumFlashCardProgressFieldUpdateOperationsInput | $Enums.FlashCardProgress
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DeckFlashCardUncheckedUpdateManyWithoutFlashInput = {
    deckId?: StringFieldUpdateOperationsInput | string
    progress?: EnumFlashCardProgressFieldUpdateOperationsInput | $Enums.FlashCardProgress
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}