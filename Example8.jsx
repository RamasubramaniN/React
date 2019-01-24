import React from 'react';

class Example8 extends React.Component {


	constructor() {
		super();
		this.state = { count : 0}; //State has new data.
		//Set the handler to invoke method. Assigning function reference.
		this.numberUpdateHandler = this.updateNumber.bind(this);
	}

	updateNumber() {
		this.setState(
			(prevState)=>{return {count : prevState.count+1}}
		);
	}

	render() {
		return (
			<div>
				<button onClick={this.numberUpdateHandler}> Increment </button>
				<LifeCycle count={this.state.count} />
			</div>
		);
	}
}

class LifeCycle extends React.Component {

	render() {
		return (
			<div>
				<h3> {this.props.count} </h3>
			</div>
		);
	}
	
	//Executed before rendering, on both the server and the client side.
	componentWillMount() {
		console.log('Component will mount.');
	}

	//Executed after the first render only on the client side. This is where AJAX requests and DOM 
	//or state updates should occur. This method is also used for integration with other JavaScript frameworks 
	//and any functions with delayed execution such as setTimeout or setInterval. We are using it to update the 
	//state so we can trigger the other lifecycle methods.
	componentDidMount() {
		console.log('Component did mount.');
	}

	//invoked as soon as the props are updated before another render is called. We triggered it from 
	//numberUpdateHandler when we updated the state.
	componentWillReceiveProps(newProps) {
		console.log('Component will receive props.' + newProps);
	}

	//should return true or false value. This will determine if the component will be updated or not. 
	//This is set to true by default. If you are sure that the component doesn't need to render after state 
	//or props are updated, you can return false value.
	shouldComponentUpdate(newProps, newState) {
		console.log('Should Component update.');
		return true;
	}

	//called just before rendering.
	componentWillUpdate(newProps, newState) {
		console.log('Component will update.');
	}

	//is called just after rendering.
	componentDidUpdate(newProps, newState) {
		console.log('Component did update.');
	}

	//called after the component is unmounted from the dom. We are unmounting our component in main.js.
	componentWillUnmount() {
		console.log('Component will unmount');
	}
}

export default Example8;