import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CuerpoComponent } from './body/cuerpo/cuerpo.component';
import { FinalComponent } from './body/final/final.component';

@NgModule({
  declarations: [
    AppComponent,
    CuerpoComponent,
    FinalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
