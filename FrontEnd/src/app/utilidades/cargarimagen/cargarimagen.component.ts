import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { toBase64 } from '../utilidades';

@Component({
  selector: 'app-cargarimagen',
  templateUrl: './cargarimagen.component.html',
  styleUrls: ['./cargarimagen.component.css']
})
export class CargarimagenComponent implements OnInit {

  constructor() { }

  
  @Input()
  urlImgActual:string;
  
  @Output()
  archivoSelec : EventEmitter<File> = new  EventEmitter<File>();
  
  imagenBase64:string;

  ngOnInit(): void {
  }

  change(event:any){
    if(event.target.files.length>0){
      const file: File = event.target.files[0];
      toBase64(file).then((valor:any) => this.imagenBase64 = valor)
      .catch(error => console.log(error));
      this.archivoSelec.emit(file);
      this.urlImgActual=null;
    }
  }
}
