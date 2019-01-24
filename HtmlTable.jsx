import React, { Component } from 'react';
import {DataTable} from 'primereact/datatable';
import {Column} from 'primereact/column';
import {InputText} from 'primereact/inputtext';
import {Button} from 'primereact/button';
import {Dropdown} from 'primereact/dropdown';
import {MultiSelect} from 'primereact/multiselect';


class HtmlTable extends Component {

    constructor() {
        super();
        this.export = this.export.bind(this);

        this.state = {"cars" : [
					        {"Name" : "ACME Softwares", "Source Company Id" : 123, "Offload Group": "1" },
					        {"Name" : "ACME", "Source Company Id" : 100, "Offload Group": "2" },
					        {"Name" : "ABC Softwares", "Source Company Id" : 99, "Offload Group": "3" }
					   ]
					};
				}

	export() {
        this.dt.exportCSV();
    }

    render() {
        
        var header = <div style={{textAlign:'left'}}><Button type="button" icon="pi pi-external-link" iconPos="left" label="CSV" onClick={this.export}></Button></div>;

        return (
            <div>

                <div className="content-section introduction">
                    <div className="feature-intro">
                        <h1>DataTable - Filter</h1>
                    </div>
                </div>

                <div className="content-section implementation">
                    <DataTable ref={(el) => this.dt = el} value={this.state.cars} paginator={true} rows={2} header={header}>
                        <Column field="Name" header="Name" filter={true} />
                        <Column field="Source Company Id" header="Source Company Id" filter={true} />
                        <Column field="Offload Group" header="Offload Group" filter={true} />
                    </DataTable>
                </div>

            </div>
        );
    }
}

export default HtmlTable;