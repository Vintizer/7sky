import React, {Component} from 'react';

export default class Circle extends Component {

	render() {
		return (
			<svg width="230" height="240">
				<circle cx={50} cy={50} r={50} fill="red" />
			</svg>
		);
	}
}
