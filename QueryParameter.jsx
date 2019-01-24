import React from 'react';
import {InputText} from 'primereact/inputtext';

class QueryParameter extends React.Component {
	
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className='inputParameter'>
				<span className='savedReportsLabel'>{this.props.param}</span>
				<span className='savedReportsControl'><InputText type="text" id={this.props.param} onChange={this.props.handler}></InputText></span>
			</div>

		);
	}
}

export default QueryParameter;