import { Component, OnInit } from '@angular/core';
import { SearchService } from '../SearchService';

@Component({
  selector: 'app-image-selector',
  templateUrl: './image-selector.component.html',
  styleUrls: ['./image-selector.component.css']
})
export class ImageSelectorComponent implements OnInit {
	
	results:Object[];
	folders:Object[];
	loading: boolean;
	
	getFiles() {
		this.loading = true;
		this.images.search();
		console.log(this.images);
	}
	
	constructor(private images:SearchService) {
		this.results = [];
		this.folders = [];
		this.loading = false;
	}

 	ngOnInit() {this.getFiles();}
}
