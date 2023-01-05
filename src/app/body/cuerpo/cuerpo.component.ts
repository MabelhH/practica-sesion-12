import { Component } from '@angular/core';

@Component({
  selector: 'app-cuerpo',
  templateUrl: './cuerpo.component.html',
  styleUrls: ['./cuerpo.component.css']
})
export class CuerpoComponent {
 mostrar:boolean=false
 mensage:string='cel:937375934,Email:clarhunaco23@gmail.com,Locacion:Arequipa-PERU';
 mensage_contacto:string='mostrar';

 mostrarocultar(){
  if(this.mostrar){
    this.mostrar=false;
    this.mensage_contacto='click para mostrar datos';
  }else{
    this.mostrar=true;
    this.mensage_contacto='contactos';

  }
 }
 public valores:string[]=[
  'honestidad','justicia','empatia','creatividad','constancia'
  
]

public valores2:string[]=[
  
    'tranparencia','libertad','puntualidad','adaptabilidad',
  
]



}
