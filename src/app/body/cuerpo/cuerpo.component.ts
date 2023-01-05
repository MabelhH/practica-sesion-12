import { Component } from '@angular/core';

@Component({
  selector: 'app-cuerpo',
  templateUrl: './cuerpo.component.html',
  styleUrls: ['./cuerpo.component.css']
})
export class CuerpoComponent {
 mostrar:boolean=false
 mensage:string='';
 mensage_contacto:string='mostrar';

 mostrarocultar(){
  if(this.mostrar){
    this.mostrar=false;
    this.mensage_contacto='mostrar';
  }else{
    
  }
 }
}
