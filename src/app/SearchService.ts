import { Component, Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class SearchService {
	
	apiRoot:string = "";
	folderURL:string ="";
	constructor(private http:Http) {}

	search() {
		let promise = new Promise((resolve, reject) => {
    		this.http.get(this.apiRoot)
    		.toPromise()
    		.then(
    			res => {
    				this.folderURL = res.url;
    				/*this.results = res.json().results.map(item => {
    					return new SearchItem(
    						item.id,
    						);
    				});*/
    				//console.log(res.json());
    				resolve();
    			},
    			msg => {
    				reject(msg);
    			});
		});
		return promise;
	}
}