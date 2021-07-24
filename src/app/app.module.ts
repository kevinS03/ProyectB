import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

//Firebase

import {AngularFireModule} from '@angular/fire'
import {environment} from '../environments/environment'
import {AngularFireDatabaseModule} from '@angular/fire/database'


@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, 
	IonicModule.forRoot(), 
	AppRoutingModule,
	AngularFireDatabaseModule,
	FormsModule,
	AngularFireModule.initializeApp(environment.firebase)
],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
