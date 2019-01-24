import React, {Component} from 'react';
import SehwagRoute from './SehwagRoute.jsx';
import TendulkarRoute from './TendulkarRoute.jsx';
import MSDhoniRoute from './MSDhoniRoute.jsx';
import CricketLandingPage from './CricketLandingPage.jsx';
import { BrowserRouter as Router, Route, Link, Switch, Redirect } from 'react-router-dom';

/*
Routes :
1) Every view on the screen should have its own specific URL so I can bookmark the page.
2) The forward and back button should move me forward or backward in my browsing history.
3) Nested views and those with parameters should be supported, such as example.com/products/shoes/101.

npm install react-router-dom
Why react-router-dom? This is because the React router library comprises of three packages: 
react-router, react-router-dom, and react-router-native.

react-router is the core package for the router, whereas the other two are environment specific. 
You should use react-router-dom if you’re building for the web, and react-router-native 
if you’re on a mobile app development environment using React Native.
*/

//Using Router/Link Components
// Link Component replaces the default <a href=""></a> HTML tag. It accepts a to="" prop 
//that points to the URL location we want to go to.
//Route component. This component renders a page if the current URL location matches the path prop specified in it.It 
//also accepts component, render and children props. So, using render props you can write a component inline.

/* See the inline component below.
<Route path="/Tendulkar" render={() => {
           return (
              <div> 
				<div> <img src="TendulkarImg.jpg" height="300" width="300"/> </div>

				<h3> Greatest batsman in the history. Lord of Cricket!!! </h3>
			</div>
             );
      }}/>

*/

//Use of exact : other paths have / in them. So if we visited other URLs such as /hello, /about and /books, 
//the Home component will keep being rendered by default. To fix this, write another prop exact setting 
//it to true or just write exact.

//Switch will pick only the first matching route.

class RoutesExample extends React.Component {

	render() {
		return (
			<Router> 
				<div>
					<ul>
						<li> <Link to={'Tendulkar'}>Tendulkar</Link> </li>
						<li> <Link to={'Sehwag'}>Sehwag</Link> </li>
						<li> <Link to={'MSDhoni'}>MSDhoni</Link> </li>
					</ul>
					<hr/>

					<Switch>
						<Route exact={true} path='/' component={CricketLandingPage}/>
						<Route path='/Tendulkar' component={TendulkarRoute}/>
						<Route path='/Sehwag' component={SehwagRoute}/>
						<Route path='/MSDhoni' component={MSDhoniRoute}/>
					</Switch>

				</div>
			</Router>
		);
	}
}

export default RoutesExample;