import React from 'react';
import { Route, Switch } from 'react-router-dom';

import EmployeeDetails from './EmployeeDetails';

const Routes = () => {
	return (
		<Switch>
			<Route path='/EmployeeDetails' component={EmployeeDetails} />
		</Switch>
	);
}

export default Routes;