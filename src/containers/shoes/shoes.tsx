import * as React from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { IRootState } from 'state';
import BRRedux from 'br-redux';
import { ShoesActions, ShoesModels } from 'state/shoes';

interface Props {
	fetchStatus: BRRedux.FetchStatus;
	selectedId: number;
	shoes: ShoesModels.Shoe[];
	error: string;
	fetch(): any;
}

class ShoesComponent extends React.Component<Props, void> {
	render(): JSX.Element {
		return (
			<fieldset>
				<legend>Shoes</legend>
				<pre>{JSON.stringify(this.props)}</pre>
				<button onClick={this.props.fetch}>Fetch</button>
			</fieldset>
		);
	}
}

const mapStateToProps = (state: IRootState) => ({
	fetchStatus: state.shoes.fetchStatus,
	selectedId: state.shoes.selectedId,
	shoes: state.shoes.collection.map(ShoesModels.Shoe.Deserialize),
	error: state.shoes.error,
});

const mapDispatchToProps = (dispatch: Dispatch<IRootState>) => ({
	fetch: () => dispatch(ShoesActions.fetchAll()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ShoesComponent);