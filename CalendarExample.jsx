import React from 'react';
import {Calendar} from 'primereact/calendar';
import TextField from '@material-ui/core/TextField';


class CalendarExample extends React.Component {

	constructor() {
		super();
		this.CalendarChangeHandler = this.change.bind(this);
		this.state = {a: {}};
	}

	change(event) {
		let a = this.state.a;
		a[event.target.name] = event.target.value;
		console.log(a);
		this.setState({a});
		console.log(this.state);
	}

	getComponent(elementType) {
		let control = '';
		if(elementType == 'date') {
			control = <span className='savedReportsControl'><Calendar onChange={this.CalendarChangeHandler} showIcon={true}></Calendar></span>;
		} else if(elementType == 'string') {
			control = <span className='savedReportsControl'><InputText class='queryParamInput' type="text" onChange={this.CalendarChangeHandler}></InputText></span>;
		}
		console.log(control);
		return control;
	}

	render() {
		let type = 'date';
		let control = this.getComponent(type);
		let todayDate = new Date();
		let mon = (todayDate.getMonth() + 1).toString();
		let date = todayDate.getDate().toString();

		let day = (date.length == 2) ? (date) : ('0' + date);
		let year = todayDate.getFullYear().toString();
		let month = (mon.length == 2) ? (mon) : ('0' + mon);
		
    	let todayValue = year + '-' + month + '-' + day;

		return (
			<div>
				<TextField id="date" type="date" defaultValue={todayValue}/>
				<span className='savedReportsLabel'>Hello   </span>
				{control}
			</div>
		);
	}
}

export default CalendarExample;