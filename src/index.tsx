import * as React from 'react';

import Root from 'containers/root';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';

const app = document.getElementById('app');
render(<AppContainer><Root /></AppContainer>, app);

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

