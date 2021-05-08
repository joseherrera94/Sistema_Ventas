import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { CategoriaComponent } from './categoria/categoria.component';
import { CrearcategoriaComponent } from './categoria/crearcategoria/crearcategoria.component';
import { EditarcateogiraComponent } from './categoria/editarcateogira/editarcateogira.component';
import { CrearComponent } from './usuario/crear/crear.component';
import { UsuarioComponent } from './usuario/usuario.component';

const routes: Routes = [
  {path:'usuario',component:UsuarioComponent},
  {path:'usuario/crear',component:CrearComponent},
  {path:'categoria',component:CategoriaComponent},
  {path:'categoria/crearcategoria',component:CrearcategoriaComponent},
  {path:'categoria/editarcategoria/:id',component:EditarcateogiraComponent},
  {path:'**',redirectTo:'usuario'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
