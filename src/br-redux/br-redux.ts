namespace BRRedux {
    export interface Action<T extends string, P = undefined> {
        type: T;
        payload: P;
    }

    export function createAction<T extends string>(type: T): () => { type: T };
    export function createAction<T extends string, P>(type: T, actionCreator: (payload: P) => P): (payload: P) => { type: T, payload: P };
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
}

export default BRRedux;