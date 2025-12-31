/*
 * Copyright (C) 2020 The ToastHub Project
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
 import reducerUtils from '../../../core/common/reducer-utils';
 
 export default function memberCCDASHBOARDReducer(state = {}, action) {
	switch(action.type) {
		
		case 'CC_DASHBOARD_INIT': {
    		if (action.responseJson != null && action.responseJson.params != null) {
	    	    return Object.assign({}, state, {
	    	      	prefTexts: Object.assign({}, state.prefTexts, reducerUtils.getPrefTexts(action)),
					prefLabels: Object.assign({}, state.prefLabels, reducerUtils.getPrefLabels(action)),
					prefOptions: Object.assign({}, state.prefOptions, reducerUtils.getPrefOptions(action)),
					columns: reducerUtils.getColumns(action),
					itemCount: reducerUtils.getItemCount(action),
					items: reducerUtils.getItems(action),
					listLimit: reducerUtils.getListLimit(action),
					listStart: reducerUtils.getListStart(action),
					orderCriteria: [{'orderColumn':'CC_DASHBOARD_TABLE_TITLE','orderDir':'ASC'}],
					searchCriteria: [{'searchValue':'','searchColumn':'CC_DASHBOARD_TABLE_TITLE'}],
					paginationSegment: 1,
					selected: null,
					inputFields:null,
					view: "MAIN",
					pageName:"CC_DASHBOARD",
					isDeleteModalOpen: false,
					errors:null, 
					warns:null, 
					successes:null,
					searchValue:""
	    	    });
    	  	} else {
    	    	return state;
    	  	}
    	}
		case 'CC_DASHBOARD_INPUT_CHANGE': {
			return reducerUtils.updateInputChange(state,action);
    	}
		case 'CC_DASHBOARD_GET': {
			if (action.responseJson != null && action.responseJson.params != null) {
				let marketStatus = {};
  				if (action.responseJson.params.ISOPEN != null) {
    				marketStatus = action.responseJson.params.ISOPEN;
  				}
				let account = {};
  				if (action.responseJson.params.ACCOUNT != null) {
    				account = action.responseJson.params.ACCOUNT;
  				}
				return Object.assign({}, state, {
					marketOpenStatus: marketStatus,
					account: account
				});
			
			} else {
        		return state;
    		}
		}
		default:
		return state;
	}
}