function retrieveWorkItens(){
	alert("Retrieving workItems");

	/* try{
		var db = require('liteDB');
		db.connect('./JSONDB',["AzureWorkItemsDb"]);

		var _index = 1;
		var _ok=0;
		while(_ok>-1){
			//
			var _result = JSON.stringify(db.AzureWorkItemsDb.find({ wItemId:_index }));
			
			var _InnerHTML = "";
			var tag ='<ul>';
			_InnerHTML = str.concat(_InnerHTML,tag); 
			

			//var _result = JSON.stringify(db.AzureWorkItemsDb.find());
			_result = _result.replace("[", "");
			_result = _result.replace("]", "");
			 
			try{					
				var obj = JSON.parse(_result);	
				tag ='<li>';
				_InnerHTML = str.concat(_InnerHTML,tag); 
				_InnerHTML = str.concat(_InnerHTML," ");
				_InnerHTML = str.concat(_InnerHTML,obj.wItemId);
				_InnerHTML = str.concat(_InnerHTML," ");
				_InnerHTML = str.concat(_InnerHTML,obj.State);
				_InnerHTML = str.concat(_InnerHTML," ");
				_InnerHTML = str.concat(_InnerHTML,obj.Title);
				_InnerHTML = str.concat(_InnerHTML," ");
				_InnerHTML = str.concat(_InnerHTML,obj.Changed_Date);
				tag ='</li>';
				_InnerHTML = str.concat(_InnerHTML,tag); 
			} catch(err){
				ok=-2;
				tag ='</ul>';
				_InnerHTML = str.concat(_InnerHTML,tag); 
				document.getElementById("worItemsDiv").innerHTML = _InnerHTML;
				//
				return;
			}
			//console.log(_result);
			_index++;
		}


	}
	catch(err){

	  alert(err);
	}
		  */

}