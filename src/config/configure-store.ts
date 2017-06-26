import createSagaMiddleware from 'redux-saga'
import { Store, applyMiddleware, createStore } from 'redux';
import logger from 'redux-logger';

import { rootReducer, rootSaga } from 'state';

const configureStore = (preloadedState: any = {}): Store<any> => {
    const sagaMiddleware = createSagaMiddleware();
    const enhancers = [sagaMiddleware, logger];

    const middleware = applyMiddleware(...enhancers);
    const store = createStore(rootReducer, preloadedState, middleware);

    if ((module as any).hot) {
        // Enable Webpack hot module replacement for reducers
        (module as any).hot.accept('../state/root.reducer', () => {
            const nextRootReducer = require('../state/root.reducer').default;
            store.replaceReducer(nextRootReducer);
        });
    }

    sagaMiddleware.run(rootSaga);
    return store;
};

export default configureStore;

