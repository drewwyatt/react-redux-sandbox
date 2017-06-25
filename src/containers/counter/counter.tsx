import * as React from 'react';
import{ connect } from 'react-redux';
import { Counter } from 'state';

const { CounterActions } = Counter;

interface Props {
    counter: number;
    increment(): void;
    decrement(): void;
}

class CounterComponent extends React.Component<Props, void> {
    render(): JSX.Element {
        const { increment, decrement, counter } = this.props;
        return (
            <fieldset>
                <legend>Counter</legend>
                <button onClick={decrement}>-</button>
                {counter}
                <button onClick={increment}>+</button>
            </fieldset>
        );
    }
}

const mapStateToProps = state => ({
    counter: state.counter
});

const mapDispatchtoProps = dispatch => ({
    increment: () => dispatch(CounterActions.increment()),
    decrement: () => dispatch(CounterActions.decrement()),
});

export default connect(mapStateToProps, mapDispatchtoProps)(CounterComponent);