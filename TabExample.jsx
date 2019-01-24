import React from 'react';
import {TabView,TabPanel} from 'primereact/tabview';

class TabExample extends React.Component {
	render() {
		return (
			<TabView>
				<TabPanel header="Godfather I" leftIcon="pi pi-calendar">Tab1</TabPanel>
				<TabPanel header="Godfather II" leftIcon="pi pi-calendar">Tab2</TabPanel>
				<TabPanel header="Godfather III" leftIcon="pi pi-calendar">Tab3</TabPanel>
			</TabView>			
		);
	}
}

export default TabExample;