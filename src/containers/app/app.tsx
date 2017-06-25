import * as React from 'react';
import Counter from '../counter';

class App extends React.Component<{}, {}> {
    render(): JSX.Element {
        return (
            <fieldset>
                <legend>App</legend>
                <Counter />
            </fieldset>
        );
    }
}

export default App;