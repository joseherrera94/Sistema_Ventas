import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule} from '@angular/forms';
import { MarkdownModule} from 'ngx-markdown';

import {MaterialModule} from './material/material.module';
import { MenuComponent } from './menu/menu.component';
import { CrearComponent } from './usuario/crear/crear.component';
import { CrearcategoriaComponent } from './categoria/crearcategoria/crearcategoria.component';
import { CategoriaComponent } from './categoria/categoria.component';
import { UsuarioComponent } from './usuario/usuario.component';
import { EditarcateogiraComponent } from './categoria/editarcateogira/editarcateogira.component';
import { FormulariocategoriaComponent } from './categoria/formulariocategoria/formulariocategoria.component';
import { FiltrocategoriaComponent } from './categoria/filtrocategoria/filtrocategoria.component';
import { ListarcategoriaComponent } from './categoria/listarcategoria/listarcategoria.component';
import { CargarimagenComponent } from './utilidades/cargarimagen/cargarimagen.component';
import { InputmarkdownComponent } from './utilidades/inputmarkdown/inputmarkdown.component';
import {LeafletModule } from '@asymmetrik/ngx-leaflet';
import { MapaComponent } from './utilidades/mapa/mapa.component';
import "leaflet/dist/images/marker-shadow.png";
@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    CrearComponent,
    CrearcategoriaComponent,
    CategoriaComponent,
    UsuarioComponent,
    EditarcateogiraComponent,
    FormulariocategoriaComponent,
    FiltrocategoriaComponent,
    ListarcategoriaComponent,
    CargarimagenComponent,
    InputmarkdownComponent,
    MapaComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule,
    LeafletModule,
    MarkdownModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
