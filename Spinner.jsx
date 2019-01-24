import React from 'react';
import Loading from 'react-loading-components';

class Spinner extends React.Component {

	constructor() {
		super();
		this.state = {
			loading: false
		}
		this.clickHandler = this.buttonClick.bind(this);
	}

	buttonClick() {
		console.log('click');
		this.setState({loading: false});
	}

	render() {
		return (
			<div> 
				<div>   <Loading type='bars' width={100} height={100} fill='white' /> </div>
				<div> <button class='button' onClick={this.clickHandler}> </button> </div>
				<div> <textarea rows="25" cols="150" placeholder="Enter query here"></textarea> </div>
			</div>
		);
	}
}

export default Spinner;