namespace BRRedux {
    export interface Action<T extends string, P = undefined> {
        type: T;
        payload: P;
    }

    export function createAction<T extends string>(type: T): () => { type: T };
    export function createAction<T extends string, P>(type: T, actionCreator: (payload: P) => P): (payload: P) => { type: T, payload: P };
    export function createAction<T extends string, P1, P2>(type: T, actionCreator: (p1: P1, p2: P2) => P1 & P2): (payload: P1 & P2) => { type: T, payload: P1 & P2 };
    export function createAction<T extends string>(type: T, actionCreator?: Function) {
        return (...payload: any[]) => ({
            type,
            payload,
        });
    }

Object.assign();

    // Typescript >=  2.4.0
    export enum FetchStatus {
        NOT_FETCHED = 'NOT_FETCHED',
        FETCHING    = 'FETCHING',
        SUCCESS     = 'SUCCESS',
        ERROR       = 'ERROR',
    }
}

export default BRRedux;