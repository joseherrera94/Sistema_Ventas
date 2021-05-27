import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-inputmarkdown',
  templateUrl: './inputmarkdown.component.html',
  styleUrls: ['./inputmarkdown.component.css']
})
export class InputmarkdownComponent implements OnInit {

contenidoMarkDown='';

@Output()
changeMarkDown: EventEmitter<string> = new EventEmitter<string>();


  constructor() { }

  ngOnInit(): void {
  }

  inputTextArea(texto){
    this.contenidoMarkDown = texto.target.value;
    this.changeMarkDown.emit(texto.target.value);
  }
}
