import BRRedux from 'br-redux';
import { IShoe } from './shoes.models';

namespace ShoesActions {
    /**
     * Constants
     * Used as the "type" value in an action object.
     */

    // Typescript >= 2.4.0
    export enum ActionType {
        FETCH  = 'SHOES/FETCH',
        FIND   = 'SHOES/FIND',
        CREATE = 'SHOES/CREATE',
        UPDATE = 'SHOES/UPDATE',
        DELETE = 'SHOES/DELETE',
        ERROR  = 'SHOES/ERROR',

        // Used by middleware
        LOAD_ONE = 'SHOES/LOAD_ONE',
        LOAD_COLLECTION = 'SHOES/LOAD_COLLECTION',
    }

    /**
     * ActionType
     * Used for type discrimination in reducer
     */
    // Typescript >= 2.4.0
    export type ShoeAction = 
        BRRedux.Action<ActionType.FETCH> |
        BRRedux.Action<ActionType.FIND, number> |
        BRRedux.Action<ActionType.DELETE, number> |
        BRRedux.Action<ActionType.CREATE, IShoe> |
        BRRedux.Action<ActionType.UPDATE, IShoe> |
        BRRedux.Action<ActionType.LOAD_ONE, IShoe> |
        BRRedux.Action<ActionType.LOAD_COLLECTION, IShoe[]> |
        BRRedux.Action<ActionType.ERROR, string>;

    /**
     * Action Creatos
     * i.e. the stuff that actually makes it to the compiled Javascript
     */
    export const fetchAll = BRRedux.createAction(ActionType.FETCH);
    
    export const find = BRRedux.createAction(ActionType.FIND, (id: number) => id);
    export const del = BRRedux.createAction(ActionType.DELETE, (id: number) => id);
    // NOTE: in order for this action creator to stay typesafe, you MUST provide the type
    //       annotation in the curried function.
    // OTHER NOTE: it also looke like delete is a reserved keyword? TIL...

    export const create = BRRedux.createAction(ActionType.CREATE, (shoe: IShoe) => shoe);
    export const update = BRRedux.createAction(ActionType.UPDATE, (shoe: IShoe) => shoe);

    export const loadOne = BRRedux.createAction(ActionType.LOAD_ONE, (shoe: IShoe) => shoe);
    export const load = BRRedux.createAction(ActionType.LOAD_COLLECTION, (shoes: IShoe[]) => shoes);
    export const error = BRRedux.createAction(ActionType.ERROR, (error: string) => error);
}

export default ShoesActions;