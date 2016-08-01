import React, {Component} from 'react';

export default class Selector extends Component {

	render() {
		const {onSelect} = this.props;
		return (
			<div >
				<div className="col-md-3">
					<span onClick={onSelect} className="glyphicon glyphicon-off" aria-hidden="true"
						  name="circle"></span>
				</div>
				<div className="col-md-3">
					<span onClick={onSelect} className="glyphicon glyphicon-play" aria-hidden="true"
						  name="triangle"></span>
				</div>
				<div className="col-md-3">
					<span onClick={onSelect} className="glyphicon glyphicon-stop" aria-hidden="true" name="rect"></span>
				</div>
				<div className="col-md-3">
					<span onClick={onSelect} className="glyphicon glyphicon-eject" aria-hidden="true"
						  name="trapeze"></span>
				</div>
			</div>
		);
	}
}
