import * as React from 'react';
import Counter from '../counter';
import Shoes from '../shoes';

class App extends React.Component<{}, {}> {
    render(): JSX.Element {
        return (
            <fieldset>
                <legend>App</legend>
                <Shoes />
                <Counter />
            </fieldset>
        );
    }
}

export default App;