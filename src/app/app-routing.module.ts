import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {DropboxLoginComponent} from './dropbox-login/dropbox-login.component';
import {ImageSelectorComponent} from './image-selector/image-selector.component';

const routes: Routes = [
  { path: 'login', component: DropboxLoginComponent },
  { path: 'imageSelector', component: ImageSelectorComponent }
];

@NgModule({
	imports : [RouterModule.forRoot(routes)],
	exports : [RouterModule]
})
export class AppRoutingModule { }
