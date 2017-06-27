/**
 * Used for Create actions
 * Taked from @nirendy's comment in this discussion:
 * https://github.com/Microsoft/TypeScript/issues/12215#issuecomment-307614501
 */

type Obj<T> = { [k: string]: T };
type SafeObj<O extends { [k: string]: any }, Name extends string, Param extends string> = O & Obj<{[K in Name]: Param }>;
type SwitchObj<Param extends string, Name extends string, O extends Obj<any>> = SafeObj<O, Name, Param>[Param];
type Not<T extends string> = SwitchObj<T, 'InvalidNotParam', {
  '1': '0';
  '0': '1';
}>;
type UnionHas<Union extends string, K extends string> = ({[S in Union]: '1' } & { [k: string]: '0' })[K];
type Obj2Keys<T> = {[K in keyof T]: K } & { [k: string]: never };

type Omit_<T extends { [s: string]: any }, K extends keyof T> =
  {[P2 in keyof T]: { 1: Obj2Keys<T>[P2], 0: never }[Not<UnionHas<K, P2>>]}

export type Omit<T extends { [s: string]: any }
    , K extends keyof T
    , T1 extends Omit_<T, K>= Omit_<T, K>
    , T1K extends keyof Pick<T1, keyof T>=keyof Pick<T1, keyof T>> =
    {[P1 in T1[T1K]]: T[P1]}
  ;