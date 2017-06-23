import * as React from 'react';
import App from 'containers/app';
import { Provider } from "react-redux";
import { Store } from "redux";

interface Props {
    store: Store<any>;
}

class Root extends React.Component<Props, {}> {
    render(): JSX.Element {
        return (
            <Provider store={this.props.store}>
                <div>
                    <input type="text" placeholder="enter text here..." />
                    <App />
                </div>
            </Provider>)
        ;
    }
}

export default Root;