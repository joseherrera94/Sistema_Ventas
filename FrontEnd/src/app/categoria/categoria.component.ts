import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-categoria',
  templateUrl: './categoria.component.html',
  styleUrls: ['./categoria.component.css']
})
export class CategoriaComponent implements OnInit {

  constructor() { }

  categorias : any;
  
  ngOnInit(): void {
    this.categorias=[
      {id_categoria:1,nombre_categ:'Frutas',sn_activo:true},
      {id_categoria:2,nombre_categ:'Verduras',sn_activo:false},  
      {id_categoria:3,nombre_categ:'Lacteos',sn_activo:true}
    ]
  }

}
