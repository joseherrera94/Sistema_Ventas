import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-filtrocategoria',
  templateUrl: './filtrocategoria.component.html',
  styleUrls: ['./filtrocategoria.component.css']
})
export class FiltrocategoriaComponent implements OnInit {

  constructor(private formBuilder:FormBuilder,
    private location : Location,
    private activateRoute : ActivatedRoute) { }

  form:FormGroup;

categorias=[
  {id_categoria:1,nombre_categ:'Frutas',sn_activo:true},
  {id_categoria:2,nombre_categ:'Verduras',sn_activo:false},  
  {id_categoria:3,nombre_categ:'Lacteos',sn_activo:true}
]

categoriaOriginal  = this.categorias;

formOriginal ={
  id_categoria : 0,
  nombre_categ:'',
  sn_activo : true
};

  ngOnInit(): void {
    this.form = this.formBuilder.group(this.formOriginal);

    this.leerQueryParamUrl();
    this.buscarCateg(this.form.value);

    this.form.valueChanges.subscribe(valor => {
      this.categorias = this.categoriaOriginal;
      this.buscarCateg(valor);
      this.escribirParamBusquedaEnUrl();

    })
  }

private escribirParamBusquedaEnUrl(){
  var queryString = [];
  var valoresForm = this.form.value;
  if(valoresForm.nombre_categ){
    console.log(valoresForm.nombre_categ);
    queryString.push(`nombre_categ=${valoresForm.nombre_categ}`);
  }

  this.location.replaceState('categoria/buscar',queryString.join('&'));
}

private leerQueryParamUrl(){
  this.activateRoute.queryParams.subscribe((params)=>{
    var objeto:any={};
    if (params.nombre_categ){
      objeto.nombre_categ =params.nombre_categ; 
    }

    this.form.patchValue(objeto)

  })
}

buscarCateg(categ : any){
    if (categ.nombre_categ){
    this.categorias = this.categorias.filter(categg => categg.nombre_categ.indexOf(categ.nombre_categ) !== -1);
  }
}

  limpiar(){
    this.form.patchValue(this.formOriginal);
  }


}
