
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
 * Model Base
 * 
 */
export type Base = $Result.DefaultSelection<Prisma.$BasePayload>
/**
 * Model Relations
 * 
 */
export type Relations = $Result.DefaultSelection<Prisma.$RelationsPayload>
/**
 * Model Names
 * 
 */
export type Names = $Result.DefaultSelection<Prisma.$NamesPayload>
/**
 * Model Urls
 * 
 */
export type Urls = $Result.DefaultSelection<Prisma.$UrlsPayload>

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Bases
 * const bases = await prisma.base.findMany()
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
   * // Fetch zero or more Bases
   * const bases = await prisma.base.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

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


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.base`: Exposes CRUD operations for the **Base** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Bases
    * const bases = await prisma.base.findMany()
    * ```
    */
  get base(): Prisma.BaseDelegate<ExtArgs>;

  /**
   * `prisma.relations`: Exposes CRUD operations for the **Relations** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Relations
    * const relations = await prisma.relations.findMany()
    * ```
    */
  get relations(): Prisma.RelationsDelegate<ExtArgs>;

  /**
   * `prisma.names`: Exposes CRUD operations for the **Names** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Names
    * const names = await prisma.names.findMany()
    * ```
    */
  get names(): Prisma.NamesDelegate<ExtArgs>;

  /**
   * `prisma.urls`: Exposes CRUD operations for the **Urls** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Urls
    * const urls = await prisma.urls.findMany()
    * ```
    */
  get urls(): Prisma.UrlsDelegate<ExtArgs>;
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
   * Prisma Client JS version: 6.0.1
   * Query Engine version: 5dbef10bdbfb579e07d35cc85fb1518d357cb99e
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
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
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
    Base: 'Base',
    Relations: 'Relations',
    Names: 'Names',
    Urls: 'Urls'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs, clientOptions: PrismaClientOptions }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], this['params']['clientOptions']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> = {
    meta: {
      modelProps: "base" | "relations" | "names" | "urls"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Base: {
        payload: Prisma.$BasePayload<ExtArgs>
        fields: Prisma.BaseFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BaseFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BasePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BaseFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BasePayload>
          }
          findFirst: {
            args: Prisma.BaseFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BasePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BaseFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BasePayload>
          }
          findMany: {
            args: Prisma.BaseFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BasePayload>[]
          }
          create: {
            args: Prisma.BaseCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BasePayload>
          }
          createMany: {
            args: Prisma.BaseCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.BaseCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BasePayload>[]
          }
          delete: {
            args: Prisma.BaseDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BasePayload>
          }
          update: {
            args: Prisma.BaseUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BasePayload>
          }
          deleteMany: {
            args: Prisma.BaseDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BaseUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.BaseUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BasePayload>
          }
          aggregate: {
            args: Prisma.BaseAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBase>
          }
          groupBy: {
            args: Prisma.BaseGroupByArgs<ExtArgs>
            result: $Utils.Optional<BaseGroupByOutputType>[]
          }
          count: {
            args: Prisma.BaseCountArgs<ExtArgs>
            result: $Utils.Optional<BaseCountAggregateOutputType> | number
          }
        }
      }
      Relations: {
        payload: Prisma.$RelationsPayload<ExtArgs>
        fields: Prisma.RelationsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RelationsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RelationsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RelationsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RelationsPayload>
          }
          findFirst: {
            args: Prisma.RelationsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RelationsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RelationsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RelationsPayload>
          }
          findMany: {
            args: Prisma.RelationsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RelationsPayload>[]
          }
          create: {
            args: Prisma.RelationsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RelationsPayload>
          }
          createMany: {
            args: Prisma.RelationsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RelationsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RelationsPayload>[]
          }
          delete: {
            args: Prisma.RelationsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RelationsPayload>
          }
          update: {
            args: Prisma.RelationsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RelationsPayload>
          }
          deleteMany: {
            args: Prisma.RelationsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RelationsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.RelationsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RelationsPayload>
          }
          aggregate: {
            args: Prisma.RelationsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRelations>
          }
          groupBy: {
            args: Prisma.RelationsGroupByArgs<ExtArgs>
            result: $Utils.Optional<RelationsGroupByOutputType>[]
          }
          count: {
            args: Prisma.RelationsCountArgs<ExtArgs>
            result: $Utils.Optional<RelationsCountAggregateOutputType> | number
          }
        }
      }
      Names: {
        payload: Prisma.$NamesPayload<ExtArgs>
        fields: Prisma.NamesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.NamesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NamesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.NamesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NamesPayload>
          }
          findFirst: {
            args: Prisma.NamesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NamesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.NamesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NamesPayload>
          }
          findMany: {
            args: Prisma.NamesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NamesPayload>[]
          }
          create: {
            args: Prisma.NamesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NamesPayload>
          }
          createMany: {
            args: Prisma.NamesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.NamesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NamesPayload>[]
          }
          delete: {
            args: Prisma.NamesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NamesPayload>
          }
          update: {
            args: Prisma.NamesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NamesPayload>
          }
          deleteMany: {
            args: Prisma.NamesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.NamesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.NamesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NamesPayload>
          }
          aggregate: {
            args: Prisma.NamesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateNames>
          }
          groupBy: {
            args: Prisma.NamesGroupByArgs<ExtArgs>
            result: $Utils.Optional<NamesGroupByOutputType>[]
          }
          count: {
            args: Prisma.NamesCountArgs<ExtArgs>
            result: $Utils.Optional<NamesCountAggregateOutputType> | number
          }
        }
      }
      Urls: {
        payload: Prisma.$UrlsPayload<ExtArgs>
        fields: Prisma.UrlsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UrlsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UrlsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UrlsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UrlsPayload>
          }
          findFirst: {
            args: Prisma.UrlsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UrlsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UrlsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UrlsPayload>
          }
          findMany: {
            args: Prisma.UrlsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UrlsPayload>[]
          }
          create: {
            args: Prisma.UrlsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UrlsPayload>
          }
          createMany: {
            args: Prisma.UrlsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UrlsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UrlsPayload>[]
          }
          delete: {
            args: Prisma.UrlsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UrlsPayload>
          }
          update: {
            args: Prisma.UrlsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UrlsPayload>
          }
          deleteMany: {
            args: Prisma.UrlsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UrlsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UrlsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UrlsPayload>
          }
          aggregate: {
            args: Prisma.UrlsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUrls>
          }
          groupBy: {
            args: Prisma.UrlsGroupByArgs<ExtArgs>
            result: $Utils.Optional<UrlsGroupByOutputType>[]
          }
          count: {
            args: Prisma.UrlsCountArgs<ExtArgs>
            result: $Utils.Optional<UrlsCountAggregateOutputType> | number
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
   * Count Type BaseCountOutputType
   */

  export type BaseCountOutputType = {
    names: number
    urls: number
    partneredTo: number
    partneredBy: number
    siblingsTo: number
    siblingsBy: number
    parents: number
    children: number
    other_relations: number
  }

  export type BaseCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    names?: boolean | BaseCountOutputTypeCountNamesArgs
    urls?: boolean | BaseCountOutputTypeCountUrlsArgs
    partneredTo?: boolean | BaseCountOutputTypeCountPartneredToArgs
    partneredBy?: boolean | BaseCountOutputTypeCountPartneredByArgs
    siblingsTo?: boolean | BaseCountOutputTypeCountSiblingsToArgs
    siblingsBy?: boolean | BaseCountOutputTypeCountSiblingsByArgs
    parents?: boolean | BaseCountOutputTypeCountParentsArgs
    children?: boolean | BaseCountOutputTypeCountChildrenArgs
    other_relations?: boolean | BaseCountOutputTypeCountOther_relationsArgs
  }

  // Custom InputTypes
  /**
   * BaseCountOutputType without action
   */
  export type BaseCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BaseCountOutputType
     */
    select?: BaseCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * BaseCountOutputType without action
   */
  export type BaseCountOutputTypeCountNamesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NamesWhereInput
  }

  /**
   * BaseCountOutputType without action
   */
  export type BaseCountOutputTypeCountUrlsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UrlsWhereInput
  }

  /**
   * BaseCountOutputType without action
   */
  export type BaseCountOutputTypeCountPartneredToArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BaseWhereInput
  }

  /**
   * BaseCountOutputType without action
   */
  export type BaseCountOutputTypeCountPartneredByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BaseWhereInput
  }

  /**
   * BaseCountOutputType without action
   */
  export type BaseCountOutputTypeCountSiblingsToArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BaseWhereInput
  }

  /**
   * BaseCountOutputType without action
   */
  export type BaseCountOutputTypeCountSiblingsByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BaseWhereInput
  }

  /**
   * BaseCountOutputType without action
   */
  export type BaseCountOutputTypeCountParentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BaseWhereInput
  }

  /**
   * BaseCountOutputType without action
   */
  export type BaseCountOutputTypeCountChildrenArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BaseWhereInput
  }

  /**
   * BaseCountOutputType without action
   */
  export type BaseCountOutputTypeCountOther_relationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RelationsWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Base
   */

  export type AggregateBase = {
    _count: BaseCountAggregateOutputType | null
    _min: BaseMinAggregateOutputType | null
    _max: BaseMaxAggregateOutputType | null
  }

  export type BaseMinAggregateOutputType = {
    slug: string | null
    name: string | null
    description: string | null
  }

  export type BaseMaxAggregateOutputType = {
    slug: string | null
    name: string | null
    description: string | null
  }

  export type BaseCountAggregateOutputType = {
    slug: number
    name: number
    description: number
    _all: number
  }


  export type BaseMinAggregateInputType = {
    slug?: true
    name?: true
    description?: true
  }

  export type BaseMaxAggregateInputType = {
    slug?: true
    name?: true
    description?: true
  }

  export type BaseCountAggregateInputType = {
    slug?: true
    name?: true
    description?: true
    _all?: true
  }

  export type BaseAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Base to aggregate.
     */
    where?: BaseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bases to fetch.
     */
    orderBy?: BaseOrderByWithRelationInput | BaseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BaseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Bases from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Bases.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Bases
    **/
    _count?: true | BaseCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BaseMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BaseMaxAggregateInputType
  }

  export type GetBaseAggregateType<T extends BaseAggregateArgs> = {
        [P in keyof T & keyof AggregateBase]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBase[P]>
      : GetScalarType<T[P], AggregateBase[P]>
  }




  export type BaseGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BaseWhereInput
    orderBy?: BaseOrderByWithAggregationInput | BaseOrderByWithAggregationInput[]
    by: BaseScalarFieldEnum[] | BaseScalarFieldEnum
    having?: BaseScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BaseCountAggregateInputType | true
    _min?: BaseMinAggregateInputType
    _max?: BaseMaxAggregateInputType
  }

  export type BaseGroupByOutputType = {
    slug: string
    name: string
    description: string | null
    _count: BaseCountAggregateOutputType | null
    _min: BaseMinAggregateOutputType | null
    _max: BaseMaxAggregateOutputType | null
  }

  type GetBaseGroupByPayload<T extends BaseGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BaseGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BaseGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BaseGroupByOutputType[P]>
            : GetScalarType<T[P], BaseGroupByOutputType[P]>
        }
      >
    >


  export type BaseSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    slug?: boolean
    name?: boolean
    description?: boolean
    names?: boolean | Base$namesArgs<ExtArgs>
    urls?: boolean | Base$urlsArgs<ExtArgs>
    partneredTo?: boolean | Base$partneredToArgs<ExtArgs>
    partneredBy?: boolean | Base$partneredByArgs<ExtArgs>
    siblingsTo?: boolean | Base$siblingsToArgs<ExtArgs>
    siblingsBy?: boolean | Base$siblingsByArgs<ExtArgs>
    parents?: boolean | Base$parentsArgs<ExtArgs>
    children?: boolean | Base$childrenArgs<ExtArgs>
    other_relations?: boolean | Base$other_relationsArgs<ExtArgs>
    _count?: boolean | BaseCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["base"]>

  export type BaseSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    slug?: boolean
    name?: boolean
    description?: boolean
  }, ExtArgs["result"]["base"]>

  export type BaseSelectScalar = {
    slug?: boolean
    name?: boolean
    description?: boolean
  }

  export type BaseInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    names?: boolean | Base$namesArgs<ExtArgs>
    urls?: boolean | Base$urlsArgs<ExtArgs>
    partneredTo?: boolean | Base$partneredToArgs<ExtArgs>
    partneredBy?: boolean | Base$partneredByArgs<ExtArgs>
    siblingsTo?: boolean | Base$siblingsToArgs<ExtArgs>
    siblingsBy?: boolean | Base$siblingsByArgs<ExtArgs>
    parents?: boolean | Base$parentsArgs<ExtArgs>
    children?: boolean | Base$childrenArgs<ExtArgs>
    other_relations?: boolean | Base$other_relationsArgs<ExtArgs>
    _count?: boolean | BaseCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type BaseIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $BasePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Base"
    objects: {
      names: Prisma.$NamesPayload<ExtArgs>[]
      urls: Prisma.$UrlsPayload<ExtArgs>[]
      partneredTo: Prisma.$BasePayload<ExtArgs>[]
      partneredBy: Prisma.$BasePayload<ExtArgs>[]
      siblingsTo: Prisma.$BasePayload<ExtArgs>[]
      siblingsBy: Prisma.$BasePayload<ExtArgs>[]
      parents: Prisma.$BasePayload<ExtArgs>[]
      children: Prisma.$BasePayload<ExtArgs>[]
      other_relations: Prisma.$RelationsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      slug: string
      name: string
      description: string | null
    }, ExtArgs["result"]["base"]>
    composites: {}
  }

  type BaseGetPayload<S extends boolean | null | undefined | BaseDefaultArgs> = $Result.GetResult<Prisma.$BasePayload, S>

  type BaseCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<BaseFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: BaseCountAggregateInputType | true
    }

  export interface BaseDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Base'], meta: { name: 'Base' } }
    /**
     * Find zero or one Base that matches the filter.
     * @param {BaseFindUniqueArgs} args - Arguments to find a Base
     * @example
     * // Get one Base
     * const base = await prisma.base.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BaseFindUniqueArgs>(args: SelectSubset<T, BaseFindUniqueArgs<ExtArgs>>): Prisma__BaseClient<$Result.GetResult<Prisma.$BasePayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Base that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {BaseFindUniqueOrThrowArgs} args - Arguments to find a Base
     * @example
     * // Get one Base
     * const base = await prisma.base.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BaseFindUniqueOrThrowArgs>(args: SelectSubset<T, BaseFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BaseClient<$Result.GetResult<Prisma.$BasePayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Base that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BaseFindFirstArgs} args - Arguments to find a Base
     * @example
     * // Get one Base
     * const base = await prisma.base.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BaseFindFirstArgs>(args?: SelectSubset<T, BaseFindFirstArgs<ExtArgs>>): Prisma__BaseClient<$Result.GetResult<Prisma.$BasePayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Base that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BaseFindFirstOrThrowArgs} args - Arguments to find a Base
     * @example
     * // Get one Base
     * const base = await prisma.base.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BaseFindFirstOrThrowArgs>(args?: SelectSubset<T, BaseFindFirstOrThrowArgs<ExtArgs>>): Prisma__BaseClient<$Result.GetResult<Prisma.$BasePayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Bases that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BaseFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Bases
     * const bases = await prisma.base.findMany()
     * 
     * // Get first 10 Bases
     * const bases = await prisma.base.findMany({ take: 10 })
     * 
     * // Only select the `slug`
     * const baseWithSlugOnly = await prisma.base.findMany({ select: { slug: true } })
     * 
     */
    findMany<T extends BaseFindManyArgs>(args?: SelectSubset<T, BaseFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BasePayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Base.
     * @param {BaseCreateArgs} args - Arguments to create a Base.
     * @example
     * // Create one Base
     * const Base = await prisma.base.create({
     *   data: {
     *     // ... data to create a Base
     *   }
     * })
     * 
     */
    create<T extends BaseCreateArgs>(args: SelectSubset<T, BaseCreateArgs<ExtArgs>>): Prisma__BaseClient<$Result.GetResult<Prisma.$BasePayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Bases.
     * @param {BaseCreateManyArgs} args - Arguments to create many Bases.
     * @example
     * // Create many Bases
     * const base = await prisma.base.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BaseCreateManyArgs>(args?: SelectSubset<T, BaseCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Bases and returns the data saved in the database.
     * @param {BaseCreateManyAndReturnArgs} args - Arguments to create many Bases.
     * @example
     * // Create many Bases
     * const base = await prisma.base.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Bases and only return the `slug`
     * const baseWithSlugOnly = await prisma.base.createManyAndReturn({ 
     *   select: { slug: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends BaseCreateManyAndReturnArgs>(args?: SelectSubset<T, BaseCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BasePayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Base.
     * @param {BaseDeleteArgs} args - Arguments to delete one Base.
     * @example
     * // Delete one Base
     * const Base = await prisma.base.delete({
     *   where: {
     *     // ... filter to delete one Base
     *   }
     * })
     * 
     */
    delete<T extends BaseDeleteArgs>(args: SelectSubset<T, BaseDeleteArgs<ExtArgs>>): Prisma__BaseClient<$Result.GetResult<Prisma.$BasePayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Base.
     * @param {BaseUpdateArgs} args - Arguments to update one Base.
     * @example
     * // Update one Base
     * const base = await prisma.base.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BaseUpdateArgs>(args: SelectSubset<T, BaseUpdateArgs<ExtArgs>>): Prisma__BaseClient<$Result.GetResult<Prisma.$BasePayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Bases.
     * @param {BaseDeleteManyArgs} args - Arguments to filter Bases to delete.
     * @example
     * // Delete a few Bases
     * const { count } = await prisma.base.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BaseDeleteManyArgs>(args?: SelectSubset<T, BaseDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Bases.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BaseUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Bases
     * const base = await prisma.base.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BaseUpdateManyArgs>(args: SelectSubset<T, BaseUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Base.
     * @param {BaseUpsertArgs} args - Arguments to update or create a Base.
     * @example
     * // Update or create a Base
     * const base = await prisma.base.upsert({
     *   create: {
     *     // ... data to create a Base
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Base we want to update
     *   }
     * })
     */
    upsert<T extends BaseUpsertArgs>(args: SelectSubset<T, BaseUpsertArgs<ExtArgs>>): Prisma__BaseClient<$Result.GetResult<Prisma.$BasePayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Bases.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BaseCountArgs} args - Arguments to filter Bases to count.
     * @example
     * // Count the number of Bases
     * const count = await prisma.base.count({
     *   where: {
     *     // ... the filter for the Bases we want to count
     *   }
     * })
    **/
    count<T extends BaseCountArgs>(
      args?: Subset<T, BaseCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BaseCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Base.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BaseAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends BaseAggregateArgs>(args: Subset<T, BaseAggregateArgs>): Prisma.PrismaPromise<GetBaseAggregateType<T>>

    /**
     * Group by Base.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BaseGroupByArgs} args - Group by arguments.
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
      T extends BaseGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BaseGroupByArgs['orderBy'] }
        : { orderBy?: BaseGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, BaseGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBaseGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Base model
   */
  readonly fields: BaseFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Base.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BaseClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    names<T extends Base$namesArgs<ExtArgs> = {}>(args?: Subset<T, Base$namesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NamesPayload<ExtArgs>, T, "findMany"> | Null>
    urls<T extends Base$urlsArgs<ExtArgs> = {}>(args?: Subset<T, Base$urlsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UrlsPayload<ExtArgs>, T, "findMany"> | Null>
    partneredTo<T extends Base$partneredToArgs<ExtArgs> = {}>(args?: Subset<T, Base$partneredToArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BasePayload<ExtArgs>, T, "findMany"> | Null>
    partneredBy<T extends Base$partneredByArgs<ExtArgs> = {}>(args?: Subset<T, Base$partneredByArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BasePayload<ExtArgs>, T, "findMany"> | Null>
    siblingsTo<T extends Base$siblingsToArgs<ExtArgs> = {}>(args?: Subset<T, Base$siblingsToArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BasePayload<ExtArgs>, T, "findMany"> | Null>
    siblingsBy<T extends Base$siblingsByArgs<ExtArgs> = {}>(args?: Subset<T, Base$siblingsByArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BasePayload<ExtArgs>, T, "findMany"> | Null>
    parents<T extends Base$parentsArgs<ExtArgs> = {}>(args?: Subset<T, Base$parentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BasePayload<ExtArgs>, T, "findMany"> | Null>
    children<T extends Base$childrenArgs<ExtArgs> = {}>(args?: Subset<T, Base$childrenArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BasePayload<ExtArgs>, T, "findMany"> | Null>
    other_relations<T extends Base$other_relationsArgs<ExtArgs> = {}>(args?: Subset<T, Base$other_relationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RelationsPayload<ExtArgs>, T, "findMany"> | Null>
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
   * Fields of the Base model
   */ 
  interface BaseFieldRefs {
    readonly slug: FieldRef<"Base", 'String'>
    readonly name: FieldRef<"Base", 'String'>
    readonly description: FieldRef<"Base", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Base findUnique
   */
  export type BaseFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Base
     */
    select?: BaseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BaseInclude<ExtArgs> | null
    /**
     * Filter, which Base to fetch.
     */
    where: BaseWhereUniqueInput
  }

  /**
   * Base findUniqueOrThrow
   */
  export type BaseFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Base
     */
    select?: BaseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BaseInclude<ExtArgs> | null
    /**
     * Filter, which Base to fetch.
     */
    where: BaseWhereUniqueInput
  }

  /**
   * Base findFirst
   */
  export type BaseFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Base
     */
    select?: BaseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BaseInclude<ExtArgs> | null
    /**
     * Filter, which Base to fetch.
     */
    where?: BaseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bases to fetch.
     */
    orderBy?: BaseOrderByWithRelationInput | BaseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Bases.
     */
    cursor?: BaseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Bases from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Bases.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Bases.
     */
    distinct?: BaseScalarFieldEnum | BaseScalarFieldEnum[]
  }

  /**
   * Base findFirstOrThrow
   */
  export type BaseFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Base
     */
    select?: BaseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BaseInclude<ExtArgs> | null
    /**
     * Filter, which Base to fetch.
     */
    where?: BaseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bases to fetch.
     */
    orderBy?: BaseOrderByWithRelationInput | BaseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Bases.
     */
    cursor?: BaseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Bases from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Bases.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Bases.
     */
    distinct?: BaseScalarFieldEnum | BaseScalarFieldEnum[]
  }

  /**
   * Base findMany
   */
  export type BaseFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Base
     */
    select?: BaseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BaseInclude<ExtArgs> | null
    /**
     * Filter, which Bases to fetch.
     */
    where?: BaseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bases to fetch.
     */
    orderBy?: BaseOrderByWithRelationInput | BaseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Bases.
     */
    cursor?: BaseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Bases from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Bases.
     */
    skip?: number
    distinct?: BaseScalarFieldEnum | BaseScalarFieldEnum[]
  }

  /**
   * Base create
   */
  export type BaseCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Base
     */
    select?: BaseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BaseInclude<ExtArgs> | null
    /**
     * The data needed to create a Base.
     */
    data: XOR<BaseCreateInput, BaseUncheckedCreateInput>
  }

  /**
   * Base createMany
   */
  export type BaseCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Bases.
     */
    data: BaseCreateManyInput | BaseCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Base createManyAndReturn
   */
  export type BaseCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Base
     */
    select?: BaseSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Bases.
     */
    data: BaseCreateManyInput | BaseCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Base update
   */
  export type BaseUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Base
     */
    select?: BaseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BaseInclude<ExtArgs> | null
    /**
     * The data needed to update a Base.
     */
    data: XOR<BaseUpdateInput, BaseUncheckedUpdateInput>
    /**
     * Choose, which Base to update.
     */
    where: BaseWhereUniqueInput
  }

  /**
   * Base updateMany
   */
  export type BaseUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Bases.
     */
    data: XOR<BaseUpdateManyMutationInput, BaseUncheckedUpdateManyInput>
    /**
     * Filter which Bases to update
     */
    where?: BaseWhereInput
  }

  /**
   * Base upsert
   */
  export type BaseUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Base
     */
    select?: BaseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BaseInclude<ExtArgs> | null
    /**
     * The filter to search for the Base to update in case it exists.
     */
    where: BaseWhereUniqueInput
    /**
     * In case the Base found by the `where` argument doesn't exist, create a new Base with this data.
     */
    create: XOR<BaseCreateInput, BaseUncheckedCreateInput>
    /**
     * In case the Base was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BaseUpdateInput, BaseUncheckedUpdateInput>
  }

  /**
   * Base delete
   */
  export type BaseDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Base
     */
    select?: BaseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BaseInclude<ExtArgs> | null
    /**
     * Filter which Base to delete.
     */
    where: BaseWhereUniqueInput
  }

  /**
   * Base deleteMany
   */
  export type BaseDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Bases to delete
     */
    where?: BaseWhereInput
  }

  /**
   * Base.names
   */
  export type Base$namesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Names
     */
    select?: NamesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NamesInclude<ExtArgs> | null
    where?: NamesWhereInput
    orderBy?: NamesOrderByWithRelationInput | NamesOrderByWithRelationInput[]
    cursor?: NamesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: NamesScalarFieldEnum | NamesScalarFieldEnum[]
  }

  /**
   * Base.urls
   */
  export type Base$urlsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Urls
     */
    select?: UrlsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UrlsInclude<ExtArgs> | null
    where?: UrlsWhereInput
    orderBy?: UrlsOrderByWithRelationInput | UrlsOrderByWithRelationInput[]
    cursor?: UrlsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UrlsScalarFieldEnum | UrlsScalarFieldEnum[]
  }

  /**
   * Base.partneredTo
   */
  export type Base$partneredToArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Base
     */
    select?: BaseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BaseInclude<ExtArgs> | null
    where?: BaseWhereInput
    orderBy?: BaseOrderByWithRelationInput | BaseOrderByWithRelationInput[]
    cursor?: BaseWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BaseScalarFieldEnum | BaseScalarFieldEnum[]
  }

  /**
   * Base.partneredBy
   */
  export type Base$partneredByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Base
     */
    select?: BaseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BaseInclude<ExtArgs> | null
    where?: BaseWhereInput
    orderBy?: BaseOrderByWithRelationInput | BaseOrderByWithRelationInput[]
    cursor?: BaseWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BaseScalarFieldEnum | BaseScalarFieldEnum[]
  }

  /**
   * Base.siblingsTo
   */
  export type Base$siblingsToArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Base
     */
    select?: BaseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BaseInclude<ExtArgs> | null
    where?: BaseWhereInput
    orderBy?: BaseOrderByWithRelationInput | BaseOrderByWithRelationInput[]
    cursor?: BaseWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BaseScalarFieldEnum | BaseScalarFieldEnum[]
  }

  /**
   * Base.siblingsBy
   */
  export type Base$siblingsByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Base
     */
    select?: BaseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BaseInclude<ExtArgs> | null
    where?: BaseWhereInput
    orderBy?: BaseOrderByWithRelationInput | BaseOrderByWithRelationInput[]
    cursor?: BaseWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BaseScalarFieldEnum | BaseScalarFieldEnum[]
  }

  /**
   * Base.parents
   */
  export type Base$parentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Base
     */
    select?: BaseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BaseInclude<ExtArgs> | null
    where?: BaseWhereInput
    orderBy?: BaseOrderByWithRelationInput | BaseOrderByWithRelationInput[]
    cursor?: BaseWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BaseScalarFieldEnum | BaseScalarFieldEnum[]
  }

  /**
   * Base.children
   */
  export type Base$childrenArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Base
     */
    select?: BaseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BaseInclude<ExtArgs> | null
    where?: BaseWhereInput
    orderBy?: BaseOrderByWithRelationInput | BaseOrderByWithRelationInput[]
    cursor?: BaseWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BaseScalarFieldEnum | BaseScalarFieldEnum[]
  }

  /**
   * Base.other_relations
   */
  export type Base$other_relationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Relations
     */
    select?: RelationsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RelationsInclude<ExtArgs> | null
    where?: RelationsWhereInput
    orderBy?: RelationsOrderByWithRelationInput | RelationsOrderByWithRelationInput[]
    cursor?: RelationsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RelationsScalarFieldEnum | RelationsScalarFieldEnum[]
  }

  /**
   * Base without action
   */
  export type BaseDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Base
     */
    select?: BaseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BaseInclude<ExtArgs> | null
  }


  /**
   * Model Relations
   */

  export type AggregateRelations = {
    _count: RelationsCountAggregateOutputType | null
    _min: RelationsMinAggregateOutputType | null
    _max: RelationsMaxAggregateOutputType | null
  }

  export type RelationsMinAggregateOutputType = {
    slug: string | null
    relation_type: string | null
  }

  export type RelationsMaxAggregateOutputType = {
    slug: string | null
    relation_type: string | null
  }

  export type RelationsCountAggregateOutputType = {
    slug: number
    person: number
    relation_type: number
    _all: number
  }


  export type RelationsMinAggregateInputType = {
    slug?: true
    relation_type?: true
  }

  export type RelationsMaxAggregateInputType = {
    slug?: true
    relation_type?: true
  }

  export type RelationsCountAggregateInputType = {
    slug?: true
    person?: true
    relation_type?: true
    _all?: true
  }

  export type RelationsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Relations to aggregate.
     */
    where?: RelationsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Relations to fetch.
     */
    orderBy?: RelationsOrderByWithRelationInput | RelationsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RelationsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Relations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Relations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Relations
    **/
    _count?: true | RelationsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RelationsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RelationsMaxAggregateInputType
  }

  export type GetRelationsAggregateType<T extends RelationsAggregateArgs> = {
        [P in keyof T & keyof AggregateRelations]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRelations[P]>
      : GetScalarType<T[P], AggregateRelations[P]>
  }




  export type RelationsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RelationsWhereInput
    orderBy?: RelationsOrderByWithAggregationInput | RelationsOrderByWithAggregationInput[]
    by: RelationsScalarFieldEnum[] | RelationsScalarFieldEnum
    having?: RelationsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RelationsCountAggregateInputType | true
    _min?: RelationsMinAggregateInputType
    _max?: RelationsMaxAggregateInputType
  }

  export type RelationsGroupByOutputType = {
    slug: string
    person: string[]
    relation_type: string
    _count: RelationsCountAggregateOutputType | null
    _min: RelationsMinAggregateOutputType | null
    _max: RelationsMaxAggregateOutputType | null
  }

  type GetRelationsGroupByPayload<T extends RelationsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RelationsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RelationsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RelationsGroupByOutputType[P]>
            : GetScalarType<T[P], RelationsGroupByOutputType[P]>
        }
      >
    >


  export type RelationsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    slug?: boolean
    person?: boolean
    relation_type?: boolean
    relation?: boolean | BaseDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["relations"]>

  export type RelationsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    slug?: boolean
    person?: boolean
    relation_type?: boolean
    relation?: boolean | BaseDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["relations"]>

  export type RelationsSelectScalar = {
    slug?: boolean
    person?: boolean
    relation_type?: boolean
  }

  export type RelationsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    relation?: boolean | BaseDefaultArgs<ExtArgs>
  }
  export type RelationsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    relation?: boolean | BaseDefaultArgs<ExtArgs>
  }

  export type $RelationsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Relations"
    objects: {
      relation: Prisma.$BasePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      slug: string
      person: string[]
      relation_type: string
    }, ExtArgs["result"]["relations"]>
    composites: {}
  }

  type RelationsGetPayload<S extends boolean | null | undefined | RelationsDefaultArgs> = $Result.GetResult<Prisma.$RelationsPayload, S>

  type RelationsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<RelationsFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: RelationsCountAggregateInputType | true
    }

  export interface RelationsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Relations'], meta: { name: 'Relations' } }
    /**
     * Find zero or one Relations that matches the filter.
     * @param {RelationsFindUniqueArgs} args - Arguments to find a Relations
     * @example
     * // Get one Relations
     * const relations = await prisma.relations.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RelationsFindUniqueArgs>(args: SelectSubset<T, RelationsFindUniqueArgs<ExtArgs>>): Prisma__RelationsClient<$Result.GetResult<Prisma.$RelationsPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Relations that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {RelationsFindUniqueOrThrowArgs} args - Arguments to find a Relations
     * @example
     * // Get one Relations
     * const relations = await prisma.relations.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RelationsFindUniqueOrThrowArgs>(args: SelectSubset<T, RelationsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RelationsClient<$Result.GetResult<Prisma.$RelationsPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Relations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RelationsFindFirstArgs} args - Arguments to find a Relations
     * @example
     * // Get one Relations
     * const relations = await prisma.relations.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RelationsFindFirstArgs>(args?: SelectSubset<T, RelationsFindFirstArgs<ExtArgs>>): Prisma__RelationsClient<$Result.GetResult<Prisma.$RelationsPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Relations that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RelationsFindFirstOrThrowArgs} args - Arguments to find a Relations
     * @example
     * // Get one Relations
     * const relations = await prisma.relations.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RelationsFindFirstOrThrowArgs>(args?: SelectSubset<T, RelationsFindFirstOrThrowArgs<ExtArgs>>): Prisma__RelationsClient<$Result.GetResult<Prisma.$RelationsPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Relations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RelationsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Relations
     * const relations = await prisma.relations.findMany()
     * 
     * // Get first 10 Relations
     * const relations = await prisma.relations.findMany({ take: 10 })
     * 
     * // Only select the `slug`
     * const relationsWithSlugOnly = await prisma.relations.findMany({ select: { slug: true } })
     * 
     */
    findMany<T extends RelationsFindManyArgs>(args?: SelectSubset<T, RelationsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RelationsPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Relations.
     * @param {RelationsCreateArgs} args - Arguments to create a Relations.
     * @example
     * // Create one Relations
     * const Relations = await prisma.relations.create({
     *   data: {
     *     // ... data to create a Relations
     *   }
     * })
     * 
     */
    create<T extends RelationsCreateArgs>(args: SelectSubset<T, RelationsCreateArgs<ExtArgs>>): Prisma__RelationsClient<$Result.GetResult<Prisma.$RelationsPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Relations.
     * @param {RelationsCreateManyArgs} args - Arguments to create many Relations.
     * @example
     * // Create many Relations
     * const relations = await prisma.relations.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RelationsCreateManyArgs>(args?: SelectSubset<T, RelationsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Relations and returns the data saved in the database.
     * @param {RelationsCreateManyAndReturnArgs} args - Arguments to create many Relations.
     * @example
     * // Create many Relations
     * const relations = await prisma.relations.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Relations and only return the `slug`
     * const relationsWithSlugOnly = await prisma.relations.createManyAndReturn({ 
     *   select: { slug: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RelationsCreateManyAndReturnArgs>(args?: SelectSubset<T, RelationsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RelationsPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Relations.
     * @param {RelationsDeleteArgs} args - Arguments to delete one Relations.
     * @example
     * // Delete one Relations
     * const Relations = await prisma.relations.delete({
     *   where: {
     *     // ... filter to delete one Relations
     *   }
     * })
     * 
     */
    delete<T extends RelationsDeleteArgs>(args: SelectSubset<T, RelationsDeleteArgs<ExtArgs>>): Prisma__RelationsClient<$Result.GetResult<Prisma.$RelationsPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Relations.
     * @param {RelationsUpdateArgs} args - Arguments to update one Relations.
     * @example
     * // Update one Relations
     * const relations = await prisma.relations.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RelationsUpdateArgs>(args: SelectSubset<T, RelationsUpdateArgs<ExtArgs>>): Prisma__RelationsClient<$Result.GetResult<Prisma.$RelationsPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Relations.
     * @param {RelationsDeleteManyArgs} args - Arguments to filter Relations to delete.
     * @example
     * // Delete a few Relations
     * const { count } = await prisma.relations.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RelationsDeleteManyArgs>(args?: SelectSubset<T, RelationsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Relations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RelationsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Relations
     * const relations = await prisma.relations.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RelationsUpdateManyArgs>(args: SelectSubset<T, RelationsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Relations.
     * @param {RelationsUpsertArgs} args - Arguments to update or create a Relations.
     * @example
     * // Update or create a Relations
     * const relations = await prisma.relations.upsert({
     *   create: {
     *     // ... data to create a Relations
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Relations we want to update
     *   }
     * })
     */
    upsert<T extends RelationsUpsertArgs>(args: SelectSubset<T, RelationsUpsertArgs<ExtArgs>>): Prisma__RelationsClient<$Result.GetResult<Prisma.$RelationsPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Relations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RelationsCountArgs} args - Arguments to filter Relations to count.
     * @example
     * // Count the number of Relations
     * const count = await prisma.relations.count({
     *   where: {
     *     // ... the filter for the Relations we want to count
     *   }
     * })
    **/
    count<T extends RelationsCountArgs>(
      args?: Subset<T, RelationsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RelationsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Relations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RelationsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends RelationsAggregateArgs>(args: Subset<T, RelationsAggregateArgs>): Prisma.PrismaPromise<GetRelationsAggregateType<T>>

    /**
     * Group by Relations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RelationsGroupByArgs} args - Group by arguments.
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
      T extends RelationsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RelationsGroupByArgs['orderBy'] }
        : { orderBy?: RelationsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, RelationsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRelationsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Relations model
   */
  readonly fields: RelationsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Relations.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RelationsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    relation<T extends BaseDefaultArgs<ExtArgs> = {}>(args?: Subset<T, BaseDefaultArgs<ExtArgs>>): Prisma__BaseClient<$Result.GetResult<Prisma.$BasePayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
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
   * Fields of the Relations model
   */ 
  interface RelationsFieldRefs {
    readonly slug: FieldRef<"Relations", 'String'>
    readonly person: FieldRef<"Relations", 'String[]'>
    readonly relation_type: FieldRef<"Relations", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Relations findUnique
   */
  export type RelationsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Relations
     */
    select?: RelationsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RelationsInclude<ExtArgs> | null
    /**
     * Filter, which Relations to fetch.
     */
    where: RelationsWhereUniqueInput
  }

  /**
   * Relations findUniqueOrThrow
   */
  export type RelationsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Relations
     */
    select?: RelationsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RelationsInclude<ExtArgs> | null
    /**
     * Filter, which Relations to fetch.
     */
    where: RelationsWhereUniqueInput
  }

  /**
   * Relations findFirst
   */
  export type RelationsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Relations
     */
    select?: RelationsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RelationsInclude<ExtArgs> | null
    /**
     * Filter, which Relations to fetch.
     */
    where?: RelationsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Relations to fetch.
     */
    orderBy?: RelationsOrderByWithRelationInput | RelationsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Relations.
     */
    cursor?: RelationsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Relations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Relations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Relations.
     */
    distinct?: RelationsScalarFieldEnum | RelationsScalarFieldEnum[]
  }

  /**
   * Relations findFirstOrThrow
   */
  export type RelationsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Relations
     */
    select?: RelationsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RelationsInclude<ExtArgs> | null
    /**
     * Filter, which Relations to fetch.
     */
    where?: RelationsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Relations to fetch.
     */
    orderBy?: RelationsOrderByWithRelationInput | RelationsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Relations.
     */
    cursor?: RelationsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Relations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Relations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Relations.
     */
    distinct?: RelationsScalarFieldEnum | RelationsScalarFieldEnum[]
  }

  /**
   * Relations findMany
   */
  export type RelationsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Relations
     */
    select?: RelationsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RelationsInclude<ExtArgs> | null
    /**
     * Filter, which Relations to fetch.
     */
    where?: RelationsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Relations to fetch.
     */
    orderBy?: RelationsOrderByWithRelationInput | RelationsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Relations.
     */
    cursor?: RelationsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Relations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Relations.
     */
    skip?: number
    distinct?: RelationsScalarFieldEnum | RelationsScalarFieldEnum[]
  }

  /**
   * Relations create
   */
  export type RelationsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Relations
     */
    select?: RelationsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RelationsInclude<ExtArgs> | null
    /**
     * The data needed to create a Relations.
     */
    data: XOR<RelationsCreateInput, RelationsUncheckedCreateInput>
  }

  /**
   * Relations createMany
   */
  export type RelationsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Relations.
     */
    data: RelationsCreateManyInput | RelationsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Relations createManyAndReturn
   */
  export type RelationsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Relations
     */
    select?: RelationsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Relations.
     */
    data: RelationsCreateManyInput | RelationsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RelationsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Relations update
   */
  export type RelationsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Relations
     */
    select?: RelationsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RelationsInclude<ExtArgs> | null
    /**
     * The data needed to update a Relations.
     */
    data: XOR<RelationsUpdateInput, RelationsUncheckedUpdateInput>
    /**
     * Choose, which Relations to update.
     */
    where: RelationsWhereUniqueInput
  }

  /**
   * Relations updateMany
   */
  export type RelationsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Relations.
     */
    data: XOR<RelationsUpdateManyMutationInput, RelationsUncheckedUpdateManyInput>
    /**
     * Filter which Relations to update
     */
    where?: RelationsWhereInput
  }

  /**
   * Relations upsert
   */
  export type RelationsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Relations
     */
    select?: RelationsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RelationsInclude<ExtArgs> | null
    /**
     * The filter to search for the Relations to update in case it exists.
     */
    where: RelationsWhereUniqueInput
    /**
     * In case the Relations found by the `where` argument doesn't exist, create a new Relations with this data.
     */
    create: XOR<RelationsCreateInput, RelationsUncheckedCreateInput>
    /**
     * In case the Relations was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RelationsUpdateInput, RelationsUncheckedUpdateInput>
  }

  /**
   * Relations delete
   */
  export type RelationsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Relations
     */
    select?: RelationsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RelationsInclude<ExtArgs> | null
    /**
     * Filter which Relations to delete.
     */
    where: RelationsWhereUniqueInput
  }

  /**
   * Relations deleteMany
   */
  export type RelationsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Relations to delete
     */
    where?: RelationsWhereInput
  }

  /**
   * Relations without action
   */
  export type RelationsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Relations
     */
    select?: RelationsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RelationsInclude<ExtArgs> | null
  }


  /**
   * Model Names
   */

  export type AggregateNames = {
    _count: NamesCountAggregateOutputType | null
    _avg: NamesAvgAggregateOutputType | null
    _sum: NamesSumAggregateOutputType | null
    _min: NamesMinAggregateOutputType | null
    _max: NamesMaxAggregateOutputType | null
  }

  export type NamesAvgAggregateOutputType = {
    id: number | null
  }

  export type NamesSumAggregateOutputType = {
    id: number | null
  }

  export type NamesMinAggregateOutputType = {
    id: number | null
    slug: string | null
    name: string | null
    lang: string | null
    note: string | null
  }

  export type NamesMaxAggregateOutputType = {
    id: number | null
    slug: string | null
    name: string | null
    lang: string | null
    note: string | null
  }

  export type NamesCountAggregateOutputType = {
    id: number
    slug: number
    name: number
    lang: number
    note: number
    _all: number
  }


  export type NamesAvgAggregateInputType = {
    id?: true
  }

  export type NamesSumAggregateInputType = {
    id?: true
  }

  export type NamesMinAggregateInputType = {
    id?: true
    slug?: true
    name?: true
    lang?: true
    note?: true
  }

  export type NamesMaxAggregateInputType = {
    id?: true
    slug?: true
    name?: true
    lang?: true
    note?: true
  }

  export type NamesCountAggregateInputType = {
    id?: true
    slug?: true
    name?: true
    lang?: true
    note?: true
    _all?: true
  }

  export type NamesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Names to aggregate.
     */
    where?: NamesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Names to fetch.
     */
    orderBy?: NamesOrderByWithRelationInput | NamesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: NamesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Names from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Names.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Names
    **/
    _count?: true | NamesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: NamesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: NamesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: NamesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: NamesMaxAggregateInputType
  }

  export type GetNamesAggregateType<T extends NamesAggregateArgs> = {
        [P in keyof T & keyof AggregateNames]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateNames[P]>
      : GetScalarType<T[P], AggregateNames[P]>
  }




  export type NamesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NamesWhereInput
    orderBy?: NamesOrderByWithAggregationInput | NamesOrderByWithAggregationInput[]
    by: NamesScalarFieldEnum[] | NamesScalarFieldEnum
    having?: NamesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: NamesCountAggregateInputType | true
    _avg?: NamesAvgAggregateInputType
    _sum?: NamesSumAggregateInputType
    _min?: NamesMinAggregateInputType
    _max?: NamesMaxAggregateInputType
  }

  export type NamesGroupByOutputType = {
    id: number
    slug: string
    name: string
    lang: string | null
    note: string | null
    _count: NamesCountAggregateOutputType | null
    _avg: NamesAvgAggregateOutputType | null
    _sum: NamesSumAggregateOutputType | null
    _min: NamesMinAggregateOutputType | null
    _max: NamesMaxAggregateOutputType | null
  }

  type GetNamesGroupByPayload<T extends NamesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<NamesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof NamesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], NamesGroupByOutputType[P]>
            : GetScalarType<T[P], NamesGroupByOutputType[P]>
        }
      >
    >


  export type NamesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    slug?: boolean
    name?: boolean
    lang?: boolean
    note?: boolean
    relation?: boolean | BaseDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["names"]>

  export type NamesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    slug?: boolean
    name?: boolean
    lang?: boolean
    note?: boolean
    relation?: boolean | BaseDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["names"]>

  export type NamesSelectScalar = {
    id?: boolean
    slug?: boolean
    name?: boolean
    lang?: boolean
    note?: boolean
  }

  export type NamesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    relation?: boolean | BaseDefaultArgs<ExtArgs>
  }
  export type NamesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    relation?: boolean | BaseDefaultArgs<ExtArgs>
  }

  export type $NamesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Names"
    objects: {
      relation: Prisma.$BasePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      slug: string
      name: string
      lang: string | null
      note: string | null
    }, ExtArgs["result"]["names"]>
    composites: {}
  }

  type NamesGetPayload<S extends boolean | null | undefined | NamesDefaultArgs> = $Result.GetResult<Prisma.$NamesPayload, S>

  type NamesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<NamesFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: NamesCountAggregateInputType | true
    }

  export interface NamesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Names'], meta: { name: 'Names' } }
    /**
     * Find zero or one Names that matches the filter.
     * @param {NamesFindUniqueArgs} args - Arguments to find a Names
     * @example
     * // Get one Names
     * const names = await prisma.names.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends NamesFindUniqueArgs>(args: SelectSubset<T, NamesFindUniqueArgs<ExtArgs>>): Prisma__NamesClient<$Result.GetResult<Prisma.$NamesPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Names that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {NamesFindUniqueOrThrowArgs} args - Arguments to find a Names
     * @example
     * // Get one Names
     * const names = await prisma.names.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends NamesFindUniqueOrThrowArgs>(args: SelectSubset<T, NamesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__NamesClient<$Result.GetResult<Prisma.$NamesPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Names that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NamesFindFirstArgs} args - Arguments to find a Names
     * @example
     * // Get one Names
     * const names = await prisma.names.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends NamesFindFirstArgs>(args?: SelectSubset<T, NamesFindFirstArgs<ExtArgs>>): Prisma__NamesClient<$Result.GetResult<Prisma.$NamesPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Names that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NamesFindFirstOrThrowArgs} args - Arguments to find a Names
     * @example
     * // Get one Names
     * const names = await prisma.names.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends NamesFindFirstOrThrowArgs>(args?: SelectSubset<T, NamesFindFirstOrThrowArgs<ExtArgs>>): Prisma__NamesClient<$Result.GetResult<Prisma.$NamesPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Names that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NamesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Names
     * const names = await prisma.names.findMany()
     * 
     * // Get first 10 Names
     * const names = await prisma.names.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const namesWithIdOnly = await prisma.names.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends NamesFindManyArgs>(args?: SelectSubset<T, NamesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NamesPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Names.
     * @param {NamesCreateArgs} args - Arguments to create a Names.
     * @example
     * // Create one Names
     * const Names = await prisma.names.create({
     *   data: {
     *     // ... data to create a Names
     *   }
     * })
     * 
     */
    create<T extends NamesCreateArgs>(args: SelectSubset<T, NamesCreateArgs<ExtArgs>>): Prisma__NamesClient<$Result.GetResult<Prisma.$NamesPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Names.
     * @param {NamesCreateManyArgs} args - Arguments to create many Names.
     * @example
     * // Create many Names
     * const names = await prisma.names.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends NamesCreateManyArgs>(args?: SelectSubset<T, NamesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Names and returns the data saved in the database.
     * @param {NamesCreateManyAndReturnArgs} args - Arguments to create many Names.
     * @example
     * // Create many Names
     * const names = await prisma.names.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Names and only return the `id`
     * const namesWithIdOnly = await prisma.names.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends NamesCreateManyAndReturnArgs>(args?: SelectSubset<T, NamesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NamesPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Names.
     * @param {NamesDeleteArgs} args - Arguments to delete one Names.
     * @example
     * // Delete one Names
     * const Names = await prisma.names.delete({
     *   where: {
     *     // ... filter to delete one Names
     *   }
     * })
     * 
     */
    delete<T extends NamesDeleteArgs>(args: SelectSubset<T, NamesDeleteArgs<ExtArgs>>): Prisma__NamesClient<$Result.GetResult<Prisma.$NamesPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Names.
     * @param {NamesUpdateArgs} args - Arguments to update one Names.
     * @example
     * // Update one Names
     * const names = await prisma.names.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends NamesUpdateArgs>(args: SelectSubset<T, NamesUpdateArgs<ExtArgs>>): Prisma__NamesClient<$Result.GetResult<Prisma.$NamesPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Names.
     * @param {NamesDeleteManyArgs} args - Arguments to filter Names to delete.
     * @example
     * // Delete a few Names
     * const { count } = await prisma.names.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends NamesDeleteManyArgs>(args?: SelectSubset<T, NamesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Names.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NamesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Names
     * const names = await prisma.names.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends NamesUpdateManyArgs>(args: SelectSubset<T, NamesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Names.
     * @param {NamesUpsertArgs} args - Arguments to update or create a Names.
     * @example
     * // Update or create a Names
     * const names = await prisma.names.upsert({
     *   create: {
     *     // ... data to create a Names
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Names we want to update
     *   }
     * })
     */
    upsert<T extends NamesUpsertArgs>(args: SelectSubset<T, NamesUpsertArgs<ExtArgs>>): Prisma__NamesClient<$Result.GetResult<Prisma.$NamesPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Names.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NamesCountArgs} args - Arguments to filter Names to count.
     * @example
     * // Count the number of Names
     * const count = await prisma.names.count({
     *   where: {
     *     // ... the filter for the Names we want to count
     *   }
     * })
    **/
    count<T extends NamesCountArgs>(
      args?: Subset<T, NamesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], NamesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Names.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NamesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends NamesAggregateArgs>(args: Subset<T, NamesAggregateArgs>): Prisma.PrismaPromise<GetNamesAggregateType<T>>

    /**
     * Group by Names.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NamesGroupByArgs} args - Group by arguments.
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
      T extends NamesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: NamesGroupByArgs['orderBy'] }
        : { orderBy?: NamesGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, NamesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetNamesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Names model
   */
  readonly fields: NamesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Names.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__NamesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    relation<T extends BaseDefaultArgs<ExtArgs> = {}>(args?: Subset<T, BaseDefaultArgs<ExtArgs>>): Prisma__BaseClient<$Result.GetResult<Prisma.$BasePayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
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
   * Fields of the Names model
   */ 
  interface NamesFieldRefs {
    readonly id: FieldRef<"Names", 'Int'>
    readonly slug: FieldRef<"Names", 'String'>
    readonly name: FieldRef<"Names", 'String'>
    readonly lang: FieldRef<"Names", 'String'>
    readonly note: FieldRef<"Names", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Names findUnique
   */
  export type NamesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Names
     */
    select?: NamesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NamesInclude<ExtArgs> | null
    /**
     * Filter, which Names to fetch.
     */
    where: NamesWhereUniqueInput
  }

  /**
   * Names findUniqueOrThrow
   */
  export type NamesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Names
     */
    select?: NamesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NamesInclude<ExtArgs> | null
    /**
     * Filter, which Names to fetch.
     */
    where: NamesWhereUniqueInput
  }

  /**
   * Names findFirst
   */
  export type NamesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Names
     */
    select?: NamesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NamesInclude<ExtArgs> | null
    /**
     * Filter, which Names to fetch.
     */
    where?: NamesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Names to fetch.
     */
    orderBy?: NamesOrderByWithRelationInput | NamesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Names.
     */
    cursor?: NamesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Names from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Names.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Names.
     */
    distinct?: NamesScalarFieldEnum | NamesScalarFieldEnum[]
  }

  /**
   * Names findFirstOrThrow
   */
  export type NamesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Names
     */
    select?: NamesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NamesInclude<ExtArgs> | null
    /**
     * Filter, which Names to fetch.
     */
    where?: NamesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Names to fetch.
     */
    orderBy?: NamesOrderByWithRelationInput | NamesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Names.
     */
    cursor?: NamesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Names from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Names.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Names.
     */
    distinct?: NamesScalarFieldEnum | NamesScalarFieldEnum[]
  }

  /**
   * Names findMany
   */
  export type NamesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Names
     */
    select?: NamesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NamesInclude<ExtArgs> | null
    /**
     * Filter, which Names to fetch.
     */
    where?: NamesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Names to fetch.
     */
    orderBy?: NamesOrderByWithRelationInput | NamesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Names.
     */
    cursor?: NamesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Names from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Names.
     */
    skip?: number
    distinct?: NamesScalarFieldEnum | NamesScalarFieldEnum[]
  }

  /**
   * Names create
   */
  export type NamesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Names
     */
    select?: NamesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NamesInclude<ExtArgs> | null
    /**
     * The data needed to create a Names.
     */
    data: XOR<NamesCreateInput, NamesUncheckedCreateInput>
  }

  /**
   * Names createMany
   */
  export type NamesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Names.
     */
    data: NamesCreateManyInput | NamesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Names createManyAndReturn
   */
  export type NamesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Names
     */
    select?: NamesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Names.
     */
    data: NamesCreateManyInput | NamesCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NamesIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Names update
   */
  export type NamesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Names
     */
    select?: NamesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NamesInclude<ExtArgs> | null
    /**
     * The data needed to update a Names.
     */
    data: XOR<NamesUpdateInput, NamesUncheckedUpdateInput>
    /**
     * Choose, which Names to update.
     */
    where: NamesWhereUniqueInput
  }

  /**
   * Names updateMany
   */
  export type NamesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Names.
     */
    data: XOR<NamesUpdateManyMutationInput, NamesUncheckedUpdateManyInput>
    /**
     * Filter which Names to update
     */
    where?: NamesWhereInput
  }

  /**
   * Names upsert
   */
  export type NamesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Names
     */
    select?: NamesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NamesInclude<ExtArgs> | null
    /**
     * The filter to search for the Names to update in case it exists.
     */
    where: NamesWhereUniqueInput
    /**
     * In case the Names found by the `where` argument doesn't exist, create a new Names with this data.
     */
    create: XOR<NamesCreateInput, NamesUncheckedCreateInput>
    /**
     * In case the Names was found with the provided `where` argument, update it with this data.
     */
    update: XOR<NamesUpdateInput, NamesUncheckedUpdateInput>
  }

  /**
   * Names delete
   */
  export type NamesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Names
     */
    select?: NamesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NamesInclude<ExtArgs> | null
    /**
     * Filter which Names to delete.
     */
    where: NamesWhereUniqueInput
  }

  /**
   * Names deleteMany
   */
  export type NamesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Names to delete
     */
    where?: NamesWhereInput
  }

  /**
   * Names without action
   */
  export type NamesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Names
     */
    select?: NamesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NamesInclude<ExtArgs> | null
  }


  /**
   * Model Urls
   */

  export type AggregateUrls = {
    _count: UrlsCountAggregateOutputType | null
    _avg: UrlsAvgAggregateOutputType | null
    _sum: UrlsSumAggregateOutputType | null
    _min: UrlsMinAggregateOutputType | null
    _max: UrlsMaxAggregateOutputType | null
  }

  export type UrlsAvgAggregateOutputType = {
    id: number | null
  }

  export type UrlsSumAggregateOutputType = {
    id: number | null
  }

  export type UrlsMinAggregateOutputType = {
    id: number | null
    slug: string | null
    url: string | null
    title: string | null
  }

  export type UrlsMaxAggregateOutputType = {
    id: number | null
    slug: string | null
    url: string | null
    title: string | null
  }

  export type UrlsCountAggregateOutputType = {
    id: number
    slug: number
    url: number
    title: number
    _all: number
  }


  export type UrlsAvgAggregateInputType = {
    id?: true
  }

  export type UrlsSumAggregateInputType = {
    id?: true
  }

  export type UrlsMinAggregateInputType = {
    id?: true
    slug?: true
    url?: true
    title?: true
  }

  export type UrlsMaxAggregateInputType = {
    id?: true
    slug?: true
    url?: true
    title?: true
  }

  export type UrlsCountAggregateInputType = {
    id?: true
    slug?: true
    url?: true
    title?: true
    _all?: true
  }

  export type UrlsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Urls to aggregate.
     */
    where?: UrlsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Urls to fetch.
     */
    orderBy?: UrlsOrderByWithRelationInput | UrlsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UrlsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Urls from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Urls.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Urls
    **/
    _count?: true | UrlsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UrlsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UrlsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UrlsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UrlsMaxAggregateInputType
  }

  export type GetUrlsAggregateType<T extends UrlsAggregateArgs> = {
        [P in keyof T & keyof AggregateUrls]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUrls[P]>
      : GetScalarType<T[P], AggregateUrls[P]>
  }




  export type UrlsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UrlsWhereInput
    orderBy?: UrlsOrderByWithAggregationInput | UrlsOrderByWithAggregationInput[]
    by: UrlsScalarFieldEnum[] | UrlsScalarFieldEnum
    having?: UrlsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UrlsCountAggregateInputType | true
    _avg?: UrlsAvgAggregateInputType
    _sum?: UrlsSumAggregateInputType
    _min?: UrlsMinAggregateInputType
    _max?: UrlsMaxAggregateInputType
  }

  export type UrlsGroupByOutputType = {
    id: number
    slug: string
    url: string
    title: string
    _count: UrlsCountAggregateOutputType | null
    _avg: UrlsAvgAggregateOutputType | null
    _sum: UrlsSumAggregateOutputType | null
    _min: UrlsMinAggregateOutputType | null
    _max: UrlsMaxAggregateOutputType | null
  }

  type GetUrlsGroupByPayload<T extends UrlsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UrlsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UrlsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UrlsGroupByOutputType[P]>
            : GetScalarType<T[P], UrlsGroupByOutputType[P]>
        }
      >
    >


  export type UrlsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    slug?: boolean
    url?: boolean
    title?: boolean
    relation?: boolean | BaseDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["urls"]>

  export type UrlsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    slug?: boolean
    url?: boolean
    title?: boolean
    relation?: boolean | BaseDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["urls"]>

  export type UrlsSelectScalar = {
    id?: boolean
    slug?: boolean
    url?: boolean
    title?: boolean
  }

  export type UrlsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    relation?: boolean | BaseDefaultArgs<ExtArgs>
  }
  export type UrlsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    relation?: boolean | BaseDefaultArgs<ExtArgs>
  }

  export type $UrlsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Urls"
    objects: {
      relation: Prisma.$BasePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      slug: string
      url: string
      title: string
    }, ExtArgs["result"]["urls"]>
    composites: {}
  }

  type UrlsGetPayload<S extends boolean | null | undefined | UrlsDefaultArgs> = $Result.GetResult<Prisma.$UrlsPayload, S>

  type UrlsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<UrlsFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: UrlsCountAggregateInputType | true
    }

  export interface UrlsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Urls'], meta: { name: 'Urls' } }
    /**
     * Find zero or one Urls that matches the filter.
     * @param {UrlsFindUniqueArgs} args - Arguments to find a Urls
     * @example
     * // Get one Urls
     * const urls = await prisma.urls.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UrlsFindUniqueArgs>(args: SelectSubset<T, UrlsFindUniqueArgs<ExtArgs>>): Prisma__UrlsClient<$Result.GetResult<Prisma.$UrlsPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Urls that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {UrlsFindUniqueOrThrowArgs} args - Arguments to find a Urls
     * @example
     * // Get one Urls
     * const urls = await prisma.urls.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UrlsFindUniqueOrThrowArgs>(args: SelectSubset<T, UrlsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UrlsClient<$Result.GetResult<Prisma.$UrlsPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Urls that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UrlsFindFirstArgs} args - Arguments to find a Urls
     * @example
     * // Get one Urls
     * const urls = await prisma.urls.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UrlsFindFirstArgs>(args?: SelectSubset<T, UrlsFindFirstArgs<ExtArgs>>): Prisma__UrlsClient<$Result.GetResult<Prisma.$UrlsPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Urls that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UrlsFindFirstOrThrowArgs} args - Arguments to find a Urls
     * @example
     * // Get one Urls
     * const urls = await prisma.urls.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UrlsFindFirstOrThrowArgs>(args?: SelectSubset<T, UrlsFindFirstOrThrowArgs<ExtArgs>>): Prisma__UrlsClient<$Result.GetResult<Prisma.$UrlsPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Urls that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UrlsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Urls
     * const urls = await prisma.urls.findMany()
     * 
     * // Get first 10 Urls
     * const urls = await prisma.urls.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const urlsWithIdOnly = await prisma.urls.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UrlsFindManyArgs>(args?: SelectSubset<T, UrlsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UrlsPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Urls.
     * @param {UrlsCreateArgs} args - Arguments to create a Urls.
     * @example
     * // Create one Urls
     * const Urls = await prisma.urls.create({
     *   data: {
     *     // ... data to create a Urls
     *   }
     * })
     * 
     */
    create<T extends UrlsCreateArgs>(args: SelectSubset<T, UrlsCreateArgs<ExtArgs>>): Prisma__UrlsClient<$Result.GetResult<Prisma.$UrlsPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Urls.
     * @param {UrlsCreateManyArgs} args - Arguments to create many Urls.
     * @example
     * // Create many Urls
     * const urls = await prisma.urls.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UrlsCreateManyArgs>(args?: SelectSubset<T, UrlsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Urls and returns the data saved in the database.
     * @param {UrlsCreateManyAndReturnArgs} args - Arguments to create many Urls.
     * @example
     * // Create many Urls
     * const urls = await prisma.urls.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Urls and only return the `id`
     * const urlsWithIdOnly = await prisma.urls.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UrlsCreateManyAndReturnArgs>(args?: SelectSubset<T, UrlsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UrlsPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Urls.
     * @param {UrlsDeleteArgs} args - Arguments to delete one Urls.
     * @example
     * // Delete one Urls
     * const Urls = await prisma.urls.delete({
     *   where: {
     *     // ... filter to delete one Urls
     *   }
     * })
     * 
     */
    delete<T extends UrlsDeleteArgs>(args: SelectSubset<T, UrlsDeleteArgs<ExtArgs>>): Prisma__UrlsClient<$Result.GetResult<Prisma.$UrlsPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Urls.
     * @param {UrlsUpdateArgs} args - Arguments to update one Urls.
     * @example
     * // Update one Urls
     * const urls = await prisma.urls.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UrlsUpdateArgs>(args: SelectSubset<T, UrlsUpdateArgs<ExtArgs>>): Prisma__UrlsClient<$Result.GetResult<Prisma.$UrlsPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Urls.
     * @param {UrlsDeleteManyArgs} args - Arguments to filter Urls to delete.
     * @example
     * // Delete a few Urls
     * const { count } = await prisma.urls.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UrlsDeleteManyArgs>(args?: SelectSubset<T, UrlsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Urls.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UrlsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Urls
     * const urls = await prisma.urls.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UrlsUpdateManyArgs>(args: SelectSubset<T, UrlsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Urls.
     * @param {UrlsUpsertArgs} args - Arguments to update or create a Urls.
     * @example
     * // Update or create a Urls
     * const urls = await prisma.urls.upsert({
     *   create: {
     *     // ... data to create a Urls
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Urls we want to update
     *   }
     * })
     */
    upsert<T extends UrlsUpsertArgs>(args: SelectSubset<T, UrlsUpsertArgs<ExtArgs>>): Prisma__UrlsClient<$Result.GetResult<Prisma.$UrlsPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Urls.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UrlsCountArgs} args - Arguments to filter Urls to count.
     * @example
     * // Count the number of Urls
     * const count = await prisma.urls.count({
     *   where: {
     *     // ... the filter for the Urls we want to count
     *   }
     * })
    **/
    count<T extends UrlsCountArgs>(
      args?: Subset<T, UrlsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UrlsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Urls.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UrlsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UrlsAggregateArgs>(args: Subset<T, UrlsAggregateArgs>): Prisma.PrismaPromise<GetUrlsAggregateType<T>>

    /**
     * Group by Urls.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UrlsGroupByArgs} args - Group by arguments.
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
      T extends UrlsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UrlsGroupByArgs['orderBy'] }
        : { orderBy?: UrlsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UrlsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUrlsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Urls model
   */
  readonly fields: UrlsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Urls.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UrlsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    relation<T extends BaseDefaultArgs<ExtArgs> = {}>(args?: Subset<T, BaseDefaultArgs<ExtArgs>>): Prisma__BaseClient<$Result.GetResult<Prisma.$BasePayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
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
   * Fields of the Urls model
   */ 
  interface UrlsFieldRefs {
    readonly id: FieldRef<"Urls", 'Int'>
    readonly slug: FieldRef<"Urls", 'String'>
    readonly url: FieldRef<"Urls", 'String'>
    readonly title: FieldRef<"Urls", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Urls findUnique
   */
  export type UrlsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Urls
     */
    select?: UrlsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UrlsInclude<ExtArgs> | null
    /**
     * Filter, which Urls to fetch.
     */
    where: UrlsWhereUniqueInput
  }

  /**
   * Urls findUniqueOrThrow
   */
  export type UrlsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Urls
     */
    select?: UrlsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UrlsInclude<ExtArgs> | null
    /**
     * Filter, which Urls to fetch.
     */
    where: UrlsWhereUniqueInput
  }

  /**
   * Urls findFirst
   */
  export type UrlsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Urls
     */
    select?: UrlsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UrlsInclude<ExtArgs> | null
    /**
     * Filter, which Urls to fetch.
     */
    where?: UrlsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Urls to fetch.
     */
    orderBy?: UrlsOrderByWithRelationInput | UrlsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Urls.
     */
    cursor?: UrlsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Urls from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Urls.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Urls.
     */
    distinct?: UrlsScalarFieldEnum | UrlsScalarFieldEnum[]
  }

  /**
   * Urls findFirstOrThrow
   */
  export type UrlsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Urls
     */
    select?: UrlsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UrlsInclude<ExtArgs> | null
    /**
     * Filter, which Urls to fetch.
     */
    where?: UrlsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Urls to fetch.
     */
    orderBy?: UrlsOrderByWithRelationInput | UrlsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Urls.
     */
    cursor?: UrlsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Urls from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Urls.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Urls.
     */
    distinct?: UrlsScalarFieldEnum | UrlsScalarFieldEnum[]
  }

  /**
   * Urls findMany
   */
  export type UrlsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Urls
     */
    select?: UrlsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UrlsInclude<ExtArgs> | null
    /**
     * Filter, which Urls to fetch.
     */
    where?: UrlsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Urls to fetch.
     */
    orderBy?: UrlsOrderByWithRelationInput | UrlsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Urls.
     */
    cursor?: UrlsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Urls from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Urls.
     */
    skip?: number
    distinct?: UrlsScalarFieldEnum | UrlsScalarFieldEnum[]
  }

  /**
   * Urls create
   */
  export type UrlsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Urls
     */
    select?: UrlsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UrlsInclude<ExtArgs> | null
    /**
     * The data needed to create a Urls.
     */
    data: XOR<UrlsCreateInput, UrlsUncheckedCreateInput>
  }

  /**
   * Urls createMany
   */
  export type UrlsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Urls.
     */
    data: UrlsCreateManyInput | UrlsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Urls createManyAndReturn
   */
  export type UrlsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Urls
     */
    select?: UrlsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Urls.
     */
    data: UrlsCreateManyInput | UrlsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UrlsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Urls update
   */
  export type UrlsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Urls
     */
    select?: UrlsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UrlsInclude<ExtArgs> | null
    /**
     * The data needed to update a Urls.
     */
    data: XOR<UrlsUpdateInput, UrlsUncheckedUpdateInput>
    /**
     * Choose, which Urls to update.
     */
    where: UrlsWhereUniqueInput
  }

  /**
   * Urls updateMany
   */
  export type UrlsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Urls.
     */
    data: XOR<UrlsUpdateManyMutationInput, UrlsUncheckedUpdateManyInput>
    /**
     * Filter which Urls to update
     */
    where?: UrlsWhereInput
  }

  /**
   * Urls upsert
   */
  export type UrlsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Urls
     */
    select?: UrlsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UrlsInclude<ExtArgs> | null
    /**
     * The filter to search for the Urls to update in case it exists.
     */
    where: UrlsWhereUniqueInput
    /**
     * In case the Urls found by the `where` argument doesn't exist, create a new Urls with this data.
     */
    create: XOR<UrlsCreateInput, UrlsUncheckedCreateInput>
    /**
     * In case the Urls was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UrlsUpdateInput, UrlsUncheckedUpdateInput>
  }

  /**
   * Urls delete
   */
  export type UrlsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Urls
     */
    select?: UrlsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UrlsInclude<ExtArgs> | null
    /**
     * Filter which Urls to delete.
     */
    where: UrlsWhereUniqueInput
  }

  /**
   * Urls deleteMany
   */
  export type UrlsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Urls to delete
     */
    where?: UrlsWhereInput
  }

  /**
   * Urls without action
   */
  export type UrlsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Urls
     */
    select?: UrlsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UrlsInclude<ExtArgs> | null
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


  export const BaseScalarFieldEnum: {
    slug: 'slug',
    name: 'name',
    description: 'description'
  };

  export type BaseScalarFieldEnum = (typeof BaseScalarFieldEnum)[keyof typeof BaseScalarFieldEnum]


  export const RelationsScalarFieldEnum: {
    slug: 'slug',
    person: 'person',
    relation_type: 'relation_type'
  };

  export type RelationsScalarFieldEnum = (typeof RelationsScalarFieldEnum)[keyof typeof RelationsScalarFieldEnum]


  export const NamesScalarFieldEnum: {
    id: 'id',
    slug: 'slug',
    name: 'name',
    lang: 'lang',
    note: 'note'
  };

  export type NamesScalarFieldEnum = (typeof NamesScalarFieldEnum)[keyof typeof NamesScalarFieldEnum]


  export const UrlsScalarFieldEnum: {
    id: 'id',
    slug: 'slug',
    url: 'url',
    title: 'title'
  };

  export type UrlsScalarFieldEnum = (typeof UrlsScalarFieldEnum)[keyof typeof UrlsScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type BaseWhereInput = {
    AND?: BaseWhereInput | BaseWhereInput[]
    OR?: BaseWhereInput[]
    NOT?: BaseWhereInput | BaseWhereInput[]
    slug?: StringFilter<"Base"> | string
    name?: StringFilter<"Base"> | string
    description?: StringNullableFilter<"Base"> | string | null
    names?: NamesListRelationFilter
    urls?: UrlsListRelationFilter
    partneredTo?: BaseListRelationFilter
    partneredBy?: BaseListRelationFilter
    siblingsTo?: BaseListRelationFilter
    siblingsBy?: BaseListRelationFilter
    parents?: BaseListRelationFilter
    children?: BaseListRelationFilter
    other_relations?: RelationsListRelationFilter
  }

  export type BaseOrderByWithRelationInput = {
    slug?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    names?: NamesOrderByRelationAggregateInput
    urls?: UrlsOrderByRelationAggregateInput
    partneredTo?: BaseOrderByRelationAggregateInput
    partneredBy?: BaseOrderByRelationAggregateInput
    siblingsTo?: BaseOrderByRelationAggregateInput
    siblingsBy?: BaseOrderByRelationAggregateInput
    parents?: BaseOrderByRelationAggregateInput
    children?: BaseOrderByRelationAggregateInput
    other_relations?: RelationsOrderByRelationAggregateInput
  }

  export type BaseWhereUniqueInput = Prisma.AtLeast<{
    slug?: string
    AND?: BaseWhereInput | BaseWhereInput[]
    OR?: BaseWhereInput[]
    NOT?: BaseWhereInput | BaseWhereInput[]
    name?: StringFilter<"Base"> | string
    description?: StringNullableFilter<"Base"> | string | null
    names?: NamesListRelationFilter
    urls?: UrlsListRelationFilter
    partneredTo?: BaseListRelationFilter
    partneredBy?: BaseListRelationFilter
    siblingsTo?: BaseListRelationFilter
    siblingsBy?: BaseListRelationFilter
    parents?: BaseListRelationFilter
    children?: BaseListRelationFilter
    other_relations?: RelationsListRelationFilter
  }, "slug" | "slug">

  export type BaseOrderByWithAggregationInput = {
    slug?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    _count?: BaseCountOrderByAggregateInput
    _max?: BaseMaxOrderByAggregateInput
    _min?: BaseMinOrderByAggregateInput
  }

  export type BaseScalarWhereWithAggregatesInput = {
    AND?: BaseScalarWhereWithAggregatesInput | BaseScalarWhereWithAggregatesInput[]
    OR?: BaseScalarWhereWithAggregatesInput[]
    NOT?: BaseScalarWhereWithAggregatesInput | BaseScalarWhereWithAggregatesInput[]
    slug?: StringWithAggregatesFilter<"Base"> | string
    name?: StringWithAggregatesFilter<"Base"> | string
    description?: StringNullableWithAggregatesFilter<"Base"> | string | null
  }

  export type RelationsWhereInput = {
    AND?: RelationsWhereInput | RelationsWhereInput[]
    OR?: RelationsWhereInput[]
    NOT?: RelationsWhereInput | RelationsWhereInput[]
    slug?: StringFilter<"Relations"> | string
    person?: StringNullableListFilter<"Relations">
    relation_type?: StringFilter<"Relations"> | string
    relation?: XOR<BaseScalarRelationFilter, BaseWhereInput>
  }

  export type RelationsOrderByWithRelationInput = {
    slug?: SortOrder
    person?: SortOrder
    relation_type?: SortOrder
    relation?: BaseOrderByWithRelationInput
  }

  export type RelationsWhereUniqueInput = Prisma.AtLeast<{
    slug?: string
    AND?: RelationsWhereInput | RelationsWhereInput[]
    OR?: RelationsWhereInput[]
    NOT?: RelationsWhereInput | RelationsWhereInput[]
    person?: StringNullableListFilter<"Relations">
    relation_type?: StringFilter<"Relations"> | string
    relation?: XOR<BaseScalarRelationFilter, BaseWhereInput>
  }, "slug" | "slug">

  export type RelationsOrderByWithAggregationInput = {
    slug?: SortOrder
    person?: SortOrder
    relation_type?: SortOrder
    _count?: RelationsCountOrderByAggregateInput
    _max?: RelationsMaxOrderByAggregateInput
    _min?: RelationsMinOrderByAggregateInput
  }

  export type RelationsScalarWhereWithAggregatesInput = {
    AND?: RelationsScalarWhereWithAggregatesInput | RelationsScalarWhereWithAggregatesInput[]
    OR?: RelationsScalarWhereWithAggregatesInput[]
    NOT?: RelationsScalarWhereWithAggregatesInput | RelationsScalarWhereWithAggregatesInput[]
    slug?: StringWithAggregatesFilter<"Relations"> | string
    person?: StringNullableListFilter<"Relations">
    relation_type?: StringWithAggregatesFilter<"Relations"> | string
  }

  export type NamesWhereInput = {
    AND?: NamesWhereInput | NamesWhereInput[]
    OR?: NamesWhereInput[]
    NOT?: NamesWhereInput | NamesWhereInput[]
    id?: IntFilter<"Names"> | number
    slug?: StringFilter<"Names"> | string
    name?: StringFilter<"Names"> | string
    lang?: StringNullableFilter<"Names"> | string | null
    note?: StringNullableFilter<"Names"> | string | null
    relation?: XOR<BaseScalarRelationFilter, BaseWhereInput>
  }

  export type NamesOrderByWithRelationInput = {
    id?: SortOrder
    slug?: SortOrder
    name?: SortOrder
    lang?: SortOrderInput | SortOrder
    note?: SortOrderInput | SortOrder
    relation?: BaseOrderByWithRelationInput
  }

  export type NamesWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: NamesWhereInput | NamesWhereInput[]
    OR?: NamesWhereInput[]
    NOT?: NamesWhereInput | NamesWhereInput[]
    slug?: StringFilter<"Names"> | string
    name?: StringFilter<"Names"> | string
    lang?: StringNullableFilter<"Names"> | string | null
    note?: StringNullableFilter<"Names"> | string | null
    relation?: XOR<BaseScalarRelationFilter, BaseWhereInput>
  }, "id">

  export type NamesOrderByWithAggregationInput = {
    id?: SortOrder
    slug?: SortOrder
    name?: SortOrder
    lang?: SortOrderInput | SortOrder
    note?: SortOrderInput | SortOrder
    _count?: NamesCountOrderByAggregateInput
    _avg?: NamesAvgOrderByAggregateInput
    _max?: NamesMaxOrderByAggregateInput
    _min?: NamesMinOrderByAggregateInput
    _sum?: NamesSumOrderByAggregateInput
  }

  export type NamesScalarWhereWithAggregatesInput = {
    AND?: NamesScalarWhereWithAggregatesInput | NamesScalarWhereWithAggregatesInput[]
    OR?: NamesScalarWhereWithAggregatesInput[]
    NOT?: NamesScalarWhereWithAggregatesInput | NamesScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Names"> | number
    slug?: StringWithAggregatesFilter<"Names"> | string
    name?: StringWithAggregatesFilter<"Names"> | string
    lang?: StringNullableWithAggregatesFilter<"Names"> | string | null
    note?: StringNullableWithAggregatesFilter<"Names"> | string | null
  }

  export type UrlsWhereInput = {
    AND?: UrlsWhereInput | UrlsWhereInput[]
    OR?: UrlsWhereInput[]
    NOT?: UrlsWhereInput | UrlsWhereInput[]
    id?: IntFilter<"Urls"> | number
    slug?: StringFilter<"Urls"> | string
    url?: StringFilter<"Urls"> | string
    title?: StringFilter<"Urls"> | string
    relation?: XOR<BaseScalarRelationFilter, BaseWhereInput>
  }

  export type UrlsOrderByWithRelationInput = {
    id?: SortOrder
    slug?: SortOrder
    url?: SortOrder
    title?: SortOrder
    relation?: BaseOrderByWithRelationInput
  }

  export type UrlsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: UrlsWhereInput | UrlsWhereInput[]
    OR?: UrlsWhereInput[]
    NOT?: UrlsWhereInput | UrlsWhereInput[]
    slug?: StringFilter<"Urls"> | string
    url?: StringFilter<"Urls"> | string
    title?: StringFilter<"Urls"> | string
    relation?: XOR<BaseScalarRelationFilter, BaseWhereInput>
  }, "id">

  export type UrlsOrderByWithAggregationInput = {
    id?: SortOrder
    slug?: SortOrder
    url?: SortOrder
    title?: SortOrder
    _count?: UrlsCountOrderByAggregateInput
    _avg?: UrlsAvgOrderByAggregateInput
    _max?: UrlsMaxOrderByAggregateInput
    _min?: UrlsMinOrderByAggregateInput
    _sum?: UrlsSumOrderByAggregateInput
  }

  export type UrlsScalarWhereWithAggregatesInput = {
    AND?: UrlsScalarWhereWithAggregatesInput | UrlsScalarWhereWithAggregatesInput[]
    OR?: UrlsScalarWhereWithAggregatesInput[]
    NOT?: UrlsScalarWhereWithAggregatesInput | UrlsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Urls"> | number
    slug?: StringWithAggregatesFilter<"Urls"> | string
    url?: StringWithAggregatesFilter<"Urls"> | string
    title?: StringWithAggregatesFilter<"Urls"> | string
  }

  export type BaseCreateInput = {
    slug: string
    name: string
    description?: string | null
    names?: NamesCreateNestedManyWithoutRelationInput
    urls?: UrlsCreateNestedManyWithoutRelationInput
    partneredTo?: BaseCreateNestedManyWithoutPartneredByInput
    partneredBy?: BaseCreateNestedManyWithoutPartneredToInput
    siblingsTo?: BaseCreateNestedManyWithoutSiblingsByInput
    siblingsBy?: BaseCreateNestedManyWithoutSiblingsToInput
    parents?: BaseCreateNestedManyWithoutChildrenInput
    children?: BaseCreateNestedManyWithoutParentsInput
    other_relations?: RelationsCreateNestedManyWithoutRelationInput
  }

  export type BaseUncheckedCreateInput = {
    slug: string
    name: string
    description?: string | null
    names?: NamesUncheckedCreateNestedManyWithoutRelationInput
    urls?: UrlsUncheckedCreateNestedManyWithoutRelationInput
    partneredTo?: BaseUncheckedCreateNestedManyWithoutPartneredByInput
    partneredBy?: BaseUncheckedCreateNestedManyWithoutPartneredToInput
    siblingsTo?: BaseUncheckedCreateNestedManyWithoutSiblingsByInput
    siblingsBy?: BaseUncheckedCreateNestedManyWithoutSiblingsToInput
    parents?: BaseUncheckedCreateNestedManyWithoutChildrenInput
    children?: BaseUncheckedCreateNestedManyWithoutParentsInput
    other_relations?: RelationsUncheckedCreateNestedManyWithoutRelationInput
  }

  export type BaseUpdateInput = {
    slug?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    names?: NamesUpdateManyWithoutRelationNestedInput
    urls?: UrlsUpdateManyWithoutRelationNestedInput
    partneredTo?: BaseUpdateManyWithoutPartneredByNestedInput
    partneredBy?: BaseUpdateManyWithoutPartneredToNestedInput
    siblingsTo?: BaseUpdateManyWithoutSiblingsByNestedInput
    siblingsBy?: BaseUpdateManyWithoutSiblingsToNestedInput
    parents?: BaseUpdateManyWithoutChildrenNestedInput
    children?: BaseUpdateManyWithoutParentsNestedInput
    other_relations?: RelationsUpdateManyWithoutRelationNestedInput
  }

  export type BaseUncheckedUpdateInput = {
    slug?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    names?: NamesUncheckedUpdateManyWithoutRelationNestedInput
    urls?: UrlsUncheckedUpdateManyWithoutRelationNestedInput
    partneredTo?: BaseUncheckedUpdateManyWithoutPartneredByNestedInput
    partneredBy?: BaseUncheckedUpdateManyWithoutPartneredToNestedInput
    siblingsTo?: BaseUncheckedUpdateManyWithoutSiblingsByNestedInput
    siblingsBy?: BaseUncheckedUpdateManyWithoutSiblingsToNestedInput
    parents?: BaseUncheckedUpdateManyWithoutChildrenNestedInput
    children?: BaseUncheckedUpdateManyWithoutParentsNestedInput
    other_relations?: RelationsUncheckedUpdateManyWithoutRelationNestedInput
  }

  export type BaseCreateManyInput = {
    slug: string
    name: string
    description?: string | null
  }

  export type BaseUpdateManyMutationInput = {
    slug?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type BaseUncheckedUpdateManyInput = {
    slug?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type RelationsCreateInput = {
    person?: RelationsCreatepersonInput | string[]
    relation_type: string
    relation: BaseCreateNestedOneWithoutOther_relationsInput
  }

  export type RelationsUncheckedCreateInput = {
    slug: string
    person?: RelationsCreatepersonInput | string[]
    relation_type: string
  }

  export type RelationsUpdateInput = {
    person?: RelationsUpdatepersonInput | string[]
    relation_type?: StringFieldUpdateOperationsInput | string
    relation?: BaseUpdateOneRequiredWithoutOther_relationsNestedInput
  }

  export type RelationsUncheckedUpdateInput = {
    slug?: StringFieldUpdateOperationsInput | string
    person?: RelationsUpdatepersonInput | string[]
    relation_type?: StringFieldUpdateOperationsInput | string
  }

  export type RelationsCreateManyInput = {
    slug: string
    person?: RelationsCreatepersonInput | string[]
    relation_type: string
  }

  export type RelationsUpdateManyMutationInput = {
    person?: RelationsUpdatepersonInput | string[]
    relation_type?: StringFieldUpdateOperationsInput | string
  }

  export type RelationsUncheckedUpdateManyInput = {
    slug?: StringFieldUpdateOperationsInput | string
    person?: RelationsUpdatepersonInput | string[]
    relation_type?: StringFieldUpdateOperationsInput | string
  }

  export type NamesCreateInput = {
    name: string
    lang?: string | null
    note?: string | null
    relation: BaseCreateNestedOneWithoutNamesInput
  }

  export type NamesUncheckedCreateInput = {
    id?: number
    slug: string
    name: string
    lang?: string | null
    note?: string | null
  }

  export type NamesUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    lang?: NullableStringFieldUpdateOperationsInput | string | null
    note?: NullableStringFieldUpdateOperationsInput | string | null
    relation?: BaseUpdateOneRequiredWithoutNamesNestedInput
  }

  export type NamesUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    slug?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    lang?: NullableStringFieldUpdateOperationsInput | string | null
    note?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type NamesCreateManyInput = {
    id?: number
    slug: string
    name: string
    lang?: string | null
    note?: string | null
  }

  export type NamesUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    lang?: NullableStringFieldUpdateOperationsInput | string | null
    note?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type NamesUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    slug?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    lang?: NullableStringFieldUpdateOperationsInput | string | null
    note?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UrlsCreateInput = {
    url: string
    title: string
    relation: BaseCreateNestedOneWithoutUrlsInput
  }

  export type UrlsUncheckedCreateInput = {
    id?: number
    slug: string
    url: string
    title: string
  }

  export type UrlsUpdateInput = {
    url?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    relation?: BaseUpdateOneRequiredWithoutUrlsNestedInput
  }

  export type UrlsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    slug?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
  }

  export type UrlsCreateManyInput = {
    id?: number
    slug: string
    url: string
    title: string
  }

  export type UrlsUpdateManyMutationInput = {
    url?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
  }

  export type UrlsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    slug?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NamesListRelationFilter = {
    every?: NamesWhereInput
    some?: NamesWhereInput
    none?: NamesWhereInput
  }

  export type UrlsListRelationFilter = {
    every?: UrlsWhereInput
    some?: UrlsWhereInput
    none?: UrlsWhereInput
  }

  export type BaseListRelationFilter = {
    every?: BaseWhereInput
    some?: BaseWhereInput
    none?: BaseWhereInput
  }

  export type RelationsListRelationFilter = {
    every?: RelationsWhereInput
    some?: RelationsWhereInput
    none?: RelationsWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type NamesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UrlsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type BaseOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RelationsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type BaseCountOrderByAggregateInput = {
    slug?: SortOrder
    name?: SortOrder
    description?: SortOrder
  }

  export type BaseMaxOrderByAggregateInput = {
    slug?: SortOrder
    name?: SortOrder
    description?: SortOrder
  }

  export type BaseMinOrderByAggregateInput = {
    slug?: SortOrder
    name?: SortOrder
    description?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    has?: string | StringFieldRefInput<$PrismaModel> | null
    hasEvery?: string[] | ListStringFieldRefInput<$PrismaModel>
    hasSome?: string[] | ListStringFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type BaseScalarRelationFilter = {
    is?: BaseWhereInput
    isNot?: BaseWhereInput
  }

  export type RelationsCountOrderByAggregateInput = {
    slug?: SortOrder
    person?: SortOrder
    relation_type?: SortOrder
  }

  export type RelationsMaxOrderByAggregateInput = {
    slug?: SortOrder
    relation_type?: SortOrder
  }

  export type RelationsMinOrderByAggregateInput = {
    slug?: SortOrder
    relation_type?: SortOrder
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NamesCountOrderByAggregateInput = {
    id?: SortOrder
    slug?: SortOrder
    name?: SortOrder
    lang?: SortOrder
    note?: SortOrder
  }

  export type NamesAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type NamesMaxOrderByAggregateInput = {
    id?: SortOrder
    slug?: SortOrder
    name?: SortOrder
    lang?: SortOrder
    note?: SortOrder
  }

  export type NamesMinOrderByAggregateInput = {
    id?: SortOrder
    slug?: SortOrder
    name?: SortOrder
    lang?: SortOrder
    note?: SortOrder
  }

  export type NamesSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
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

  export type UrlsCountOrderByAggregateInput = {
    id?: SortOrder
    slug?: SortOrder
    url?: SortOrder
    title?: SortOrder
  }

  export type UrlsAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UrlsMaxOrderByAggregateInput = {
    id?: SortOrder
    slug?: SortOrder
    url?: SortOrder
    title?: SortOrder
  }

  export type UrlsMinOrderByAggregateInput = {
    id?: SortOrder
    slug?: SortOrder
    url?: SortOrder
    title?: SortOrder
  }

  export type UrlsSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type NamesCreateNestedManyWithoutRelationInput = {
    create?: XOR<NamesCreateWithoutRelationInput, NamesUncheckedCreateWithoutRelationInput> | NamesCreateWithoutRelationInput[] | NamesUncheckedCreateWithoutRelationInput[]
    connectOrCreate?: NamesCreateOrConnectWithoutRelationInput | NamesCreateOrConnectWithoutRelationInput[]
    createMany?: NamesCreateManyRelationInputEnvelope
    connect?: NamesWhereUniqueInput | NamesWhereUniqueInput[]
  }

  export type UrlsCreateNestedManyWithoutRelationInput = {
    create?: XOR<UrlsCreateWithoutRelationInput, UrlsUncheckedCreateWithoutRelationInput> | UrlsCreateWithoutRelationInput[] | UrlsUncheckedCreateWithoutRelationInput[]
    connectOrCreate?: UrlsCreateOrConnectWithoutRelationInput | UrlsCreateOrConnectWithoutRelationInput[]
    createMany?: UrlsCreateManyRelationInputEnvelope
    connect?: UrlsWhereUniqueInput | UrlsWhereUniqueInput[]
  }

  export type BaseCreateNestedManyWithoutPartneredByInput = {
    create?: XOR<BaseCreateWithoutPartneredByInput, BaseUncheckedCreateWithoutPartneredByInput> | BaseCreateWithoutPartneredByInput[] | BaseUncheckedCreateWithoutPartneredByInput[]
    connectOrCreate?: BaseCreateOrConnectWithoutPartneredByInput | BaseCreateOrConnectWithoutPartneredByInput[]
    connect?: BaseWhereUniqueInput | BaseWhereUniqueInput[]
  }

  export type BaseCreateNestedManyWithoutPartneredToInput = {
    create?: XOR<BaseCreateWithoutPartneredToInput, BaseUncheckedCreateWithoutPartneredToInput> | BaseCreateWithoutPartneredToInput[] | BaseUncheckedCreateWithoutPartneredToInput[]
    connectOrCreate?: BaseCreateOrConnectWithoutPartneredToInput | BaseCreateOrConnectWithoutPartneredToInput[]
    connect?: BaseWhereUniqueInput | BaseWhereUniqueInput[]
  }

  export type BaseCreateNestedManyWithoutSiblingsByInput = {
    create?: XOR<BaseCreateWithoutSiblingsByInput, BaseUncheckedCreateWithoutSiblingsByInput> | BaseCreateWithoutSiblingsByInput[] | BaseUncheckedCreateWithoutSiblingsByInput[]
    connectOrCreate?: BaseCreateOrConnectWithoutSiblingsByInput | BaseCreateOrConnectWithoutSiblingsByInput[]
    connect?: BaseWhereUniqueInput | BaseWhereUniqueInput[]
  }

  export type BaseCreateNestedManyWithoutSiblingsToInput = {
    create?: XOR<BaseCreateWithoutSiblingsToInput, BaseUncheckedCreateWithoutSiblingsToInput> | BaseCreateWithoutSiblingsToInput[] | BaseUncheckedCreateWithoutSiblingsToInput[]
    connectOrCreate?: BaseCreateOrConnectWithoutSiblingsToInput | BaseCreateOrConnectWithoutSiblingsToInput[]
    connect?: BaseWhereUniqueInput | BaseWhereUniqueInput[]
  }

  export type BaseCreateNestedManyWithoutChildrenInput = {
    create?: XOR<BaseCreateWithoutChildrenInput, BaseUncheckedCreateWithoutChildrenInput> | BaseCreateWithoutChildrenInput[] | BaseUncheckedCreateWithoutChildrenInput[]
    connectOrCreate?: BaseCreateOrConnectWithoutChildrenInput | BaseCreateOrConnectWithoutChildrenInput[]
    connect?: BaseWhereUniqueInput | BaseWhereUniqueInput[]
  }

  export type BaseCreateNestedManyWithoutParentsInput = {
    create?: XOR<BaseCreateWithoutParentsInput, BaseUncheckedCreateWithoutParentsInput> | BaseCreateWithoutParentsInput[] | BaseUncheckedCreateWithoutParentsInput[]
    connectOrCreate?: BaseCreateOrConnectWithoutParentsInput | BaseCreateOrConnectWithoutParentsInput[]
    connect?: BaseWhereUniqueInput | BaseWhereUniqueInput[]
  }

  export type RelationsCreateNestedManyWithoutRelationInput = {
    create?: XOR<RelationsCreateWithoutRelationInput, RelationsUncheckedCreateWithoutRelationInput> | RelationsCreateWithoutRelationInput[] | RelationsUncheckedCreateWithoutRelationInput[]
    connectOrCreate?: RelationsCreateOrConnectWithoutRelationInput | RelationsCreateOrConnectWithoutRelationInput[]
    createMany?: RelationsCreateManyRelationInputEnvelope
    connect?: RelationsWhereUniqueInput | RelationsWhereUniqueInput[]
  }

  export type NamesUncheckedCreateNestedManyWithoutRelationInput = {
    create?: XOR<NamesCreateWithoutRelationInput, NamesUncheckedCreateWithoutRelationInput> | NamesCreateWithoutRelationInput[] | NamesUncheckedCreateWithoutRelationInput[]
    connectOrCreate?: NamesCreateOrConnectWithoutRelationInput | NamesCreateOrConnectWithoutRelationInput[]
    createMany?: NamesCreateManyRelationInputEnvelope
    connect?: NamesWhereUniqueInput | NamesWhereUniqueInput[]
  }

  export type UrlsUncheckedCreateNestedManyWithoutRelationInput = {
    create?: XOR<UrlsCreateWithoutRelationInput, UrlsUncheckedCreateWithoutRelationInput> | UrlsCreateWithoutRelationInput[] | UrlsUncheckedCreateWithoutRelationInput[]
    connectOrCreate?: UrlsCreateOrConnectWithoutRelationInput | UrlsCreateOrConnectWithoutRelationInput[]
    createMany?: UrlsCreateManyRelationInputEnvelope
    connect?: UrlsWhereUniqueInput | UrlsWhereUniqueInput[]
  }

  export type BaseUncheckedCreateNestedManyWithoutPartneredByInput = {
    create?: XOR<BaseCreateWithoutPartneredByInput, BaseUncheckedCreateWithoutPartneredByInput> | BaseCreateWithoutPartneredByInput[] | BaseUncheckedCreateWithoutPartneredByInput[]
    connectOrCreate?: BaseCreateOrConnectWithoutPartneredByInput | BaseCreateOrConnectWithoutPartneredByInput[]
    connect?: BaseWhereUniqueInput | BaseWhereUniqueInput[]
  }

  export type BaseUncheckedCreateNestedManyWithoutPartneredToInput = {
    create?: XOR<BaseCreateWithoutPartneredToInput, BaseUncheckedCreateWithoutPartneredToInput> | BaseCreateWithoutPartneredToInput[] | BaseUncheckedCreateWithoutPartneredToInput[]
    connectOrCreate?: BaseCreateOrConnectWithoutPartneredToInput | BaseCreateOrConnectWithoutPartneredToInput[]
    connect?: BaseWhereUniqueInput | BaseWhereUniqueInput[]
  }

  export type BaseUncheckedCreateNestedManyWithoutSiblingsByInput = {
    create?: XOR<BaseCreateWithoutSiblingsByInput, BaseUncheckedCreateWithoutSiblingsByInput> | BaseCreateWithoutSiblingsByInput[] | BaseUncheckedCreateWithoutSiblingsByInput[]
    connectOrCreate?: BaseCreateOrConnectWithoutSiblingsByInput | BaseCreateOrConnectWithoutSiblingsByInput[]
    connect?: BaseWhereUniqueInput | BaseWhereUniqueInput[]
  }

  export type BaseUncheckedCreateNestedManyWithoutSiblingsToInput = {
    create?: XOR<BaseCreateWithoutSiblingsToInput, BaseUncheckedCreateWithoutSiblingsToInput> | BaseCreateWithoutSiblingsToInput[] | BaseUncheckedCreateWithoutSiblingsToInput[]
    connectOrCreate?: BaseCreateOrConnectWithoutSiblingsToInput | BaseCreateOrConnectWithoutSiblingsToInput[]
    connect?: BaseWhereUniqueInput | BaseWhereUniqueInput[]
  }

  export type BaseUncheckedCreateNestedManyWithoutChildrenInput = {
    create?: XOR<BaseCreateWithoutChildrenInput, BaseUncheckedCreateWithoutChildrenInput> | BaseCreateWithoutChildrenInput[] | BaseUncheckedCreateWithoutChildrenInput[]
    connectOrCreate?: BaseCreateOrConnectWithoutChildrenInput | BaseCreateOrConnectWithoutChildrenInput[]
    connect?: BaseWhereUniqueInput | BaseWhereUniqueInput[]
  }

  export type BaseUncheckedCreateNestedManyWithoutParentsInput = {
    create?: XOR<BaseCreateWithoutParentsInput, BaseUncheckedCreateWithoutParentsInput> | BaseCreateWithoutParentsInput[] | BaseUncheckedCreateWithoutParentsInput[]
    connectOrCreate?: BaseCreateOrConnectWithoutParentsInput | BaseCreateOrConnectWithoutParentsInput[]
    connect?: BaseWhereUniqueInput | BaseWhereUniqueInput[]
  }

  export type RelationsUncheckedCreateNestedManyWithoutRelationInput = {
    create?: XOR<RelationsCreateWithoutRelationInput, RelationsUncheckedCreateWithoutRelationInput> | RelationsCreateWithoutRelationInput[] | RelationsUncheckedCreateWithoutRelationInput[]
    connectOrCreate?: RelationsCreateOrConnectWithoutRelationInput | RelationsCreateOrConnectWithoutRelationInput[]
    createMany?: RelationsCreateManyRelationInputEnvelope
    connect?: RelationsWhereUniqueInput | RelationsWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NamesUpdateManyWithoutRelationNestedInput = {
    create?: XOR<NamesCreateWithoutRelationInput, NamesUncheckedCreateWithoutRelationInput> | NamesCreateWithoutRelationInput[] | NamesUncheckedCreateWithoutRelationInput[]
    connectOrCreate?: NamesCreateOrConnectWithoutRelationInput | NamesCreateOrConnectWithoutRelationInput[]
    upsert?: NamesUpsertWithWhereUniqueWithoutRelationInput | NamesUpsertWithWhereUniqueWithoutRelationInput[]
    createMany?: NamesCreateManyRelationInputEnvelope
    set?: NamesWhereUniqueInput | NamesWhereUniqueInput[]
    disconnect?: NamesWhereUniqueInput | NamesWhereUniqueInput[]
    delete?: NamesWhereUniqueInput | NamesWhereUniqueInput[]
    connect?: NamesWhereUniqueInput | NamesWhereUniqueInput[]
    update?: NamesUpdateWithWhereUniqueWithoutRelationInput | NamesUpdateWithWhereUniqueWithoutRelationInput[]
    updateMany?: NamesUpdateManyWithWhereWithoutRelationInput | NamesUpdateManyWithWhereWithoutRelationInput[]
    deleteMany?: NamesScalarWhereInput | NamesScalarWhereInput[]
  }

  export type UrlsUpdateManyWithoutRelationNestedInput = {
    create?: XOR<UrlsCreateWithoutRelationInput, UrlsUncheckedCreateWithoutRelationInput> | UrlsCreateWithoutRelationInput[] | UrlsUncheckedCreateWithoutRelationInput[]
    connectOrCreate?: UrlsCreateOrConnectWithoutRelationInput | UrlsCreateOrConnectWithoutRelationInput[]
    upsert?: UrlsUpsertWithWhereUniqueWithoutRelationInput | UrlsUpsertWithWhereUniqueWithoutRelationInput[]
    createMany?: UrlsCreateManyRelationInputEnvelope
    set?: UrlsWhereUniqueInput | UrlsWhereUniqueInput[]
    disconnect?: UrlsWhereUniqueInput | UrlsWhereUniqueInput[]
    delete?: UrlsWhereUniqueInput | UrlsWhereUniqueInput[]
    connect?: UrlsWhereUniqueInput | UrlsWhereUniqueInput[]
    update?: UrlsUpdateWithWhereUniqueWithoutRelationInput | UrlsUpdateWithWhereUniqueWithoutRelationInput[]
    updateMany?: UrlsUpdateManyWithWhereWithoutRelationInput | UrlsUpdateManyWithWhereWithoutRelationInput[]
    deleteMany?: UrlsScalarWhereInput | UrlsScalarWhereInput[]
  }

  export type BaseUpdateManyWithoutPartneredByNestedInput = {
    create?: XOR<BaseCreateWithoutPartneredByInput, BaseUncheckedCreateWithoutPartneredByInput> | BaseCreateWithoutPartneredByInput[] | BaseUncheckedCreateWithoutPartneredByInput[]
    connectOrCreate?: BaseCreateOrConnectWithoutPartneredByInput | BaseCreateOrConnectWithoutPartneredByInput[]
    upsert?: BaseUpsertWithWhereUniqueWithoutPartneredByInput | BaseUpsertWithWhereUniqueWithoutPartneredByInput[]
    set?: BaseWhereUniqueInput | BaseWhereUniqueInput[]
    disconnect?: BaseWhereUniqueInput | BaseWhereUniqueInput[]
    delete?: BaseWhereUniqueInput | BaseWhereUniqueInput[]
    connect?: BaseWhereUniqueInput | BaseWhereUniqueInput[]
    update?: BaseUpdateWithWhereUniqueWithoutPartneredByInput | BaseUpdateWithWhereUniqueWithoutPartneredByInput[]
    updateMany?: BaseUpdateManyWithWhereWithoutPartneredByInput | BaseUpdateManyWithWhereWithoutPartneredByInput[]
    deleteMany?: BaseScalarWhereInput | BaseScalarWhereInput[]
  }

  export type BaseUpdateManyWithoutPartneredToNestedInput = {
    create?: XOR<BaseCreateWithoutPartneredToInput, BaseUncheckedCreateWithoutPartneredToInput> | BaseCreateWithoutPartneredToInput[] | BaseUncheckedCreateWithoutPartneredToInput[]
    connectOrCreate?: BaseCreateOrConnectWithoutPartneredToInput | BaseCreateOrConnectWithoutPartneredToInput[]
    upsert?: BaseUpsertWithWhereUniqueWithoutPartneredToInput | BaseUpsertWithWhereUniqueWithoutPartneredToInput[]
    set?: BaseWhereUniqueInput | BaseWhereUniqueInput[]
    disconnect?: BaseWhereUniqueInput | BaseWhereUniqueInput[]
    delete?: BaseWhereUniqueInput | BaseWhereUniqueInput[]
    connect?: BaseWhereUniqueInput | BaseWhereUniqueInput[]
    update?: BaseUpdateWithWhereUniqueWithoutPartneredToInput | BaseUpdateWithWhereUniqueWithoutPartneredToInput[]
    updateMany?: BaseUpdateManyWithWhereWithoutPartneredToInput | BaseUpdateManyWithWhereWithoutPartneredToInput[]
    deleteMany?: BaseScalarWhereInput | BaseScalarWhereInput[]
  }

  export type BaseUpdateManyWithoutSiblingsByNestedInput = {
    create?: XOR<BaseCreateWithoutSiblingsByInput, BaseUncheckedCreateWithoutSiblingsByInput> | BaseCreateWithoutSiblingsByInput[] | BaseUncheckedCreateWithoutSiblingsByInput[]
    connectOrCreate?: BaseCreateOrConnectWithoutSiblingsByInput | BaseCreateOrConnectWithoutSiblingsByInput[]
    upsert?: BaseUpsertWithWhereUniqueWithoutSiblingsByInput | BaseUpsertWithWhereUniqueWithoutSiblingsByInput[]
    set?: BaseWhereUniqueInput | BaseWhereUniqueInput[]
    disconnect?: BaseWhereUniqueInput | BaseWhereUniqueInput[]
    delete?: BaseWhereUniqueInput | BaseWhereUniqueInput[]
    connect?: BaseWhereUniqueInput | BaseWhereUniqueInput[]
    update?: BaseUpdateWithWhereUniqueWithoutSiblingsByInput | BaseUpdateWithWhereUniqueWithoutSiblingsByInput[]
    updateMany?: BaseUpdateManyWithWhereWithoutSiblingsByInput | BaseUpdateManyWithWhereWithoutSiblingsByInput[]
    deleteMany?: BaseScalarWhereInput | BaseScalarWhereInput[]
  }

  export type BaseUpdateManyWithoutSiblingsToNestedInput = {
    create?: XOR<BaseCreateWithoutSiblingsToInput, BaseUncheckedCreateWithoutSiblingsToInput> | BaseCreateWithoutSiblingsToInput[] | BaseUncheckedCreateWithoutSiblingsToInput[]
    connectOrCreate?: BaseCreateOrConnectWithoutSiblingsToInput | BaseCreateOrConnectWithoutSiblingsToInput[]
    upsert?: BaseUpsertWithWhereUniqueWithoutSiblingsToInput | BaseUpsertWithWhereUniqueWithoutSiblingsToInput[]
    set?: BaseWhereUniqueInput | BaseWhereUniqueInput[]
    disconnect?: BaseWhereUniqueInput | BaseWhereUniqueInput[]
    delete?: BaseWhereUniqueInput | BaseWhereUniqueInput[]
    connect?: BaseWhereUniqueInput | BaseWhereUniqueInput[]
    update?: BaseUpdateWithWhereUniqueWithoutSiblingsToInput | BaseUpdateWithWhereUniqueWithoutSiblingsToInput[]
    updateMany?: BaseUpdateManyWithWhereWithoutSiblingsToInput | BaseUpdateManyWithWhereWithoutSiblingsToInput[]
    deleteMany?: BaseScalarWhereInput | BaseScalarWhereInput[]
  }

  export type BaseUpdateManyWithoutChildrenNestedInput = {
    create?: XOR<BaseCreateWithoutChildrenInput, BaseUncheckedCreateWithoutChildrenInput> | BaseCreateWithoutChildrenInput[] | BaseUncheckedCreateWithoutChildrenInput[]
    connectOrCreate?: BaseCreateOrConnectWithoutChildrenInput | BaseCreateOrConnectWithoutChildrenInput[]
    upsert?: BaseUpsertWithWhereUniqueWithoutChildrenInput | BaseUpsertWithWhereUniqueWithoutChildrenInput[]
    set?: BaseWhereUniqueInput | BaseWhereUniqueInput[]
    disconnect?: BaseWhereUniqueInput | BaseWhereUniqueInput[]
    delete?: BaseWhereUniqueInput | BaseWhereUniqueInput[]
    connect?: BaseWhereUniqueInput | BaseWhereUniqueInput[]
    update?: BaseUpdateWithWhereUniqueWithoutChildrenInput | BaseUpdateWithWhereUniqueWithoutChildrenInput[]
    updateMany?: BaseUpdateManyWithWhereWithoutChildrenInput | BaseUpdateManyWithWhereWithoutChildrenInput[]
    deleteMany?: BaseScalarWhereInput | BaseScalarWhereInput[]
  }

  export type BaseUpdateManyWithoutParentsNestedInput = {
    create?: XOR<BaseCreateWithoutParentsInput, BaseUncheckedCreateWithoutParentsInput> | BaseCreateWithoutParentsInput[] | BaseUncheckedCreateWithoutParentsInput[]
    connectOrCreate?: BaseCreateOrConnectWithoutParentsInput | BaseCreateOrConnectWithoutParentsInput[]
    upsert?: BaseUpsertWithWhereUniqueWithoutParentsInput | BaseUpsertWithWhereUniqueWithoutParentsInput[]
    set?: BaseWhereUniqueInput | BaseWhereUniqueInput[]
    disconnect?: BaseWhereUniqueInput | BaseWhereUniqueInput[]
    delete?: BaseWhereUniqueInput | BaseWhereUniqueInput[]
    connect?: BaseWhereUniqueInput | BaseWhereUniqueInput[]
    update?: BaseUpdateWithWhereUniqueWithoutParentsInput | BaseUpdateWithWhereUniqueWithoutParentsInput[]
    updateMany?: BaseUpdateManyWithWhereWithoutParentsInput | BaseUpdateManyWithWhereWithoutParentsInput[]
    deleteMany?: BaseScalarWhereInput | BaseScalarWhereInput[]
  }

  export type RelationsUpdateManyWithoutRelationNestedInput = {
    create?: XOR<RelationsCreateWithoutRelationInput, RelationsUncheckedCreateWithoutRelationInput> | RelationsCreateWithoutRelationInput[] | RelationsUncheckedCreateWithoutRelationInput[]
    connectOrCreate?: RelationsCreateOrConnectWithoutRelationInput | RelationsCreateOrConnectWithoutRelationInput[]
    upsert?: RelationsUpsertWithWhereUniqueWithoutRelationInput | RelationsUpsertWithWhereUniqueWithoutRelationInput[]
    createMany?: RelationsCreateManyRelationInputEnvelope
    set?: RelationsWhereUniqueInput | RelationsWhereUniqueInput[]
    disconnect?: RelationsWhereUniqueInput | RelationsWhereUniqueInput[]
    delete?: RelationsWhereUniqueInput | RelationsWhereUniqueInput[]
    connect?: RelationsWhereUniqueInput | RelationsWhereUniqueInput[]
    update?: RelationsUpdateWithWhereUniqueWithoutRelationInput | RelationsUpdateWithWhereUniqueWithoutRelationInput[]
    updateMany?: RelationsUpdateManyWithWhereWithoutRelationInput | RelationsUpdateManyWithWhereWithoutRelationInput[]
    deleteMany?: RelationsScalarWhereInput | RelationsScalarWhereInput[]
  }

  export type NamesUncheckedUpdateManyWithoutRelationNestedInput = {
    create?: XOR<NamesCreateWithoutRelationInput, NamesUncheckedCreateWithoutRelationInput> | NamesCreateWithoutRelationInput[] | NamesUncheckedCreateWithoutRelationInput[]
    connectOrCreate?: NamesCreateOrConnectWithoutRelationInput | NamesCreateOrConnectWithoutRelationInput[]
    upsert?: NamesUpsertWithWhereUniqueWithoutRelationInput | NamesUpsertWithWhereUniqueWithoutRelationInput[]
    createMany?: NamesCreateManyRelationInputEnvelope
    set?: NamesWhereUniqueInput | NamesWhereUniqueInput[]
    disconnect?: NamesWhereUniqueInput | NamesWhereUniqueInput[]
    delete?: NamesWhereUniqueInput | NamesWhereUniqueInput[]
    connect?: NamesWhereUniqueInput | NamesWhereUniqueInput[]
    update?: NamesUpdateWithWhereUniqueWithoutRelationInput | NamesUpdateWithWhereUniqueWithoutRelationInput[]
    updateMany?: NamesUpdateManyWithWhereWithoutRelationInput | NamesUpdateManyWithWhereWithoutRelationInput[]
    deleteMany?: NamesScalarWhereInput | NamesScalarWhereInput[]
  }

  export type UrlsUncheckedUpdateManyWithoutRelationNestedInput = {
    create?: XOR<UrlsCreateWithoutRelationInput, UrlsUncheckedCreateWithoutRelationInput> | UrlsCreateWithoutRelationInput[] | UrlsUncheckedCreateWithoutRelationInput[]
    connectOrCreate?: UrlsCreateOrConnectWithoutRelationInput | UrlsCreateOrConnectWithoutRelationInput[]
    upsert?: UrlsUpsertWithWhereUniqueWithoutRelationInput | UrlsUpsertWithWhereUniqueWithoutRelationInput[]
    createMany?: UrlsCreateManyRelationInputEnvelope
    set?: UrlsWhereUniqueInput | UrlsWhereUniqueInput[]
    disconnect?: UrlsWhereUniqueInput | UrlsWhereUniqueInput[]
    delete?: UrlsWhereUniqueInput | UrlsWhereUniqueInput[]
    connect?: UrlsWhereUniqueInput | UrlsWhereUniqueInput[]
    update?: UrlsUpdateWithWhereUniqueWithoutRelationInput | UrlsUpdateWithWhereUniqueWithoutRelationInput[]
    updateMany?: UrlsUpdateManyWithWhereWithoutRelationInput | UrlsUpdateManyWithWhereWithoutRelationInput[]
    deleteMany?: UrlsScalarWhereInput | UrlsScalarWhereInput[]
  }

  export type BaseUncheckedUpdateManyWithoutPartneredByNestedInput = {
    create?: XOR<BaseCreateWithoutPartneredByInput, BaseUncheckedCreateWithoutPartneredByInput> | BaseCreateWithoutPartneredByInput[] | BaseUncheckedCreateWithoutPartneredByInput[]
    connectOrCreate?: BaseCreateOrConnectWithoutPartneredByInput | BaseCreateOrConnectWithoutPartneredByInput[]
    upsert?: BaseUpsertWithWhereUniqueWithoutPartneredByInput | BaseUpsertWithWhereUniqueWithoutPartneredByInput[]
    set?: BaseWhereUniqueInput | BaseWhereUniqueInput[]
    disconnect?: BaseWhereUniqueInput | BaseWhereUniqueInput[]
    delete?: BaseWhereUniqueInput | BaseWhereUniqueInput[]
    connect?: BaseWhereUniqueInput | BaseWhereUniqueInput[]
    update?: BaseUpdateWithWhereUniqueWithoutPartneredByInput | BaseUpdateWithWhereUniqueWithoutPartneredByInput[]
    updateMany?: BaseUpdateManyWithWhereWithoutPartneredByInput | BaseUpdateManyWithWhereWithoutPartneredByInput[]
    deleteMany?: BaseScalarWhereInput | BaseScalarWhereInput[]
  }

  export type BaseUncheckedUpdateManyWithoutPartneredToNestedInput = {
    create?: XOR<BaseCreateWithoutPartneredToInput, BaseUncheckedCreateWithoutPartneredToInput> | BaseCreateWithoutPartneredToInput[] | BaseUncheckedCreateWithoutPartneredToInput[]
    connectOrCreate?: BaseCreateOrConnectWithoutPartneredToInput | BaseCreateOrConnectWithoutPartneredToInput[]
    upsert?: BaseUpsertWithWhereUniqueWithoutPartneredToInput | BaseUpsertWithWhereUniqueWithoutPartneredToInput[]
    set?: BaseWhereUniqueInput | BaseWhereUniqueInput[]
    disconnect?: BaseWhereUniqueInput | BaseWhereUniqueInput[]
    delete?: BaseWhereUniqueInput | BaseWhereUniqueInput[]
    connect?: BaseWhereUniqueInput | BaseWhereUniqueInput[]
    update?: BaseUpdateWithWhereUniqueWithoutPartneredToInput | BaseUpdateWithWhereUniqueWithoutPartneredToInput[]
    updateMany?: BaseUpdateManyWithWhereWithoutPartneredToInput | BaseUpdateManyWithWhereWithoutPartneredToInput[]
    deleteMany?: BaseScalarWhereInput | BaseScalarWhereInput[]
  }

  export type BaseUncheckedUpdateManyWithoutSiblingsByNestedInput = {
    create?: XOR<BaseCreateWithoutSiblingsByInput, BaseUncheckedCreateWithoutSiblingsByInput> | BaseCreateWithoutSiblingsByInput[] | BaseUncheckedCreateWithoutSiblingsByInput[]
    connectOrCreate?: BaseCreateOrConnectWithoutSiblingsByInput | BaseCreateOrConnectWithoutSiblingsByInput[]
    upsert?: BaseUpsertWithWhereUniqueWithoutSiblingsByInput | BaseUpsertWithWhereUniqueWithoutSiblingsByInput[]
    set?: BaseWhereUniqueInput | BaseWhereUniqueInput[]
    disconnect?: BaseWhereUniqueInput | BaseWhereUniqueInput[]
    delete?: BaseWhereUniqueInput | BaseWhereUniqueInput[]
    connect?: BaseWhereUniqueInput | BaseWhereUniqueInput[]
    update?: BaseUpdateWithWhereUniqueWithoutSiblingsByInput | BaseUpdateWithWhereUniqueWithoutSiblingsByInput[]
    updateMany?: BaseUpdateManyWithWhereWithoutSiblingsByInput | BaseUpdateManyWithWhereWithoutSiblingsByInput[]
    deleteMany?: BaseScalarWhereInput | BaseScalarWhereInput[]
  }

  export type BaseUncheckedUpdateManyWithoutSiblingsToNestedInput = {
    create?: XOR<BaseCreateWithoutSiblingsToInput, BaseUncheckedCreateWithoutSiblingsToInput> | BaseCreateWithoutSiblingsToInput[] | BaseUncheckedCreateWithoutSiblingsToInput[]
    connectOrCreate?: BaseCreateOrConnectWithoutSiblingsToInput | BaseCreateOrConnectWithoutSiblingsToInput[]
    upsert?: BaseUpsertWithWhereUniqueWithoutSiblingsToInput | BaseUpsertWithWhereUniqueWithoutSiblingsToInput[]
    set?: BaseWhereUniqueInput | BaseWhereUniqueInput[]
    disconnect?: BaseWhereUniqueInput | BaseWhereUniqueInput[]
    delete?: BaseWhereUniqueInput | BaseWhereUniqueInput[]
    connect?: BaseWhereUniqueInput | BaseWhereUniqueInput[]
    update?: BaseUpdateWithWhereUniqueWithoutSiblingsToInput | BaseUpdateWithWhereUniqueWithoutSiblingsToInput[]
    updateMany?: BaseUpdateManyWithWhereWithoutSiblingsToInput | BaseUpdateManyWithWhereWithoutSiblingsToInput[]
    deleteMany?: BaseScalarWhereInput | BaseScalarWhereInput[]
  }

  export type BaseUncheckedUpdateManyWithoutChildrenNestedInput = {
    create?: XOR<BaseCreateWithoutChildrenInput, BaseUncheckedCreateWithoutChildrenInput> | BaseCreateWithoutChildrenInput[] | BaseUncheckedCreateWithoutChildrenInput[]
    connectOrCreate?: BaseCreateOrConnectWithoutChildrenInput | BaseCreateOrConnectWithoutChildrenInput[]
    upsert?: BaseUpsertWithWhereUniqueWithoutChildrenInput | BaseUpsertWithWhereUniqueWithoutChildrenInput[]
    set?: BaseWhereUniqueInput | BaseWhereUniqueInput[]
    disconnect?: BaseWhereUniqueInput | BaseWhereUniqueInput[]
    delete?: BaseWhereUniqueInput | BaseWhereUniqueInput[]
    connect?: BaseWhereUniqueInput | BaseWhereUniqueInput[]
    update?: BaseUpdateWithWhereUniqueWithoutChildrenInput | BaseUpdateWithWhereUniqueWithoutChildrenInput[]
    updateMany?: BaseUpdateManyWithWhereWithoutChildrenInput | BaseUpdateManyWithWhereWithoutChildrenInput[]
    deleteMany?: BaseScalarWhereInput | BaseScalarWhereInput[]
  }

  export type BaseUncheckedUpdateManyWithoutParentsNestedInput = {
    create?: XOR<BaseCreateWithoutParentsInput, BaseUncheckedCreateWithoutParentsInput> | BaseCreateWithoutParentsInput[] | BaseUncheckedCreateWithoutParentsInput[]
    connectOrCreate?: BaseCreateOrConnectWithoutParentsInput | BaseCreateOrConnectWithoutParentsInput[]
    upsert?: BaseUpsertWithWhereUniqueWithoutParentsInput | BaseUpsertWithWhereUniqueWithoutParentsInput[]
    set?: BaseWhereUniqueInput | BaseWhereUniqueInput[]
    disconnect?: BaseWhereUniqueInput | BaseWhereUniqueInput[]
    delete?: BaseWhereUniqueInput | BaseWhereUniqueInput[]
    connect?: BaseWhereUniqueInput | BaseWhereUniqueInput[]
    update?: BaseUpdateWithWhereUniqueWithoutParentsInput | BaseUpdateWithWhereUniqueWithoutParentsInput[]
    updateMany?: BaseUpdateManyWithWhereWithoutParentsInput | BaseUpdateManyWithWhereWithoutParentsInput[]
    deleteMany?: BaseScalarWhereInput | BaseScalarWhereInput[]
  }

  export type RelationsUncheckedUpdateManyWithoutRelationNestedInput = {
    create?: XOR<RelationsCreateWithoutRelationInput, RelationsUncheckedCreateWithoutRelationInput> | RelationsCreateWithoutRelationInput[] | RelationsUncheckedCreateWithoutRelationInput[]
    connectOrCreate?: RelationsCreateOrConnectWithoutRelationInput | RelationsCreateOrConnectWithoutRelationInput[]
    upsert?: RelationsUpsertWithWhereUniqueWithoutRelationInput | RelationsUpsertWithWhereUniqueWithoutRelationInput[]
    createMany?: RelationsCreateManyRelationInputEnvelope
    set?: RelationsWhereUniqueInput | RelationsWhereUniqueInput[]
    disconnect?: RelationsWhereUniqueInput | RelationsWhereUniqueInput[]
    delete?: RelationsWhereUniqueInput | RelationsWhereUniqueInput[]
    connect?: RelationsWhereUniqueInput | RelationsWhereUniqueInput[]
    update?: RelationsUpdateWithWhereUniqueWithoutRelationInput | RelationsUpdateWithWhereUniqueWithoutRelationInput[]
    updateMany?: RelationsUpdateManyWithWhereWithoutRelationInput | RelationsUpdateManyWithWhereWithoutRelationInput[]
    deleteMany?: RelationsScalarWhereInput | RelationsScalarWhereInput[]
  }

  export type RelationsCreatepersonInput = {
    set: string[]
  }

  export type BaseCreateNestedOneWithoutOther_relationsInput = {
    create?: XOR<BaseCreateWithoutOther_relationsInput, BaseUncheckedCreateWithoutOther_relationsInput>
    connectOrCreate?: BaseCreateOrConnectWithoutOther_relationsInput
    connect?: BaseWhereUniqueInput
  }

  export type RelationsUpdatepersonInput = {
    set?: string[]
    push?: string | string[]
  }

  export type BaseUpdateOneRequiredWithoutOther_relationsNestedInput = {
    create?: XOR<BaseCreateWithoutOther_relationsInput, BaseUncheckedCreateWithoutOther_relationsInput>
    connectOrCreate?: BaseCreateOrConnectWithoutOther_relationsInput
    upsert?: BaseUpsertWithoutOther_relationsInput
    connect?: BaseWhereUniqueInput
    update?: XOR<XOR<BaseUpdateToOneWithWhereWithoutOther_relationsInput, BaseUpdateWithoutOther_relationsInput>, BaseUncheckedUpdateWithoutOther_relationsInput>
  }

  export type BaseCreateNestedOneWithoutNamesInput = {
    create?: XOR<BaseCreateWithoutNamesInput, BaseUncheckedCreateWithoutNamesInput>
    connectOrCreate?: BaseCreateOrConnectWithoutNamesInput
    connect?: BaseWhereUniqueInput
  }

  export type BaseUpdateOneRequiredWithoutNamesNestedInput = {
    create?: XOR<BaseCreateWithoutNamesInput, BaseUncheckedCreateWithoutNamesInput>
    connectOrCreate?: BaseCreateOrConnectWithoutNamesInput
    upsert?: BaseUpsertWithoutNamesInput
    connect?: BaseWhereUniqueInput
    update?: XOR<XOR<BaseUpdateToOneWithWhereWithoutNamesInput, BaseUpdateWithoutNamesInput>, BaseUncheckedUpdateWithoutNamesInput>
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type BaseCreateNestedOneWithoutUrlsInput = {
    create?: XOR<BaseCreateWithoutUrlsInput, BaseUncheckedCreateWithoutUrlsInput>
    connectOrCreate?: BaseCreateOrConnectWithoutUrlsInput
    connect?: BaseWhereUniqueInput
  }

  export type BaseUpdateOneRequiredWithoutUrlsNestedInput = {
    create?: XOR<BaseCreateWithoutUrlsInput, BaseUncheckedCreateWithoutUrlsInput>
    connectOrCreate?: BaseCreateOrConnectWithoutUrlsInput
    upsert?: BaseUpsertWithoutUrlsInput
    connect?: BaseWhereUniqueInput
    update?: XOR<XOR<BaseUpdateToOneWithWhereWithoutUrlsInput, BaseUpdateWithoutUrlsInput>, BaseUncheckedUpdateWithoutUrlsInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
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
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NamesCreateWithoutRelationInput = {
    name: string
    lang?: string | null
    note?: string | null
  }

  export type NamesUncheckedCreateWithoutRelationInput = {
    id?: number
    name: string
    lang?: string | null
    note?: string | null
  }

  export type NamesCreateOrConnectWithoutRelationInput = {
    where: NamesWhereUniqueInput
    create: XOR<NamesCreateWithoutRelationInput, NamesUncheckedCreateWithoutRelationInput>
  }

  export type NamesCreateManyRelationInputEnvelope = {
    data: NamesCreateManyRelationInput | NamesCreateManyRelationInput[]
    skipDuplicates?: boolean
  }

  export type UrlsCreateWithoutRelationInput = {
    url: string
    title: string
  }

  export type UrlsUncheckedCreateWithoutRelationInput = {
    id?: number
    url: string
    title: string
  }

  export type UrlsCreateOrConnectWithoutRelationInput = {
    where: UrlsWhereUniqueInput
    create: XOR<UrlsCreateWithoutRelationInput, UrlsUncheckedCreateWithoutRelationInput>
  }

  export type UrlsCreateManyRelationInputEnvelope = {
    data: UrlsCreateManyRelationInput | UrlsCreateManyRelationInput[]
    skipDuplicates?: boolean
  }

  export type BaseCreateWithoutPartneredByInput = {
    slug: string
    name: string
    description?: string | null
    names?: NamesCreateNestedManyWithoutRelationInput
    urls?: UrlsCreateNestedManyWithoutRelationInput
    partneredTo?: BaseCreateNestedManyWithoutPartneredByInput
    siblingsTo?: BaseCreateNestedManyWithoutSiblingsByInput
    siblingsBy?: BaseCreateNestedManyWithoutSiblingsToInput
    parents?: BaseCreateNestedManyWithoutChildrenInput
    children?: BaseCreateNestedManyWithoutParentsInput
    other_relations?: RelationsCreateNestedManyWithoutRelationInput
  }

  export type BaseUncheckedCreateWithoutPartneredByInput = {
    slug: string
    name: string
    description?: string | null
    names?: NamesUncheckedCreateNestedManyWithoutRelationInput
    urls?: UrlsUncheckedCreateNestedManyWithoutRelationInput
    partneredTo?: BaseUncheckedCreateNestedManyWithoutPartneredByInput
    siblingsTo?: BaseUncheckedCreateNestedManyWithoutSiblingsByInput
    siblingsBy?: BaseUncheckedCreateNestedManyWithoutSiblingsToInput
    parents?: BaseUncheckedCreateNestedManyWithoutChildrenInput
    children?: BaseUncheckedCreateNestedManyWithoutParentsInput
    other_relations?: RelationsUncheckedCreateNestedManyWithoutRelationInput
  }

  export type BaseCreateOrConnectWithoutPartneredByInput = {
    where: BaseWhereUniqueInput
    create: XOR<BaseCreateWithoutPartneredByInput, BaseUncheckedCreateWithoutPartneredByInput>
  }

  export type BaseCreateWithoutPartneredToInput = {
    slug: string
    name: string
    description?: string | null
    names?: NamesCreateNestedManyWithoutRelationInput
    urls?: UrlsCreateNestedManyWithoutRelationInput
    partneredBy?: BaseCreateNestedManyWithoutPartneredToInput
    siblingsTo?: BaseCreateNestedManyWithoutSiblingsByInput
    siblingsBy?: BaseCreateNestedManyWithoutSiblingsToInput
    parents?: BaseCreateNestedManyWithoutChildrenInput
    children?: BaseCreateNestedManyWithoutParentsInput
    other_relations?: RelationsCreateNestedManyWithoutRelationInput
  }

  export type BaseUncheckedCreateWithoutPartneredToInput = {
    slug: string
    name: string
    description?: string | null
    names?: NamesUncheckedCreateNestedManyWithoutRelationInput
    urls?: UrlsUncheckedCreateNestedManyWithoutRelationInput
    partneredBy?: BaseUncheckedCreateNestedManyWithoutPartneredToInput
    siblingsTo?: BaseUncheckedCreateNestedManyWithoutSiblingsByInput
    siblingsBy?: BaseUncheckedCreateNestedManyWithoutSiblingsToInput
    parents?: BaseUncheckedCreateNestedManyWithoutChildrenInput
    children?: BaseUncheckedCreateNestedManyWithoutParentsInput
    other_relations?: RelationsUncheckedCreateNestedManyWithoutRelationInput
  }

  export type BaseCreateOrConnectWithoutPartneredToInput = {
    where: BaseWhereUniqueInput
    create: XOR<BaseCreateWithoutPartneredToInput, BaseUncheckedCreateWithoutPartneredToInput>
  }

  export type BaseCreateWithoutSiblingsByInput = {
    slug: string
    name: string
    description?: string | null
    names?: NamesCreateNestedManyWithoutRelationInput
    urls?: UrlsCreateNestedManyWithoutRelationInput
    partneredTo?: BaseCreateNestedManyWithoutPartneredByInput
    partneredBy?: BaseCreateNestedManyWithoutPartneredToInput
    siblingsTo?: BaseCreateNestedManyWithoutSiblingsByInput
    parents?: BaseCreateNestedManyWithoutChildrenInput
    children?: BaseCreateNestedManyWithoutParentsInput
    other_relations?: RelationsCreateNestedManyWithoutRelationInput
  }

  export type BaseUncheckedCreateWithoutSiblingsByInput = {
    slug: string
    name: string
    description?: string | null
    names?: NamesUncheckedCreateNestedManyWithoutRelationInput
    urls?: UrlsUncheckedCreateNestedManyWithoutRelationInput
    partneredTo?: BaseUncheckedCreateNestedManyWithoutPartneredByInput
    partneredBy?: BaseUncheckedCreateNestedManyWithoutPartneredToInput
    siblingsTo?: BaseUncheckedCreateNestedManyWithoutSiblingsByInput
    parents?: BaseUncheckedCreateNestedManyWithoutChildrenInput
    children?: BaseUncheckedCreateNestedManyWithoutParentsInput
    other_relations?: RelationsUncheckedCreateNestedManyWithoutRelationInput
  }

  export type BaseCreateOrConnectWithoutSiblingsByInput = {
    where: BaseWhereUniqueInput
    create: XOR<BaseCreateWithoutSiblingsByInput, BaseUncheckedCreateWithoutSiblingsByInput>
  }

  export type BaseCreateWithoutSiblingsToInput = {
    slug: string
    name: string
    description?: string | null
    names?: NamesCreateNestedManyWithoutRelationInput
    urls?: UrlsCreateNestedManyWithoutRelationInput
    partneredTo?: BaseCreateNestedManyWithoutPartneredByInput
    partneredBy?: BaseCreateNestedManyWithoutPartneredToInput
    siblingsBy?: BaseCreateNestedManyWithoutSiblingsToInput
    parents?: BaseCreateNestedManyWithoutChildrenInput
    children?: BaseCreateNestedManyWithoutParentsInput
    other_relations?: RelationsCreateNestedManyWithoutRelationInput
  }

  export type BaseUncheckedCreateWithoutSiblingsToInput = {
    slug: string
    name: string
    description?: string | null
    names?: NamesUncheckedCreateNestedManyWithoutRelationInput
    urls?: UrlsUncheckedCreateNestedManyWithoutRelationInput
    partneredTo?: BaseUncheckedCreateNestedManyWithoutPartneredByInput
    partneredBy?: BaseUncheckedCreateNestedManyWithoutPartneredToInput
    siblingsBy?: BaseUncheckedCreateNestedManyWithoutSiblingsToInput
    parents?: BaseUncheckedCreateNestedManyWithoutChildrenInput
    children?: BaseUncheckedCreateNestedManyWithoutParentsInput
    other_relations?: RelationsUncheckedCreateNestedManyWithoutRelationInput
  }

  export type BaseCreateOrConnectWithoutSiblingsToInput = {
    where: BaseWhereUniqueInput
    create: XOR<BaseCreateWithoutSiblingsToInput, BaseUncheckedCreateWithoutSiblingsToInput>
  }

  export type BaseCreateWithoutChildrenInput = {
    slug: string
    name: string
    description?: string | null
    names?: NamesCreateNestedManyWithoutRelationInput
    urls?: UrlsCreateNestedManyWithoutRelationInput
    partneredTo?: BaseCreateNestedManyWithoutPartneredByInput
    partneredBy?: BaseCreateNestedManyWithoutPartneredToInput
    siblingsTo?: BaseCreateNestedManyWithoutSiblingsByInput
    siblingsBy?: BaseCreateNestedManyWithoutSiblingsToInput
    parents?: BaseCreateNestedManyWithoutChildrenInput
    other_relations?: RelationsCreateNestedManyWithoutRelationInput
  }

  export type BaseUncheckedCreateWithoutChildrenInput = {
    slug: string
    name: string
    description?: string | null
    names?: NamesUncheckedCreateNestedManyWithoutRelationInput
    urls?: UrlsUncheckedCreateNestedManyWithoutRelationInput
    partneredTo?: BaseUncheckedCreateNestedManyWithoutPartneredByInput
    partneredBy?: BaseUncheckedCreateNestedManyWithoutPartneredToInput
    siblingsTo?: BaseUncheckedCreateNestedManyWithoutSiblingsByInput
    siblingsBy?: BaseUncheckedCreateNestedManyWithoutSiblingsToInput
    parents?: BaseUncheckedCreateNestedManyWithoutChildrenInput
    other_relations?: RelationsUncheckedCreateNestedManyWithoutRelationInput
  }

  export type BaseCreateOrConnectWithoutChildrenInput = {
    where: BaseWhereUniqueInput
    create: XOR<BaseCreateWithoutChildrenInput, BaseUncheckedCreateWithoutChildrenInput>
  }

  export type BaseCreateWithoutParentsInput = {
    slug: string
    name: string
    description?: string | null
    names?: NamesCreateNestedManyWithoutRelationInput
    urls?: UrlsCreateNestedManyWithoutRelationInput
    partneredTo?: BaseCreateNestedManyWithoutPartneredByInput
    partneredBy?: BaseCreateNestedManyWithoutPartneredToInput
    siblingsTo?: BaseCreateNestedManyWithoutSiblingsByInput
    siblingsBy?: BaseCreateNestedManyWithoutSiblingsToInput
    children?: BaseCreateNestedManyWithoutParentsInput
    other_relations?: RelationsCreateNestedManyWithoutRelationInput
  }

  export type BaseUncheckedCreateWithoutParentsInput = {
    slug: string
    name: string
    description?: string | null
    names?: NamesUncheckedCreateNestedManyWithoutRelationInput
    urls?: UrlsUncheckedCreateNestedManyWithoutRelationInput
    partneredTo?: BaseUncheckedCreateNestedManyWithoutPartneredByInput
    partneredBy?: BaseUncheckedCreateNestedManyWithoutPartneredToInput
    siblingsTo?: BaseUncheckedCreateNestedManyWithoutSiblingsByInput
    siblingsBy?: BaseUncheckedCreateNestedManyWithoutSiblingsToInput
    children?: BaseUncheckedCreateNestedManyWithoutParentsInput
    other_relations?: RelationsUncheckedCreateNestedManyWithoutRelationInput
  }

  export type BaseCreateOrConnectWithoutParentsInput = {
    where: BaseWhereUniqueInput
    create: XOR<BaseCreateWithoutParentsInput, BaseUncheckedCreateWithoutParentsInput>
  }

  export type RelationsCreateWithoutRelationInput = {
    person?: RelationsCreatepersonInput | string[]
    relation_type: string
  }

  export type RelationsUncheckedCreateWithoutRelationInput = {
    person?: RelationsCreatepersonInput | string[]
    relation_type: string
  }

  export type RelationsCreateOrConnectWithoutRelationInput = {
    where: RelationsWhereUniqueInput
    create: XOR<RelationsCreateWithoutRelationInput, RelationsUncheckedCreateWithoutRelationInput>
  }

  export type RelationsCreateManyRelationInputEnvelope = {
    data: RelationsCreateManyRelationInput | RelationsCreateManyRelationInput[]
    skipDuplicates?: boolean
  }

  export type NamesUpsertWithWhereUniqueWithoutRelationInput = {
    where: NamesWhereUniqueInput
    update: XOR<NamesUpdateWithoutRelationInput, NamesUncheckedUpdateWithoutRelationInput>
    create: XOR<NamesCreateWithoutRelationInput, NamesUncheckedCreateWithoutRelationInput>
  }

  export type NamesUpdateWithWhereUniqueWithoutRelationInput = {
    where: NamesWhereUniqueInput
    data: XOR<NamesUpdateWithoutRelationInput, NamesUncheckedUpdateWithoutRelationInput>
  }

  export type NamesUpdateManyWithWhereWithoutRelationInput = {
    where: NamesScalarWhereInput
    data: XOR<NamesUpdateManyMutationInput, NamesUncheckedUpdateManyWithoutRelationInput>
  }

  export type NamesScalarWhereInput = {
    AND?: NamesScalarWhereInput | NamesScalarWhereInput[]
    OR?: NamesScalarWhereInput[]
    NOT?: NamesScalarWhereInput | NamesScalarWhereInput[]
    id?: IntFilter<"Names"> | number
    slug?: StringFilter<"Names"> | string
    name?: StringFilter<"Names"> | string
    lang?: StringNullableFilter<"Names"> | string | null
    note?: StringNullableFilter<"Names"> | string | null
  }

  export type UrlsUpsertWithWhereUniqueWithoutRelationInput = {
    where: UrlsWhereUniqueInput
    update: XOR<UrlsUpdateWithoutRelationInput, UrlsUncheckedUpdateWithoutRelationInput>
    create: XOR<UrlsCreateWithoutRelationInput, UrlsUncheckedCreateWithoutRelationInput>
  }

  export type UrlsUpdateWithWhereUniqueWithoutRelationInput = {
    where: UrlsWhereUniqueInput
    data: XOR<UrlsUpdateWithoutRelationInput, UrlsUncheckedUpdateWithoutRelationInput>
  }

  export type UrlsUpdateManyWithWhereWithoutRelationInput = {
    where: UrlsScalarWhereInput
    data: XOR<UrlsUpdateManyMutationInput, UrlsUncheckedUpdateManyWithoutRelationInput>
  }

  export type UrlsScalarWhereInput = {
    AND?: UrlsScalarWhereInput | UrlsScalarWhereInput[]
    OR?: UrlsScalarWhereInput[]
    NOT?: UrlsScalarWhereInput | UrlsScalarWhereInput[]
    id?: IntFilter<"Urls"> | number
    slug?: StringFilter<"Urls"> | string
    url?: StringFilter<"Urls"> | string
    title?: StringFilter<"Urls"> | string
  }

  export type BaseUpsertWithWhereUniqueWithoutPartneredByInput = {
    where: BaseWhereUniqueInput
    update: XOR<BaseUpdateWithoutPartneredByInput, BaseUncheckedUpdateWithoutPartneredByInput>
    create: XOR<BaseCreateWithoutPartneredByInput, BaseUncheckedCreateWithoutPartneredByInput>
  }

  export type BaseUpdateWithWhereUniqueWithoutPartneredByInput = {
    where: BaseWhereUniqueInput
    data: XOR<BaseUpdateWithoutPartneredByInput, BaseUncheckedUpdateWithoutPartneredByInput>
  }

  export type BaseUpdateManyWithWhereWithoutPartneredByInput = {
    where: BaseScalarWhereInput
    data: XOR<BaseUpdateManyMutationInput, BaseUncheckedUpdateManyWithoutPartneredByInput>
  }

  export type BaseScalarWhereInput = {
    AND?: BaseScalarWhereInput | BaseScalarWhereInput[]
    OR?: BaseScalarWhereInput[]
    NOT?: BaseScalarWhereInput | BaseScalarWhereInput[]
    slug?: StringFilter<"Base"> | string
    name?: StringFilter<"Base"> | string
    description?: StringNullableFilter<"Base"> | string | null
  }

  export type BaseUpsertWithWhereUniqueWithoutPartneredToInput = {
    where: BaseWhereUniqueInput
    update: XOR<BaseUpdateWithoutPartneredToInput, BaseUncheckedUpdateWithoutPartneredToInput>
    create: XOR<BaseCreateWithoutPartneredToInput, BaseUncheckedCreateWithoutPartneredToInput>
  }

  export type BaseUpdateWithWhereUniqueWithoutPartneredToInput = {
    where: BaseWhereUniqueInput
    data: XOR<BaseUpdateWithoutPartneredToInput, BaseUncheckedUpdateWithoutPartneredToInput>
  }

  export type BaseUpdateManyWithWhereWithoutPartneredToInput = {
    where: BaseScalarWhereInput
    data: XOR<BaseUpdateManyMutationInput, BaseUncheckedUpdateManyWithoutPartneredToInput>
  }

  export type BaseUpsertWithWhereUniqueWithoutSiblingsByInput = {
    where: BaseWhereUniqueInput
    update: XOR<BaseUpdateWithoutSiblingsByInput, BaseUncheckedUpdateWithoutSiblingsByInput>
    create: XOR<BaseCreateWithoutSiblingsByInput, BaseUncheckedCreateWithoutSiblingsByInput>
  }

  export type BaseUpdateWithWhereUniqueWithoutSiblingsByInput = {
    where: BaseWhereUniqueInput
    data: XOR<BaseUpdateWithoutSiblingsByInput, BaseUncheckedUpdateWithoutSiblingsByInput>
  }

  export type BaseUpdateManyWithWhereWithoutSiblingsByInput = {
    where: BaseScalarWhereInput
    data: XOR<BaseUpdateManyMutationInput, BaseUncheckedUpdateManyWithoutSiblingsByInput>
  }

  export type BaseUpsertWithWhereUniqueWithoutSiblingsToInput = {
    where: BaseWhereUniqueInput
    update: XOR<BaseUpdateWithoutSiblingsToInput, BaseUncheckedUpdateWithoutSiblingsToInput>
    create: XOR<BaseCreateWithoutSiblingsToInput, BaseUncheckedCreateWithoutSiblingsToInput>
  }

  export type BaseUpdateWithWhereUniqueWithoutSiblingsToInput = {
    where: BaseWhereUniqueInput
    data: XOR<BaseUpdateWithoutSiblingsToInput, BaseUncheckedUpdateWithoutSiblingsToInput>
  }

  export type BaseUpdateManyWithWhereWithoutSiblingsToInput = {
    where: BaseScalarWhereInput
    data: XOR<BaseUpdateManyMutationInput, BaseUncheckedUpdateManyWithoutSiblingsToInput>
  }

  export type BaseUpsertWithWhereUniqueWithoutChildrenInput = {
    where: BaseWhereUniqueInput
    update: XOR<BaseUpdateWithoutChildrenInput, BaseUncheckedUpdateWithoutChildrenInput>
    create: XOR<BaseCreateWithoutChildrenInput, BaseUncheckedCreateWithoutChildrenInput>
  }

  export type BaseUpdateWithWhereUniqueWithoutChildrenInput = {
    where: BaseWhereUniqueInput
    data: XOR<BaseUpdateWithoutChildrenInput, BaseUncheckedUpdateWithoutChildrenInput>
  }

  export type BaseUpdateManyWithWhereWithoutChildrenInput = {
    where: BaseScalarWhereInput
    data: XOR<BaseUpdateManyMutationInput, BaseUncheckedUpdateManyWithoutChildrenInput>
  }

  export type BaseUpsertWithWhereUniqueWithoutParentsInput = {
    where: BaseWhereUniqueInput
    update: XOR<BaseUpdateWithoutParentsInput, BaseUncheckedUpdateWithoutParentsInput>
    create: XOR<BaseCreateWithoutParentsInput, BaseUncheckedCreateWithoutParentsInput>
  }

  export type BaseUpdateWithWhereUniqueWithoutParentsInput = {
    where: BaseWhereUniqueInput
    data: XOR<BaseUpdateWithoutParentsInput, BaseUncheckedUpdateWithoutParentsInput>
  }

  export type BaseUpdateManyWithWhereWithoutParentsInput = {
    where: BaseScalarWhereInput
    data: XOR<BaseUpdateManyMutationInput, BaseUncheckedUpdateManyWithoutParentsInput>
  }

  export type RelationsUpsertWithWhereUniqueWithoutRelationInput = {
    where: RelationsWhereUniqueInput
    update: XOR<RelationsUpdateWithoutRelationInput, RelationsUncheckedUpdateWithoutRelationInput>
    create: XOR<RelationsCreateWithoutRelationInput, RelationsUncheckedCreateWithoutRelationInput>
  }

  export type RelationsUpdateWithWhereUniqueWithoutRelationInput = {
    where: RelationsWhereUniqueInput
    data: XOR<RelationsUpdateWithoutRelationInput, RelationsUncheckedUpdateWithoutRelationInput>
  }

  export type RelationsUpdateManyWithWhereWithoutRelationInput = {
    where: RelationsScalarWhereInput
    data: XOR<RelationsUpdateManyMutationInput, RelationsUncheckedUpdateManyWithoutRelationInput>
  }

  export type RelationsScalarWhereInput = {
    AND?: RelationsScalarWhereInput | RelationsScalarWhereInput[]
    OR?: RelationsScalarWhereInput[]
    NOT?: RelationsScalarWhereInput | RelationsScalarWhereInput[]
    slug?: StringFilter<"Relations"> | string
    person?: StringNullableListFilter<"Relations">
    relation_type?: StringFilter<"Relations"> | string
  }

  export type BaseCreateWithoutOther_relationsInput = {
    slug: string
    name: string
    description?: string | null
    names?: NamesCreateNestedManyWithoutRelationInput
    urls?: UrlsCreateNestedManyWithoutRelationInput
    partneredTo?: BaseCreateNestedManyWithoutPartneredByInput
    partneredBy?: BaseCreateNestedManyWithoutPartneredToInput
    siblingsTo?: BaseCreateNestedManyWithoutSiblingsByInput
    siblingsBy?: BaseCreateNestedManyWithoutSiblingsToInput
    parents?: BaseCreateNestedManyWithoutChildrenInput
    children?: BaseCreateNestedManyWithoutParentsInput
  }

  export type BaseUncheckedCreateWithoutOther_relationsInput = {
    slug: string
    name: string
    description?: string | null
    names?: NamesUncheckedCreateNestedManyWithoutRelationInput
    urls?: UrlsUncheckedCreateNestedManyWithoutRelationInput
    partneredTo?: BaseUncheckedCreateNestedManyWithoutPartneredByInput
    partneredBy?: BaseUncheckedCreateNestedManyWithoutPartneredToInput
    siblingsTo?: BaseUncheckedCreateNestedManyWithoutSiblingsByInput
    siblingsBy?: BaseUncheckedCreateNestedManyWithoutSiblingsToInput
    parents?: BaseUncheckedCreateNestedManyWithoutChildrenInput
    children?: BaseUncheckedCreateNestedManyWithoutParentsInput
  }

  export type BaseCreateOrConnectWithoutOther_relationsInput = {
    where: BaseWhereUniqueInput
    create: XOR<BaseCreateWithoutOther_relationsInput, BaseUncheckedCreateWithoutOther_relationsInput>
  }

  export type BaseUpsertWithoutOther_relationsInput = {
    update: XOR<BaseUpdateWithoutOther_relationsInput, BaseUncheckedUpdateWithoutOther_relationsInput>
    create: XOR<BaseCreateWithoutOther_relationsInput, BaseUncheckedCreateWithoutOther_relationsInput>
    where?: BaseWhereInput
  }

  export type BaseUpdateToOneWithWhereWithoutOther_relationsInput = {
    where?: BaseWhereInput
    data: XOR<BaseUpdateWithoutOther_relationsInput, BaseUncheckedUpdateWithoutOther_relationsInput>
  }

  export type BaseUpdateWithoutOther_relationsInput = {
    slug?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    names?: NamesUpdateManyWithoutRelationNestedInput
    urls?: UrlsUpdateManyWithoutRelationNestedInput
    partneredTo?: BaseUpdateManyWithoutPartneredByNestedInput
    partneredBy?: BaseUpdateManyWithoutPartneredToNestedInput
    siblingsTo?: BaseUpdateManyWithoutSiblingsByNestedInput
    siblingsBy?: BaseUpdateManyWithoutSiblingsToNestedInput
    parents?: BaseUpdateManyWithoutChildrenNestedInput
    children?: BaseUpdateManyWithoutParentsNestedInput
  }

  export type BaseUncheckedUpdateWithoutOther_relationsInput = {
    slug?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    names?: NamesUncheckedUpdateManyWithoutRelationNestedInput
    urls?: UrlsUncheckedUpdateManyWithoutRelationNestedInput
    partneredTo?: BaseUncheckedUpdateManyWithoutPartneredByNestedInput
    partneredBy?: BaseUncheckedUpdateManyWithoutPartneredToNestedInput
    siblingsTo?: BaseUncheckedUpdateManyWithoutSiblingsByNestedInput
    siblingsBy?: BaseUncheckedUpdateManyWithoutSiblingsToNestedInput
    parents?: BaseUncheckedUpdateManyWithoutChildrenNestedInput
    children?: BaseUncheckedUpdateManyWithoutParentsNestedInput
  }

  export type BaseCreateWithoutNamesInput = {
    slug: string
    name: string
    description?: string | null
    urls?: UrlsCreateNestedManyWithoutRelationInput
    partneredTo?: BaseCreateNestedManyWithoutPartneredByInput
    partneredBy?: BaseCreateNestedManyWithoutPartneredToInput
    siblingsTo?: BaseCreateNestedManyWithoutSiblingsByInput
    siblingsBy?: BaseCreateNestedManyWithoutSiblingsToInput
    parents?: BaseCreateNestedManyWithoutChildrenInput
    children?: BaseCreateNestedManyWithoutParentsInput
    other_relations?: RelationsCreateNestedManyWithoutRelationInput
  }

  export type BaseUncheckedCreateWithoutNamesInput = {
    slug: string
    name: string
    description?: string | null
    urls?: UrlsUncheckedCreateNestedManyWithoutRelationInput
    partneredTo?: BaseUncheckedCreateNestedManyWithoutPartneredByInput
    partneredBy?: BaseUncheckedCreateNestedManyWithoutPartneredToInput
    siblingsTo?: BaseUncheckedCreateNestedManyWithoutSiblingsByInput
    siblingsBy?: BaseUncheckedCreateNestedManyWithoutSiblingsToInput
    parents?: BaseUncheckedCreateNestedManyWithoutChildrenInput
    children?: BaseUncheckedCreateNestedManyWithoutParentsInput
    other_relations?: RelationsUncheckedCreateNestedManyWithoutRelationInput
  }

  export type BaseCreateOrConnectWithoutNamesInput = {
    where: BaseWhereUniqueInput
    create: XOR<BaseCreateWithoutNamesInput, BaseUncheckedCreateWithoutNamesInput>
  }

  export type BaseUpsertWithoutNamesInput = {
    update: XOR<BaseUpdateWithoutNamesInput, BaseUncheckedUpdateWithoutNamesInput>
    create: XOR<BaseCreateWithoutNamesInput, BaseUncheckedCreateWithoutNamesInput>
    where?: BaseWhereInput
  }

  export type BaseUpdateToOneWithWhereWithoutNamesInput = {
    where?: BaseWhereInput
    data: XOR<BaseUpdateWithoutNamesInput, BaseUncheckedUpdateWithoutNamesInput>
  }

  export type BaseUpdateWithoutNamesInput = {
    slug?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    urls?: UrlsUpdateManyWithoutRelationNestedInput
    partneredTo?: BaseUpdateManyWithoutPartneredByNestedInput
    partneredBy?: BaseUpdateManyWithoutPartneredToNestedInput
    siblingsTo?: BaseUpdateManyWithoutSiblingsByNestedInput
    siblingsBy?: BaseUpdateManyWithoutSiblingsToNestedInput
    parents?: BaseUpdateManyWithoutChildrenNestedInput
    children?: BaseUpdateManyWithoutParentsNestedInput
    other_relations?: RelationsUpdateManyWithoutRelationNestedInput
  }

  export type BaseUncheckedUpdateWithoutNamesInput = {
    slug?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    urls?: UrlsUncheckedUpdateManyWithoutRelationNestedInput
    partneredTo?: BaseUncheckedUpdateManyWithoutPartneredByNestedInput
    partneredBy?: BaseUncheckedUpdateManyWithoutPartneredToNestedInput
    siblingsTo?: BaseUncheckedUpdateManyWithoutSiblingsByNestedInput
    siblingsBy?: BaseUncheckedUpdateManyWithoutSiblingsToNestedInput
    parents?: BaseUncheckedUpdateManyWithoutChildrenNestedInput
    children?: BaseUncheckedUpdateManyWithoutParentsNestedInput
    other_relations?: RelationsUncheckedUpdateManyWithoutRelationNestedInput
  }

  export type BaseCreateWithoutUrlsInput = {
    slug: string
    name: string
    description?: string | null
    names?: NamesCreateNestedManyWithoutRelationInput
    partneredTo?: BaseCreateNestedManyWithoutPartneredByInput
    partneredBy?: BaseCreateNestedManyWithoutPartneredToInput
    siblingsTo?: BaseCreateNestedManyWithoutSiblingsByInput
    siblingsBy?: BaseCreateNestedManyWithoutSiblingsToInput
    parents?: BaseCreateNestedManyWithoutChildrenInput
    children?: BaseCreateNestedManyWithoutParentsInput
    other_relations?: RelationsCreateNestedManyWithoutRelationInput
  }

  export type BaseUncheckedCreateWithoutUrlsInput = {
    slug: string
    name: string
    description?: string | null
    names?: NamesUncheckedCreateNestedManyWithoutRelationInput
    partneredTo?: BaseUncheckedCreateNestedManyWithoutPartneredByInput
    partneredBy?: BaseUncheckedCreateNestedManyWithoutPartneredToInput
    siblingsTo?: BaseUncheckedCreateNestedManyWithoutSiblingsByInput
    siblingsBy?: BaseUncheckedCreateNestedManyWithoutSiblingsToInput
    parents?: BaseUncheckedCreateNestedManyWithoutChildrenInput
    children?: BaseUncheckedCreateNestedManyWithoutParentsInput
    other_relations?: RelationsUncheckedCreateNestedManyWithoutRelationInput
  }

  export type BaseCreateOrConnectWithoutUrlsInput = {
    where: BaseWhereUniqueInput
    create: XOR<BaseCreateWithoutUrlsInput, BaseUncheckedCreateWithoutUrlsInput>
  }

  export type BaseUpsertWithoutUrlsInput = {
    update: XOR<BaseUpdateWithoutUrlsInput, BaseUncheckedUpdateWithoutUrlsInput>
    create: XOR<BaseCreateWithoutUrlsInput, BaseUncheckedCreateWithoutUrlsInput>
    where?: BaseWhereInput
  }

  export type BaseUpdateToOneWithWhereWithoutUrlsInput = {
    where?: BaseWhereInput
    data: XOR<BaseUpdateWithoutUrlsInput, BaseUncheckedUpdateWithoutUrlsInput>
  }

  export type BaseUpdateWithoutUrlsInput = {
    slug?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    names?: NamesUpdateManyWithoutRelationNestedInput
    partneredTo?: BaseUpdateManyWithoutPartneredByNestedInput
    partneredBy?: BaseUpdateManyWithoutPartneredToNestedInput
    siblingsTo?: BaseUpdateManyWithoutSiblingsByNestedInput
    siblingsBy?: BaseUpdateManyWithoutSiblingsToNestedInput
    parents?: BaseUpdateManyWithoutChildrenNestedInput
    children?: BaseUpdateManyWithoutParentsNestedInput
    other_relations?: RelationsUpdateManyWithoutRelationNestedInput
  }

  export type BaseUncheckedUpdateWithoutUrlsInput = {
    slug?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    names?: NamesUncheckedUpdateManyWithoutRelationNestedInput
    partneredTo?: BaseUncheckedUpdateManyWithoutPartneredByNestedInput
    partneredBy?: BaseUncheckedUpdateManyWithoutPartneredToNestedInput
    siblingsTo?: BaseUncheckedUpdateManyWithoutSiblingsByNestedInput
    siblingsBy?: BaseUncheckedUpdateManyWithoutSiblingsToNestedInput
    parents?: BaseUncheckedUpdateManyWithoutChildrenNestedInput
    children?: BaseUncheckedUpdateManyWithoutParentsNestedInput
    other_relations?: RelationsUncheckedUpdateManyWithoutRelationNestedInput
  }

  export type NamesCreateManyRelationInput = {
    id?: number
    name: string
    lang?: string | null
    note?: string | null
  }

  export type UrlsCreateManyRelationInput = {
    id?: number
    url: string
    title: string
  }

  export type RelationsCreateManyRelationInput = {
    person?: RelationsCreatepersonInput | string[]
    relation_type: string
  }

  export type NamesUpdateWithoutRelationInput = {
    name?: StringFieldUpdateOperationsInput | string
    lang?: NullableStringFieldUpdateOperationsInput | string | null
    note?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type NamesUncheckedUpdateWithoutRelationInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    lang?: NullableStringFieldUpdateOperationsInput | string | null
    note?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type NamesUncheckedUpdateManyWithoutRelationInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    lang?: NullableStringFieldUpdateOperationsInput | string | null
    note?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UrlsUpdateWithoutRelationInput = {
    url?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
  }

  export type UrlsUncheckedUpdateWithoutRelationInput = {
    id?: IntFieldUpdateOperationsInput | number
    url?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
  }

  export type UrlsUncheckedUpdateManyWithoutRelationInput = {
    id?: IntFieldUpdateOperationsInput | number
    url?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
  }

  export type BaseUpdateWithoutPartneredByInput = {
    slug?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    names?: NamesUpdateManyWithoutRelationNestedInput
    urls?: UrlsUpdateManyWithoutRelationNestedInput
    partneredTo?: BaseUpdateManyWithoutPartneredByNestedInput
    siblingsTo?: BaseUpdateManyWithoutSiblingsByNestedInput
    siblingsBy?: BaseUpdateManyWithoutSiblingsToNestedInput
    parents?: BaseUpdateManyWithoutChildrenNestedInput
    children?: BaseUpdateManyWithoutParentsNestedInput
    other_relations?: RelationsUpdateManyWithoutRelationNestedInput
  }

  export type BaseUncheckedUpdateWithoutPartneredByInput = {
    slug?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    names?: NamesUncheckedUpdateManyWithoutRelationNestedInput
    urls?: UrlsUncheckedUpdateManyWithoutRelationNestedInput
    partneredTo?: BaseUncheckedUpdateManyWithoutPartneredByNestedInput
    siblingsTo?: BaseUncheckedUpdateManyWithoutSiblingsByNestedInput
    siblingsBy?: BaseUncheckedUpdateManyWithoutSiblingsToNestedInput
    parents?: BaseUncheckedUpdateManyWithoutChildrenNestedInput
    children?: BaseUncheckedUpdateManyWithoutParentsNestedInput
    other_relations?: RelationsUncheckedUpdateManyWithoutRelationNestedInput
  }

  export type BaseUncheckedUpdateManyWithoutPartneredByInput = {
    slug?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type BaseUpdateWithoutPartneredToInput = {
    slug?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    names?: NamesUpdateManyWithoutRelationNestedInput
    urls?: UrlsUpdateManyWithoutRelationNestedInput
    partneredBy?: BaseUpdateManyWithoutPartneredToNestedInput
    siblingsTo?: BaseUpdateManyWithoutSiblingsByNestedInput
    siblingsBy?: BaseUpdateManyWithoutSiblingsToNestedInput
    parents?: BaseUpdateManyWithoutChildrenNestedInput
    children?: BaseUpdateManyWithoutParentsNestedInput
    other_relations?: RelationsUpdateManyWithoutRelationNestedInput
  }

  export type BaseUncheckedUpdateWithoutPartneredToInput = {
    slug?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    names?: NamesUncheckedUpdateManyWithoutRelationNestedInput
    urls?: UrlsUncheckedUpdateManyWithoutRelationNestedInput
    partneredBy?: BaseUncheckedUpdateManyWithoutPartneredToNestedInput
    siblingsTo?: BaseUncheckedUpdateManyWithoutSiblingsByNestedInput
    siblingsBy?: BaseUncheckedUpdateManyWithoutSiblingsToNestedInput
    parents?: BaseUncheckedUpdateManyWithoutChildrenNestedInput
    children?: BaseUncheckedUpdateManyWithoutParentsNestedInput
    other_relations?: RelationsUncheckedUpdateManyWithoutRelationNestedInput
  }

  export type BaseUncheckedUpdateManyWithoutPartneredToInput = {
    slug?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type BaseUpdateWithoutSiblingsByInput = {
    slug?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    names?: NamesUpdateManyWithoutRelationNestedInput
    urls?: UrlsUpdateManyWithoutRelationNestedInput
    partneredTo?: BaseUpdateManyWithoutPartneredByNestedInput
    partneredBy?: BaseUpdateManyWithoutPartneredToNestedInput
    siblingsTo?: BaseUpdateManyWithoutSiblingsByNestedInput
    parents?: BaseUpdateManyWithoutChildrenNestedInput
    children?: BaseUpdateManyWithoutParentsNestedInput
    other_relations?: RelationsUpdateManyWithoutRelationNestedInput
  }

  export type BaseUncheckedUpdateWithoutSiblingsByInput = {
    slug?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    names?: NamesUncheckedUpdateManyWithoutRelationNestedInput
    urls?: UrlsUncheckedUpdateManyWithoutRelationNestedInput
    partneredTo?: BaseUncheckedUpdateManyWithoutPartneredByNestedInput
    partneredBy?: BaseUncheckedUpdateManyWithoutPartneredToNestedInput
    siblingsTo?: BaseUncheckedUpdateManyWithoutSiblingsByNestedInput
    parents?: BaseUncheckedUpdateManyWithoutChildrenNestedInput
    children?: BaseUncheckedUpdateManyWithoutParentsNestedInput
    other_relations?: RelationsUncheckedUpdateManyWithoutRelationNestedInput
  }

  export type BaseUncheckedUpdateManyWithoutSiblingsByInput = {
    slug?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type BaseUpdateWithoutSiblingsToInput = {
    slug?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    names?: NamesUpdateManyWithoutRelationNestedInput
    urls?: UrlsUpdateManyWithoutRelationNestedInput
    partneredTo?: BaseUpdateManyWithoutPartneredByNestedInput
    partneredBy?: BaseUpdateManyWithoutPartneredToNestedInput
    siblingsBy?: BaseUpdateManyWithoutSiblingsToNestedInput
    parents?: BaseUpdateManyWithoutChildrenNestedInput
    children?: BaseUpdateManyWithoutParentsNestedInput
    other_relations?: RelationsUpdateManyWithoutRelationNestedInput
  }

  export type BaseUncheckedUpdateWithoutSiblingsToInput = {
    slug?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    names?: NamesUncheckedUpdateManyWithoutRelationNestedInput
    urls?: UrlsUncheckedUpdateManyWithoutRelationNestedInput
    partneredTo?: BaseUncheckedUpdateManyWithoutPartneredByNestedInput
    partneredBy?: BaseUncheckedUpdateManyWithoutPartneredToNestedInput
    siblingsBy?: BaseUncheckedUpdateManyWithoutSiblingsToNestedInput
    parents?: BaseUncheckedUpdateManyWithoutChildrenNestedInput
    children?: BaseUncheckedUpdateManyWithoutParentsNestedInput
    other_relations?: RelationsUncheckedUpdateManyWithoutRelationNestedInput
  }

  export type BaseUncheckedUpdateManyWithoutSiblingsToInput = {
    slug?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type BaseUpdateWithoutChildrenInput = {
    slug?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    names?: NamesUpdateManyWithoutRelationNestedInput
    urls?: UrlsUpdateManyWithoutRelationNestedInput
    partneredTo?: BaseUpdateManyWithoutPartneredByNestedInput
    partneredBy?: BaseUpdateManyWithoutPartneredToNestedInput
    siblingsTo?: BaseUpdateManyWithoutSiblingsByNestedInput
    siblingsBy?: BaseUpdateManyWithoutSiblingsToNestedInput
    parents?: BaseUpdateManyWithoutChildrenNestedInput
    other_relations?: RelationsUpdateManyWithoutRelationNestedInput
  }

  export type BaseUncheckedUpdateWithoutChildrenInput = {
    slug?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    names?: NamesUncheckedUpdateManyWithoutRelationNestedInput
    urls?: UrlsUncheckedUpdateManyWithoutRelationNestedInput
    partneredTo?: BaseUncheckedUpdateManyWithoutPartneredByNestedInput
    partneredBy?: BaseUncheckedUpdateManyWithoutPartneredToNestedInput
    siblingsTo?: BaseUncheckedUpdateManyWithoutSiblingsByNestedInput
    siblingsBy?: BaseUncheckedUpdateManyWithoutSiblingsToNestedInput
    parents?: BaseUncheckedUpdateManyWithoutChildrenNestedInput
    other_relations?: RelationsUncheckedUpdateManyWithoutRelationNestedInput
  }

  export type BaseUncheckedUpdateManyWithoutChildrenInput = {
    slug?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type BaseUpdateWithoutParentsInput = {
    slug?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    names?: NamesUpdateManyWithoutRelationNestedInput
    urls?: UrlsUpdateManyWithoutRelationNestedInput
    partneredTo?: BaseUpdateManyWithoutPartneredByNestedInput
    partneredBy?: BaseUpdateManyWithoutPartneredToNestedInput
    siblingsTo?: BaseUpdateManyWithoutSiblingsByNestedInput
    siblingsBy?: BaseUpdateManyWithoutSiblingsToNestedInput
    children?: BaseUpdateManyWithoutParentsNestedInput
    other_relations?: RelationsUpdateManyWithoutRelationNestedInput
  }

  export type BaseUncheckedUpdateWithoutParentsInput = {
    slug?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    names?: NamesUncheckedUpdateManyWithoutRelationNestedInput
    urls?: UrlsUncheckedUpdateManyWithoutRelationNestedInput
    partneredTo?: BaseUncheckedUpdateManyWithoutPartneredByNestedInput
    partneredBy?: BaseUncheckedUpdateManyWithoutPartneredToNestedInput
    siblingsTo?: BaseUncheckedUpdateManyWithoutSiblingsByNestedInput
    siblingsBy?: BaseUncheckedUpdateManyWithoutSiblingsToNestedInput
    children?: BaseUncheckedUpdateManyWithoutParentsNestedInput
    other_relations?: RelationsUncheckedUpdateManyWithoutRelationNestedInput
  }

  export type BaseUncheckedUpdateManyWithoutParentsInput = {
    slug?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type RelationsUpdateWithoutRelationInput = {
    person?: RelationsUpdatepersonInput | string[]
    relation_type?: StringFieldUpdateOperationsInput | string
  }

  export type RelationsUncheckedUpdateWithoutRelationInput = {
    person?: RelationsUpdatepersonInput | string[]
    relation_type?: StringFieldUpdateOperationsInput | string
  }

  export type RelationsUncheckedUpdateManyWithoutRelationInput = {
    person?: RelationsUpdatepersonInput | string[]
    relation_type?: StringFieldUpdateOperationsInput | string
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