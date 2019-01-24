import React from 'react';
import {Dropdown} from 'primereact/dropdown';
import QueryParameter from './QueryParameter.jsx';

class DynamicComponent extends React.Component {

	constructor() {
		super();
		this.changeReportHandler = this.changeReport.bind(this);
		this.updateParamHandler = this.updateParam.bind(this);
		this.executeReportHandler = this.executeReport.bind(this);
		this.state = {
			selectedReport : '',
			selectedQuery : '',
			selectedInputParams : [],
			queryParamValues: {},
			reportData : [
	                       {
	                          "id":"companyreport",
	                          "displayName":"company report",
	                          "query":"select source_company_id from psp_company where source_company_id in (:SourceCompanyId) and createdDate\u003d:CreatedDate",
	                          "inputParams":[
	                             {
	                                "param":"SourceCompanyId",
	                                "type":"string",
	                                "multiInput":true
	                             },
	                             {
	                                "param":"CreatedDate",
	                                "type":"date",
	                                "multiInput":false
	                             }
	                          ]
	                       },
	                       {
	                          "id":"systemparameterreport",
	                          "displayName":"system parameter report",
	                          "query":"select * from psp_system_parameter where system_parameter_cd\u003d:SystemParameterCd",
	                          "inputParams":[
	                             {
	                                "param":"SystemParameterCd",
	                                "type":"string",
	                                "multiInput":false
	                             }
	                          ]
	                       }
	                    ]
					}
				}

	updateParam(event) {
		var queryParamValues = this.state.queryParamValues;
		queryParamValues[event.target.id] = event.target.value;
		this.setState({queryParamValues});
		console.log(this.state);
		console.log('updateParam');
	}

	executeReport() {
		var restParameters = '';
		for(var i=0; i<this.state.selectedInputParams.length; i++) {
			var inParam = this.state.selectedInputParams[i].param;
			restParameters = restParameters + inParam + '=' + this.state.queryParamValues[inParam] + '&';
		}
		console.log(restParameters);
	}

	changeReport(event) {
		delete this.state.queryParamValues;
		const selectedIndex = event.target.options.selectedIndex;
		var reportId = event.target.options[selectedIndex].getAttribute('data-key');
		var query = '';
		var queryParams = [];
		for (var index = 0; index < this.state.reportData.length; index++){
			var reportInput = this.state.reportData[index];
			if(reportInput.id == reportId) {
				query = reportInput.query;
				queryParams = reportInput.inputParams;
				break;
			}
		}
		this.setState({selectedReport: reportId, selectedQuery: query, selectedInputParams: queryParams, queryParamValues: {}});
	}

	getAllReports() {
		return this.state.reportData.map((queryItem) =>
            <option data-key={queryItem.id}>{queryItem.displayName}</option>
        );
	}

	getReportQueryParameters() {
		let inputParamComponent = [];
		for (var i = 0; i < this.state.selectedInputParams.length; i++) {
			var inputParams = this.state.selectedInputParams[i];
			var inputParamKey = this.state.selectedReport + inputParams.param;
        	inputParamComponent.push(<QueryParameter key={inputParamKey} param={inputParams.param} index={i} handler={this.updateParamHandler}/>);
    	}
    	return inputParamComponent;
	}

	render() {
		
		let optionItems = this.getAllReports();
		let inputParamComponent = this.getReportQueryParameters();

		return (
			<div>
				<select onChange={this.changeReportHandler}>
					<option data-key='-1'>Select a Report</option>
					{optionItems}
				</select>
                <span class='textarea'>
					<textarea rows="6" cols="150" readOnly placeholder="Query for the report" value={this.state.selectedQuery}></textarea>
                </span>
                <div>
       				{inputParamComponent}
       			</div>
       			<div className="executeSection">
					<button className="executeButton" onClick={this.executeReportHandler}>Run Report</button>
				</div>
			</div>
		);
	}
}

export default DynamicComponent;