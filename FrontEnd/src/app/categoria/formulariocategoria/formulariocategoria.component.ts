import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { primeraLetraMayuscula } from 'src/app/validadores/primeraletraMayus';
import { crearcategoriaDTO } from '../categoria';

@Component({
  selector: 'app-formulariocategoria',
  templateUrl: './formulariocategoria.component.html',
  styleUrls: ['./formulariocategoria.component.css']
})
export class FormulariocategoriaComponent implements OnInit {

  constructor(private router: Router,private formBuilder : FormBuilder) { }
 
  form : FormGroup ;

@Input()
modelo:crearcategoriaDTO;

@Output()
submit: EventEmitter<crearcategoriaDTO> = new EventEmitter<crearcategoriaDTO>();

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      nombre : ['',{
        validators:[Validators.required,Validators.maxLength(50),primeraLetraMayuscula()]
      }],
      sn_activo:true
    });

    if (this.modelo != undefined){
      this.form.patchValue(this.modelo);
    }
  }
 
guardarCategoria(){
  this.submit.emit(this.form.value);
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
