import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { primeraLetraMayuscula } from 'src/app/validadores/primeraletraMayus';
import { crearcategoriaDTO } from '../categoria';

@Component({
  selector: 'app-crearcategoria',
  templateUrl: './crearcategoria.component.html',
  styleUrls: ['./crearcategoria.component.css']
})
export class CrearcategoriaComponent implements OnInit {
  
  constructor(private router: Router) { }
 

  ngOnInit(): void {
  }

  grabarCategoria(categoria : crearcategoriaDTO){
    console.log(categoria);
    this.router.navigate(['/categoria']);
  }

}
