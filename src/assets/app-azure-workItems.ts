import { Component, OnInit } from '@angular/core';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';
import witem from "../JSONDB/AzureWorkItemsDb.json";
//import data from "json!http://foo.com/data_returns_json_response/";


@Component({
  selector: 'app-azure-workItems',
  templateUrl: './app-azure-workItems.html',
  styleUrls: ['./app-azure-workItems.css']
})

export class WorkItemsReader implements OnInit {

  title = 'WorkItems importados do ambiente DevOps do AZURE';
  arrWI: string [];

	constructor (private httpService: HttpClient) { }

	ngOnInit() {
		
		 this.httpService.get('./assets/AzureWorkItemsDb.json').subscribe(
		  data => {
			this.arrWI = data as string [];	 // FILL THE ARRAY WITH DATA.
			    //  console.log(this.arrBirds[1]);
		        },(err: HttpErrorResponse) => { console.log (err.message);} );				
	}
}

				
		/*function retrieveWorkItens(){
			
			
		   alert("Retrieving workItems - declare module");
				
				
			try{
				 alert(witem[0].wItemId);
			} 
			catch(err){
				
				alert("Deu erro de novo");
			}	*/
			

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

	/*	}*/