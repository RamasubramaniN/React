import React from 'react';
import './common.css';


class Example11 extends React.Component {

	constructor() {
		super();

		this.state = {userLoggedIn : false, username : ''};
		this.loginHandler = this.handleLogin.bind(this);
		this.logoutHandler = this.handleLogout.bind(this);
		this.changeUsernameHandler = this.changeUsername.bind(this);
	}

	changeUsername(e) {
		e.persist();//That is because of React doing event polling - all the event's fields get nullified 
		//after the callback is done, so you observe them as nulls in the asynchronous setState callback.
		//Please copy your event data to a variable or call event.persist() to disable this behavior.
		console.log("Username : " + e.target.value + ", User loggedIn : " + this.state.userLoggedIn);
		this.setState(() => {return {username : e.target.value}});
	}

	handleLogin() {
		this.setState(() => {return {userLoggedIn : true}});
	}

	handleLogout() {
		this.setState(()=>{return{userLoggedIn : false}});
	}

	render() {
		
		const loggedIn = this.state.userLoggedIn;
		var loginLogoutControl;
		console.log(loggedIn);
		
		if(loggedIn === false) {
			loginLogoutControl = <div>
			<div> 
				Username <input type='text' placeholder='Enter your name' onChange={this.changeUsernameHandler}></input> 
			</div> 
			<br/>
			<div> Password <input type='text' placeholder='Enter secret key'></input> </div>
			<div> <button className='loginButton' onClick={this.loginHandler}>Login</button> </div>
			</div>
		} else {
			loginLogoutControl = <div> Hello User {this.state.username}<br/> <button className='logoutButton' onClick={this.logoutHandler}>Logout</button> </div>
		}

		return (
			<div className="loginForm">
				<fieldset>
					<legend> Existing User </legend>
					{loginLogoutControl}
				</fieldset>
			</div>
		);
	}
}

export default Example11;