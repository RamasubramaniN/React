import React from 'react';

class Example9 extends React.Component {
	
	constructor() {
		super();
		this.state = {myNumber : 0};
		
		//Set the handler to invoke method. Assigning function reference.
		this.updateHandlerParent = this.updateNumber.bind(this);
	}

	updateNumber(e) {
		this.setState({myNumber:e.target.value});
	}

	render() {
		return (
			//Pass Handler Object & number to child component.
			<Child myNumberChild={this.state.myNumber} updateHandlerChild={this.updateHandlerParent}/>
		);
	}

}

//Display Child component value. Also, on change of text update parent component's my number.
//updateHandlerChild is actually updateHandlerParent which calls updateNumber
class Child extends React.Component {
	
	render () {
		return (
			<div>
				<input type="text" value={this.props.myNumberChild} onChange={this.props.updateHandlerChild} />	
				<input type="text" value={this.props.myNumberChild} readOnly/>
			</div>
		);
	}

}

export default Example9;