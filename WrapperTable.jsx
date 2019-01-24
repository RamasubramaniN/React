import Table from "hui-react/table/Table"; // Be sure to optimize your layers! See the 'Design & API Document' link above.
import RequestMemory from "dstore/RequestMemory";
import React from 'react';

class WrapperTable extends React.Component {

	constructor() {
		super();
		this.state = {
			gridoptions: {
		        	autoheight: true,
		        	rowsPerPage: 50,
			        showTableBar: true,
			        showExport: true,               
			        onExport: table => 
		        	{           
			            console.dir(table);
			            alert("Starting export...");
			        }
		   		}
		   	}
		}

	render() {
		return (
			<div>{this.state.gridoptions}</div>
		);
	}
}
export default WrapperTable;