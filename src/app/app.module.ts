import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListaPostsComponent } from './componentes/lista-posts/lista-posts.component';
import { DetallePostsComponent } from './componentes/detalle-posts/detalle-posts.component';
import { FormularioComponent } from './componentes/formulario/formulario.component';
import { ReactiveFormsModule } from '@angular/forms';
import { DondeEstamosComponent } from './componentes/donde-estamos/donde-estamos.component';
import { AgmCoreModule } from '@agm/core';

@NgModule({
  declarations: [
    AppComponent,
    ListaPostsComponent,
    DetallePostsComponent,
    FormularioComponent,
    DondeEstamosComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBziBN0V7bqd9xgzRtudHeiOvgAwQC9wiA'
    })

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
