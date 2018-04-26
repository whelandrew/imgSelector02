import { Component, OnInit } from '@angular/core';
import { DBOX } from '../dbox';

@Component({
  selector: 'app-dropbox-login',
  templateUrl: './dropbox-login.component.html',
  styleUrls: ['./dropbox-login.component.css']
})
export class DropboxLoginComponent implements OnInit {

	isValid = false;

	submitted = false;

	userDeets = new DBOX (1, "Username", "Password");
	  
	onSubmit() {
		this.submitted = true;
		this.isValid = true;
		//alert("YAY");
		//this.router.navigate(['imgSelector',userDeets]);
	}; 
	constructor() { }

	ngOnInit() {
	}
}
