/**
 * 
 */
import {getHost} from '../../../App';


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
