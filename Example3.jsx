import React from 'react';

//Keys help React identify which items have changed, are added, or are removed. 
//Keys should be given to the elements inside the array to give the elements a stable identity:
// ------------------------------------ ES6  (EC2015) Features--------------------------------------------
//ES2015, or ECMAScript 2015, is the first significant update to the language since ES5 was initially released 
//in 2009. You'll often see ES2015 called by its original name, ES6, since it's the 6th version of ECMAScript. 
//Many ES2015 features are already available in modern JavaScript engines. However, for maximum browser compatibility,
//it's still safest to use Babel and compile down to ES5.
//Instead of using var to declare local variables, we use const and let. The main difference is that var is scoped to a function, while const and let are scoped to a block.
//Additionally, variables declared with const can only be assigned a value once. Assigning another value to the 
//same name will throw a compiler error. Note that if the value assigned to a const variable is an object or array,
// the object or array may still be modified. In other words, it's only the variable name that is bound permanently
// -- the value itself is still mutable.

//Actul Code :
/*const a = 1
let b = 'foo'

// Not allowed!
// a = 2

// Ok!
b = 'bar'

if (true) {
  const a = 3
  let c= 'a'
}
c = 'd'
*/

/* After Babel compiler conversion :
'use strict';

var a = 1;
var b = 'foo';

// Not allowed!
// a = 2

// Ok!
b = 'bar';

if (true) {
  var _a = 3;
  var _c = 'a';
}
c = 'd';
*/
//You'll notice that the compiled output replaces const and let with var. You'll also notice that Babel transforms
// const a = 3 into var _a = 3. This is so that your code can run on older platforms that don't support the
// new block-scoped variable declarations. When using Babel, it's actually the Babel compiler that enforces 
//proper usage and block-scoping, rather than the runtime JavaScript engine.

class Example3 extends React.Component {

	constructor() {
		super();
		this.state = {
			data:
			[
				{
	               "id":1,
	               "name":"Priya",
	               "age":"25"
	            },
	            {
	               "id":2,
	               "name":"Ram",
	               "age":"29"
	            },
	            {
	               "id":3,
	               "name":"Logasri",
	               "age":"8"
	            },
	            {
	               "id":4,
	               "name":"Kavithasri",
	               "age":"6"
	            }
			]
		}
	}

	render() {
		return (
			<div>
				<table>
					<th>
						<td style={tdStyle}>Id</td>
           				<td style={tdStyle}>Name</td>
            			<td style={tdStyle}>Age</td>
					</th>
              		<tbody>
                  		{this.state.data.map((person, i) => <TableRow key = {i} data = {person} />)}
               		</tbody>
            	</table>
			</div>
		);
	}
}

const tdStyle = {border: '1px solid black', width:'50px'};
const trStyle = {border: '1px solid black'};


class TableRow extends React.Component {
	render() {
		return (
			<tr style={trStyle}>
            	<td style={tdStyle}>{this.props.data.id}</td>
           		<td style={tdStyle}>{this.props.data.name}</td>
            	<td style={tdStyle}>{this.props.data.age}</td>
         	</tr>
		);
	}
}

export default Example3;