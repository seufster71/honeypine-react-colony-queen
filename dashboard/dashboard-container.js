/**
 * 
 */
'use-strict';
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import * as actions from './dashboard-actions';
import DashboardView from "../../../memberView/colony/dashboard/dashboard-view";

function CCDashboardContainer() {
	const dashboardState = useSelector((state) => state.dashboard);
	const appPrefs = useSelector((state) => state.appPrefs);
	const dispatch = useDispatch();
	
	useEffect(() => {
    	dispatch(actions.getDashboard())
  	}, [])
	
	if (dashboardState != null) {
		return (
			<DashboardView
			itemState={dashboardState}
			appPrefs={appPrefs}
			/>
		);
	} else {
		return (<div> Loading Dashboard... </div>);
	}
	
}


export default CCDashboardContainer;