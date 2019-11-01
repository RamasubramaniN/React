import React from 'react';
import './common.css';


/*Functions as Children
Normally, JavaScript expressions inserted in JSX will evaluate to a string, a React element, 
or a list of those things. However, props.children works just like any other prop in 
that it can pass any sort of data, not just the sorts that React knows how to render. 
For example, if you have a custom component, you could have it take a callback as 
props.children: Children passed to a custom component can be anything, as long as that component transforms 
them into something React can understand before rendering. This usage is not common, but it works 
if you want to stretch what JSX is capable of. Children passed to a custom component can be anything, 
as long as that component transforms them into something React can understand before rendering. 
This usage is not common, but it works if you want to stretch what JSX is capable of.
*/

class Children extends React.Component {

	render() {
		return (
			<div>
				<ListOfTenThings/>
			</div>
		);
	}
}

// Calls the children callback numTimes to produce a repeated component
//This is again a component.
function Repeat(props) {
  let items = [];
  for (let i = 0; i < props.numTimes; i++) {
    items.push(props.children(i));
  }
  return <div>{items}</div>;
}

//This is one component. Start with Capital letter...
//{(index) => <div key={index}>This is item {index} in the list</div>} is actually props.children
function ListOfTenThings() {
  return (
    <Repeat numTimes={10}>
      {(index) => <div key={index}>This is item {index} in the list</div>} 
    </Repeat>
  );
}

export default Children;