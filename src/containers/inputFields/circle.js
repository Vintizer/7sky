import React, {Component} from 'react';

export default class Circle extends Component {

	render() {
		return (
			<svg>
				<circle cx={50} cy={50} r={10} fill="red" />
			</svg>
		);
	}
}
