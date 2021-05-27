import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { categoriaDTO, crearcategoriaDTO } from '../categoria';

@Component({
  selector: 'app-editarcateogira',
  templateUrl: './editarcateogira.component.html',
  styleUrls: ['./editarcateogira.component.css']
})
export class EditarcateogiraComponent implements OnInit {

  constructor(private activeRoute: ActivatedRoute,private router : Router ) { }

modelo : categoriaDTO = {
  nombre:"Frutas",
  sn_activo: true,
  foto:'https://i.pinimg.com/originals/90/60/9a/90609aacf7d6e65c654a959ee378c64e.jpg',
  latitud: 4.629309258378028, 
  longitud:-74.20078039169313,
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
