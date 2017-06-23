import * as React from 'react';
import App from 'containers/app';

class Root extends React.Component<{}, {}> {
    render(): JSX.Element {
        return (
            <div>
                <input type="text" placeholder="enter text here..." />
                <App />
            </div>)
        ;
    }
}

export default Root;