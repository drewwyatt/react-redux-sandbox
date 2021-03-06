import { Omit } from './omit';

namespace BRRedux {
    export interface Action<T extends string, P = undefined> {
        type: T;
        payload: P;
    }

    export function createAction<T extends string>(type: T): () => Action<T, undefined>;
    export function createAction<T extends string, P>(type: T, actionCreator: (payload: P) => P): (payload: P) => Action<T, P>;
    export function createAction<T extends string>(type: T, actionCreator?: Function) {
        return (payload: any = undefined) => ({
            type,
            payload,
        });
    }

    // Typescript >=  2.4.0
    export enum FetchStatus {
        NOT_FETCHED = 'NOT_FETCHED',
        FETCHING    = 'FETCHING',
        SUCCESS     = 'SUCCESS',
        ERROR       = 'ERROR',
    }

    export type Creatable<T extends { id: string | number }> = Omit<T, 'id'>;
}

export default BRRedux;