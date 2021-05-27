import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Coordenada } from 'src/app/utilidades/mapa/coordenada';
import { primeraLetraMayuscula } from 'src/app/validadores/primeraletraMayus';
import { categoriaDTO, crearcategoriaDTO } from '../categoria';

@Component({
  selector: 'app-formulariocategoria',
  templateUrl: './formulariocategoria.component.html',
  styleUrls: ['./formulariocategoria.component.css']
})
export class FormulariocategoriaComponent implements OnInit {

  constructor(private router: Router,private formBuilder : FormBuilder) { }
 
  form : FormGroup ;

@Input()
modelo:categoriaDTO;

@Output()
Onsubmit: EventEmitter<crearcategoriaDTO> = new EventEmitter<crearcategoriaDTO>();

coordenadaIni : Coordenada[]=[];

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      nombre : ['',{
        validators:[Validators.required,Validators.maxLength(50),primeraLetraMayuscula()]
      }],
      sn_activo:true,
      foto:'',
      descripcion:'',
      latitud:'',
      longitud:'',
    });

    if (this.modelo != undefined){
      this.form.patchValue(this.modelo);
      this.coordenadaIni.push({latitud:this.modelo.latitud,longitud:this.modelo.longitud});
    }
  }
 
  archivoSelec(file){
    //console.log('foto ' + file);
    this.form.get('foto').setValue(file);
  }

  cambioMarkDown(texto){
    this.form.get('descripcion').setValue(texto);
  }

  coordenadaSelectt(coordenada : Coordenada){
    this.form.patchValue(coordenada);
  }

guardarCategoria(){
  this.Onsubmit.emit(this.form.value);
}

  ObtenerErrorCampoNombre(){
    var campo = this.form.get('nombre');
    if (campo.hasError('required')){
      return 'Nombre Obligatorio';
    }
    if (campo.hasError('maxlength')){
      return 'No debe superar los 50 caracteres';
    }

    if (campo.hasError('primeraLetraMayuscula')){
      return campo.getError('primeraLetraMayuscula').mensaje;
    }
    return '';
  }

}
