namespace BRRedux {
    export interface Action<T extends string, P = undefined> {
        type: T;
        payload?: P;
    }

    export function createAction<T extends string>(type: T): () => { type: T };
    export function createAction<T extends string, P>(type: T, actionCreator: (payload: P) => P): (payload: P) => { type: T, payload: P };
    export function createAction<T extends string>(type: T, actionCreator?: Function) {
        return (...payload: any[]) => ({
            type,
            payload,
        });
    }

    export enum FetchStatus {
        
    }
}

namespace ShoesActions {
    /**
     * Constants
     * Used as the "type" value in an action object.
     */
    export enum ActionType {
        FETCH  = 'SHOES/FETCH',
        FIND   = 'SHOES/FIND',
        CREATE = 'SHOES/CREATE',
        UPDATE = 'SHOES/UPDATE',
        DELETE = 'SHOES/DELETE',

        // Used by middleware
        LOAD_ONE = 'SHOES/LOAD_ONE',
        LOAD_COLLECTION = 'SHOES/LOAD_COLLECTION',
    }

    /**
     * ActionType
     * Used for type discrimination in reducer
     */
    export type ShoeAction = 
        BRRedux.Action<ActionType.FETCH> |
        BRRedux.Action<ActionType.FIND, number>;

    /**
     * Actions
     * i.e. the real stuff that actually makes it to the compiled Javascript
     */
    export const fetchAll = BRRedux.createAction(ActionType.FETCH);
    export const find = BRRedux.createAction(ActionType.FIND, (id: number) => id);
    // NOTE: in order for this action creator to stay typesafe, you MUST provide the type
    //       annotation in the curried function.
}

export default ShoesActions;