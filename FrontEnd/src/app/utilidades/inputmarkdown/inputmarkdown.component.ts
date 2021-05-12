import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inputmarkdown',
  templateUrl: './inputmarkdown.component.html',
  styleUrls: ['./inputmarkdown.component.css']
})
export class InputmarkdownComponent implements OnInit {

contenidoMarkDown='';

  constructor() { }

  ngOnInit(): void {
  }

  inputTextArea(texto){
    this.contenidoMarkDown = texto;
  }
}
