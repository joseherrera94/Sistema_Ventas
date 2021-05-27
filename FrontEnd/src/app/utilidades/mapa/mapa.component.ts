import { Component, OnInit, Output,EventEmitter, Input } from '@angular/core';
import { latLng, LeafletMouseEvent, marker, Marker, tileLayer } from 'leaflet';
import { Coordenada } from './coordenada';

@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.component.html',
  styleUrls: ['./mapa.component.css']
})
export class MapaComponent implements OnInit {

  constructor() { }

@Input()
coordenadaIni : Coordenada[]=[];

@Output()
coordenadaSelect : EventEmitter<Coordenada> = new EventEmitter<Coordenada>();

  ngOnInit(): void {
    this.capas= this.coordenadaIni.map(valor => marker([valor.latitud,valor.longitud]));

  }

  options = {
    layers: [
      tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { maxZoom: 18, attribution: '...' })
    ],
    zoom: 30,
    center: latLng(4.629309258378028, -74.20078039169313)
  };

  capas: Marker<any>[] = [];

  manejarClick(event: LeafletMouseEvent){
    const latitud = event.latlng.lat;
    const longitud = event.latlng.lng;

    //console.log(latitud + "   " + longitud);

    this.capas=[]; 
    this.capas.push(marker([latitud,longitud]));
    this.coordenadaSelect.emit({latitud :latitud ,longitud : longitud})
  }
  
}
