import React from 'react';

/*
“props” is short for “properties” 
Yep, the property is passed to the component, similar to how an argument is passed to a function.
In fact, we could even rewrite the component to be simpler:

function Example4(props) {
  return <h1>Hello, {props.topicName}</h1>;
}

so props come from above. Often, but not always. 
A component can also have default props, so if a prop isn’t passed through it can still be set.

We can make the name property optional by adding defaultProps to the Example4 class:

*
*/

class Example4 extends React.Component {

	//topicName will be passed from main.js
	render() {

		return (
			<div>
				<h1>Hello, {this.props.topicName}</h1>
				<DefaultPropsComponent /> 
			</div>
		);
	}
}

//props should not change. setProps and replaceProps have been deprecated.
//you can think of any React component that only uses props (and not state) as “pure,” that is, 
//it will always render the same output given the same input. This makes them really easy to test - win!


class DefaultPropsComponent extends React.Component {
	render() {
		return (
			<div>
				<h1>Hello, {this.props.topic}</h1>
			</div>
		);
	}
}

//This is an example for Default Props.
DefaultPropsComponent.defaultProps = {
	topic:'This is example for default props.'
};

export default Example4;
