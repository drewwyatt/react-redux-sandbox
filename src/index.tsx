import * as React from 'react';

import Root from 'containers/root';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import configureStore from 'config/configure-store';

const store = configureStore();

const app = document.getElementById('app');
render(<AppContainer><Root store={store} /></AppContainer>, app);

if ((module as any).hot) {
    (module as any).hot.accept('./containers/root', () => {
        const RootContainer = require('./containers/root').default;
        render(
            <AppContainer>
                <RootContainer />
            </AppContainer>,
            app
        );
    });
}

