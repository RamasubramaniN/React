import React from 'react';
import propTypes from 'prop-types';

//Property value passed to the component overrides default property value.
class Example6 extends React.Component {

	render() {
		return (
			<div>
				<h1> Name : {this.props.name} </h1>
				<h1> Age : {this.props.age} </h1>
				<h1> Department : {this.props.department} </h1>
			</div>
		);
	}
}

Example6.defaultProps = {
	age : 50,
	department : 'cse'
};

Example6.propTypes = {
	name : propTypes.string.isRequired,
	age : propTypes.number,
	department : propTypes.string.isRequired
};

export default Example6;