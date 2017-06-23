
import { Store, applyMiddleware, createStore } from 'redux';

import RootReducer from 'state/root-reducer';

const configureStore = (preloadedState: any = {}): Store<any> => {
    const enhancers = [];

    const middleware = applyMiddleware(...enhancers);
    const store = createStore(RootReducer, preloadedState, middleware);

    if ((module as any).hot) {
        // Enable Webpack hot module replacement for reducers
        (module as any).hot.accept('../state/root-reducer', () => {
            const nextRootReducer = require('../state/root-reducer').default;
            store.replaceReducer(nextRootReducer);
        });
    }

    return store;
};

export default configureStore;

