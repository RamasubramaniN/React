import React from 'react';

//When a component needs to keep track of information between renderings the component itself can 
//create, update, and use state. state is created in the component

class Example5 extends React.Component {

	constructor() {
		super();
		this.state = {
			count: 0
		};
	}

	//this.setState takes a method reference as argument, intead of {count : 10}. Method reference is lambda function.
	//Same as java lambda function.
	updateCount() {
		this.setState
		(  
			(prevState) => { return{count: prevState.count + 1}  }  
		);
	}
//setState takes a function, that’s becuase setState can run asynchronously. 
//So, do not do this.setState({count: this.state.count + 1});
//setState updates the state object and re-renders the component automatically. 
//this.state.count = this.state.count + 1 will not re-render UI. So always use setState().
	render() {
		return(
			<div>
				<button onClick={ ()=> this.updateCount()}> 
				</button>

				Clicked {this.state.count} times.

			</div>
		);
	}
}

export default Example5;