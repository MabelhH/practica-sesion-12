import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CuerpoComponent } from './cuerpo/cuerpo.component';



@NgModule({
  declarations: [
    CuerpoComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    CuerpoComponent
  ]
})
export class BodyModule { }
