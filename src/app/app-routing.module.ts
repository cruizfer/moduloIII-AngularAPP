import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetallePostsComponent } from './componentes/detalle-posts/detalle-posts.component';
import { DondeEstamosComponent } from './componentes/donde-estamos/donde-estamos.component';
import { FormularioComponent } from './componentes/formulario/formulario.component';
import { ListaPostsComponent } from './componentes/lista-posts/lista-posts.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: ListaPostsComponent },
  { path: 'posts', component: ListaPostsComponent },
  { path: 'post/:postId', component: DetallePostsComponent },
  { path: 'new', component: FormularioComponent },
  { path: 'donde-estamos', component: DondeEstamosComponent },
  { path: '**', component: ListaPostsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
