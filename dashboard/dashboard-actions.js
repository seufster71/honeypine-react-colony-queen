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
import callService from '../../../core/api/api-call';
import actionUtils from '../../../core/common/action-utils';

// thunks
export function init({lang}) {
	return function(dispatch) {
		let requestParams = {};
    	requestParams.action = "INIT";
		requestParams.service = "CC_DASHBOARD_SVC";
		requestParams.prefTextKeys = new Array("CC_DASHBOARD_PAGE");
		requestParams.prefLabelKeys = new Array("CC_DASHBOARD_PAGE");
		
    	let params = {};
    	params.requestParams = requestParams;
    	params.URI = '/api/member/callService';

    	return callService(params).then( (responseJson) => {
      		if (responseJson != null && responseJson.protocalError == null){
				dispatch({ type: "CC_DASHBOARD_INIT", responseJson });
			} else {
				actionUtils.checkConnectivity(responseJson,dispatch);
			}
    	}).catch(error => {
      		throw(error);
    	});

  	};
}




export function inputChange(field,value) {
	 return function(dispatch) {
		 let params = {};
		 params.field = field;
		 params.value = value;
		 dispatch({ type:"CC_DASHBOARD_INPUT_CHANGE",params});
	 };
}



export function getDashboard(value) {
	 return function(dispatch) {
		
		 let params = {};
		 params.requestParams = {};
		 params.requestParams.action = "DASHBOARD";
		 params.requestParams.service = "CC_DASHBOARD_SVC";
		 params.URI = '/api/member/callService';
		
		const uri = getHost()+params.URI;
    	let headers = new Headers();
    headers.set("Content-type","application/json");
    if (params.auth != null) {
    	headers.set("Authorization", "Basic " + params.auth);
    }
    fetch(uri, {
      method: "POST",
      credentials: "same-origin",
      headers: headers,
      body: JSON.stringify({ params: params.requestParams })
    })
      .then(function(response) {
    	  if (response.status >= 400) {
    		  let responseMsg = {status:"ERROR", protocalError:response.status};
    	
    	  } else {
    		 return response.json();
    	  }
        
      })
		.then(responseJson => {
			dispatch({ type: "CC_DASHBOARD_GET", responseJson });
				if (info != null) {
		        	  dispatch({type:'SHOW_STATUS',info:info});  
		        }
		})
      .catch(function(error) {
        
        
      });
		
		
		
	 };
}
