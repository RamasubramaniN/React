import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class Example10 extends React.Component {

	//The ref is used to return a reference to the element. Refs should be avoided in most cases, 
	//however, they can be useful when we need DOM measurements or to add methods to the components.
	constructor() {
		super();
		// create a ref to store the textInput DOM element
		this.text1Ref = React.createRef();
		this.text2Ref = React.createRef();
		this.clickHandler = this.clickCall.bind(this);
		this.state = {currentFocus : 'text1'};
	}

	clickCall() {
		console.log('click call');
		console.log(this);
		if('text1' === this.state.currentFocus) {
			// Explicitly focus the text input using the raw DOM API
    		// Note: we're accessing "current" to get the DOM node
			this.text2Ref.current.focus();
			console.log('text2 focus');
			this.setState({currentFocus:'text2'});
		}
		if('text2' === this.state.currentFocus) {
			this.text1Ref.current.focus();
			console.log('text1 focus');
			this.setState({currentFocus:'text1'});
		}
	}

	render() {
		return (
			<div>
				<div>
					<button onClick={this.clickHandler}> click me!!!</button>
				</div>
				<div>
					{/* tell React that we want to associate the <input> ref
    				// with the `textInput` that we created in the constructor*/}
					<input ref={this.text1Ref} type='text'></input>
				</div>
				<div>
					<input ref={this.text2Ref} type='text'></input>
				</div>
			</div>
		);
	}
}

export default Example10;
