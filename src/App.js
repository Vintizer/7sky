import React, {Component} from 'react';
import AdditionalData from './containers/additionalData';
import Drawer from './containers/drawer';
import InputFields from './containers/inputFields';
import Selector from './containers/selector';

export default class App extends Component {
	constructor(props) {
		super(props);

		this.state = {
			element: "rect"
		};
	}

	select(e) {
		let element = e.target.getAttribute('name');
		this.setState({
			element
		});
	}

	render() {
		return (
			<div >
				<Selector onSelect={this.select.bind(this)}/>
				<InputFields element={this.state.element}/>
				<AdditionalData />
				<Drawer />
			</div>
		);
	}
}
