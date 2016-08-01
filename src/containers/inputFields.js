import React, {Component} from 'react';
import Rect from './inputFields/rect';
import Circle from './inputFields/circle';
import Trapeze from './inputFields/trapeze';
import Triangle from './inputFields/triangle';

export default class InputFields extends Component {

	render() {
		const {element} = this.props;
		let Elem;
		switch (element) {
			case "rect":
				Elem = Rect;
				break;
			case "circle":
				Elem = Circle;
				break;
			case "trapeze":
				Elem = Trapeze;
				break;
			case "triangle":
				Elem = Triangle;
				break;

		}
		return (
			<Elem />
		);
	}
}
