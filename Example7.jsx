import React from 'react';

//Demonstration of Force Update.
class Example7 extends React.Component {

	constructor() {
		super();
		//Set the handler to invoke method. Assigning function reference.
		this.forceUpdateHandler = this.forceUpdateCall.bind(this);
	}

	render() {
		return (
			<div>
				<button onClick={this.forceUpdateHandler}> </button>
				<h4>Random Number : {Math.random()}</h4>
			</div>
		);
	}

	forceUpdateCall() {
		this.forceUpdate();
	}

}

export default Example7;