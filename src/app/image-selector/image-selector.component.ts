import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import {WebApiPromiseService} from '../app.service';

@Component({
  selector: 'app-image-selector',
  templateUrl: './image-selector.component.html',
  styleUrls: ['./image-selector.component.css']
})
export class ImageSelectorComponent implements OnInit {
	
	hasFiles = false;
	files = [];
	imageURL: string = "https://www.dropbox.com/sh/yxetyp070bzh3ol/AACQIVLkZ2nYNHzIC6TOs_4ka?dl=0";
	
	getFiles() {
		this.imagePromiseService
          .getService(this.imageURL)
          .then(result => console.log(result))
          .catch(error => console.log(error));
	}
	
	constructor(private imagePromiseService: WebApiPromiseService) {}

  ngOnInit() {this.getFiles();}
}
