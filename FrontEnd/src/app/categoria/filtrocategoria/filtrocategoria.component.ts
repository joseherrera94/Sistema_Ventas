import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-filtrocategoria',
  templateUrl: './filtrocategoria.component.html',
  styleUrls: ['./filtrocategoria.component.css']
})
export class FiltrocategoriaComponent implements OnInit {

  constructor(private formBuilder:FormBuilder) { }

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

    this.form.valueChanges.subscribe(valor => {
      this.categorias = this.categoriaOriginal;
      this.buscarCateg(valor);
    })
  }

buscarCateg(categ : any){
  
  console.log(this.categorias);
  if (categ.nombre_categ){
    this.categorias = this.categorias.filter(categg => categg.nombre_categ.indexOf(categ.nombre_categ) !== -1);
  }
}

  limpiar(){
    this.form.patchValue(this.formOriginal);
  }

}
