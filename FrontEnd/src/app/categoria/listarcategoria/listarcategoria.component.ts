import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-listarcategoria',
  templateUrl: './listarcategoria.component.html',
  styleUrls: ['./listarcategoria.component.css']
})
export class ListarcategoriaComponent implements OnInit {

  constructor() { }
  @Input()
  categorias :any;

  ngOnInit(): void {
}

}
