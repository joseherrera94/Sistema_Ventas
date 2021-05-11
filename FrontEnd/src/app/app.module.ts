import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule} from '@angular/forms'

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
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
