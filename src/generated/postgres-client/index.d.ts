
/**
 * Client
**/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Tower
 * 
 */
export type Tower = $Result.DefaultSelection<Prisma.$TowerPayload>
/**
 * Model Unit
 * 
 */
export type Unit = $Result.DefaultSelection<Prisma.$UnitPayload>
/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Package
 * 
 */
export type Package = $Result.DefaultSelection<Prisma.$PackagePayload>
/**
 * Model PickupToken
 * 
 */
export type PickupToken = $Result.DefaultSelection<Prisma.$PickupTokenPayload>
/**
 * Model PackageHistory
 * 
 */
export type PackageHistory = $Result.DefaultSelection<Prisma.$PackageHistoryPayload>
/**
 * Model Notification
 * 
 */
export type Notification = $Result.DefaultSelection<Prisma.$NotificationPayload>
/**
 * Model NotificationDelivery
 * 
 */
export type NotificationDelivery = $Result.DefaultSelection<Prisma.$NotificationDeliveryPayload>
/**
 * Model PushSubscription
 * 
 */
export type PushSubscription = $Result.DefaultSelection<Prisma.$PushSubscriptionPayload>
/**
 * Model AuditLog
 * 
 */
export type AuditLog = $Result.DefaultSelection<Prisma.$AuditLogPayload>
/**
 * Model AuthThrottle
 * 
 */
export type AuthThrottle = $Result.DefaultSelection<Prisma.$AuthThrottlePayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Role: {
  ADMIN: 'ADMIN',
  PORTER: 'PORTER',
  RESIDENT: 'RESIDENT'
};

export type Role = (typeof Role)[keyof typeof Role]


export const PackageStatus: {
  RECEIVED: 'RECEIVED',
  NOTIFIED: 'NOTIFIED',
  TOKEN_GENERATED: 'TOKEN_GENERATED',
  PICKED_UP: 'PICKED_UP'
};

export type PackageStatus = (typeof PackageStatus)[keyof typeof PackageStatus]


export const HistoryType: {
  CREATED: 'CREATED',
  NOTIFIED: 'NOTIFIED',
  TOKEN_GENERATED: 'TOKEN_GENERATED',
  PICKED_UP: 'PICKED_UP',
  PROFILE_UPDATED: 'PROFILE_UPDATED'
};

export type HistoryType = (typeof HistoryType)[keyof typeof HistoryType]


export const NotificationType: {
  PACKAGE_UPDATE: 'PACKAGE_UPDATE',
  TOKEN_READY: 'TOKEN_READY',
  OPERATIONAL: 'OPERATIONAL',
  PROFILE_SECURITY: 'PROFILE_SECURITY'
};

export type NotificationType = (typeof NotificationType)[keyof typeof NotificationType]


export const DeliveryChannel: {
  IN_APP: 'IN_APP',
  PUSH: 'PUSH',
  WHATSAPP: 'WHATSAPP'
};

export type DeliveryChannel = (typeof DeliveryChannel)[keyof typeof DeliveryChannel]


export const DeliveryStatus: {
  PENDING: 'PENDING',
  SENT: 'SENT',
  SKIPPED: 'SKIPPED',
  FAILED: 'FAILED'
};

export type DeliveryStatus = (typeof DeliveryStatus)[keyof typeof DeliveryStatus]


export const AuditAction: {
  LOGIN_SUCCESS: 'LOGIN_SUCCESS',
  LOGIN_FAILED: 'LOGIN_FAILED',
  PORTER_CREATED: 'PORTER_CREATED',
  RESIDENT_CREATED: 'RESIDENT_CREATED',
  RESIDENT_UPDATED: 'RESIDENT_UPDATED',
  RESIDENT_ARCHIVED: 'RESIDENT_ARCHIVED',
  RESIDENT_PASSWORD_CHANGED: 'RESIDENT_PASSWORD_CHANGED',
  PROFILE_UPDATED: 'PROFILE_UPDATED',
  UNIT_CREATED: 'UNIT_CREATED',
  PACKAGE_CREATED: 'PACKAGE_CREATED',
  TOKEN_GENERATED: 'TOKEN_GENERATED',
  TOKEN_VALIDATED: 'TOKEN_VALIDATED',
  PUSH_SUBSCRIBED: 'PUSH_SUBSCRIBED',
  PUSH_UNSUBSCRIBED: 'PUSH_UNSUBSCRIBED',
  NOTIFICATION_DELIVERED: 'NOTIFICATION_DELIVERED',
  NOTIFICATION_FAILED: 'NOTIFICATION_FAILED'
};

export type AuditAction = (typeof AuditAction)[keyof typeof AuditAction]


export const AuditEntityType: {
  AUTH: 'AUTH',
  USER: 'USER',
  UNIT: 'UNIT',
  PACKAGE: 'PACKAGE',
  NOTIFICATION: 'NOTIFICATION'
};

export type AuditEntityType = (typeof AuditEntityType)[keyof typeof AuditEntityType]

}

export type Role = $Enums.Role

export const Role: typeof $Enums.Role

export type PackageStatus = $Enums.PackageStatus

export const PackageStatus: typeof $Enums.PackageStatus

export type HistoryType = $Enums.HistoryType

export const HistoryType: typeof $Enums.HistoryType

export type NotificationType = $Enums.NotificationType

export const NotificationType: typeof $Enums.NotificationType

export type DeliveryChannel = $Enums.DeliveryChannel

export const DeliveryChannel: typeof $Enums.DeliveryChannel

export type DeliveryStatus = $Enums.DeliveryStatus

export const DeliveryStatus: typeof $Enums.DeliveryStatus

export type AuditAction = $Enums.AuditAction

export const AuditAction: typeof $Enums.AuditAction

export type AuditEntityType = $Enums.AuditEntityType

export const AuditEntityType: typeof $Enums.AuditEntityType

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient({
 *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
 * })
 * // Fetch zero or more Towers
 * const towers = await prisma.tower.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient({
   *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
   * })
   * // Fetch zero or more Towers
   * const towers = await prisma.tower.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
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
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://www.prisma.io/docs/orm/prisma-client/queries/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.tower`: Exposes CRUD operations for the **Tower** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Towers
    * const towers = await prisma.tower.findMany()
    * ```
    */
  get tower(): Prisma.TowerDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.unit`: Exposes CRUD operations for the **Unit** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Units
    * const units = await prisma.unit.findMany()
    * ```
    */
  get unit(): Prisma.UnitDelegate<ExtArgs, ClientOptions>;

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
   * `prisma.package`: Exposes CRUD operations for the **Package** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Packages
    * const packages = await prisma.package.findMany()
    * ```
    */
  get package(): Prisma.PackageDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.pickupToken`: Exposes CRUD operations for the **PickupToken** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PickupTokens
    * const pickupTokens = await prisma.pickupToken.findMany()
    * ```
    */
  get pickupToken(): Prisma.PickupTokenDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.packageHistory`: Exposes CRUD operations for the **PackageHistory** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PackageHistories
    * const packageHistories = await prisma.packageHistory.findMany()
    * ```
    */
  get packageHistory(): Prisma.PackageHistoryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.notification`: Exposes CRUD operations for the **Notification** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Notifications
    * const notifications = await prisma.notification.findMany()
    * ```
    */
  get notification(): Prisma.NotificationDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.notificationDelivery`: Exposes CRUD operations for the **NotificationDelivery** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more NotificationDeliveries
    * const notificationDeliveries = await prisma.notificationDelivery.findMany()
    * ```
    */
  get notificationDelivery(): Prisma.NotificationDeliveryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.pushSubscription`: Exposes CRUD operations for the **PushSubscription** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PushSubscriptions
    * const pushSubscriptions = await prisma.pushSubscription.findMany()
    * ```
    */
  get pushSubscription(): Prisma.PushSubscriptionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.auditLog`: Exposes CRUD operations for the **AuditLog** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AuditLogs
    * const auditLogs = await prisma.auditLog.findMany()
    * ```
    */
  get auditLog(): Prisma.AuditLogDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.authThrottle`: Exposes CRUD operations for the **AuthThrottle** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AuthThrottles
    * const authThrottles = await prisma.authThrottle.findMany()
    * ```
    */
  get authThrottle(): Prisma.AuthThrottleDelegate<ExtArgs, ClientOptions>;
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
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.8.0
   * Query Engine version: 3c6e192761c0362d496ed980de936e2f3cebcd3a
   */
  export type PrismaVersion = {
    client: string
    engine: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
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
    Tower: 'Tower',
    Unit: 'Unit',
    User: 'User',
    Package: 'Package',
    PickupToken: 'PickupToken',
    PackageHistory: 'PackageHistory',
    Notification: 'Notification',
    NotificationDelivery: 'NotificationDelivery',
    PushSubscription: 'PushSubscription',
    AuditLog: 'AuditLog',
    AuthThrottle: 'AuthThrottle'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "tower" | "unit" | "user" | "package" | "pickupToken" | "packageHistory" | "notification" | "notificationDelivery" | "pushSubscription" | "auditLog" | "authThrottle"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Tower: {
        payload: Prisma.$TowerPayload<ExtArgs>
        fields: Prisma.TowerFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TowerFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TowerPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TowerFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TowerPayload>
          }
          findFirst: {
            args: Prisma.TowerFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TowerPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TowerFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TowerPayload>
          }
          findMany: {
            args: Prisma.TowerFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TowerPayload>[]
          }
          create: {
            args: Prisma.TowerCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TowerPayload>
          }
          createMany: {
            args: Prisma.TowerCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TowerCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TowerPayload>[]
          }
          delete: {
            args: Prisma.TowerDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TowerPayload>
          }
          update: {
            args: Prisma.TowerUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TowerPayload>
          }
          deleteMany: {
            args: Prisma.TowerDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TowerUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TowerUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TowerPayload>[]
          }
          upsert: {
            args: Prisma.TowerUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TowerPayload>
          }
          aggregate: {
            args: Prisma.TowerAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTower>
          }
          groupBy: {
            args: Prisma.TowerGroupByArgs<ExtArgs>
            result: $Utils.Optional<TowerGroupByOutputType>[]
          }
          count: {
            args: Prisma.TowerCountArgs<ExtArgs>
            result: $Utils.Optional<TowerCountAggregateOutputType> | number
          }
        }
      }
      Unit: {
        payload: Prisma.$UnitPayload<ExtArgs>
        fields: Prisma.UnitFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UnitFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UnitPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UnitFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UnitPayload>
          }
          findFirst: {
            args: Prisma.UnitFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UnitPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UnitFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UnitPayload>
          }
          findMany: {
            args: Prisma.UnitFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UnitPayload>[]
          }
          create: {
            args: Prisma.UnitCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UnitPayload>
          }
          createMany: {
            args: Prisma.UnitCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UnitCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UnitPayload>[]
          }
          delete: {
            args: Prisma.UnitDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UnitPayload>
          }
          update: {
            args: Prisma.UnitUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UnitPayload>
          }
          deleteMany: {
            args: Prisma.UnitDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UnitUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UnitUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UnitPayload>[]
          }
          upsert: {
            args: Prisma.UnitUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UnitPayload>
          }
          aggregate: {
            args: Prisma.UnitAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUnit>
          }
          groupBy: {
            args: Prisma.UnitGroupByArgs<ExtArgs>
            result: $Utils.Optional<UnitGroupByOutputType>[]
          }
          count: {
            args: Prisma.UnitCountArgs<ExtArgs>
            result: $Utils.Optional<UnitCountAggregateOutputType> | number
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
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
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
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
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
      Package: {
        payload: Prisma.$PackagePayload<ExtArgs>
        fields: Prisma.PackageFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PackageFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PackagePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PackageFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PackagePayload>
          }
          findFirst: {
            args: Prisma.PackageFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PackagePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PackageFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PackagePayload>
          }
          findMany: {
            args: Prisma.PackageFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PackagePayload>[]
          }
          create: {
            args: Prisma.PackageCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PackagePayload>
          }
          createMany: {
            args: Prisma.PackageCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PackageCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PackagePayload>[]
          }
          delete: {
            args: Prisma.PackageDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PackagePayload>
          }
          update: {
            args: Prisma.PackageUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PackagePayload>
          }
          deleteMany: {
            args: Prisma.PackageDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PackageUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PackageUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PackagePayload>[]
          }
          upsert: {
            args: Prisma.PackageUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PackagePayload>
          }
          aggregate: {
            args: Prisma.PackageAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePackage>
          }
          groupBy: {
            args: Prisma.PackageGroupByArgs<ExtArgs>
            result: $Utils.Optional<PackageGroupByOutputType>[]
          }
          count: {
            args: Prisma.PackageCountArgs<ExtArgs>
            result: $Utils.Optional<PackageCountAggregateOutputType> | number
          }
        }
      }
      PickupToken: {
        payload: Prisma.$PickupTokenPayload<ExtArgs>
        fields: Prisma.PickupTokenFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PickupTokenFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PickupTokenPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PickupTokenFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PickupTokenPayload>
          }
          findFirst: {
            args: Prisma.PickupTokenFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PickupTokenPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PickupTokenFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PickupTokenPayload>
          }
          findMany: {
            args: Prisma.PickupTokenFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PickupTokenPayload>[]
          }
          create: {
            args: Prisma.PickupTokenCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PickupTokenPayload>
          }
          createMany: {
            args: Prisma.PickupTokenCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PickupTokenCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PickupTokenPayload>[]
          }
          delete: {
            args: Prisma.PickupTokenDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PickupTokenPayload>
          }
          update: {
            args: Prisma.PickupTokenUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PickupTokenPayload>
          }
          deleteMany: {
            args: Prisma.PickupTokenDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PickupTokenUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PickupTokenUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PickupTokenPayload>[]
          }
          upsert: {
            args: Prisma.PickupTokenUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PickupTokenPayload>
          }
          aggregate: {
            args: Prisma.PickupTokenAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePickupToken>
          }
          groupBy: {
            args: Prisma.PickupTokenGroupByArgs<ExtArgs>
            result: $Utils.Optional<PickupTokenGroupByOutputType>[]
          }
          count: {
            args: Prisma.PickupTokenCountArgs<ExtArgs>
            result: $Utils.Optional<PickupTokenCountAggregateOutputType> | number
          }
        }
      }
      PackageHistory: {
        payload: Prisma.$PackageHistoryPayload<ExtArgs>
        fields: Prisma.PackageHistoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PackageHistoryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PackageHistoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PackageHistoryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PackageHistoryPayload>
          }
          findFirst: {
            args: Prisma.PackageHistoryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PackageHistoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PackageHistoryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PackageHistoryPayload>
          }
          findMany: {
            args: Prisma.PackageHistoryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PackageHistoryPayload>[]
          }
          create: {
            args: Prisma.PackageHistoryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PackageHistoryPayload>
          }
          createMany: {
            args: Prisma.PackageHistoryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PackageHistoryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PackageHistoryPayload>[]
          }
          delete: {
            args: Prisma.PackageHistoryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PackageHistoryPayload>
          }
          update: {
            args: Prisma.PackageHistoryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PackageHistoryPayload>
          }
          deleteMany: {
            args: Prisma.PackageHistoryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PackageHistoryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PackageHistoryUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PackageHistoryPayload>[]
          }
          upsert: {
            args: Prisma.PackageHistoryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PackageHistoryPayload>
          }
          aggregate: {
            args: Prisma.PackageHistoryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePackageHistory>
          }
          groupBy: {
            args: Prisma.PackageHistoryGroupByArgs<ExtArgs>
            result: $Utils.Optional<PackageHistoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.PackageHistoryCountArgs<ExtArgs>
            result: $Utils.Optional<PackageHistoryCountAggregateOutputType> | number
          }
        }
      }
      Notification: {
        payload: Prisma.$NotificationPayload<ExtArgs>
        fields: Prisma.NotificationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.NotificationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.NotificationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          findFirst: {
            args: Prisma.NotificationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.NotificationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          findMany: {
            args: Prisma.NotificationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>[]
          }
          create: {
            args: Prisma.NotificationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          createMany: {
            args: Prisma.NotificationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.NotificationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>[]
          }
          delete: {
            args: Prisma.NotificationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          update: {
            args: Prisma.NotificationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          deleteMany: {
            args: Prisma.NotificationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.NotificationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.NotificationUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>[]
          }
          upsert: {
            args: Prisma.NotificationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          aggregate: {
            args: Prisma.NotificationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateNotification>
          }
          groupBy: {
            args: Prisma.NotificationGroupByArgs<ExtArgs>
            result: $Utils.Optional<NotificationGroupByOutputType>[]
          }
          count: {
            args: Prisma.NotificationCountArgs<ExtArgs>
            result: $Utils.Optional<NotificationCountAggregateOutputType> | number
          }
        }
      }
      NotificationDelivery: {
        payload: Prisma.$NotificationDeliveryPayload<ExtArgs>
        fields: Prisma.NotificationDeliveryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.NotificationDeliveryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationDeliveryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.NotificationDeliveryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationDeliveryPayload>
          }
          findFirst: {
            args: Prisma.NotificationDeliveryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationDeliveryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.NotificationDeliveryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationDeliveryPayload>
          }
          findMany: {
            args: Prisma.NotificationDeliveryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationDeliveryPayload>[]
          }
          create: {
            args: Prisma.NotificationDeliveryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationDeliveryPayload>
          }
          createMany: {
            args: Prisma.NotificationDeliveryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.NotificationDeliveryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationDeliveryPayload>[]
          }
          delete: {
            args: Prisma.NotificationDeliveryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationDeliveryPayload>
          }
          update: {
            args: Prisma.NotificationDeliveryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationDeliveryPayload>
          }
          deleteMany: {
            args: Prisma.NotificationDeliveryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.NotificationDeliveryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.NotificationDeliveryUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationDeliveryPayload>[]
          }
          upsert: {
            args: Prisma.NotificationDeliveryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationDeliveryPayload>
          }
          aggregate: {
            args: Prisma.NotificationDeliveryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateNotificationDelivery>
          }
          groupBy: {
            args: Prisma.NotificationDeliveryGroupByArgs<ExtArgs>
            result: $Utils.Optional<NotificationDeliveryGroupByOutputType>[]
          }
          count: {
            args: Prisma.NotificationDeliveryCountArgs<ExtArgs>
            result: $Utils.Optional<NotificationDeliveryCountAggregateOutputType> | number
          }
        }
      }
      PushSubscription: {
        payload: Prisma.$PushSubscriptionPayload<ExtArgs>
        fields: Prisma.PushSubscriptionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PushSubscriptionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PushSubscriptionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PushSubscriptionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PushSubscriptionPayload>
          }
          findFirst: {
            args: Prisma.PushSubscriptionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PushSubscriptionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PushSubscriptionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PushSubscriptionPayload>
          }
          findMany: {
            args: Prisma.PushSubscriptionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PushSubscriptionPayload>[]
          }
          create: {
            args: Prisma.PushSubscriptionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PushSubscriptionPayload>
          }
          createMany: {
            args: Prisma.PushSubscriptionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PushSubscriptionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PushSubscriptionPayload>[]
          }
          delete: {
            args: Prisma.PushSubscriptionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PushSubscriptionPayload>
          }
          update: {
            args: Prisma.PushSubscriptionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PushSubscriptionPayload>
          }
          deleteMany: {
            args: Prisma.PushSubscriptionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PushSubscriptionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PushSubscriptionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PushSubscriptionPayload>[]
          }
          upsert: {
            args: Prisma.PushSubscriptionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PushSubscriptionPayload>
          }
          aggregate: {
            args: Prisma.PushSubscriptionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePushSubscription>
          }
          groupBy: {
            args: Prisma.PushSubscriptionGroupByArgs<ExtArgs>
            result: $Utils.Optional<PushSubscriptionGroupByOutputType>[]
          }
          count: {
            args: Prisma.PushSubscriptionCountArgs<ExtArgs>
            result: $Utils.Optional<PushSubscriptionCountAggregateOutputType> | number
          }
        }
      }
      AuditLog: {
        payload: Prisma.$AuditLogPayload<ExtArgs>
        fields: Prisma.AuditLogFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AuditLogFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AuditLogFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>
          }
          findFirst: {
            args: Prisma.AuditLogFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AuditLogFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>
          }
          findMany: {
            args: Prisma.AuditLogFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>[]
          }
          create: {
            args: Prisma.AuditLogCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>
          }
          createMany: {
            args: Prisma.AuditLogCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AuditLogCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>[]
          }
          delete: {
            args: Prisma.AuditLogDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>
          }
          update: {
            args: Prisma.AuditLogUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>
          }
          deleteMany: {
            args: Prisma.AuditLogDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AuditLogUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AuditLogUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>[]
          }
          upsert: {
            args: Prisma.AuditLogUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>
          }
          aggregate: {
            args: Prisma.AuditLogAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAuditLog>
          }
          groupBy: {
            args: Prisma.AuditLogGroupByArgs<ExtArgs>
            result: $Utils.Optional<AuditLogGroupByOutputType>[]
          }
          count: {
            args: Prisma.AuditLogCountArgs<ExtArgs>
            result: $Utils.Optional<AuditLogCountAggregateOutputType> | number
          }
        }
      }
      AuthThrottle: {
        payload: Prisma.$AuthThrottlePayload<ExtArgs>
        fields: Prisma.AuthThrottleFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AuthThrottleFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuthThrottlePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AuthThrottleFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuthThrottlePayload>
          }
          findFirst: {
            args: Prisma.AuthThrottleFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuthThrottlePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AuthThrottleFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuthThrottlePayload>
          }
          findMany: {
            args: Prisma.AuthThrottleFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuthThrottlePayload>[]
          }
          create: {
            args: Prisma.AuthThrottleCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuthThrottlePayload>
          }
          createMany: {
            args: Prisma.AuthThrottleCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AuthThrottleCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuthThrottlePayload>[]
          }
          delete: {
            args: Prisma.AuthThrottleDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuthThrottlePayload>
          }
          update: {
            args: Prisma.AuthThrottleUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuthThrottlePayload>
          }
          deleteMany: {
            args: Prisma.AuthThrottleDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AuthThrottleUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AuthThrottleUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuthThrottlePayload>[]
          }
          upsert: {
            args: Prisma.AuthThrottleUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuthThrottlePayload>
          }
          aggregate: {
            args: Prisma.AuthThrottleAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAuthThrottle>
          }
          groupBy: {
            args: Prisma.AuthThrottleGroupByArgs<ExtArgs>
            result: $Utils.Optional<AuthThrottleGroupByOutputType>[]
          }
          count: {
            args: Prisma.AuthThrottleCountArgs<ExtArgs>
            result: $Utils.Optional<AuthThrottleCountAggregateOutputType> | number
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
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://pris.ly/d/logging).
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
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * Prisma Accelerate URL allowing the client to connect through Accelerate instead of a direct database.
     */
    accelerateUrl?: string
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
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    tower?: TowerOmit
    unit?: UnitOmit
    user?: UserOmit
    package?: PackageOmit
    pickupToken?: PickupTokenOmit
    packageHistory?: PackageHistoryOmit
    notification?: NotificationOmit
    notificationDelivery?: NotificationDeliveryOmit
    pushSubscription?: PushSubscriptionOmit
    auditLog?: AuditLogOmit
    authThrottle?: AuthThrottleOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

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
   * Count Type TowerCountOutputType
   */

  export type TowerCountOutputType = {
    units: number
  }

  export type TowerCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    units?: boolean | TowerCountOutputTypeCountUnitsArgs
  }

  // Custom InputTypes
  /**
   * TowerCountOutputType without action
   */
  export type TowerCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TowerCountOutputType
     */
    select?: TowerCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TowerCountOutputType without action
   */
  export type TowerCountOutputTypeCountUnitsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UnitWhereInput
  }


  /**
   * Count Type UnitCountOutputType
   */

  export type UnitCountOutputType = {
    residents: number
    packages: number
  }

  export type UnitCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    residents?: boolean | UnitCountOutputTypeCountResidentsArgs
    packages?: boolean | UnitCountOutputTypeCountPackagesArgs
  }

  // Custom InputTypes
  /**
   * UnitCountOutputType without action
   */
  export type UnitCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UnitCountOutputType
     */
    select?: UnitCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UnitCountOutputType without action
   */
  export type UnitCountOutputTypeCountResidentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
  }

  /**
   * UnitCountOutputType without action
   */
  export type UnitCountOutputTypeCountPackagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PackageWhereInput
  }


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    notifications: number
    receivedPackages: number
    residentPackages: number
    historyEntries: number
    generatedTokens: number
    validatedTokens: number
    pushSubscriptions: number
    auditLogs: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    notifications?: boolean | UserCountOutputTypeCountNotificationsArgs
    receivedPackages?: boolean | UserCountOutputTypeCountReceivedPackagesArgs
    residentPackages?: boolean | UserCountOutputTypeCountResidentPackagesArgs
    historyEntries?: boolean | UserCountOutputTypeCountHistoryEntriesArgs
    generatedTokens?: boolean | UserCountOutputTypeCountGeneratedTokensArgs
    validatedTokens?: boolean | UserCountOutputTypeCountValidatedTokensArgs
    pushSubscriptions?: boolean | UserCountOutputTypeCountPushSubscriptionsArgs
    auditLogs?: boolean | UserCountOutputTypeCountAuditLogsArgs
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
  export type UserCountOutputTypeCountNotificationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NotificationWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountReceivedPackagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PackageWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountResidentPackagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PackageWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountHistoryEntriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PackageHistoryWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountGeneratedTokensArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PickupTokenWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountValidatedTokensArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PickupTokenWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountPushSubscriptionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PushSubscriptionWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountAuditLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AuditLogWhereInput
  }


  /**
   * Count Type PackageCountOutputType
   */

  export type PackageCountOutputType = {
    history: number
  }

  export type PackageCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    history?: boolean | PackageCountOutputTypeCountHistoryArgs
  }

  // Custom InputTypes
  /**
   * PackageCountOutputType without action
   */
  export type PackageCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PackageCountOutputType
     */
    select?: PackageCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PackageCountOutputType without action
   */
  export type PackageCountOutputTypeCountHistoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PackageHistoryWhereInput
  }


  /**
   * Count Type NotificationCountOutputType
   */

  export type NotificationCountOutputType = {
    deliveries: number
  }

  export type NotificationCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    deliveries?: boolean | NotificationCountOutputTypeCountDeliveriesArgs
  }

  // Custom InputTypes
  /**
   * NotificationCountOutputType without action
   */
  export type NotificationCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NotificationCountOutputType
     */
    select?: NotificationCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * NotificationCountOutputType without action
   */
  export type NotificationCountOutputTypeCountDeliveriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NotificationDeliveryWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Tower
   */

  export type AggregateTower = {
    _count: TowerCountAggregateOutputType | null
    _min: TowerMinAggregateOutputType | null
    _max: TowerMaxAggregateOutputType | null
  }

  export type TowerMinAggregateOutputType = {
    id: string | null
    name: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TowerMaxAggregateOutputType = {
    id: string | null
    name: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TowerCountAggregateOutputType = {
    id: number
    name: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type TowerMinAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TowerMaxAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TowerCountAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type TowerAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Tower to aggregate.
     */
    where?: TowerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Towers to fetch.
     */
    orderBy?: TowerOrderByWithRelationInput | TowerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TowerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Towers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Towers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Towers
    **/
    _count?: true | TowerCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TowerMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TowerMaxAggregateInputType
  }

  export type GetTowerAggregateType<T extends TowerAggregateArgs> = {
        [P in keyof T & keyof AggregateTower]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTower[P]>
      : GetScalarType<T[P], AggregateTower[P]>
  }




  export type TowerGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TowerWhereInput
    orderBy?: TowerOrderByWithAggregationInput | TowerOrderByWithAggregationInput[]
    by: TowerScalarFieldEnum[] | TowerScalarFieldEnum
    having?: TowerScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TowerCountAggregateInputType | true
    _min?: TowerMinAggregateInputType
    _max?: TowerMaxAggregateInputType
  }

  export type TowerGroupByOutputType = {
    id: string
    name: string
    createdAt: Date
    updatedAt: Date
    _count: TowerCountAggregateOutputType | null
    _min: TowerMinAggregateOutputType | null
    _max: TowerMaxAggregateOutputType | null
  }

  type GetTowerGroupByPayload<T extends TowerGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TowerGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TowerGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TowerGroupByOutputType[P]>
            : GetScalarType<T[P], TowerGroupByOutputType[P]>
        }
      >
    >


  export type TowerSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    units?: boolean | Tower$unitsArgs<ExtArgs>
    _count?: boolean | TowerCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tower"]>

  export type TowerSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["tower"]>

  export type TowerSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["tower"]>

  export type TowerSelectScalar = {
    id?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type TowerOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "createdAt" | "updatedAt", ExtArgs["result"]["tower"]>
  export type TowerInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    units?: boolean | Tower$unitsArgs<ExtArgs>
    _count?: boolean | TowerCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type TowerIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type TowerIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $TowerPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Tower"
    objects: {
      units: Prisma.$UnitPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["tower"]>
    composites: {}
  }

  type TowerGetPayload<S extends boolean | null | undefined | TowerDefaultArgs> = $Result.GetResult<Prisma.$TowerPayload, S>

  type TowerCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TowerFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TowerCountAggregateInputType | true
    }

  export interface TowerDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Tower'], meta: { name: 'Tower' } }
    /**
     * Find zero or one Tower that matches the filter.
     * @param {TowerFindUniqueArgs} args - Arguments to find a Tower
     * @example
     * // Get one Tower
     * const tower = await prisma.tower.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TowerFindUniqueArgs>(args: SelectSubset<T, TowerFindUniqueArgs<ExtArgs>>): Prisma__TowerClient<$Result.GetResult<Prisma.$TowerPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Tower that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TowerFindUniqueOrThrowArgs} args - Arguments to find a Tower
     * @example
     * // Get one Tower
     * const tower = await prisma.tower.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TowerFindUniqueOrThrowArgs>(args: SelectSubset<T, TowerFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TowerClient<$Result.GetResult<Prisma.$TowerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tower that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TowerFindFirstArgs} args - Arguments to find a Tower
     * @example
     * // Get one Tower
     * const tower = await prisma.tower.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TowerFindFirstArgs>(args?: SelectSubset<T, TowerFindFirstArgs<ExtArgs>>): Prisma__TowerClient<$Result.GetResult<Prisma.$TowerPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tower that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TowerFindFirstOrThrowArgs} args - Arguments to find a Tower
     * @example
     * // Get one Tower
     * const tower = await prisma.tower.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TowerFindFirstOrThrowArgs>(args?: SelectSubset<T, TowerFindFirstOrThrowArgs<ExtArgs>>): Prisma__TowerClient<$Result.GetResult<Prisma.$TowerPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Towers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TowerFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Towers
     * const towers = await prisma.tower.findMany()
     * 
     * // Get first 10 Towers
     * const towers = await prisma.tower.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const towerWithIdOnly = await prisma.tower.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TowerFindManyArgs>(args?: SelectSubset<T, TowerFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TowerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Tower.
     * @param {TowerCreateArgs} args - Arguments to create a Tower.
     * @example
     * // Create one Tower
     * const Tower = await prisma.tower.create({
     *   data: {
     *     // ... data to create a Tower
     *   }
     * })
     * 
     */
    create<T extends TowerCreateArgs>(args: SelectSubset<T, TowerCreateArgs<ExtArgs>>): Prisma__TowerClient<$Result.GetResult<Prisma.$TowerPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Towers.
     * @param {TowerCreateManyArgs} args - Arguments to create many Towers.
     * @example
     * // Create many Towers
     * const tower = await prisma.tower.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TowerCreateManyArgs>(args?: SelectSubset<T, TowerCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Towers and returns the data saved in the database.
     * @param {TowerCreateManyAndReturnArgs} args - Arguments to create many Towers.
     * @example
     * // Create many Towers
     * const tower = await prisma.tower.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Towers and only return the `id`
     * const towerWithIdOnly = await prisma.tower.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TowerCreateManyAndReturnArgs>(args?: SelectSubset<T, TowerCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TowerPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Tower.
     * @param {TowerDeleteArgs} args - Arguments to delete one Tower.
     * @example
     * // Delete one Tower
     * const Tower = await prisma.tower.delete({
     *   where: {
     *     // ... filter to delete one Tower
     *   }
     * })
     * 
     */
    delete<T extends TowerDeleteArgs>(args: SelectSubset<T, TowerDeleteArgs<ExtArgs>>): Prisma__TowerClient<$Result.GetResult<Prisma.$TowerPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Tower.
     * @param {TowerUpdateArgs} args - Arguments to update one Tower.
     * @example
     * // Update one Tower
     * const tower = await prisma.tower.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TowerUpdateArgs>(args: SelectSubset<T, TowerUpdateArgs<ExtArgs>>): Prisma__TowerClient<$Result.GetResult<Prisma.$TowerPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Towers.
     * @param {TowerDeleteManyArgs} args - Arguments to filter Towers to delete.
     * @example
     * // Delete a few Towers
     * const { count } = await prisma.tower.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TowerDeleteManyArgs>(args?: SelectSubset<T, TowerDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Towers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TowerUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Towers
     * const tower = await prisma.tower.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TowerUpdateManyArgs>(args: SelectSubset<T, TowerUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Towers and returns the data updated in the database.
     * @param {TowerUpdateManyAndReturnArgs} args - Arguments to update many Towers.
     * @example
     * // Update many Towers
     * const tower = await prisma.tower.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Towers and only return the `id`
     * const towerWithIdOnly = await prisma.tower.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TowerUpdateManyAndReturnArgs>(args: SelectSubset<T, TowerUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TowerPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Tower.
     * @param {TowerUpsertArgs} args - Arguments to update or create a Tower.
     * @example
     * // Update or create a Tower
     * const tower = await prisma.tower.upsert({
     *   create: {
     *     // ... data to create a Tower
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Tower we want to update
     *   }
     * })
     */
    upsert<T extends TowerUpsertArgs>(args: SelectSubset<T, TowerUpsertArgs<ExtArgs>>): Prisma__TowerClient<$Result.GetResult<Prisma.$TowerPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Towers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TowerCountArgs} args - Arguments to filter Towers to count.
     * @example
     * // Count the number of Towers
     * const count = await prisma.tower.count({
     *   where: {
     *     // ... the filter for the Towers we want to count
     *   }
     * })
    **/
    count<T extends TowerCountArgs>(
      args?: Subset<T, TowerCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TowerCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Tower.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TowerAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TowerAggregateArgs>(args: Subset<T, TowerAggregateArgs>): Prisma.PrismaPromise<GetTowerAggregateType<T>>

    /**
     * Group by Tower.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TowerGroupByArgs} args - Group by arguments.
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
      T extends TowerGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TowerGroupByArgs['orderBy'] }
        : { orderBy?: TowerGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TowerGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTowerGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Tower model
   */
  readonly fields: TowerFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Tower.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TowerClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    units<T extends Tower$unitsArgs<ExtArgs> = {}>(args?: Subset<T, Tower$unitsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UnitPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Tower model
   */
  interface TowerFieldRefs {
    readonly id: FieldRef<"Tower", 'String'>
    readonly name: FieldRef<"Tower", 'String'>
    readonly createdAt: FieldRef<"Tower", 'DateTime'>
    readonly updatedAt: FieldRef<"Tower", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Tower findUnique
   */
  export type TowerFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tower
     */
    select?: TowerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tower
     */
    omit?: TowerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TowerInclude<ExtArgs> | null
    /**
     * Filter, which Tower to fetch.
     */
    where: TowerWhereUniqueInput
  }

  /**
   * Tower findUniqueOrThrow
   */
  export type TowerFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tower
     */
    select?: TowerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tower
     */
    omit?: TowerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TowerInclude<ExtArgs> | null
    /**
     * Filter, which Tower to fetch.
     */
    where: TowerWhereUniqueInput
  }

  /**
   * Tower findFirst
   */
  export type TowerFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tower
     */
    select?: TowerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tower
     */
    omit?: TowerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TowerInclude<ExtArgs> | null
    /**
     * Filter, which Tower to fetch.
     */
    where?: TowerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Towers to fetch.
     */
    orderBy?: TowerOrderByWithRelationInput | TowerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Towers.
     */
    cursor?: TowerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Towers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Towers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Towers.
     */
    distinct?: TowerScalarFieldEnum | TowerScalarFieldEnum[]
  }

  /**
   * Tower findFirstOrThrow
   */
  export type TowerFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tower
     */
    select?: TowerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tower
     */
    omit?: TowerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TowerInclude<ExtArgs> | null
    /**
     * Filter, which Tower to fetch.
     */
    where?: TowerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Towers to fetch.
     */
    orderBy?: TowerOrderByWithRelationInput | TowerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Towers.
     */
    cursor?: TowerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Towers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Towers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Towers.
     */
    distinct?: TowerScalarFieldEnum | TowerScalarFieldEnum[]
  }

  /**
   * Tower findMany
   */
  export type TowerFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tower
     */
    select?: TowerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tower
     */
    omit?: TowerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TowerInclude<ExtArgs> | null
    /**
     * Filter, which Towers to fetch.
     */
    where?: TowerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Towers to fetch.
     */
    orderBy?: TowerOrderByWithRelationInput | TowerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Towers.
     */
    cursor?: TowerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Towers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Towers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Towers.
     */
    distinct?: TowerScalarFieldEnum | TowerScalarFieldEnum[]
  }

  /**
   * Tower create
   */
  export type TowerCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tower
     */
    select?: TowerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tower
     */
    omit?: TowerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TowerInclude<ExtArgs> | null
    /**
     * The data needed to create a Tower.
     */
    data: XOR<TowerCreateInput, TowerUncheckedCreateInput>
  }

  /**
   * Tower createMany
   */
  export type TowerCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Towers.
     */
    data: TowerCreateManyInput | TowerCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Tower createManyAndReturn
   */
  export type TowerCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tower
     */
    select?: TowerSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Tower
     */
    omit?: TowerOmit<ExtArgs> | null
    /**
     * The data used to create many Towers.
     */
    data: TowerCreateManyInput | TowerCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Tower update
   */
  export type TowerUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tower
     */
    select?: TowerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tower
     */
    omit?: TowerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TowerInclude<ExtArgs> | null
    /**
     * The data needed to update a Tower.
     */
    data: XOR<TowerUpdateInput, TowerUncheckedUpdateInput>
    /**
     * Choose, which Tower to update.
     */
    where: TowerWhereUniqueInput
  }

  /**
   * Tower updateMany
   */
  export type TowerUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Towers.
     */
    data: XOR<TowerUpdateManyMutationInput, TowerUncheckedUpdateManyInput>
    /**
     * Filter which Towers to update
     */
    where?: TowerWhereInput
    /**
     * Limit how many Towers to update.
     */
    limit?: number
  }

  /**
   * Tower updateManyAndReturn
   */
  export type TowerUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tower
     */
    select?: TowerSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Tower
     */
    omit?: TowerOmit<ExtArgs> | null
    /**
     * The data used to update Towers.
     */
    data: XOR<TowerUpdateManyMutationInput, TowerUncheckedUpdateManyInput>
    /**
     * Filter which Towers to update
     */
    where?: TowerWhereInput
    /**
     * Limit how many Towers to update.
     */
    limit?: number
  }

  /**
   * Tower upsert
   */
  export type TowerUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tower
     */
    select?: TowerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tower
     */
    omit?: TowerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TowerInclude<ExtArgs> | null
    /**
     * The filter to search for the Tower to update in case it exists.
     */
    where: TowerWhereUniqueInput
    /**
     * In case the Tower found by the `where` argument doesn't exist, create a new Tower with this data.
     */
    create: XOR<TowerCreateInput, TowerUncheckedCreateInput>
    /**
     * In case the Tower was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TowerUpdateInput, TowerUncheckedUpdateInput>
  }

  /**
   * Tower delete
   */
  export type TowerDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tower
     */
    select?: TowerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tower
     */
    omit?: TowerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TowerInclude<ExtArgs> | null
    /**
     * Filter which Tower to delete.
     */
    where: TowerWhereUniqueInput
  }

  /**
   * Tower deleteMany
   */
  export type TowerDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Towers to delete
     */
    where?: TowerWhereInput
    /**
     * Limit how many Towers to delete.
     */
    limit?: number
  }

  /**
   * Tower.units
   */
  export type Tower$unitsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Unit
     */
    select?: UnitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Unit
     */
    omit?: UnitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UnitInclude<ExtArgs> | null
    where?: UnitWhereInput
    orderBy?: UnitOrderByWithRelationInput | UnitOrderByWithRelationInput[]
    cursor?: UnitWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UnitScalarFieldEnum | UnitScalarFieldEnum[]
  }

  /**
   * Tower without action
   */
  export type TowerDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tower
     */
    select?: TowerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tower
     */
    omit?: TowerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TowerInclude<ExtArgs> | null
  }


  /**
   * Model Unit
   */

  export type AggregateUnit = {
    _count: UnitCountAggregateOutputType | null
    _avg: UnitAvgAggregateOutputType | null
    _sum: UnitSumAggregateOutputType | null
    _min: UnitMinAggregateOutputType | null
    _max: UnitMaxAggregateOutputType | null
  }

  export type UnitAvgAggregateOutputType = {
    floor: number | null
  }

  export type UnitSumAggregateOutputType = {
    floor: number | null
  }

  export type UnitMinAggregateOutputType = {
    id: string | null
    number: string | null
    label: string | null
    floor: number | null
    createdAt: Date | null
    updatedAt: Date | null
    towerId: string | null
  }

  export type UnitMaxAggregateOutputType = {
    id: string | null
    number: string | null
    label: string | null
    floor: number | null
    createdAt: Date | null
    updatedAt: Date | null
    towerId: string | null
  }

  export type UnitCountAggregateOutputType = {
    id: number
    number: number
    label: number
    floor: number
    createdAt: number
    updatedAt: number
    towerId: number
    _all: number
  }


  export type UnitAvgAggregateInputType = {
    floor?: true
  }

  export type UnitSumAggregateInputType = {
    floor?: true
  }

  export type UnitMinAggregateInputType = {
    id?: true
    number?: true
    label?: true
    floor?: true
    createdAt?: true
    updatedAt?: true
    towerId?: true
  }

  export type UnitMaxAggregateInputType = {
    id?: true
    number?: true
    label?: true
    floor?: true
    createdAt?: true
    updatedAt?: true
    towerId?: true
  }

  export type UnitCountAggregateInputType = {
    id?: true
    number?: true
    label?: true
    floor?: true
    createdAt?: true
    updatedAt?: true
    towerId?: true
    _all?: true
  }

  export type UnitAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Unit to aggregate.
     */
    where?: UnitWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Units to fetch.
     */
    orderBy?: UnitOrderByWithRelationInput | UnitOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UnitWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Units from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Units.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Units
    **/
    _count?: true | UnitCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UnitAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UnitSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UnitMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UnitMaxAggregateInputType
  }

  export type GetUnitAggregateType<T extends UnitAggregateArgs> = {
        [P in keyof T & keyof AggregateUnit]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUnit[P]>
      : GetScalarType<T[P], AggregateUnit[P]>
  }




  export type UnitGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UnitWhereInput
    orderBy?: UnitOrderByWithAggregationInput | UnitOrderByWithAggregationInput[]
    by: UnitScalarFieldEnum[] | UnitScalarFieldEnum
    having?: UnitScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UnitCountAggregateInputType | true
    _avg?: UnitAvgAggregateInputType
    _sum?: UnitSumAggregateInputType
    _min?: UnitMinAggregateInputType
    _max?: UnitMaxAggregateInputType
  }

  export type UnitGroupByOutputType = {
    id: string
    number: string
    label: string
    floor: number | null
    createdAt: Date
    updatedAt: Date
    towerId: string
    _count: UnitCountAggregateOutputType | null
    _avg: UnitAvgAggregateOutputType | null
    _sum: UnitSumAggregateOutputType | null
    _min: UnitMinAggregateOutputType | null
    _max: UnitMaxAggregateOutputType | null
  }

  type GetUnitGroupByPayload<T extends UnitGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UnitGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UnitGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UnitGroupByOutputType[P]>
            : GetScalarType<T[P], UnitGroupByOutputType[P]>
        }
      >
    >


  export type UnitSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    number?: boolean
    label?: boolean
    floor?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    towerId?: boolean
    tower?: boolean | TowerDefaultArgs<ExtArgs>
    residents?: boolean | Unit$residentsArgs<ExtArgs>
    packages?: boolean | Unit$packagesArgs<ExtArgs>
    _count?: boolean | UnitCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["unit"]>

  export type UnitSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    number?: boolean
    label?: boolean
    floor?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    towerId?: boolean
    tower?: boolean | TowerDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["unit"]>

  export type UnitSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    number?: boolean
    label?: boolean
    floor?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    towerId?: boolean
    tower?: boolean | TowerDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["unit"]>

  export type UnitSelectScalar = {
    id?: boolean
    number?: boolean
    label?: boolean
    floor?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    towerId?: boolean
  }

  export type UnitOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "number" | "label" | "floor" | "createdAt" | "updatedAt" | "towerId", ExtArgs["result"]["unit"]>
  export type UnitInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tower?: boolean | TowerDefaultArgs<ExtArgs>
    residents?: boolean | Unit$residentsArgs<ExtArgs>
    packages?: boolean | Unit$packagesArgs<ExtArgs>
    _count?: boolean | UnitCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UnitIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tower?: boolean | TowerDefaultArgs<ExtArgs>
  }
  export type UnitIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tower?: boolean | TowerDefaultArgs<ExtArgs>
  }

  export type $UnitPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Unit"
    objects: {
      tower: Prisma.$TowerPayload<ExtArgs>
      residents: Prisma.$UserPayload<ExtArgs>[]
      packages: Prisma.$PackagePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      number: string
      label: string
      floor: number | null
      createdAt: Date
      updatedAt: Date
      towerId: string
    }, ExtArgs["result"]["unit"]>
    composites: {}
  }

  type UnitGetPayload<S extends boolean | null | undefined | UnitDefaultArgs> = $Result.GetResult<Prisma.$UnitPayload, S>

  type UnitCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UnitFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UnitCountAggregateInputType | true
    }

  export interface UnitDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Unit'], meta: { name: 'Unit' } }
    /**
     * Find zero or one Unit that matches the filter.
     * @param {UnitFindUniqueArgs} args - Arguments to find a Unit
     * @example
     * // Get one Unit
     * const unit = await prisma.unit.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UnitFindUniqueArgs>(args: SelectSubset<T, UnitFindUniqueArgs<ExtArgs>>): Prisma__UnitClient<$Result.GetResult<Prisma.$UnitPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Unit that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UnitFindUniqueOrThrowArgs} args - Arguments to find a Unit
     * @example
     * // Get one Unit
     * const unit = await prisma.unit.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UnitFindUniqueOrThrowArgs>(args: SelectSubset<T, UnitFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UnitClient<$Result.GetResult<Prisma.$UnitPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Unit that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UnitFindFirstArgs} args - Arguments to find a Unit
     * @example
     * // Get one Unit
     * const unit = await prisma.unit.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UnitFindFirstArgs>(args?: SelectSubset<T, UnitFindFirstArgs<ExtArgs>>): Prisma__UnitClient<$Result.GetResult<Prisma.$UnitPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Unit that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UnitFindFirstOrThrowArgs} args - Arguments to find a Unit
     * @example
     * // Get one Unit
     * const unit = await prisma.unit.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UnitFindFirstOrThrowArgs>(args?: SelectSubset<T, UnitFindFirstOrThrowArgs<ExtArgs>>): Prisma__UnitClient<$Result.GetResult<Prisma.$UnitPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Units that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UnitFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Units
     * const units = await prisma.unit.findMany()
     * 
     * // Get first 10 Units
     * const units = await prisma.unit.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const unitWithIdOnly = await prisma.unit.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UnitFindManyArgs>(args?: SelectSubset<T, UnitFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UnitPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Unit.
     * @param {UnitCreateArgs} args - Arguments to create a Unit.
     * @example
     * // Create one Unit
     * const Unit = await prisma.unit.create({
     *   data: {
     *     // ... data to create a Unit
     *   }
     * })
     * 
     */
    create<T extends UnitCreateArgs>(args: SelectSubset<T, UnitCreateArgs<ExtArgs>>): Prisma__UnitClient<$Result.GetResult<Prisma.$UnitPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Units.
     * @param {UnitCreateManyArgs} args - Arguments to create many Units.
     * @example
     * // Create many Units
     * const unit = await prisma.unit.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UnitCreateManyArgs>(args?: SelectSubset<T, UnitCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Units and returns the data saved in the database.
     * @param {UnitCreateManyAndReturnArgs} args - Arguments to create many Units.
     * @example
     * // Create many Units
     * const unit = await prisma.unit.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Units and only return the `id`
     * const unitWithIdOnly = await prisma.unit.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UnitCreateManyAndReturnArgs>(args?: SelectSubset<T, UnitCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UnitPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Unit.
     * @param {UnitDeleteArgs} args - Arguments to delete one Unit.
     * @example
     * // Delete one Unit
     * const Unit = await prisma.unit.delete({
     *   where: {
     *     // ... filter to delete one Unit
     *   }
     * })
     * 
     */
    delete<T extends UnitDeleteArgs>(args: SelectSubset<T, UnitDeleteArgs<ExtArgs>>): Prisma__UnitClient<$Result.GetResult<Prisma.$UnitPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Unit.
     * @param {UnitUpdateArgs} args - Arguments to update one Unit.
     * @example
     * // Update one Unit
     * const unit = await prisma.unit.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UnitUpdateArgs>(args: SelectSubset<T, UnitUpdateArgs<ExtArgs>>): Prisma__UnitClient<$Result.GetResult<Prisma.$UnitPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Units.
     * @param {UnitDeleteManyArgs} args - Arguments to filter Units to delete.
     * @example
     * // Delete a few Units
     * const { count } = await prisma.unit.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UnitDeleteManyArgs>(args?: SelectSubset<T, UnitDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Units.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UnitUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Units
     * const unit = await prisma.unit.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UnitUpdateManyArgs>(args: SelectSubset<T, UnitUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Units and returns the data updated in the database.
     * @param {UnitUpdateManyAndReturnArgs} args - Arguments to update many Units.
     * @example
     * // Update many Units
     * const unit = await prisma.unit.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Units and only return the `id`
     * const unitWithIdOnly = await prisma.unit.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UnitUpdateManyAndReturnArgs>(args: SelectSubset<T, UnitUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UnitPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Unit.
     * @param {UnitUpsertArgs} args - Arguments to update or create a Unit.
     * @example
     * // Update or create a Unit
     * const unit = await prisma.unit.upsert({
     *   create: {
     *     // ... data to create a Unit
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Unit we want to update
     *   }
     * })
     */
    upsert<T extends UnitUpsertArgs>(args: SelectSubset<T, UnitUpsertArgs<ExtArgs>>): Prisma__UnitClient<$Result.GetResult<Prisma.$UnitPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Units.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UnitCountArgs} args - Arguments to filter Units to count.
     * @example
     * // Count the number of Units
     * const count = await prisma.unit.count({
     *   where: {
     *     // ... the filter for the Units we want to count
     *   }
     * })
    **/
    count<T extends UnitCountArgs>(
      args?: Subset<T, UnitCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UnitCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Unit.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UnitAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UnitAggregateArgs>(args: Subset<T, UnitAggregateArgs>): Prisma.PrismaPromise<GetUnitAggregateType<T>>

    /**
     * Group by Unit.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UnitGroupByArgs} args - Group by arguments.
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
      T extends UnitGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UnitGroupByArgs['orderBy'] }
        : { orderBy?: UnitGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UnitGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUnitGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Unit model
   */
  readonly fields: UnitFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Unit.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UnitClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    tower<T extends TowerDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TowerDefaultArgs<ExtArgs>>): Prisma__TowerClient<$Result.GetResult<Prisma.$TowerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    residents<T extends Unit$residentsArgs<ExtArgs> = {}>(args?: Subset<T, Unit$residentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    packages<T extends Unit$packagesArgs<ExtArgs> = {}>(args?: Subset<T, Unit$packagesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PackagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Unit model
   */
  interface UnitFieldRefs {
    readonly id: FieldRef<"Unit", 'String'>
    readonly number: FieldRef<"Unit", 'String'>
    readonly label: FieldRef<"Unit", 'String'>
    readonly floor: FieldRef<"Unit", 'Int'>
    readonly createdAt: FieldRef<"Unit", 'DateTime'>
    readonly updatedAt: FieldRef<"Unit", 'DateTime'>
    readonly towerId: FieldRef<"Unit", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Unit findUnique
   */
  export type UnitFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Unit
     */
    select?: UnitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Unit
     */
    omit?: UnitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UnitInclude<ExtArgs> | null
    /**
     * Filter, which Unit to fetch.
     */
    where: UnitWhereUniqueInput
  }

  /**
   * Unit findUniqueOrThrow
   */
  export type UnitFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Unit
     */
    select?: UnitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Unit
     */
    omit?: UnitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UnitInclude<ExtArgs> | null
    /**
     * Filter, which Unit to fetch.
     */
    where: UnitWhereUniqueInput
  }

  /**
   * Unit findFirst
   */
  export type UnitFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Unit
     */
    select?: UnitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Unit
     */
    omit?: UnitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UnitInclude<ExtArgs> | null
    /**
     * Filter, which Unit to fetch.
     */
    where?: UnitWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Units to fetch.
     */
    orderBy?: UnitOrderByWithRelationInput | UnitOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Units.
     */
    cursor?: UnitWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Units from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Units.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Units.
     */
    distinct?: UnitScalarFieldEnum | UnitScalarFieldEnum[]
  }

  /**
   * Unit findFirstOrThrow
   */
  export type UnitFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Unit
     */
    select?: UnitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Unit
     */
    omit?: UnitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UnitInclude<ExtArgs> | null
    /**
     * Filter, which Unit to fetch.
     */
    where?: UnitWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Units to fetch.
     */
    orderBy?: UnitOrderByWithRelationInput | UnitOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Units.
     */
    cursor?: UnitWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Units from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Units.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Units.
     */
    distinct?: UnitScalarFieldEnum | UnitScalarFieldEnum[]
  }

  /**
   * Unit findMany
   */
  export type UnitFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Unit
     */
    select?: UnitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Unit
     */
    omit?: UnitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UnitInclude<ExtArgs> | null
    /**
     * Filter, which Units to fetch.
     */
    where?: UnitWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Units to fetch.
     */
    orderBy?: UnitOrderByWithRelationInput | UnitOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Units.
     */
    cursor?: UnitWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Units from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Units.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Units.
     */
    distinct?: UnitScalarFieldEnum | UnitScalarFieldEnum[]
  }

  /**
   * Unit create
   */
  export type UnitCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Unit
     */
    select?: UnitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Unit
     */
    omit?: UnitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UnitInclude<ExtArgs> | null
    /**
     * The data needed to create a Unit.
     */
    data: XOR<UnitCreateInput, UnitUncheckedCreateInput>
  }

  /**
   * Unit createMany
   */
  export type UnitCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Units.
     */
    data: UnitCreateManyInput | UnitCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Unit createManyAndReturn
   */
  export type UnitCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Unit
     */
    select?: UnitSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Unit
     */
    omit?: UnitOmit<ExtArgs> | null
    /**
     * The data used to create many Units.
     */
    data: UnitCreateManyInput | UnitCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UnitIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Unit update
   */
  export type UnitUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Unit
     */
    select?: UnitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Unit
     */
    omit?: UnitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UnitInclude<ExtArgs> | null
    /**
     * The data needed to update a Unit.
     */
    data: XOR<UnitUpdateInput, UnitUncheckedUpdateInput>
    /**
     * Choose, which Unit to update.
     */
    where: UnitWhereUniqueInput
  }

  /**
   * Unit updateMany
   */
  export type UnitUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Units.
     */
    data: XOR<UnitUpdateManyMutationInput, UnitUncheckedUpdateManyInput>
    /**
     * Filter which Units to update
     */
    where?: UnitWhereInput
    /**
     * Limit how many Units to update.
     */
    limit?: number
  }

  /**
   * Unit updateManyAndReturn
   */
  export type UnitUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Unit
     */
    select?: UnitSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Unit
     */
    omit?: UnitOmit<ExtArgs> | null
    /**
     * The data used to update Units.
     */
    data: XOR<UnitUpdateManyMutationInput, UnitUncheckedUpdateManyInput>
    /**
     * Filter which Units to update
     */
    where?: UnitWhereInput
    /**
     * Limit how many Units to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UnitIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Unit upsert
   */
  export type UnitUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Unit
     */
    select?: UnitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Unit
     */
    omit?: UnitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UnitInclude<ExtArgs> | null
    /**
     * The filter to search for the Unit to update in case it exists.
     */
    where: UnitWhereUniqueInput
    /**
     * In case the Unit found by the `where` argument doesn't exist, create a new Unit with this data.
     */
    create: XOR<UnitCreateInput, UnitUncheckedCreateInput>
    /**
     * In case the Unit was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UnitUpdateInput, UnitUncheckedUpdateInput>
  }

  /**
   * Unit delete
   */
  export type UnitDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Unit
     */
    select?: UnitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Unit
     */
    omit?: UnitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UnitInclude<ExtArgs> | null
    /**
     * Filter which Unit to delete.
     */
    where: UnitWhereUniqueInput
  }

  /**
   * Unit deleteMany
   */
  export type UnitDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Units to delete
     */
    where?: UnitWhereInput
    /**
     * Limit how many Units to delete.
     */
    limit?: number
  }

  /**
   * Unit.residents
   */
  export type Unit$residentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
    where?: UserWhereInput
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    cursor?: UserWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * Unit.packages
   */
  export type Unit$packagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Package
     */
    select?: PackageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Package
     */
    omit?: PackageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PackageInclude<ExtArgs> | null
    where?: PackageWhereInput
    orderBy?: PackageOrderByWithRelationInput | PackageOrderByWithRelationInput[]
    cursor?: PackageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PackageScalarFieldEnum | PackageScalarFieldEnum[]
  }

  /**
   * Unit without action
   */
  export type UnitDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Unit
     */
    select?: UnitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Unit
     */
    omit?: UnitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UnitInclude<ExtArgs> | null
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
    passwordHash: string | null
    role: $Enums.Role | null
    phone: string | null
    jobTitle: string | null
    isActive: boolean | null
    mustChangePassword: boolean | null
    lastLoginAt: Date | null
    deletedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
    unitId: string | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    passwordHash: string | null
    role: $Enums.Role | null
    phone: string | null
    jobTitle: string | null
    isActive: boolean | null
    mustChangePassword: boolean | null
    lastLoginAt: Date | null
    deletedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
    unitId: string | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    name: number
    email: number
    passwordHash: number
    role: number
    phone: number
    jobTitle: number
    isActive: number
    mustChangePassword: number
    lastLoginAt: number
    deletedAt: number
    createdAt: number
    updatedAt: number
    unitId: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    passwordHash?: true
    role?: true
    phone?: true
    jobTitle?: true
    isActive?: true
    mustChangePassword?: true
    lastLoginAt?: true
    deletedAt?: true
    createdAt?: true
    updatedAt?: true
    unitId?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    passwordHash?: true
    role?: true
    phone?: true
    jobTitle?: true
    isActive?: true
    mustChangePassword?: true
    lastLoginAt?: true
    deletedAt?: true
    createdAt?: true
    updatedAt?: true
    unitId?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    passwordHash?: true
    role?: true
    phone?: true
    jobTitle?: true
    isActive?: true
    mustChangePassword?: true
    lastLoginAt?: true
    deletedAt?: true
    createdAt?: true
    updatedAt?: true
    unitId?: true
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
    name: string
    email: string
    passwordHash: string
    role: $Enums.Role
    phone: string | null
    jobTitle: string | null
    isActive: boolean
    mustChangePassword: boolean
    lastLoginAt: Date | null
    deletedAt: Date | null
    createdAt: Date
    updatedAt: Date
    unitId: string | null
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
    passwordHash?: boolean
    role?: boolean
    phone?: boolean
    jobTitle?: boolean
    isActive?: boolean
    mustChangePassword?: boolean
    lastLoginAt?: boolean
    deletedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    unitId?: boolean
    unit?: boolean | User$unitArgs<ExtArgs>
    notifications?: boolean | User$notificationsArgs<ExtArgs>
    receivedPackages?: boolean | User$receivedPackagesArgs<ExtArgs>
    residentPackages?: boolean | User$residentPackagesArgs<ExtArgs>
    historyEntries?: boolean | User$historyEntriesArgs<ExtArgs>
    generatedTokens?: boolean | User$generatedTokensArgs<ExtArgs>
    validatedTokens?: boolean | User$validatedTokensArgs<ExtArgs>
    pushSubscriptions?: boolean | User$pushSubscriptionsArgs<ExtArgs>
    auditLogs?: boolean | User$auditLogsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    passwordHash?: boolean
    role?: boolean
    phone?: boolean
    jobTitle?: boolean
    isActive?: boolean
    mustChangePassword?: boolean
    lastLoginAt?: boolean
    deletedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    unitId?: boolean
    unit?: boolean | User$unitArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    passwordHash?: boolean
    role?: boolean
    phone?: boolean
    jobTitle?: boolean
    isActive?: boolean
    mustChangePassword?: boolean
    lastLoginAt?: boolean
    deletedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    unitId?: boolean
    unit?: boolean | User$unitArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    passwordHash?: boolean
    role?: boolean
    phone?: boolean
    jobTitle?: boolean
    isActive?: boolean
    mustChangePassword?: boolean
    lastLoginAt?: boolean
    deletedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    unitId?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "passwordHash" | "role" | "phone" | "jobTitle" | "isActive" | "mustChangePassword" | "lastLoginAt" | "deletedAt" | "createdAt" | "updatedAt" | "unitId", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    unit?: boolean | User$unitArgs<ExtArgs>
    notifications?: boolean | User$notificationsArgs<ExtArgs>
    receivedPackages?: boolean | User$receivedPackagesArgs<ExtArgs>
    residentPackages?: boolean | User$residentPackagesArgs<ExtArgs>
    historyEntries?: boolean | User$historyEntriesArgs<ExtArgs>
    generatedTokens?: boolean | User$generatedTokensArgs<ExtArgs>
    validatedTokens?: boolean | User$validatedTokensArgs<ExtArgs>
    pushSubscriptions?: boolean | User$pushSubscriptionsArgs<ExtArgs>
    auditLogs?: boolean | User$auditLogsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    unit?: boolean | User$unitArgs<ExtArgs>
  }
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    unit?: boolean | User$unitArgs<ExtArgs>
  }

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      unit: Prisma.$UnitPayload<ExtArgs> | null
      notifications: Prisma.$NotificationPayload<ExtArgs>[]
      receivedPackages: Prisma.$PackagePayload<ExtArgs>[]
      residentPackages: Prisma.$PackagePayload<ExtArgs>[]
      historyEntries: Prisma.$PackageHistoryPayload<ExtArgs>[]
      generatedTokens: Prisma.$PickupTokenPayload<ExtArgs>[]
      validatedTokens: Prisma.$PickupTokenPayload<ExtArgs>[]
      pushSubscriptions: Prisma.$PushSubscriptionPayload<ExtArgs>[]
      auditLogs: Prisma.$AuditLogPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      email: string
      passwordHash: string
      role: $Enums.Role
      phone: string | null
      jobTitle: string | null
      isActive: boolean
      mustChangePassword: boolean
      lastLoginAt: Date | null
      deletedAt: Date | null
      createdAt: Date
      updatedAt: Date
      unitId: string | null
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
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

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
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

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
    unit<T extends User$unitArgs<ExtArgs> = {}>(args?: Subset<T, User$unitArgs<ExtArgs>>): Prisma__UnitClient<$Result.GetResult<Prisma.$UnitPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    notifications<T extends User$notificationsArgs<ExtArgs> = {}>(args?: Subset<T, User$notificationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    receivedPackages<T extends User$receivedPackagesArgs<ExtArgs> = {}>(args?: Subset<T, User$receivedPackagesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PackagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    residentPackages<T extends User$residentPackagesArgs<ExtArgs> = {}>(args?: Subset<T, User$residentPackagesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PackagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    historyEntries<T extends User$historyEntriesArgs<ExtArgs> = {}>(args?: Subset<T, User$historyEntriesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PackageHistoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    generatedTokens<T extends User$generatedTokensArgs<ExtArgs> = {}>(args?: Subset<T, User$generatedTokensArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PickupTokenPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    validatedTokens<T extends User$validatedTokensArgs<ExtArgs> = {}>(args?: Subset<T, User$validatedTokensArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PickupTokenPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    pushSubscriptions<T extends User$pushSubscriptionsArgs<ExtArgs> = {}>(args?: Subset<T, User$pushSubscriptionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PushSubscriptionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    auditLogs<T extends User$auditLogsArgs<ExtArgs> = {}>(args?: Subset<T, User$auditLogsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
    readonly passwordHash: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'Role'>
    readonly phone: FieldRef<"User", 'String'>
    readonly jobTitle: FieldRef<"User", 'String'>
    readonly isActive: FieldRef<"User", 'Boolean'>
    readonly mustChangePassword: FieldRef<"User", 'Boolean'>
    readonly lastLoginAt: FieldRef<"User", 'DateTime'>
    readonly deletedAt: FieldRef<"User", 'DateTime'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
    readonly unitId: FieldRef<"User", 'String'>
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
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
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
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
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
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserIncludeCreateManyAndReturn<ExtArgs> | null
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
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
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
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserIncludeUpdateManyAndReturn<ExtArgs> | null
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
   * User.unit
   */
  export type User$unitArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Unit
     */
    select?: UnitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Unit
     */
    omit?: UnitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UnitInclude<ExtArgs> | null
    where?: UnitWhereInput
  }

  /**
   * User.notifications
   */
  export type User$notificationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    where?: NotificationWhereInput
    orderBy?: NotificationOrderByWithRelationInput | NotificationOrderByWithRelationInput[]
    cursor?: NotificationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: NotificationScalarFieldEnum | NotificationScalarFieldEnum[]
  }

  /**
   * User.receivedPackages
   */
  export type User$receivedPackagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Package
     */
    select?: PackageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Package
     */
    omit?: PackageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PackageInclude<ExtArgs> | null
    where?: PackageWhereInput
    orderBy?: PackageOrderByWithRelationInput | PackageOrderByWithRelationInput[]
    cursor?: PackageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PackageScalarFieldEnum | PackageScalarFieldEnum[]
  }

  /**
   * User.residentPackages
   */
  export type User$residentPackagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Package
     */
    select?: PackageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Package
     */
    omit?: PackageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PackageInclude<ExtArgs> | null
    where?: PackageWhereInput
    orderBy?: PackageOrderByWithRelationInput | PackageOrderByWithRelationInput[]
    cursor?: PackageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PackageScalarFieldEnum | PackageScalarFieldEnum[]
  }

  /**
   * User.historyEntries
   */
  export type User$historyEntriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PackageHistory
     */
    select?: PackageHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the PackageHistory
     */
    omit?: PackageHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PackageHistoryInclude<ExtArgs> | null
    where?: PackageHistoryWhereInput
    orderBy?: PackageHistoryOrderByWithRelationInput | PackageHistoryOrderByWithRelationInput[]
    cursor?: PackageHistoryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PackageHistoryScalarFieldEnum | PackageHistoryScalarFieldEnum[]
  }

  /**
   * User.generatedTokens
   */
  export type User$generatedTokensArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PickupToken
     */
    select?: PickupTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PickupToken
     */
    omit?: PickupTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PickupTokenInclude<ExtArgs> | null
    where?: PickupTokenWhereInput
    orderBy?: PickupTokenOrderByWithRelationInput | PickupTokenOrderByWithRelationInput[]
    cursor?: PickupTokenWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PickupTokenScalarFieldEnum | PickupTokenScalarFieldEnum[]
  }

  /**
   * User.validatedTokens
   */
  export type User$validatedTokensArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PickupToken
     */
    select?: PickupTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PickupToken
     */
    omit?: PickupTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PickupTokenInclude<ExtArgs> | null
    where?: PickupTokenWhereInput
    orderBy?: PickupTokenOrderByWithRelationInput | PickupTokenOrderByWithRelationInput[]
    cursor?: PickupTokenWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PickupTokenScalarFieldEnum | PickupTokenScalarFieldEnum[]
  }

  /**
   * User.pushSubscriptions
   */
  export type User$pushSubscriptionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PushSubscription
     */
    select?: PushSubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PushSubscription
     */
    omit?: PushSubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PushSubscriptionInclude<ExtArgs> | null
    where?: PushSubscriptionWhereInput
    orderBy?: PushSubscriptionOrderByWithRelationInput | PushSubscriptionOrderByWithRelationInput[]
    cursor?: PushSubscriptionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PushSubscriptionScalarFieldEnum | PushSubscriptionScalarFieldEnum[]
  }

  /**
   * User.auditLogs
   */
  export type User$auditLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogInclude<ExtArgs> | null
    where?: AuditLogWhereInput
    orderBy?: AuditLogOrderByWithRelationInput | AuditLogOrderByWithRelationInput[]
    cursor?: AuditLogWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AuditLogScalarFieldEnum | AuditLogScalarFieldEnum[]
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
   * Model Package
   */

  export type AggregatePackage = {
    _count: PackageCountAggregateOutputType | null
    _min: PackageMinAggregateOutputType | null
    _max: PackageMaxAggregateOutputType | null
  }

  export type PackageMinAggregateOutputType = {
    id: string | null
    trackingCode: string | null
    carrier: string | null
    description: string | null
    status: $Enums.PackageStatus | null
    receivedAt: Date | null
    notifiedAt: Date | null
    pickedUpAt: Date | null
    dueAt: Date | null
    notificationSent: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
    residentId: string | null
    unitId: string | null
    receivedById: string | null
  }

  export type PackageMaxAggregateOutputType = {
    id: string | null
    trackingCode: string | null
    carrier: string | null
    description: string | null
    status: $Enums.PackageStatus | null
    receivedAt: Date | null
    notifiedAt: Date | null
    pickedUpAt: Date | null
    dueAt: Date | null
    notificationSent: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
    residentId: string | null
    unitId: string | null
    receivedById: string | null
  }

  export type PackageCountAggregateOutputType = {
    id: number
    trackingCode: number
    carrier: number
    description: number
    status: number
    receivedAt: number
    notifiedAt: number
    pickedUpAt: number
    dueAt: number
    notificationSent: number
    createdAt: number
    updatedAt: number
    residentId: number
    unitId: number
    receivedById: number
    _all: number
  }


  export type PackageMinAggregateInputType = {
    id?: true
    trackingCode?: true
    carrier?: true
    description?: true
    status?: true
    receivedAt?: true
    notifiedAt?: true
    pickedUpAt?: true
    dueAt?: true
    notificationSent?: true
    createdAt?: true
    updatedAt?: true
    residentId?: true
    unitId?: true
    receivedById?: true
  }

  export type PackageMaxAggregateInputType = {
    id?: true
    trackingCode?: true
    carrier?: true
    description?: true
    status?: true
    receivedAt?: true
    notifiedAt?: true
    pickedUpAt?: true
    dueAt?: true
    notificationSent?: true
    createdAt?: true
    updatedAt?: true
    residentId?: true
    unitId?: true
    receivedById?: true
  }

  export type PackageCountAggregateInputType = {
    id?: true
    trackingCode?: true
    carrier?: true
    description?: true
    status?: true
    receivedAt?: true
    notifiedAt?: true
    pickedUpAt?: true
    dueAt?: true
    notificationSent?: true
    createdAt?: true
    updatedAt?: true
    residentId?: true
    unitId?: true
    receivedById?: true
    _all?: true
  }

  export type PackageAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Package to aggregate.
     */
    where?: PackageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Packages to fetch.
     */
    orderBy?: PackageOrderByWithRelationInput | PackageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PackageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Packages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Packages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Packages
    **/
    _count?: true | PackageCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PackageMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PackageMaxAggregateInputType
  }

  export type GetPackageAggregateType<T extends PackageAggregateArgs> = {
        [P in keyof T & keyof AggregatePackage]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePackage[P]>
      : GetScalarType<T[P], AggregatePackage[P]>
  }




  export type PackageGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PackageWhereInput
    orderBy?: PackageOrderByWithAggregationInput | PackageOrderByWithAggregationInput[]
    by: PackageScalarFieldEnum[] | PackageScalarFieldEnum
    having?: PackageScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PackageCountAggregateInputType | true
    _min?: PackageMinAggregateInputType
    _max?: PackageMaxAggregateInputType
  }

  export type PackageGroupByOutputType = {
    id: string
    trackingCode: string
    carrier: string
    description: string | null
    status: $Enums.PackageStatus
    receivedAt: Date
    notifiedAt: Date | null
    pickedUpAt: Date | null
    dueAt: Date | null
    notificationSent: boolean
    createdAt: Date
    updatedAt: Date
    residentId: string
    unitId: string
    receivedById: string
    _count: PackageCountAggregateOutputType | null
    _min: PackageMinAggregateOutputType | null
    _max: PackageMaxAggregateOutputType | null
  }

  type GetPackageGroupByPayload<T extends PackageGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PackageGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PackageGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PackageGroupByOutputType[P]>
            : GetScalarType<T[P], PackageGroupByOutputType[P]>
        }
      >
    >


  export type PackageSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    trackingCode?: boolean
    carrier?: boolean
    description?: boolean
    status?: boolean
    receivedAt?: boolean
    notifiedAt?: boolean
    pickedUpAt?: boolean
    dueAt?: boolean
    notificationSent?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    residentId?: boolean
    unitId?: boolean
    receivedById?: boolean
    resident?: boolean | UserDefaultArgs<ExtArgs>
    unit?: boolean | UnitDefaultArgs<ExtArgs>
    receivedBy?: boolean | UserDefaultArgs<ExtArgs>
    history?: boolean | Package$historyArgs<ExtArgs>
    token?: boolean | Package$tokenArgs<ExtArgs>
    _count?: boolean | PackageCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["package"]>

  export type PackageSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    trackingCode?: boolean
    carrier?: boolean
    description?: boolean
    status?: boolean
    receivedAt?: boolean
    notifiedAt?: boolean
    pickedUpAt?: boolean
    dueAt?: boolean
    notificationSent?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    residentId?: boolean
    unitId?: boolean
    receivedById?: boolean
    resident?: boolean | UserDefaultArgs<ExtArgs>
    unit?: boolean | UnitDefaultArgs<ExtArgs>
    receivedBy?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["package"]>

  export type PackageSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    trackingCode?: boolean
    carrier?: boolean
    description?: boolean
    status?: boolean
    receivedAt?: boolean
    notifiedAt?: boolean
    pickedUpAt?: boolean
    dueAt?: boolean
    notificationSent?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    residentId?: boolean
    unitId?: boolean
    receivedById?: boolean
    resident?: boolean | UserDefaultArgs<ExtArgs>
    unit?: boolean | UnitDefaultArgs<ExtArgs>
    receivedBy?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["package"]>

  export type PackageSelectScalar = {
    id?: boolean
    trackingCode?: boolean
    carrier?: boolean
    description?: boolean
    status?: boolean
    receivedAt?: boolean
    notifiedAt?: boolean
    pickedUpAt?: boolean
    dueAt?: boolean
    notificationSent?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    residentId?: boolean
    unitId?: boolean
    receivedById?: boolean
  }

  export type PackageOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "trackingCode" | "carrier" | "description" | "status" | "receivedAt" | "notifiedAt" | "pickedUpAt" | "dueAt" | "notificationSent" | "createdAt" | "updatedAt" | "residentId" | "unitId" | "receivedById", ExtArgs["result"]["package"]>
  export type PackageInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    resident?: boolean | UserDefaultArgs<ExtArgs>
    unit?: boolean | UnitDefaultArgs<ExtArgs>
    receivedBy?: boolean | UserDefaultArgs<ExtArgs>
    history?: boolean | Package$historyArgs<ExtArgs>
    token?: boolean | Package$tokenArgs<ExtArgs>
    _count?: boolean | PackageCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type PackageIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    resident?: boolean | UserDefaultArgs<ExtArgs>
    unit?: boolean | UnitDefaultArgs<ExtArgs>
    receivedBy?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type PackageIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    resident?: boolean | UserDefaultArgs<ExtArgs>
    unit?: boolean | UnitDefaultArgs<ExtArgs>
    receivedBy?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $PackagePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Package"
    objects: {
      resident: Prisma.$UserPayload<ExtArgs>
      unit: Prisma.$UnitPayload<ExtArgs>
      receivedBy: Prisma.$UserPayload<ExtArgs>
      history: Prisma.$PackageHistoryPayload<ExtArgs>[]
      token: Prisma.$PickupTokenPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      trackingCode: string
      carrier: string
      description: string | null
      status: $Enums.PackageStatus
      receivedAt: Date
      notifiedAt: Date | null
      pickedUpAt: Date | null
      dueAt: Date | null
      notificationSent: boolean
      createdAt: Date
      updatedAt: Date
      residentId: string
      unitId: string
      receivedById: string
    }, ExtArgs["result"]["package"]>
    composites: {}
  }

  type PackageGetPayload<S extends boolean | null | undefined | PackageDefaultArgs> = $Result.GetResult<Prisma.$PackagePayload, S>

  type PackageCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PackageFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PackageCountAggregateInputType | true
    }

  export interface PackageDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Package'], meta: { name: 'Package' } }
    /**
     * Find zero or one Package that matches the filter.
     * @param {PackageFindUniqueArgs} args - Arguments to find a Package
     * @example
     * // Get one Package
     * const package = await prisma.package.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PackageFindUniqueArgs>(args: SelectSubset<T, PackageFindUniqueArgs<ExtArgs>>): Prisma__PackageClient<$Result.GetResult<Prisma.$PackagePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Package that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PackageFindUniqueOrThrowArgs} args - Arguments to find a Package
     * @example
     * // Get one Package
     * const package = await prisma.package.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PackageFindUniqueOrThrowArgs>(args: SelectSubset<T, PackageFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PackageClient<$Result.GetResult<Prisma.$PackagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Package that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PackageFindFirstArgs} args - Arguments to find a Package
     * @example
     * // Get one Package
     * const package = await prisma.package.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PackageFindFirstArgs>(args?: SelectSubset<T, PackageFindFirstArgs<ExtArgs>>): Prisma__PackageClient<$Result.GetResult<Prisma.$PackagePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Package that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PackageFindFirstOrThrowArgs} args - Arguments to find a Package
     * @example
     * // Get one Package
     * const package = await prisma.package.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PackageFindFirstOrThrowArgs>(args?: SelectSubset<T, PackageFindFirstOrThrowArgs<ExtArgs>>): Prisma__PackageClient<$Result.GetResult<Prisma.$PackagePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Packages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PackageFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Packages
     * const packages = await prisma.package.findMany()
     * 
     * // Get first 10 Packages
     * const packages = await prisma.package.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const packageWithIdOnly = await prisma.package.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PackageFindManyArgs>(args?: SelectSubset<T, PackageFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PackagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Package.
     * @param {PackageCreateArgs} args - Arguments to create a Package.
     * @example
     * // Create one Package
     * const Package = await prisma.package.create({
     *   data: {
     *     // ... data to create a Package
     *   }
     * })
     * 
     */
    create<T extends PackageCreateArgs>(args: SelectSubset<T, PackageCreateArgs<ExtArgs>>): Prisma__PackageClient<$Result.GetResult<Prisma.$PackagePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Packages.
     * @param {PackageCreateManyArgs} args - Arguments to create many Packages.
     * @example
     * // Create many Packages
     * const package = await prisma.package.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PackageCreateManyArgs>(args?: SelectSubset<T, PackageCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Packages and returns the data saved in the database.
     * @param {PackageCreateManyAndReturnArgs} args - Arguments to create many Packages.
     * @example
     * // Create many Packages
     * const package = await prisma.package.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Packages and only return the `id`
     * const packageWithIdOnly = await prisma.package.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PackageCreateManyAndReturnArgs>(args?: SelectSubset<T, PackageCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PackagePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Package.
     * @param {PackageDeleteArgs} args - Arguments to delete one Package.
     * @example
     * // Delete one Package
     * const Package = await prisma.package.delete({
     *   where: {
     *     // ... filter to delete one Package
     *   }
     * })
     * 
     */
    delete<T extends PackageDeleteArgs>(args: SelectSubset<T, PackageDeleteArgs<ExtArgs>>): Prisma__PackageClient<$Result.GetResult<Prisma.$PackagePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Package.
     * @param {PackageUpdateArgs} args - Arguments to update one Package.
     * @example
     * // Update one Package
     * const package = await prisma.package.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PackageUpdateArgs>(args: SelectSubset<T, PackageUpdateArgs<ExtArgs>>): Prisma__PackageClient<$Result.GetResult<Prisma.$PackagePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Packages.
     * @param {PackageDeleteManyArgs} args - Arguments to filter Packages to delete.
     * @example
     * // Delete a few Packages
     * const { count } = await prisma.package.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PackageDeleteManyArgs>(args?: SelectSubset<T, PackageDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Packages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PackageUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Packages
     * const package = await prisma.package.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PackageUpdateManyArgs>(args: SelectSubset<T, PackageUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Packages and returns the data updated in the database.
     * @param {PackageUpdateManyAndReturnArgs} args - Arguments to update many Packages.
     * @example
     * // Update many Packages
     * const package = await prisma.package.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Packages and only return the `id`
     * const packageWithIdOnly = await prisma.package.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PackageUpdateManyAndReturnArgs>(args: SelectSubset<T, PackageUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PackagePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Package.
     * @param {PackageUpsertArgs} args - Arguments to update or create a Package.
     * @example
     * // Update or create a Package
     * const package = await prisma.package.upsert({
     *   create: {
     *     // ... data to create a Package
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Package we want to update
     *   }
     * })
     */
    upsert<T extends PackageUpsertArgs>(args: SelectSubset<T, PackageUpsertArgs<ExtArgs>>): Prisma__PackageClient<$Result.GetResult<Prisma.$PackagePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Packages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PackageCountArgs} args - Arguments to filter Packages to count.
     * @example
     * // Count the number of Packages
     * const count = await prisma.package.count({
     *   where: {
     *     // ... the filter for the Packages we want to count
     *   }
     * })
    **/
    count<T extends PackageCountArgs>(
      args?: Subset<T, PackageCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PackageCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Package.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PackageAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PackageAggregateArgs>(args: Subset<T, PackageAggregateArgs>): Prisma.PrismaPromise<GetPackageAggregateType<T>>

    /**
     * Group by Package.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PackageGroupByArgs} args - Group by arguments.
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
      T extends PackageGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PackageGroupByArgs['orderBy'] }
        : { orderBy?: PackageGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PackageGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPackageGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Package model
   */
  readonly fields: PackageFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Package.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PackageClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    resident<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    unit<T extends UnitDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UnitDefaultArgs<ExtArgs>>): Prisma__UnitClient<$Result.GetResult<Prisma.$UnitPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    receivedBy<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    history<T extends Package$historyArgs<ExtArgs> = {}>(args?: Subset<T, Package$historyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PackageHistoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    token<T extends Package$tokenArgs<ExtArgs> = {}>(args?: Subset<T, Package$tokenArgs<ExtArgs>>): Prisma__PickupTokenClient<$Result.GetResult<Prisma.$PickupTokenPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Package model
   */
  interface PackageFieldRefs {
    readonly id: FieldRef<"Package", 'String'>
    readonly trackingCode: FieldRef<"Package", 'String'>
    readonly carrier: FieldRef<"Package", 'String'>
    readonly description: FieldRef<"Package", 'String'>
    readonly status: FieldRef<"Package", 'PackageStatus'>
    readonly receivedAt: FieldRef<"Package", 'DateTime'>
    readonly notifiedAt: FieldRef<"Package", 'DateTime'>
    readonly pickedUpAt: FieldRef<"Package", 'DateTime'>
    readonly dueAt: FieldRef<"Package", 'DateTime'>
    readonly notificationSent: FieldRef<"Package", 'Boolean'>
    readonly createdAt: FieldRef<"Package", 'DateTime'>
    readonly updatedAt: FieldRef<"Package", 'DateTime'>
    readonly residentId: FieldRef<"Package", 'String'>
    readonly unitId: FieldRef<"Package", 'String'>
    readonly receivedById: FieldRef<"Package", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Package findUnique
   */
  export type PackageFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Package
     */
    select?: PackageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Package
     */
    omit?: PackageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PackageInclude<ExtArgs> | null
    /**
     * Filter, which Package to fetch.
     */
    where: PackageWhereUniqueInput
  }

  /**
   * Package findUniqueOrThrow
   */
  export type PackageFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Package
     */
    select?: PackageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Package
     */
    omit?: PackageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PackageInclude<ExtArgs> | null
    /**
     * Filter, which Package to fetch.
     */
    where: PackageWhereUniqueInput
  }

  /**
   * Package findFirst
   */
  export type PackageFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Package
     */
    select?: PackageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Package
     */
    omit?: PackageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PackageInclude<ExtArgs> | null
    /**
     * Filter, which Package to fetch.
     */
    where?: PackageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Packages to fetch.
     */
    orderBy?: PackageOrderByWithRelationInput | PackageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Packages.
     */
    cursor?: PackageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Packages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Packages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Packages.
     */
    distinct?: PackageScalarFieldEnum | PackageScalarFieldEnum[]
  }

  /**
   * Package findFirstOrThrow
   */
  export type PackageFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Package
     */
    select?: PackageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Package
     */
    omit?: PackageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PackageInclude<ExtArgs> | null
    /**
     * Filter, which Package to fetch.
     */
    where?: PackageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Packages to fetch.
     */
    orderBy?: PackageOrderByWithRelationInput | PackageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Packages.
     */
    cursor?: PackageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Packages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Packages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Packages.
     */
    distinct?: PackageScalarFieldEnum | PackageScalarFieldEnum[]
  }

  /**
   * Package findMany
   */
  export type PackageFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Package
     */
    select?: PackageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Package
     */
    omit?: PackageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PackageInclude<ExtArgs> | null
    /**
     * Filter, which Packages to fetch.
     */
    where?: PackageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Packages to fetch.
     */
    orderBy?: PackageOrderByWithRelationInput | PackageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Packages.
     */
    cursor?: PackageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Packages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Packages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Packages.
     */
    distinct?: PackageScalarFieldEnum | PackageScalarFieldEnum[]
  }

  /**
   * Package create
   */
  export type PackageCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Package
     */
    select?: PackageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Package
     */
    omit?: PackageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PackageInclude<ExtArgs> | null
    /**
     * The data needed to create a Package.
     */
    data: XOR<PackageCreateInput, PackageUncheckedCreateInput>
  }

  /**
   * Package createMany
   */
  export type PackageCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Packages.
     */
    data: PackageCreateManyInput | PackageCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Package createManyAndReturn
   */
  export type PackageCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Package
     */
    select?: PackageSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Package
     */
    omit?: PackageOmit<ExtArgs> | null
    /**
     * The data used to create many Packages.
     */
    data: PackageCreateManyInput | PackageCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PackageIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Package update
   */
  export type PackageUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Package
     */
    select?: PackageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Package
     */
    omit?: PackageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PackageInclude<ExtArgs> | null
    /**
     * The data needed to update a Package.
     */
    data: XOR<PackageUpdateInput, PackageUncheckedUpdateInput>
    /**
     * Choose, which Package to update.
     */
    where: PackageWhereUniqueInput
  }

  /**
   * Package updateMany
   */
  export type PackageUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Packages.
     */
    data: XOR<PackageUpdateManyMutationInput, PackageUncheckedUpdateManyInput>
    /**
     * Filter which Packages to update
     */
    where?: PackageWhereInput
    /**
     * Limit how many Packages to update.
     */
    limit?: number
  }

  /**
   * Package updateManyAndReturn
   */
  export type PackageUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Package
     */
    select?: PackageSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Package
     */
    omit?: PackageOmit<ExtArgs> | null
    /**
     * The data used to update Packages.
     */
    data: XOR<PackageUpdateManyMutationInput, PackageUncheckedUpdateManyInput>
    /**
     * Filter which Packages to update
     */
    where?: PackageWhereInput
    /**
     * Limit how many Packages to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PackageIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Package upsert
   */
  export type PackageUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Package
     */
    select?: PackageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Package
     */
    omit?: PackageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PackageInclude<ExtArgs> | null
    /**
     * The filter to search for the Package to update in case it exists.
     */
    where: PackageWhereUniqueInput
    /**
     * In case the Package found by the `where` argument doesn't exist, create a new Package with this data.
     */
    create: XOR<PackageCreateInput, PackageUncheckedCreateInput>
    /**
     * In case the Package was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PackageUpdateInput, PackageUncheckedUpdateInput>
  }

  /**
   * Package delete
   */
  export type PackageDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Package
     */
    select?: PackageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Package
     */
    omit?: PackageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PackageInclude<ExtArgs> | null
    /**
     * Filter which Package to delete.
     */
    where: PackageWhereUniqueInput
  }

  /**
   * Package deleteMany
   */
  export type PackageDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Packages to delete
     */
    where?: PackageWhereInput
    /**
     * Limit how many Packages to delete.
     */
    limit?: number
  }

  /**
   * Package.history
   */
  export type Package$historyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PackageHistory
     */
    select?: PackageHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the PackageHistory
     */
    omit?: PackageHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PackageHistoryInclude<ExtArgs> | null
    where?: PackageHistoryWhereInput
    orderBy?: PackageHistoryOrderByWithRelationInput | PackageHistoryOrderByWithRelationInput[]
    cursor?: PackageHistoryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PackageHistoryScalarFieldEnum | PackageHistoryScalarFieldEnum[]
  }

  /**
   * Package.token
   */
  export type Package$tokenArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PickupToken
     */
    select?: PickupTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PickupToken
     */
    omit?: PickupTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PickupTokenInclude<ExtArgs> | null
    where?: PickupTokenWhereInput
  }

  /**
   * Package without action
   */
  export type PackageDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Package
     */
    select?: PackageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Package
     */
    omit?: PackageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PackageInclude<ExtArgs> | null
  }


  /**
   * Model PickupToken
   */

  export type AggregatePickupToken = {
    _count: PickupTokenCountAggregateOutputType | null
    _min: PickupTokenMinAggregateOutputType | null
    _max: PickupTokenMaxAggregateOutputType | null
  }

  export type PickupTokenMinAggregateOutputType = {
    id: string | null
    code: string | null
    qrValue: string | null
    generatedAt: Date | null
    expiresAt: Date | null
    usedAt: Date | null
    packageId: string | null
    generatedById: string | null
    validatedById: string | null
  }

  export type PickupTokenMaxAggregateOutputType = {
    id: string | null
    code: string | null
    qrValue: string | null
    generatedAt: Date | null
    expiresAt: Date | null
    usedAt: Date | null
    packageId: string | null
    generatedById: string | null
    validatedById: string | null
  }

  export type PickupTokenCountAggregateOutputType = {
    id: number
    code: number
    qrValue: number
    generatedAt: number
    expiresAt: number
    usedAt: number
    packageId: number
    generatedById: number
    validatedById: number
    _all: number
  }


  export type PickupTokenMinAggregateInputType = {
    id?: true
    code?: true
    qrValue?: true
    generatedAt?: true
    expiresAt?: true
    usedAt?: true
    packageId?: true
    generatedById?: true
    validatedById?: true
  }

  export type PickupTokenMaxAggregateInputType = {
    id?: true
    code?: true
    qrValue?: true
    generatedAt?: true
    expiresAt?: true
    usedAt?: true
    packageId?: true
    generatedById?: true
    validatedById?: true
  }

  export type PickupTokenCountAggregateInputType = {
    id?: true
    code?: true
    qrValue?: true
    generatedAt?: true
    expiresAt?: true
    usedAt?: true
    packageId?: true
    generatedById?: true
    validatedById?: true
    _all?: true
  }

  export type PickupTokenAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PickupToken to aggregate.
     */
    where?: PickupTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PickupTokens to fetch.
     */
    orderBy?: PickupTokenOrderByWithRelationInput | PickupTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PickupTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PickupTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PickupTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PickupTokens
    **/
    _count?: true | PickupTokenCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PickupTokenMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PickupTokenMaxAggregateInputType
  }

  export type GetPickupTokenAggregateType<T extends PickupTokenAggregateArgs> = {
        [P in keyof T & keyof AggregatePickupToken]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePickupToken[P]>
      : GetScalarType<T[P], AggregatePickupToken[P]>
  }




  export type PickupTokenGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PickupTokenWhereInput
    orderBy?: PickupTokenOrderByWithAggregationInput | PickupTokenOrderByWithAggregationInput[]
    by: PickupTokenScalarFieldEnum[] | PickupTokenScalarFieldEnum
    having?: PickupTokenScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PickupTokenCountAggregateInputType | true
    _min?: PickupTokenMinAggregateInputType
    _max?: PickupTokenMaxAggregateInputType
  }

  export type PickupTokenGroupByOutputType = {
    id: string
    code: string
    qrValue: string
    generatedAt: Date
    expiresAt: Date
    usedAt: Date | null
    packageId: string
    generatedById: string
    validatedById: string | null
    _count: PickupTokenCountAggregateOutputType | null
    _min: PickupTokenMinAggregateOutputType | null
    _max: PickupTokenMaxAggregateOutputType | null
  }

  type GetPickupTokenGroupByPayload<T extends PickupTokenGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PickupTokenGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PickupTokenGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PickupTokenGroupByOutputType[P]>
            : GetScalarType<T[P], PickupTokenGroupByOutputType[P]>
        }
      >
    >


  export type PickupTokenSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    code?: boolean
    qrValue?: boolean
    generatedAt?: boolean
    expiresAt?: boolean
    usedAt?: boolean
    packageId?: boolean
    generatedById?: boolean
    validatedById?: boolean
    package?: boolean | PackageDefaultArgs<ExtArgs>
    generatedBy?: boolean | UserDefaultArgs<ExtArgs>
    validatedBy?: boolean | PickupToken$validatedByArgs<ExtArgs>
  }, ExtArgs["result"]["pickupToken"]>

  export type PickupTokenSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    code?: boolean
    qrValue?: boolean
    generatedAt?: boolean
    expiresAt?: boolean
    usedAt?: boolean
    packageId?: boolean
    generatedById?: boolean
    validatedById?: boolean
    package?: boolean | PackageDefaultArgs<ExtArgs>
    generatedBy?: boolean | UserDefaultArgs<ExtArgs>
    validatedBy?: boolean | PickupToken$validatedByArgs<ExtArgs>
  }, ExtArgs["result"]["pickupToken"]>

  export type PickupTokenSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    code?: boolean
    qrValue?: boolean
    generatedAt?: boolean
    expiresAt?: boolean
    usedAt?: boolean
    packageId?: boolean
    generatedById?: boolean
    validatedById?: boolean
    package?: boolean | PackageDefaultArgs<ExtArgs>
    generatedBy?: boolean | UserDefaultArgs<ExtArgs>
    validatedBy?: boolean | PickupToken$validatedByArgs<ExtArgs>
  }, ExtArgs["result"]["pickupToken"]>

  export type PickupTokenSelectScalar = {
    id?: boolean
    code?: boolean
    qrValue?: boolean
    generatedAt?: boolean
    expiresAt?: boolean
    usedAt?: boolean
    packageId?: boolean
    generatedById?: boolean
    validatedById?: boolean
  }

  export type PickupTokenOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "code" | "qrValue" | "generatedAt" | "expiresAt" | "usedAt" | "packageId" | "generatedById" | "validatedById", ExtArgs["result"]["pickupToken"]>
  export type PickupTokenInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    package?: boolean | PackageDefaultArgs<ExtArgs>
    generatedBy?: boolean | UserDefaultArgs<ExtArgs>
    validatedBy?: boolean | PickupToken$validatedByArgs<ExtArgs>
  }
  export type PickupTokenIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    package?: boolean | PackageDefaultArgs<ExtArgs>
    generatedBy?: boolean | UserDefaultArgs<ExtArgs>
    validatedBy?: boolean | PickupToken$validatedByArgs<ExtArgs>
  }
  export type PickupTokenIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    package?: boolean | PackageDefaultArgs<ExtArgs>
    generatedBy?: boolean | UserDefaultArgs<ExtArgs>
    validatedBy?: boolean | PickupToken$validatedByArgs<ExtArgs>
  }

  export type $PickupTokenPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PickupToken"
    objects: {
      package: Prisma.$PackagePayload<ExtArgs>
      generatedBy: Prisma.$UserPayload<ExtArgs>
      validatedBy: Prisma.$UserPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      code: string
      qrValue: string
      generatedAt: Date
      expiresAt: Date
      usedAt: Date | null
      packageId: string
      generatedById: string
      validatedById: string | null
    }, ExtArgs["result"]["pickupToken"]>
    composites: {}
  }

  type PickupTokenGetPayload<S extends boolean | null | undefined | PickupTokenDefaultArgs> = $Result.GetResult<Prisma.$PickupTokenPayload, S>

  type PickupTokenCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PickupTokenFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PickupTokenCountAggregateInputType | true
    }

  export interface PickupTokenDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PickupToken'], meta: { name: 'PickupToken' } }
    /**
     * Find zero or one PickupToken that matches the filter.
     * @param {PickupTokenFindUniqueArgs} args - Arguments to find a PickupToken
     * @example
     * // Get one PickupToken
     * const pickupToken = await prisma.pickupToken.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PickupTokenFindUniqueArgs>(args: SelectSubset<T, PickupTokenFindUniqueArgs<ExtArgs>>): Prisma__PickupTokenClient<$Result.GetResult<Prisma.$PickupTokenPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PickupToken that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PickupTokenFindUniqueOrThrowArgs} args - Arguments to find a PickupToken
     * @example
     * // Get one PickupToken
     * const pickupToken = await prisma.pickupToken.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PickupTokenFindUniqueOrThrowArgs>(args: SelectSubset<T, PickupTokenFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PickupTokenClient<$Result.GetResult<Prisma.$PickupTokenPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PickupToken that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PickupTokenFindFirstArgs} args - Arguments to find a PickupToken
     * @example
     * // Get one PickupToken
     * const pickupToken = await prisma.pickupToken.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PickupTokenFindFirstArgs>(args?: SelectSubset<T, PickupTokenFindFirstArgs<ExtArgs>>): Prisma__PickupTokenClient<$Result.GetResult<Prisma.$PickupTokenPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PickupToken that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PickupTokenFindFirstOrThrowArgs} args - Arguments to find a PickupToken
     * @example
     * // Get one PickupToken
     * const pickupToken = await prisma.pickupToken.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PickupTokenFindFirstOrThrowArgs>(args?: SelectSubset<T, PickupTokenFindFirstOrThrowArgs<ExtArgs>>): Prisma__PickupTokenClient<$Result.GetResult<Prisma.$PickupTokenPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PickupTokens that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PickupTokenFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PickupTokens
     * const pickupTokens = await prisma.pickupToken.findMany()
     * 
     * // Get first 10 PickupTokens
     * const pickupTokens = await prisma.pickupToken.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const pickupTokenWithIdOnly = await prisma.pickupToken.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PickupTokenFindManyArgs>(args?: SelectSubset<T, PickupTokenFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PickupTokenPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PickupToken.
     * @param {PickupTokenCreateArgs} args - Arguments to create a PickupToken.
     * @example
     * // Create one PickupToken
     * const PickupToken = await prisma.pickupToken.create({
     *   data: {
     *     // ... data to create a PickupToken
     *   }
     * })
     * 
     */
    create<T extends PickupTokenCreateArgs>(args: SelectSubset<T, PickupTokenCreateArgs<ExtArgs>>): Prisma__PickupTokenClient<$Result.GetResult<Prisma.$PickupTokenPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PickupTokens.
     * @param {PickupTokenCreateManyArgs} args - Arguments to create many PickupTokens.
     * @example
     * // Create many PickupTokens
     * const pickupToken = await prisma.pickupToken.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PickupTokenCreateManyArgs>(args?: SelectSubset<T, PickupTokenCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PickupTokens and returns the data saved in the database.
     * @param {PickupTokenCreateManyAndReturnArgs} args - Arguments to create many PickupTokens.
     * @example
     * // Create many PickupTokens
     * const pickupToken = await prisma.pickupToken.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PickupTokens and only return the `id`
     * const pickupTokenWithIdOnly = await prisma.pickupToken.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PickupTokenCreateManyAndReturnArgs>(args?: SelectSubset<T, PickupTokenCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PickupTokenPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a PickupToken.
     * @param {PickupTokenDeleteArgs} args - Arguments to delete one PickupToken.
     * @example
     * // Delete one PickupToken
     * const PickupToken = await prisma.pickupToken.delete({
     *   where: {
     *     // ... filter to delete one PickupToken
     *   }
     * })
     * 
     */
    delete<T extends PickupTokenDeleteArgs>(args: SelectSubset<T, PickupTokenDeleteArgs<ExtArgs>>): Prisma__PickupTokenClient<$Result.GetResult<Prisma.$PickupTokenPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PickupToken.
     * @param {PickupTokenUpdateArgs} args - Arguments to update one PickupToken.
     * @example
     * // Update one PickupToken
     * const pickupToken = await prisma.pickupToken.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PickupTokenUpdateArgs>(args: SelectSubset<T, PickupTokenUpdateArgs<ExtArgs>>): Prisma__PickupTokenClient<$Result.GetResult<Prisma.$PickupTokenPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PickupTokens.
     * @param {PickupTokenDeleteManyArgs} args - Arguments to filter PickupTokens to delete.
     * @example
     * // Delete a few PickupTokens
     * const { count } = await prisma.pickupToken.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PickupTokenDeleteManyArgs>(args?: SelectSubset<T, PickupTokenDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PickupTokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PickupTokenUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PickupTokens
     * const pickupToken = await prisma.pickupToken.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PickupTokenUpdateManyArgs>(args: SelectSubset<T, PickupTokenUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PickupTokens and returns the data updated in the database.
     * @param {PickupTokenUpdateManyAndReturnArgs} args - Arguments to update many PickupTokens.
     * @example
     * // Update many PickupTokens
     * const pickupToken = await prisma.pickupToken.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more PickupTokens and only return the `id`
     * const pickupTokenWithIdOnly = await prisma.pickupToken.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PickupTokenUpdateManyAndReturnArgs>(args: SelectSubset<T, PickupTokenUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PickupTokenPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one PickupToken.
     * @param {PickupTokenUpsertArgs} args - Arguments to update or create a PickupToken.
     * @example
     * // Update or create a PickupToken
     * const pickupToken = await prisma.pickupToken.upsert({
     *   create: {
     *     // ... data to create a PickupToken
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PickupToken we want to update
     *   }
     * })
     */
    upsert<T extends PickupTokenUpsertArgs>(args: SelectSubset<T, PickupTokenUpsertArgs<ExtArgs>>): Prisma__PickupTokenClient<$Result.GetResult<Prisma.$PickupTokenPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PickupTokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PickupTokenCountArgs} args - Arguments to filter PickupTokens to count.
     * @example
     * // Count the number of PickupTokens
     * const count = await prisma.pickupToken.count({
     *   where: {
     *     // ... the filter for the PickupTokens we want to count
     *   }
     * })
    **/
    count<T extends PickupTokenCountArgs>(
      args?: Subset<T, PickupTokenCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PickupTokenCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PickupToken.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PickupTokenAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PickupTokenAggregateArgs>(args: Subset<T, PickupTokenAggregateArgs>): Prisma.PrismaPromise<GetPickupTokenAggregateType<T>>

    /**
     * Group by PickupToken.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PickupTokenGroupByArgs} args - Group by arguments.
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
      T extends PickupTokenGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PickupTokenGroupByArgs['orderBy'] }
        : { orderBy?: PickupTokenGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PickupTokenGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPickupTokenGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PickupToken model
   */
  readonly fields: PickupTokenFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PickupToken.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PickupTokenClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    package<T extends PackageDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PackageDefaultArgs<ExtArgs>>): Prisma__PackageClient<$Result.GetResult<Prisma.$PackagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    generatedBy<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    validatedBy<T extends PickupToken$validatedByArgs<ExtArgs> = {}>(args?: Subset<T, PickupToken$validatedByArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the PickupToken model
   */
  interface PickupTokenFieldRefs {
    readonly id: FieldRef<"PickupToken", 'String'>
    readonly code: FieldRef<"PickupToken", 'String'>
    readonly qrValue: FieldRef<"PickupToken", 'String'>
    readonly generatedAt: FieldRef<"PickupToken", 'DateTime'>
    readonly expiresAt: FieldRef<"PickupToken", 'DateTime'>
    readonly usedAt: FieldRef<"PickupToken", 'DateTime'>
    readonly packageId: FieldRef<"PickupToken", 'String'>
    readonly generatedById: FieldRef<"PickupToken", 'String'>
    readonly validatedById: FieldRef<"PickupToken", 'String'>
  }
    

  // Custom InputTypes
  /**
   * PickupToken findUnique
   */
  export type PickupTokenFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PickupToken
     */
    select?: PickupTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PickupToken
     */
    omit?: PickupTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PickupTokenInclude<ExtArgs> | null
    /**
     * Filter, which PickupToken to fetch.
     */
    where: PickupTokenWhereUniqueInput
  }

  /**
   * PickupToken findUniqueOrThrow
   */
  export type PickupTokenFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PickupToken
     */
    select?: PickupTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PickupToken
     */
    omit?: PickupTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PickupTokenInclude<ExtArgs> | null
    /**
     * Filter, which PickupToken to fetch.
     */
    where: PickupTokenWhereUniqueInput
  }

  /**
   * PickupToken findFirst
   */
  export type PickupTokenFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PickupToken
     */
    select?: PickupTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PickupToken
     */
    omit?: PickupTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PickupTokenInclude<ExtArgs> | null
    /**
     * Filter, which PickupToken to fetch.
     */
    where?: PickupTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PickupTokens to fetch.
     */
    orderBy?: PickupTokenOrderByWithRelationInput | PickupTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PickupTokens.
     */
    cursor?: PickupTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PickupTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PickupTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PickupTokens.
     */
    distinct?: PickupTokenScalarFieldEnum | PickupTokenScalarFieldEnum[]
  }

  /**
   * PickupToken findFirstOrThrow
   */
  export type PickupTokenFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PickupToken
     */
    select?: PickupTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PickupToken
     */
    omit?: PickupTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PickupTokenInclude<ExtArgs> | null
    /**
     * Filter, which PickupToken to fetch.
     */
    where?: PickupTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PickupTokens to fetch.
     */
    orderBy?: PickupTokenOrderByWithRelationInput | PickupTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PickupTokens.
     */
    cursor?: PickupTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PickupTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PickupTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PickupTokens.
     */
    distinct?: PickupTokenScalarFieldEnum | PickupTokenScalarFieldEnum[]
  }

  /**
   * PickupToken findMany
   */
  export type PickupTokenFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PickupToken
     */
    select?: PickupTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PickupToken
     */
    omit?: PickupTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PickupTokenInclude<ExtArgs> | null
    /**
     * Filter, which PickupTokens to fetch.
     */
    where?: PickupTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PickupTokens to fetch.
     */
    orderBy?: PickupTokenOrderByWithRelationInput | PickupTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PickupTokens.
     */
    cursor?: PickupTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PickupTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PickupTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PickupTokens.
     */
    distinct?: PickupTokenScalarFieldEnum | PickupTokenScalarFieldEnum[]
  }

  /**
   * PickupToken create
   */
  export type PickupTokenCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PickupToken
     */
    select?: PickupTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PickupToken
     */
    omit?: PickupTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PickupTokenInclude<ExtArgs> | null
    /**
     * The data needed to create a PickupToken.
     */
    data: XOR<PickupTokenCreateInput, PickupTokenUncheckedCreateInput>
  }

  /**
   * PickupToken createMany
   */
  export type PickupTokenCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PickupTokens.
     */
    data: PickupTokenCreateManyInput | PickupTokenCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PickupToken createManyAndReturn
   */
  export type PickupTokenCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PickupToken
     */
    select?: PickupTokenSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PickupToken
     */
    omit?: PickupTokenOmit<ExtArgs> | null
    /**
     * The data used to create many PickupTokens.
     */
    data: PickupTokenCreateManyInput | PickupTokenCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PickupTokenIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * PickupToken update
   */
  export type PickupTokenUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PickupToken
     */
    select?: PickupTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PickupToken
     */
    omit?: PickupTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PickupTokenInclude<ExtArgs> | null
    /**
     * The data needed to update a PickupToken.
     */
    data: XOR<PickupTokenUpdateInput, PickupTokenUncheckedUpdateInput>
    /**
     * Choose, which PickupToken to update.
     */
    where: PickupTokenWhereUniqueInput
  }

  /**
   * PickupToken updateMany
   */
  export type PickupTokenUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PickupTokens.
     */
    data: XOR<PickupTokenUpdateManyMutationInput, PickupTokenUncheckedUpdateManyInput>
    /**
     * Filter which PickupTokens to update
     */
    where?: PickupTokenWhereInput
    /**
     * Limit how many PickupTokens to update.
     */
    limit?: number
  }

  /**
   * PickupToken updateManyAndReturn
   */
  export type PickupTokenUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PickupToken
     */
    select?: PickupTokenSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PickupToken
     */
    omit?: PickupTokenOmit<ExtArgs> | null
    /**
     * The data used to update PickupTokens.
     */
    data: XOR<PickupTokenUpdateManyMutationInput, PickupTokenUncheckedUpdateManyInput>
    /**
     * Filter which PickupTokens to update
     */
    where?: PickupTokenWhereInput
    /**
     * Limit how many PickupTokens to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PickupTokenIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * PickupToken upsert
   */
  export type PickupTokenUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PickupToken
     */
    select?: PickupTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PickupToken
     */
    omit?: PickupTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PickupTokenInclude<ExtArgs> | null
    /**
     * The filter to search for the PickupToken to update in case it exists.
     */
    where: PickupTokenWhereUniqueInput
    /**
     * In case the PickupToken found by the `where` argument doesn't exist, create a new PickupToken with this data.
     */
    create: XOR<PickupTokenCreateInput, PickupTokenUncheckedCreateInput>
    /**
     * In case the PickupToken was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PickupTokenUpdateInput, PickupTokenUncheckedUpdateInput>
  }

  /**
   * PickupToken delete
   */
  export type PickupTokenDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PickupToken
     */
    select?: PickupTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PickupToken
     */
    omit?: PickupTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PickupTokenInclude<ExtArgs> | null
    /**
     * Filter which PickupToken to delete.
     */
    where: PickupTokenWhereUniqueInput
  }

  /**
   * PickupToken deleteMany
   */
  export type PickupTokenDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PickupTokens to delete
     */
    where?: PickupTokenWhereInput
    /**
     * Limit how many PickupTokens to delete.
     */
    limit?: number
  }

  /**
   * PickupToken.validatedBy
   */
  export type PickupToken$validatedByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
    where?: UserWhereInput
  }

  /**
   * PickupToken without action
   */
  export type PickupTokenDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PickupToken
     */
    select?: PickupTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PickupToken
     */
    omit?: PickupTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PickupTokenInclude<ExtArgs> | null
  }


  /**
   * Model PackageHistory
   */

  export type AggregatePackageHistory = {
    _count: PackageHistoryCountAggregateOutputType | null
    _min: PackageHistoryMinAggregateOutputType | null
    _max: PackageHistoryMaxAggregateOutputType | null
  }

  export type PackageHistoryMinAggregateOutputType = {
    id: string | null
    type: $Enums.HistoryType | null
    note: string | null
    createdAt: Date | null
    fromStatus: $Enums.PackageStatus | null
    toStatus: $Enums.PackageStatus | null
    packageId: string | null
    actorId: string | null
  }

  export type PackageHistoryMaxAggregateOutputType = {
    id: string | null
    type: $Enums.HistoryType | null
    note: string | null
    createdAt: Date | null
    fromStatus: $Enums.PackageStatus | null
    toStatus: $Enums.PackageStatus | null
    packageId: string | null
    actorId: string | null
  }

  export type PackageHistoryCountAggregateOutputType = {
    id: number
    type: number
    note: number
    createdAt: number
    fromStatus: number
    toStatus: number
    packageId: number
    actorId: number
    _all: number
  }


  export type PackageHistoryMinAggregateInputType = {
    id?: true
    type?: true
    note?: true
    createdAt?: true
    fromStatus?: true
    toStatus?: true
    packageId?: true
    actorId?: true
  }

  export type PackageHistoryMaxAggregateInputType = {
    id?: true
    type?: true
    note?: true
    createdAt?: true
    fromStatus?: true
    toStatus?: true
    packageId?: true
    actorId?: true
  }

  export type PackageHistoryCountAggregateInputType = {
    id?: true
    type?: true
    note?: true
    createdAt?: true
    fromStatus?: true
    toStatus?: true
    packageId?: true
    actorId?: true
    _all?: true
  }

  export type PackageHistoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PackageHistory to aggregate.
     */
    where?: PackageHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PackageHistories to fetch.
     */
    orderBy?: PackageHistoryOrderByWithRelationInput | PackageHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PackageHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PackageHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PackageHistories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PackageHistories
    **/
    _count?: true | PackageHistoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PackageHistoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PackageHistoryMaxAggregateInputType
  }

  export type GetPackageHistoryAggregateType<T extends PackageHistoryAggregateArgs> = {
        [P in keyof T & keyof AggregatePackageHistory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePackageHistory[P]>
      : GetScalarType<T[P], AggregatePackageHistory[P]>
  }




  export type PackageHistoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PackageHistoryWhereInput
    orderBy?: PackageHistoryOrderByWithAggregationInput | PackageHistoryOrderByWithAggregationInput[]
    by: PackageHistoryScalarFieldEnum[] | PackageHistoryScalarFieldEnum
    having?: PackageHistoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PackageHistoryCountAggregateInputType | true
    _min?: PackageHistoryMinAggregateInputType
    _max?: PackageHistoryMaxAggregateInputType
  }

  export type PackageHistoryGroupByOutputType = {
    id: string
    type: $Enums.HistoryType
    note: string
    createdAt: Date
    fromStatus: $Enums.PackageStatus | null
    toStatus: $Enums.PackageStatus | null
    packageId: string
    actorId: string | null
    _count: PackageHistoryCountAggregateOutputType | null
    _min: PackageHistoryMinAggregateOutputType | null
    _max: PackageHistoryMaxAggregateOutputType | null
  }

  type GetPackageHistoryGroupByPayload<T extends PackageHistoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PackageHistoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PackageHistoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PackageHistoryGroupByOutputType[P]>
            : GetScalarType<T[P], PackageHistoryGroupByOutputType[P]>
        }
      >
    >


  export type PackageHistorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    type?: boolean
    note?: boolean
    createdAt?: boolean
    fromStatus?: boolean
    toStatus?: boolean
    packageId?: boolean
    actorId?: boolean
    package?: boolean | PackageDefaultArgs<ExtArgs>
    actor?: boolean | PackageHistory$actorArgs<ExtArgs>
  }, ExtArgs["result"]["packageHistory"]>

  export type PackageHistorySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    type?: boolean
    note?: boolean
    createdAt?: boolean
    fromStatus?: boolean
    toStatus?: boolean
    packageId?: boolean
    actorId?: boolean
    package?: boolean | PackageDefaultArgs<ExtArgs>
    actor?: boolean | PackageHistory$actorArgs<ExtArgs>
  }, ExtArgs["result"]["packageHistory"]>

  export type PackageHistorySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    type?: boolean
    note?: boolean
    createdAt?: boolean
    fromStatus?: boolean
    toStatus?: boolean
    packageId?: boolean
    actorId?: boolean
    package?: boolean | PackageDefaultArgs<ExtArgs>
    actor?: boolean | PackageHistory$actorArgs<ExtArgs>
  }, ExtArgs["result"]["packageHistory"]>

  export type PackageHistorySelectScalar = {
    id?: boolean
    type?: boolean
    note?: boolean
    createdAt?: boolean
    fromStatus?: boolean
    toStatus?: boolean
    packageId?: boolean
    actorId?: boolean
  }

  export type PackageHistoryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "type" | "note" | "createdAt" | "fromStatus" | "toStatus" | "packageId" | "actorId", ExtArgs["result"]["packageHistory"]>
  export type PackageHistoryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    package?: boolean | PackageDefaultArgs<ExtArgs>
    actor?: boolean | PackageHistory$actorArgs<ExtArgs>
  }
  export type PackageHistoryIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    package?: boolean | PackageDefaultArgs<ExtArgs>
    actor?: boolean | PackageHistory$actorArgs<ExtArgs>
  }
  export type PackageHistoryIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    package?: boolean | PackageDefaultArgs<ExtArgs>
    actor?: boolean | PackageHistory$actorArgs<ExtArgs>
  }

  export type $PackageHistoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PackageHistory"
    objects: {
      package: Prisma.$PackagePayload<ExtArgs>
      actor: Prisma.$UserPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      type: $Enums.HistoryType
      note: string
      createdAt: Date
      fromStatus: $Enums.PackageStatus | null
      toStatus: $Enums.PackageStatus | null
      packageId: string
      actorId: string | null
    }, ExtArgs["result"]["packageHistory"]>
    composites: {}
  }

  type PackageHistoryGetPayload<S extends boolean | null | undefined | PackageHistoryDefaultArgs> = $Result.GetResult<Prisma.$PackageHistoryPayload, S>

  type PackageHistoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PackageHistoryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PackageHistoryCountAggregateInputType | true
    }

  export interface PackageHistoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PackageHistory'], meta: { name: 'PackageHistory' } }
    /**
     * Find zero or one PackageHistory that matches the filter.
     * @param {PackageHistoryFindUniqueArgs} args - Arguments to find a PackageHistory
     * @example
     * // Get one PackageHistory
     * const packageHistory = await prisma.packageHistory.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PackageHistoryFindUniqueArgs>(args: SelectSubset<T, PackageHistoryFindUniqueArgs<ExtArgs>>): Prisma__PackageHistoryClient<$Result.GetResult<Prisma.$PackageHistoryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PackageHistory that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PackageHistoryFindUniqueOrThrowArgs} args - Arguments to find a PackageHistory
     * @example
     * // Get one PackageHistory
     * const packageHistory = await prisma.packageHistory.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PackageHistoryFindUniqueOrThrowArgs>(args: SelectSubset<T, PackageHistoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PackageHistoryClient<$Result.GetResult<Prisma.$PackageHistoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PackageHistory that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PackageHistoryFindFirstArgs} args - Arguments to find a PackageHistory
     * @example
     * // Get one PackageHistory
     * const packageHistory = await prisma.packageHistory.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PackageHistoryFindFirstArgs>(args?: SelectSubset<T, PackageHistoryFindFirstArgs<ExtArgs>>): Prisma__PackageHistoryClient<$Result.GetResult<Prisma.$PackageHistoryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PackageHistory that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PackageHistoryFindFirstOrThrowArgs} args - Arguments to find a PackageHistory
     * @example
     * // Get one PackageHistory
     * const packageHistory = await prisma.packageHistory.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PackageHistoryFindFirstOrThrowArgs>(args?: SelectSubset<T, PackageHistoryFindFirstOrThrowArgs<ExtArgs>>): Prisma__PackageHistoryClient<$Result.GetResult<Prisma.$PackageHistoryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PackageHistories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PackageHistoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PackageHistories
     * const packageHistories = await prisma.packageHistory.findMany()
     * 
     * // Get first 10 PackageHistories
     * const packageHistories = await prisma.packageHistory.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const packageHistoryWithIdOnly = await prisma.packageHistory.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PackageHistoryFindManyArgs>(args?: SelectSubset<T, PackageHistoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PackageHistoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PackageHistory.
     * @param {PackageHistoryCreateArgs} args - Arguments to create a PackageHistory.
     * @example
     * // Create one PackageHistory
     * const PackageHistory = await prisma.packageHistory.create({
     *   data: {
     *     // ... data to create a PackageHistory
     *   }
     * })
     * 
     */
    create<T extends PackageHistoryCreateArgs>(args: SelectSubset<T, PackageHistoryCreateArgs<ExtArgs>>): Prisma__PackageHistoryClient<$Result.GetResult<Prisma.$PackageHistoryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PackageHistories.
     * @param {PackageHistoryCreateManyArgs} args - Arguments to create many PackageHistories.
     * @example
     * // Create many PackageHistories
     * const packageHistory = await prisma.packageHistory.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PackageHistoryCreateManyArgs>(args?: SelectSubset<T, PackageHistoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PackageHistories and returns the data saved in the database.
     * @param {PackageHistoryCreateManyAndReturnArgs} args - Arguments to create many PackageHistories.
     * @example
     * // Create many PackageHistories
     * const packageHistory = await prisma.packageHistory.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PackageHistories and only return the `id`
     * const packageHistoryWithIdOnly = await prisma.packageHistory.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PackageHistoryCreateManyAndReturnArgs>(args?: SelectSubset<T, PackageHistoryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PackageHistoryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a PackageHistory.
     * @param {PackageHistoryDeleteArgs} args - Arguments to delete one PackageHistory.
     * @example
     * // Delete one PackageHistory
     * const PackageHistory = await prisma.packageHistory.delete({
     *   where: {
     *     // ... filter to delete one PackageHistory
     *   }
     * })
     * 
     */
    delete<T extends PackageHistoryDeleteArgs>(args: SelectSubset<T, PackageHistoryDeleteArgs<ExtArgs>>): Prisma__PackageHistoryClient<$Result.GetResult<Prisma.$PackageHistoryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PackageHistory.
     * @param {PackageHistoryUpdateArgs} args - Arguments to update one PackageHistory.
     * @example
     * // Update one PackageHistory
     * const packageHistory = await prisma.packageHistory.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PackageHistoryUpdateArgs>(args: SelectSubset<T, PackageHistoryUpdateArgs<ExtArgs>>): Prisma__PackageHistoryClient<$Result.GetResult<Prisma.$PackageHistoryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PackageHistories.
     * @param {PackageHistoryDeleteManyArgs} args - Arguments to filter PackageHistories to delete.
     * @example
     * // Delete a few PackageHistories
     * const { count } = await prisma.packageHistory.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PackageHistoryDeleteManyArgs>(args?: SelectSubset<T, PackageHistoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PackageHistories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PackageHistoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PackageHistories
     * const packageHistory = await prisma.packageHistory.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PackageHistoryUpdateManyArgs>(args: SelectSubset<T, PackageHistoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PackageHistories and returns the data updated in the database.
     * @param {PackageHistoryUpdateManyAndReturnArgs} args - Arguments to update many PackageHistories.
     * @example
     * // Update many PackageHistories
     * const packageHistory = await prisma.packageHistory.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more PackageHistories and only return the `id`
     * const packageHistoryWithIdOnly = await prisma.packageHistory.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PackageHistoryUpdateManyAndReturnArgs>(args: SelectSubset<T, PackageHistoryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PackageHistoryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one PackageHistory.
     * @param {PackageHistoryUpsertArgs} args - Arguments to update or create a PackageHistory.
     * @example
     * // Update or create a PackageHistory
     * const packageHistory = await prisma.packageHistory.upsert({
     *   create: {
     *     // ... data to create a PackageHistory
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PackageHistory we want to update
     *   }
     * })
     */
    upsert<T extends PackageHistoryUpsertArgs>(args: SelectSubset<T, PackageHistoryUpsertArgs<ExtArgs>>): Prisma__PackageHistoryClient<$Result.GetResult<Prisma.$PackageHistoryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PackageHistories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PackageHistoryCountArgs} args - Arguments to filter PackageHistories to count.
     * @example
     * // Count the number of PackageHistories
     * const count = await prisma.packageHistory.count({
     *   where: {
     *     // ... the filter for the PackageHistories we want to count
     *   }
     * })
    **/
    count<T extends PackageHistoryCountArgs>(
      args?: Subset<T, PackageHistoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PackageHistoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PackageHistory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PackageHistoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PackageHistoryAggregateArgs>(args: Subset<T, PackageHistoryAggregateArgs>): Prisma.PrismaPromise<GetPackageHistoryAggregateType<T>>

    /**
     * Group by PackageHistory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PackageHistoryGroupByArgs} args - Group by arguments.
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
      T extends PackageHistoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PackageHistoryGroupByArgs['orderBy'] }
        : { orderBy?: PackageHistoryGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PackageHistoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPackageHistoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PackageHistory model
   */
  readonly fields: PackageHistoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PackageHistory.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PackageHistoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    package<T extends PackageDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PackageDefaultArgs<ExtArgs>>): Prisma__PackageClient<$Result.GetResult<Prisma.$PackagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    actor<T extends PackageHistory$actorArgs<ExtArgs> = {}>(args?: Subset<T, PackageHistory$actorArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the PackageHistory model
   */
  interface PackageHistoryFieldRefs {
    readonly id: FieldRef<"PackageHistory", 'String'>
    readonly type: FieldRef<"PackageHistory", 'HistoryType'>
    readonly note: FieldRef<"PackageHistory", 'String'>
    readonly createdAt: FieldRef<"PackageHistory", 'DateTime'>
    readonly fromStatus: FieldRef<"PackageHistory", 'PackageStatus'>
    readonly toStatus: FieldRef<"PackageHistory", 'PackageStatus'>
    readonly packageId: FieldRef<"PackageHistory", 'String'>
    readonly actorId: FieldRef<"PackageHistory", 'String'>
  }
    

  // Custom InputTypes
  /**
   * PackageHistory findUnique
   */
  export type PackageHistoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PackageHistory
     */
    select?: PackageHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the PackageHistory
     */
    omit?: PackageHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PackageHistoryInclude<ExtArgs> | null
    /**
     * Filter, which PackageHistory to fetch.
     */
    where: PackageHistoryWhereUniqueInput
  }

  /**
   * PackageHistory findUniqueOrThrow
   */
  export type PackageHistoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PackageHistory
     */
    select?: PackageHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the PackageHistory
     */
    omit?: PackageHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PackageHistoryInclude<ExtArgs> | null
    /**
     * Filter, which PackageHistory to fetch.
     */
    where: PackageHistoryWhereUniqueInput
  }

  /**
   * PackageHistory findFirst
   */
  export type PackageHistoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PackageHistory
     */
    select?: PackageHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the PackageHistory
     */
    omit?: PackageHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PackageHistoryInclude<ExtArgs> | null
    /**
     * Filter, which PackageHistory to fetch.
     */
    where?: PackageHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PackageHistories to fetch.
     */
    orderBy?: PackageHistoryOrderByWithRelationInput | PackageHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PackageHistories.
     */
    cursor?: PackageHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PackageHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PackageHistories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PackageHistories.
     */
    distinct?: PackageHistoryScalarFieldEnum | PackageHistoryScalarFieldEnum[]
  }

  /**
   * PackageHistory findFirstOrThrow
   */
  export type PackageHistoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PackageHistory
     */
    select?: PackageHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the PackageHistory
     */
    omit?: PackageHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PackageHistoryInclude<ExtArgs> | null
    /**
     * Filter, which PackageHistory to fetch.
     */
    where?: PackageHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PackageHistories to fetch.
     */
    orderBy?: PackageHistoryOrderByWithRelationInput | PackageHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PackageHistories.
     */
    cursor?: PackageHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PackageHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PackageHistories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PackageHistories.
     */
    distinct?: PackageHistoryScalarFieldEnum | PackageHistoryScalarFieldEnum[]
  }

  /**
   * PackageHistory findMany
   */
  export type PackageHistoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PackageHistory
     */
    select?: PackageHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the PackageHistory
     */
    omit?: PackageHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PackageHistoryInclude<ExtArgs> | null
    /**
     * Filter, which PackageHistories to fetch.
     */
    where?: PackageHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PackageHistories to fetch.
     */
    orderBy?: PackageHistoryOrderByWithRelationInput | PackageHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PackageHistories.
     */
    cursor?: PackageHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PackageHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PackageHistories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PackageHistories.
     */
    distinct?: PackageHistoryScalarFieldEnum | PackageHistoryScalarFieldEnum[]
  }

  /**
   * PackageHistory create
   */
  export type PackageHistoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PackageHistory
     */
    select?: PackageHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the PackageHistory
     */
    omit?: PackageHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PackageHistoryInclude<ExtArgs> | null
    /**
     * The data needed to create a PackageHistory.
     */
    data: XOR<PackageHistoryCreateInput, PackageHistoryUncheckedCreateInput>
  }

  /**
   * PackageHistory createMany
   */
  export type PackageHistoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PackageHistories.
     */
    data: PackageHistoryCreateManyInput | PackageHistoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PackageHistory createManyAndReturn
   */
  export type PackageHistoryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PackageHistory
     */
    select?: PackageHistorySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PackageHistory
     */
    omit?: PackageHistoryOmit<ExtArgs> | null
    /**
     * The data used to create many PackageHistories.
     */
    data: PackageHistoryCreateManyInput | PackageHistoryCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PackageHistoryIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * PackageHistory update
   */
  export type PackageHistoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PackageHistory
     */
    select?: PackageHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the PackageHistory
     */
    omit?: PackageHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PackageHistoryInclude<ExtArgs> | null
    /**
     * The data needed to update a PackageHistory.
     */
    data: XOR<PackageHistoryUpdateInput, PackageHistoryUncheckedUpdateInput>
    /**
     * Choose, which PackageHistory to update.
     */
    where: PackageHistoryWhereUniqueInput
  }

  /**
   * PackageHistory updateMany
   */
  export type PackageHistoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PackageHistories.
     */
    data: XOR<PackageHistoryUpdateManyMutationInput, PackageHistoryUncheckedUpdateManyInput>
    /**
     * Filter which PackageHistories to update
     */
    where?: PackageHistoryWhereInput
    /**
     * Limit how many PackageHistories to update.
     */
    limit?: number
  }

  /**
   * PackageHistory updateManyAndReturn
   */
  export type PackageHistoryUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PackageHistory
     */
    select?: PackageHistorySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PackageHistory
     */
    omit?: PackageHistoryOmit<ExtArgs> | null
    /**
     * The data used to update PackageHistories.
     */
    data: XOR<PackageHistoryUpdateManyMutationInput, PackageHistoryUncheckedUpdateManyInput>
    /**
     * Filter which PackageHistories to update
     */
    where?: PackageHistoryWhereInput
    /**
     * Limit how many PackageHistories to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PackageHistoryIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * PackageHistory upsert
   */
  export type PackageHistoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PackageHistory
     */
    select?: PackageHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the PackageHistory
     */
    omit?: PackageHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PackageHistoryInclude<ExtArgs> | null
    /**
     * The filter to search for the PackageHistory to update in case it exists.
     */
    where: PackageHistoryWhereUniqueInput
    /**
     * In case the PackageHistory found by the `where` argument doesn't exist, create a new PackageHistory with this data.
     */
    create: XOR<PackageHistoryCreateInput, PackageHistoryUncheckedCreateInput>
    /**
     * In case the PackageHistory was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PackageHistoryUpdateInput, PackageHistoryUncheckedUpdateInput>
  }

  /**
   * PackageHistory delete
   */
  export type PackageHistoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PackageHistory
     */
    select?: PackageHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the PackageHistory
     */
    omit?: PackageHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PackageHistoryInclude<ExtArgs> | null
    /**
     * Filter which PackageHistory to delete.
     */
    where: PackageHistoryWhereUniqueInput
  }

  /**
   * PackageHistory deleteMany
   */
  export type PackageHistoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PackageHistories to delete
     */
    where?: PackageHistoryWhereInput
    /**
     * Limit how many PackageHistories to delete.
     */
    limit?: number
  }

  /**
   * PackageHistory.actor
   */
  export type PackageHistory$actorArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
    where?: UserWhereInput
  }

  /**
   * PackageHistory without action
   */
  export type PackageHistoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PackageHistory
     */
    select?: PackageHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the PackageHistory
     */
    omit?: PackageHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PackageHistoryInclude<ExtArgs> | null
  }


  /**
   * Model Notification
   */

  export type AggregateNotification = {
    _count: NotificationCountAggregateOutputType | null
    _min: NotificationMinAggregateOutputType | null
    _max: NotificationMaxAggregateOutputType | null
  }

  export type NotificationMinAggregateOutputType = {
    id: string | null
    type: $Enums.NotificationType | null
    title: string | null
    message: string | null
    href: string | null
    readAt: Date | null
    createdAt: Date | null
    userId: string | null
  }

  export type NotificationMaxAggregateOutputType = {
    id: string | null
    type: $Enums.NotificationType | null
    title: string | null
    message: string | null
    href: string | null
    readAt: Date | null
    createdAt: Date | null
    userId: string | null
  }

  export type NotificationCountAggregateOutputType = {
    id: number
    type: number
    title: number
    message: number
    href: number
    readAt: number
    createdAt: number
    userId: number
    _all: number
  }


  export type NotificationMinAggregateInputType = {
    id?: true
    type?: true
    title?: true
    message?: true
    href?: true
    readAt?: true
    createdAt?: true
    userId?: true
  }

  export type NotificationMaxAggregateInputType = {
    id?: true
    type?: true
    title?: true
    message?: true
    href?: true
    readAt?: true
    createdAt?: true
    userId?: true
  }

  export type NotificationCountAggregateInputType = {
    id?: true
    type?: true
    title?: true
    message?: true
    href?: true
    readAt?: true
    createdAt?: true
    userId?: true
    _all?: true
  }

  export type NotificationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Notification to aggregate.
     */
    where?: NotificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notifications to fetch.
     */
    orderBy?: NotificationOrderByWithRelationInput | NotificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: NotificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Notifications
    **/
    _count?: true | NotificationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: NotificationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: NotificationMaxAggregateInputType
  }

  export type GetNotificationAggregateType<T extends NotificationAggregateArgs> = {
        [P in keyof T & keyof AggregateNotification]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateNotification[P]>
      : GetScalarType<T[P], AggregateNotification[P]>
  }




  export type NotificationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NotificationWhereInput
    orderBy?: NotificationOrderByWithAggregationInput | NotificationOrderByWithAggregationInput[]
    by: NotificationScalarFieldEnum[] | NotificationScalarFieldEnum
    having?: NotificationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: NotificationCountAggregateInputType | true
    _min?: NotificationMinAggregateInputType
    _max?: NotificationMaxAggregateInputType
  }

  export type NotificationGroupByOutputType = {
    id: string
    type: $Enums.NotificationType
    title: string
    message: string
    href: string | null
    readAt: Date | null
    createdAt: Date
    userId: string
    _count: NotificationCountAggregateOutputType | null
    _min: NotificationMinAggregateOutputType | null
    _max: NotificationMaxAggregateOutputType | null
  }

  type GetNotificationGroupByPayload<T extends NotificationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<NotificationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof NotificationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], NotificationGroupByOutputType[P]>
            : GetScalarType<T[P], NotificationGroupByOutputType[P]>
        }
      >
    >


  export type NotificationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    type?: boolean
    title?: boolean
    message?: boolean
    href?: boolean
    readAt?: boolean
    createdAt?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    deliveries?: boolean | Notification$deliveriesArgs<ExtArgs>
    _count?: boolean | NotificationCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["notification"]>

  export type NotificationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    type?: boolean
    title?: boolean
    message?: boolean
    href?: boolean
    readAt?: boolean
    createdAt?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["notification"]>

  export type NotificationSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    type?: boolean
    title?: boolean
    message?: boolean
    href?: boolean
    readAt?: boolean
    createdAt?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["notification"]>

  export type NotificationSelectScalar = {
    id?: boolean
    type?: boolean
    title?: boolean
    message?: boolean
    href?: boolean
    readAt?: boolean
    createdAt?: boolean
    userId?: boolean
  }

  export type NotificationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "type" | "title" | "message" | "href" | "readAt" | "createdAt" | "userId", ExtArgs["result"]["notification"]>
  export type NotificationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    deliveries?: boolean | Notification$deliveriesArgs<ExtArgs>
    _count?: boolean | NotificationCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type NotificationIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type NotificationIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $NotificationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Notification"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      deliveries: Prisma.$NotificationDeliveryPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      type: $Enums.NotificationType
      title: string
      message: string
      href: string | null
      readAt: Date | null
      createdAt: Date
      userId: string
    }, ExtArgs["result"]["notification"]>
    composites: {}
  }

  type NotificationGetPayload<S extends boolean | null | undefined | NotificationDefaultArgs> = $Result.GetResult<Prisma.$NotificationPayload, S>

  type NotificationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<NotificationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: NotificationCountAggregateInputType | true
    }

  export interface NotificationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Notification'], meta: { name: 'Notification' } }
    /**
     * Find zero or one Notification that matches the filter.
     * @param {NotificationFindUniqueArgs} args - Arguments to find a Notification
     * @example
     * // Get one Notification
     * const notification = await prisma.notification.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends NotificationFindUniqueArgs>(args: SelectSubset<T, NotificationFindUniqueArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Notification that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {NotificationFindUniqueOrThrowArgs} args - Arguments to find a Notification
     * @example
     * // Get one Notification
     * const notification = await prisma.notification.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends NotificationFindUniqueOrThrowArgs>(args: SelectSubset<T, NotificationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Notification that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationFindFirstArgs} args - Arguments to find a Notification
     * @example
     * // Get one Notification
     * const notification = await prisma.notification.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends NotificationFindFirstArgs>(args?: SelectSubset<T, NotificationFindFirstArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Notification that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationFindFirstOrThrowArgs} args - Arguments to find a Notification
     * @example
     * // Get one Notification
     * const notification = await prisma.notification.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends NotificationFindFirstOrThrowArgs>(args?: SelectSubset<T, NotificationFindFirstOrThrowArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Notifications that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Notifications
     * const notifications = await prisma.notification.findMany()
     * 
     * // Get first 10 Notifications
     * const notifications = await prisma.notification.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const notificationWithIdOnly = await prisma.notification.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends NotificationFindManyArgs>(args?: SelectSubset<T, NotificationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Notification.
     * @param {NotificationCreateArgs} args - Arguments to create a Notification.
     * @example
     * // Create one Notification
     * const Notification = await prisma.notification.create({
     *   data: {
     *     // ... data to create a Notification
     *   }
     * })
     * 
     */
    create<T extends NotificationCreateArgs>(args: SelectSubset<T, NotificationCreateArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Notifications.
     * @param {NotificationCreateManyArgs} args - Arguments to create many Notifications.
     * @example
     * // Create many Notifications
     * const notification = await prisma.notification.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends NotificationCreateManyArgs>(args?: SelectSubset<T, NotificationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Notifications and returns the data saved in the database.
     * @param {NotificationCreateManyAndReturnArgs} args - Arguments to create many Notifications.
     * @example
     * // Create many Notifications
     * const notification = await prisma.notification.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Notifications and only return the `id`
     * const notificationWithIdOnly = await prisma.notification.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends NotificationCreateManyAndReturnArgs>(args?: SelectSubset<T, NotificationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Notification.
     * @param {NotificationDeleteArgs} args - Arguments to delete one Notification.
     * @example
     * // Delete one Notification
     * const Notification = await prisma.notification.delete({
     *   where: {
     *     // ... filter to delete one Notification
     *   }
     * })
     * 
     */
    delete<T extends NotificationDeleteArgs>(args: SelectSubset<T, NotificationDeleteArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Notification.
     * @param {NotificationUpdateArgs} args - Arguments to update one Notification.
     * @example
     * // Update one Notification
     * const notification = await prisma.notification.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends NotificationUpdateArgs>(args: SelectSubset<T, NotificationUpdateArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Notifications.
     * @param {NotificationDeleteManyArgs} args - Arguments to filter Notifications to delete.
     * @example
     * // Delete a few Notifications
     * const { count } = await prisma.notification.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends NotificationDeleteManyArgs>(args?: SelectSubset<T, NotificationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Notifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Notifications
     * const notification = await prisma.notification.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends NotificationUpdateManyArgs>(args: SelectSubset<T, NotificationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Notifications and returns the data updated in the database.
     * @param {NotificationUpdateManyAndReturnArgs} args - Arguments to update many Notifications.
     * @example
     * // Update many Notifications
     * const notification = await prisma.notification.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Notifications and only return the `id`
     * const notificationWithIdOnly = await prisma.notification.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends NotificationUpdateManyAndReturnArgs>(args: SelectSubset<T, NotificationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Notification.
     * @param {NotificationUpsertArgs} args - Arguments to update or create a Notification.
     * @example
     * // Update or create a Notification
     * const notification = await prisma.notification.upsert({
     *   create: {
     *     // ... data to create a Notification
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Notification we want to update
     *   }
     * })
     */
    upsert<T extends NotificationUpsertArgs>(args: SelectSubset<T, NotificationUpsertArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Notifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationCountArgs} args - Arguments to filter Notifications to count.
     * @example
     * // Count the number of Notifications
     * const count = await prisma.notification.count({
     *   where: {
     *     // ... the filter for the Notifications we want to count
     *   }
     * })
    **/
    count<T extends NotificationCountArgs>(
      args?: Subset<T, NotificationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], NotificationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Notification.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends NotificationAggregateArgs>(args: Subset<T, NotificationAggregateArgs>): Prisma.PrismaPromise<GetNotificationAggregateType<T>>

    /**
     * Group by Notification.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationGroupByArgs} args - Group by arguments.
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
      T extends NotificationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: NotificationGroupByArgs['orderBy'] }
        : { orderBy?: NotificationGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, NotificationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetNotificationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Notification model
   */
  readonly fields: NotificationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Notification.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__NotificationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    deliveries<T extends Notification$deliveriesArgs<ExtArgs> = {}>(args?: Subset<T, Notification$deliveriesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificationDeliveryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Notification model
   */
  interface NotificationFieldRefs {
    readonly id: FieldRef<"Notification", 'String'>
    readonly type: FieldRef<"Notification", 'NotificationType'>
    readonly title: FieldRef<"Notification", 'String'>
    readonly message: FieldRef<"Notification", 'String'>
    readonly href: FieldRef<"Notification", 'String'>
    readonly readAt: FieldRef<"Notification", 'DateTime'>
    readonly createdAt: FieldRef<"Notification", 'DateTime'>
    readonly userId: FieldRef<"Notification", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Notification findUnique
   */
  export type NotificationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * Filter, which Notification to fetch.
     */
    where: NotificationWhereUniqueInput
  }

  /**
   * Notification findUniqueOrThrow
   */
  export type NotificationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * Filter, which Notification to fetch.
     */
    where: NotificationWhereUniqueInput
  }

  /**
   * Notification findFirst
   */
  export type NotificationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * Filter, which Notification to fetch.
     */
    where?: NotificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notifications to fetch.
     */
    orderBy?: NotificationOrderByWithRelationInput | NotificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Notifications.
     */
    cursor?: NotificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Notifications.
     */
    distinct?: NotificationScalarFieldEnum | NotificationScalarFieldEnum[]
  }

  /**
   * Notification findFirstOrThrow
   */
  export type NotificationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * Filter, which Notification to fetch.
     */
    where?: NotificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notifications to fetch.
     */
    orderBy?: NotificationOrderByWithRelationInput | NotificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Notifications.
     */
    cursor?: NotificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Notifications.
     */
    distinct?: NotificationScalarFieldEnum | NotificationScalarFieldEnum[]
  }

  /**
   * Notification findMany
   */
  export type NotificationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * Filter, which Notifications to fetch.
     */
    where?: NotificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notifications to fetch.
     */
    orderBy?: NotificationOrderByWithRelationInput | NotificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Notifications.
     */
    cursor?: NotificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Notifications.
     */
    distinct?: NotificationScalarFieldEnum | NotificationScalarFieldEnum[]
  }

  /**
   * Notification create
   */
  export type NotificationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * The data needed to create a Notification.
     */
    data: XOR<NotificationCreateInput, NotificationUncheckedCreateInput>
  }

  /**
   * Notification createMany
   */
  export type NotificationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Notifications.
     */
    data: NotificationCreateManyInput | NotificationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Notification createManyAndReturn
   */
  export type NotificationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * The data used to create many Notifications.
     */
    data: NotificationCreateManyInput | NotificationCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Notification update
   */
  export type NotificationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * The data needed to update a Notification.
     */
    data: XOR<NotificationUpdateInput, NotificationUncheckedUpdateInput>
    /**
     * Choose, which Notification to update.
     */
    where: NotificationWhereUniqueInput
  }

  /**
   * Notification updateMany
   */
  export type NotificationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Notifications.
     */
    data: XOR<NotificationUpdateManyMutationInput, NotificationUncheckedUpdateManyInput>
    /**
     * Filter which Notifications to update
     */
    where?: NotificationWhereInput
    /**
     * Limit how many Notifications to update.
     */
    limit?: number
  }

  /**
   * Notification updateManyAndReturn
   */
  export type NotificationUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * The data used to update Notifications.
     */
    data: XOR<NotificationUpdateManyMutationInput, NotificationUncheckedUpdateManyInput>
    /**
     * Filter which Notifications to update
     */
    where?: NotificationWhereInput
    /**
     * Limit how many Notifications to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Notification upsert
   */
  export type NotificationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * The filter to search for the Notification to update in case it exists.
     */
    where: NotificationWhereUniqueInput
    /**
     * In case the Notification found by the `where` argument doesn't exist, create a new Notification with this data.
     */
    create: XOR<NotificationCreateInput, NotificationUncheckedCreateInput>
    /**
     * In case the Notification was found with the provided `where` argument, update it with this data.
     */
    update: XOR<NotificationUpdateInput, NotificationUncheckedUpdateInput>
  }

  /**
   * Notification delete
   */
  export type NotificationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * Filter which Notification to delete.
     */
    where: NotificationWhereUniqueInput
  }

  /**
   * Notification deleteMany
   */
  export type NotificationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Notifications to delete
     */
    where?: NotificationWhereInput
    /**
     * Limit how many Notifications to delete.
     */
    limit?: number
  }

  /**
   * Notification.deliveries
   */
  export type Notification$deliveriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NotificationDelivery
     */
    select?: NotificationDeliverySelect<ExtArgs> | null
    /**
     * Omit specific fields from the NotificationDelivery
     */
    omit?: NotificationDeliveryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationDeliveryInclude<ExtArgs> | null
    where?: NotificationDeliveryWhereInput
    orderBy?: NotificationDeliveryOrderByWithRelationInput | NotificationDeliveryOrderByWithRelationInput[]
    cursor?: NotificationDeliveryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: NotificationDeliveryScalarFieldEnum | NotificationDeliveryScalarFieldEnum[]
  }

  /**
   * Notification without action
   */
  export type NotificationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
  }


  /**
   * Model NotificationDelivery
   */

  export type AggregateNotificationDelivery = {
    _count: NotificationDeliveryCountAggregateOutputType | null
    _min: NotificationDeliveryMinAggregateOutputType | null
    _max: NotificationDeliveryMaxAggregateOutputType | null
  }

  export type NotificationDeliveryMinAggregateOutputType = {
    id: string | null
    channel: $Enums.DeliveryChannel | null
    status: $Enums.DeliveryStatus | null
    recipient: string | null
    providerMessageId: string | null
    errorMessage: string | null
    attemptedAt: Date | null
    createdAt: Date | null
    notificationId: string | null
  }

  export type NotificationDeliveryMaxAggregateOutputType = {
    id: string | null
    channel: $Enums.DeliveryChannel | null
    status: $Enums.DeliveryStatus | null
    recipient: string | null
    providerMessageId: string | null
    errorMessage: string | null
    attemptedAt: Date | null
    createdAt: Date | null
    notificationId: string | null
  }

  export type NotificationDeliveryCountAggregateOutputType = {
    id: number
    channel: number
    status: number
    recipient: number
    providerMessageId: number
    errorMessage: number
    attemptedAt: number
    createdAt: number
    notificationId: number
    _all: number
  }


  export type NotificationDeliveryMinAggregateInputType = {
    id?: true
    channel?: true
    status?: true
    recipient?: true
    providerMessageId?: true
    errorMessage?: true
    attemptedAt?: true
    createdAt?: true
    notificationId?: true
  }

  export type NotificationDeliveryMaxAggregateInputType = {
    id?: true
    channel?: true
    status?: true
    recipient?: true
    providerMessageId?: true
    errorMessage?: true
    attemptedAt?: true
    createdAt?: true
    notificationId?: true
  }

  export type NotificationDeliveryCountAggregateInputType = {
    id?: true
    channel?: true
    status?: true
    recipient?: true
    providerMessageId?: true
    errorMessage?: true
    attemptedAt?: true
    createdAt?: true
    notificationId?: true
    _all?: true
  }

  export type NotificationDeliveryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which NotificationDelivery to aggregate.
     */
    where?: NotificationDeliveryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NotificationDeliveries to fetch.
     */
    orderBy?: NotificationDeliveryOrderByWithRelationInput | NotificationDeliveryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: NotificationDeliveryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NotificationDeliveries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NotificationDeliveries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned NotificationDeliveries
    **/
    _count?: true | NotificationDeliveryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: NotificationDeliveryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: NotificationDeliveryMaxAggregateInputType
  }

  export type GetNotificationDeliveryAggregateType<T extends NotificationDeliveryAggregateArgs> = {
        [P in keyof T & keyof AggregateNotificationDelivery]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateNotificationDelivery[P]>
      : GetScalarType<T[P], AggregateNotificationDelivery[P]>
  }




  export type NotificationDeliveryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NotificationDeliveryWhereInput
    orderBy?: NotificationDeliveryOrderByWithAggregationInput | NotificationDeliveryOrderByWithAggregationInput[]
    by: NotificationDeliveryScalarFieldEnum[] | NotificationDeliveryScalarFieldEnum
    having?: NotificationDeliveryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: NotificationDeliveryCountAggregateInputType | true
    _min?: NotificationDeliveryMinAggregateInputType
    _max?: NotificationDeliveryMaxAggregateInputType
  }

  export type NotificationDeliveryGroupByOutputType = {
    id: string
    channel: $Enums.DeliveryChannel
    status: $Enums.DeliveryStatus
    recipient: string | null
    providerMessageId: string | null
    errorMessage: string | null
    attemptedAt: Date | null
    createdAt: Date
    notificationId: string
    _count: NotificationDeliveryCountAggregateOutputType | null
    _min: NotificationDeliveryMinAggregateOutputType | null
    _max: NotificationDeliveryMaxAggregateOutputType | null
  }

  type GetNotificationDeliveryGroupByPayload<T extends NotificationDeliveryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<NotificationDeliveryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof NotificationDeliveryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], NotificationDeliveryGroupByOutputType[P]>
            : GetScalarType<T[P], NotificationDeliveryGroupByOutputType[P]>
        }
      >
    >


  export type NotificationDeliverySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    channel?: boolean
    status?: boolean
    recipient?: boolean
    providerMessageId?: boolean
    errorMessage?: boolean
    attemptedAt?: boolean
    createdAt?: boolean
    notificationId?: boolean
    notification?: boolean | NotificationDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["notificationDelivery"]>

  export type NotificationDeliverySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    channel?: boolean
    status?: boolean
    recipient?: boolean
    providerMessageId?: boolean
    errorMessage?: boolean
    attemptedAt?: boolean
    createdAt?: boolean
    notificationId?: boolean
    notification?: boolean | NotificationDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["notificationDelivery"]>

  export type NotificationDeliverySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    channel?: boolean
    status?: boolean
    recipient?: boolean
    providerMessageId?: boolean
    errorMessage?: boolean
    attemptedAt?: boolean
    createdAt?: boolean
    notificationId?: boolean
    notification?: boolean | NotificationDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["notificationDelivery"]>

  export type NotificationDeliverySelectScalar = {
    id?: boolean
    channel?: boolean
    status?: boolean
    recipient?: boolean
    providerMessageId?: boolean
    errorMessage?: boolean
    attemptedAt?: boolean
    createdAt?: boolean
    notificationId?: boolean
  }

  export type NotificationDeliveryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "channel" | "status" | "recipient" | "providerMessageId" | "errorMessage" | "attemptedAt" | "createdAt" | "notificationId", ExtArgs["result"]["notificationDelivery"]>
  export type NotificationDeliveryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    notification?: boolean | NotificationDefaultArgs<ExtArgs>
  }
  export type NotificationDeliveryIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    notification?: boolean | NotificationDefaultArgs<ExtArgs>
  }
  export type NotificationDeliveryIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    notification?: boolean | NotificationDefaultArgs<ExtArgs>
  }

  export type $NotificationDeliveryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "NotificationDelivery"
    objects: {
      notification: Prisma.$NotificationPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      channel: $Enums.DeliveryChannel
      status: $Enums.DeliveryStatus
      recipient: string | null
      providerMessageId: string | null
      errorMessage: string | null
      attemptedAt: Date | null
      createdAt: Date
      notificationId: string
    }, ExtArgs["result"]["notificationDelivery"]>
    composites: {}
  }

  type NotificationDeliveryGetPayload<S extends boolean | null | undefined | NotificationDeliveryDefaultArgs> = $Result.GetResult<Prisma.$NotificationDeliveryPayload, S>

  type NotificationDeliveryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<NotificationDeliveryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: NotificationDeliveryCountAggregateInputType | true
    }

  export interface NotificationDeliveryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['NotificationDelivery'], meta: { name: 'NotificationDelivery' } }
    /**
     * Find zero or one NotificationDelivery that matches the filter.
     * @param {NotificationDeliveryFindUniqueArgs} args - Arguments to find a NotificationDelivery
     * @example
     * // Get one NotificationDelivery
     * const notificationDelivery = await prisma.notificationDelivery.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends NotificationDeliveryFindUniqueArgs>(args: SelectSubset<T, NotificationDeliveryFindUniqueArgs<ExtArgs>>): Prisma__NotificationDeliveryClient<$Result.GetResult<Prisma.$NotificationDeliveryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one NotificationDelivery that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {NotificationDeliveryFindUniqueOrThrowArgs} args - Arguments to find a NotificationDelivery
     * @example
     * // Get one NotificationDelivery
     * const notificationDelivery = await prisma.notificationDelivery.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends NotificationDeliveryFindUniqueOrThrowArgs>(args: SelectSubset<T, NotificationDeliveryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__NotificationDeliveryClient<$Result.GetResult<Prisma.$NotificationDeliveryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first NotificationDelivery that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationDeliveryFindFirstArgs} args - Arguments to find a NotificationDelivery
     * @example
     * // Get one NotificationDelivery
     * const notificationDelivery = await prisma.notificationDelivery.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends NotificationDeliveryFindFirstArgs>(args?: SelectSubset<T, NotificationDeliveryFindFirstArgs<ExtArgs>>): Prisma__NotificationDeliveryClient<$Result.GetResult<Prisma.$NotificationDeliveryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first NotificationDelivery that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationDeliveryFindFirstOrThrowArgs} args - Arguments to find a NotificationDelivery
     * @example
     * // Get one NotificationDelivery
     * const notificationDelivery = await prisma.notificationDelivery.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends NotificationDeliveryFindFirstOrThrowArgs>(args?: SelectSubset<T, NotificationDeliveryFindFirstOrThrowArgs<ExtArgs>>): Prisma__NotificationDeliveryClient<$Result.GetResult<Prisma.$NotificationDeliveryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more NotificationDeliveries that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationDeliveryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all NotificationDeliveries
     * const notificationDeliveries = await prisma.notificationDelivery.findMany()
     * 
     * // Get first 10 NotificationDeliveries
     * const notificationDeliveries = await prisma.notificationDelivery.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const notificationDeliveryWithIdOnly = await prisma.notificationDelivery.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends NotificationDeliveryFindManyArgs>(args?: SelectSubset<T, NotificationDeliveryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificationDeliveryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a NotificationDelivery.
     * @param {NotificationDeliveryCreateArgs} args - Arguments to create a NotificationDelivery.
     * @example
     * // Create one NotificationDelivery
     * const NotificationDelivery = await prisma.notificationDelivery.create({
     *   data: {
     *     // ... data to create a NotificationDelivery
     *   }
     * })
     * 
     */
    create<T extends NotificationDeliveryCreateArgs>(args: SelectSubset<T, NotificationDeliveryCreateArgs<ExtArgs>>): Prisma__NotificationDeliveryClient<$Result.GetResult<Prisma.$NotificationDeliveryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many NotificationDeliveries.
     * @param {NotificationDeliveryCreateManyArgs} args - Arguments to create many NotificationDeliveries.
     * @example
     * // Create many NotificationDeliveries
     * const notificationDelivery = await prisma.notificationDelivery.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends NotificationDeliveryCreateManyArgs>(args?: SelectSubset<T, NotificationDeliveryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many NotificationDeliveries and returns the data saved in the database.
     * @param {NotificationDeliveryCreateManyAndReturnArgs} args - Arguments to create many NotificationDeliveries.
     * @example
     * // Create many NotificationDeliveries
     * const notificationDelivery = await prisma.notificationDelivery.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many NotificationDeliveries and only return the `id`
     * const notificationDeliveryWithIdOnly = await prisma.notificationDelivery.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends NotificationDeliveryCreateManyAndReturnArgs>(args?: SelectSubset<T, NotificationDeliveryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificationDeliveryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a NotificationDelivery.
     * @param {NotificationDeliveryDeleteArgs} args - Arguments to delete one NotificationDelivery.
     * @example
     * // Delete one NotificationDelivery
     * const NotificationDelivery = await prisma.notificationDelivery.delete({
     *   where: {
     *     // ... filter to delete one NotificationDelivery
     *   }
     * })
     * 
     */
    delete<T extends NotificationDeliveryDeleteArgs>(args: SelectSubset<T, NotificationDeliveryDeleteArgs<ExtArgs>>): Prisma__NotificationDeliveryClient<$Result.GetResult<Prisma.$NotificationDeliveryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one NotificationDelivery.
     * @param {NotificationDeliveryUpdateArgs} args - Arguments to update one NotificationDelivery.
     * @example
     * // Update one NotificationDelivery
     * const notificationDelivery = await prisma.notificationDelivery.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends NotificationDeliveryUpdateArgs>(args: SelectSubset<T, NotificationDeliveryUpdateArgs<ExtArgs>>): Prisma__NotificationDeliveryClient<$Result.GetResult<Prisma.$NotificationDeliveryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more NotificationDeliveries.
     * @param {NotificationDeliveryDeleteManyArgs} args - Arguments to filter NotificationDeliveries to delete.
     * @example
     * // Delete a few NotificationDeliveries
     * const { count } = await prisma.notificationDelivery.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends NotificationDeliveryDeleteManyArgs>(args?: SelectSubset<T, NotificationDeliveryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more NotificationDeliveries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationDeliveryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many NotificationDeliveries
     * const notificationDelivery = await prisma.notificationDelivery.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends NotificationDeliveryUpdateManyArgs>(args: SelectSubset<T, NotificationDeliveryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more NotificationDeliveries and returns the data updated in the database.
     * @param {NotificationDeliveryUpdateManyAndReturnArgs} args - Arguments to update many NotificationDeliveries.
     * @example
     * // Update many NotificationDeliveries
     * const notificationDelivery = await prisma.notificationDelivery.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more NotificationDeliveries and only return the `id`
     * const notificationDeliveryWithIdOnly = await prisma.notificationDelivery.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends NotificationDeliveryUpdateManyAndReturnArgs>(args: SelectSubset<T, NotificationDeliveryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificationDeliveryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one NotificationDelivery.
     * @param {NotificationDeliveryUpsertArgs} args - Arguments to update or create a NotificationDelivery.
     * @example
     * // Update or create a NotificationDelivery
     * const notificationDelivery = await prisma.notificationDelivery.upsert({
     *   create: {
     *     // ... data to create a NotificationDelivery
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the NotificationDelivery we want to update
     *   }
     * })
     */
    upsert<T extends NotificationDeliveryUpsertArgs>(args: SelectSubset<T, NotificationDeliveryUpsertArgs<ExtArgs>>): Prisma__NotificationDeliveryClient<$Result.GetResult<Prisma.$NotificationDeliveryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of NotificationDeliveries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationDeliveryCountArgs} args - Arguments to filter NotificationDeliveries to count.
     * @example
     * // Count the number of NotificationDeliveries
     * const count = await prisma.notificationDelivery.count({
     *   where: {
     *     // ... the filter for the NotificationDeliveries we want to count
     *   }
     * })
    **/
    count<T extends NotificationDeliveryCountArgs>(
      args?: Subset<T, NotificationDeliveryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], NotificationDeliveryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a NotificationDelivery.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationDeliveryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends NotificationDeliveryAggregateArgs>(args: Subset<T, NotificationDeliveryAggregateArgs>): Prisma.PrismaPromise<GetNotificationDeliveryAggregateType<T>>

    /**
     * Group by NotificationDelivery.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationDeliveryGroupByArgs} args - Group by arguments.
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
      T extends NotificationDeliveryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: NotificationDeliveryGroupByArgs['orderBy'] }
        : { orderBy?: NotificationDeliveryGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, NotificationDeliveryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetNotificationDeliveryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the NotificationDelivery model
   */
  readonly fields: NotificationDeliveryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for NotificationDelivery.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__NotificationDeliveryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    notification<T extends NotificationDefaultArgs<ExtArgs> = {}>(args?: Subset<T, NotificationDefaultArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the NotificationDelivery model
   */
  interface NotificationDeliveryFieldRefs {
    readonly id: FieldRef<"NotificationDelivery", 'String'>
    readonly channel: FieldRef<"NotificationDelivery", 'DeliveryChannel'>
    readonly status: FieldRef<"NotificationDelivery", 'DeliveryStatus'>
    readonly recipient: FieldRef<"NotificationDelivery", 'String'>
    readonly providerMessageId: FieldRef<"NotificationDelivery", 'String'>
    readonly errorMessage: FieldRef<"NotificationDelivery", 'String'>
    readonly attemptedAt: FieldRef<"NotificationDelivery", 'DateTime'>
    readonly createdAt: FieldRef<"NotificationDelivery", 'DateTime'>
    readonly notificationId: FieldRef<"NotificationDelivery", 'String'>
  }
    

  // Custom InputTypes
  /**
   * NotificationDelivery findUnique
   */
  export type NotificationDeliveryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NotificationDelivery
     */
    select?: NotificationDeliverySelect<ExtArgs> | null
    /**
     * Omit specific fields from the NotificationDelivery
     */
    omit?: NotificationDeliveryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationDeliveryInclude<ExtArgs> | null
    /**
     * Filter, which NotificationDelivery to fetch.
     */
    where: NotificationDeliveryWhereUniqueInput
  }

  /**
   * NotificationDelivery findUniqueOrThrow
   */
  export type NotificationDeliveryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NotificationDelivery
     */
    select?: NotificationDeliverySelect<ExtArgs> | null
    /**
     * Omit specific fields from the NotificationDelivery
     */
    omit?: NotificationDeliveryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationDeliveryInclude<ExtArgs> | null
    /**
     * Filter, which NotificationDelivery to fetch.
     */
    where: NotificationDeliveryWhereUniqueInput
  }

  /**
   * NotificationDelivery findFirst
   */
  export type NotificationDeliveryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NotificationDelivery
     */
    select?: NotificationDeliverySelect<ExtArgs> | null
    /**
     * Omit specific fields from the NotificationDelivery
     */
    omit?: NotificationDeliveryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationDeliveryInclude<ExtArgs> | null
    /**
     * Filter, which NotificationDelivery to fetch.
     */
    where?: NotificationDeliveryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NotificationDeliveries to fetch.
     */
    orderBy?: NotificationDeliveryOrderByWithRelationInput | NotificationDeliveryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for NotificationDeliveries.
     */
    cursor?: NotificationDeliveryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NotificationDeliveries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NotificationDeliveries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of NotificationDeliveries.
     */
    distinct?: NotificationDeliveryScalarFieldEnum | NotificationDeliveryScalarFieldEnum[]
  }

  /**
   * NotificationDelivery findFirstOrThrow
   */
  export type NotificationDeliveryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NotificationDelivery
     */
    select?: NotificationDeliverySelect<ExtArgs> | null
    /**
     * Omit specific fields from the NotificationDelivery
     */
    omit?: NotificationDeliveryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationDeliveryInclude<ExtArgs> | null
    /**
     * Filter, which NotificationDelivery to fetch.
     */
    where?: NotificationDeliveryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NotificationDeliveries to fetch.
     */
    orderBy?: NotificationDeliveryOrderByWithRelationInput | NotificationDeliveryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for NotificationDeliveries.
     */
    cursor?: NotificationDeliveryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NotificationDeliveries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NotificationDeliveries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of NotificationDeliveries.
     */
    distinct?: NotificationDeliveryScalarFieldEnum | NotificationDeliveryScalarFieldEnum[]
  }

  /**
   * NotificationDelivery findMany
   */
  export type NotificationDeliveryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NotificationDelivery
     */
    select?: NotificationDeliverySelect<ExtArgs> | null
    /**
     * Omit specific fields from the NotificationDelivery
     */
    omit?: NotificationDeliveryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationDeliveryInclude<ExtArgs> | null
    /**
     * Filter, which NotificationDeliveries to fetch.
     */
    where?: NotificationDeliveryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NotificationDeliveries to fetch.
     */
    orderBy?: NotificationDeliveryOrderByWithRelationInput | NotificationDeliveryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing NotificationDeliveries.
     */
    cursor?: NotificationDeliveryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NotificationDeliveries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NotificationDeliveries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of NotificationDeliveries.
     */
    distinct?: NotificationDeliveryScalarFieldEnum | NotificationDeliveryScalarFieldEnum[]
  }

  /**
   * NotificationDelivery create
   */
  export type NotificationDeliveryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NotificationDelivery
     */
    select?: NotificationDeliverySelect<ExtArgs> | null
    /**
     * Omit specific fields from the NotificationDelivery
     */
    omit?: NotificationDeliveryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationDeliveryInclude<ExtArgs> | null
    /**
     * The data needed to create a NotificationDelivery.
     */
    data: XOR<NotificationDeliveryCreateInput, NotificationDeliveryUncheckedCreateInput>
  }

  /**
   * NotificationDelivery createMany
   */
  export type NotificationDeliveryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many NotificationDeliveries.
     */
    data: NotificationDeliveryCreateManyInput | NotificationDeliveryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * NotificationDelivery createManyAndReturn
   */
  export type NotificationDeliveryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NotificationDelivery
     */
    select?: NotificationDeliverySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the NotificationDelivery
     */
    omit?: NotificationDeliveryOmit<ExtArgs> | null
    /**
     * The data used to create many NotificationDeliveries.
     */
    data: NotificationDeliveryCreateManyInput | NotificationDeliveryCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationDeliveryIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * NotificationDelivery update
   */
  export type NotificationDeliveryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NotificationDelivery
     */
    select?: NotificationDeliverySelect<ExtArgs> | null
    /**
     * Omit specific fields from the NotificationDelivery
     */
    omit?: NotificationDeliveryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationDeliveryInclude<ExtArgs> | null
    /**
     * The data needed to update a NotificationDelivery.
     */
    data: XOR<NotificationDeliveryUpdateInput, NotificationDeliveryUncheckedUpdateInput>
    /**
     * Choose, which NotificationDelivery to update.
     */
    where: NotificationDeliveryWhereUniqueInput
  }

  /**
   * NotificationDelivery updateMany
   */
  export type NotificationDeliveryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update NotificationDeliveries.
     */
    data: XOR<NotificationDeliveryUpdateManyMutationInput, NotificationDeliveryUncheckedUpdateManyInput>
    /**
     * Filter which NotificationDeliveries to update
     */
    where?: NotificationDeliveryWhereInput
    /**
     * Limit how many NotificationDeliveries to update.
     */
    limit?: number
  }

  /**
   * NotificationDelivery updateManyAndReturn
   */
  export type NotificationDeliveryUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NotificationDelivery
     */
    select?: NotificationDeliverySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the NotificationDelivery
     */
    omit?: NotificationDeliveryOmit<ExtArgs> | null
    /**
     * The data used to update NotificationDeliveries.
     */
    data: XOR<NotificationDeliveryUpdateManyMutationInput, NotificationDeliveryUncheckedUpdateManyInput>
    /**
     * Filter which NotificationDeliveries to update
     */
    where?: NotificationDeliveryWhereInput
    /**
     * Limit how many NotificationDeliveries to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationDeliveryIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * NotificationDelivery upsert
   */
  export type NotificationDeliveryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NotificationDelivery
     */
    select?: NotificationDeliverySelect<ExtArgs> | null
    /**
     * Omit specific fields from the NotificationDelivery
     */
    omit?: NotificationDeliveryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationDeliveryInclude<ExtArgs> | null
    /**
     * The filter to search for the NotificationDelivery to update in case it exists.
     */
    where: NotificationDeliveryWhereUniqueInput
    /**
     * In case the NotificationDelivery found by the `where` argument doesn't exist, create a new NotificationDelivery with this data.
     */
    create: XOR<NotificationDeliveryCreateInput, NotificationDeliveryUncheckedCreateInput>
    /**
     * In case the NotificationDelivery was found with the provided `where` argument, update it with this data.
     */
    update: XOR<NotificationDeliveryUpdateInput, NotificationDeliveryUncheckedUpdateInput>
  }

  /**
   * NotificationDelivery delete
   */
  export type NotificationDeliveryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NotificationDelivery
     */
    select?: NotificationDeliverySelect<ExtArgs> | null
    /**
     * Omit specific fields from the NotificationDelivery
     */
    omit?: NotificationDeliveryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationDeliveryInclude<ExtArgs> | null
    /**
     * Filter which NotificationDelivery to delete.
     */
    where: NotificationDeliveryWhereUniqueInput
  }

  /**
   * NotificationDelivery deleteMany
   */
  export type NotificationDeliveryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which NotificationDeliveries to delete
     */
    where?: NotificationDeliveryWhereInput
    /**
     * Limit how many NotificationDeliveries to delete.
     */
    limit?: number
  }

  /**
   * NotificationDelivery without action
   */
  export type NotificationDeliveryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NotificationDelivery
     */
    select?: NotificationDeliverySelect<ExtArgs> | null
    /**
     * Omit specific fields from the NotificationDelivery
     */
    omit?: NotificationDeliveryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationDeliveryInclude<ExtArgs> | null
  }


  /**
   * Model PushSubscription
   */

  export type AggregatePushSubscription = {
    _count: PushSubscriptionCountAggregateOutputType | null
    _min: PushSubscriptionMinAggregateOutputType | null
    _max: PushSubscriptionMaxAggregateOutputType | null
  }

  export type PushSubscriptionMinAggregateOutputType = {
    id: string | null
    endpoint: string | null
    p256dh: string | null
    auth: string | null
    userAgent: string | null
    createdAt: Date | null
    updatedAt: Date | null
    userId: string | null
  }

  export type PushSubscriptionMaxAggregateOutputType = {
    id: string | null
    endpoint: string | null
    p256dh: string | null
    auth: string | null
    userAgent: string | null
    createdAt: Date | null
    updatedAt: Date | null
    userId: string | null
  }

  export type PushSubscriptionCountAggregateOutputType = {
    id: number
    endpoint: number
    p256dh: number
    auth: number
    userAgent: number
    createdAt: number
    updatedAt: number
    userId: number
    _all: number
  }


  export type PushSubscriptionMinAggregateInputType = {
    id?: true
    endpoint?: true
    p256dh?: true
    auth?: true
    userAgent?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
  }

  export type PushSubscriptionMaxAggregateInputType = {
    id?: true
    endpoint?: true
    p256dh?: true
    auth?: true
    userAgent?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
  }

  export type PushSubscriptionCountAggregateInputType = {
    id?: true
    endpoint?: true
    p256dh?: true
    auth?: true
    userAgent?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
    _all?: true
  }

  export type PushSubscriptionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PushSubscription to aggregate.
     */
    where?: PushSubscriptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PushSubscriptions to fetch.
     */
    orderBy?: PushSubscriptionOrderByWithRelationInput | PushSubscriptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PushSubscriptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PushSubscriptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PushSubscriptions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PushSubscriptions
    **/
    _count?: true | PushSubscriptionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PushSubscriptionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PushSubscriptionMaxAggregateInputType
  }

  export type GetPushSubscriptionAggregateType<T extends PushSubscriptionAggregateArgs> = {
        [P in keyof T & keyof AggregatePushSubscription]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePushSubscription[P]>
      : GetScalarType<T[P], AggregatePushSubscription[P]>
  }




  export type PushSubscriptionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PushSubscriptionWhereInput
    orderBy?: PushSubscriptionOrderByWithAggregationInput | PushSubscriptionOrderByWithAggregationInput[]
    by: PushSubscriptionScalarFieldEnum[] | PushSubscriptionScalarFieldEnum
    having?: PushSubscriptionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PushSubscriptionCountAggregateInputType | true
    _min?: PushSubscriptionMinAggregateInputType
    _max?: PushSubscriptionMaxAggregateInputType
  }

  export type PushSubscriptionGroupByOutputType = {
    id: string
    endpoint: string
    p256dh: string
    auth: string
    userAgent: string | null
    createdAt: Date
    updatedAt: Date
    userId: string
    _count: PushSubscriptionCountAggregateOutputType | null
    _min: PushSubscriptionMinAggregateOutputType | null
    _max: PushSubscriptionMaxAggregateOutputType | null
  }

  type GetPushSubscriptionGroupByPayload<T extends PushSubscriptionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PushSubscriptionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PushSubscriptionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PushSubscriptionGroupByOutputType[P]>
            : GetScalarType<T[P], PushSubscriptionGroupByOutputType[P]>
        }
      >
    >


  export type PushSubscriptionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    endpoint?: boolean
    p256dh?: boolean
    auth?: boolean
    userAgent?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pushSubscription"]>

  export type PushSubscriptionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    endpoint?: boolean
    p256dh?: boolean
    auth?: boolean
    userAgent?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pushSubscription"]>

  export type PushSubscriptionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    endpoint?: boolean
    p256dh?: boolean
    auth?: boolean
    userAgent?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pushSubscription"]>

  export type PushSubscriptionSelectScalar = {
    id?: boolean
    endpoint?: boolean
    p256dh?: boolean
    auth?: boolean
    userAgent?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
  }

  export type PushSubscriptionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "endpoint" | "p256dh" | "auth" | "userAgent" | "createdAt" | "updatedAt" | "userId", ExtArgs["result"]["pushSubscription"]>
  export type PushSubscriptionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type PushSubscriptionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type PushSubscriptionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $PushSubscriptionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PushSubscription"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      endpoint: string
      p256dh: string
      auth: string
      userAgent: string | null
      createdAt: Date
      updatedAt: Date
      userId: string
    }, ExtArgs["result"]["pushSubscription"]>
    composites: {}
  }

  type PushSubscriptionGetPayload<S extends boolean | null | undefined | PushSubscriptionDefaultArgs> = $Result.GetResult<Prisma.$PushSubscriptionPayload, S>

  type PushSubscriptionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PushSubscriptionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PushSubscriptionCountAggregateInputType | true
    }

  export interface PushSubscriptionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PushSubscription'], meta: { name: 'PushSubscription' } }
    /**
     * Find zero or one PushSubscription that matches the filter.
     * @param {PushSubscriptionFindUniqueArgs} args - Arguments to find a PushSubscription
     * @example
     * // Get one PushSubscription
     * const pushSubscription = await prisma.pushSubscription.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PushSubscriptionFindUniqueArgs>(args: SelectSubset<T, PushSubscriptionFindUniqueArgs<ExtArgs>>): Prisma__PushSubscriptionClient<$Result.GetResult<Prisma.$PushSubscriptionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PushSubscription that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PushSubscriptionFindUniqueOrThrowArgs} args - Arguments to find a PushSubscription
     * @example
     * // Get one PushSubscription
     * const pushSubscription = await prisma.pushSubscription.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PushSubscriptionFindUniqueOrThrowArgs>(args: SelectSubset<T, PushSubscriptionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PushSubscriptionClient<$Result.GetResult<Prisma.$PushSubscriptionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PushSubscription that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PushSubscriptionFindFirstArgs} args - Arguments to find a PushSubscription
     * @example
     * // Get one PushSubscription
     * const pushSubscription = await prisma.pushSubscription.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PushSubscriptionFindFirstArgs>(args?: SelectSubset<T, PushSubscriptionFindFirstArgs<ExtArgs>>): Prisma__PushSubscriptionClient<$Result.GetResult<Prisma.$PushSubscriptionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PushSubscription that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PushSubscriptionFindFirstOrThrowArgs} args - Arguments to find a PushSubscription
     * @example
     * // Get one PushSubscription
     * const pushSubscription = await prisma.pushSubscription.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PushSubscriptionFindFirstOrThrowArgs>(args?: SelectSubset<T, PushSubscriptionFindFirstOrThrowArgs<ExtArgs>>): Prisma__PushSubscriptionClient<$Result.GetResult<Prisma.$PushSubscriptionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PushSubscriptions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PushSubscriptionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PushSubscriptions
     * const pushSubscriptions = await prisma.pushSubscription.findMany()
     * 
     * // Get first 10 PushSubscriptions
     * const pushSubscriptions = await prisma.pushSubscription.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const pushSubscriptionWithIdOnly = await prisma.pushSubscription.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PushSubscriptionFindManyArgs>(args?: SelectSubset<T, PushSubscriptionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PushSubscriptionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PushSubscription.
     * @param {PushSubscriptionCreateArgs} args - Arguments to create a PushSubscription.
     * @example
     * // Create one PushSubscription
     * const PushSubscription = await prisma.pushSubscription.create({
     *   data: {
     *     // ... data to create a PushSubscription
     *   }
     * })
     * 
     */
    create<T extends PushSubscriptionCreateArgs>(args: SelectSubset<T, PushSubscriptionCreateArgs<ExtArgs>>): Prisma__PushSubscriptionClient<$Result.GetResult<Prisma.$PushSubscriptionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PushSubscriptions.
     * @param {PushSubscriptionCreateManyArgs} args - Arguments to create many PushSubscriptions.
     * @example
     * // Create many PushSubscriptions
     * const pushSubscription = await prisma.pushSubscription.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PushSubscriptionCreateManyArgs>(args?: SelectSubset<T, PushSubscriptionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PushSubscriptions and returns the data saved in the database.
     * @param {PushSubscriptionCreateManyAndReturnArgs} args - Arguments to create many PushSubscriptions.
     * @example
     * // Create many PushSubscriptions
     * const pushSubscription = await prisma.pushSubscription.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PushSubscriptions and only return the `id`
     * const pushSubscriptionWithIdOnly = await prisma.pushSubscription.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PushSubscriptionCreateManyAndReturnArgs>(args?: SelectSubset<T, PushSubscriptionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PushSubscriptionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a PushSubscription.
     * @param {PushSubscriptionDeleteArgs} args - Arguments to delete one PushSubscription.
     * @example
     * // Delete one PushSubscription
     * const PushSubscription = await prisma.pushSubscription.delete({
     *   where: {
     *     // ... filter to delete one PushSubscription
     *   }
     * })
     * 
     */
    delete<T extends PushSubscriptionDeleteArgs>(args: SelectSubset<T, PushSubscriptionDeleteArgs<ExtArgs>>): Prisma__PushSubscriptionClient<$Result.GetResult<Prisma.$PushSubscriptionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PushSubscription.
     * @param {PushSubscriptionUpdateArgs} args - Arguments to update one PushSubscription.
     * @example
     * // Update one PushSubscription
     * const pushSubscription = await prisma.pushSubscription.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PushSubscriptionUpdateArgs>(args: SelectSubset<T, PushSubscriptionUpdateArgs<ExtArgs>>): Prisma__PushSubscriptionClient<$Result.GetResult<Prisma.$PushSubscriptionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PushSubscriptions.
     * @param {PushSubscriptionDeleteManyArgs} args - Arguments to filter PushSubscriptions to delete.
     * @example
     * // Delete a few PushSubscriptions
     * const { count } = await prisma.pushSubscription.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PushSubscriptionDeleteManyArgs>(args?: SelectSubset<T, PushSubscriptionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PushSubscriptions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PushSubscriptionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PushSubscriptions
     * const pushSubscription = await prisma.pushSubscription.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PushSubscriptionUpdateManyArgs>(args: SelectSubset<T, PushSubscriptionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PushSubscriptions and returns the data updated in the database.
     * @param {PushSubscriptionUpdateManyAndReturnArgs} args - Arguments to update many PushSubscriptions.
     * @example
     * // Update many PushSubscriptions
     * const pushSubscription = await prisma.pushSubscription.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more PushSubscriptions and only return the `id`
     * const pushSubscriptionWithIdOnly = await prisma.pushSubscription.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PushSubscriptionUpdateManyAndReturnArgs>(args: SelectSubset<T, PushSubscriptionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PushSubscriptionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one PushSubscription.
     * @param {PushSubscriptionUpsertArgs} args - Arguments to update or create a PushSubscription.
     * @example
     * // Update or create a PushSubscription
     * const pushSubscription = await prisma.pushSubscription.upsert({
     *   create: {
     *     // ... data to create a PushSubscription
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PushSubscription we want to update
     *   }
     * })
     */
    upsert<T extends PushSubscriptionUpsertArgs>(args: SelectSubset<T, PushSubscriptionUpsertArgs<ExtArgs>>): Prisma__PushSubscriptionClient<$Result.GetResult<Prisma.$PushSubscriptionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PushSubscriptions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PushSubscriptionCountArgs} args - Arguments to filter PushSubscriptions to count.
     * @example
     * // Count the number of PushSubscriptions
     * const count = await prisma.pushSubscription.count({
     *   where: {
     *     // ... the filter for the PushSubscriptions we want to count
     *   }
     * })
    **/
    count<T extends PushSubscriptionCountArgs>(
      args?: Subset<T, PushSubscriptionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PushSubscriptionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PushSubscription.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PushSubscriptionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PushSubscriptionAggregateArgs>(args: Subset<T, PushSubscriptionAggregateArgs>): Prisma.PrismaPromise<GetPushSubscriptionAggregateType<T>>

    /**
     * Group by PushSubscription.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PushSubscriptionGroupByArgs} args - Group by arguments.
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
      T extends PushSubscriptionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PushSubscriptionGroupByArgs['orderBy'] }
        : { orderBy?: PushSubscriptionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PushSubscriptionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPushSubscriptionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PushSubscription model
   */
  readonly fields: PushSubscriptionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PushSubscription.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PushSubscriptionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the PushSubscription model
   */
  interface PushSubscriptionFieldRefs {
    readonly id: FieldRef<"PushSubscription", 'String'>
    readonly endpoint: FieldRef<"PushSubscription", 'String'>
    readonly p256dh: FieldRef<"PushSubscription", 'String'>
    readonly auth: FieldRef<"PushSubscription", 'String'>
    readonly userAgent: FieldRef<"PushSubscription", 'String'>
    readonly createdAt: FieldRef<"PushSubscription", 'DateTime'>
    readonly updatedAt: FieldRef<"PushSubscription", 'DateTime'>
    readonly userId: FieldRef<"PushSubscription", 'String'>
  }
    

  // Custom InputTypes
  /**
   * PushSubscription findUnique
   */
  export type PushSubscriptionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PushSubscription
     */
    select?: PushSubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PushSubscription
     */
    omit?: PushSubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PushSubscriptionInclude<ExtArgs> | null
    /**
     * Filter, which PushSubscription to fetch.
     */
    where: PushSubscriptionWhereUniqueInput
  }

  /**
   * PushSubscription findUniqueOrThrow
   */
  export type PushSubscriptionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PushSubscription
     */
    select?: PushSubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PushSubscription
     */
    omit?: PushSubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PushSubscriptionInclude<ExtArgs> | null
    /**
     * Filter, which PushSubscription to fetch.
     */
    where: PushSubscriptionWhereUniqueInput
  }

  /**
   * PushSubscription findFirst
   */
  export type PushSubscriptionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PushSubscription
     */
    select?: PushSubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PushSubscription
     */
    omit?: PushSubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PushSubscriptionInclude<ExtArgs> | null
    /**
     * Filter, which PushSubscription to fetch.
     */
    where?: PushSubscriptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PushSubscriptions to fetch.
     */
    orderBy?: PushSubscriptionOrderByWithRelationInput | PushSubscriptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PushSubscriptions.
     */
    cursor?: PushSubscriptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PushSubscriptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PushSubscriptions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PushSubscriptions.
     */
    distinct?: PushSubscriptionScalarFieldEnum | PushSubscriptionScalarFieldEnum[]
  }

  /**
   * PushSubscription findFirstOrThrow
   */
  export type PushSubscriptionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PushSubscription
     */
    select?: PushSubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PushSubscription
     */
    omit?: PushSubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PushSubscriptionInclude<ExtArgs> | null
    /**
     * Filter, which PushSubscription to fetch.
     */
    where?: PushSubscriptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PushSubscriptions to fetch.
     */
    orderBy?: PushSubscriptionOrderByWithRelationInput | PushSubscriptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PushSubscriptions.
     */
    cursor?: PushSubscriptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PushSubscriptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PushSubscriptions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PushSubscriptions.
     */
    distinct?: PushSubscriptionScalarFieldEnum | PushSubscriptionScalarFieldEnum[]
  }

  /**
   * PushSubscription findMany
   */
  export type PushSubscriptionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PushSubscription
     */
    select?: PushSubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PushSubscription
     */
    omit?: PushSubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PushSubscriptionInclude<ExtArgs> | null
    /**
     * Filter, which PushSubscriptions to fetch.
     */
    where?: PushSubscriptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PushSubscriptions to fetch.
     */
    orderBy?: PushSubscriptionOrderByWithRelationInput | PushSubscriptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PushSubscriptions.
     */
    cursor?: PushSubscriptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PushSubscriptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PushSubscriptions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PushSubscriptions.
     */
    distinct?: PushSubscriptionScalarFieldEnum | PushSubscriptionScalarFieldEnum[]
  }

  /**
   * PushSubscription create
   */
  export type PushSubscriptionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PushSubscription
     */
    select?: PushSubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PushSubscription
     */
    omit?: PushSubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PushSubscriptionInclude<ExtArgs> | null
    /**
     * The data needed to create a PushSubscription.
     */
    data: XOR<PushSubscriptionCreateInput, PushSubscriptionUncheckedCreateInput>
  }

  /**
   * PushSubscription createMany
   */
  export type PushSubscriptionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PushSubscriptions.
     */
    data: PushSubscriptionCreateManyInput | PushSubscriptionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PushSubscription createManyAndReturn
   */
  export type PushSubscriptionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PushSubscription
     */
    select?: PushSubscriptionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PushSubscription
     */
    omit?: PushSubscriptionOmit<ExtArgs> | null
    /**
     * The data used to create many PushSubscriptions.
     */
    data: PushSubscriptionCreateManyInput | PushSubscriptionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PushSubscriptionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * PushSubscription update
   */
  export type PushSubscriptionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PushSubscription
     */
    select?: PushSubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PushSubscription
     */
    omit?: PushSubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PushSubscriptionInclude<ExtArgs> | null
    /**
     * The data needed to update a PushSubscription.
     */
    data: XOR<PushSubscriptionUpdateInput, PushSubscriptionUncheckedUpdateInput>
    /**
     * Choose, which PushSubscription to update.
     */
    where: PushSubscriptionWhereUniqueInput
  }

  /**
   * PushSubscription updateMany
   */
  export type PushSubscriptionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PushSubscriptions.
     */
    data: XOR<PushSubscriptionUpdateManyMutationInput, PushSubscriptionUncheckedUpdateManyInput>
    /**
     * Filter which PushSubscriptions to update
     */
    where?: PushSubscriptionWhereInput
    /**
     * Limit how many PushSubscriptions to update.
     */
    limit?: number
  }

  /**
   * PushSubscription updateManyAndReturn
   */
  export type PushSubscriptionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PushSubscription
     */
    select?: PushSubscriptionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PushSubscription
     */
    omit?: PushSubscriptionOmit<ExtArgs> | null
    /**
     * The data used to update PushSubscriptions.
     */
    data: XOR<PushSubscriptionUpdateManyMutationInput, PushSubscriptionUncheckedUpdateManyInput>
    /**
     * Filter which PushSubscriptions to update
     */
    where?: PushSubscriptionWhereInput
    /**
     * Limit how many PushSubscriptions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PushSubscriptionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * PushSubscription upsert
   */
  export type PushSubscriptionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PushSubscription
     */
    select?: PushSubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PushSubscription
     */
    omit?: PushSubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PushSubscriptionInclude<ExtArgs> | null
    /**
     * The filter to search for the PushSubscription to update in case it exists.
     */
    where: PushSubscriptionWhereUniqueInput
    /**
     * In case the PushSubscription found by the `where` argument doesn't exist, create a new PushSubscription with this data.
     */
    create: XOR<PushSubscriptionCreateInput, PushSubscriptionUncheckedCreateInput>
    /**
     * In case the PushSubscription was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PushSubscriptionUpdateInput, PushSubscriptionUncheckedUpdateInput>
  }

  /**
   * PushSubscription delete
   */
  export type PushSubscriptionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PushSubscription
     */
    select?: PushSubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PushSubscription
     */
    omit?: PushSubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PushSubscriptionInclude<ExtArgs> | null
    /**
     * Filter which PushSubscription to delete.
     */
    where: PushSubscriptionWhereUniqueInput
  }

  /**
   * PushSubscription deleteMany
   */
  export type PushSubscriptionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PushSubscriptions to delete
     */
    where?: PushSubscriptionWhereInput
    /**
     * Limit how many PushSubscriptions to delete.
     */
    limit?: number
  }

  /**
   * PushSubscription without action
   */
  export type PushSubscriptionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PushSubscription
     */
    select?: PushSubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PushSubscription
     */
    omit?: PushSubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PushSubscriptionInclude<ExtArgs> | null
  }


  /**
   * Model AuditLog
   */

  export type AggregateAuditLog = {
    _count: AuditLogCountAggregateOutputType | null
    _min: AuditLogMinAggregateOutputType | null
    _max: AuditLogMaxAggregateOutputType | null
  }

  export type AuditLogMinAggregateOutputType = {
    id: string | null
    action: $Enums.AuditAction | null
    entityType: $Enums.AuditEntityType | null
    entityId: string | null
    description: string | null
    context: string | null
    createdAt: Date | null
    actorId: string | null
  }

  export type AuditLogMaxAggregateOutputType = {
    id: string | null
    action: $Enums.AuditAction | null
    entityType: $Enums.AuditEntityType | null
    entityId: string | null
    description: string | null
    context: string | null
    createdAt: Date | null
    actorId: string | null
  }

  export type AuditLogCountAggregateOutputType = {
    id: number
    action: number
    entityType: number
    entityId: number
    description: number
    context: number
    createdAt: number
    actorId: number
    _all: number
  }


  export type AuditLogMinAggregateInputType = {
    id?: true
    action?: true
    entityType?: true
    entityId?: true
    description?: true
    context?: true
    createdAt?: true
    actorId?: true
  }

  export type AuditLogMaxAggregateInputType = {
    id?: true
    action?: true
    entityType?: true
    entityId?: true
    description?: true
    context?: true
    createdAt?: true
    actorId?: true
  }

  export type AuditLogCountAggregateInputType = {
    id?: true
    action?: true
    entityType?: true
    entityId?: true
    description?: true
    context?: true
    createdAt?: true
    actorId?: true
    _all?: true
  }

  export type AuditLogAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AuditLog to aggregate.
     */
    where?: AuditLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AuditLogs to fetch.
     */
    orderBy?: AuditLogOrderByWithRelationInput | AuditLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AuditLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AuditLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AuditLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AuditLogs
    **/
    _count?: true | AuditLogCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AuditLogMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AuditLogMaxAggregateInputType
  }

  export type GetAuditLogAggregateType<T extends AuditLogAggregateArgs> = {
        [P in keyof T & keyof AggregateAuditLog]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAuditLog[P]>
      : GetScalarType<T[P], AggregateAuditLog[P]>
  }




  export type AuditLogGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AuditLogWhereInput
    orderBy?: AuditLogOrderByWithAggregationInput | AuditLogOrderByWithAggregationInput[]
    by: AuditLogScalarFieldEnum[] | AuditLogScalarFieldEnum
    having?: AuditLogScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AuditLogCountAggregateInputType | true
    _min?: AuditLogMinAggregateInputType
    _max?: AuditLogMaxAggregateInputType
  }

  export type AuditLogGroupByOutputType = {
    id: string
    action: $Enums.AuditAction
    entityType: $Enums.AuditEntityType
    entityId: string | null
    description: string
    context: string | null
    createdAt: Date
    actorId: string | null
    _count: AuditLogCountAggregateOutputType | null
    _min: AuditLogMinAggregateOutputType | null
    _max: AuditLogMaxAggregateOutputType | null
  }

  type GetAuditLogGroupByPayload<T extends AuditLogGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AuditLogGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AuditLogGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AuditLogGroupByOutputType[P]>
            : GetScalarType<T[P], AuditLogGroupByOutputType[P]>
        }
      >
    >


  export type AuditLogSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    action?: boolean
    entityType?: boolean
    entityId?: boolean
    description?: boolean
    context?: boolean
    createdAt?: boolean
    actorId?: boolean
    actor?: boolean | AuditLog$actorArgs<ExtArgs>
  }, ExtArgs["result"]["auditLog"]>

  export type AuditLogSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    action?: boolean
    entityType?: boolean
    entityId?: boolean
    description?: boolean
    context?: boolean
    createdAt?: boolean
    actorId?: boolean
    actor?: boolean | AuditLog$actorArgs<ExtArgs>
  }, ExtArgs["result"]["auditLog"]>

  export type AuditLogSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    action?: boolean
    entityType?: boolean
    entityId?: boolean
    description?: boolean
    context?: boolean
    createdAt?: boolean
    actorId?: boolean
    actor?: boolean | AuditLog$actorArgs<ExtArgs>
  }, ExtArgs["result"]["auditLog"]>

  export type AuditLogSelectScalar = {
    id?: boolean
    action?: boolean
    entityType?: boolean
    entityId?: boolean
    description?: boolean
    context?: boolean
    createdAt?: boolean
    actorId?: boolean
  }

  export type AuditLogOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "action" | "entityType" | "entityId" | "description" | "context" | "createdAt" | "actorId", ExtArgs["result"]["auditLog"]>
  export type AuditLogInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    actor?: boolean | AuditLog$actorArgs<ExtArgs>
  }
  export type AuditLogIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    actor?: boolean | AuditLog$actorArgs<ExtArgs>
  }
  export type AuditLogIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    actor?: boolean | AuditLog$actorArgs<ExtArgs>
  }

  export type $AuditLogPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AuditLog"
    objects: {
      actor: Prisma.$UserPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      action: $Enums.AuditAction
      entityType: $Enums.AuditEntityType
      entityId: string | null
      description: string
      context: string | null
      createdAt: Date
      actorId: string | null
    }, ExtArgs["result"]["auditLog"]>
    composites: {}
  }

  type AuditLogGetPayload<S extends boolean | null | undefined | AuditLogDefaultArgs> = $Result.GetResult<Prisma.$AuditLogPayload, S>

  type AuditLogCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AuditLogFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AuditLogCountAggregateInputType | true
    }

  export interface AuditLogDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AuditLog'], meta: { name: 'AuditLog' } }
    /**
     * Find zero or one AuditLog that matches the filter.
     * @param {AuditLogFindUniqueArgs} args - Arguments to find a AuditLog
     * @example
     * // Get one AuditLog
     * const auditLog = await prisma.auditLog.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AuditLogFindUniqueArgs>(args: SelectSubset<T, AuditLogFindUniqueArgs<ExtArgs>>): Prisma__AuditLogClient<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one AuditLog that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AuditLogFindUniqueOrThrowArgs} args - Arguments to find a AuditLog
     * @example
     * // Get one AuditLog
     * const auditLog = await prisma.auditLog.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AuditLogFindUniqueOrThrowArgs>(args: SelectSubset<T, AuditLogFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AuditLogClient<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AuditLog that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditLogFindFirstArgs} args - Arguments to find a AuditLog
     * @example
     * // Get one AuditLog
     * const auditLog = await prisma.auditLog.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AuditLogFindFirstArgs>(args?: SelectSubset<T, AuditLogFindFirstArgs<ExtArgs>>): Prisma__AuditLogClient<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AuditLog that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditLogFindFirstOrThrowArgs} args - Arguments to find a AuditLog
     * @example
     * // Get one AuditLog
     * const auditLog = await prisma.auditLog.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AuditLogFindFirstOrThrowArgs>(args?: SelectSubset<T, AuditLogFindFirstOrThrowArgs<ExtArgs>>): Prisma__AuditLogClient<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more AuditLogs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditLogFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AuditLogs
     * const auditLogs = await prisma.auditLog.findMany()
     * 
     * // Get first 10 AuditLogs
     * const auditLogs = await prisma.auditLog.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const auditLogWithIdOnly = await prisma.auditLog.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AuditLogFindManyArgs>(args?: SelectSubset<T, AuditLogFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a AuditLog.
     * @param {AuditLogCreateArgs} args - Arguments to create a AuditLog.
     * @example
     * // Create one AuditLog
     * const AuditLog = await prisma.auditLog.create({
     *   data: {
     *     // ... data to create a AuditLog
     *   }
     * })
     * 
     */
    create<T extends AuditLogCreateArgs>(args: SelectSubset<T, AuditLogCreateArgs<ExtArgs>>): Prisma__AuditLogClient<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many AuditLogs.
     * @param {AuditLogCreateManyArgs} args - Arguments to create many AuditLogs.
     * @example
     * // Create many AuditLogs
     * const auditLog = await prisma.auditLog.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AuditLogCreateManyArgs>(args?: SelectSubset<T, AuditLogCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many AuditLogs and returns the data saved in the database.
     * @param {AuditLogCreateManyAndReturnArgs} args - Arguments to create many AuditLogs.
     * @example
     * // Create many AuditLogs
     * const auditLog = await prisma.auditLog.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many AuditLogs and only return the `id`
     * const auditLogWithIdOnly = await prisma.auditLog.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AuditLogCreateManyAndReturnArgs>(args?: SelectSubset<T, AuditLogCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a AuditLog.
     * @param {AuditLogDeleteArgs} args - Arguments to delete one AuditLog.
     * @example
     * // Delete one AuditLog
     * const AuditLog = await prisma.auditLog.delete({
     *   where: {
     *     // ... filter to delete one AuditLog
     *   }
     * })
     * 
     */
    delete<T extends AuditLogDeleteArgs>(args: SelectSubset<T, AuditLogDeleteArgs<ExtArgs>>): Prisma__AuditLogClient<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one AuditLog.
     * @param {AuditLogUpdateArgs} args - Arguments to update one AuditLog.
     * @example
     * // Update one AuditLog
     * const auditLog = await prisma.auditLog.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AuditLogUpdateArgs>(args: SelectSubset<T, AuditLogUpdateArgs<ExtArgs>>): Prisma__AuditLogClient<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more AuditLogs.
     * @param {AuditLogDeleteManyArgs} args - Arguments to filter AuditLogs to delete.
     * @example
     * // Delete a few AuditLogs
     * const { count } = await prisma.auditLog.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AuditLogDeleteManyArgs>(args?: SelectSubset<T, AuditLogDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AuditLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditLogUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AuditLogs
     * const auditLog = await prisma.auditLog.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AuditLogUpdateManyArgs>(args: SelectSubset<T, AuditLogUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AuditLogs and returns the data updated in the database.
     * @param {AuditLogUpdateManyAndReturnArgs} args - Arguments to update many AuditLogs.
     * @example
     * // Update many AuditLogs
     * const auditLog = await prisma.auditLog.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more AuditLogs and only return the `id`
     * const auditLogWithIdOnly = await prisma.auditLog.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AuditLogUpdateManyAndReturnArgs>(args: SelectSubset<T, AuditLogUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one AuditLog.
     * @param {AuditLogUpsertArgs} args - Arguments to update or create a AuditLog.
     * @example
     * // Update or create a AuditLog
     * const auditLog = await prisma.auditLog.upsert({
     *   create: {
     *     // ... data to create a AuditLog
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AuditLog we want to update
     *   }
     * })
     */
    upsert<T extends AuditLogUpsertArgs>(args: SelectSubset<T, AuditLogUpsertArgs<ExtArgs>>): Prisma__AuditLogClient<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of AuditLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditLogCountArgs} args - Arguments to filter AuditLogs to count.
     * @example
     * // Count the number of AuditLogs
     * const count = await prisma.auditLog.count({
     *   where: {
     *     // ... the filter for the AuditLogs we want to count
     *   }
     * })
    **/
    count<T extends AuditLogCountArgs>(
      args?: Subset<T, AuditLogCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AuditLogCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AuditLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditLogAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AuditLogAggregateArgs>(args: Subset<T, AuditLogAggregateArgs>): Prisma.PrismaPromise<GetAuditLogAggregateType<T>>

    /**
     * Group by AuditLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditLogGroupByArgs} args - Group by arguments.
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
      T extends AuditLogGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AuditLogGroupByArgs['orderBy'] }
        : { orderBy?: AuditLogGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AuditLogGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAuditLogGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AuditLog model
   */
  readonly fields: AuditLogFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AuditLog.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AuditLogClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    actor<T extends AuditLog$actorArgs<ExtArgs> = {}>(args?: Subset<T, AuditLog$actorArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the AuditLog model
   */
  interface AuditLogFieldRefs {
    readonly id: FieldRef<"AuditLog", 'String'>
    readonly action: FieldRef<"AuditLog", 'AuditAction'>
    readonly entityType: FieldRef<"AuditLog", 'AuditEntityType'>
    readonly entityId: FieldRef<"AuditLog", 'String'>
    readonly description: FieldRef<"AuditLog", 'String'>
    readonly context: FieldRef<"AuditLog", 'String'>
    readonly createdAt: FieldRef<"AuditLog", 'DateTime'>
    readonly actorId: FieldRef<"AuditLog", 'String'>
  }
    

  // Custom InputTypes
  /**
   * AuditLog findUnique
   */
  export type AuditLogFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogInclude<ExtArgs> | null
    /**
     * Filter, which AuditLog to fetch.
     */
    where: AuditLogWhereUniqueInput
  }

  /**
   * AuditLog findUniqueOrThrow
   */
  export type AuditLogFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogInclude<ExtArgs> | null
    /**
     * Filter, which AuditLog to fetch.
     */
    where: AuditLogWhereUniqueInput
  }

  /**
   * AuditLog findFirst
   */
  export type AuditLogFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogInclude<ExtArgs> | null
    /**
     * Filter, which AuditLog to fetch.
     */
    where?: AuditLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AuditLogs to fetch.
     */
    orderBy?: AuditLogOrderByWithRelationInput | AuditLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AuditLogs.
     */
    cursor?: AuditLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AuditLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AuditLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AuditLogs.
     */
    distinct?: AuditLogScalarFieldEnum | AuditLogScalarFieldEnum[]
  }

  /**
   * AuditLog findFirstOrThrow
   */
  export type AuditLogFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogInclude<ExtArgs> | null
    /**
     * Filter, which AuditLog to fetch.
     */
    where?: AuditLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AuditLogs to fetch.
     */
    orderBy?: AuditLogOrderByWithRelationInput | AuditLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AuditLogs.
     */
    cursor?: AuditLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AuditLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AuditLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AuditLogs.
     */
    distinct?: AuditLogScalarFieldEnum | AuditLogScalarFieldEnum[]
  }

  /**
   * AuditLog findMany
   */
  export type AuditLogFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogInclude<ExtArgs> | null
    /**
     * Filter, which AuditLogs to fetch.
     */
    where?: AuditLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AuditLogs to fetch.
     */
    orderBy?: AuditLogOrderByWithRelationInput | AuditLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AuditLogs.
     */
    cursor?: AuditLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AuditLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AuditLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AuditLogs.
     */
    distinct?: AuditLogScalarFieldEnum | AuditLogScalarFieldEnum[]
  }

  /**
   * AuditLog create
   */
  export type AuditLogCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogInclude<ExtArgs> | null
    /**
     * The data needed to create a AuditLog.
     */
    data: XOR<AuditLogCreateInput, AuditLogUncheckedCreateInput>
  }

  /**
   * AuditLog createMany
   */
  export type AuditLogCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AuditLogs.
     */
    data: AuditLogCreateManyInput | AuditLogCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AuditLog createManyAndReturn
   */
  export type AuditLogCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * The data used to create many AuditLogs.
     */
    data: AuditLogCreateManyInput | AuditLogCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * AuditLog update
   */
  export type AuditLogUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogInclude<ExtArgs> | null
    /**
     * The data needed to update a AuditLog.
     */
    data: XOR<AuditLogUpdateInput, AuditLogUncheckedUpdateInput>
    /**
     * Choose, which AuditLog to update.
     */
    where: AuditLogWhereUniqueInput
  }

  /**
   * AuditLog updateMany
   */
  export type AuditLogUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AuditLogs.
     */
    data: XOR<AuditLogUpdateManyMutationInput, AuditLogUncheckedUpdateManyInput>
    /**
     * Filter which AuditLogs to update
     */
    where?: AuditLogWhereInput
    /**
     * Limit how many AuditLogs to update.
     */
    limit?: number
  }

  /**
   * AuditLog updateManyAndReturn
   */
  export type AuditLogUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * The data used to update AuditLogs.
     */
    data: XOR<AuditLogUpdateManyMutationInput, AuditLogUncheckedUpdateManyInput>
    /**
     * Filter which AuditLogs to update
     */
    where?: AuditLogWhereInput
    /**
     * Limit how many AuditLogs to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * AuditLog upsert
   */
  export type AuditLogUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogInclude<ExtArgs> | null
    /**
     * The filter to search for the AuditLog to update in case it exists.
     */
    where: AuditLogWhereUniqueInput
    /**
     * In case the AuditLog found by the `where` argument doesn't exist, create a new AuditLog with this data.
     */
    create: XOR<AuditLogCreateInput, AuditLogUncheckedCreateInput>
    /**
     * In case the AuditLog was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AuditLogUpdateInput, AuditLogUncheckedUpdateInput>
  }

  /**
   * AuditLog delete
   */
  export type AuditLogDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogInclude<ExtArgs> | null
    /**
     * Filter which AuditLog to delete.
     */
    where: AuditLogWhereUniqueInput
  }

  /**
   * AuditLog deleteMany
   */
  export type AuditLogDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AuditLogs to delete
     */
    where?: AuditLogWhereInput
    /**
     * Limit how many AuditLogs to delete.
     */
    limit?: number
  }

  /**
   * AuditLog.actor
   */
  export type AuditLog$actorArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
    where?: UserWhereInput
  }

  /**
   * AuditLog without action
   */
  export type AuditLogDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogInclude<ExtArgs> | null
  }


  /**
   * Model AuthThrottle
   */

  export type AggregateAuthThrottle = {
    _count: AuthThrottleCountAggregateOutputType | null
    _avg: AuthThrottleAvgAggregateOutputType | null
    _sum: AuthThrottleSumAggregateOutputType | null
    _min: AuthThrottleMinAggregateOutputType | null
    _max: AuthThrottleMaxAggregateOutputType | null
  }

  export type AuthThrottleAvgAggregateOutputType = {
    attempts: number | null
  }

  export type AuthThrottleSumAggregateOutputType = {
    attempts: number | null
  }

  export type AuthThrottleMinAggregateOutputType = {
    id: string | null
    scope: string | null
    key: string | null
    attempts: number | null
    windowStartedAt: Date | null
    blockedUntil: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AuthThrottleMaxAggregateOutputType = {
    id: string | null
    scope: string | null
    key: string | null
    attempts: number | null
    windowStartedAt: Date | null
    blockedUntil: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AuthThrottleCountAggregateOutputType = {
    id: number
    scope: number
    key: number
    attempts: number
    windowStartedAt: number
    blockedUntil: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type AuthThrottleAvgAggregateInputType = {
    attempts?: true
  }

  export type AuthThrottleSumAggregateInputType = {
    attempts?: true
  }

  export type AuthThrottleMinAggregateInputType = {
    id?: true
    scope?: true
    key?: true
    attempts?: true
    windowStartedAt?: true
    blockedUntil?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AuthThrottleMaxAggregateInputType = {
    id?: true
    scope?: true
    key?: true
    attempts?: true
    windowStartedAt?: true
    blockedUntil?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AuthThrottleCountAggregateInputType = {
    id?: true
    scope?: true
    key?: true
    attempts?: true
    windowStartedAt?: true
    blockedUntil?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type AuthThrottleAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AuthThrottle to aggregate.
     */
    where?: AuthThrottleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AuthThrottles to fetch.
     */
    orderBy?: AuthThrottleOrderByWithRelationInput | AuthThrottleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AuthThrottleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AuthThrottles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AuthThrottles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AuthThrottles
    **/
    _count?: true | AuthThrottleCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AuthThrottleAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AuthThrottleSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AuthThrottleMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AuthThrottleMaxAggregateInputType
  }

  export type GetAuthThrottleAggregateType<T extends AuthThrottleAggregateArgs> = {
        [P in keyof T & keyof AggregateAuthThrottle]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAuthThrottle[P]>
      : GetScalarType<T[P], AggregateAuthThrottle[P]>
  }




  export type AuthThrottleGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AuthThrottleWhereInput
    orderBy?: AuthThrottleOrderByWithAggregationInput | AuthThrottleOrderByWithAggregationInput[]
    by: AuthThrottleScalarFieldEnum[] | AuthThrottleScalarFieldEnum
    having?: AuthThrottleScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AuthThrottleCountAggregateInputType | true
    _avg?: AuthThrottleAvgAggregateInputType
    _sum?: AuthThrottleSumAggregateInputType
    _min?: AuthThrottleMinAggregateInputType
    _max?: AuthThrottleMaxAggregateInputType
  }

  export type AuthThrottleGroupByOutputType = {
    id: string
    scope: string
    key: string
    attempts: number
    windowStartedAt: Date
    blockedUntil: Date | null
    createdAt: Date
    updatedAt: Date
    _count: AuthThrottleCountAggregateOutputType | null
    _avg: AuthThrottleAvgAggregateOutputType | null
    _sum: AuthThrottleSumAggregateOutputType | null
    _min: AuthThrottleMinAggregateOutputType | null
    _max: AuthThrottleMaxAggregateOutputType | null
  }

  type GetAuthThrottleGroupByPayload<T extends AuthThrottleGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AuthThrottleGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AuthThrottleGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AuthThrottleGroupByOutputType[P]>
            : GetScalarType<T[P], AuthThrottleGroupByOutputType[P]>
        }
      >
    >


  export type AuthThrottleSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    scope?: boolean
    key?: boolean
    attempts?: boolean
    windowStartedAt?: boolean
    blockedUntil?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["authThrottle"]>

  export type AuthThrottleSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    scope?: boolean
    key?: boolean
    attempts?: boolean
    windowStartedAt?: boolean
    blockedUntil?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["authThrottle"]>

  export type AuthThrottleSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    scope?: boolean
    key?: boolean
    attempts?: boolean
    windowStartedAt?: boolean
    blockedUntil?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["authThrottle"]>

  export type AuthThrottleSelectScalar = {
    id?: boolean
    scope?: boolean
    key?: boolean
    attempts?: boolean
    windowStartedAt?: boolean
    blockedUntil?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type AuthThrottleOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "scope" | "key" | "attempts" | "windowStartedAt" | "blockedUntil" | "createdAt" | "updatedAt", ExtArgs["result"]["authThrottle"]>

  export type $AuthThrottlePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AuthThrottle"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      scope: string
      key: string
      attempts: number
      windowStartedAt: Date
      blockedUntil: Date | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["authThrottle"]>
    composites: {}
  }

  type AuthThrottleGetPayload<S extends boolean | null | undefined | AuthThrottleDefaultArgs> = $Result.GetResult<Prisma.$AuthThrottlePayload, S>

  type AuthThrottleCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AuthThrottleFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AuthThrottleCountAggregateInputType | true
    }

  export interface AuthThrottleDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AuthThrottle'], meta: { name: 'AuthThrottle' } }
    /**
     * Find zero or one AuthThrottle that matches the filter.
     * @param {AuthThrottleFindUniqueArgs} args - Arguments to find a AuthThrottle
     * @example
     * // Get one AuthThrottle
     * const authThrottle = await prisma.authThrottle.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AuthThrottleFindUniqueArgs>(args: SelectSubset<T, AuthThrottleFindUniqueArgs<ExtArgs>>): Prisma__AuthThrottleClient<$Result.GetResult<Prisma.$AuthThrottlePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one AuthThrottle that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AuthThrottleFindUniqueOrThrowArgs} args - Arguments to find a AuthThrottle
     * @example
     * // Get one AuthThrottle
     * const authThrottle = await prisma.authThrottle.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AuthThrottleFindUniqueOrThrowArgs>(args: SelectSubset<T, AuthThrottleFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AuthThrottleClient<$Result.GetResult<Prisma.$AuthThrottlePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AuthThrottle that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuthThrottleFindFirstArgs} args - Arguments to find a AuthThrottle
     * @example
     * // Get one AuthThrottle
     * const authThrottle = await prisma.authThrottle.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AuthThrottleFindFirstArgs>(args?: SelectSubset<T, AuthThrottleFindFirstArgs<ExtArgs>>): Prisma__AuthThrottleClient<$Result.GetResult<Prisma.$AuthThrottlePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AuthThrottle that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuthThrottleFindFirstOrThrowArgs} args - Arguments to find a AuthThrottle
     * @example
     * // Get one AuthThrottle
     * const authThrottle = await prisma.authThrottle.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AuthThrottleFindFirstOrThrowArgs>(args?: SelectSubset<T, AuthThrottleFindFirstOrThrowArgs<ExtArgs>>): Prisma__AuthThrottleClient<$Result.GetResult<Prisma.$AuthThrottlePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more AuthThrottles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuthThrottleFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AuthThrottles
     * const authThrottles = await prisma.authThrottle.findMany()
     * 
     * // Get first 10 AuthThrottles
     * const authThrottles = await prisma.authThrottle.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const authThrottleWithIdOnly = await prisma.authThrottle.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AuthThrottleFindManyArgs>(args?: SelectSubset<T, AuthThrottleFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AuthThrottlePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a AuthThrottle.
     * @param {AuthThrottleCreateArgs} args - Arguments to create a AuthThrottle.
     * @example
     * // Create one AuthThrottle
     * const AuthThrottle = await prisma.authThrottle.create({
     *   data: {
     *     // ... data to create a AuthThrottle
     *   }
     * })
     * 
     */
    create<T extends AuthThrottleCreateArgs>(args: SelectSubset<T, AuthThrottleCreateArgs<ExtArgs>>): Prisma__AuthThrottleClient<$Result.GetResult<Prisma.$AuthThrottlePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many AuthThrottles.
     * @param {AuthThrottleCreateManyArgs} args - Arguments to create many AuthThrottles.
     * @example
     * // Create many AuthThrottles
     * const authThrottle = await prisma.authThrottle.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AuthThrottleCreateManyArgs>(args?: SelectSubset<T, AuthThrottleCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many AuthThrottles and returns the data saved in the database.
     * @param {AuthThrottleCreateManyAndReturnArgs} args - Arguments to create many AuthThrottles.
     * @example
     * // Create many AuthThrottles
     * const authThrottle = await prisma.authThrottle.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many AuthThrottles and only return the `id`
     * const authThrottleWithIdOnly = await prisma.authThrottle.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AuthThrottleCreateManyAndReturnArgs>(args?: SelectSubset<T, AuthThrottleCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AuthThrottlePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a AuthThrottle.
     * @param {AuthThrottleDeleteArgs} args - Arguments to delete one AuthThrottle.
     * @example
     * // Delete one AuthThrottle
     * const AuthThrottle = await prisma.authThrottle.delete({
     *   where: {
     *     // ... filter to delete one AuthThrottle
     *   }
     * })
     * 
     */
    delete<T extends AuthThrottleDeleteArgs>(args: SelectSubset<T, AuthThrottleDeleteArgs<ExtArgs>>): Prisma__AuthThrottleClient<$Result.GetResult<Prisma.$AuthThrottlePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one AuthThrottle.
     * @param {AuthThrottleUpdateArgs} args - Arguments to update one AuthThrottle.
     * @example
     * // Update one AuthThrottle
     * const authThrottle = await prisma.authThrottle.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AuthThrottleUpdateArgs>(args: SelectSubset<T, AuthThrottleUpdateArgs<ExtArgs>>): Prisma__AuthThrottleClient<$Result.GetResult<Prisma.$AuthThrottlePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more AuthThrottles.
     * @param {AuthThrottleDeleteManyArgs} args - Arguments to filter AuthThrottles to delete.
     * @example
     * // Delete a few AuthThrottles
     * const { count } = await prisma.authThrottle.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AuthThrottleDeleteManyArgs>(args?: SelectSubset<T, AuthThrottleDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AuthThrottles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuthThrottleUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AuthThrottles
     * const authThrottle = await prisma.authThrottle.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AuthThrottleUpdateManyArgs>(args: SelectSubset<T, AuthThrottleUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AuthThrottles and returns the data updated in the database.
     * @param {AuthThrottleUpdateManyAndReturnArgs} args - Arguments to update many AuthThrottles.
     * @example
     * // Update many AuthThrottles
     * const authThrottle = await prisma.authThrottle.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more AuthThrottles and only return the `id`
     * const authThrottleWithIdOnly = await prisma.authThrottle.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AuthThrottleUpdateManyAndReturnArgs>(args: SelectSubset<T, AuthThrottleUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AuthThrottlePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one AuthThrottle.
     * @param {AuthThrottleUpsertArgs} args - Arguments to update or create a AuthThrottle.
     * @example
     * // Update or create a AuthThrottle
     * const authThrottle = await prisma.authThrottle.upsert({
     *   create: {
     *     // ... data to create a AuthThrottle
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AuthThrottle we want to update
     *   }
     * })
     */
    upsert<T extends AuthThrottleUpsertArgs>(args: SelectSubset<T, AuthThrottleUpsertArgs<ExtArgs>>): Prisma__AuthThrottleClient<$Result.GetResult<Prisma.$AuthThrottlePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of AuthThrottles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuthThrottleCountArgs} args - Arguments to filter AuthThrottles to count.
     * @example
     * // Count the number of AuthThrottles
     * const count = await prisma.authThrottle.count({
     *   where: {
     *     // ... the filter for the AuthThrottles we want to count
     *   }
     * })
    **/
    count<T extends AuthThrottleCountArgs>(
      args?: Subset<T, AuthThrottleCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AuthThrottleCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AuthThrottle.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuthThrottleAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AuthThrottleAggregateArgs>(args: Subset<T, AuthThrottleAggregateArgs>): Prisma.PrismaPromise<GetAuthThrottleAggregateType<T>>

    /**
     * Group by AuthThrottle.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuthThrottleGroupByArgs} args - Group by arguments.
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
      T extends AuthThrottleGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AuthThrottleGroupByArgs['orderBy'] }
        : { orderBy?: AuthThrottleGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AuthThrottleGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAuthThrottleGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AuthThrottle model
   */
  readonly fields: AuthThrottleFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AuthThrottle.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AuthThrottleClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the AuthThrottle model
   */
  interface AuthThrottleFieldRefs {
    readonly id: FieldRef<"AuthThrottle", 'String'>
    readonly scope: FieldRef<"AuthThrottle", 'String'>
    readonly key: FieldRef<"AuthThrottle", 'String'>
    readonly attempts: FieldRef<"AuthThrottle", 'Int'>
    readonly windowStartedAt: FieldRef<"AuthThrottle", 'DateTime'>
    readonly blockedUntil: FieldRef<"AuthThrottle", 'DateTime'>
    readonly createdAt: FieldRef<"AuthThrottle", 'DateTime'>
    readonly updatedAt: FieldRef<"AuthThrottle", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * AuthThrottle findUnique
   */
  export type AuthThrottleFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuthThrottle
     */
    select?: AuthThrottleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuthThrottle
     */
    omit?: AuthThrottleOmit<ExtArgs> | null
    /**
     * Filter, which AuthThrottle to fetch.
     */
    where: AuthThrottleWhereUniqueInput
  }

  /**
   * AuthThrottle findUniqueOrThrow
   */
  export type AuthThrottleFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuthThrottle
     */
    select?: AuthThrottleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuthThrottle
     */
    omit?: AuthThrottleOmit<ExtArgs> | null
    /**
     * Filter, which AuthThrottle to fetch.
     */
    where: AuthThrottleWhereUniqueInput
  }

  /**
   * AuthThrottle findFirst
   */
  export type AuthThrottleFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuthThrottle
     */
    select?: AuthThrottleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuthThrottle
     */
    omit?: AuthThrottleOmit<ExtArgs> | null
    /**
     * Filter, which AuthThrottle to fetch.
     */
    where?: AuthThrottleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AuthThrottles to fetch.
     */
    orderBy?: AuthThrottleOrderByWithRelationInput | AuthThrottleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AuthThrottles.
     */
    cursor?: AuthThrottleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AuthThrottles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AuthThrottles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AuthThrottles.
     */
    distinct?: AuthThrottleScalarFieldEnum | AuthThrottleScalarFieldEnum[]
  }

  /**
   * AuthThrottle findFirstOrThrow
   */
  export type AuthThrottleFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuthThrottle
     */
    select?: AuthThrottleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuthThrottle
     */
    omit?: AuthThrottleOmit<ExtArgs> | null
    /**
     * Filter, which AuthThrottle to fetch.
     */
    where?: AuthThrottleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AuthThrottles to fetch.
     */
    orderBy?: AuthThrottleOrderByWithRelationInput | AuthThrottleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AuthThrottles.
     */
    cursor?: AuthThrottleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AuthThrottles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AuthThrottles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AuthThrottles.
     */
    distinct?: AuthThrottleScalarFieldEnum | AuthThrottleScalarFieldEnum[]
  }

  /**
   * AuthThrottle findMany
   */
  export type AuthThrottleFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuthThrottle
     */
    select?: AuthThrottleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuthThrottle
     */
    omit?: AuthThrottleOmit<ExtArgs> | null
    /**
     * Filter, which AuthThrottles to fetch.
     */
    where?: AuthThrottleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AuthThrottles to fetch.
     */
    orderBy?: AuthThrottleOrderByWithRelationInput | AuthThrottleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AuthThrottles.
     */
    cursor?: AuthThrottleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AuthThrottles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AuthThrottles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AuthThrottles.
     */
    distinct?: AuthThrottleScalarFieldEnum | AuthThrottleScalarFieldEnum[]
  }

  /**
   * AuthThrottle create
   */
  export type AuthThrottleCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuthThrottle
     */
    select?: AuthThrottleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuthThrottle
     */
    omit?: AuthThrottleOmit<ExtArgs> | null
    /**
     * The data needed to create a AuthThrottle.
     */
    data: XOR<AuthThrottleCreateInput, AuthThrottleUncheckedCreateInput>
  }

  /**
   * AuthThrottle createMany
   */
  export type AuthThrottleCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AuthThrottles.
     */
    data: AuthThrottleCreateManyInput | AuthThrottleCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AuthThrottle createManyAndReturn
   */
  export type AuthThrottleCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuthThrottle
     */
    select?: AuthThrottleSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AuthThrottle
     */
    omit?: AuthThrottleOmit<ExtArgs> | null
    /**
     * The data used to create many AuthThrottles.
     */
    data: AuthThrottleCreateManyInput | AuthThrottleCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AuthThrottle update
   */
  export type AuthThrottleUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuthThrottle
     */
    select?: AuthThrottleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuthThrottle
     */
    omit?: AuthThrottleOmit<ExtArgs> | null
    /**
     * The data needed to update a AuthThrottle.
     */
    data: XOR<AuthThrottleUpdateInput, AuthThrottleUncheckedUpdateInput>
    /**
     * Choose, which AuthThrottle to update.
     */
    where: AuthThrottleWhereUniqueInput
  }

  /**
   * AuthThrottle updateMany
   */
  export type AuthThrottleUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AuthThrottles.
     */
    data: XOR<AuthThrottleUpdateManyMutationInput, AuthThrottleUncheckedUpdateManyInput>
    /**
     * Filter which AuthThrottles to update
     */
    where?: AuthThrottleWhereInput
    /**
     * Limit how many AuthThrottles to update.
     */
    limit?: number
  }

  /**
   * AuthThrottle updateManyAndReturn
   */
  export type AuthThrottleUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuthThrottle
     */
    select?: AuthThrottleSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AuthThrottle
     */
    omit?: AuthThrottleOmit<ExtArgs> | null
    /**
     * The data used to update AuthThrottles.
     */
    data: XOR<AuthThrottleUpdateManyMutationInput, AuthThrottleUncheckedUpdateManyInput>
    /**
     * Filter which AuthThrottles to update
     */
    where?: AuthThrottleWhereInput
    /**
     * Limit how many AuthThrottles to update.
     */
    limit?: number
  }

  /**
   * AuthThrottle upsert
   */
  export type AuthThrottleUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuthThrottle
     */
    select?: AuthThrottleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuthThrottle
     */
    omit?: AuthThrottleOmit<ExtArgs> | null
    /**
     * The filter to search for the AuthThrottle to update in case it exists.
     */
    where: AuthThrottleWhereUniqueInput
    /**
     * In case the AuthThrottle found by the `where` argument doesn't exist, create a new AuthThrottle with this data.
     */
    create: XOR<AuthThrottleCreateInput, AuthThrottleUncheckedCreateInput>
    /**
     * In case the AuthThrottle was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AuthThrottleUpdateInput, AuthThrottleUncheckedUpdateInput>
  }

  /**
   * AuthThrottle delete
   */
  export type AuthThrottleDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuthThrottle
     */
    select?: AuthThrottleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuthThrottle
     */
    omit?: AuthThrottleOmit<ExtArgs> | null
    /**
     * Filter which AuthThrottle to delete.
     */
    where: AuthThrottleWhereUniqueInput
  }

  /**
   * AuthThrottle deleteMany
   */
  export type AuthThrottleDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AuthThrottles to delete
     */
    where?: AuthThrottleWhereInput
    /**
     * Limit how many AuthThrottles to delete.
     */
    limit?: number
  }

  /**
   * AuthThrottle without action
   */
  export type AuthThrottleDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuthThrottle
     */
    select?: AuthThrottleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuthThrottle
     */
    omit?: AuthThrottleOmit<ExtArgs> | null
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


  export const TowerScalarFieldEnum: {
    id: 'id',
    name: 'name',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type TowerScalarFieldEnum = (typeof TowerScalarFieldEnum)[keyof typeof TowerScalarFieldEnum]


  export const UnitScalarFieldEnum: {
    id: 'id',
    number: 'number',
    label: 'label',
    floor: 'floor',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    towerId: 'towerId'
  };

  export type UnitScalarFieldEnum = (typeof UnitScalarFieldEnum)[keyof typeof UnitScalarFieldEnum]


  export const UserScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    passwordHash: 'passwordHash',
    role: 'role',
    phone: 'phone',
    jobTitle: 'jobTitle',
    isActive: 'isActive',
    mustChangePassword: 'mustChangePassword',
    lastLoginAt: 'lastLoginAt',
    deletedAt: 'deletedAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    unitId: 'unitId'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const PackageScalarFieldEnum: {
    id: 'id',
    trackingCode: 'trackingCode',
    carrier: 'carrier',
    description: 'description',
    status: 'status',
    receivedAt: 'receivedAt',
    notifiedAt: 'notifiedAt',
    pickedUpAt: 'pickedUpAt',
    dueAt: 'dueAt',
    notificationSent: 'notificationSent',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    residentId: 'residentId',
    unitId: 'unitId',
    receivedById: 'receivedById'
  };

  export type PackageScalarFieldEnum = (typeof PackageScalarFieldEnum)[keyof typeof PackageScalarFieldEnum]


  export const PickupTokenScalarFieldEnum: {
    id: 'id',
    code: 'code',
    qrValue: 'qrValue',
    generatedAt: 'generatedAt',
    expiresAt: 'expiresAt',
    usedAt: 'usedAt',
    packageId: 'packageId',
    generatedById: 'generatedById',
    validatedById: 'validatedById'
  };

  export type PickupTokenScalarFieldEnum = (typeof PickupTokenScalarFieldEnum)[keyof typeof PickupTokenScalarFieldEnum]


  export const PackageHistoryScalarFieldEnum: {
    id: 'id',
    type: 'type',
    note: 'note',
    createdAt: 'createdAt',
    fromStatus: 'fromStatus',
    toStatus: 'toStatus',
    packageId: 'packageId',
    actorId: 'actorId'
  };

  export type PackageHistoryScalarFieldEnum = (typeof PackageHistoryScalarFieldEnum)[keyof typeof PackageHistoryScalarFieldEnum]


  export const NotificationScalarFieldEnum: {
    id: 'id',
    type: 'type',
    title: 'title',
    message: 'message',
    href: 'href',
    readAt: 'readAt',
    createdAt: 'createdAt',
    userId: 'userId'
  };

  export type NotificationScalarFieldEnum = (typeof NotificationScalarFieldEnum)[keyof typeof NotificationScalarFieldEnum]


  export const NotificationDeliveryScalarFieldEnum: {
    id: 'id',
    channel: 'channel',
    status: 'status',
    recipient: 'recipient',
    providerMessageId: 'providerMessageId',
    errorMessage: 'errorMessage',
    attemptedAt: 'attemptedAt',
    createdAt: 'createdAt',
    notificationId: 'notificationId'
  };

  export type NotificationDeliveryScalarFieldEnum = (typeof NotificationDeliveryScalarFieldEnum)[keyof typeof NotificationDeliveryScalarFieldEnum]


  export const PushSubscriptionScalarFieldEnum: {
    id: 'id',
    endpoint: 'endpoint',
    p256dh: 'p256dh',
    auth: 'auth',
    userAgent: 'userAgent',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    userId: 'userId'
  };

  export type PushSubscriptionScalarFieldEnum = (typeof PushSubscriptionScalarFieldEnum)[keyof typeof PushSubscriptionScalarFieldEnum]


  export const AuditLogScalarFieldEnum: {
    id: 'id',
    action: 'action',
    entityType: 'entityType',
    entityId: 'entityId',
    description: 'description',
    context: 'context',
    createdAt: 'createdAt',
    actorId: 'actorId'
  };

  export type AuditLogScalarFieldEnum = (typeof AuditLogScalarFieldEnum)[keyof typeof AuditLogScalarFieldEnum]


  export const AuthThrottleScalarFieldEnum: {
    id: 'id',
    scope: 'scope',
    key: 'key',
    attempts: 'attempts',
    windowStartedAt: 'windowStartedAt',
    blockedUntil: 'blockedUntil',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type AuthThrottleScalarFieldEnum = (typeof AuthThrottleScalarFieldEnum)[keyof typeof AuthThrottleScalarFieldEnum]


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
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Role'
   */
  export type EnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role'>
    


  /**
   * Reference to a field of type 'Role[]'
   */
  export type ListEnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'PackageStatus'
   */
  export type EnumPackageStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PackageStatus'>
    


  /**
   * Reference to a field of type 'PackageStatus[]'
   */
  export type ListEnumPackageStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PackageStatus[]'>
    


  /**
   * Reference to a field of type 'HistoryType'
   */
  export type EnumHistoryTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'HistoryType'>
    


  /**
   * Reference to a field of type 'HistoryType[]'
   */
  export type ListEnumHistoryTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'HistoryType[]'>
    


  /**
   * Reference to a field of type 'NotificationType'
   */
  export type EnumNotificationTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'NotificationType'>
    


  /**
   * Reference to a field of type 'NotificationType[]'
   */
  export type ListEnumNotificationTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'NotificationType[]'>
    


  /**
   * Reference to a field of type 'DeliveryChannel'
   */
  export type EnumDeliveryChannelFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DeliveryChannel'>
    


  /**
   * Reference to a field of type 'DeliveryChannel[]'
   */
  export type ListEnumDeliveryChannelFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DeliveryChannel[]'>
    


  /**
   * Reference to a field of type 'DeliveryStatus'
   */
  export type EnumDeliveryStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DeliveryStatus'>
    


  /**
   * Reference to a field of type 'DeliveryStatus[]'
   */
  export type ListEnumDeliveryStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DeliveryStatus[]'>
    


  /**
   * Reference to a field of type 'AuditAction'
   */
  export type EnumAuditActionFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AuditAction'>
    


  /**
   * Reference to a field of type 'AuditAction[]'
   */
  export type ListEnumAuditActionFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AuditAction[]'>
    


  /**
   * Reference to a field of type 'AuditEntityType'
   */
  export type EnumAuditEntityTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AuditEntityType'>
    


  /**
   * Reference to a field of type 'AuditEntityType[]'
   */
  export type ListEnumAuditEntityTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AuditEntityType[]'>
    


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


  export type TowerWhereInput = {
    AND?: TowerWhereInput | TowerWhereInput[]
    OR?: TowerWhereInput[]
    NOT?: TowerWhereInput | TowerWhereInput[]
    id?: StringFilter<"Tower"> | string
    name?: StringFilter<"Tower"> | string
    createdAt?: DateTimeFilter<"Tower"> | Date | string
    updatedAt?: DateTimeFilter<"Tower"> | Date | string
    units?: UnitListRelationFilter
  }

  export type TowerOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    units?: UnitOrderByRelationAggregateInput
  }

  export type TowerWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    name?: string
    AND?: TowerWhereInput | TowerWhereInput[]
    OR?: TowerWhereInput[]
    NOT?: TowerWhereInput | TowerWhereInput[]
    createdAt?: DateTimeFilter<"Tower"> | Date | string
    updatedAt?: DateTimeFilter<"Tower"> | Date | string
    units?: UnitListRelationFilter
  }, "id" | "name">

  export type TowerOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: TowerCountOrderByAggregateInput
    _max?: TowerMaxOrderByAggregateInput
    _min?: TowerMinOrderByAggregateInput
  }

  export type TowerScalarWhereWithAggregatesInput = {
    AND?: TowerScalarWhereWithAggregatesInput | TowerScalarWhereWithAggregatesInput[]
    OR?: TowerScalarWhereWithAggregatesInput[]
    NOT?: TowerScalarWhereWithAggregatesInput | TowerScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Tower"> | string
    name?: StringWithAggregatesFilter<"Tower"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Tower"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Tower"> | Date | string
  }

  export type UnitWhereInput = {
    AND?: UnitWhereInput | UnitWhereInput[]
    OR?: UnitWhereInput[]
    NOT?: UnitWhereInput | UnitWhereInput[]
    id?: StringFilter<"Unit"> | string
    number?: StringFilter<"Unit"> | string
    label?: StringFilter<"Unit"> | string
    floor?: IntNullableFilter<"Unit"> | number | null
    createdAt?: DateTimeFilter<"Unit"> | Date | string
    updatedAt?: DateTimeFilter<"Unit"> | Date | string
    towerId?: StringFilter<"Unit"> | string
    tower?: XOR<TowerScalarRelationFilter, TowerWhereInput>
    residents?: UserListRelationFilter
    packages?: PackageListRelationFilter
  }

  export type UnitOrderByWithRelationInput = {
    id?: SortOrder
    number?: SortOrder
    label?: SortOrder
    floor?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    towerId?: SortOrder
    tower?: TowerOrderByWithRelationInput
    residents?: UserOrderByRelationAggregateInput
    packages?: PackageOrderByRelationAggregateInput
  }

  export type UnitWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    towerId_number?: UnitTowerIdNumberCompoundUniqueInput
    AND?: UnitWhereInput | UnitWhereInput[]
    OR?: UnitWhereInput[]
    NOT?: UnitWhereInput | UnitWhereInput[]
    number?: StringFilter<"Unit"> | string
    label?: StringFilter<"Unit"> | string
    floor?: IntNullableFilter<"Unit"> | number | null
    createdAt?: DateTimeFilter<"Unit"> | Date | string
    updatedAt?: DateTimeFilter<"Unit"> | Date | string
    towerId?: StringFilter<"Unit"> | string
    tower?: XOR<TowerScalarRelationFilter, TowerWhereInput>
    residents?: UserListRelationFilter
    packages?: PackageListRelationFilter
  }, "id" | "towerId_number">

  export type UnitOrderByWithAggregationInput = {
    id?: SortOrder
    number?: SortOrder
    label?: SortOrder
    floor?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    towerId?: SortOrder
    _count?: UnitCountOrderByAggregateInput
    _avg?: UnitAvgOrderByAggregateInput
    _max?: UnitMaxOrderByAggregateInput
    _min?: UnitMinOrderByAggregateInput
    _sum?: UnitSumOrderByAggregateInput
  }

  export type UnitScalarWhereWithAggregatesInput = {
    AND?: UnitScalarWhereWithAggregatesInput | UnitScalarWhereWithAggregatesInput[]
    OR?: UnitScalarWhereWithAggregatesInput[]
    NOT?: UnitScalarWhereWithAggregatesInput | UnitScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Unit"> | string
    number?: StringWithAggregatesFilter<"Unit"> | string
    label?: StringWithAggregatesFilter<"Unit"> | string
    floor?: IntNullableWithAggregatesFilter<"Unit"> | number | null
    createdAt?: DateTimeWithAggregatesFilter<"Unit"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Unit"> | Date | string
    towerId?: StringWithAggregatesFilter<"Unit"> | string
  }

  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    passwordHash?: StringFilter<"User"> | string
    role?: EnumRoleFilter<"User"> | $Enums.Role
    phone?: StringNullableFilter<"User"> | string | null
    jobTitle?: StringNullableFilter<"User"> | string | null
    isActive?: BoolFilter<"User"> | boolean
    mustChangePassword?: BoolFilter<"User"> | boolean
    lastLoginAt?: DateTimeNullableFilter<"User"> | Date | string | null
    deletedAt?: DateTimeNullableFilter<"User"> | Date | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    unitId?: StringNullableFilter<"User"> | string | null
    unit?: XOR<UnitNullableScalarRelationFilter, UnitWhereInput> | null
    notifications?: NotificationListRelationFilter
    receivedPackages?: PackageListRelationFilter
    residentPackages?: PackageListRelationFilter
    historyEntries?: PackageHistoryListRelationFilter
    generatedTokens?: PickupTokenListRelationFilter
    validatedTokens?: PickupTokenListRelationFilter
    pushSubscriptions?: PushSubscriptionListRelationFilter
    auditLogs?: AuditLogListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    role?: SortOrder
    phone?: SortOrderInput | SortOrder
    jobTitle?: SortOrderInput | SortOrder
    isActive?: SortOrder
    mustChangePassword?: SortOrder
    lastLoginAt?: SortOrderInput | SortOrder
    deletedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    unitId?: SortOrderInput | SortOrder
    unit?: UnitOrderByWithRelationInput
    notifications?: NotificationOrderByRelationAggregateInput
    receivedPackages?: PackageOrderByRelationAggregateInput
    residentPackages?: PackageOrderByRelationAggregateInput
    historyEntries?: PackageHistoryOrderByRelationAggregateInput
    generatedTokens?: PickupTokenOrderByRelationAggregateInput
    validatedTokens?: PickupTokenOrderByRelationAggregateInput
    pushSubscriptions?: PushSubscriptionOrderByRelationAggregateInput
    auditLogs?: AuditLogOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringFilter<"User"> | string
    passwordHash?: StringFilter<"User"> | string
    role?: EnumRoleFilter<"User"> | $Enums.Role
    phone?: StringNullableFilter<"User"> | string | null
    jobTitle?: StringNullableFilter<"User"> | string | null
    isActive?: BoolFilter<"User"> | boolean
    mustChangePassword?: BoolFilter<"User"> | boolean
    lastLoginAt?: DateTimeNullableFilter<"User"> | Date | string | null
    deletedAt?: DateTimeNullableFilter<"User"> | Date | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    unitId?: StringNullableFilter<"User"> | string | null
    unit?: XOR<UnitNullableScalarRelationFilter, UnitWhereInput> | null
    notifications?: NotificationListRelationFilter
    receivedPackages?: PackageListRelationFilter
    residentPackages?: PackageListRelationFilter
    historyEntries?: PackageHistoryListRelationFilter
    generatedTokens?: PickupTokenListRelationFilter
    validatedTokens?: PickupTokenListRelationFilter
    pushSubscriptions?: PushSubscriptionListRelationFilter
    auditLogs?: AuditLogListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    role?: SortOrder
    phone?: SortOrderInput | SortOrder
    jobTitle?: SortOrderInput | SortOrder
    isActive?: SortOrder
    mustChangePassword?: SortOrder
    lastLoginAt?: SortOrderInput | SortOrder
    deletedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    unitId?: SortOrderInput | SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    name?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    passwordHash?: StringWithAggregatesFilter<"User"> | string
    role?: EnumRoleWithAggregatesFilter<"User"> | $Enums.Role
    phone?: StringNullableWithAggregatesFilter<"User"> | string | null
    jobTitle?: StringNullableWithAggregatesFilter<"User"> | string | null
    isActive?: BoolWithAggregatesFilter<"User"> | boolean
    mustChangePassword?: BoolWithAggregatesFilter<"User"> | boolean
    lastLoginAt?: DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null
    deletedAt?: DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    unitId?: StringNullableWithAggregatesFilter<"User"> | string | null
  }

  export type PackageWhereInput = {
    AND?: PackageWhereInput | PackageWhereInput[]
    OR?: PackageWhereInput[]
    NOT?: PackageWhereInput | PackageWhereInput[]
    id?: StringFilter<"Package"> | string
    trackingCode?: StringFilter<"Package"> | string
    carrier?: StringFilter<"Package"> | string
    description?: StringNullableFilter<"Package"> | string | null
    status?: EnumPackageStatusFilter<"Package"> | $Enums.PackageStatus
    receivedAt?: DateTimeFilter<"Package"> | Date | string
    notifiedAt?: DateTimeNullableFilter<"Package"> | Date | string | null
    pickedUpAt?: DateTimeNullableFilter<"Package"> | Date | string | null
    dueAt?: DateTimeNullableFilter<"Package"> | Date | string | null
    notificationSent?: BoolFilter<"Package"> | boolean
    createdAt?: DateTimeFilter<"Package"> | Date | string
    updatedAt?: DateTimeFilter<"Package"> | Date | string
    residentId?: StringFilter<"Package"> | string
    unitId?: StringFilter<"Package"> | string
    receivedById?: StringFilter<"Package"> | string
    resident?: XOR<UserScalarRelationFilter, UserWhereInput>
    unit?: XOR<UnitScalarRelationFilter, UnitWhereInput>
    receivedBy?: XOR<UserScalarRelationFilter, UserWhereInput>
    history?: PackageHistoryListRelationFilter
    token?: XOR<PickupTokenNullableScalarRelationFilter, PickupTokenWhereInput> | null
  }

  export type PackageOrderByWithRelationInput = {
    id?: SortOrder
    trackingCode?: SortOrder
    carrier?: SortOrder
    description?: SortOrderInput | SortOrder
    status?: SortOrder
    receivedAt?: SortOrder
    notifiedAt?: SortOrderInput | SortOrder
    pickedUpAt?: SortOrderInput | SortOrder
    dueAt?: SortOrderInput | SortOrder
    notificationSent?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    residentId?: SortOrder
    unitId?: SortOrder
    receivedById?: SortOrder
    resident?: UserOrderByWithRelationInput
    unit?: UnitOrderByWithRelationInput
    receivedBy?: UserOrderByWithRelationInput
    history?: PackageHistoryOrderByRelationAggregateInput
    token?: PickupTokenOrderByWithRelationInput
  }

  export type PackageWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    trackingCode?: string
    AND?: PackageWhereInput | PackageWhereInput[]
    OR?: PackageWhereInput[]
    NOT?: PackageWhereInput | PackageWhereInput[]
    carrier?: StringFilter<"Package"> | string
    description?: StringNullableFilter<"Package"> | string | null
    status?: EnumPackageStatusFilter<"Package"> | $Enums.PackageStatus
    receivedAt?: DateTimeFilter<"Package"> | Date | string
    notifiedAt?: DateTimeNullableFilter<"Package"> | Date | string | null
    pickedUpAt?: DateTimeNullableFilter<"Package"> | Date | string | null
    dueAt?: DateTimeNullableFilter<"Package"> | Date | string | null
    notificationSent?: BoolFilter<"Package"> | boolean
    createdAt?: DateTimeFilter<"Package"> | Date | string
    updatedAt?: DateTimeFilter<"Package"> | Date | string
    residentId?: StringFilter<"Package"> | string
    unitId?: StringFilter<"Package"> | string
    receivedById?: StringFilter<"Package"> | string
    resident?: XOR<UserScalarRelationFilter, UserWhereInput>
    unit?: XOR<UnitScalarRelationFilter, UnitWhereInput>
    receivedBy?: XOR<UserScalarRelationFilter, UserWhereInput>
    history?: PackageHistoryListRelationFilter
    token?: XOR<PickupTokenNullableScalarRelationFilter, PickupTokenWhereInput> | null
  }, "id" | "trackingCode">

  export type PackageOrderByWithAggregationInput = {
    id?: SortOrder
    trackingCode?: SortOrder
    carrier?: SortOrder
    description?: SortOrderInput | SortOrder
    status?: SortOrder
    receivedAt?: SortOrder
    notifiedAt?: SortOrderInput | SortOrder
    pickedUpAt?: SortOrderInput | SortOrder
    dueAt?: SortOrderInput | SortOrder
    notificationSent?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    residentId?: SortOrder
    unitId?: SortOrder
    receivedById?: SortOrder
    _count?: PackageCountOrderByAggregateInput
    _max?: PackageMaxOrderByAggregateInput
    _min?: PackageMinOrderByAggregateInput
  }

  export type PackageScalarWhereWithAggregatesInput = {
    AND?: PackageScalarWhereWithAggregatesInput | PackageScalarWhereWithAggregatesInput[]
    OR?: PackageScalarWhereWithAggregatesInput[]
    NOT?: PackageScalarWhereWithAggregatesInput | PackageScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Package"> | string
    trackingCode?: StringWithAggregatesFilter<"Package"> | string
    carrier?: StringWithAggregatesFilter<"Package"> | string
    description?: StringNullableWithAggregatesFilter<"Package"> | string | null
    status?: EnumPackageStatusWithAggregatesFilter<"Package"> | $Enums.PackageStatus
    receivedAt?: DateTimeWithAggregatesFilter<"Package"> | Date | string
    notifiedAt?: DateTimeNullableWithAggregatesFilter<"Package"> | Date | string | null
    pickedUpAt?: DateTimeNullableWithAggregatesFilter<"Package"> | Date | string | null
    dueAt?: DateTimeNullableWithAggregatesFilter<"Package"> | Date | string | null
    notificationSent?: BoolWithAggregatesFilter<"Package"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Package"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Package"> | Date | string
    residentId?: StringWithAggregatesFilter<"Package"> | string
    unitId?: StringWithAggregatesFilter<"Package"> | string
    receivedById?: StringWithAggregatesFilter<"Package"> | string
  }

  export type PickupTokenWhereInput = {
    AND?: PickupTokenWhereInput | PickupTokenWhereInput[]
    OR?: PickupTokenWhereInput[]
    NOT?: PickupTokenWhereInput | PickupTokenWhereInput[]
    id?: StringFilter<"PickupToken"> | string
    code?: StringFilter<"PickupToken"> | string
    qrValue?: StringFilter<"PickupToken"> | string
    generatedAt?: DateTimeFilter<"PickupToken"> | Date | string
    expiresAt?: DateTimeFilter<"PickupToken"> | Date | string
    usedAt?: DateTimeNullableFilter<"PickupToken"> | Date | string | null
    packageId?: StringFilter<"PickupToken"> | string
    generatedById?: StringFilter<"PickupToken"> | string
    validatedById?: StringNullableFilter<"PickupToken"> | string | null
    package?: XOR<PackageScalarRelationFilter, PackageWhereInput>
    generatedBy?: XOR<UserScalarRelationFilter, UserWhereInput>
    validatedBy?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
  }

  export type PickupTokenOrderByWithRelationInput = {
    id?: SortOrder
    code?: SortOrder
    qrValue?: SortOrder
    generatedAt?: SortOrder
    expiresAt?: SortOrder
    usedAt?: SortOrderInput | SortOrder
    packageId?: SortOrder
    generatedById?: SortOrder
    validatedById?: SortOrderInput | SortOrder
    package?: PackageOrderByWithRelationInput
    generatedBy?: UserOrderByWithRelationInput
    validatedBy?: UserOrderByWithRelationInput
  }

  export type PickupTokenWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    code?: string
    qrValue?: string
    packageId?: string
    AND?: PickupTokenWhereInput | PickupTokenWhereInput[]
    OR?: PickupTokenWhereInput[]
    NOT?: PickupTokenWhereInput | PickupTokenWhereInput[]
    generatedAt?: DateTimeFilter<"PickupToken"> | Date | string
    expiresAt?: DateTimeFilter<"PickupToken"> | Date | string
    usedAt?: DateTimeNullableFilter<"PickupToken"> | Date | string | null
    generatedById?: StringFilter<"PickupToken"> | string
    validatedById?: StringNullableFilter<"PickupToken"> | string | null
    package?: XOR<PackageScalarRelationFilter, PackageWhereInput>
    generatedBy?: XOR<UserScalarRelationFilter, UserWhereInput>
    validatedBy?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
  }, "id" | "code" | "qrValue" | "packageId">

  export type PickupTokenOrderByWithAggregationInput = {
    id?: SortOrder
    code?: SortOrder
    qrValue?: SortOrder
    generatedAt?: SortOrder
    expiresAt?: SortOrder
    usedAt?: SortOrderInput | SortOrder
    packageId?: SortOrder
    generatedById?: SortOrder
    validatedById?: SortOrderInput | SortOrder
    _count?: PickupTokenCountOrderByAggregateInput
    _max?: PickupTokenMaxOrderByAggregateInput
    _min?: PickupTokenMinOrderByAggregateInput
  }

  export type PickupTokenScalarWhereWithAggregatesInput = {
    AND?: PickupTokenScalarWhereWithAggregatesInput | PickupTokenScalarWhereWithAggregatesInput[]
    OR?: PickupTokenScalarWhereWithAggregatesInput[]
    NOT?: PickupTokenScalarWhereWithAggregatesInput | PickupTokenScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"PickupToken"> | string
    code?: StringWithAggregatesFilter<"PickupToken"> | string
    qrValue?: StringWithAggregatesFilter<"PickupToken"> | string
    generatedAt?: DateTimeWithAggregatesFilter<"PickupToken"> | Date | string
    expiresAt?: DateTimeWithAggregatesFilter<"PickupToken"> | Date | string
    usedAt?: DateTimeNullableWithAggregatesFilter<"PickupToken"> | Date | string | null
    packageId?: StringWithAggregatesFilter<"PickupToken"> | string
    generatedById?: StringWithAggregatesFilter<"PickupToken"> | string
    validatedById?: StringNullableWithAggregatesFilter<"PickupToken"> | string | null
  }

  export type PackageHistoryWhereInput = {
    AND?: PackageHistoryWhereInput | PackageHistoryWhereInput[]
    OR?: PackageHistoryWhereInput[]
    NOT?: PackageHistoryWhereInput | PackageHistoryWhereInput[]
    id?: StringFilter<"PackageHistory"> | string
    type?: EnumHistoryTypeFilter<"PackageHistory"> | $Enums.HistoryType
    note?: StringFilter<"PackageHistory"> | string
    createdAt?: DateTimeFilter<"PackageHistory"> | Date | string
    fromStatus?: EnumPackageStatusNullableFilter<"PackageHistory"> | $Enums.PackageStatus | null
    toStatus?: EnumPackageStatusNullableFilter<"PackageHistory"> | $Enums.PackageStatus | null
    packageId?: StringFilter<"PackageHistory"> | string
    actorId?: StringNullableFilter<"PackageHistory"> | string | null
    package?: XOR<PackageScalarRelationFilter, PackageWhereInput>
    actor?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
  }

  export type PackageHistoryOrderByWithRelationInput = {
    id?: SortOrder
    type?: SortOrder
    note?: SortOrder
    createdAt?: SortOrder
    fromStatus?: SortOrderInput | SortOrder
    toStatus?: SortOrderInput | SortOrder
    packageId?: SortOrder
    actorId?: SortOrderInput | SortOrder
    package?: PackageOrderByWithRelationInput
    actor?: UserOrderByWithRelationInput
  }

  export type PackageHistoryWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: PackageHistoryWhereInput | PackageHistoryWhereInput[]
    OR?: PackageHistoryWhereInput[]
    NOT?: PackageHistoryWhereInput | PackageHistoryWhereInput[]
    type?: EnumHistoryTypeFilter<"PackageHistory"> | $Enums.HistoryType
    note?: StringFilter<"PackageHistory"> | string
    createdAt?: DateTimeFilter<"PackageHistory"> | Date | string
    fromStatus?: EnumPackageStatusNullableFilter<"PackageHistory"> | $Enums.PackageStatus | null
    toStatus?: EnumPackageStatusNullableFilter<"PackageHistory"> | $Enums.PackageStatus | null
    packageId?: StringFilter<"PackageHistory"> | string
    actorId?: StringNullableFilter<"PackageHistory"> | string | null
    package?: XOR<PackageScalarRelationFilter, PackageWhereInput>
    actor?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
  }, "id">

  export type PackageHistoryOrderByWithAggregationInput = {
    id?: SortOrder
    type?: SortOrder
    note?: SortOrder
    createdAt?: SortOrder
    fromStatus?: SortOrderInput | SortOrder
    toStatus?: SortOrderInput | SortOrder
    packageId?: SortOrder
    actorId?: SortOrderInput | SortOrder
    _count?: PackageHistoryCountOrderByAggregateInput
    _max?: PackageHistoryMaxOrderByAggregateInput
    _min?: PackageHistoryMinOrderByAggregateInput
  }

  export type PackageHistoryScalarWhereWithAggregatesInput = {
    AND?: PackageHistoryScalarWhereWithAggregatesInput | PackageHistoryScalarWhereWithAggregatesInput[]
    OR?: PackageHistoryScalarWhereWithAggregatesInput[]
    NOT?: PackageHistoryScalarWhereWithAggregatesInput | PackageHistoryScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"PackageHistory"> | string
    type?: EnumHistoryTypeWithAggregatesFilter<"PackageHistory"> | $Enums.HistoryType
    note?: StringWithAggregatesFilter<"PackageHistory"> | string
    createdAt?: DateTimeWithAggregatesFilter<"PackageHistory"> | Date | string
    fromStatus?: EnumPackageStatusNullableWithAggregatesFilter<"PackageHistory"> | $Enums.PackageStatus | null
    toStatus?: EnumPackageStatusNullableWithAggregatesFilter<"PackageHistory"> | $Enums.PackageStatus | null
    packageId?: StringWithAggregatesFilter<"PackageHistory"> | string
    actorId?: StringNullableWithAggregatesFilter<"PackageHistory"> | string | null
  }

  export type NotificationWhereInput = {
    AND?: NotificationWhereInput | NotificationWhereInput[]
    OR?: NotificationWhereInput[]
    NOT?: NotificationWhereInput | NotificationWhereInput[]
    id?: StringFilter<"Notification"> | string
    type?: EnumNotificationTypeFilter<"Notification"> | $Enums.NotificationType
    title?: StringFilter<"Notification"> | string
    message?: StringFilter<"Notification"> | string
    href?: StringNullableFilter<"Notification"> | string | null
    readAt?: DateTimeNullableFilter<"Notification"> | Date | string | null
    createdAt?: DateTimeFilter<"Notification"> | Date | string
    userId?: StringFilter<"Notification"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    deliveries?: NotificationDeliveryListRelationFilter
  }

  export type NotificationOrderByWithRelationInput = {
    id?: SortOrder
    type?: SortOrder
    title?: SortOrder
    message?: SortOrder
    href?: SortOrderInput | SortOrder
    readAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    userId?: SortOrder
    user?: UserOrderByWithRelationInput
    deliveries?: NotificationDeliveryOrderByRelationAggregateInput
  }

  export type NotificationWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: NotificationWhereInput | NotificationWhereInput[]
    OR?: NotificationWhereInput[]
    NOT?: NotificationWhereInput | NotificationWhereInput[]
    type?: EnumNotificationTypeFilter<"Notification"> | $Enums.NotificationType
    title?: StringFilter<"Notification"> | string
    message?: StringFilter<"Notification"> | string
    href?: StringNullableFilter<"Notification"> | string | null
    readAt?: DateTimeNullableFilter<"Notification"> | Date | string | null
    createdAt?: DateTimeFilter<"Notification"> | Date | string
    userId?: StringFilter<"Notification"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    deliveries?: NotificationDeliveryListRelationFilter
  }, "id">

  export type NotificationOrderByWithAggregationInput = {
    id?: SortOrder
    type?: SortOrder
    title?: SortOrder
    message?: SortOrder
    href?: SortOrderInput | SortOrder
    readAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    userId?: SortOrder
    _count?: NotificationCountOrderByAggregateInput
    _max?: NotificationMaxOrderByAggregateInput
    _min?: NotificationMinOrderByAggregateInput
  }

  export type NotificationScalarWhereWithAggregatesInput = {
    AND?: NotificationScalarWhereWithAggregatesInput | NotificationScalarWhereWithAggregatesInput[]
    OR?: NotificationScalarWhereWithAggregatesInput[]
    NOT?: NotificationScalarWhereWithAggregatesInput | NotificationScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Notification"> | string
    type?: EnumNotificationTypeWithAggregatesFilter<"Notification"> | $Enums.NotificationType
    title?: StringWithAggregatesFilter<"Notification"> | string
    message?: StringWithAggregatesFilter<"Notification"> | string
    href?: StringNullableWithAggregatesFilter<"Notification"> | string | null
    readAt?: DateTimeNullableWithAggregatesFilter<"Notification"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Notification"> | Date | string
    userId?: StringWithAggregatesFilter<"Notification"> | string
  }

  export type NotificationDeliveryWhereInput = {
    AND?: NotificationDeliveryWhereInput | NotificationDeliveryWhereInput[]
    OR?: NotificationDeliveryWhereInput[]
    NOT?: NotificationDeliveryWhereInput | NotificationDeliveryWhereInput[]
    id?: StringFilter<"NotificationDelivery"> | string
    channel?: EnumDeliveryChannelFilter<"NotificationDelivery"> | $Enums.DeliveryChannel
    status?: EnumDeliveryStatusFilter<"NotificationDelivery"> | $Enums.DeliveryStatus
    recipient?: StringNullableFilter<"NotificationDelivery"> | string | null
    providerMessageId?: StringNullableFilter<"NotificationDelivery"> | string | null
    errorMessage?: StringNullableFilter<"NotificationDelivery"> | string | null
    attemptedAt?: DateTimeNullableFilter<"NotificationDelivery"> | Date | string | null
    createdAt?: DateTimeFilter<"NotificationDelivery"> | Date | string
    notificationId?: StringFilter<"NotificationDelivery"> | string
    notification?: XOR<NotificationScalarRelationFilter, NotificationWhereInput>
  }

  export type NotificationDeliveryOrderByWithRelationInput = {
    id?: SortOrder
    channel?: SortOrder
    status?: SortOrder
    recipient?: SortOrderInput | SortOrder
    providerMessageId?: SortOrderInput | SortOrder
    errorMessage?: SortOrderInput | SortOrder
    attemptedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    notificationId?: SortOrder
    notification?: NotificationOrderByWithRelationInput
  }

  export type NotificationDeliveryWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: NotificationDeliveryWhereInput | NotificationDeliveryWhereInput[]
    OR?: NotificationDeliveryWhereInput[]
    NOT?: NotificationDeliveryWhereInput | NotificationDeliveryWhereInput[]
    channel?: EnumDeliveryChannelFilter<"NotificationDelivery"> | $Enums.DeliveryChannel
    status?: EnumDeliveryStatusFilter<"NotificationDelivery"> | $Enums.DeliveryStatus
    recipient?: StringNullableFilter<"NotificationDelivery"> | string | null
    providerMessageId?: StringNullableFilter<"NotificationDelivery"> | string | null
    errorMessage?: StringNullableFilter<"NotificationDelivery"> | string | null
    attemptedAt?: DateTimeNullableFilter<"NotificationDelivery"> | Date | string | null
    createdAt?: DateTimeFilter<"NotificationDelivery"> | Date | string
    notificationId?: StringFilter<"NotificationDelivery"> | string
    notification?: XOR<NotificationScalarRelationFilter, NotificationWhereInput>
  }, "id">

  export type NotificationDeliveryOrderByWithAggregationInput = {
    id?: SortOrder
    channel?: SortOrder
    status?: SortOrder
    recipient?: SortOrderInput | SortOrder
    providerMessageId?: SortOrderInput | SortOrder
    errorMessage?: SortOrderInput | SortOrder
    attemptedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    notificationId?: SortOrder
    _count?: NotificationDeliveryCountOrderByAggregateInput
    _max?: NotificationDeliveryMaxOrderByAggregateInput
    _min?: NotificationDeliveryMinOrderByAggregateInput
  }

  export type NotificationDeliveryScalarWhereWithAggregatesInput = {
    AND?: NotificationDeliveryScalarWhereWithAggregatesInput | NotificationDeliveryScalarWhereWithAggregatesInput[]
    OR?: NotificationDeliveryScalarWhereWithAggregatesInput[]
    NOT?: NotificationDeliveryScalarWhereWithAggregatesInput | NotificationDeliveryScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"NotificationDelivery"> | string
    channel?: EnumDeliveryChannelWithAggregatesFilter<"NotificationDelivery"> | $Enums.DeliveryChannel
    status?: EnumDeliveryStatusWithAggregatesFilter<"NotificationDelivery"> | $Enums.DeliveryStatus
    recipient?: StringNullableWithAggregatesFilter<"NotificationDelivery"> | string | null
    providerMessageId?: StringNullableWithAggregatesFilter<"NotificationDelivery"> | string | null
    errorMessage?: StringNullableWithAggregatesFilter<"NotificationDelivery"> | string | null
    attemptedAt?: DateTimeNullableWithAggregatesFilter<"NotificationDelivery"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"NotificationDelivery"> | Date | string
    notificationId?: StringWithAggregatesFilter<"NotificationDelivery"> | string
  }

  export type PushSubscriptionWhereInput = {
    AND?: PushSubscriptionWhereInput | PushSubscriptionWhereInput[]
    OR?: PushSubscriptionWhereInput[]
    NOT?: PushSubscriptionWhereInput | PushSubscriptionWhereInput[]
    id?: StringFilter<"PushSubscription"> | string
    endpoint?: StringFilter<"PushSubscription"> | string
    p256dh?: StringFilter<"PushSubscription"> | string
    auth?: StringFilter<"PushSubscription"> | string
    userAgent?: StringNullableFilter<"PushSubscription"> | string | null
    createdAt?: DateTimeFilter<"PushSubscription"> | Date | string
    updatedAt?: DateTimeFilter<"PushSubscription"> | Date | string
    userId?: StringFilter<"PushSubscription"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type PushSubscriptionOrderByWithRelationInput = {
    id?: SortOrder
    endpoint?: SortOrder
    p256dh?: SortOrder
    auth?: SortOrder
    userAgent?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type PushSubscriptionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    endpoint?: string
    AND?: PushSubscriptionWhereInput | PushSubscriptionWhereInput[]
    OR?: PushSubscriptionWhereInput[]
    NOT?: PushSubscriptionWhereInput | PushSubscriptionWhereInput[]
    p256dh?: StringFilter<"PushSubscription"> | string
    auth?: StringFilter<"PushSubscription"> | string
    userAgent?: StringNullableFilter<"PushSubscription"> | string | null
    createdAt?: DateTimeFilter<"PushSubscription"> | Date | string
    updatedAt?: DateTimeFilter<"PushSubscription"> | Date | string
    userId?: StringFilter<"PushSubscription"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "endpoint">

  export type PushSubscriptionOrderByWithAggregationInput = {
    id?: SortOrder
    endpoint?: SortOrder
    p256dh?: SortOrder
    auth?: SortOrder
    userAgent?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    _count?: PushSubscriptionCountOrderByAggregateInput
    _max?: PushSubscriptionMaxOrderByAggregateInput
    _min?: PushSubscriptionMinOrderByAggregateInput
  }

  export type PushSubscriptionScalarWhereWithAggregatesInput = {
    AND?: PushSubscriptionScalarWhereWithAggregatesInput | PushSubscriptionScalarWhereWithAggregatesInput[]
    OR?: PushSubscriptionScalarWhereWithAggregatesInput[]
    NOT?: PushSubscriptionScalarWhereWithAggregatesInput | PushSubscriptionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"PushSubscription"> | string
    endpoint?: StringWithAggregatesFilter<"PushSubscription"> | string
    p256dh?: StringWithAggregatesFilter<"PushSubscription"> | string
    auth?: StringWithAggregatesFilter<"PushSubscription"> | string
    userAgent?: StringNullableWithAggregatesFilter<"PushSubscription"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"PushSubscription"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"PushSubscription"> | Date | string
    userId?: StringWithAggregatesFilter<"PushSubscription"> | string
  }

  export type AuditLogWhereInput = {
    AND?: AuditLogWhereInput | AuditLogWhereInput[]
    OR?: AuditLogWhereInput[]
    NOT?: AuditLogWhereInput | AuditLogWhereInput[]
    id?: StringFilter<"AuditLog"> | string
    action?: EnumAuditActionFilter<"AuditLog"> | $Enums.AuditAction
    entityType?: EnumAuditEntityTypeFilter<"AuditLog"> | $Enums.AuditEntityType
    entityId?: StringNullableFilter<"AuditLog"> | string | null
    description?: StringFilter<"AuditLog"> | string
    context?: StringNullableFilter<"AuditLog"> | string | null
    createdAt?: DateTimeFilter<"AuditLog"> | Date | string
    actorId?: StringNullableFilter<"AuditLog"> | string | null
    actor?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
  }

  export type AuditLogOrderByWithRelationInput = {
    id?: SortOrder
    action?: SortOrder
    entityType?: SortOrder
    entityId?: SortOrderInput | SortOrder
    description?: SortOrder
    context?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    actorId?: SortOrderInput | SortOrder
    actor?: UserOrderByWithRelationInput
  }

  export type AuditLogWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: AuditLogWhereInput | AuditLogWhereInput[]
    OR?: AuditLogWhereInput[]
    NOT?: AuditLogWhereInput | AuditLogWhereInput[]
    action?: EnumAuditActionFilter<"AuditLog"> | $Enums.AuditAction
    entityType?: EnumAuditEntityTypeFilter<"AuditLog"> | $Enums.AuditEntityType
    entityId?: StringNullableFilter<"AuditLog"> | string | null
    description?: StringFilter<"AuditLog"> | string
    context?: StringNullableFilter<"AuditLog"> | string | null
    createdAt?: DateTimeFilter<"AuditLog"> | Date | string
    actorId?: StringNullableFilter<"AuditLog"> | string | null
    actor?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
  }, "id">

  export type AuditLogOrderByWithAggregationInput = {
    id?: SortOrder
    action?: SortOrder
    entityType?: SortOrder
    entityId?: SortOrderInput | SortOrder
    description?: SortOrder
    context?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    actorId?: SortOrderInput | SortOrder
    _count?: AuditLogCountOrderByAggregateInput
    _max?: AuditLogMaxOrderByAggregateInput
    _min?: AuditLogMinOrderByAggregateInput
  }

  export type AuditLogScalarWhereWithAggregatesInput = {
    AND?: AuditLogScalarWhereWithAggregatesInput | AuditLogScalarWhereWithAggregatesInput[]
    OR?: AuditLogScalarWhereWithAggregatesInput[]
    NOT?: AuditLogScalarWhereWithAggregatesInput | AuditLogScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"AuditLog"> | string
    action?: EnumAuditActionWithAggregatesFilter<"AuditLog"> | $Enums.AuditAction
    entityType?: EnumAuditEntityTypeWithAggregatesFilter<"AuditLog"> | $Enums.AuditEntityType
    entityId?: StringNullableWithAggregatesFilter<"AuditLog"> | string | null
    description?: StringWithAggregatesFilter<"AuditLog"> | string
    context?: StringNullableWithAggregatesFilter<"AuditLog"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"AuditLog"> | Date | string
    actorId?: StringNullableWithAggregatesFilter<"AuditLog"> | string | null
  }

  export type AuthThrottleWhereInput = {
    AND?: AuthThrottleWhereInput | AuthThrottleWhereInput[]
    OR?: AuthThrottleWhereInput[]
    NOT?: AuthThrottleWhereInput | AuthThrottleWhereInput[]
    id?: StringFilter<"AuthThrottle"> | string
    scope?: StringFilter<"AuthThrottle"> | string
    key?: StringFilter<"AuthThrottle"> | string
    attempts?: IntFilter<"AuthThrottle"> | number
    windowStartedAt?: DateTimeFilter<"AuthThrottle"> | Date | string
    blockedUntil?: DateTimeNullableFilter<"AuthThrottle"> | Date | string | null
    createdAt?: DateTimeFilter<"AuthThrottle"> | Date | string
    updatedAt?: DateTimeFilter<"AuthThrottle"> | Date | string
  }

  export type AuthThrottleOrderByWithRelationInput = {
    id?: SortOrder
    scope?: SortOrder
    key?: SortOrder
    attempts?: SortOrder
    windowStartedAt?: SortOrder
    blockedUntil?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AuthThrottleWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: AuthThrottleWhereInput | AuthThrottleWhereInput[]
    OR?: AuthThrottleWhereInput[]
    NOT?: AuthThrottleWhereInput | AuthThrottleWhereInput[]
    scope?: StringFilter<"AuthThrottle"> | string
    key?: StringFilter<"AuthThrottle"> | string
    attempts?: IntFilter<"AuthThrottle"> | number
    windowStartedAt?: DateTimeFilter<"AuthThrottle"> | Date | string
    blockedUntil?: DateTimeNullableFilter<"AuthThrottle"> | Date | string | null
    createdAt?: DateTimeFilter<"AuthThrottle"> | Date | string
    updatedAt?: DateTimeFilter<"AuthThrottle"> | Date | string
  }, "id">

  export type AuthThrottleOrderByWithAggregationInput = {
    id?: SortOrder
    scope?: SortOrder
    key?: SortOrder
    attempts?: SortOrder
    windowStartedAt?: SortOrder
    blockedUntil?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: AuthThrottleCountOrderByAggregateInput
    _avg?: AuthThrottleAvgOrderByAggregateInput
    _max?: AuthThrottleMaxOrderByAggregateInput
    _min?: AuthThrottleMinOrderByAggregateInput
    _sum?: AuthThrottleSumOrderByAggregateInput
  }

  export type AuthThrottleScalarWhereWithAggregatesInput = {
    AND?: AuthThrottleScalarWhereWithAggregatesInput | AuthThrottleScalarWhereWithAggregatesInput[]
    OR?: AuthThrottleScalarWhereWithAggregatesInput[]
    NOT?: AuthThrottleScalarWhereWithAggregatesInput | AuthThrottleScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"AuthThrottle"> | string
    scope?: StringWithAggregatesFilter<"AuthThrottle"> | string
    key?: StringWithAggregatesFilter<"AuthThrottle"> | string
    attempts?: IntWithAggregatesFilter<"AuthThrottle"> | number
    windowStartedAt?: DateTimeWithAggregatesFilter<"AuthThrottle"> | Date | string
    blockedUntil?: DateTimeNullableWithAggregatesFilter<"AuthThrottle"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"AuthThrottle"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"AuthThrottle"> | Date | string
  }

  export type TowerCreateInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    units?: UnitCreateNestedManyWithoutTowerInput
  }

  export type TowerUncheckedCreateInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    units?: UnitUncheckedCreateNestedManyWithoutTowerInput
  }

  export type TowerUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    units?: UnitUpdateManyWithoutTowerNestedInput
  }

  export type TowerUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    units?: UnitUncheckedUpdateManyWithoutTowerNestedInput
  }

  export type TowerCreateManyInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TowerUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TowerUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UnitCreateInput = {
    id?: string
    number: string
    label: string
    floor?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    tower: TowerCreateNestedOneWithoutUnitsInput
    residents?: UserCreateNestedManyWithoutUnitInput
    packages?: PackageCreateNestedManyWithoutUnitInput
  }

  export type UnitUncheckedCreateInput = {
    id?: string
    number: string
    label: string
    floor?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    towerId: string
    residents?: UserUncheckedCreateNestedManyWithoutUnitInput
    packages?: PackageUncheckedCreateNestedManyWithoutUnitInput
  }

  export type UnitUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    number?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    floor?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tower?: TowerUpdateOneRequiredWithoutUnitsNestedInput
    residents?: UserUpdateManyWithoutUnitNestedInput
    packages?: PackageUpdateManyWithoutUnitNestedInput
  }

  export type UnitUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    number?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    floor?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    towerId?: StringFieldUpdateOperationsInput | string
    residents?: UserUncheckedUpdateManyWithoutUnitNestedInput
    packages?: PackageUncheckedUpdateManyWithoutUnitNestedInput
  }

  export type UnitCreateManyInput = {
    id?: string
    number: string
    label: string
    floor?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    towerId: string
  }

  export type UnitUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    number?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    floor?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UnitUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    number?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    floor?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    towerId?: StringFieldUpdateOperationsInput | string
  }

  export type UserCreateInput = {
    id?: string
    name: string
    email: string
    passwordHash: string
    role: $Enums.Role
    phone?: string | null
    jobTitle?: string | null
    isActive?: boolean
    mustChangePassword?: boolean
    lastLoginAt?: Date | string | null
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    unit?: UnitCreateNestedOneWithoutResidentsInput
    notifications?: NotificationCreateNestedManyWithoutUserInput
    receivedPackages?: PackageCreateNestedManyWithoutReceivedByInput
    residentPackages?: PackageCreateNestedManyWithoutResidentInput
    historyEntries?: PackageHistoryCreateNestedManyWithoutActorInput
    generatedTokens?: PickupTokenCreateNestedManyWithoutGeneratedByInput
    validatedTokens?: PickupTokenCreateNestedManyWithoutValidatedByInput
    pushSubscriptions?: PushSubscriptionCreateNestedManyWithoutUserInput
    auditLogs?: AuditLogCreateNestedManyWithoutActorInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    name: string
    email: string
    passwordHash: string
    role: $Enums.Role
    phone?: string | null
    jobTitle?: string | null
    isActive?: boolean
    mustChangePassword?: boolean
    lastLoginAt?: Date | string | null
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    unitId?: string | null
    notifications?: NotificationUncheckedCreateNestedManyWithoutUserInput
    receivedPackages?: PackageUncheckedCreateNestedManyWithoutReceivedByInput
    residentPackages?: PackageUncheckedCreateNestedManyWithoutResidentInput
    historyEntries?: PackageHistoryUncheckedCreateNestedManyWithoutActorInput
    generatedTokens?: PickupTokenUncheckedCreateNestedManyWithoutGeneratedByInput
    validatedTokens?: PickupTokenUncheckedCreateNestedManyWithoutValidatedByInput
    pushSubscriptions?: PushSubscriptionUncheckedCreateNestedManyWithoutUserInput
    auditLogs?: AuditLogUncheckedCreateNestedManyWithoutActorInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    jobTitle?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    mustChangePassword?: BoolFieldUpdateOperationsInput | boolean
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    unit?: UnitUpdateOneWithoutResidentsNestedInput
    notifications?: NotificationUpdateManyWithoutUserNestedInput
    receivedPackages?: PackageUpdateManyWithoutReceivedByNestedInput
    residentPackages?: PackageUpdateManyWithoutResidentNestedInput
    historyEntries?: PackageHistoryUpdateManyWithoutActorNestedInput
    generatedTokens?: PickupTokenUpdateManyWithoutGeneratedByNestedInput
    validatedTokens?: PickupTokenUpdateManyWithoutValidatedByNestedInput
    pushSubscriptions?: PushSubscriptionUpdateManyWithoutUserNestedInput
    auditLogs?: AuditLogUpdateManyWithoutActorNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    jobTitle?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    mustChangePassword?: BoolFieldUpdateOperationsInput | boolean
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    unitId?: NullableStringFieldUpdateOperationsInput | string | null
    notifications?: NotificationUncheckedUpdateManyWithoutUserNestedInput
    receivedPackages?: PackageUncheckedUpdateManyWithoutReceivedByNestedInput
    residentPackages?: PackageUncheckedUpdateManyWithoutResidentNestedInput
    historyEntries?: PackageHistoryUncheckedUpdateManyWithoutActorNestedInput
    generatedTokens?: PickupTokenUncheckedUpdateManyWithoutGeneratedByNestedInput
    validatedTokens?: PickupTokenUncheckedUpdateManyWithoutValidatedByNestedInput
    pushSubscriptions?: PushSubscriptionUncheckedUpdateManyWithoutUserNestedInput
    auditLogs?: AuditLogUncheckedUpdateManyWithoutActorNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    name: string
    email: string
    passwordHash: string
    role: $Enums.Role
    phone?: string | null
    jobTitle?: string | null
    isActive?: boolean
    mustChangePassword?: boolean
    lastLoginAt?: Date | string | null
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    unitId?: string | null
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    jobTitle?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    mustChangePassword?: BoolFieldUpdateOperationsInput | boolean
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    jobTitle?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    mustChangePassword?: BoolFieldUpdateOperationsInput | boolean
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    unitId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PackageCreateInput = {
    id?: string
    trackingCode: string
    carrier: string
    description?: string | null
    status?: $Enums.PackageStatus
    receivedAt?: Date | string
    notifiedAt?: Date | string | null
    pickedUpAt?: Date | string | null
    dueAt?: Date | string | null
    notificationSent?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    resident: UserCreateNestedOneWithoutResidentPackagesInput
    unit: UnitCreateNestedOneWithoutPackagesInput
    receivedBy: UserCreateNestedOneWithoutReceivedPackagesInput
    history?: PackageHistoryCreateNestedManyWithoutPackageInput
    token?: PickupTokenCreateNestedOneWithoutPackageInput
  }

  export type PackageUncheckedCreateInput = {
    id?: string
    trackingCode: string
    carrier: string
    description?: string | null
    status?: $Enums.PackageStatus
    receivedAt?: Date | string
    notifiedAt?: Date | string | null
    pickedUpAt?: Date | string | null
    dueAt?: Date | string | null
    notificationSent?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    residentId: string
    unitId: string
    receivedById: string
    history?: PackageHistoryUncheckedCreateNestedManyWithoutPackageInput
    token?: PickupTokenUncheckedCreateNestedOneWithoutPackageInput
  }

  export type PackageUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    trackingCode?: StringFieldUpdateOperationsInput | string
    carrier?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumPackageStatusFieldUpdateOperationsInput | $Enums.PackageStatus
    receivedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    notifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    pickedUpAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dueAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    notificationSent?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    resident?: UserUpdateOneRequiredWithoutResidentPackagesNestedInput
    unit?: UnitUpdateOneRequiredWithoutPackagesNestedInput
    receivedBy?: UserUpdateOneRequiredWithoutReceivedPackagesNestedInput
    history?: PackageHistoryUpdateManyWithoutPackageNestedInput
    token?: PickupTokenUpdateOneWithoutPackageNestedInput
  }

  export type PackageUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    trackingCode?: StringFieldUpdateOperationsInput | string
    carrier?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumPackageStatusFieldUpdateOperationsInput | $Enums.PackageStatus
    receivedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    notifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    pickedUpAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dueAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    notificationSent?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    residentId?: StringFieldUpdateOperationsInput | string
    unitId?: StringFieldUpdateOperationsInput | string
    receivedById?: StringFieldUpdateOperationsInput | string
    history?: PackageHistoryUncheckedUpdateManyWithoutPackageNestedInput
    token?: PickupTokenUncheckedUpdateOneWithoutPackageNestedInput
  }

  export type PackageCreateManyInput = {
    id?: string
    trackingCode: string
    carrier: string
    description?: string | null
    status?: $Enums.PackageStatus
    receivedAt?: Date | string
    notifiedAt?: Date | string | null
    pickedUpAt?: Date | string | null
    dueAt?: Date | string | null
    notificationSent?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    residentId: string
    unitId: string
    receivedById: string
  }

  export type PackageUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    trackingCode?: StringFieldUpdateOperationsInput | string
    carrier?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumPackageStatusFieldUpdateOperationsInput | $Enums.PackageStatus
    receivedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    notifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    pickedUpAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dueAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    notificationSent?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PackageUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    trackingCode?: StringFieldUpdateOperationsInput | string
    carrier?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumPackageStatusFieldUpdateOperationsInput | $Enums.PackageStatus
    receivedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    notifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    pickedUpAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dueAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    notificationSent?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    residentId?: StringFieldUpdateOperationsInput | string
    unitId?: StringFieldUpdateOperationsInput | string
    receivedById?: StringFieldUpdateOperationsInput | string
  }

  export type PickupTokenCreateInput = {
    id?: string
    code: string
    qrValue: string
    generatedAt?: Date | string
    expiresAt: Date | string
    usedAt?: Date | string | null
    package: PackageCreateNestedOneWithoutTokenInput
    generatedBy: UserCreateNestedOneWithoutGeneratedTokensInput
    validatedBy?: UserCreateNestedOneWithoutValidatedTokensInput
  }

  export type PickupTokenUncheckedCreateInput = {
    id?: string
    code: string
    qrValue: string
    generatedAt?: Date | string
    expiresAt: Date | string
    usedAt?: Date | string | null
    packageId: string
    generatedById: string
    validatedById?: string | null
  }

  export type PickupTokenUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    qrValue?: StringFieldUpdateOperationsInput | string
    generatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    usedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    package?: PackageUpdateOneRequiredWithoutTokenNestedInput
    generatedBy?: UserUpdateOneRequiredWithoutGeneratedTokensNestedInput
    validatedBy?: UserUpdateOneWithoutValidatedTokensNestedInput
  }

  export type PickupTokenUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    qrValue?: StringFieldUpdateOperationsInput | string
    generatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    usedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    packageId?: StringFieldUpdateOperationsInput | string
    generatedById?: StringFieldUpdateOperationsInput | string
    validatedById?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PickupTokenCreateManyInput = {
    id?: string
    code: string
    qrValue: string
    generatedAt?: Date | string
    expiresAt: Date | string
    usedAt?: Date | string | null
    packageId: string
    generatedById: string
    validatedById?: string | null
  }

  export type PickupTokenUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    qrValue?: StringFieldUpdateOperationsInput | string
    generatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    usedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type PickupTokenUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    qrValue?: StringFieldUpdateOperationsInput | string
    generatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    usedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    packageId?: StringFieldUpdateOperationsInput | string
    generatedById?: StringFieldUpdateOperationsInput | string
    validatedById?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PackageHistoryCreateInput = {
    id?: string
    type: $Enums.HistoryType
    note: string
    createdAt?: Date | string
    fromStatus?: $Enums.PackageStatus | null
    toStatus?: $Enums.PackageStatus | null
    package: PackageCreateNestedOneWithoutHistoryInput
    actor?: UserCreateNestedOneWithoutHistoryEntriesInput
  }

  export type PackageHistoryUncheckedCreateInput = {
    id?: string
    type: $Enums.HistoryType
    note: string
    createdAt?: Date | string
    fromStatus?: $Enums.PackageStatus | null
    toStatus?: $Enums.PackageStatus | null
    packageId: string
    actorId?: string | null
  }

  export type PackageHistoryUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumHistoryTypeFieldUpdateOperationsInput | $Enums.HistoryType
    note?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    fromStatus?: NullableEnumPackageStatusFieldUpdateOperationsInput | $Enums.PackageStatus | null
    toStatus?: NullableEnumPackageStatusFieldUpdateOperationsInput | $Enums.PackageStatus | null
    package?: PackageUpdateOneRequiredWithoutHistoryNestedInput
    actor?: UserUpdateOneWithoutHistoryEntriesNestedInput
  }

  export type PackageHistoryUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumHistoryTypeFieldUpdateOperationsInput | $Enums.HistoryType
    note?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    fromStatus?: NullableEnumPackageStatusFieldUpdateOperationsInput | $Enums.PackageStatus | null
    toStatus?: NullableEnumPackageStatusFieldUpdateOperationsInput | $Enums.PackageStatus | null
    packageId?: StringFieldUpdateOperationsInput | string
    actorId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PackageHistoryCreateManyInput = {
    id?: string
    type: $Enums.HistoryType
    note: string
    createdAt?: Date | string
    fromStatus?: $Enums.PackageStatus | null
    toStatus?: $Enums.PackageStatus | null
    packageId: string
    actorId?: string | null
  }

  export type PackageHistoryUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumHistoryTypeFieldUpdateOperationsInput | $Enums.HistoryType
    note?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    fromStatus?: NullableEnumPackageStatusFieldUpdateOperationsInput | $Enums.PackageStatus | null
    toStatus?: NullableEnumPackageStatusFieldUpdateOperationsInput | $Enums.PackageStatus | null
  }

  export type PackageHistoryUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumHistoryTypeFieldUpdateOperationsInput | $Enums.HistoryType
    note?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    fromStatus?: NullableEnumPackageStatusFieldUpdateOperationsInput | $Enums.PackageStatus | null
    toStatus?: NullableEnumPackageStatusFieldUpdateOperationsInput | $Enums.PackageStatus | null
    packageId?: StringFieldUpdateOperationsInput | string
    actorId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type NotificationCreateInput = {
    id?: string
    type: $Enums.NotificationType
    title: string
    message: string
    href?: string | null
    readAt?: Date | string | null
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutNotificationsInput
    deliveries?: NotificationDeliveryCreateNestedManyWithoutNotificationInput
  }

  export type NotificationUncheckedCreateInput = {
    id?: string
    type: $Enums.NotificationType
    title: string
    message: string
    href?: string | null
    readAt?: Date | string | null
    createdAt?: Date | string
    userId: string
    deliveries?: NotificationDeliveryUncheckedCreateNestedManyWithoutNotificationInput
  }

  export type NotificationUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumNotificationTypeFieldUpdateOperationsInput | $Enums.NotificationType
    title?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    href?: NullableStringFieldUpdateOperationsInput | string | null
    readAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutNotificationsNestedInput
    deliveries?: NotificationDeliveryUpdateManyWithoutNotificationNestedInput
  }

  export type NotificationUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumNotificationTypeFieldUpdateOperationsInput | $Enums.NotificationType
    title?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    href?: NullableStringFieldUpdateOperationsInput | string | null
    readAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    deliveries?: NotificationDeliveryUncheckedUpdateManyWithoutNotificationNestedInput
  }

  export type NotificationCreateManyInput = {
    id?: string
    type: $Enums.NotificationType
    title: string
    message: string
    href?: string | null
    readAt?: Date | string | null
    createdAt?: Date | string
    userId: string
  }

  export type NotificationUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumNotificationTypeFieldUpdateOperationsInput | $Enums.NotificationType
    title?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    href?: NullableStringFieldUpdateOperationsInput | string | null
    readAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumNotificationTypeFieldUpdateOperationsInput | $Enums.NotificationType
    title?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    href?: NullableStringFieldUpdateOperationsInput | string | null
    readAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type NotificationDeliveryCreateInput = {
    id?: string
    channel: $Enums.DeliveryChannel
    status?: $Enums.DeliveryStatus
    recipient?: string | null
    providerMessageId?: string | null
    errorMessage?: string | null
    attemptedAt?: Date | string | null
    createdAt?: Date | string
    notification: NotificationCreateNestedOneWithoutDeliveriesInput
  }

  export type NotificationDeliveryUncheckedCreateInput = {
    id?: string
    channel: $Enums.DeliveryChannel
    status?: $Enums.DeliveryStatus
    recipient?: string | null
    providerMessageId?: string | null
    errorMessage?: string | null
    attemptedAt?: Date | string | null
    createdAt?: Date | string
    notificationId: string
  }

  export type NotificationDeliveryUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    channel?: EnumDeliveryChannelFieldUpdateOperationsInput | $Enums.DeliveryChannel
    status?: EnumDeliveryStatusFieldUpdateOperationsInput | $Enums.DeliveryStatus
    recipient?: NullableStringFieldUpdateOperationsInput | string | null
    providerMessageId?: NullableStringFieldUpdateOperationsInput | string | null
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    attemptedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    notification?: NotificationUpdateOneRequiredWithoutDeliveriesNestedInput
  }

  export type NotificationDeliveryUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    channel?: EnumDeliveryChannelFieldUpdateOperationsInput | $Enums.DeliveryChannel
    status?: EnumDeliveryStatusFieldUpdateOperationsInput | $Enums.DeliveryStatus
    recipient?: NullableStringFieldUpdateOperationsInput | string | null
    providerMessageId?: NullableStringFieldUpdateOperationsInput | string | null
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    attemptedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    notificationId?: StringFieldUpdateOperationsInput | string
  }

  export type NotificationDeliveryCreateManyInput = {
    id?: string
    channel: $Enums.DeliveryChannel
    status?: $Enums.DeliveryStatus
    recipient?: string | null
    providerMessageId?: string | null
    errorMessage?: string | null
    attemptedAt?: Date | string | null
    createdAt?: Date | string
    notificationId: string
  }

  export type NotificationDeliveryUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    channel?: EnumDeliveryChannelFieldUpdateOperationsInput | $Enums.DeliveryChannel
    status?: EnumDeliveryStatusFieldUpdateOperationsInput | $Enums.DeliveryStatus
    recipient?: NullableStringFieldUpdateOperationsInput | string | null
    providerMessageId?: NullableStringFieldUpdateOperationsInput | string | null
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    attemptedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationDeliveryUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    channel?: EnumDeliveryChannelFieldUpdateOperationsInput | $Enums.DeliveryChannel
    status?: EnumDeliveryStatusFieldUpdateOperationsInput | $Enums.DeliveryStatus
    recipient?: NullableStringFieldUpdateOperationsInput | string | null
    providerMessageId?: NullableStringFieldUpdateOperationsInput | string | null
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    attemptedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    notificationId?: StringFieldUpdateOperationsInput | string
  }

  export type PushSubscriptionCreateInput = {
    id?: string
    endpoint: string
    p256dh: string
    auth: string
    userAgent?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutPushSubscriptionsInput
  }

  export type PushSubscriptionUncheckedCreateInput = {
    id?: string
    endpoint: string
    p256dh: string
    auth: string
    userAgent?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: string
  }

  export type PushSubscriptionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    endpoint?: StringFieldUpdateOperationsInput | string
    p256dh?: StringFieldUpdateOperationsInput | string
    auth?: StringFieldUpdateOperationsInput | string
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutPushSubscriptionsNestedInput
  }

  export type PushSubscriptionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    endpoint?: StringFieldUpdateOperationsInput | string
    p256dh?: StringFieldUpdateOperationsInput | string
    auth?: StringFieldUpdateOperationsInput | string
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type PushSubscriptionCreateManyInput = {
    id?: string
    endpoint: string
    p256dh: string
    auth: string
    userAgent?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: string
  }

  export type PushSubscriptionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    endpoint?: StringFieldUpdateOperationsInput | string
    p256dh?: StringFieldUpdateOperationsInput | string
    auth?: StringFieldUpdateOperationsInput | string
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PushSubscriptionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    endpoint?: StringFieldUpdateOperationsInput | string
    p256dh?: StringFieldUpdateOperationsInput | string
    auth?: StringFieldUpdateOperationsInput | string
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type AuditLogCreateInput = {
    id?: string
    action: $Enums.AuditAction
    entityType: $Enums.AuditEntityType
    entityId?: string | null
    description: string
    context?: string | null
    createdAt?: Date | string
    actor?: UserCreateNestedOneWithoutAuditLogsInput
  }

  export type AuditLogUncheckedCreateInput = {
    id?: string
    action: $Enums.AuditAction
    entityType: $Enums.AuditEntityType
    entityId?: string | null
    description: string
    context?: string | null
    createdAt?: Date | string
    actorId?: string | null
  }

  export type AuditLogUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    action?: EnumAuditActionFieldUpdateOperationsInput | $Enums.AuditAction
    entityType?: EnumAuditEntityTypeFieldUpdateOperationsInput | $Enums.AuditEntityType
    entityId?: NullableStringFieldUpdateOperationsInput | string | null
    description?: StringFieldUpdateOperationsInput | string
    context?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    actor?: UserUpdateOneWithoutAuditLogsNestedInput
  }

  export type AuditLogUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    action?: EnumAuditActionFieldUpdateOperationsInput | $Enums.AuditAction
    entityType?: EnumAuditEntityTypeFieldUpdateOperationsInput | $Enums.AuditEntityType
    entityId?: NullableStringFieldUpdateOperationsInput | string | null
    description?: StringFieldUpdateOperationsInput | string
    context?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    actorId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AuditLogCreateManyInput = {
    id?: string
    action: $Enums.AuditAction
    entityType: $Enums.AuditEntityType
    entityId?: string | null
    description: string
    context?: string | null
    createdAt?: Date | string
    actorId?: string | null
  }

  export type AuditLogUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    action?: EnumAuditActionFieldUpdateOperationsInput | $Enums.AuditAction
    entityType?: EnumAuditEntityTypeFieldUpdateOperationsInput | $Enums.AuditEntityType
    entityId?: NullableStringFieldUpdateOperationsInput | string | null
    description?: StringFieldUpdateOperationsInput | string
    context?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AuditLogUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    action?: EnumAuditActionFieldUpdateOperationsInput | $Enums.AuditAction
    entityType?: EnumAuditEntityTypeFieldUpdateOperationsInput | $Enums.AuditEntityType
    entityId?: NullableStringFieldUpdateOperationsInput | string | null
    description?: StringFieldUpdateOperationsInput | string
    context?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    actorId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AuthThrottleCreateInput = {
    id: string
    scope: string
    key: string
    attempts?: number
    windowStartedAt: Date | string
    blockedUntil?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AuthThrottleUncheckedCreateInput = {
    id: string
    scope: string
    key: string
    attempts?: number
    windowStartedAt: Date | string
    blockedUntil?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AuthThrottleUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    scope?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    attempts?: IntFieldUpdateOperationsInput | number
    windowStartedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    blockedUntil?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AuthThrottleUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    scope?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    attempts?: IntFieldUpdateOperationsInput | number
    windowStartedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    blockedUntil?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AuthThrottleCreateManyInput = {
    id: string
    scope: string
    key: string
    attempts?: number
    windowStartedAt: Date | string
    blockedUntil?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AuthThrottleUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    scope?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    attempts?: IntFieldUpdateOperationsInput | number
    windowStartedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    blockedUntil?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AuthThrottleUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    scope?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    attempts?: IntFieldUpdateOperationsInput | number
    windowStartedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    blockedUntil?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
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

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type UnitListRelationFilter = {
    every?: UnitWhereInput
    some?: UnitWhereInput
    none?: UnitWhereInput
  }

  export type UnitOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TowerCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TowerMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TowerMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
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

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type TowerScalarRelationFilter = {
    is?: TowerWhereInput
    isNot?: TowerWhereInput
  }

  export type UserListRelationFilter = {
    every?: UserWhereInput
    some?: UserWhereInput
    none?: UserWhereInput
  }

  export type PackageListRelationFilter = {
    every?: PackageWhereInput
    some?: PackageWhereInput
    none?: PackageWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type UserOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PackageOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UnitTowerIdNumberCompoundUniqueInput = {
    towerId: string
    number: string
  }

  export type UnitCountOrderByAggregateInput = {
    id?: SortOrder
    number?: SortOrder
    label?: SortOrder
    floor?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    towerId?: SortOrder
  }

  export type UnitAvgOrderByAggregateInput = {
    floor?: SortOrder
  }

  export type UnitMaxOrderByAggregateInput = {
    id?: SortOrder
    number?: SortOrder
    label?: SortOrder
    floor?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    towerId?: SortOrder
  }

  export type UnitMinOrderByAggregateInput = {
    id?: SortOrder
    number?: SortOrder
    label?: SortOrder
    floor?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    towerId?: SortOrder
  }

  export type UnitSumOrderByAggregateInput = {
    floor?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
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

  export type EnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
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

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type UnitNullableScalarRelationFilter = {
    is?: UnitWhereInput | null
    isNot?: UnitWhereInput | null
  }

  export type NotificationListRelationFilter = {
    every?: NotificationWhereInput
    some?: NotificationWhereInput
    none?: NotificationWhereInput
  }

  export type PackageHistoryListRelationFilter = {
    every?: PackageHistoryWhereInput
    some?: PackageHistoryWhereInput
    none?: PackageHistoryWhereInput
  }

  export type PickupTokenListRelationFilter = {
    every?: PickupTokenWhereInput
    some?: PickupTokenWhereInput
    none?: PickupTokenWhereInput
  }

  export type PushSubscriptionListRelationFilter = {
    every?: PushSubscriptionWhereInput
    some?: PushSubscriptionWhereInput
    none?: PushSubscriptionWhereInput
  }

  export type AuditLogListRelationFilter = {
    every?: AuditLogWhereInput
    some?: AuditLogWhereInput
    none?: AuditLogWhereInput
  }

  export type NotificationOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PackageHistoryOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PickupTokenOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PushSubscriptionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AuditLogOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    role?: SortOrder
    phone?: SortOrder
    jobTitle?: SortOrder
    isActive?: SortOrder
    mustChangePassword?: SortOrder
    lastLoginAt?: SortOrder
    deletedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    unitId?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    role?: SortOrder
    phone?: SortOrder
    jobTitle?: SortOrder
    isActive?: SortOrder
    mustChangePassword?: SortOrder
    lastLoginAt?: SortOrder
    deletedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    unitId?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    role?: SortOrder
    phone?: SortOrder
    jobTitle?: SortOrder
    isActive?: SortOrder
    mustChangePassword?: SortOrder
    lastLoginAt?: SortOrder
    deletedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    unitId?: SortOrder
  }

  export type EnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
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

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type EnumPackageStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.PackageStatus | EnumPackageStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PackageStatus[] | ListEnumPackageStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.PackageStatus[] | ListEnumPackageStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPackageStatusFilter<$PrismaModel> | $Enums.PackageStatus
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type UnitScalarRelationFilter = {
    is?: UnitWhereInput
    isNot?: UnitWhereInput
  }

  export type PickupTokenNullableScalarRelationFilter = {
    is?: PickupTokenWhereInput | null
    isNot?: PickupTokenWhereInput | null
  }

  export type PackageCountOrderByAggregateInput = {
    id?: SortOrder
    trackingCode?: SortOrder
    carrier?: SortOrder
    description?: SortOrder
    status?: SortOrder
    receivedAt?: SortOrder
    notifiedAt?: SortOrder
    pickedUpAt?: SortOrder
    dueAt?: SortOrder
    notificationSent?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    residentId?: SortOrder
    unitId?: SortOrder
    receivedById?: SortOrder
  }

  export type PackageMaxOrderByAggregateInput = {
    id?: SortOrder
    trackingCode?: SortOrder
    carrier?: SortOrder
    description?: SortOrder
    status?: SortOrder
    receivedAt?: SortOrder
    notifiedAt?: SortOrder
    pickedUpAt?: SortOrder
    dueAt?: SortOrder
    notificationSent?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    residentId?: SortOrder
    unitId?: SortOrder
    receivedById?: SortOrder
  }

  export type PackageMinOrderByAggregateInput = {
    id?: SortOrder
    trackingCode?: SortOrder
    carrier?: SortOrder
    description?: SortOrder
    status?: SortOrder
    receivedAt?: SortOrder
    notifiedAt?: SortOrder
    pickedUpAt?: SortOrder
    dueAt?: SortOrder
    notificationSent?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    residentId?: SortOrder
    unitId?: SortOrder
    receivedById?: SortOrder
  }

  export type EnumPackageStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PackageStatus | EnumPackageStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PackageStatus[] | ListEnumPackageStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.PackageStatus[] | ListEnumPackageStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPackageStatusWithAggregatesFilter<$PrismaModel> | $Enums.PackageStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPackageStatusFilter<$PrismaModel>
    _max?: NestedEnumPackageStatusFilter<$PrismaModel>
  }

  export type PackageScalarRelationFilter = {
    is?: PackageWhereInput
    isNot?: PackageWhereInput
  }

  export type UserNullableScalarRelationFilter = {
    is?: UserWhereInput | null
    isNot?: UserWhereInput | null
  }

  export type PickupTokenCountOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    qrValue?: SortOrder
    generatedAt?: SortOrder
    expiresAt?: SortOrder
    usedAt?: SortOrder
    packageId?: SortOrder
    generatedById?: SortOrder
    validatedById?: SortOrder
  }

  export type PickupTokenMaxOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    qrValue?: SortOrder
    generatedAt?: SortOrder
    expiresAt?: SortOrder
    usedAt?: SortOrder
    packageId?: SortOrder
    generatedById?: SortOrder
    validatedById?: SortOrder
  }

  export type PickupTokenMinOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    qrValue?: SortOrder
    generatedAt?: SortOrder
    expiresAt?: SortOrder
    usedAt?: SortOrder
    packageId?: SortOrder
    generatedById?: SortOrder
    validatedById?: SortOrder
  }

  export type EnumHistoryTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.HistoryType | EnumHistoryTypeFieldRefInput<$PrismaModel>
    in?: $Enums.HistoryType[] | ListEnumHistoryTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.HistoryType[] | ListEnumHistoryTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumHistoryTypeFilter<$PrismaModel> | $Enums.HistoryType
  }

  export type EnumPackageStatusNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.PackageStatus | EnumPackageStatusFieldRefInput<$PrismaModel> | null
    in?: $Enums.PackageStatus[] | ListEnumPackageStatusFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.PackageStatus[] | ListEnumPackageStatusFieldRefInput<$PrismaModel> | null
    not?: NestedEnumPackageStatusNullableFilter<$PrismaModel> | $Enums.PackageStatus | null
  }

  export type PackageHistoryCountOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    note?: SortOrder
    createdAt?: SortOrder
    fromStatus?: SortOrder
    toStatus?: SortOrder
    packageId?: SortOrder
    actorId?: SortOrder
  }

  export type PackageHistoryMaxOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    note?: SortOrder
    createdAt?: SortOrder
    fromStatus?: SortOrder
    toStatus?: SortOrder
    packageId?: SortOrder
    actorId?: SortOrder
  }

  export type PackageHistoryMinOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    note?: SortOrder
    createdAt?: SortOrder
    fromStatus?: SortOrder
    toStatus?: SortOrder
    packageId?: SortOrder
    actorId?: SortOrder
  }

  export type EnumHistoryTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.HistoryType | EnumHistoryTypeFieldRefInput<$PrismaModel>
    in?: $Enums.HistoryType[] | ListEnumHistoryTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.HistoryType[] | ListEnumHistoryTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumHistoryTypeWithAggregatesFilter<$PrismaModel> | $Enums.HistoryType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumHistoryTypeFilter<$PrismaModel>
    _max?: NestedEnumHistoryTypeFilter<$PrismaModel>
  }

  export type EnumPackageStatusNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PackageStatus | EnumPackageStatusFieldRefInput<$PrismaModel> | null
    in?: $Enums.PackageStatus[] | ListEnumPackageStatusFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.PackageStatus[] | ListEnumPackageStatusFieldRefInput<$PrismaModel> | null
    not?: NestedEnumPackageStatusNullableWithAggregatesFilter<$PrismaModel> | $Enums.PackageStatus | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumPackageStatusNullableFilter<$PrismaModel>
    _max?: NestedEnumPackageStatusNullableFilter<$PrismaModel>
  }

  export type EnumNotificationTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.NotificationType | EnumNotificationTypeFieldRefInput<$PrismaModel>
    in?: $Enums.NotificationType[] | ListEnumNotificationTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.NotificationType[] | ListEnumNotificationTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumNotificationTypeFilter<$PrismaModel> | $Enums.NotificationType
  }

  export type NotificationDeliveryListRelationFilter = {
    every?: NotificationDeliveryWhereInput
    some?: NotificationDeliveryWhereInput
    none?: NotificationDeliveryWhereInput
  }

  export type NotificationDeliveryOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type NotificationCountOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    title?: SortOrder
    message?: SortOrder
    href?: SortOrder
    readAt?: SortOrder
    createdAt?: SortOrder
    userId?: SortOrder
  }

  export type NotificationMaxOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    title?: SortOrder
    message?: SortOrder
    href?: SortOrder
    readAt?: SortOrder
    createdAt?: SortOrder
    userId?: SortOrder
  }

  export type NotificationMinOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    title?: SortOrder
    message?: SortOrder
    href?: SortOrder
    readAt?: SortOrder
    createdAt?: SortOrder
    userId?: SortOrder
  }

  export type EnumNotificationTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.NotificationType | EnumNotificationTypeFieldRefInput<$PrismaModel>
    in?: $Enums.NotificationType[] | ListEnumNotificationTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.NotificationType[] | ListEnumNotificationTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumNotificationTypeWithAggregatesFilter<$PrismaModel> | $Enums.NotificationType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumNotificationTypeFilter<$PrismaModel>
    _max?: NestedEnumNotificationTypeFilter<$PrismaModel>
  }

  export type EnumDeliveryChannelFilter<$PrismaModel = never> = {
    equals?: $Enums.DeliveryChannel | EnumDeliveryChannelFieldRefInput<$PrismaModel>
    in?: $Enums.DeliveryChannel[] | ListEnumDeliveryChannelFieldRefInput<$PrismaModel>
    notIn?: $Enums.DeliveryChannel[] | ListEnumDeliveryChannelFieldRefInput<$PrismaModel>
    not?: NestedEnumDeliveryChannelFilter<$PrismaModel> | $Enums.DeliveryChannel
  }

  export type EnumDeliveryStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.DeliveryStatus | EnumDeliveryStatusFieldRefInput<$PrismaModel>
    in?: $Enums.DeliveryStatus[] | ListEnumDeliveryStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.DeliveryStatus[] | ListEnumDeliveryStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumDeliveryStatusFilter<$PrismaModel> | $Enums.DeliveryStatus
  }

  export type NotificationScalarRelationFilter = {
    is?: NotificationWhereInput
    isNot?: NotificationWhereInput
  }

  export type NotificationDeliveryCountOrderByAggregateInput = {
    id?: SortOrder
    channel?: SortOrder
    status?: SortOrder
    recipient?: SortOrder
    providerMessageId?: SortOrder
    errorMessage?: SortOrder
    attemptedAt?: SortOrder
    createdAt?: SortOrder
    notificationId?: SortOrder
  }

  export type NotificationDeliveryMaxOrderByAggregateInput = {
    id?: SortOrder
    channel?: SortOrder
    status?: SortOrder
    recipient?: SortOrder
    providerMessageId?: SortOrder
    errorMessage?: SortOrder
    attemptedAt?: SortOrder
    createdAt?: SortOrder
    notificationId?: SortOrder
  }

  export type NotificationDeliveryMinOrderByAggregateInput = {
    id?: SortOrder
    channel?: SortOrder
    status?: SortOrder
    recipient?: SortOrder
    providerMessageId?: SortOrder
    errorMessage?: SortOrder
    attemptedAt?: SortOrder
    createdAt?: SortOrder
    notificationId?: SortOrder
  }

  export type EnumDeliveryChannelWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.DeliveryChannel | EnumDeliveryChannelFieldRefInput<$PrismaModel>
    in?: $Enums.DeliveryChannel[] | ListEnumDeliveryChannelFieldRefInput<$PrismaModel>
    notIn?: $Enums.DeliveryChannel[] | ListEnumDeliveryChannelFieldRefInput<$PrismaModel>
    not?: NestedEnumDeliveryChannelWithAggregatesFilter<$PrismaModel> | $Enums.DeliveryChannel
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumDeliveryChannelFilter<$PrismaModel>
    _max?: NestedEnumDeliveryChannelFilter<$PrismaModel>
  }

  export type EnumDeliveryStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.DeliveryStatus | EnumDeliveryStatusFieldRefInput<$PrismaModel>
    in?: $Enums.DeliveryStatus[] | ListEnumDeliveryStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.DeliveryStatus[] | ListEnumDeliveryStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumDeliveryStatusWithAggregatesFilter<$PrismaModel> | $Enums.DeliveryStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumDeliveryStatusFilter<$PrismaModel>
    _max?: NestedEnumDeliveryStatusFilter<$PrismaModel>
  }

  export type PushSubscriptionCountOrderByAggregateInput = {
    id?: SortOrder
    endpoint?: SortOrder
    p256dh?: SortOrder
    auth?: SortOrder
    userAgent?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
  }

  export type PushSubscriptionMaxOrderByAggregateInput = {
    id?: SortOrder
    endpoint?: SortOrder
    p256dh?: SortOrder
    auth?: SortOrder
    userAgent?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
  }

  export type PushSubscriptionMinOrderByAggregateInput = {
    id?: SortOrder
    endpoint?: SortOrder
    p256dh?: SortOrder
    auth?: SortOrder
    userAgent?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
  }

  export type EnumAuditActionFilter<$PrismaModel = never> = {
    equals?: $Enums.AuditAction | EnumAuditActionFieldRefInput<$PrismaModel>
    in?: $Enums.AuditAction[] | ListEnumAuditActionFieldRefInput<$PrismaModel>
    notIn?: $Enums.AuditAction[] | ListEnumAuditActionFieldRefInput<$PrismaModel>
    not?: NestedEnumAuditActionFilter<$PrismaModel> | $Enums.AuditAction
  }

  export type EnumAuditEntityTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.AuditEntityType | EnumAuditEntityTypeFieldRefInput<$PrismaModel>
    in?: $Enums.AuditEntityType[] | ListEnumAuditEntityTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.AuditEntityType[] | ListEnumAuditEntityTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumAuditEntityTypeFilter<$PrismaModel> | $Enums.AuditEntityType
  }

  export type AuditLogCountOrderByAggregateInput = {
    id?: SortOrder
    action?: SortOrder
    entityType?: SortOrder
    entityId?: SortOrder
    description?: SortOrder
    context?: SortOrder
    createdAt?: SortOrder
    actorId?: SortOrder
  }

  export type AuditLogMaxOrderByAggregateInput = {
    id?: SortOrder
    action?: SortOrder
    entityType?: SortOrder
    entityId?: SortOrder
    description?: SortOrder
    context?: SortOrder
    createdAt?: SortOrder
    actorId?: SortOrder
  }

  export type AuditLogMinOrderByAggregateInput = {
    id?: SortOrder
    action?: SortOrder
    entityType?: SortOrder
    entityId?: SortOrder
    description?: SortOrder
    context?: SortOrder
    createdAt?: SortOrder
    actorId?: SortOrder
  }

  export type EnumAuditActionWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AuditAction | EnumAuditActionFieldRefInput<$PrismaModel>
    in?: $Enums.AuditAction[] | ListEnumAuditActionFieldRefInput<$PrismaModel>
    notIn?: $Enums.AuditAction[] | ListEnumAuditActionFieldRefInput<$PrismaModel>
    not?: NestedEnumAuditActionWithAggregatesFilter<$PrismaModel> | $Enums.AuditAction
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAuditActionFilter<$PrismaModel>
    _max?: NestedEnumAuditActionFilter<$PrismaModel>
  }

  export type EnumAuditEntityTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AuditEntityType | EnumAuditEntityTypeFieldRefInput<$PrismaModel>
    in?: $Enums.AuditEntityType[] | ListEnumAuditEntityTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.AuditEntityType[] | ListEnumAuditEntityTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumAuditEntityTypeWithAggregatesFilter<$PrismaModel> | $Enums.AuditEntityType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAuditEntityTypeFilter<$PrismaModel>
    _max?: NestedEnumAuditEntityTypeFilter<$PrismaModel>
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

  export type AuthThrottleCountOrderByAggregateInput = {
    id?: SortOrder
    scope?: SortOrder
    key?: SortOrder
    attempts?: SortOrder
    windowStartedAt?: SortOrder
    blockedUntil?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AuthThrottleAvgOrderByAggregateInput = {
    attempts?: SortOrder
  }

  export type AuthThrottleMaxOrderByAggregateInput = {
    id?: SortOrder
    scope?: SortOrder
    key?: SortOrder
    attempts?: SortOrder
    windowStartedAt?: SortOrder
    blockedUntil?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AuthThrottleMinOrderByAggregateInput = {
    id?: SortOrder
    scope?: SortOrder
    key?: SortOrder
    attempts?: SortOrder
    windowStartedAt?: SortOrder
    blockedUntil?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AuthThrottleSumOrderByAggregateInput = {
    attempts?: SortOrder
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

  export type UnitCreateNestedManyWithoutTowerInput = {
    create?: XOR<UnitCreateWithoutTowerInput, UnitUncheckedCreateWithoutTowerInput> | UnitCreateWithoutTowerInput[] | UnitUncheckedCreateWithoutTowerInput[]
    connectOrCreate?: UnitCreateOrConnectWithoutTowerInput | UnitCreateOrConnectWithoutTowerInput[]
    createMany?: UnitCreateManyTowerInputEnvelope
    connect?: UnitWhereUniqueInput | UnitWhereUniqueInput[]
  }

  export type UnitUncheckedCreateNestedManyWithoutTowerInput = {
    create?: XOR<UnitCreateWithoutTowerInput, UnitUncheckedCreateWithoutTowerInput> | UnitCreateWithoutTowerInput[] | UnitUncheckedCreateWithoutTowerInput[]
    connectOrCreate?: UnitCreateOrConnectWithoutTowerInput | UnitCreateOrConnectWithoutTowerInput[]
    createMany?: UnitCreateManyTowerInputEnvelope
    connect?: UnitWhereUniqueInput | UnitWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type UnitUpdateManyWithoutTowerNestedInput = {
    create?: XOR<UnitCreateWithoutTowerInput, UnitUncheckedCreateWithoutTowerInput> | UnitCreateWithoutTowerInput[] | UnitUncheckedCreateWithoutTowerInput[]
    connectOrCreate?: UnitCreateOrConnectWithoutTowerInput | UnitCreateOrConnectWithoutTowerInput[]
    upsert?: UnitUpsertWithWhereUniqueWithoutTowerInput | UnitUpsertWithWhereUniqueWithoutTowerInput[]
    createMany?: UnitCreateManyTowerInputEnvelope
    set?: UnitWhereUniqueInput | UnitWhereUniqueInput[]
    disconnect?: UnitWhereUniqueInput | UnitWhereUniqueInput[]
    delete?: UnitWhereUniqueInput | UnitWhereUniqueInput[]
    connect?: UnitWhereUniqueInput | UnitWhereUniqueInput[]
    update?: UnitUpdateWithWhereUniqueWithoutTowerInput | UnitUpdateWithWhereUniqueWithoutTowerInput[]
    updateMany?: UnitUpdateManyWithWhereWithoutTowerInput | UnitUpdateManyWithWhereWithoutTowerInput[]
    deleteMany?: UnitScalarWhereInput | UnitScalarWhereInput[]
  }

  export type UnitUncheckedUpdateManyWithoutTowerNestedInput = {
    create?: XOR<UnitCreateWithoutTowerInput, UnitUncheckedCreateWithoutTowerInput> | UnitCreateWithoutTowerInput[] | UnitUncheckedCreateWithoutTowerInput[]
    connectOrCreate?: UnitCreateOrConnectWithoutTowerInput | UnitCreateOrConnectWithoutTowerInput[]
    upsert?: UnitUpsertWithWhereUniqueWithoutTowerInput | UnitUpsertWithWhereUniqueWithoutTowerInput[]
    createMany?: UnitCreateManyTowerInputEnvelope
    set?: UnitWhereUniqueInput | UnitWhereUniqueInput[]
    disconnect?: UnitWhereUniqueInput | UnitWhereUniqueInput[]
    delete?: UnitWhereUniqueInput | UnitWhereUniqueInput[]
    connect?: UnitWhereUniqueInput | UnitWhereUniqueInput[]
    update?: UnitUpdateWithWhereUniqueWithoutTowerInput | UnitUpdateWithWhereUniqueWithoutTowerInput[]
    updateMany?: UnitUpdateManyWithWhereWithoutTowerInput | UnitUpdateManyWithWhereWithoutTowerInput[]
    deleteMany?: UnitScalarWhereInput | UnitScalarWhereInput[]
  }

  export type TowerCreateNestedOneWithoutUnitsInput = {
    create?: XOR<TowerCreateWithoutUnitsInput, TowerUncheckedCreateWithoutUnitsInput>
    connectOrCreate?: TowerCreateOrConnectWithoutUnitsInput
    connect?: TowerWhereUniqueInput
  }

  export type UserCreateNestedManyWithoutUnitInput = {
    create?: XOR<UserCreateWithoutUnitInput, UserUncheckedCreateWithoutUnitInput> | UserCreateWithoutUnitInput[] | UserUncheckedCreateWithoutUnitInput[]
    connectOrCreate?: UserCreateOrConnectWithoutUnitInput | UserCreateOrConnectWithoutUnitInput[]
    createMany?: UserCreateManyUnitInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type PackageCreateNestedManyWithoutUnitInput = {
    create?: XOR<PackageCreateWithoutUnitInput, PackageUncheckedCreateWithoutUnitInput> | PackageCreateWithoutUnitInput[] | PackageUncheckedCreateWithoutUnitInput[]
    connectOrCreate?: PackageCreateOrConnectWithoutUnitInput | PackageCreateOrConnectWithoutUnitInput[]
    createMany?: PackageCreateManyUnitInputEnvelope
    connect?: PackageWhereUniqueInput | PackageWhereUniqueInput[]
  }

  export type UserUncheckedCreateNestedManyWithoutUnitInput = {
    create?: XOR<UserCreateWithoutUnitInput, UserUncheckedCreateWithoutUnitInput> | UserCreateWithoutUnitInput[] | UserUncheckedCreateWithoutUnitInput[]
    connectOrCreate?: UserCreateOrConnectWithoutUnitInput | UserCreateOrConnectWithoutUnitInput[]
    createMany?: UserCreateManyUnitInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type PackageUncheckedCreateNestedManyWithoutUnitInput = {
    create?: XOR<PackageCreateWithoutUnitInput, PackageUncheckedCreateWithoutUnitInput> | PackageCreateWithoutUnitInput[] | PackageUncheckedCreateWithoutUnitInput[]
    connectOrCreate?: PackageCreateOrConnectWithoutUnitInput | PackageCreateOrConnectWithoutUnitInput[]
    createMany?: PackageCreateManyUnitInputEnvelope
    connect?: PackageWhereUniqueInput | PackageWhereUniqueInput[]
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type TowerUpdateOneRequiredWithoutUnitsNestedInput = {
    create?: XOR<TowerCreateWithoutUnitsInput, TowerUncheckedCreateWithoutUnitsInput>
    connectOrCreate?: TowerCreateOrConnectWithoutUnitsInput
    upsert?: TowerUpsertWithoutUnitsInput
    connect?: TowerWhereUniqueInput
    update?: XOR<XOR<TowerUpdateToOneWithWhereWithoutUnitsInput, TowerUpdateWithoutUnitsInput>, TowerUncheckedUpdateWithoutUnitsInput>
  }

  export type UserUpdateManyWithoutUnitNestedInput = {
    create?: XOR<UserCreateWithoutUnitInput, UserUncheckedCreateWithoutUnitInput> | UserCreateWithoutUnitInput[] | UserUncheckedCreateWithoutUnitInput[]
    connectOrCreate?: UserCreateOrConnectWithoutUnitInput | UserCreateOrConnectWithoutUnitInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutUnitInput | UserUpsertWithWhereUniqueWithoutUnitInput[]
    createMany?: UserCreateManyUnitInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutUnitInput | UserUpdateWithWhereUniqueWithoutUnitInput[]
    updateMany?: UserUpdateManyWithWhereWithoutUnitInput | UserUpdateManyWithWhereWithoutUnitInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type PackageUpdateManyWithoutUnitNestedInput = {
    create?: XOR<PackageCreateWithoutUnitInput, PackageUncheckedCreateWithoutUnitInput> | PackageCreateWithoutUnitInput[] | PackageUncheckedCreateWithoutUnitInput[]
    connectOrCreate?: PackageCreateOrConnectWithoutUnitInput | PackageCreateOrConnectWithoutUnitInput[]
    upsert?: PackageUpsertWithWhereUniqueWithoutUnitInput | PackageUpsertWithWhereUniqueWithoutUnitInput[]
    createMany?: PackageCreateManyUnitInputEnvelope
    set?: PackageWhereUniqueInput | PackageWhereUniqueInput[]
    disconnect?: PackageWhereUniqueInput | PackageWhereUniqueInput[]
    delete?: PackageWhereUniqueInput | PackageWhereUniqueInput[]
    connect?: PackageWhereUniqueInput | PackageWhereUniqueInput[]
    update?: PackageUpdateWithWhereUniqueWithoutUnitInput | PackageUpdateWithWhereUniqueWithoutUnitInput[]
    updateMany?: PackageUpdateManyWithWhereWithoutUnitInput | PackageUpdateManyWithWhereWithoutUnitInput[]
    deleteMany?: PackageScalarWhereInput | PackageScalarWhereInput[]
  }

  export type UserUncheckedUpdateManyWithoutUnitNestedInput = {
    create?: XOR<UserCreateWithoutUnitInput, UserUncheckedCreateWithoutUnitInput> | UserCreateWithoutUnitInput[] | UserUncheckedCreateWithoutUnitInput[]
    connectOrCreate?: UserCreateOrConnectWithoutUnitInput | UserCreateOrConnectWithoutUnitInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutUnitInput | UserUpsertWithWhereUniqueWithoutUnitInput[]
    createMany?: UserCreateManyUnitInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutUnitInput | UserUpdateWithWhereUniqueWithoutUnitInput[]
    updateMany?: UserUpdateManyWithWhereWithoutUnitInput | UserUpdateManyWithWhereWithoutUnitInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type PackageUncheckedUpdateManyWithoutUnitNestedInput = {
    create?: XOR<PackageCreateWithoutUnitInput, PackageUncheckedCreateWithoutUnitInput> | PackageCreateWithoutUnitInput[] | PackageUncheckedCreateWithoutUnitInput[]
    connectOrCreate?: PackageCreateOrConnectWithoutUnitInput | PackageCreateOrConnectWithoutUnitInput[]
    upsert?: PackageUpsertWithWhereUniqueWithoutUnitInput | PackageUpsertWithWhereUniqueWithoutUnitInput[]
    createMany?: PackageCreateManyUnitInputEnvelope
    set?: PackageWhereUniqueInput | PackageWhereUniqueInput[]
    disconnect?: PackageWhereUniqueInput | PackageWhereUniqueInput[]
    delete?: PackageWhereUniqueInput | PackageWhereUniqueInput[]
    connect?: PackageWhereUniqueInput | PackageWhereUniqueInput[]
    update?: PackageUpdateWithWhereUniqueWithoutUnitInput | PackageUpdateWithWhereUniqueWithoutUnitInput[]
    updateMany?: PackageUpdateManyWithWhereWithoutUnitInput | PackageUpdateManyWithWhereWithoutUnitInput[]
    deleteMany?: PackageScalarWhereInput | PackageScalarWhereInput[]
  }

  export type UnitCreateNestedOneWithoutResidentsInput = {
    create?: XOR<UnitCreateWithoutResidentsInput, UnitUncheckedCreateWithoutResidentsInput>
    connectOrCreate?: UnitCreateOrConnectWithoutResidentsInput
    connect?: UnitWhereUniqueInput
  }

  export type NotificationCreateNestedManyWithoutUserInput = {
    create?: XOR<NotificationCreateWithoutUserInput, NotificationUncheckedCreateWithoutUserInput> | NotificationCreateWithoutUserInput[] | NotificationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: NotificationCreateOrConnectWithoutUserInput | NotificationCreateOrConnectWithoutUserInput[]
    createMany?: NotificationCreateManyUserInputEnvelope
    connect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
  }

  export type PackageCreateNestedManyWithoutReceivedByInput = {
    create?: XOR<PackageCreateWithoutReceivedByInput, PackageUncheckedCreateWithoutReceivedByInput> | PackageCreateWithoutReceivedByInput[] | PackageUncheckedCreateWithoutReceivedByInput[]
    connectOrCreate?: PackageCreateOrConnectWithoutReceivedByInput | PackageCreateOrConnectWithoutReceivedByInput[]
    createMany?: PackageCreateManyReceivedByInputEnvelope
    connect?: PackageWhereUniqueInput | PackageWhereUniqueInput[]
  }

  export type PackageCreateNestedManyWithoutResidentInput = {
    create?: XOR<PackageCreateWithoutResidentInput, PackageUncheckedCreateWithoutResidentInput> | PackageCreateWithoutResidentInput[] | PackageUncheckedCreateWithoutResidentInput[]
    connectOrCreate?: PackageCreateOrConnectWithoutResidentInput | PackageCreateOrConnectWithoutResidentInput[]
    createMany?: PackageCreateManyResidentInputEnvelope
    connect?: PackageWhereUniqueInput | PackageWhereUniqueInput[]
  }

  export type PackageHistoryCreateNestedManyWithoutActorInput = {
    create?: XOR<PackageHistoryCreateWithoutActorInput, PackageHistoryUncheckedCreateWithoutActorInput> | PackageHistoryCreateWithoutActorInput[] | PackageHistoryUncheckedCreateWithoutActorInput[]
    connectOrCreate?: PackageHistoryCreateOrConnectWithoutActorInput | PackageHistoryCreateOrConnectWithoutActorInput[]
    createMany?: PackageHistoryCreateManyActorInputEnvelope
    connect?: PackageHistoryWhereUniqueInput | PackageHistoryWhereUniqueInput[]
  }

  export type PickupTokenCreateNestedManyWithoutGeneratedByInput = {
    create?: XOR<PickupTokenCreateWithoutGeneratedByInput, PickupTokenUncheckedCreateWithoutGeneratedByInput> | PickupTokenCreateWithoutGeneratedByInput[] | PickupTokenUncheckedCreateWithoutGeneratedByInput[]
    connectOrCreate?: PickupTokenCreateOrConnectWithoutGeneratedByInput | PickupTokenCreateOrConnectWithoutGeneratedByInput[]
    createMany?: PickupTokenCreateManyGeneratedByInputEnvelope
    connect?: PickupTokenWhereUniqueInput | PickupTokenWhereUniqueInput[]
  }

  export type PickupTokenCreateNestedManyWithoutValidatedByInput = {
    create?: XOR<PickupTokenCreateWithoutValidatedByInput, PickupTokenUncheckedCreateWithoutValidatedByInput> | PickupTokenCreateWithoutValidatedByInput[] | PickupTokenUncheckedCreateWithoutValidatedByInput[]
    connectOrCreate?: PickupTokenCreateOrConnectWithoutValidatedByInput | PickupTokenCreateOrConnectWithoutValidatedByInput[]
    createMany?: PickupTokenCreateManyValidatedByInputEnvelope
    connect?: PickupTokenWhereUniqueInput | PickupTokenWhereUniqueInput[]
  }

  export type PushSubscriptionCreateNestedManyWithoutUserInput = {
    create?: XOR<PushSubscriptionCreateWithoutUserInput, PushSubscriptionUncheckedCreateWithoutUserInput> | PushSubscriptionCreateWithoutUserInput[] | PushSubscriptionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PushSubscriptionCreateOrConnectWithoutUserInput | PushSubscriptionCreateOrConnectWithoutUserInput[]
    createMany?: PushSubscriptionCreateManyUserInputEnvelope
    connect?: PushSubscriptionWhereUniqueInput | PushSubscriptionWhereUniqueInput[]
  }

  export type AuditLogCreateNestedManyWithoutActorInput = {
    create?: XOR<AuditLogCreateWithoutActorInput, AuditLogUncheckedCreateWithoutActorInput> | AuditLogCreateWithoutActorInput[] | AuditLogUncheckedCreateWithoutActorInput[]
    connectOrCreate?: AuditLogCreateOrConnectWithoutActorInput | AuditLogCreateOrConnectWithoutActorInput[]
    createMany?: AuditLogCreateManyActorInputEnvelope
    connect?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
  }

  export type NotificationUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<NotificationCreateWithoutUserInput, NotificationUncheckedCreateWithoutUserInput> | NotificationCreateWithoutUserInput[] | NotificationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: NotificationCreateOrConnectWithoutUserInput | NotificationCreateOrConnectWithoutUserInput[]
    createMany?: NotificationCreateManyUserInputEnvelope
    connect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
  }

  export type PackageUncheckedCreateNestedManyWithoutReceivedByInput = {
    create?: XOR<PackageCreateWithoutReceivedByInput, PackageUncheckedCreateWithoutReceivedByInput> | PackageCreateWithoutReceivedByInput[] | PackageUncheckedCreateWithoutReceivedByInput[]
    connectOrCreate?: PackageCreateOrConnectWithoutReceivedByInput | PackageCreateOrConnectWithoutReceivedByInput[]
    createMany?: PackageCreateManyReceivedByInputEnvelope
    connect?: PackageWhereUniqueInput | PackageWhereUniqueInput[]
  }

  export type PackageUncheckedCreateNestedManyWithoutResidentInput = {
    create?: XOR<PackageCreateWithoutResidentInput, PackageUncheckedCreateWithoutResidentInput> | PackageCreateWithoutResidentInput[] | PackageUncheckedCreateWithoutResidentInput[]
    connectOrCreate?: PackageCreateOrConnectWithoutResidentInput | PackageCreateOrConnectWithoutResidentInput[]
    createMany?: PackageCreateManyResidentInputEnvelope
    connect?: PackageWhereUniqueInput | PackageWhereUniqueInput[]
  }

  export type PackageHistoryUncheckedCreateNestedManyWithoutActorInput = {
    create?: XOR<PackageHistoryCreateWithoutActorInput, PackageHistoryUncheckedCreateWithoutActorInput> | PackageHistoryCreateWithoutActorInput[] | PackageHistoryUncheckedCreateWithoutActorInput[]
    connectOrCreate?: PackageHistoryCreateOrConnectWithoutActorInput | PackageHistoryCreateOrConnectWithoutActorInput[]
    createMany?: PackageHistoryCreateManyActorInputEnvelope
    connect?: PackageHistoryWhereUniqueInput | PackageHistoryWhereUniqueInput[]
  }

  export type PickupTokenUncheckedCreateNestedManyWithoutGeneratedByInput = {
    create?: XOR<PickupTokenCreateWithoutGeneratedByInput, PickupTokenUncheckedCreateWithoutGeneratedByInput> | PickupTokenCreateWithoutGeneratedByInput[] | PickupTokenUncheckedCreateWithoutGeneratedByInput[]
    connectOrCreate?: PickupTokenCreateOrConnectWithoutGeneratedByInput | PickupTokenCreateOrConnectWithoutGeneratedByInput[]
    createMany?: PickupTokenCreateManyGeneratedByInputEnvelope
    connect?: PickupTokenWhereUniqueInput | PickupTokenWhereUniqueInput[]
  }

  export type PickupTokenUncheckedCreateNestedManyWithoutValidatedByInput = {
    create?: XOR<PickupTokenCreateWithoutValidatedByInput, PickupTokenUncheckedCreateWithoutValidatedByInput> | PickupTokenCreateWithoutValidatedByInput[] | PickupTokenUncheckedCreateWithoutValidatedByInput[]
    connectOrCreate?: PickupTokenCreateOrConnectWithoutValidatedByInput | PickupTokenCreateOrConnectWithoutValidatedByInput[]
    createMany?: PickupTokenCreateManyValidatedByInputEnvelope
    connect?: PickupTokenWhereUniqueInput | PickupTokenWhereUniqueInput[]
  }

  export type PushSubscriptionUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<PushSubscriptionCreateWithoutUserInput, PushSubscriptionUncheckedCreateWithoutUserInput> | PushSubscriptionCreateWithoutUserInput[] | PushSubscriptionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PushSubscriptionCreateOrConnectWithoutUserInput | PushSubscriptionCreateOrConnectWithoutUserInput[]
    createMany?: PushSubscriptionCreateManyUserInputEnvelope
    connect?: PushSubscriptionWhereUniqueInput | PushSubscriptionWhereUniqueInput[]
  }

  export type AuditLogUncheckedCreateNestedManyWithoutActorInput = {
    create?: XOR<AuditLogCreateWithoutActorInput, AuditLogUncheckedCreateWithoutActorInput> | AuditLogCreateWithoutActorInput[] | AuditLogUncheckedCreateWithoutActorInput[]
    connectOrCreate?: AuditLogCreateOrConnectWithoutActorInput | AuditLogCreateOrConnectWithoutActorInput[]
    createMany?: AuditLogCreateManyActorInputEnvelope
    connect?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
  }

  export type EnumRoleFieldUpdateOperationsInput = {
    set?: $Enums.Role
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type UnitUpdateOneWithoutResidentsNestedInput = {
    create?: XOR<UnitCreateWithoutResidentsInput, UnitUncheckedCreateWithoutResidentsInput>
    connectOrCreate?: UnitCreateOrConnectWithoutResidentsInput
    upsert?: UnitUpsertWithoutResidentsInput
    disconnect?: UnitWhereInput | boolean
    delete?: UnitWhereInput | boolean
    connect?: UnitWhereUniqueInput
    update?: XOR<XOR<UnitUpdateToOneWithWhereWithoutResidentsInput, UnitUpdateWithoutResidentsInput>, UnitUncheckedUpdateWithoutResidentsInput>
  }

  export type NotificationUpdateManyWithoutUserNestedInput = {
    create?: XOR<NotificationCreateWithoutUserInput, NotificationUncheckedCreateWithoutUserInput> | NotificationCreateWithoutUserInput[] | NotificationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: NotificationCreateOrConnectWithoutUserInput | NotificationCreateOrConnectWithoutUserInput[]
    upsert?: NotificationUpsertWithWhereUniqueWithoutUserInput | NotificationUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: NotificationCreateManyUserInputEnvelope
    set?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    disconnect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    delete?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    connect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    update?: NotificationUpdateWithWhereUniqueWithoutUserInput | NotificationUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: NotificationUpdateManyWithWhereWithoutUserInput | NotificationUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: NotificationScalarWhereInput | NotificationScalarWhereInput[]
  }

  export type PackageUpdateManyWithoutReceivedByNestedInput = {
    create?: XOR<PackageCreateWithoutReceivedByInput, PackageUncheckedCreateWithoutReceivedByInput> | PackageCreateWithoutReceivedByInput[] | PackageUncheckedCreateWithoutReceivedByInput[]
    connectOrCreate?: PackageCreateOrConnectWithoutReceivedByInput | PackageCreateOrConnectWithoutReceivedByInput[]
    upsert?: PackageUpsertWithWhereUniqueWithoutReceivedByInput | PackageUpsertWithWhereUniqueWithoutReceivedByInput[]
    createMany?: PackageCreateManyReceivedByInputEnvelope
    set?: PackageWhereUniqueInput | PackageWhereUniqueInput[]
    disconnect?: PackageWhereUniqueInput | PackageWhereUniqueInput[]
    delete?: PackageWhereUniqueInput | PackageWhereUniqueInput[]
    connect?: PackageWhereUniqueInput | PackageWhereUniqueInput[]
    update?: PackageUpdateWithWhereUniqueWithoutReceivedByInput | PackageUpdateWithWhereUniqueWithoutReceivedByInput[]
    updateMany?: PackageUpdateManyWithWhereWithoutReceivedByInput | PackageUpdateManyWithWhereWithoutReceivedByInput[]
    deleteMany?: PackageScalarWhereInput | PackageScalarWhereInput[]
  }

  export type PackageUpdateManyWithoutResidentNestedInput = {
    create?: XOR<PackageCreateWithoutResidentInput, PackageUncheckedCreateWithoutResidentInput> | PackageCreateWithoutResidentInput[] | PackageUncheckedCreateWithoutResidentInput[]
    connectOrCreate?: PackageCreateOrConnectWithoutResidentInput | PackageCreateOrConnectWithoutResidentInput[]
    upsert?: PackageUpsertWithWhereUniqueWithoutResidentInput | PackageUpsertWithWhereUniqueWithoutResidentInput[]
    createMany?: PackageCreateManyResidentInputEnvelope
    set?: PackageWhereUniqueInput | PackageWhereUniqueInput[]
    disconnect?: PackageWhereUniqueInput | PackageWhereUniqueInput[]
    delete?: PackageWhereUniqueInput | PackageWhereUniqueInput[]
    connect?: PackageWhereUniqueInput | PackageWhereUniqueInput[]
    update?: PackageUpdateWithWhereUniqueWithoutResidentInput | PackageUpdateWithWhereUniqueWithoutResidentInput[]
    updateMany?: PackageUpdateManyWithWhereWithoutResidentInput | PackageUpdateManyWithWhereWithoutResidentInput[]
    deleteMany?: PackageScalarWhereInput | PackageScalarWhereInput[]
  }

  export type PackageHistoryUpdateManyWithoutActorNestedInput = {
    create?: XOR<PackageHistoryCreateWithoutActorInput, PackageHistoryUncheckedCreateWithoutActorInput> | PackageHistoryCreateWithoutActorInput[] | PackageHistoryUncheckedCreateWithoutActorInput[]
    connectOrCreate?: PackageHistoryCreateOrConnectWithoutActorInput | PackageHistoryCreateOrConnectWithoutActorInput[]
    upsert?: PackageHistoryUpsertWithWhereUniqueWithoutActorInput | PackageHistoryUpsertWithWhereUniqueWithoutActorInput[]
    createMany?: PackageHistoryCreateManyActorInputEnvelope
    set?: PackageHistoryWhereUniqueInput | PackageHistoryWhereUniqueInput[]
    disconnect?: PackageHistoryWhereUniqueInput | PackageHistoryWhereUniqueInput[]
    delete?: PackageHistoryWhereUniqueInput | PackageHistoryWhereUniqueInput[]
    connect?: PackageHistoryWhereUniqueInput | PackageHistoryWhereUniqueInput[]
    update?: PackageHistoryUpdateWithWhereUniqueWithoutActorInput | PackageHistoryUpdateWithWhereUniqueWithoutActorInput[]
    updateMany?: PackageHistoryUpdateManyWithWhereWithoutActorInput | PackageHistoryUpdateManyWithWhereWithoutActorInput[]
    deleteMany?: PackageHistoryScalarWhereInput | PackageHistoryScalarWhereInput[]
  }

  export type PickupTokenUpdateManyWithoutGeneratedByNestedInput = {
    create?: XOR<PickupTokenCreateWithoutGeneratedByInput, PickupTokenUncheckedCreateWithoutGeneratedByInput> | PickupTokenCreateWithoutGeneratedByInput[] | PickupTokenUncheckedCreateWithoutGeneratedByInput[]
    connectOrCreate?: PickupTokenCreateOrConnectWithoutGeneratedByInput | PickupTokenCreateOrConnectWithoutGeneratedByInput[]
    upsert?: PickupTokenUpsertWithWhereUniqueWithoutGeneratedByInput | PickupTokenUpsertWithWhereUniqueWithoutGeneratedByInput[]
    createMany?: PickupTokenCreateManyGeneratedByInputEnvelope
    set?: PickupTokenWhereUniqueInput | PickupTokenWhereUniqueInput[]
    disconnect?: PickupTokenWhereUniqueInput | PickupTokenWhereUniqueInput[]
    delete?: PickupTokenWhereUniqueInput | PickupTokenWhereUniqueInput[]
    connect?: PickupTokenWhereUniqueInput | PickupTokenWhereUniqueInput[]
    update?: PickupTokenUpdateWithWhereUniqueWithoutGeneratedByInput | PickupTokenUpdateWithWhereUniqueWithoutGeneratedByInput[]
    updateMany?: PickupTokenUpdateManyWithWhereWithoutGeneratedByInput | PickupTokenUpdateManyWithWhereWithoutGeneratedByInput[]
    deleteMany?: PickupTokenScalarWhereInput | PickupTokenScalarWhereInput[]
  }

  export type PickupTokenUpdateManyWithoutValidatedByNestedInput = {
    create?: XOR<PickupTokenCreateWithoutValidatedByInput, PickupTokenUncheckedCreateWithoutValidatedByInput> | PickupTokenCreateWithoutValidatedByInput[] | PickupTokenUncheckedCreateWithoutValidatedByInput[]
    connectOrCreate?: PickupTokenCreateOrConnectWithoutValidatedByInput | PickupTokenCreateOrConnectWithoutValidatedByInput[]
    upsert?: PickupTokenUpsertWithWhereUniqueWithoutValidatedByInput | PickupTokenUpsertWithWhereUniqueWithoutValidatedByInput[]
    createMany?: PickupTokenCreateManyValidatedByInputEnvelope
    set?: PickupTokenWhereUniqueInput | PickupTokenWhereUniqueInput[]
    disconnect?: PickupTokenWhereUniqueInput | PickupTokenWhereUniqueInput[]
    delete?: PickupTokenWhereUniqueInput | PickupTokenWhereUniqueInput[]
    connect?: PickupTokenWhereUniqueInput | PickupTokenWhereUniqueInput[]
    update?: PickupTokenUpdateWithWhereUniqueWithoutValidatedByInput | PickupTokenUpdateWithWhereUniqueWithoutValidatedByInput[]
    updateMany?: PickupTokenUpdateManyWithWhereWithoutValidatedByInput | PickupTokenUpdateManyWithWhereWithoutValidatedByInput[]
    deleteMany?: PickupTokenScalarWhereInput | PickupTokenScalarWhereInput[]
  }

  export type PushSubscriptionUpdateManyWithoutUserNestedInput = {
    create?: XOR<PushSubscriptionCreateWithoutUserInput, PushSubscriptionUncheckedCreateWithoutUserInput> | PushSubscriptionCreateWithoutUserInput[] | PushSubscriptionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PushSubscriptionCreateOrConnectWithoutUserInput | PushSubscriptionCreateOrConnectWithoutUserInput[]
    upsert?: PushSubscriptionUpsertWithWhereUniqueWithoutUserInput | PushSubscriptionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: PushSubscriptionCreateManyUserInputEnvelope
    set?: PushSubscriptionWhereUniqueInput | PushSubscriptionWhereUniqueInput[]
    disconnect?: PushSubscriptionWhereUniqueInput | PushSubscriptionWhereUniqueInput[]
    delete?: PushSubscriptionWhereUniqueInput | PushSubscriptionWhereUniqueInput[]
    connect?: PushSubscriptionWhereUniqueInput | PushSubscriptionWhereUniqueInput[]
    update?: PushSubscriptionUpdateWithWhereUniqueWithoutUserInput | PushSubscriptionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: PushSubscriptionUpdateManyWithWhereWithoutUserInput | PushSubscriptionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: PushSubscriptionScalarWhereInput | PushSubscriptionScalarWhereInput[]
  }

  export type AuditLogUpdateManyWithoutActorNestedInput = {
    create?: XOR<AuditLogCreateWithoutActorInput, AuditLogUncheckedCreateWithoutActorInput> | AuditLogCreateWithoutActorInput[] | AuditLogUncheckedCreateWithoutActorInput[]
    connectOrCreate?: AuditLogCreateOrConnectWithoutActorInput | AuditLogCreateOrConnectWithoutActorInput[]
    upsert?: AuditLogUpsertWithWhereUniqueWithoutActorInput | AuditLogUpsertWithWhereUniqueWithoutActorInput[]
    createMany?: AuditLogCreateManyActorInputEnvelope
    set?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
    disconnect?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
    delete?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
    connect?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
    update?: AuditLogUpdateWithWhereUniqueWithoutActorInput | AuditLogUpdateWithWhereUniqueWithoutActorInput[]
    updateMany?: AuditLogUpdateManyWithWhereWithoutActorInput | AuditLogUpdateManyWithWhereWithoutActorInput[]
    deleteMany?: AuditLogScalarWhereInput | AuditLogScalarWhereInput[]
  }

  export type NotificationUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<NotificationCreateWithoutUserInput, NotificationUncheckedCreateWithoutUserInput> | NotificationCreateWithoutUserInput[] | NotificationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: NotificationCreateOrConnectWithoutUserInput | NotificationCreateOrConnectWithoutUserInput[]
    upsert?: NotificationUpsertWithWhereUniqueWithoutUserInput | NotificationUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: NotificationCreateManyUserInputEnvelope
    set?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    disconnect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    delete?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    connect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    update?: NotificationUpdateWithWhereUniqueWithoutUserInput | NotificationUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: NotificationUpdateManyWithWhereWithoutUserInput | NotificationUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: NotificationScalarWhereInput | NotificationScalarWhereInput[]
  }

  export type PackageUncheckedUpdateManyWithoutReceivedByNestedInput = {
    create?: XOR<PackageCreateWithoutReceivedByInput, PackageUncheckedCreateWithoutReceivedByInput> | PackageCreateWithoutReceivedByInput[] | PackageUncheckedCreateWithoutReceivedByInput[]
    connectOrCreate?: PackageCreateOrConnectWithoutReceivedByInput | PackageCreateOrConnectWithoutReceivedByInput[]
    upsert?: PackageUpsertWithWhereUniqueWithoutReceivedByInput | PackageUpsertWithWhereUniqueWithoutReceivedByInput[]
    createMany?: PackageCreateManyReceivedByInputEnvelope
    set?: PackageWhereUniqueInput | PackageWhereUniqueInput[]
    disconnect?: PackageWhereUniqueInput | PackageWhereUniqueInput[]
    delete?: PackageWhereUniqueInput | PackageWhereUniqueInput[]
    connect?: PackageWhereUniqueInput | PackageWhereUniqueInput[]
    update?: PackageUpdateWithWhereUniqueWithoutReceivedByInput | PackageUpdateWithWhereUniqueWithoutReceivedByInput[]
    updateMany?: PackageUpdateManyWithWhereWithoutReceivedByInput | PackageUpdateManyWithWhereWithoutReceivedByInput[]
    deleteMany?: PackageScalarWhereInput | PackageScalarWhereInput[]
  }

  export type PackageUncheckedUpdateManyWithoutResidentNestedInput = {
    create?: XOR<PackageCreateWithoutResidentInput, PackageUncheckedCreateWithoutResidentInput> | PackageCreateWithoutResidentInput[] | PackageUncheckedCreateWithoutResidentInput[]
    connectOrCreate?: PackageCreateOrConnectWithoutResidentInput | PackageCreateOrConnectWithoutResidentInput[]
    upsert?: PackageUpsertWithWhereUniqueWithoutResidentInput | PackageUpsertWithWhereUniqueWithoutResidentInput[]
    createMany?: PackageCreateManyResidentInputEnvelope
    set?: PackageWhereUniqueInput | PackageWhereUniqueInput[]
    disconnect?: PackageWhereUniqueInput | PackageWhereUniqueInput[]
    delete?: PackageWhereUniqueInput | PackageWhereUniqueInput[]
    connect?: PackageWhereUniqueInput | PackageWhereUniqueInput[]
    update?: PackageUpdateWithWhereUniqueWithoutResidentInput | PackageUpdateWithWhereUniqueWithoutResidentInput[]
    updateMany?: PackageUpdateManyWithWhereWithoutResidentInput | PackageUpdateManyWithWhereWithoutResidentInput[]
    deleteMany?: PackageScalarWhereInput | PackageScalarWhereInput[]
  }

  export type PackageHistoryUncheckedUpdateManyWithoutActorNestedInput = {
    create?: XOR<PackageHistoryCreateWithoutActorInput, PackageHistoryUncheckedCreateWithoutActorInput> | PackageHistoryCreateWithoutActorInput[] | PackageHistoryUncheckedCreateWithoutActorInput[]
    connectOrCreate?: PackageHistoryCreateOrConnectWithoutActorInput | PackageHistoryCreateOrConnectWithoutActorInput[]
    upsert?: PackageHistoryUpsertWithWhereUniqueWithoutActorInput | PackageHistoryUpsertWithWhereUniqueWithoutActorInput[]
    createMany?: PackageHistoryCreateManyActorInputEnvelope
    set?: PackageHistoryWhereUniqueInput | PackageHistoryWhereUniqueInput[]
    disconnect?: PackageHistoryWhereUniqueInput | PackageHistoryWhereUniqueInput[]
    delete?: PackageHistoryWhereUniqueInput | PackageHistoryWhereUniqueInput[]
    connect?: PackageHistoryWhereUniqueInput | PackageHistoryWhereUniqueInput[]
    update?: PackageHistoryUpdateWithWhereUniqueWithoutActorInput | PackageHistoryUpdateWithWhereUniqueWithoutActorInput[]
    updateMany?: PackageHistoryUpdateManyWithWhereWithoutActorInput | PackageHistoryUpdateManyWithWhereWithoutActorInput[]
    deleteMany?: PackageHistoryScalarWhereInput | PackageHistoryScalarWhereInput[]
  }

  export type PickupTokenUncheckedUpdateManyWithoutGeneratedByNestedInput = {
    create?: XOR<PickupTokenCreateWithoutGeneratedByInput, PickupTokenUncheckedCreateWithoutGeneratedByInput> | PickupTokenCreateWithoutGeneratedByInput[] | PickupTokenUncheckedCreateWithoutGeneratedByInput[]
    connectOrCreate?: PickupTokenCreateOrConnectWithoutGeneratedByInput | PickupTokenCreateOrConnectWithoutGeneratedByInput[]
    upsert?: PickupTokenUpsertWithWhereUniqueWithoutGeneratedByInput | PickupTokenUpsertWithWhereUniqueWithoutGeneratedByInput[]
    createMany?: PickupTokenCreateManyGeneratedByInputEnvelope
    set?: PickupTokenWhereUniqueInput | PickupTokenWhereUniqueInput[]
    disconnect?: PickupTokenWhereUniqueInput | PickupTokenWhereUniqueInput[]
    delete?: PickupTokenWhereUniqueInput | PickupTokenWhereUniqueInput[]
    connect?: PickupTokenWhereUniqueInput | PickupTokenWhereUniqueInput[]
    update?: PickupTokenUpdateWithWhereUniqueWithoutGeneratedByInput | PickupTokenUpdateWithWhereUniqueWithoutGeneratedByInput[]
    updateMany?: PickupTokenUpdateManyWithWhereWithoutGeneratedByInput | PickupTokenUpdateManyWithWhereWithoutGeneratedByInput[]
    deleteMany?: PickupTokenScalarWhereInput | PickupTokenScalarWhereInput[]
  }

  export type PickupTokenUncheckedUpdateManyWithoutValidatedByNestedInput = {
    create?: XOR<PickupTokenCreateWithoutValidatedByInput, PickupTokenUncheckedCreateWithoutValidatedByInput> | PickupTokenCreateWithoutValidatedByInput[] | PickupTokenUncheckedCreateWithoutValidatedByInput[]
    connectOrCreate?: PickupTokenCreateOrConnectWithoutValidatedByInput | PickupTokenCreateOrConnectWithoutValidatedByInput[]
    upsert?: PickupTokenUpsertWithWhereUniqueWithoutValidatedByInput | PickupTokenUpsertWithWhereUniqueWithoutValidatedByInput[]
    createMany?: PickupTokenCreateManyValidatedByInputEnvelope
    set?: PickupTokenWhereUniqueInput | PickupTokenWhereUniqueInput[]
    disconnect?: PickupTokenWhereUniqueInput | PickupTokenWhereUniqueInput[]
    delete?: PickupTokenWhereUniqueInput | PickupTokenWhereUniqueInput[]
    connect?: PickupTokenWhereUniqueInput | PickupTokenWhereUniqueInput[]
    update?: PickupTokenUpdateWithWhereUniqueWithoutValidatedByInput | PickupTokenUpdateWithWhereUniqueWithoutValidatedByInput[]
    updateMany?: PickupTokenUpdateManyWithWhereWithoutValidatedByInput | PickupTokenUpdateManyWithWhereWithoutValidatedByInput[]
    deleteMany?: PickupTokenScalarWhereInput | PickupTokenScalarWhereInput[]
  }

  export type PushSubscriptionUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<PushSubscriptionCreateWithoutUserInput, PushSubscriptionUncheckedCreateWithoutUserInput> | PushSubscriptionCreateWithoutUserInput[] | PushSubscriptionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PushSubscriptionCreateOrConnectWithoutUserInput | PushSubscriptionCreateOrConnectWithoutUserInput[]
    upsert?: PushSubscriptionUpsertWithWhereUniqueWithoutUserInput | PushSubscriptionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: PushSubscriptionCreateManyUserInputEnvelope
    set?: PushSubscriptionWhereUniqueInput | PushSubscriptionWhereUniqueInput[]
    disconnect?: PushSubscriptionWhereUniqueInput | PushSubscriptionWhereUniqueInput[]
    delete?: PushSubscriptionWhereUniqueInput | PushSubscriptionWhereUniqueInput[]
    connect?: PushSubscriptionWhereUniqueInput | PushSubscriptionWhereUniqueInput[]
    update?: PushSubscriptionUpdateWithWhereUniqueWithoutUserInput | PushSubscriptionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: PushSubscriptionUpdateManyWithWhereWithoutUserInput | PushSubscriptionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: PushSubscriptionScalarWhereInput | PushSubscriptionScalarWhereInput[]
  }

  export type AuditLogUncheckedUpdateManyWithoutActorNestedInput = {
    create?: XOR<AuditLogCreateWithoutActorInput, AuditLogUncheckedCreateWithoutActorInput> | AuditLogCreateWithoutActorInput[] | AuditLogUncheckedCreateWithoutActorInput[]
    connectOrCreate?: AuditLogCreateOrConnectWithoutActorInput | AuditLogCreateOrConnectWithoutActorInput[]
    upsert?: AuditLogUpsertWithWhereUniqueWithoutActorInput | AuditLogUpsertWithWhereUniqueWithoutActorInput[]
    createMany?: AuditLogCreateManyActorInputEnvelope
    set?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
    disconnect?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
    delete?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
    connect?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
    update?: AuditLogUpdateWithWhereUniqueWithoutActorInput | AuditLogUpdateWithWhereUniqueWithoutActorInput[]
    updateMany?: AuditLogUpdateManyWithWhereWithoutActorInput | AuditLogUpdateManyWithWhereWithoutActorInput[]
    deleteMany?: AuditLogScalarWhereInput | AuditLogScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutResidentPackagesInput = {
    create?: XOR<UserCreateWithoutResidentPackagesInput, UserUncheckedCreateWithoutResidentPackagesInput>
    connectOrCreate?: UserCreateOrConnectWithoutResidentPackagesInput
    connect?: UserWhereUniqueInput
  }

  export type UnitCreateNestedOneWithoutPackagesInput = {
    create?: XOR<UnitCreateWithoutPackagesInput, UnitUncheckedCreateWithoutPackagesInput>
    connectOrCreate?: UnitCreateOrConnectWithoutPackagesInput
    connect?: UnitWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutReceivedPackagesInput = {
    create?: XOR<UserCreateWithoutReceivedPackagesInput, UserUncheckedCreateWithoutReceivedPackagesInput>
    connectOrCreate?: UserCreateOrConnectWithoutReceivedPackagesInput
    connect?: UserWhereUniqueInput
  }

  export type PackageHistoryCreateNestedManyWithoutPackageInput = {
    create?: XOR<PackageHistoryCreateWithoutPackageInput, PackageHistoryUncheckedCreateWithoutPackageInput> | PackageHistoryCreateWithoutPackageInput[] | PackageHistoryUncheckedCreateWithoutPackageInput[]
    connectOrCreate?: PackageHistoryCreateOrConnectWithoutPackageInput | PackageHistoryCreateOrConnectWithoutPackageInput[]
    createMany?: PackageHistoryCreateManyPackageInputEnvelope
    connect?: PackageHistoryWhereUniqueInput | PackageHistoryWhereUniqueInput[]
  }

  export type PickupTokenCreateNestedOneWithoutPackageInput = {
    create?: XOR<PickupTokenCreateWithoutPackageInput, PickupTokenUncheckedCreateWithoutPackageInput>
    connectOrCreate?: PickupTokenCreateOrConnectWithoutPackageInput
    connect?: PickupTokenWhereUniqueInput
  }

  export type PackageHistoryUncheckedCreateNestedManyWithoutPackageInput = {
    create?: XOR<PackageHistoryCreateWithoutPackageInput, PackageHistoryUncheckedCreateWithoutPackageInput> | PackageHistoryCreateWithoutPackageInput[] | PackageHistoryUncheckedCreateWithoutPackageInput[]
    connectOrCreate?: PackageHistoryCreateOrConnectWithoutPackageInput | PackageHistoryCreateOrConnectWithoutPackageInput[]
    createMany?: PackageHistoryCreateManyPackageInputEnvelope
    connect?: PackageHistoryWhereUniqueInput | PackageHistoryWhereUniqueInput[]
  }

  export type PickupTokenUncheckedCreateNestedOneWithoutPackageInput = {
    create?: XOR<PickupTokenCreateWithoutPackageInput, PickupTokenUncheckedCreateWithoutPackageInput>
    connectOrCreate?: PickupTokenCreateOrConnectWithoutPackageInput
    connect?: PickupTokenWhereUniqueInput
  }

  export type EnumPackageStatusFieldUpdateOperationsInput = {
    set?: $Enums.PackageStatus
  }

  export type UserUpdateOneRequiredWithoutResidentPackagesNestedInput = {
    create?: XOR<UserCreateWithoutResidentPackagesInput, UserUncheckedCreateWithoutResidentPackagesInput>
    connectOrCreate?: UserCreateOrConnectWithoutResidentPackagesInput
    upsert?: UserUpsertWithoutResidentPackagesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutResidentPackagesInput, UserUpdateWithoutResidentPackagesInput>, UserUncheckedUpdateWithoutResidentPackagesInput>
  }

  export type UnitUpdateOneRequiredWithoutPackagesNestedInput = {
    create?: XOR<UnitCreateWithoutPackagesInput, UnitUncheckedCreateWithoutPackagesInput>
    connectOrCreate?: UnitCreateOrConnectWithoutPackagesInput
    upsert?: UnitUpsertWithoutPackagesInput
    connect?: UnitWhereUniqueInput
    update?: XOR<XOR<UnitUpdateToOneWithWhereWithoutPackagesInput, UnitUpdateWithoutPackagesInput>, UnitUncheckedUpdateWithoutPackagesInput>
  }

  export type UserUpdateOneRequiredWithoutReceivedPackagesNestedInput = {
    create?: XOR<UserCreateWithoutReceivedPackagesInput, UserUncheckedCreateWithoutReceivedPackagesInput>
    connectOrCreate?: UserCreateOrConnectWithoutReceivedPackagesInput
    upsert?: UserUpsertWithoutReceivedPackagesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutReceivedPackagesInput, UserUpdateWithoutReceivedPackagesInput>, UserUncheckedUpdateWithoutReceivedPackagesInput>
  }

  export type PackageHistoryUpdateManyWithoutPackageNestedInput = {
    create?: XOR<PackageHistoryCreateWithoutPackageInput, PackageHistoryUncheckedCreateWithoutPackageInput> | PackageHistoryCreateWithoutPackageInput[] | PackageHistoryUncheckedCreateWithoutPackageInput[]
    connectOrCreate?: PackageHistoryCreateOrConnectWithoutPackageInput | PackageHistoryCreateOrConnectWithoutPackageInput[]
    upsert?: PackageHistoryUpsertWithWhereUniqueWithoutPackageInput | PackageHistoryUpsertWithWhereUniqueWithoutPackageInput[]
    createMany?: PackageHistoryCreateManyPackageInputEnvelope
    set?: PackageHistoryWhereUniqueInput | PackageHistoryWhereUniqueInput[]
    disconnect?: PackageHistoryWhereUniqueInput | PackageHistoryWhereUniqueInput[]
    delete?: PackageHistoryWhereUniqueInput | PackageHistoryWhereUniqueInput[]
    connect?: PackageHistoryWhereUniqueInput | PackageHistoryWhereUniqueInput[]
    update?: PackageHistoryUpdateWithWhereUniqueWithoutPackageInput | PackageHistoryUpdateWithWhereUniqueWithoutPackageInput[]
    updateMany?: PackageHistoryUpdateManyWithWhereWithoutPackageInput | PackageHistoryUpdateManyWithWhereWithoutPackageInput[]
    deleteMany?: PackageHistoryScalarWhereInput | PackageHistoryScalarWhereInput[]
  }

  export type PickupTokenUpdateOneWithoutPackageNestedInput = {
    create?: XOR<PickupTokenCreateWithoutPackageInput, PickupTokenUncheckedCreateWithoutPackageInput>
    connectOrCreate?: PickupTokenCreateOrConnectWithoutPackageInput
    upsert?: PickupTokenUpsertWithoutPackageInput
    disconnect?: PickupTokenWhereInput | boolean
    delete?: PickupTokenWhereInput | boolean
    connect?: PickupTokenWhereUniqueInput
    update?: XOR<XOR<PickupTokenUpdateToOneWithWhereWithoutPackageInput, PickupTokenUpdateWithoutPackageInput>, PickupTokenUncheckedUpdateWithoutPackageInput>
  }

  export type PackageHistoryUncheckedUpdateManyWithoutPackageNestedInput = {
    create?: XOR<PackageHistoryCreateWithoutPackageInput, PackageHistoryUncheckedCreateWithoutPackageInput> | PackageHistoryCreateWithoutPackageInput[] | PackageHistoryUncheckedCreateWithoutPackageInput[]
    connectOrCreate?: PackageHistoryCreateOrConnectWithoutPackageInput | PackageHistoryCreateOrConnectWithoutPackageInput[]
    upsert?: PackageHistoryUpsertWithWhereUniqueWithoutPackageInput | PackageHistoryUpsertWithWhereUniqueWithoutPackageInput[]
    createMany?: PackageHistoryCreateManyPackageInputEnvelope
    set?: PackageHistoryWhereUniqueInput | PackageHistoryWhereUniqueInput[]
    disconnect?: PackageHistoryWhereUniqueInput | PackageHistoryWhereUniqueInput[]
    delete?: PackageHistoryWhereUniqueInput | PackageHistoryWhereUniqueInput[]
    connect?: PackageHistoryWhereUniqueInput | PackageHistoryWhereUniqueInput[]
    update?: PackageHistoryUpdateWithWhereUniqueWithoutPackageInput | PackageHistoryUpdateWithWhereUniqueWithoutPackageInput[]
    updateMany?: PackageHistoryUpdateManyWithWhereWithoutPackageInput | PackageHistoryUpdateManyWithWhereWithoutPackageInput[]
    deleteMany?: PackageHistoryScalarWhereInput | PackageHistoryScalarWhereInput[]
  }

  export type PickupTokenUncheckedUpdateOneWithoutPackageNestedInput = {
    create?: XOR<PickupTokenCreateWithoutPackageInput, PickupTokenUncheckedCreateWithoutPackageInput>
    connectOrCreate?: PickupTokenCreateOrConnectWithoutPackageInput
    upsert?: PickupTokenUpsertWithoutPackageInput
    disconnect?: PickupTokenWhereInput | boolean
    delete?: PickupTokenWhereInput | boolean
    connect?: PickupTokenWhereUniqueInput
    update?: XOR<XOR<PickupTokenUpdateToOneWithWhereWithoutPackageInput, PickupTokenUpdateWithoutPackageInput>, PickupTokenUncheckedUpdateWithoutPackageInput>
  }

  export type PackageCreateNestedOneWithoutTokenInput = {
    create?: XOR<PackageCreateWithoutTokenInput, PackageUncheckedCreateWithoutTokenInput>
    connectOrCreate?: PackageCreateOrConnectWithoutTokenInput
    connect?: PackageWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutGeneratedTokensInput = {
    create?: XOR<UserCreateWithoutGeneratedTokensInput, UserUncheckedCreateWithoutGeneratedTokensInput>
    connectOrCreate?: UserCreateOrConnectWithoutGeneratedTokensInput
    connect?: UserWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutValidatedTokensInput = {
    create?: XOR<UserCreateWithoutValidatedTokensInput, UserUncheckedCreateWithoutValidatedTokensInput>
    connectOrCreate?: UserCreateOrConnectWithoutValidatedTokensInput
    connect?: UserWhereUniqueInput
  }

  export type PackageUpdateOneRequiredWithoutTokenNestedInput = {
    create?: XOR<PackageCreateWithoutTokenInput, PackageUncheckedCreateWithoutTokenInput>
    connectOrCreate?: PackageCreateOrConnectWithoutTokenInput
    upsert?: PackageUpsertWithoutTokenInput
    connect?: PackageWhereUniqueInput
    update?: XOR<XOR<PackageUpdateToOneWithWhereWithoutTokenInput, PackageUpdateWithoutTokenInput>, PackageUncheckedUpdateWithoutTokenInput>
  }

  export type UserUpdateOneRequiredWithoutGeneratedTokensNestedInput = {
    create?: XOR<UserCreateWithoutGeneratedTokensInput, UserUncheckedCreateWithoutGeneratedTokensInput>
    connectOrCreate?: UserCreateOrConnectWithoutGeneratedTokensInput
    upsert?: UserUpsertWithoutGeneratedTokensInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutGeneratedTokensInput, UserUpdateWithoutGeneratedTokensInput>, UserUncheckedUpdateWithoutGeneratedTokensInput>
  }

  export type UserUpdateOneWithoutValidatedTokensNestedInput = {
    create?: XOR<UserCreateWithoutValidatedTokensInput, UserUncheckedCreateWithoutValidatedTokensInput>
    connectOrCreate?: UserCreateOrConnectWithoutValidatedTokensInput
    upsert?: UserUpsertWithoutValidatedTokensInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutValidatedTokensInput, UserUpdateWithoutValidatedTokensInput>, UserUncheckedUpdateWithoutValidatedTokensInput>
  }

  export type PackageCreateNestedOneWithoutHistoryInput = {
    create?: XOR<PackageCreateWithoutHistoryInput, PackageUncheckedCreateWithoutHistoryInput>
    connectOrCreate?: PackageCreateOrConnectWithoutHistoryInput
    connect?: PackageWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutHistoryEntriesInput = {
    create?: XOR<UserCreateWithoutHistoryEntriesInput, UserUncheckedCreateWithoutHistoryEntriesInput>
    connectOrCreate?: UserCreateOrConnectWithoutHistoryEntriesInput
    connect?: UserWhereUniqueInput
  }

  export type EnumHistoryTypeFieldUpdateOperationsInput = {
    set?: $Enums.HistoryType
  }

  export type NullableEnumPackageStatusFieldUpdateOperationsInput = {
    set?: $Enums.PackageStatus | null
  }

  export type PackageUpdateOneRequiredWithoutHistoryNestedInput = {
    create?: XOR<PackageCreateWithoutHistoryInput, PackageUncheckedCreateWithoutHistoryInput>
    connectOrCreate?: PackageCreateOrConnectWithoutHistoryInput
    upsert?: PackageUpsertWithoutHistoryInput
    connect?: PackageWhereUniqueInput
    update?: XOR<XOR<PackageUpdateToOneWithWhereWithoutHistoryInput, PackageUpdateWithoutHistoryInput>, PackageUncheckedUpdateWithoutHistoryInput>
  }

  export type UserUpdateOneWithoutHistoryEntriesNestedInput = {
    create?: XOR<UserCreateWithoutHistoryEntriesInput, UserUncheckedCreateWithoutHistoryEntriesInput>
    connectOrCreate?: UserCreateOrConnectWithoutHistoryEntriesInput
    upsert?: UserUpsertWithoutHistoryEntriesInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutHistoryEntriesInput, UserUpdateWithoutHistoryEntriesInput>, UserUncheckedUpdateWithoutHistoryEntriesInput>
  }

  export type UserCreateNestedOneWithoutNotificationsInput = {
    create?: XOR<UserCreateWithoutNotificationsInput, UserUncheckedCreateWithoutNotificationsInput>
    connectOrCreate?: UserCreateOrConnectWithoutNotificationsInput
    connect?: UserWhereUniqueInput
  }

  export type NotificationDeliveryCreateNestedManyWithoutNotificationInput = {
    create?: XOR<NotificationDeliveryCreateWithoutNotificationInput, NotificationDeliveryUncheckedCreateWithoutNotificationInput> | NotificationDeliveryCreateWithoutNotificationInput[] | NotificationDeliveryUncheckedCreateWithoutNotificationInput[]
    connectOrCreate?: NotificationDeliveryCreateOrConnectWithoutNotificationInput | NotificationDeliveryCreateOrConnectWithoutNotificationInput[]
    createMany?: NotificationDeliveryCreateManyNotificationInputEnvelope
    connect?: NotificationDeliveryWhereUniqueInput | NotificationDeliveryWhereUniqueInput[]
  }

  export type NotificationDeliveryUncheckedCreateNestedManyWithoutNotificationInput = {
    create?: XOR<NotificationDeliveryCreateWithoutNotificationInput, NotificationDeliveryUncheckedCreateWithoutNotificationInput> | NotificationDeliveryCreateWithoutNotificationInput[] | NotificationDeliveryUncheckedCreateWithoutNotificationInput[]
    connectOrCreate?: NotificationDeliveryCreateOrConnectWithoutNotificationInput | NotificationDeliveryCreateOrConnectWithoutNotificationInput[]
    createMany?: NotificationDeliveryCreateManyNotificationInputEnvelope
    connect?: NotificationDeliveryWhereUniqueInput | NotificationDeliveryWhereUniqueInput[]
  }

  export type EnumNotificationTypeFieldUpdateOperationsInput = {
    set?: $Enums.NotificationType
  }

  export type UserUpdateOneRequiredWithoutNotificationsNestedInput = {
    create?: XOR<UserCreateWithoutNotificationsInput, UserUncheckedCreateWithoutNotificationsInput>
    connectOrCreate?: UserCreateOrConnectWithoutNotificationsInput
    upsert?: UserUpsertWithoutNotificationsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutNotificationsInput, UserUpdateWithoutNotificationsInput>, UserUncheckedUpdateWithoutNotificationsInput>
  }

  export type NotificationDeliveryUpdateManyWithoutNotificationNestedInput = {
    create?: XOR<NotificationDeliveryCreateWithoutNotificationInput, NotificationDeliveryUncheckedCreateWithoutNotificationInput> | NotificationDeliveryCreateWithoutNotificationInput[] | NotificationDeliveryUncheckedCreateWithoutNotificationInput[]
    connectOrCreate?: NotificationDeliveryCreateOrConnectWithoutNotificationInput | NotificationDeliveryCreateOrConnectWithoutNotificationInput[]
    upsert?: NotificationDeliveryUpsertWithWhereUniqueWithoutNotificationInput | NotificationDeliveryUpsertWithWhereUniqueWithoutNotificationInput[]
    createMany?: NotificationDeliveryCreateManyNotificationInputEnvelope
    set?: NotificationDeliveryWhereUniqueInput | NotificationDeliveryWhereUniqueInput[]
    disconnect?: NotificationDeliveryWhereUniqueInput | NotificationDeliveryWhereUniqueInput[]
    delete?: NotificationDeliveryWhereUniqueInput | NotificationDeliveryWhereUniqueInput[]
    connect?: NotificationDeliveryWhereUniqueInput | NotificationDeliveryWhereUniqueInput[]
    update?: NotificationDeliveryUpdateWithWhereUniqueWithoutNotificationInput | NotificationDeliveryUpdateWithWhereUniqueWithoutNotificationInput[]
    updateMany?: NotificationDeliveryUpdateManyWithWhereWithoutNotificationInput | NotificationDeliveryUpdateManyWithWhereWithoutNotificationInput[]
    deleteMany?: NotificationDeliveryScalarWhereInput | NotificationDeliveryScalarWhereInput[]
  }

  export type NotificationDeliveryUncheckedUpdateManyWithoutNotificationNestedInput = {
    create?: XOR<NotificationDeliveryCreateWithoutNotificationInput, NotificationDeliveryUncheckedCreateWithoutNotificationInput> | NotificationDeliveryCreateWithoutNotificationInput[] | NotificationDeliveryUncheckedCreateWithoutNotificationInput[]
    connectOrCreate?: NotificationDeliveryCreateOrConnectWithoutNotificationInput | NotificationDeliveryCreateOrConnectWithoutNotificationInput[]
    upsert?: NotificationDeliveryUpsertWithWhereUniqueWithoutNotificationInput | NotificationDeliveryUpsertWithWhereUniqueWithoutNotificationInput[]
    createMany?: NotificationDeliveryCreateManyNotificationInputEnvelope
    set?: NotificationDeliveryWhereUniqueInput | NotificationDeliveryWhereUniqueInput[]
    disconnect?: NotificationDeliveryWhereUniqueInput | NotificationDeliveryWhereUniqueInput[]
    delete?: NotificationDeliveryWhereUniqueInput | NotificationDeliveryWhereUniqueInput[]
    connect?: NotificationDeliveryWhereUniqueInput | NotificationDeliveryWhereUniqueInput[]
    update?: NotificationDeliveryUpdateWithWhereUniqueWithoutNotificationInput | NotificationDeliveryUpdateWithWhereUniqueWithoutNotificationInput[]
    updateMany?: NotificationDeliveryUpdateManyWithWhereWithoutNotificationInput | NotificationDeliveryUpdateManyWithWhereWithoutNotificationInput[]
    deleteMany?: NotificationDeliveryScalarWhereInput | NotificationDeliveryScalarWhereInput[]
  }

  export type NotificationCreateNestedOneWithoutDeliveriesInput = {
    create?: XOR<NotificationCreateWithoutDeliveriesInput, NotificationUncheckedCreateWithoutDeliveriesInput>
    connectOrCreate?: NotificationCreateOrConnectWithoutDeliveriesInput
    connect?: NotificationWhereUniqueInput
  }

  export type EnumDeliveryChannelFieldUpdateOperationsInput = {
    set?: $Enums.DeliveryChannel
  }

  export type EnumDeliveryStatusFieldUpdateOperationsInput = {
    set?: $Enums.DeliveryStatus
  }

  export type NotificationUpdateOneRequiredWithoutDeliveriesNestedInput = {
    create?: XOR<NotificationCreateWithoutDeliveriesInput, NotificationUncheckedCreateWithoutDeliveriesInput>
    connectOrCreate?: NotificationCreateOrConnectWithoutDeliveriesInput
    upsert?: NotificationUpsertWithoutDeliveriesInput
    connect?: NotificationWhereUniqueInput
    update?: XOR<XOR<NotificationUpdateToOneWithWhereWithoutDeliveriesInput, NotificationUpdateWithoutDeliveriesInput>, NotificationUncheckedUpdateWithoutDeliveriesInput>
  }

  export type UserCreateNestedOneWithoutPushSubscriptionsInput = {
    create?: XOR<UserCreateWithoutPushSubscriptionsInput, UserUncheckedCreateWithoutPushSubscriptionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutPushSubscriptionsInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutPushSubscriptionsNestedInput = {
    create?: XOR<UserCreateWithoutPushSubscriptionsInput, UserUncheckedCreateWithoutPushSubscriptionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutPushSubscriptionsInput
    upsert?: UserUpsertWithoutPushSubscriptionsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutPushSubscriptionsInput, UserUpdateWithoutPushSubscriptionsInput>, UserUncheckedUpdateWithoutPushSubscriptionsInput>
  }

  export type UserCreateNestedOneWithoutAuditLogsInput = {
    create?: XOR<UserCreateWithoutAuditLogsInput, UserUncheckedCreateWithoutAuditLogsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAuditLogsInput
    connect?: UserWhereUniqueInput
  }

  export type EnumAuditActionFieldUpdateOperationsInput = {
    set?: $Enums.AuditAction
  }

  export type EnumAuditEntityTypeFieldUpdateOperationsInput = {
    set?: $Enums.AuditEntityType
  }

  export type UserUpdateOneWithoutAuditLogsNestedInput = {
    create?: XOR<UserCreateWithoutAuditLogsInput, UserUncheckedCreateWithoutAuditLogsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAuditLogsInput
    upsert?: UserUpsertWithoutAuditLogsInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutAuditLogsInput, UserUpdateWithoutAuditLogsInput>, UserUncheckedUpdateWithoutAuditLogsInput>
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
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

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
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

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
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

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
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
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
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

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedEnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
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

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedEnumPackageStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.PackageStatus | EnumPackageStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PackageStatus[] | ListEnumPackageStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.PackageStatus[] | ListEnumPackageStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPackageStatusFilter<$PrismaModel> | $Enums.PackageStatus
  }

  export type NestedEnumPackageStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PackageStatus | EnumPackageStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PackageStatus[] | ListEnumPackageStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.PackageStatus[] | ListEnumPackageStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPackageStatusWithAggregatesFilter<$PrismaModel> | $Enums.PackageStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPackageStatusFilter<$PrismaModel>
    _max?: NestedEnumPackageStatusFilter<$PrismaModel>
  }

  export type NestedEnumHistoryTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.HistoryType | EnumHistoryTypeFieldRefInput<$PrismaModel>
    in?: $Enums.HistoryType[] | ListEnumHistoryTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.HistoryType[] | ListEnumHistoryTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumHistoryTypeFilter<$PrismaModel> | $Enums.HistoryType
  }

  export type NestedEnumPackageStatusNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.PackageStatus | EnumPackageStatusFieldRefInput<$PrismaModel> | null
    in?: $Enums.PackageStatus[] | ListEnumPackageStatusFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.PackageStatus[] | ListEnumPackageStatusFieldRefInput<$PrismaModel> | null
    not?: NestedEnumPackageStatusNullableFilter<$PrismaModel> | $Enums.PackageStatus | null
  }

  export type NestedEnumHistoryTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.HistoryType | EnumHistoryTypeFieldRefInput<$PrismaModel>
    in?: $Enums.HistoryType[] | ListEnumHistoryTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.HistoryType[] | ListEnumHistoryTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumHistoryTypeWithAggregatesFilter<$PrismaModel> | $Enums.HistoryType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumHistoryTypeFilter<$PrismaModel>
    _max?: NestedEnumHistoryTypeFilter<$PrismaModel>
  }

  export type NestedEnumPackageStatusNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PackageStatus | EnumPackageStatusFieldRefInput<$PrismaModel> | null
    in?: $Enums.PackageStatus[] | ListEnumPackageStatusFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.PackageStatus[] | ListEnumPackageStatusFieldRefInput<$PrismaModel> | null
    not?: NestedEnumPackageStatusNullableWithAggregatesFilter<$PrismaModel> | $Enums.PackageStatus | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumPackageStatusNullableFilter<$PrismaModel>
    _max?: NestedEnumPackageStatusNullableFilter<$PrismaModel>
  }

  export type NestedEnumNotificationTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.NotificationType | EnumNotificationTypeFieldRefInput<$PrismaModel>
    in?: $Enums.NotificationType[] | ListEnumNotificationTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.NotificationType[] | ListEnumNotificationTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumNotificationTypeFilter<$PrismaModel> | $Enums.NotificationType
  }

  export type NestedEnumNotificationTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.NotificationType | EnumNotificationTypeFieldRefInput<$PrismaModel>
    in?: $Enums.NotificationType[] | ListEnumNotificationTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.NotificationType[] | ListEnumNotificationTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumNotificationTypeWithAggregatesFilter<$PrismaModel> | $Enums.NotificationType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumNotificationTypeFilter<$PrismaModel>
    _max?: NestedEnumNotificationTypeFilter<$PrismaModel>
  }

  export type NestedEnumDeliveryChannelFilter<$PrismaModel = never> = {
    equals?: $Enums.DeliveryChannel | EnumDeliveryChannelFieldRefInput<$PrismaModel>
    in?: $Enums.DeliveryChannel[] | ListEnumDeliveryChannelFieldRefInput<$PrismaModel>
    notIn?: $Enums.DeliveryChannel[] | ListEnumDeliveryChannelFieldRefInput<$PrismaModel>
    not?: NestedEnumDeliveryChannelFilter<$PrismaModel> | $Enums.DeliveryChannel
  }

  export type NestedEnumDeliveryStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.DeliveryStatus | EnumDeliveryStatusFieldRefInput<$PrismaModel>
    in?: $Enums.DeliveryStatus[] | ListEnumDeliveryStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.DeliveryStatus[] | ListEnumDeliveryStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumDeliveryStatusFilter<$PrismaModel> | $Enums.DeliveryStatus
  }

  export type NestedEnumDeliveryChannelWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.DeliveryChannel | EnumDeliveryChannelFieldRefInput<$PrismaModel>
    in?: $Enums.DeliveryChannel[] | ListEnumDeliveryChannelFieldRefInput<$PrismaModel>
    notIn?: $Enums.DeliveryChannel[] | ListEnumDeliveryChannelFieldRefInput<$PrismaModel>
    not?: NestedEnumDeliveryChannelWithAggregatesFilter<$PrismaModel> | $Enums.DeliveryChannel
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumDeliveryChannelFilter<$PrismaModel>
    _max?: NestedEnumDeliveryChannelFilter<$PrismaModel>
  }

  export type NestedEnumDeliveryStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.DeliveryStatus | EnumDeliveryStatusFieldRefInput<$PrismaModel>
    in?: $Enums.DeliveryStatus[] | ListEnumDeliveryStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.DeliveryStatus[] | ListEnumDeliveryStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumDeliveryStatusWithAggregatesFilter<$PrismaModel> | $Enums.DeliveryStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumDeliveryStatusFilter<$PrismaModel>
    _max?: NestedEnumDeliveryStatusFilter<$PrismaModel>
  }

  export type NestedEnumAuditActionFilter<$PrismaModel = never> = {
    equals?: $Enums.AuditAction | EnumAuditActionFieldRefInput<$PrismaModel>
    in?: $Enums.AuditAction[] | ListEnumAuditActionFieldRefInput<$PrismaModel>
    notIn?: $Enums.AuditAction[] | ListEnumAuditActionFieldRefInput<$PrismaModel>
    not?: NestedEnumAuditActionFilter<$PrismaModel> | $Enums.AuditAction
  }

  export type NestedEnumAuditEntityTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.AuditEntityType | EnumAuditEntityTypeFieldRefInput<$PrismaModel>
    in?: $Enums.AuditEntityType[] | ListEnumAuditEntityTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.AuditEntityType[] | ListEnumAuditEntityTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumAuditEntityTypeFilter<$PrismaModel> | $Enums.AuditEntityType
  }

  export type NestedEnumAuditActionWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AuditAction | EnumAuditActionFieldRefInput<$PrismaModel>
    in?: $Enums.AuditAction[] | ListEnumAuditActionFieldRefInput<$PrismaModel>
    notIn?: $Enums.AuditAction[] | ListEnumAuditActionFieldRefInput<$PrismaModel>
    not?: NestedEnumAuditActionWithAggregatesFilter<$PrismaModel> | $Enums.AuditAction
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAuditActionFilter<$PrismaModel>
    _max?: NestedEnumAuditActionFilter<$PrismaModel>
  }

  export type NestedEnumAuditEntityTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AuditEntityType | EnumAuditEntityTypeFieldRefInput<$PrismaModel>
    in?: $Enums.AuditEntityType[] | ListEnumAuditEntityTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.AuditEntityType[] | ListEnumAuditEntityTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumAuditEntityTypeWithAggregatesFilter<$PrismaModel> | $Enums.AuditEntityType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAuditEntityTypeFilter<$PrismaModel>
    _max?: NestedEnumAuditEntityTypeFilter<$PrismaModel>
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

  export type UnitCreateWithoutTowerInput = {
    id?: string
    number: string
    label: string
    floor?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    residents?: UserCreateNestedManyWithoutUnitInput
    packages?: PackageCreateNestedManyWithoutUnitInput
  }

  export type UnitUncheckedCreateWithoutTowerInput = {
    id?: string
    number: string
    label: string
    floor?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    residents?: UserUncheckedCreateNestedManyWithoutUnitInput
    packages?: PackageUncheckedCreateNestedManyWithoutUnitInput
  }

  export type UnitCreateOrConnectWithoutTowerInput = {
    where: UnitWhereUniqueInput
    create: XOR<UnitCreateWithoutTowerInput, UnitUncheckedCreateWithoutTowerInput>
  }

  export type UnitCreateManyTowerInputEnvelope = {
    data: UnitCreateManyTowerInput | UnitCreateManyTowerInput[]
    skipDuplicates?: boolean
  }

  export type UnitUpsertWithWhereUniqueWithoutTowerInput = {
    where: UnitWhereUniqueInput
    update: XOR<UnitUpdateWithoutTowerInput, UnitUncheckedUpdateWithoutTowerInput>
    create: XOR<UnitCreateWithoutTowerInput, UnitUncheckedCreateWithoutTowerInput>
  }

  export type UnitUpdateWithWhereUniqueWithoutTowerInput = {
    where: UnitWhereUniqueInput
    data: XOR<UnitUpdateWithoutTowerInput, UnitUncheckedUpdateWithoutTowerInput>
  }

  export type UnitUpdateManyWithWhereWithoutTowerInput = {
    where: UnitScalarWhereInput
    data: XOR<UnitUpdateManyMutationInput, UnitUncheckedUpdateManyWithoutTowerInput>
  }

  export type UnitScalarWhereInput = {
    AND?: UnitScalarWhereInput | UnitScalarWhereInput[]
    OR?: UnitScalarWhereInput[]
    NOT?: UnitScalarWhereInput | UnitScalarWhereInput[]
    id?: StringFilter<"Unit"> | string
    number?: StringFilter<"Unit"> | string
    label?: StringFilter<"Unit"> | string
    floor?: IntNullableFilter<"Unit"> | number | null
    createdAt?: DateTimeFilter<"Unit"> | Date | string
    updatedAt?: DateTimeFilter<"Unit"> | Date | string
    towerId?: StringFilter<"Unit"> | string
  }

  export type TowerCreateWithoutUnitsInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TowerUncheckedCreateWithoutUnitsInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TowerCreateOrConnectWithoutUnitsInput = {
    where: TowerWhereUniqueInput
    create: XOR<TowerCreateWithoutUnitsInput, TowerUncheckedCreateWithoutUnitsInput>
  }

  export type UserCreateWithoutUnitInput = {
    id?: string
    name: string
    email: string
    passwordHash: string
    role: $Enums.Role
    phone?: string | null
    jobTitle?: string | null
    isActive?: boolean
    mustChangePassword?: boolean
    lastLoginAt?: Date | string | null
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    notifications?: NotificationCreateNestedManyWithoutUserInput
    receivedPackages?: PackageCreateNestedManyWithoutReceivedByInput
    residentPackages?: PackageCreateNestedManyWithoutResidentInput
    historyEntries?: PackageHistoryCreateNestedManyWithoutActorInput
    generatedTokens?: PickupTokenCreateNestedManyWithoutGeneratedByInput
    validatedTokens?: PickupTokenCreateNestedManyWithoutValidatedByInput
    pushSubscriptions?: PushSubscriptionCreateNestedManyWithoutUserInput
    auditLogs?: AuditLogCreateNestedManyWithoutActorInput
  }

  export type UserUncheckedCreateWithoutUnitInput = {
    id?: string
    name: string
    email: string
    passwordHash: string
    role: $Enums.Role
    phone?: string | null
    jobTitle?: string | null
    isActive?: boolean
    mustChangePassword?: boolean
    lastLoginAt?: Date | string | null
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    notifications?: NotificationUncheckedCreateNestedManyWithoutUserInput
    receivedPackages?: PackageUncheckedCreateNestedManyWithoutReceivedByInput
    residentPackages?: PackageUncheckedCreateNestedManyWithoutResidentInput
    historyEntries?: PackageHistoryUncheckedCreateNestedManyWithoutActorInput
    generatedTokens?: PickupTokenUncheckedCreateNestedManyWithoutGeneratedByInput
    validatedTokens?: PickupTokenUncheckedCreateNestedManyWithoutValidatedByInput
    pushSubscriptions?: PushSubscriptionUncheckedCreateNestedManyWithoutUserInput
    auditLogs?: AuditLogUncheckedCreateNestedManyWithoutActorInput
  }

  export type UserCreateOrConnectWithoutUnitInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutUnitInput, UserUncheckedCreateWithoutUnitInput>
  }

  export type UserCreateManyUnitInputEnvelope = {
    data: UserCreateManyUnitInput | UserCreateManyUnitInput[]
    skipDuplicates?: boolean
  }

  export type PackageCreateWithoutUnitInput = {
    id?: string
    trackingCode: string
    carrier: string
    description?: string | null
    status?: $Enums.PackageStatus
    receivedAt?: Date | string
    notifiedAt?: Date | string | null
    pickedUpAt?: Date | string | null
    dueAt?: Date | string | null
    notificationSent?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    resident: UserCreateNestedOneWithoutResidentPackagesInput
    receivedBy: UserCreateNestedOneWithoutReceivedPackagesInput
    history?: PackageHistoryCreateNestedManyWithoutPackageInput
    token?: PickupTokenCreateNestedOneWithoutPackageInput
  }

  export type PackageUncheckedCreateWithoutUnitInput = {
    id?: string
    trackingCode: string
    carrier: string
    description?: string | null
    status?: $Enums.PackageStatus
    receivedAt?: Date | string
    notifiedAt?: Date | string | null
    pickedUpAt?: Date | string | null
    dueAt?: Date | string | null
    notificationSent?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    residentId: string
    receivedById: string
    history?: PackageHistoryUncheckedCreateNestedManyWithoutPackageInput
    token?: PickupTokenUncheckedCreateNestedOneWithoutPackageInput
  }

  export type PackageCreateOrConnectWithoutUnitInput = {
    where: PackageWhereUniqueInput
    create: XOR<PackageCreateWithoutUnitInput, PackageUncheckedCreateWithoutUnitInput>
  }

  export type PackageCreateManyUnitInputEnvelope = {
    data: PackageCreateManyUnitInput | PackageCreateManyUnitInput[]
    skipDuplicates?: boolean
  }

  export type TowerUpsertWithoutUnitsInput = {
    update: XOR<TowerUpdateWithoutUnitsInput, TowerUncheckedUpdateWithoutUnitsInput>
    create: XOR<TowerCreateWithoutUnitsInput, TowerUncheckedCreateWithoutUnitsInput>
    where?: TowerWhereInput
  }

  export type TowerUpdateToOneWithWhereWithoutUnitsInput = {
    where?: TowerWhereInput
    data: XOR<TowerUpdateWithoutUnitsInput, TowerUncheckedUpdateWithoutUnitsInput>
  }

  export type TowerUpdateWithoutUnitsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TowerUncheckedUpdateWithoutUnitsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUpsertWithWhereUniqueWithoutUnitInput = {
    where: UserWhereUniqueInput
    update: XOR<UserUpdateWithoutUnitInput, UserUncheckedUpdateWithoutUnitInput>
    create: XOR<UserCreateWithoutUnitInput, UserUncheckedCreateWithoutUnitInput>
  }

  export type UserUpdateWithWhereUniqueWithoutUnitInput = {
    where: UserWhereUniqueInput
    data: XOR<UserUpdateWithoutUnitInput, UserUncheckedUpdateWithoutUnitInput>
  }

  export type UserUpdateManyWithWhereWithoutUnitInput = {
    where: UserScalarWhereInput
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyWithoutUnitInput>
  }

  export type UserScalarWhereInput = {
    AND?: UserScalarWhereInput | UserScalarWhereInput[]
    OR?: UserScalarWhereInput[]
    NOT?: UserScalarWhereInput | UserScalarWhereInput[]
    id?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    passwordHash?: StringFilter<"User"> | string
    role?: EnumRoleFilter<"User"> | $Enums.Role
    phone?: StringNullableFilter<"User"> | string | null
    jobTitle?: StringNullableFilter<"User"> | string | null
    isActive?: BoolFilter<"User"> | boolean
    mustChangePassword?: BoolFilter<"User"> | boolean
    lastLoginAt?: DateTimeNullableFilter<"User"> | Date | string | null
    deletedAt?: DateTimeNullableFilter<"User"> | Date | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    unitId?: StringNullableFilter<"User"> | string | null
  }

  export type PackageUpsertWithWhereUniqueWithoutUnitInput = {
    where: PackageWhereUniqueInput
    update: XOR<PackageUpdateWithoutUnitInput, PackageUncheckedUpdateWithoutUnitInput>
    create: XOR<PackageCreateWithoutUnitInput, PackageUncheckedCreateWithoutUnitInput>
  }

  export type PackageUpdateWithWhereUniqueWithoutUnitInput = {
    where: PackageWhereUniqueInput
    data: XOR<PackageUpdateWithoutUnitInput, PackageUncheckedUpdateWithoutUnitInput>
  }

  export type PackageUpdateManyWithWhereWithoutUnitInput = {
    where: PackageScalarWhereInput
    data: XOR<PackageUpdateManyMutationInput, PackageUncheckedUpdateManyWithoutUnitInput>
  }

  export type PackageScalarWhereInput = {
    AND?: PackageScalarWhereInput | PackageScalarWhereInput[]
    OR?: PackageScalarWhereInput[]
    NOT?: PackageScalarWhereInput | PackageScalarWhereInput[]
    id?: StringFilter<"Package"> | string
    trackingCode?: StringFilter<"Package"> | string
    carrier?: StringFilter<"Package"> | string
    description?: StringNullableFilter<"Package"> | string | null
    status?: EnumPackageStatusFilter<"Package"> | $Enums.PackageStatus
    receivedAt?: DateTimeFilter<"Package"> | Date | string
    notifiedAt?: DateTimeNullableFilter<"Package"> | Date | string | null
    pickedUpAt?: DateTimeNullableFilter<"Package"> | Date | string | null
    dueAt?: DateTimeNullableFilter<"Package"> | Date | string | null
    notificationSent?: BoolFilter<"Package"> | boolean
    createdAt?: DateTimeFilter<"Package"> | Date | string
    updatedAt?: DateTimeFilter<"Package"> | Date | string
    residentId?: StringFilter<"Package"> | string
    unitId?: StringFilter<"Package"> | string
    receivedById?: StringFilter<"Package"> | string
  }

  export type UnitCreateWithoutResidentsInput = {
    id?: string
    number: string
    label: string
    floor?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    tower: TowerCreateNestedOneWithoutUnitsInput
    packages?: PackageCreateNestedManyWithoutUnitInput
  }

  export type UnitUncheckedCreateWithoutResidentsInput = {
    id?: string
    number: string
    label: string
    floor?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    towerId: string
    packages?: PackageUncheckedCreateNestedManyWithoutUnitInput
  }

  export type UnitCreateOrConnectWithoutResidentsInput = {
    where: UnitWhereUniqueInput
    create: XOR<UnitCreateWithoutResidentsInput, UnitUncheckedCreateWithoutResidentsInput>
  }

  export type NotificationCreateWithoutUserInput = {
    id?: string
    type: $Enums.NotificationType
    title: string
    message: string
    href?: string | null
    readAt?: Date | string | null
    createdAt?: Date | string
    deliveries?: NotificationDeliveryCreateNestedManyWithoutNotificationInput
  }

  export type NotificationUncheckedCreateWithoutUserInput = {
    id?: string
    type: $Enums.NotificationType
    title: string
    message: string
    href?: string | null
    readAt?: Date | string | null
    createdAt?: Date | string
    deliveries?: NotificationDeliveryUncheckedCreateNestedManyWithoutNotificationInput
  }

  export type NotificationCreateOrConnectWithoutUserInput = {
    where: NotificationWhereUniqueInput
    create: XOR<NotificationCreateWithoutUserInput, NotificationUncheckedCreateWithoutUserInput>
  }

  export type NotificationCreateManyUserInputEnvelope = {
    data: NotificationCreateManyUserInput | NotificationCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type PackageCreateWithoutReceivedByInput = {
    id?: string
    trackingCode: string
    carrier: string
    description?: string | null
    status?: $Enums.PackageStatus
    receivedAt?: Date | string
    notifiedAt?: Date | string | null
    pickedUpAt?: Date | string | null
    dueAt?: Date | string | null
    notificationSent?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    resident: UserCreateNestedOneWithoutResidentPackagesInput
    unit: UnitCreateNestedOneWithoutPackagesInput
    history?: PackageHistoryCreateNestedManyWithoutPackageInput
    token?: PickupTokenCreateNestedOneWithoutPackageInput
  }

  export type PackageUncheckedCreateWithoutReceivedByInput = {
    id?: string
    trackingCode: string
    carrier: string
    description?: string | null
    status?: $Enums.PackageStatus
    receivedAt?: Date | string
    notifiedAt?: Date | string | null
    pickedUpAt?: Date | string | null
    dueAt?: Date | string | null
    notificationSent?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    residentId: string
    unitId: string
    history?: PackageHistoryUncheckedCreateNestedManyWithoutPackageInput
    token?: PickupTokenUncheckedCreateNestedOneWithoutPackageInput
  }

  export type PackageCreateOrConnectWithoutReceivedByInput = {
    where: PackageWhereUniqueInput
    create: XOR<PackageCreateWithoutReceivedByInput, PackageUncheckedCreateWithoutReceivedByInput>
  }

  export type PackageCreateManyReceivedByInputEnvelope = {
    data: PackageCreateManyReceivedByInput | PackageCreateManyReceivedByInput[]
    skipDuplicates?: boolean
  }

  export type PackageCreateWithoutResidentInput = {
    id?: string
    trackingCode: string
    carrier: string
    description?: string | null
    status?: $Enums.PackageStatus
    receivedAt?: Date | string
    notifiedAt?: Date | string | null
    pickedUpAt?: Date | string | null
    dueAt?: Date | string | null
    notificationSent?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    unit: UnitCreateNestedOneWithoutPackagesInput
    receivedBy: UserCreateNestedOneWithoutReceivedPackagesInput
    history?: PackageHistoryCreateNestedManyWithoutPackageInput
    token?: PickupTokenCreateNestedOneWithoutPackageInput
  }

  export type PackageUncheckedCreateWithoutResidentInput = {
    id?: string
    trackingCode: string
    carrier: string
    description?: string | null
    status?: $Enums.PackageStatus
    receivedAt?: Date | string
    notifiedAt?: Date | string | null
    pickedUpAt?: Date | string | null
    dueAt?: Date | string | null
    notificationSent?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    unitId: string
    receivedById: string
    history?: PackageHistoryUncheckedCreateNestedManyWithoutPackageInput
    token?: PickupTokenUncheckedCreateNestedOneWithoutPackageInput
  }

  export type PackageCreateOrConnectWithoutResidentInput = {
    where: PackageWhereUniqueInput
    create: XOR<PackageCreateWithoutResidentInput, PackageUncheckedCreateWithoutResidentInput>
  }

  export type PackageCreateManyResidentInputEnvelope = {
    data: PackageCreateManyResidentInput | PackageCreateManyResidentInput[]
    skipDuplicates?: boolean
  }

  export type PackageHistoryCreateWithoutActorInput = {
    id?: string
    type: $Enums.HistoryType
    note: string
    createdAt?: Date | string
    fromStatus?: $Enums.PackageStatus | null
    toStatus?: $Enums.PackageStatus | null
    package: PackageCreateNestedOneWithoutHistoryInput
  }

  export type PackageHistoryUncheckedCreateWithoutActorInput = {
    id?: string
    type: $Enums.HistoryType
    note: string
    createdAt?: Date | string
    fromStatus?: $Enums.PackageStatus | null
    toStatus?: $Enums.PackageStatus | null
    packageId: string
  }

  export type PackageHistoryCreateOrConnectWithoutActorInput = {
    where: PackageHistoryWhereUniqueInput
    create: XOR<PackageHistoryCreateWithoutActorInput, PackageHistoryUncheckedCreateWithoutActorInput>
  }

  export type PackageHistoryCreateManyActorInputEnvelope = {
    data: PackageHistoryCreateManyActorInput | PackageHistoryCreateManyActorInput[]
    skipDuplicates?: boolean
  }

  export type PickupTokenCreateWithoutGeneratedByInput = {
    id?: string
    code: string
    qrValue: string
    generatedAt?: Date | string
    expiresAt: Date | string
    usedAt?: Date | string | null
    package: PackageCreateNestedOneWithoutTokenInput
    validatedBy?: UserCreateNestedOneWithoutValidatedTokensInput
  }

  export type PickupTokenUncheckedCreateWithoutGeneratedByInput = {
    id?: string
    code: string
    qrValue: string
    generatedAt?: Date | string
    expiresAt: Date | string
    usedAt?: Date | string | null
    packageId: string
    validatedById?: string | null
  }

  export type PickupTokenCreateOrConnectWithoutGeneratedByInput = {
    where: PickupTokenWhereUniqueInput
    create: XOR<PickupTokenCreateWithoutGeneratedByInput, PickupTokenUncheckedCreateWithoutGeneratedByInput>
  }

  export type PickupTokenCreateManyGeneratedByInputEnvelope = {
    data: PickupTokenCreateManyGeneratedByInput | PickupTokenCreateManyGeneratedByInput[]
    skipDuplicates?: boolean
  }

  export type PickupTokenCreateWithoutValidatedByInput = {
    id?: string
    code: string
    qrValue: string
    generatedAt?: Date | string
    expiresAt: Date | string
    usedAt?: Date | string | null
    package: PackageCreateNestedOneWithoutTokenInput
    generatedBy: UserCreateNestedOneWithoutGeneratedTokensInput
  }

  export type PickupTokenUncheckedCreateWithoutValidatedByInput = {
    id?: string
    code: string
    qrValue: string
    generatedAt?: Date | string
    expiresAt: Date | string
    usedAt?: Date | string | null
    packageId: string
    generatedById: string
  }

  export type PickupTokenCreateOrConnectWithoutValidatedByInput = {
    where: PickupTokenWhereUniqueInput
    create: XOR<PickupTokenCreateWithoutValidatedByInput, PickupTokenUncheckedCreateWithoutValidatedByInput>
  }

  export type PickupTokenCreateManyValidatedByInputEnvelope = {
    data: PickupTokenCreateManyValidatedByInput | PickupTokenCreateManyValidatedByInput[]
    skipDuplicates?: boolean
  }

  export type PushSubscriptionCreateWithoutUserInput = {
    id?: string
    endpoint: string
    p256dh: string
    auth: string
    userAgent?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PushSubscriptionUncheckedCreateWithoutUserInput = {
    id?: string
    endpoint: string
    p256dh: string
    auth: string
    userAgent?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PushSubscriptionCreateOrConnectWithoutUserInput = {
    where: PushSubscriptionWhereUniqueInput
    create: XOR<PushSubscriptionCreateWithoutUserInput, PushSubscriptionUncheckedCreateWithoutUserInput>
  }

  export type PushSubscriptionCreateManyUserInputEnvelope = {
    data: PushSubscriptionCreateManyUserInput | PushSubscriptionCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type AuditLogCreateWithoutActorInput = {
    id?: string
    action: $Enums.AuditAction
    entityType: $Enums.AuditEntityType
    entityId?: string | null
    description: string
    context?: string | null
    createdAt?: Date | string
  }

  export type AuditLogUncheckedCreateWithoutActorInput = {
    id?: string
    action: $Enums.AuditAction
    entityType: $Enums.AuditEntityType
    entityId?: string | null
    description: string
    context?: string | null
    createdAt?: Date | string
  }

  export type AuditLogCreateOrConnectWithoutActorInput = {
    where: AuditLogWhereUniqueInput
    create: XOR<AuditLogCreateWithoutActorInput, AuditLogUncheckedCreateWithoutActorInput>
  }

  export type AuditLogCreateManyActorInputEnvelope = {
    data: AuditLogCreateManyActorInput | AuditLogCreateManyActorInput[]
    skipDuplicates?: boolean
  }

  export type UnitUpsertWithoutResidentsInput = {
    update: XOR<UnitUpdateWithoutResidentsInput, UnitUncheckedUpdateWithoutResidentsInput>
    create: XOR<UnitCreateWithoutResidentsInput, UnitUncheckedCreateWithoutResidentsInput>
    where?: UnitWhereInput
  }

  export type UnitUpdateToOneWithWhereWithoutResidentsInput = {
    where?: UnitWhereInput
    data: XOR<UnitUpdateWithoutResidentsInput, UnitUncheckedUpdateWithoutResidentsInput>
  }

  export type UnitUpdateWithoutResidentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    number?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    floor?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tower?: TowerUpdateOneRequiredWithoutUnitsNestedInput
    packages?: PackageUpdateManyWithoutUnitNestedInput
  }

  export type UnitUncheckedUpdateWithoutResidentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    number?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    floor?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    towerId?: StringFieldUpdateOperationsInput | string
    packages?: PackageUncheckedUpdateManyWithoutUnitNestedInput
  }

  export type NotificationUpsertWithWhereUniqueWithoutUserInput = {
    where: NotificationWhereUniqueInput
    update: XOR<NotificationUpdateWithoutUserInput, NotificationUncheckedUpdateWithoutUserInput>
    create: XOR<NotificationCreateWithoutUserInput, NotificationUncheckedCreateWithoutUserInput>
  }

  export type NotificationUpdateWithWhereUniqueWithoutUserInput = {
    where: NotificationWhereUniqueInput
    data: XOR<NotificationUpdateWithoutUserInput, NotificationUncheckedUpdateWithoutUserInput>
  }

  export type NotificationUpdateManyWithWhereWithoutUserInput = {
    where: NotificationScalarWhereInput
    data: XOR<NotificationUpdateManyMutationInput, NotificationUncheckedUpdateManyWithoutUserInput>
  }

  export type NotificationScalarWhereInput = {
    AND?: NotificationScalarWhereInput | NotificationScalarWhereInput[]
    OR?: NotificationScalarWhereInput[]
    NOT?: NotificationScalarWhereInput | NotificationScalarWhereInput[]
    id?: StringFilter<"Notification"> | string
    type?: EnumNotificationTypeFilter<"Notification"> | $Enums.NotificationType
    title?: StringFilter<"Notification"> | string
    message?: StringFilter<"Notification"> | string
    href?: StringNullableFilter<"Notification"> | string | null
    readAt?: DateTimeNullableFilter<"Notification"> | Date | string | null
    createdAt?: DateTimeFilter<"Notification"> | Date | string
    userId?: StringFilter<"Notification"> | string
  }

  export type PackageUpsertWithWhereUniqueWithoutReceivedByInput = {
    where: PackageWhereUniqueInput
    update: XOR<PackageUpdateWithoutReceivedByInput, PackageUncheckedUpdateWithoutReceivedByInput>
    create: XOR<PackageCreateWithoutReceivedByInput, PackageUncheckedCreateWithoutReceivedByInput>
  }

  export type PackageUpdateWithWhereUniqueWithoutReceivedByInput = {
    where: PackageWhereUniqueInput
    data: XOR<PackageUpdateWithoutReceivedByInput, PackageUncheckedUpdateWithoutReceivedByInput>
  }

  export type PackageUpdateManyWithWhereWithoutReceivedByInput = {
    where: PackageScalarWhereInput
    data: XOR<PackageUpdateManyMutationInput, PackageUncheckedUpdateManyWithoutReceivedByInput>
  }

  export type PackageUpsertWithWhereUniqueWithoutResidentInput = {
    where: PackageWhereUniqueInput
    update: XOR<PackageUpdateWithoutResidentInput, PackageUncheckedUpdateWithoutResidentInput>
    create: XOR<PackageCreateWithoutResidentInput, PackageUncheckedCreateWithoutResidentInput>
  }

  export type PackageUpdateWithWhereUniqueWithoutResidentInput = {
    where: PackageWhereUniqueInput
    data: XOR<PackageUpdateWithoutResidentInput, PackageUncheckedUpdateWithoutResidentInput>
  }

  export type PackageUpdateManyWithWhereWithoutResidentInput = {
    where: PackageScalarWhereInput
    data: XOR<PackageUpdateManyMutationInput, PackageUncheckedUpdateManyWithoutResidentInput>
  }

  export type PackageHistoryUpsertWithWhereUniqueWithoutActorInput = {
    where: PackageHistoryWhereUniqueInput
    update: XOR<PackageHistoryUpdateWithoutActorInput, PackageHistoryUncheckedUpdateWithoutActorInput>
    create: XOR<PackageHistoryCreateWithoutActorInput, PackageHistoryUncheckedCreateWithoutActorInput>
  }

  export type PackageHistoryUpdateWithWhereUniqueWithoutActorInput = {
    where: PackageHistoryWhereUniqueInput
    data: XOR<PackageHistoryUpdateWithoutActorInput, PackageHistoryUncheckedUpdateWithoutActorInput>
  }

  export type PackageHistoryUpdateManyWithWhereWithoutActorInput = {
    where: PackageHistoryScalarWhereInput
    data: XOR<PackageHistoryUpdateManyMutationInput, PackageHistoryUncheckedUpdateManyWithoutActorInput>
  }

  export type PackageHistoryScalarWhereInput = {
    AND?: PackageHistoryScalarWhereInput | PackageHistoryScalarWhereInput[]
    OR?: PackageHistoryScalarWhereInput[]
    NOT?: PackageHistoryScalarWhereInput | PackageHistoryScalarWhereInput[]
    id?: StringFilter<"PackageHistory"> | string
    type?: EnumHistoryTypeFilter<"PackageHistory"> | $Enums.HistoryType
    note?: StringFilter<"PackageHistory"> | string
    createdAt?: DateTimeFilter<"PackageHistory"> | Date | string
    fromStatus?: EnumPackageStatusNullableFilter<"PackageHistory"> | $Enums.PackageStatus | null
    toStatus?: EnumPackageStatusNullableFilter<"PackageHistory"> | $Enums.PackageStatus | null
    packageId?: StringFilter<"PackageHistory"> | string
    actorId?: StringNullableFilter<"PackageHistory"> | string | null
  }

  export type PickupTokenUpsertWithWhereUniqueWithoutGeneratedByInput = {
    where: PickupTokenWhereUniqueInput
    update: XOR<PickupTokenUpdateWithoutGeneratedByInput, PickupTokenUncheckedUpdateWithoutGeneratedByInput>
    create: XOR<PickupTokenCreateWithoutGeneratedByInput, PickupTokenUncheckedCreateWithoutGeneratedByInput>
  }

  export type PickupTokenUpdateWithWhereUniqueWithoutGeneratedByInput = {
    where: PickupTokenWhereUniqueInput
    data: XOR<PickupTokenUpdateWithoutGeneratedByInput, PickupTokenUncheckedUpdateWithoutGeneratedByInput>
  }

  export type PickupTokenUpdateManyWithWhereWithoutGeneratedByInput = {
    where: PickupTokenScalarWhereInput
    data: XOR<PickupTokenUpdateManyMutationInput, PickupTokenUncheckedUpdateManyWithoutGeneratedByInput>
  }

  export type PickupTokenScalarWhereInput = {
    AND?: PickupTokenScalarWhereInput | PickupTokenScalarWhereInput[]
    OR?: PickupTokenScalarWhereInput[]
    NOT?: PickupTokenScalarWhereInput | PickupTokenScalarWhereInput[]
    id?: StringFilter<"PickupToken"> | string
    code?: StringFilter<"PickupToken"> | string
    qrValue?: StringFilter<"PickupToken"> | string
    generatedAt?: DateTimeFilter<"PickupToken"> | Date | string
    expiresAt?: DateTimeFilter<"PickupToken"> | Date | string
    usedAt?: DateTimeNullableFilter<"PickupToken"> | Date | string | null
    packageId?: StringFilter<"PickupToken"> | string
    generatedById?: StringFilter<"PickupToken"> | string
    validatedById?: StringNullableFilter<"PickupToken"> | string | null
  }

  export type PickupTokenUpsertWithWhereUniqueWithoutValidatedByInput = {
    where: PickupTokenWhereUniqueInput
    update: XOR<PickupTokenUpdateWithoutValidatedByInput, PickupTokenUncheckedUpdateWithoutValidatedByInput>
    create: XOR<PickupTokenCreateWithoutValidatedByInput, PickupTokenUncheckedCreateWithoutValidatedByInput>
  }

  export type PickupTokenUpdateWithWhereUniqueWithoutValidatedByInput = {
    where: PickupTokenWhereUniqueInput
    data: XOR<PickupTokenUpdateWithoutValidatedByInput, PickupTokenUncheckedUpdateWithoutValidatedByInput>
  }

  export type PickupTokenUpdateManyWithWhereWithoutValidatedByInput = {
    where: PickupTokenScalarWhereInput
    data: XOR<PickupTokenUpdateManyMutationInput, PickupTokenUncheckedUpdateManyWithoutValidatedByInput>
  }

  export type PushSubscriptionUpsertWithWhereUniqueWithoutUserInput = {
    where: PushSubscriptionWhereUniqueInput
    update: XOR<PushSubscriptionUpdateWithoutUserInput, PushSubscriptionUncheckedUpdateWithoutUserInput>
    create: XOR<PushSubscriptionCreateWithoutUserInput, PushSubscriptionUncheckedCreateWithoutUserInput>
  }

  export type PushSubscriptionUpdateWithWhereUniqueWithoutUserInput = {
    where: PushSubscriptionWhereUniqueInput
    data: XOR<PushSubscriptionUpdateWithoutUserInput, PushSubscriptionUncheckedUpdateWithoutUserInput>
  }

  export type PushSubscriptionUpdateManyWithWhereWithoutUserInput = {
    where: PushSubscriptionScalarWhereInput
    data: XOR<PushSubscriptionUpdateManyMutationInput, PushSubscriptionUncheckedUpdateManyWithoutUserInput>
  }

  export type PushSubscriptionScalarWhereInput = {
    AND?: PushSubscriptionScalarWhereInput | PushSubscriptionScalarWhereInput[]
    OR?: PushSubscriptionScalarWhereInput[]
    NOT?: PushSubscriptionScalarWhereInput | PushSubscriptionScalarWhereInput[]
    id?: StringFilter<"PushSubscription"> | string
    endpoint?: StringFilter<"PushSubscription"> | string
    p256dh?: StringFilter<"PushSubscription"> | string
    auth?: StringFilter<"PushSubscription"> | string
    userAgent?: StringNullableFilter<"PushSubscription"> | string | null
    createdAt?: DateTimeFilter<"PushSubscription"> | Date | string
    updatedAt?: DateTimeFilter<"PushSubscription"> | Date | string
    userId?: StringFilter<"PushSubscription"> | string
  }

  export type AuditLogUpsertWithWhereUniqueWithoutActorInput = {
    where: AuditLogWhereUniqueInput
    update: XOR<AuditLogUpdateWithoutActorInput, AuditLogUncheckedUpdateWithoutActorInput>
    create: XOR<AuditLogCreateWithoutActorInput, AuditLogUncheckedCreateWithoutActorInput>
  }

  export type AuditLogUpdateWithWhereUniqueWithoutActorInput = {
    where: AuditLogWhereUniqueInput
    data: XOR<AuditLogUpdateWithoutActorInput, AuditLogUncheckedUpdateWithoutActorInput>
  }

  export type AuditLogUpdateManyWithWhereWithoutActorInput = {
    where: AuditLogScalarWhereInput
    data: XOR<AuditLogUpdateManyMutationInput, AuditLogUncheckedUpdateManyWithoutActorInput>
  }

  export type AuditLogScalarWhereInput = {
    AND?: AuditLogScalarWhereInput | AuditLogScalarWhereInput[]
    OR?: AuditLogScalarWhereInput[]
    NOT?: AuditLogScalarWhereInput | AuditLogScalarWhereInput[]
    id?: StringFilter<"AuditLog"> | string
    action?: EnumAuditActionFilter<"AuditLog"> | $Enums.AuditAction
    entityType?: EnumAuditEntityTypeFilter<"AuditLog"> | $Enums.AuditEntityType
    entityId?: StringNullableFilter<"AuditLog"> | string | null
    description?: StringFilter<"AuditLog"> | string
    context?: StringNullableFilter<"AuditLog"> | string | null
    createdAt?: DateTimeFilter<"AuditLog"> | Date | string
    actorId?: StringNullableFilter<"AuditLog"> | string | null
  }

  export type UserCreateWithoutResidentPackagesInput = {
    id?: string
    name: string
    email: string
    passwordHash: string
    role: $Enums.Role
    phone?: string | null
    jobTitle?: string | null
    isActive?: boolean
    mustChangePassword?: boolean
    lastLoginAt?: Date | string | null
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    unit?: UnitCreateNestedOneWithoutResidentsInput
    notifications?: NotificationCreateNestedManyWithoutUserInput
    receivedPackages?: PackageCreateNestedManyWithoutReceivedByInput
    historyEntries?: PackageHistoryCreateNestedManyWithoutActorInput
    generatedTokens?: PickupTokenCreateNestedManyWithoutGeneratedByInput
    validatedTokens?: PickupTokenCreateNestedManyWithoutValidatedByInput
    pushSubscriptions?: PushSubscriptionCreateNestedManyWithoutUserInput
    auditLogs?: AuditLogCreateNestedManyWithoutActorInput
  }

  export type UserUncheckedCreateWithoutResidentPackagesInput = {
    id?: string
    name: string
    email: string
    passwordHash: string
    role: $Enums.Role
    phone?: string | null
    jobTitle?: string | null
    isActive?: boolean
    mustChangePassword?: boolean
    lastLoginAt?: Date | string | null
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    unitId?: string | null
    notifications?: NotificationUncheckedCreateNestedManyWithoutUserInput
    receivedPackages?: PackageUncheckedCreateNestedManyWithoutReceivedByInput
    historyEntries?: PackageHistoryUncheckedCreateNestedManyWithoutActorInput
    generatedTokens?: PickupTokenUncheckedCreateNestedManyWithoutGeneratedByInput
    validatedTokens?: PickupTokenUncheckedCreateNestedManyWithoutValidatedByInput
    pushSubscriptions?: PushSubscriptionUncheckedCreateNestedManyWithoutUserInput
    auditLogs?: AuditLogUncheckedCreateNestedManyWithoutActorInput
  }

  export type UserCreateOrConnectWithoutResidentPackagesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutResidentPackagesInput, UserUncheckedCreateWithoutResidentPackagesInput>
  }

  export type UnitCreateWithoutPackagesInput = {
    id?: string
    number: string
    label: string
    floor?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    tower: TowerCreateNestedOneWithoutUnitsInput
    residents?: UserCreateNestedManyWithoutUnitInput
  }

  export type UnitUncheckedCreateWithoutPackagesInput = {
    id?: string
    number: string
    label: string
    floor?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    towerId: string
    residents?: UserUncheckedCreateNestedManyWithoutUnitInput
  }

  export type UnitCreateOrConnectWithoutPackagesInput = {
    where: UnitWhereUniqueInput
    create: XOR<UnitCreateWithoutPackagesInput, UnitUncheckedCreateWithoutPackagesInput>
  }

  export type UserCreateWithoutReceivedPackagesInput = {
    id?: string
    name: string
    email: string
    passwordHash: string
    role: $Enums.Role
    phone?: string | null
    jobTitle?: string | null
    isActive?: boolean
    mustChangePassword?: boolean
    lastLoginAt?: Date | string | null
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    unit?: UnitCreateNestedOneWithoutResidentsInput
    notifications?: NotificationCreateNestedManyWithoutUserInput
    residentPackages?: PackageCreateNestedManyWithoutResidentInput
    historyEntries?: PackageHistoryCreateNestedManyWithoutActorInput
    generatedTokens?: PickupTokenCreateNestedManyWithoutGeneratedByInput
    validatedTokens?: PickupTokenCreateNestedManyWithoutValidatedByInput
    pushSubscriptions?: PushSubscriptionCreateNestedManyWithoutUserInput
    auditLogs?: AuditLogCreateNestedManyWithoutActorInput
  }

  export type UserUncheckedCreateWithoutReceivedPackagesInput = {
    id?: string
    name: string
    email: string
    passwordHash: string
    role: $Enums.Role
    phone?: string | null
    jobTitle?: string | null
    isActive?: boolean
    mustChangePassword?: boolean
    lastLoginAt?: Date | string | null
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    unitId?: string | null
    notifications?: NotificationUncheckedCreateNestedManyWithoutUserInput
    residentPackages?: PackageUncheckedCreateNestedManyWithoutResidentInput
    historyEntries?: PackageHistoryUncheckedCreateNestedManyWithoutActorInput
    generatedTokens?: PickupTokenUncheckedCreateNestedManyWithoutGeneratedByInput
    validatedTokens?: PickupTokenUncheckedCreateNestedManyWithoutValidatedByInput
    pushSubscriptions?: PushSubscriptionUncheckedCreateNestedManyWithoutUserInput
    auditLogs?: AuditLogUncheckedCreateNestedManyWithoutActorInput
  }

  export type UserCreateOrConnectWithoutReceivedPackagesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutReceivedPackagesInput, UserUncheckedCreateWithoutReceivedPackagesInput>
  }

  export type PackageHistoryCreateWithoutPackageInput = {
    id?: string
    type: $Enums.HistoryType
    note: string
    createdAt?: Date | string
    fromStatus?: $Enums.PackageStatus | null
    toStatus?: $Enums.PackageStatus | null
    actor?: UserCreateNestedOneWithoutHistoryEntriesInput
  }

  export type PackageHistoryUncheckedCreateWithoutPackageInput = {
    id?: string
    type: $Enums.HistoryType
    note: string
    createdAt?: Date | string
    fromStatus?: $Enums.PackageStatus | null
    toStatus?: $Enums.PackageStatus | null
    actorId?: string | null
  }

  export type PackageHistoryCreateOrConnectWithoutPackageInput = {
    where: PackageHistoryWhereUniqueInput
    create: XOR<PackageHistoryCreateWithoutPackageInput, PackageHistoryUncheckedCreateWithoutPackageInput>
  }

  export type PackageHistoryCreateManyPackageInputEnvelope = {
    data: PackageHistoryCreateManyPackageInput | PackageHistoryCreateManyPackageInput[]
    skipDuplicates?: boolean
  }

  export type PickupTokenCreateWithoutPackageInput = {
    id?: string
    code: string
    qrValue: string
    generatedAt?: Date | string
    expiresAt: Date | string
    usedAt?: Date | string | null
    generatedBy: UserCreateNestedOneWithoutGeneratedTokensInput
    validatedBy?: UserCreateNestedOneWithoutValidatedTokensInput
  }

  export type PickupTokenUncheckedCreateWithoutPackageInput = {
    id?: string
    code: string
    qrValue: string
    generatedAt?: Date | string
    expiresAt: Date | string
    usedAt?: Date | string | null
    generatedById: string
    validatedById?: string | null
  }

  export type PickupTokenCreateOrConnectWithoutPackageInput = {
    where: PickupTokenWhereUniqueInput
    create: XOR<PickupTokenCreateWithoutPackageInput, PickupTokenUncheckedCreateWithoutPackageInput>
  }

  export type UserUpsertWithoutResidentPackagesInput = {
    update: XOR<UserUpdateWithoutResidentPackagesInput, UserUncheckedUpdateWithoutResidentPackagesInput>
    create: XOR<UserCreateWithoutResidentPackagesInput, UserUncheckedCreateWithoutResidentPackagesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutResidentPackagesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutResidentPackagesInput, UserUncheckedUpdateWithoutResidentPackagesInput>
  }

  export type UserUpdateWithoutResidentPackagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    jobTitle?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    mustChangePassword?: BoolFieldUpdateOperationsInput | boolean
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    unit?: UnitUpdateOneWithoutResidentsNestedInput
    notifications?: NotificationUpdateManyWithoutUserNestedInput
    receivedPackages?: PackageUpdateManyWithoutReceivedByNestedInput
    historyEntries?: PackageHistoryUpdateManyWithoutActorNestedInput
    generatedTokens?: PickupTokenUpdateManyWithoutGeneratedByNestedInput
    validatedTokens?: PickupTokenUpdateManyWithoutValidatedByNestedInput
    pushSubscriptions?: PushSubscriptionUpdateManyWithoutUserNestedInput
    auditLogs?: AuditLogUpdateManyWithoutActorNestedInput
  }

  export type UserUncheckedUpdateWithoutResidentPackagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    jobTitle?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    mustChangePassword?: BoolFieldUpdateOperationsInput | boolean
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    unitId?: NullableStringFieldUpdateOperationsInput | string | null
    notifications?: NotificationUncheckedUpdateManyWithoutUserNestedInput
    receivedPackages?: PackageUncheckedUpdateManyWithoutReceivedByNestedInput
    historyEntries?: PackageHistoryUncheckedUpdateManyWithoutActorNestedInput
    generatedTokens?: PickupTokenUncheckedUpdateManyWithoutGeneratedByNestedInput
    validatedTokens?: PickupTokenUncheckedUpdateManyWithoutValidatedByNestedInput
    pushSubscriptions?: PushSubscriptionUncheckedUpdateManyWithoutUserNestedInput
    auditLogs?: AuditLogUncheckedUpdateManyWithoutActorNestedInput
  }

  export type UnitUpsertWithoutPackagesInput = {
    update: XOR<UnitUpdateWithoutPackagesInput, UnitUncheckedUpdateWithoutPackagesInput>
    create: XOR<UnitCreateWithoutPackagesInput, UnitUncheckedCreateWithoutPackagesInput>
    where?: UnitWhereInput
  }

  export type UnitUpdateToOneWithWhereWithoutPackagesInput = {
    where?: UnitWhereInput
    data: XOR<UnitUpdateWithoutPackagesInput, UnitUncheckedUpdateWithoutPackagesInput>
  }

  export type UnitUpdateWithoutPackagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    number?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    floor?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tower?: TowerUpdateOneRequiredWithoutUnitsNestedInput
    residents?: UserUpdateManyWithoutUnitNestedInput
  }

  export type UnitUncheckedUpdateWithoutPackagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    number?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    floor?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    towerId?: StringFieldUpdateOperationsInput | string
    residents?: UserUncheckedUpdateManyWithoutUnitNestedInput
  }

  export type UserUpsertWithoutReceivedPackagesInput = {
    update: XOR<UserUpdateWithoutReceivedPackagesInput, UserUncheckedUpdateWithoutReceivedPackagesInput>
    create: XOR<UserCreateWithoutReceivedPackagesInput, UserUncheckedCreateWithoutReceivedPackagesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutReceivedPackagesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutReceivedPackagesInput, UserUncheckedUpdateWithoutReceivedPackagesInput>
  }

  export type UserUpdateWithoutReceivedPackagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    jobTitle?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    mustChangePassword?: BoolFieldUpdateOperationsInput | boolean
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    unit?: UnitUpdateOneWithoutResidentsNestedInput
    notifications?: NotificationUpdateManyWithoutUserNestedInput
    residentPackages?: PackageUpdateManyWithoutResidentNestedInput
    historyEntries?: PackageHistoryUpdateManyWithoutActorNestedInput
    generatedTokens?: PickupTokenUpdateManyWithoutGeneratedByNestedInput
    validatedTokens?: PickupTokenUpdateManyWithoutValidatedByNestedInput
    pushSubscriptions?: PushSubscriptionUpdateManyWithoutUserNestedInput
    auditLogs?: AuditLogUpdateManyWithoutActorNestedInput
  }

  export type UserUncheckedUpdateWithoutReceivedPackagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    jobTitle?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    mustChangePassword?: BoolFieldUpdateOperationsInput | boolean
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    unitId?: NullableStringFieldUpdateOperationsInput | string | null
    notifications?: NotificationUncheckedUpdateManyWithoutUserNestedInput
    residentPackages?: PackageUncheckedUpdateManyWithoutResidentNestedInput
    historyEntries?: PackageHistoryUncheckedUpdateManyWithoutActorNestedInput
    generatedTokens?: PickupTokenUncheckedUpdateManyWithoutGeneratedByNestedInput
    validatedTokens?: PickupTokenUncheckedUpdateManyWithoutValidatedByNestedInput
    pushSubscriptions?: PushSubscriptionUncheckedUpdateManyWithoutUserNestedInput
    auditLogs?: AuditLogUncheckedUpdateManyWithoutActorNestedInput
  }

  export type PackageHistoryUpsertWithWhereUniqueWithoutPackageInput = {
    where: PackageHistoryWhereUniqueInput
    update: XOR<PackageHistoryUpdateWithoutPackageInput, PackageHistoryUncheckedUpdateWithoutPackageInput>
    create: XOR<PackageHistoryCreateWithoutPackageInput, PackageHistoryUncheckedCreateWithoutPackageInput>
  }

  export type PackageHistoryUpdateWithWhereUniqueWithoutPackageInput = {
    where: PackageHistoryWhereUniqueInput
    data: XOR<PackageHistoryUpdateWithoutPackageInput, PackageHistoryUncheckedUpdateWithoutPackageInput>
  }

  export type PackageHistoryUpdateManyWithWhereWithoutPackageInput = {
    where: PackageHistoryScalarWhereInput
    data: XOR<PackageHistoryUpdateManyMutationInput, PackageHistoryUncheckedUpdateManyWithoutPackageInput>
  }

  export type PickupTokenUpsertWithoutPackageInput = {
    update: XOR<PickupTokenUpdateWithoutPackageInput, PickupTokenUncheckedUpdateWithoutPackageInput>
    create: XOR<PickupTokenCreateWithoutPackageInput, PickupTokenUncheckedCreateWithoutPackageInput>
    where?: PickupTokenWhereInput
  }

  export type PickupTokenUpdateToOneWithWhereWithoutPackageInput = {
    where?: PickupTokenWhereInput
    data: XOR<PickupTokenUpdateWithoutPackageInput, PickupTokenUncheckedUpdateWithoutPackageInput>
  }

  export type PickupTokenUpdateWithoutPackageInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    qrValue?: StringFieldUpdateOperationsInput | string
    generatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    usedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    generatedBy?: UserUpdateOneRequiredWithoutGeneratedTokensNestedInput
    validatedBy?: UserUpdateOneWithoutValidatedTokensNestedInput
  }

  export type PickupTokenUncheckedUpdateWithoutPackageInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    qrValue?: StringFieldUpdateOperationsInput | string
    generatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    usedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    generatedById?: StringFieldUpdateOperationsInput | string
    validatedById?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PackageCreateWithoutTokenInput = {
    id?: string
    trackingCode: string
    carrier: string
    description?: string | null
    status?: $Enums.PackageStatus
    receivedAt?: Date | string
    notifiedAt?: Date | string | null
    pickedUpAt?: Date | string | null
    dueAt?: Date | string | null
    notificationSent?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    resident: UserCreateNestedOneWithoutResidentPackagesInput
    unit: UnitCreateNestedOneWithoutPackagesInput
    receivedBy: UserCreateNestedOneWithoutReceivedPackagesInput
    history?: PackageHistoryCreateNestedManyWithoutPackageInput
  }

  export type PackageUncheckedCreateWithoutTokenInput = {
    id?: string
    trackingCode: string
    carrier: string
    description?: string | null
    status?: $Enums.PackageStatus
    receivedAt?: Date | string
    notifiedAt?: Date | string | null
    pickedUpAt?: Date | string | null
    dueAt?: Date | string | null
    notificationSent?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    residentId: string
    unitId: string
    receivedById: string
    history?: PackageHistoryUncheckedCreateNestedManyWithoutPackageInput
  }

  export type PackageCreateOrConnectWithoutTokenInput = {
    where: PackageWhereUniqueInput
    create: XOR<PackageCreateWithoutTokenInput, PackageUncheckedCreateWithoutTokenInput>
  }

  export type UserCreateWithoutGeneratedTokensInput = {
    id?: string
    name: string
    email: string
    passwordHash: string
    role: $Enums.Role
    phone?: string | null
    jobTitle?: string | null
    isActive?: boolean
    mustChangePassword?: boolean
    lastLoginAt?: Date | string | null
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    unit?: UnitCreateNestedOneWithoutResidentsInput
    notifications?: NotificationCreateNestedManyWithoutUserInput
    receivedPackages?: PackageCreateNestedManyWithoutReceivedByInput
    residentPackages?: PackageCreateNestedManyWithoutResidentInput
    historyEntries?: PackageHistoryCreateNestedManyWithoutActorInput
    validatedTokens?: PickupTokenCreateNestedManyWithoutValidatedByInput
    pushSubscriptions?: PushSubscriptionCreateNestedManyWithoutUserInput
    auditLogs?: AuditLogCreateNestedManyWithoutActorInput
  }

  export type UserUncheckedCreateWithoutGeneratedTokensInput = {
    id?: string
    name: string
    email: string
    passwordHash: string
    role: $Enums.Role
    phone?: string | null
    jobTitle?: string | null
    isActive?: boolean
    mustChangePassword?: boolean
    lastLoginAt?: Date | string | null
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    unitId?: string | null
    notifications?: NotificationUncheckedCreateNestedManyWithoutUserInput
    receivedPackages?: PackageUncheckedCreateNestedManyWithoutReceivedByInput
    residentPackages?: PackageUncheckedCreateNestedManyWithoutResidentInput
    historyEntries?: PackageHistoryUncheckedCreateNestedManyWithoutActorInput
    validatedTokens?: PickupTokenUncheckedCreateNestedManyWithoutValidatedByInput
    pushSubscriptions?: PushSubscriptionUncheckedCreateNestedManyWithoutUserInput
    auditLogs?: AuditLogUncheckedCreateNestedManyWithoutActorInput
  }

  export type UserCreateOrConnectWithoutGeneratedTokensInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutGeneratedTokensInput, UserUncheckedCreateWithoutGeneratedTokensInput>
  }

  export type UserCreateWithoutValidatedTokensInput = {
    id?: string
    name: string
    email: string
    passwordHash: string
    role: $Enums.Role
    phone?: string | null
    jobTitle?: string | null
    isActive?: boolean
    mustChangePassword?: boolean
    lastLoginAt?: Date | string | null
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    unit?: UnitCreateNestedOneWithoutResidentsInput
    notifications?: NotificationCreateNestedManyWithoutUserInput
    receivedPackages?: PackageCreateNestedManyWithoutReceivedByInput
    residentPackages?: PackageCreateNestedManyWithoutResidentInput
    historyEntries?: PackageHistoryCreateNestedManyWithoutActorInput
    generatedTokens?: PickupTokenCreateNestedManyWithoutGeneratedByInput
    pushSubscriptions?: PushSubscriptionCreateNestedManyWithoutUserInput
    auditLogs?: AuditLogCreateNestedManyWithoutActorInput
  }

  export type UserUncheckedCreateWithoutValidatedTokensInput = {
    id?: string
    name: string
    email: string
    passwordHash: string
    role: $Enums.Role
    phone?: string | null
    jobTitle?: string | null
    isActive?: boolean
    mustChangePassword?: boolean
    lastLoginAt?: Date | string | null
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    unitId?: string | null
    notifications?: NotificationUncheckedCreateNestedManyWithoutUserInput
    receivedPackages?: PackageUncheckedCreateNestedManyWithoutReceivedByInput
    residentPackages?: PackageUncheckedCreateNestedManyWithoutResidentInput
    historyEntries?: PackageHistoryUncheckedCreateNestedManyWithoutActorInput
    generatedTokens?: PickupTokenUncheckedCreateNestedManyWithoutGeneratedByInput
    pushSubscriptions?: PushSubscriptionUncheckedCreateNestedManyWithoutUserInput
    auditLogs?: AuditLogUncheckedCreateNestedManyWithoutActorInput
  }

  export type UserCreateOrConnectWithoutValidatedTokensInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutValidatedTokensInput, UserUncheckedCreateWithoutValidatedTokensInput>
  }

  export type PackageUpsertWithoutTokenInput = {
    update: XOR<PackageUpdateWithoutTokenInput, PackageUncheckedUpdateWithoutTokenInput>
    create: XOR<PackageCreateWithoutTokenInput, PackageUncheckedCreateWithoutTokenInput>
    where?: PackageWhereInput
  }

  export type PackageUpdateToOneWithWhereWithoutTokenInput = {
    where?: PackageWhereInput
    data: XOR<PackageUpdateWithoutTokenInput, PackageUncheckedUpdateWithoutTokenInput>
  }

  export type PackageUpdateWithoutTokenInput = {
    id?: StringFieldUpdateOperationsInput | string
    trackingCode?: StringFieldUpdateOperationsInput | string
    carrier?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumPackageStatusFieldUpdateOperationsInput | $Enums.PackageStatus
    receivedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    notifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    pickedUpAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dueAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    notificationSent?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    resident?: UserUpdateOneRequiredWithoutResidentPackagesNestedInput
    unit?: UnitUpdateOneRequiredWithoutPackagesNestedInput
    receivedBy?: UserUpdateOneRequiredWithoutReceivedPackagesNestedInput
    history?: PackageHistoryUpdateManyWithoutPackageNestedInput
  }

  export type PackageUncheckedUpdateWithoutTokenInput = {
    id?: StringFieldUpdateOperationsInput | string
    trackingCode?: StringFieldUpdateOperationsInput | string
    carrier?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumPackageStatusFieldUpdateOperationsInput | $Enums.PackageStatus
    receivedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    notifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    pickedUpAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dueAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    notificationSent?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    residentId?: StringFieldUpdateOperationsInput | string
    unitId?: StringFieldUpdateOperationsInput | string
    receivedById?: StringFieldUpdateOperationsInput | string
    history?: PackageHistoryUncheckedUpdateManyWithoutPackageNestedInput
  }

  export type UserUpsertWithoutGeneratedTokensInput = {
    update: XOR<UserUpdateWithoutGeneratedTokensInput, UserUncheckedUpdateWithoutGeneratedTokensInput>
    create: XOR<UserCreateWithoutGeneratedTokensInput, UserUncheckedCreateWithoutGeneratedTokensInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutGeneratedTokensInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutGeneratedTokensInput, UserUncheckedUpdateWithoutGeneratedTokensInput>
  }

  export type UserUpdateWithoutGeneratedTokensInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    jobTitle?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    mustChangePassword?: BoolFieldUpdateOperationsInput | boolean
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    unit?: UnitUpdateOneWithoutResidentsNestedInput
    notifications?: NotificationUpdateManyWithoutUserNestedInput
    receivedPackages?: PackageUpdateManyWithoutReceivedByNestedInput
    residentPackages?: PackageUpdateManyWithoutResidentNestedInput
    historyEntries?: PackageHistoryUpdateManyWithoutActorNestedInput
    validatedTokens?: PickupTokenUpdateManyWithoutValidatedByNestedInput
    pushSubscriptions?: PushSubscriptionUpdateManyWithoutUserNestedInput
    auditLogs?: AuditLogUpdateManyWithoutActorNestedInput
  }

  export type UserUncheckedUpdateWithoutGeneratedTokensInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    jobTitle?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    mustChangePassword?: BoolFieldUpdateOperationsInput | boolean
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    unitId?: NullableStringFieldUpdateOperationsInput | string | null
    notifications?: NotificationUncheckedUpdateManyWithoutUserNestedInput
    receivedPackages?: PackageUncheckedUpdateManyWithoutReceivedByNestedInput
    residentPackages?: PackageUncheckedUpdateManyWithoutResidentNestedInput
    historyEntries?: PackageHistoryUncheckedUpdateManyWithoutActorNestedInput
    validatedTokens?: PickupTokenUncheckedUpdateManyWithoutValidatedByNestedInput
    pushSubscriptions?: PushSubscriptionUncheckedUpdateManyWithoutUserNestedInput
    auditLogs?: AuditLogUncheckedUpdateManyWithoutActorNestedInput
  }

  export type UserUpsertWithoutValidatedTokensInput = {
    update: XOR<UserUpdateWithoutValidatedTokensInput, UserUncheckedUpdateWithoutValidatedTokensInput>
    create: XOR<UserCreateWithoutValidatedTokensInput, UserUncheckedCreateWithoutValidatedTokensInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutValidatedTokensInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutValidatedTokensInput, UserUncheckedUpdateWithoutValidatedTokensInput>
  }

  export type UserUpdateWithoutValidatedTokensInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    jobTitle?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    mustChangePassword?: BoolFieldUpdateOperationsInput | boolean
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    unit?: UnitUpdateOneWithoutResidentsNestedInput
    notifications?: NotificationUpdateManyWithoutUserNestedInput
    receivedPackages?: PackageUpdateManyWithoutReceivedByNestedInput
    residentPackages?: PackageUpdateManyWithoutResidentNestedInput
    historyEntries?: PackageHistoryUpdateManyWithoutActorNestedInput
    generatedTokens?: PickupTokenUpdateManyWithoutGeneratedByNestedInput
    pushSubscriptions?: PushSubscriptionUpdateManyWithoutUserNestedInput
    auditLogs?: AuditLogUpdateManyWithoutActorNestedInput
  }

  export type UserUncheckedUpdateWithoutValidatedTokensInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    jobTitle?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    mustChangePassword?: BoolFieldUpdateOperationsInput | boolean
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    unitId?: NullableStringFieldUpdateOperationsInput | string | null
    notifications?: NotificationUncheckedUpdateManyWithoutUserNestedInput
    receivedPackages?: PackageUncheckedUpdateManyWithoutReceivedByNestedInput
    residentPackages?: PackageUncheckedUpdateManyWithoutResidentNestedInput
    historyEntries?: PackageHistoryUncheckedUpdateManyWithoutActorNestedInput
    generatedTokens?: PickupTokenUncheckedUpdateManyWithoutGeneratedByNestedInput
    pushSubscriptions?: PushSubscriptionUncheckedUpdateManyWithoutUserNestedInput
    auditLogs?: AuditLogUncheckedUpdateManyWithoutActorNestedInput
  }

  export type PackageCreateWithoutHistoryInput = {
    id?: string
    trackingCode: string
    carrier: string
    description?: string | null
    status?: $Enums.PackageStatus
    receivedAt?: Date | string
    notifiedAt?: Date | string | null
    pickedUpAt?: Date | string | null
    dueAt?: Date | string | null
    notificationSent?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    resident: UserCreateNestedOneWithoutResidentPackagesInput
    unit: UnitCreateNestedOneWithoutPackagesInput
    receivedBy: UserCreateNestedOneWithoutReceivedPackagesInput
    token?: PickupTokenCreateNestedOneWithoutPackageInput
  }

  export type PackageUncheckedCreateWithoutHistoryInput = {
    id?: string
    trackingCode: string
    carrier: string
    description?: string | null
    status?: $Enums.PackageStatus
    receivedAt?: Date | string
    notifiedAt?: Date | string | null
    pickedUpAt?: Date | string | null
    dueAt?: Date | string | null
    notificationSent?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    residentId: string
    unitId: string
    receivedById: string
    token?: PickupTokenUncheckedCreateNestedOneWithoutPackageInput
  }

  export type PackageCreateOrConnectWithoutHistoryInput = {
    where: PackageWhereUniqueInput
    create: XOR<PackageCreateWithoutHistoryInput, PackageUncheckedCreateWithoutHistoryInput>
  }

  export type UserCreateWithoutHistoryEntriesInput = {
    id?: string
    name: string
    email: string
    passwordHash: string
    role: $Enums.Role
    phone?: string | null
    jobTitle?: string | null
    isActive?: boolean
    mustChangePassword?: boolean
    lastLoginAt?: Date | string | null
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    unit?: UnitCreateNestedOneWithoutResidentsInput
    notifications?: NotificationCreateNestedManyWithoutUserInput
    receivedPackages?: PackageCreateNestedManyWithoutReceivedByInput
    residentPackages?: PackageCreateNestedManyWithoutResidentInput
    generatedTokens?: PickupTokenCreateNestedManyWithoutGeneratedByInput
    validatedTokens?: PickupTokenCreateNestedManyWithoutValidatedByInput
    pushSubscriptions?: PushSubscriptionCreateNestedManyWithoutUserInput
    auditLogs?: AuditLogCreateNestedManyWithoutActorInput
  }

  export type UserUncheckedCreateWithoutHistoryEntriesInput = {
    id?: string
    name: string
    email: string
    passwordHash: string
    role: $Enums.Role
    phone?: string | null
    jobTitle?: string | null
    isActive?: boolean
    mustChangePassword?: boolean
    lastLoginAt?: Date | string | null
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    unitId?: string | null
    notifications?: NotificationUncheckedCreateNestedManyWithoutUserInput
    receivedPackages?: PackageUncheckedCreateNestedManyWithoutReceivedByInput
    residentPackages?: PackageUncheckedCreateNestedManyWithoutResidentInput
    generatedTokens?: PickupTokenUncheckedCreateNestedManyWithoutGeneratedByInput
    validatedTokens?: PickupTokenUncheckedCreateNestedManyWithoutValidatedByInput
    pushSubscriptions?: PushSubscriptionUncheckedCreateNestedManyWithoutUserInput
    auditLogs?: AuditLogUncheckedCreateNestedManyWithoutActorInput
  }

  export type UserCreateOrConnectWithoutHistoryEntriesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutHistoryEntriesInput, UserUncheckedCreateWithoutHistoryEntriesInput>
  }

  export type PackageUpsertWithoutHistoryInput = {
    update: XOR<PackageUpdateWithoutHistoryInput, PackageUncheckedUpdateWithoutHistoryInput>
    create: XOR<PackageCreateWithoutHistoryInput, PackageUncheckedCreateWithoutHistoryInput>
    where?: PackageWhereInput
  }

  export type PackageUpdateToOneWithWhereWithoutHistoryInput = {
    where?: PackageWhereInput
    data: XOR<PackageUpdateWithoutHistoryInput, PackageUncheckedUpdateWithoutHistoryInput>
  }

  export type PackageUpdateWithoutHistoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    trackingCode?: StringFieldUpdateOperationsInput | string
    carrier?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumPackageStatusFieldUpdateOperationsInput | $Enums.PackageStatus
    receivedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    notifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    pickedUpAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dueAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    notificationSent?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    resident?: UserUpdateOneRequiredWithoutResidentPackagesNestedInput
    unit?: UnitUpdateOneRequiredWithoutPackagesNestedInput
    receivedBy?: UserUpdateOneRequiredWithoutReceivedPackagesNestedInput
    token?: PickupTokenUpdateOneWithoutPackageNestedInput
  }

  export type PackageUncheckedUpdateWithoutHistoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    trackingCode?: StringFieldUpdateOperationsInput | string
    carrier?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumPackageStatusFieldUpdateOperationsInput | $Enums.PackageStatus
    receivedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    notifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    pickedUpAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dueAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    notificationSent?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    residentId?: StringFieldUpdateOperationsInput | string
    unitId?: StringFieldUpdateOperationsInput | string
    receivedById?: StringFieldUpdateOperationsInput | string
    token?: PickupTokenUncheckedUpdateOneWithoutPackageNestedInput
  }

  export type UserUpsertWithoutHistoryEntriesInput = {
    update: XOR<UserUpdateWithoutHistoryEntriesInput, UserUncheckedUpdateWithoutHistoryEntriesInput>
    create: XOR<UserCreateWithoutHistoryEntriesInput, UserUncheckedCreateWithoutHistoryEntriesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutHistoryEntriesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutHistoryEntriesInput, UserUncheckedUpdateWithoutHistoryEntriesInput>
  }

  export type UserUpdateWithoutHistoryEntriesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    jobTitle?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    mustChangePassword?: BoolFieldUpdateOperationsInput | boolean
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    unit?: UnitUpdateOneWithoutResidentsNestedInput
    notifications?: NotificationUpdateManyWithoutUserNestedInput
    receivedPackages?: PackageUpdateManyWithoutReceivedByNestedInput
    residentPackages?: PackageUpdateManyWithoutResidentNestedInput
    generatedTokens?: PickupTokenUpdateManyWithoutGeneratedByNestedInput
    validatedTokens?: PickupTokenUpdateManyWithoutValidatedByNestedInput
    pushSubscriptions?: PushSubscriptionUpdateManyWithoutUserNestedInput
    auditLogs?: AuditLogUpdateManyWithoutActorNestedInput
  }

  export type UserUncheckedUpdateWithoutHistoryEntriesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    jobTitle?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    mustChangePassword?: BoolFieldUpdateOperationsInput | boolean
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    unitId?: NullableStringFieldUpdateOperationsInput | string | null
    notifications?: NotificationUncheckedUpdateManyWithoutUserNestedInput
    receivedPackages?: PackageUncheckedUpdateManyWithoutReceivedByNestedInput
    residentPackages?: PackageUncheckedUpdateManyWithoutResidentNestedInput
    generatedTokens?: PickupTokenUncheckedUpdateManyWithoutGeneratedByNestedInput
    validatedTokens?: PickupTokenUncheckedUpdateManyWithoutValidatedByNestedInput
    pushSubscriptions?: PushSubscriptionUncheckedUpdateManyWithoutUserNestedInput
    auditLogs?: AuditLogUncheckedUpdateManyWithoutActorNestedInput
  }

  export type UserCreateWithoutNotificationsInput = {
    id?: string
    name: string
    email: string
    passwordHash: string
    role: $Enums.Role
    phone?: string | null
    jobTitle?: string | null
    isActive?: boolean
    mustChangePassword?: boolean
    lastLoginAt?: Date | string | null
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    unit?: UnitCreateNestedOneWithoutResidentsInput
    receivedPackages?: PackageCreateNestedManyWithoutReceivedByInput
    residentPackages?: PackageCreateNestedManyWithoutResidentInput
    historyEntries?: PackageHistoryCreateNestedManyWithoutActorInput
    generatedTokens?: PickupTokenCreateNestedManyWithoutGeneratedByInput
    validatedTokens?: PickupTokenCreateNestedManyWithoutValidatedByInput
    pushSubscriptions?: PushSubscriptionCreateNestedManyWithoutUserInput
    auditLogs?: AuditLogCreateNestedManyWithoutActorInput
  }

  export type UserUncheckedCreateWithoutNotificationsInput = {
    id?: string
    name: string
    email: string
    passwordHash: string
    role: $Enums.Role
    phone?: string | null
    jobTitle?: string | null
    isActive?: boolean
    mustChangePassword?: boolean
    lastLoginAt?: Date | string | null
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    unitId?: string | null
    receivedPackages?: PackageUncheckedCreateNestedManyWithoutReceivedByInput
    residentPackages?: PackageUncheckedCreateNestedManyWithoutResidentInput
    historyEntries?: PackageHistoryUncheckedCreateNestedManyWithoutActorInput
    generatedTokens?: PickupTokenUncheckedCreateNestedManyWithoutGeneratedByInput
    validatedTokens?: PickupTokenUncheckedCreateNestedManyWithoutValidatedByInput
    pushSubscriptions?: PushSubscriptionUncheckedCreateNestedManyWithoutUserInput
    auditLogs?: AuditLogUncheckedCreateNestedManyWithoutActorInput
  }

  export type UserCreateOrConnectWithoutNotificationsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutNotificationsInput, UserUncheckedCreateWithoutNotificationsInput>
  }

  export type NotificationDeliveryCreateWithoutNotificationInput = {
    id?: string
    channel: $Enums.DeliveryChannel
    status?: $Enums.DeliveryStatus
    recipient?: string | null
    providerMessageId?: string | null
    errorMessage?: string | null
    attemptedAt?: Date | string | null
    createdAt?: Date | string
  }

  export type NotificationDeliveryUncheckedCreateWithoutNotificationInput = {
    id?: string
    channel: $Enums.DeliveryChannel
    status?: $Enums.DeliveryStatus
    recipient?: string | null
    providerMessageId?: string | null
    errorMessage?: string | null
    attemptedAt?: Date | string | null
    createdAt?: Date | string
  }

  export type NotificationDeliveryCreateOrConnectWithoutNotificationInput = {
    where: NotificationDeliveryWhereUniqueInput
    create: XOR<NotificationDeliveryCreateWithoutNotificationInput, NotificationDeliveryUncheckedCreateWithoutNotificationInput>
  }

  export type NotificationDeliveryCreateManyNotificationInputEnvelope = {
    data: NotificationDeliveryCreateManyNotificationInput | NotificationDeliveryCreateManyNotificationInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutNotificationsInput = {
    update: XOR<UserUpdateWithoutNotificationsInput, UserUncheckedUpdateWithoutNotificationsInput>
    create: XOR<UserCreateWithoutNotificationsInput, UserUncheckedCreateWithoutNotificationsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutNotificationsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutNotificationsInput, UserUncheckedUpdateWithoutNotificationsInput>
  }

  export type UserUpdateWithoutNotificationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    jobTitle?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    mustChangePassword?: BoolFieldUpdateOperationsInput | boolean
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    unit?: UnitUpdateOneWithoutResidentsNestedInput
    receivedPackages?: PackageUpdateManyWithoutReceivedByNestedInput
    residentPackages?: PackageUpdateManyWithoutResidentNestedInput
    historyEntries?: PackageHistoryUpdateManyWithoutActorNestedInput
    generatedTokens?: PickupTokenUpdateManyWithoutGeneratedByNestedInput
    validatedTokens?: PickupTokenUpdateManyWithoutValidatedByNestedInput
    pushSubscriptions?: PushSubscriptionUpdateManyWithoutUserNestedInput
    auditLogs?: AuditLogUpdateManyWithoutActorNestedInput
  }

  export type UserUncheckedUpdateWithoutNotificationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    jobTitle?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    mustChangePassword?: BoolFieldUpdateOperationsInput | boolean
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    unitId?: NullableStringFieldUpdateOperationsInput | string | null
    receivedPackages?: PackageUncheckedUpdateManyWithoutReceivedByNestedInput
    residentPackages?: PackageUncheckedUpdateManyWithoutResidentNestedInput
    historyEntries?: PackageHistoryUncheckedUpdateManyWithoutActorNestedInput
    generatedTokens?: PickupTokenUncheckedUpdateManyWithoutGeneratedByNestedInput
    validatedTokens?: PickupTokenUncheckedUpdateManyWithoutValidatedByNestedInput
    pushSubscriptions?: PushSubscriptionUncheckedUpdateManyWithoutUserNestedInput
    auditLogs?: AuditLogUncheckedUpdateManyWithoutActorNestedInput
  }

  export type NotificationDeliveryUpsertWithWhereUniqueWithoutNotificationInput = {
    where: NotificationDeliveryWhereUniqueInput
    update: XOR<NotificationDeliveryUpdateWithoutNotificationInput, NotificationDeliveryUncheckedUpdateWithoutNotificationInput>
    create: XOR<NotificationDeliveryCreateWithoutNotificationInput, NotificationDeliveryUncheckedCreateWithoutNotificationInput>
  }

  export type NotificationDeliveryUpdateWithWhereUniqueWithoutNotificationInput = {
    where: NotificationDeliveryWhereUniqueInput
    data: XOR<NotificationDeliveryUpdateWithoutNotificationInput, NotificationDeliveryUncheckedUpdateWithoutNotificationInput>
  }

  export type NotificationDeliveryUpdateManyWithWhereWithoutNotificationInput = {
    where: NotificationDeliveryScalarWhereInput
    data: XOR<NotificationDeliveryUpdateManyMutationInput, NotificationDeliveryUncheckedUpdateManyWithoutNotificationInput>
  }

  export type NotificationDeliveryScalarWhereInput = {
    AND?: NotificationDeliveryScalarWhereInput | NotificationDeliveryScalarWhereInput[]
    OR?: NotificationDeliveryScalarWhereInput[]
    NOT?: NotificationDeliveryScalarWhereInput | NotificationDeliveryScalarWhereInput[]
    id?: StringFilter<"NotificationDelivery"> | string
    channel?: EnumDeliveryChannelFilter<"NotificationDelivery"> | $Enums.DeliveryChannel
    status?: EnumDeliveryStatusFilter<"NotificationDelivery"> | $Enums.DeliveryStatus
    recipient?: StringNullableFilter<"NotificationDelivery"> | string | null
    providerMessageId?: StringNullableFilter<"NotificationDelivery"> | string | null
    errorMessage?: StringNullableFilter<"NotificationDelivery"> | string | null
    attemptedAt?: DateTimeNullableFilter<"NotificationDelivery"> | Date | string | null
    createdAt?: DateTimeFilter<"NotificationDelivery"> | Date | string
    notificationId?: StringFilter<"NotificationDelivery"> | string
  }

  export type NotificationCreateWithoutDeliveriesInput = {
    id?: string
    type: $Enums.NotificationType
    title: string
    message: string
    href?: string | null
    readAt?: Date | string | null
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutNotificationsInput
  }

  export type NotificationUncheckedCreateWithoutDeliveriesInput = {
    id?: string
    type: $Enums.NotificationType
    title: string
    message: string
    href?: string | null
    readAt?: Date | string | null
    createdAt?: Date | string
    userId: string
  }

  export type NotificationCreateOrConnectWithoutDeliveriesInput = {
    where: NotificationWhereUniqueInput
    create: XOR<NotificationCreateWithoutDeliveriesInput, NotificationUncheckedCreateWithoutDeliveriesInput>
  }

  export type NotificationUpsertWithoutDeliveriesInput = {
    update: XOR<NotificationUpdateWithoutDeliveriesInput, NotificationUncheckedUpdateWithoutDeliveriesInput>
    create: XOR<NotificationCreateWithoutDeliveriesInput, NotificationUncheckedCreateWithoutDeliveriesInput>
    where?: NotificationWhereInput
  }

  export type NotificationUpdateToOneWithWhereWithoutDeliveriesInput = {
    where?: NotificationWhereInput
    data: XOR<NotificationUpdateWithoutDeliveriesInput, NotificationUncheckedUpdateWithoutDeliveriesInput>
  }

  export type NotificationUpdateWithoutDeliveriesInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumNotificationTypeFieldUpdateOperationsInput | $Enums.NotificationType
    title?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    href?: NullableStringFieldUpdateOperationsInput | string | null
    readAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutNotificationsNestedInput
  }

  export type NotificationUncheckedUpdateWithoutDeliveriesInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumNotificationTypeFieldUpdateOperationsInput | $Enums.NotificationType
    title?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    href?: NullableStringFieldUpdateOperationsInput | string | null
    readAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type UserCreateWithoutPushSubscriptionsInput = {
    id?: string
    name: string
    email: string
    passwordHash: string
    role: $Enums.Role
    phone?: string | null
    jobTitle?: string | null
    isActive?: boolean
    mustChangePassword?: boolean
    lastLoginAt?: Date | string | null
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    unit?: UnitCreateNestedOneWithoutResidentsInput
    notifications?: NotificationCreateNestedManyWithoutUserInput
    receivedPackages?: PackageCreateNestedManyWithoutReceivedByInput
    residentPackages?: PackageCreateNestedManyWithoutResidentInput
    historyEntries?: PackageHistoryCreateNestedManyWithoutActorInput
    generatedTokens?: PickupTokenCreateNestedManyWithoutGeneratedByInput
    validatedTokens?: PickupTokenCreateNestedManyWithoutValidatedByInput
    auditLogs?: AuditLogCreateNestedManyWithoutActorInput
  }

  export type UserUncheckedCreateWithoutPushSubscriptionsInput = {
    id?: string
    name: string
    email: string
    passwordHash: string
    role: $Enums.Role
    phone?: string | null
    jobTitle?: string | null
    isActive?: boolean
    mustChangePassword?: boolean
    lastLoginAt?: Date | string | null
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    unitId?: string | null
    notifications?: NotificationUncheckedCreateNestedManyWithoutUserInput
    receivedPackages?: PackageUncheckedCreateNestedManyWithoutReceivedByInput
    residentPackages?: PackageUncheckedCreateNestedManyWithoutResidentInput
    historyEntries?: PackageHistoryUncheckedCreateNestedManyWithoutActorInput
    generatedTokens?: PickupTokenUncheckedCreateNestedManyWithoutGeneratedByInput
    validatedTokens?: PickupTokenUncheckedCreateNestedManyWithoutValidatedByInput
    auditLogs?: AuditLogUncheckedCreateNestedManyWithoutActorInput
  }

  export type UserCreateOrConnectWithoutPushSubscriptionsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutPushSubscriptionsInput, UserUncheckedCreateWithoutPushSubscriptionsInput>
  }

  export type UserUpsertWithoutPushSubscriptionsInput = {
    update: XOR<UserUpdateWithoutPushSubscriptionsInput, UserUncheckedUpdateWithoutPushSubscriptionsInput>
    create: XOR<UserCreateWithoutPushSubscriptionsInput, UserUncheckedCreateWithoutPushSubscriptionsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutPushSubscriptionsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutPushSubscriptionsInput, UserUncheckedUpdateWithoutPushSubscriptionsInput>
  }

  export type UserUpdateWithoutPushSubscriptionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    jobTitle?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    mustChangePassword?: BoolFieldUpdateOperationsInput | boolean
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    unit?: UnitUpdateOneWithoutResidentsNestedInput
    notifications?: NotificationUpdateManyWithoutUserNestedInput
    receivedPackages?: PackageUpdateManyWithoutReceivedByNestedInput
    residentPackages?: PackageUpdateManyWithoutResidentNestedInput
    historyEntries?: PackageHistoryUpdateManyWithoutActorNestedInput
    generatedTokens?: PickupTokenUpdateManyWithoutGeneratedByNestedInput
    validatedTokens?: PickupTokenUpdateManyWithoutValidatedByNestedInput
    auditLogs?: AuditLogUpdateManyWithoutActorNestedInput
  }

  export type UserUncheckedUpdateWithoutPushSubscriptionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    jobTitle?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    mustChangePassword?: BoolFieldUpdateOperationsInput | boolean
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    unitId?: NullableStringFieldUpdateOperationsInput | string | null
    notifications?: NotificationUncheckedUpdateManyWithoutUserNestedInput
    receivedPackages?: PackageUncheckedUpdateManyWithoutReceivedByNestedInput
    residentPackages?: PackageUncheckedUpdateManyWithoutResidentNestedInput
    historyEntries?: PackageHistoryUncheckedUpdateManyWithoutActorNestedInput
    generatedTokens?: PickupTokenUncheckedUpdateManyWithoutGeneratedByNestedInput
    validatedTokens?: PickupTokenUncheckedUpdateManyWithoutValidatedByNestedInput
    auditLogs?: AuditLogUncheckedUpdateManyWithoutActorNestedInput
  }

  export type UserCreateWithoutAuditLogsInput = {
    id?: string
    name: string
    email: string
    passwordHash: string
    role: $Enums.Role
    phone?: string | null
    jobTitle?: string | null
    isActive?: boolean
    mustChangePassword?: boolean
    lastLoginAt?: Date | string | null
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    unit?: UnitCreateNestedOneWithoutResidentsInput
    notifications?: NotificationCreateNestedManyWithoutUserInput
    receivedPackages?: PackageCreateNestedManyWithoutReceivedByInput
    residentPackages?: PackageCreateNestedManyWithoutResidentInput
    historyEntries?: PackageHistoryCreateNestedManyWithoutActorInput
    generatedTokens?: PickupTokenCreateNestedManyWithoutGeneratedByInput
    validatedTokens?: PickupTokenCreateNestedManyWithoutValidatedByInput
    pushSubscriptions?: PushSubscriptionCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutAuditLogsInput = {
    id?: string
    name: string
    email: string
    passwordHash: string
    role: $Enums.Role
    phone?: string | null
    jobTitle?: string | null
    isActive?: boolean
    mustChangePassword?: boolean
    lastLoginAt?: Date | string | null
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    unitId?: string | null
    notifications?: NotificationUncheckedCreateNestedManyWithoutUserInput
    receivedPackages?: PackageUncheckedCreateNestedManyWithoutReceivedByInput
    residentPackages?: PackageUncheckedCreateNestedManyWithoutResidentInput
    historyEntries?: PackageHistoryUncheckedCreateNestedManyWithoutActorInput
    generatedTokens?: PickupTokenUncheckedCreateNestedManyWithoutGeneratedByInput
    validatedTokens?: PickupTokenUncheckedCreateNestedManyWithoutValidatedByInput
    pushSubscriptions?: PushSubscriptionUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutAuditLogsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutAuditLogsInput, UserUncheckedCreateWithoutAuditLogsInput>
  }

  export type UserUpsertWithoutAuditLogsInput = {
    update: XOR<UserUpdateWithoutAuditLogsInput, UserUncheckedUpdateWithoutAuditLogsInput>
    create: XOR<UserCreateWithoutAuditLogsInput, UserUncheckedCreateWithoutAuditLogsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutAuditLogsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutAuditLogsInput, UserUncheckedUpdateWithoutAuditLogsInput>
  }

  export type UserUpdateWithoutAuditLogsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    jobTitle?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    mustChangePassword?: BoolFieldUpdateOperationsInput | boolean
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    unit?: UnitUpdateOneWithoutResidentsNestedInput
    notifications?: NotificationUpdateManyWithoutUserNestedInput
    receivedPackages?: PackageUpdateManyWithoutReceivedByNestedInput
    residentPackages?: PackageUpdateManyWithoutResidentNestedInput
    historyEntries?: PackageHistoryUpdateManyWithoutActorNestedInput
    generatedTokens?: PickupTokenUpdateManyWithoutGeneratedByNestedInput
    validatedTokens?: PickupTokenUpdateManyWithoutValidatedByNestedInput
    pushSubscriptions?: PushSubscriptionUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutAuditLogsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    jobTitle?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    mustChangePassword?: BoolFieldUpdateOperationsInput | boolean
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    unitId?: NullableStringFieldUpdateOperationsInput | string | null
    notifications?: NotificationUncheckedUpdateManyWithoutUserNestedInput
    receivedPackages?: PackageUncheckedUpdateManyWithoutReceivedByNestedInput
    residentPackages?: PackageUncheckedUpdateManyWithoutResidentNestedInput
    historyEntries?: PackageHistoryUncheckedUpdateManyWithoutActorNestedInput
    generatedTokens?: PickupTokenUncheckedUpdateManyWithoutGeneratedByNestedInput
    validatedTokens?: PickupTokenUncheckedUpdateManyWithoutValidatedByNestedInput
    pushSubscriptions?: PushSubscriptionUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UnitCreateManyTowerInput = {
    id?: string
    number: string
    label: string
    floor?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UnitUpdateWithoutTowerInput = {
    id?: StringFieldUpdateOperationsInput | string
    number?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    floor?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    residents?: UserUpdateManyWithoutUnitNestedInput
    packages?: PackageUpdateManyWithoutUnitNestedInput
  }

  export type UnitUncheckedUpdateWithoutTowerInput = {
    id?: StringFieldUpdateOperationsInput | string
    number?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    floor?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    residents?: UserUncheckedUpdateManyWithoutUnitNestedInput
    packages?: PackageUncheckedUpdateManyWithoutUnitNestedInput
  }

  export type UnitUncheckedUpdateManyWithoutTowerInput = {
    id?: StringFieldUpdateOperationsInput | string
    number?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    floor?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateManyUnitInput = {
    id?: string
    name: string
    email: string
    passwordHash: string
    role: $Enums.Role
    phone?: string | null
    jobTitle?: string | null
    isActive?: boolean
    mustChangePassword?: boolean
    lastLoginAt?: Date | string | null
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PackageCreateManyUnitInput = {
    id?: string
    trackingCode: string
    carrier: string
    description?: string | null
    status?: $Enums.PackageStatus
    receivedAt?: Date | string
    notifiedAt?: Date | string | null
    pickedUpAt?: Date | string | null
    dueAt?: Date | string | null
    notificationSent?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    residentId: string
    receivedById: string
  }

  export type UserUpdateWithoutUnitInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    jobTitle?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    mustChangePassword?: BoolFieldUpdateOperationsInput | boolean
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    notifications?: NotificationUpdateManyWithoutUserNestedInput
    receivedPackages?: PackageUpdateManyWithoutReceivedByNestedInput
    residentPackages?: PackageUpdateManyWithoutResidentNestedInput
    historyEntries?: PackageHistoryUpdateManyWithoutActorNestedInput
    generatedTokens?: PickupTokenUpdateManyWithoutGeneratedByNestedInput
    validatedTokens?: PickupTokenUpdateManyWithoutValidatedByNestedInput
    pushSubscriptions?: PushSubscriptionUpdateManyWithoutUserNestedInput
    auditLogs?: AuditLogUpdateManyWithoutActorNestedInput
  }

  export type UserUncheckedUpdateWithoutUnitInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    jobTitle?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    mustChangePassword?: BoolFieldUpdateOperationsInput | boolean
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    notifications?: NotificationUncheckedUpdateManyWithoutUserNestedInput
    receivedPackages?: PackageUncheckedUpdateManyWithoutReceivedByNestedInput
    residentPackages?: PackageUncheckedUpdateManyWithoutResidentNestedInput
    historyEntries?: PackageHistoryUncheckedUpdateManyWithoutActorNestedInput
    generatedTokens?: PickupTokenUncheckedUpdateManyWithoutGeneratedByNestedInput
    validatedTokens?: PickupTokenUncheckedUpdateManyWithoutValidatedByNestedInput
    pushSubscriptions?: PushSubscriptionUncheckedUpdateManyWithoutUserNestedInput
    auditLogs?: AuditLogUncheckedUpdateManyWithoutActorNestedInput
  }

  export type UserUncheckedUpdateManyWithoutUnitInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    jobTitle?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    mustChangePassword?: BoolFieldUpdateOperationsInput | boolean
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PackageUpdateWithoutUnitInput = {
    id?: StringFieldUpdateOperationsInput | string
    trackingCode?: StringFieldUpdateOperationsInput | string
    carrier?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumPackageStatusFieldUpdateOperationsInput | $Enums.PackageStatus
    receivedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    notifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    pickedUpAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dueAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    notificationSent?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    resident?: UserUpdateOneRequiredWithoutResidentPackagesNestedInput
    receivedBy?: UserUpdateOneRequiredWithoutReceivedPackagesNestedInput
    history?: PackageHistoryUpdateManyWithoutPackageNestedInput
    token?: PickupTokenUpdateOneWithoutPackageNestedInput
  }

  export type PackageUncheckedUpdateWithoutUnitInput = {
    id?: StringFieldUpdateOperationsInput | string
    trackingCode?: StringFieldUpdateOperationsInput | string
    carrier?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumPackageStatusFieldUpdateOperationsInput | $Enums.PackageStatus
    receivedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    notifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    pickedUpAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dueAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    notificationSent?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    residentId?: StringFieldUpdateOperationsInput | string
    receivedById?: StringFieldUpdateOperationsInput | string
    history?: PackageHistoryUncheckedUpdateManyWithoutPackageNestedInput
    token?: PickupTokenUncheckedUpdateOneWithoutPackageNestedInput
  }

  export type PackageUncheckedUpdateManyWithoutUnitInput = {
    id?: StringFieldUpdateOperationsInput | string
    trackingCode?: StringFieldUpdateOperationsInput | string
    carrier?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumPackageStatusFieldUpdateOperationsInput | $Enums.PackageStatus
    receivedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    notifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    pickedUpAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dueAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    notificationSent?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    residentId?: StringFieldUpdateOperationsInput | string
    receivedById?: StringFieldUpdateOperationsInput | string
  }

  export type NotificationCreateManyUserInput = {
    id?: string
    type: $Enums.NotificationType
    title: string
    message: string
    href?: string | null
    readAt?: Date | string | null
    createdAt?: Date | string
  }

  export type PackageCreateManyReceivedByInput = {
    id?: string
    trackingCode: string
    carrier: string
    description?: string | null
    status?: $Enums.PackageStatus
    receivedAt?: Date | string
    notifiedAt?: Date | string | null
    pickedUpAt?: Date | string | null
    dueAt?: Date | string | null
    notificationSent?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    residentId: string
    unitId: string
  }

  export type PackageCreateManyResidentInput = {
    id?: string
    trackingCode: string
    carrier: string
    description?: string | null
    status?: $Enums.PackageStatus
    receivedAt?: Date | string
    notifiedAt?: Date | string | null
    pickedUpAt?: Date | string | null
    dueAt?: Date | string | null
    notificationSent?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    unitId: string
    receivedById: string
  }

  export type PackageHistoryCreateManyActorInput = {
    id?: string
    type: $Enums.HistoryType
    note: string
    createdAt?: Date | string
    fromStatus?: $Enums.PackageStatus | null
    toStatus?: $Enums.PackageStatus | null
    packageId: string
  }

  export type PickupTokenCreateManyGeneratedByInput = {
    id?: string
    code: string
    qrValue: string
    generatedAt?: Date | string
    expiresAt: Date | string
    usedAt?: Date | string | null
    packageId: string
    validatedById?: string | null
  }

  export type PickupTokenCreateManyValidatedByInput = {
    id?: string
    code: string
    qrValue: string
    generatedAt?: Date | string
    expiresAt: Date | string
    usedAt?: Date | string | null
    packageId: string
    generatedById: string
  }

  export type PushSubscriptionCreateManyUserInput = {
    id?: string
    endpoint: string
    p256dh: string
    auth: string
    userAgent?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AuditLogCreateManyActorInput = {
    id?: string
    action: $Enums.AuditAction
    entityType: $Enums.AuditEntityType
    entityId?: string | null
    description: string
    context?: string | null
    createdAt?: Date | string
  }

  export type NotificationUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumNotificationTypeFieldUpdateOperationsInput | $Enums.NotificationType
    title?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    href?: NullableStringFieldUpdateOperationsInput | string | null
    readAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deliveries?: NotificationDeliveryUpdateManyWithoutNotificationNestedInput
  }

  export type NotificationUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumNotificationTypeFieldUpdateOperationsInput | $Enums.NotificationType
    title?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    href?: NullableStringFieldUpdateOperationsInput | string | null
    readAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deliveries?: NotificationDeliveryUncheckedUpdateManyWithoutNotificationNestedInput
  }

  export type NotificationUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumNotificationTypeFieldUpdateOperationsInput | $Enums.NotificationType
    title?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    href?: NullableStringFieldUpdateOperationsInput | string | null
    readAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PackageUpdateWithoutReceivedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    trackingCode?: StringFieldUpdateOperationsInput | string
    carrier?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumPackageStatusFieldUpdateOperationsInput | $Enums.PackageStatus
    receivedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    notifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    pickedUpAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dueAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    notificationSent?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    resident?: UserUpdateOneRequiredWithoutResidentPackagesNestedInput
    unit?: UnitUpdateOneRequiredWithoutPackagesNestedInput
    history?: PackageHistoryUpdateManyWithoutPackageNestedInput
    token?: PickupTokenUpdateOneWithoutPackageNestedInput
  }

  export type PackageUncheckedUpdateWithoutReceivedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    trackingCode?: StringFieldUpdateOperationsInput | string
    carrier?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumPackageStatusFieldUpdateOperationsInput | $Enums.PackageStatus
    receivedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    notifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    pickedUpAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dueAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    notificationSent?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    residentId?: StringFieldUpdateOperationsInput | string
    unitId?: StringFieldUpdateOperationsInput | string
    history?: PackageHistoryUncheckedUpdateManyWithoutPackageNestedInput
    token?: PickupTokenUncheckedUpdateOneWithoutPackageNestedInput
  }

  export type PackageUncheckedUpdateManyWithoutReceivedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    trackingCode?: StringFieldUpdateOperationsInput | string
    carrier?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumPackageStatusFieldUpdateOperationsInput | $Enums.PackageStatus
    receivedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    notifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    pickedUpAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dueAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    notificationSent?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    residentId?: StringFieldUpdateOperationsInput | string
    unitId?: StringFieldUpdateOperationsInput | string
  }

  export type PackageUpdateWithoutResidentInput = {
    id?: StringFieldUpdateOperationsInput | string
    trackingCode?: StringFieldUpdateOperationsInput | string
    carrier?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumPackageStatusFieldUpdateOperationsInput | $Enums.PackageStatus
    receivedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    notifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    pickedUpAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dueAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    notificationSent?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    unit?: UnitUpdateOneRequiredWithoutPackagesNestedInput
    receivedBy?: UserUpdateOneRequiredWithoutReceivedPackagesNestedInput
    history?: PackageHistoryUpdateManyWithoutPackageNestedInput
    token?: PickupTokenUpdateOneWithoutPackageNestedInput
  }

  export type PackageUncheckedUpdateWithoutResidentInput = {
    id?: StringFieldUpdateOperationsInput | string
    trackingCode?: StringFieldUpdateOperationsInput | string
    carrier?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumPackageStatusFieldUpdateOperationsInput | $Enums.PackageStatus
    receivedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    notifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    pickedUpAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dueAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    notificationSent?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    unitId?: StringFieldUpdateOperationsInput | string
    receivedById?: StringFieldUpdateOperationsInput | string
    history?: PackageHistoryUncheckedUpdateManyWithoutPackageNestedInput
    token?: PickupTokenUncheckedUpdateOneWithoutPackageNestedInput
  }

  export type PackageUncheckedUpdateManyWithoutResidentInput = {
    id?: StringFieldUpdateOperationsInput | string
    trackingCode?: StringFieldUpdateOperationsInput | string
    carrier?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumPackageStatusFieldUpdateOperationsInput | $Enums.PackageStatus
    receivedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    notifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    pickedUpAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dueAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    notificationSent?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    unitId?: StringFieldUpdateOperationsInput | string
    receivedById?: StringFieldUpdateOperationsInput | string
  }

  export type PackageHistoryUpdateWithoutActorInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumHistoryTypeFieldUpdateOperationsInput | $Enums.HistoryType
    note?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    fromStatus?: NullableEnumPackageStatusFieldUpdateOperationsInput | $Enums.PackageStatus | null
    toStatus?: NullableEnumPackageStatusFieldUpdateOperationsInput | $Enums.PackageStatus | null
    package?: PackageUpdateOneRequiredWithoutHistoryNestedInput
  }

  export type PackageHistoryUncheckedUpdateWithoutActorInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumHistoryTypeFieldUpdateOperationsInput | $Enums.HistoryType
    note?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    fromStatus?: NullableEnumPackageStatusFieldUpdateOperationsInput | $Enums.PackageStatus | null
    toStatus?: NullableEnumPackageStatusFieldUpdateOperationsInput | $Enums.PackageStatus | null
    packageId?: StringFieldUpdateOperationsInput | string
  }

  export type PackageHistoryUncheckedUpdateManyWithoutActorInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumHistoryTypeFieldUpdateOperationsInput | $Enums.HistoryType
    note?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    fromStatus?: NullableEnumPackageStatusFieldUpdateOperationsInput | $Enums.PackageStatus | null
    toStatus?: NullableEnumPackageStatusFieldUpdateOperationsInput | $Enums.PackageStatus | null
    packageId?: StringFieldUpdateOperationsInput | string
  }

  export type PickupTokenUpdateWithoutGeneratedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    qrValue?: StringFieldUpdateOperationsInput | string
    generatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    usedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    package?: PackageUpdateOneRequiredWithoutTokenNestedInput
    validatedBy?: UserUpdateOneWithoutValidatedTokensNestedInput
  }

  export type PickupTokenUncheckedUpdateWithoutGeneratedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    qrValue?: StringFieldUpdateOperationsInput | string
    generatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    usedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    packageId?: StringFieldUpdateOperationsInput | string
    validatedById?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PickupTokenUncheckedUpdateManyWithoutGeneratedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    qrValue?: StringFieldUpdateOperationsInput | string
    generatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    usedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    packageId?: StringFieldUpdateOperationsInput | string
    validatedById?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PickupTokenUpdateWithoutValidatedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    qrValue?: StringFieldUpdateOperationsInput | string
    generatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    usedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    package?: PackageUpdateOneRequiredWithoutTokenNestedInput
    generatedBy?: UserUpdateOneRequiredWithoutGeneratedTokensNestedInput
  }

  export type PickupTokenUncheckedUpdateWithoutValidatedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    qrValue?: StringFieldUpdateOperationsInput | string
    generatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    usedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    packageId?: StringFieldUpdateOperationsInput | string
    generatedById?: StringFieldUpdateOperationsInput | string
  }

  export type PickupTokenUncheckedUpdateManyWithoutValidatedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    qrValue?: StringFieldUpdateOperationsInput | string
    generatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    usedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    packageId?: StringFieldUpdateOperationsInput | string
    generatedById?: StringFieldUpdateOperationsInput | string
  }

  export type PushSubscriptionUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    endpoint?: StringFieldUpdateOperationsInput | string
    p256dh?: StringFieldUpdateOperationsInput | string
    auth?: StringFieldUpdateOperationsInput | string
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PushSubscriptionUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    endpoint?: StringFieldUpdateOperationsInput | string
    p256dh?: StringFieldUpdateOperationsInput | string
    auth?: StringFieldUpdateOperationsInput | string
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PushSubscriptionUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    endpoint?: StringFieldUpdateOperationsInput | string
    p256dh?: StringFieldUpdateOperationsInput | string
    auth?: StringFieldUpdateOperationsInput | string
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AuditLogUpdateWithoutActorInput = {
    id?: StringFieldUpdateOperationsInput | string
    action?: EnumAuditActionFieldUpdateOperationsInput | $Enums.AuditAction
    entityType?: EnumAuditEntityTypeFieldUpdateOperationsInput | $Enums.AuditEntityType
    entityId?: NullableStringFieldUpdateOperationsInput | string | null
    description?: StringFieldUpdateOperationsInput | string
    context?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AuditLogUncheckedUpdateWithoutActorInput = {
    id?: StringFieldUpdateOperationsInput | string
    action?: EnumAuditActionFieldUpdateOperationsInput | $Enums.AuditAction
    entityType?: EnumAuditEntityTypeFieldUpdateOperationsInput | $Enums.AuditEntityType
    entityId?: NullableStringFieldUpdateOperationsInput | string | null
    description?: StringFieldUpdateOperationsInput | string
    context?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AuditLogUncheckedUpdateManyWithoutActorInput = {
    id?: StringFieldUpdateOperationsInput | string
    action?: EnumAuditActionFieldUpdateOperationsInput | $Enums.AuditAction
    entityType?: EnumAuditEntityTypeFieldUpdateOperationsInput | $Enums.AuditEntityType
    entityId?: NullableStringFieldUpdateOperationsInput | string | null
    description?: StringFieldUpdateOperationsInput | string
    context?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PackageHistoryCreateManyPackageInput = {
    id?: string
    type: $Enums.HistoryType
    note: string
    createdAt?: Date | string
    fromStatus?: $Enums.PackageStatus | null
    toStatus?: $Enums.PackageStatus | null
    actorId?: string | null
  }

  export type PackageHistoryUpdateWithoutPackageInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumHistoryTypeFieldUpdateOperationsInput | $Enums.HistoryType
    note?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    fromStatus?: NullableEnumPackageStatusFieldUpdateOperationsInput | $Enums.PackageStatus | null
    toStatus?: NullableEnumPackageStatusFieldUpdateOperationsInput | $Enums.PackageStatus | null
    actor?: UserUpdateOneWithoutHistoryEntriesNestedInput
  }

  export type PackageHistoryUncheckedUpdateWithoutPackageInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumHistoryTypeFieldUpdateOperationsInput | $Enums.HistoryType
    note?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    fromStatus?: NullableEnumPackageStatusFieldUpdateOperationsInput | $Enums.PackageStatus | null
    toStatus?: NullableEnumPackageStatusFieldUpdateOperationsInput | $Enums.PackageStatus | null
    actorId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PackageHistoryUncheckedUpdateManyWithoutPackageInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumHistoryTypeFieldUpdateOperationsInput | $Enums.HistoryType
    note?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    fromStatus?: NullableEnumPackageStatusFieldUpdateOperationsInput | $Enums.PackageStatus | null
    toStatus?: NullableEnumPackageStatusFieldUpdateOperationsInput | $Enums.PackageStatus | null
    actorId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type NotificationDeliveryCreateManyNotificationInput = {
    id?: string
    channel: $Enums.DeliveryChannel
    status?: $Enums.DeliveryStatus
    recipient?: string | null
    providerMessageId?: string | null
    errorMessage?: string | null
    attemptedAt?: Date | string | null
    createdAt?: Date | string
  }

  export type NotificationDeliveryUpdateWithoutNotificationInput = {
    id?: StringFieldUpdateOperationsInput | string
    channel?: EnumDeliveryChannelFieldUpdateOperationsInput | $Enums.DeliveryChannel
    status?: EnumDeliveryStatusFieldUpdateOperationsInput | $Enums.DeliveryStatus
    recipient?: NullableStringFieldUpdateOperationsInput | string | null
    providerMessageId?: NullableStringFieldUpdateOperationsInput | string | null
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    attemptedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationDeliveryUncheckedUpdateWithoutNotificationInput = {
    id?: StringFieldUpdateOperationsInput | string
    channel?: EnumDeliveryChannelFieldUpdateOperationsInput | $Enums.DeliveryChannel
    status?: EnumDeliveryStatusFieldUpdateOperationsInput | $Enums.DeliveryStatus
    recipient?: NullableStringFieldUpdateOperationsInput | string | null
    providerMessageId?: NullableStringFieldUpdateOperationsInput | string | null
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    attemptedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationDeliveryUncheckedUpdateManyWithoutNotificationInput = {
    id?: StringFieldUpdateOperationsInput | string
    channel?: EnumDeliveryChannelFieldUpdateOperationsInput | $Enums.DeliveryChannel
    status?: EnumDeliveryStatusFieldUpdateOperationsInput | $Enums.DeliveryStatus
    recipient?: NullableStringFieldUpdateOperationsInput | string | null
    providerMessageId?: NullableStringFieldUpdateOperationsInput | string | null
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    attemptedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
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