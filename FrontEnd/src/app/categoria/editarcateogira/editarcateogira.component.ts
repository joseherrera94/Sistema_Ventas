import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { crearcategoriaDTO } from '../categoria';

@Component({
  selector: 'app-editarcateogira',
  templateUrl: './editarcateogira.component.html',
  styleUrls: ['./editarcateogira.component.css']
})
export class EditarcateogiraComponent implements OnInit {

  constructor(private activeRoute: ActivatedRoute,private router : Router ) { }

modelo : crearcategoriaDTO = {
  nombre:"Frutas",
  sn_activo: true
};

  ngOnInit(): void {
    this.activeRoute.params.subscribe(params => {
      //alert(params.id);
    })

  }

    grabarCategoria(categoria : crearcategoriaDTO){
      console.log(categoria);
      this.router.navigate(['/categoria']);
    }

}
