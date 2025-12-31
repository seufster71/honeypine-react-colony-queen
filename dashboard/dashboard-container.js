/**
 * 
 */
'use-strict';
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import * as actions from './dashboard-actions';
import fuLogger from '../../../core/common/fu-logger';
import DashboardView from "../../../memberView/colony/dashboard/dashboard-view";
import BaseContainer from '../../../core/container/base-container';

function CCDashboardContainer({location,navigate}) {
	const itemState = useSelector((state) => state.dashboard);
	const session = useSelector((state) => state.session);
	const appPrefs = useSelector((state) => state.appPrefs);
	const dispatch = useDispatch();
	
	useEffect(() => {
    	dispatch(actions.init({lang:session.selected.lang}));
  	}, [])
	
	
	
	
	
	
	
	fuLogger.log({level:'TRACE',loc:'ECMarketContainer::render',msg:"Hi there"});
	if (itemState.items != null) {
		return (
			<DashboardView
			itemState={dashboardState}
			appPrefs={appPrefs}
			session={session}
			/>
		);
	} else {
		return (<div> Loading Dashboard... </div>);
	}
	
}


export default CCDashboardContainer;