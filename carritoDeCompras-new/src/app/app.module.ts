import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ListaProductoComponent } from './Productos/lista-productos.component';
import { HeaderComponent } from './Header/header.component';
import { CarritoComponent } from './CarritoDeCompras/carrito.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ListaProductoComponent,
    CarritoComponent,
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    FormsModule,
    HttpClientModule, 
    RouterModule.forRoot([
      {path: 'productos', component : ListaProductoComponent},
      {path: 'carrito', component: CarritoComponent},
      {path: '', redirectTo: 'productos', pathMatch: 'full'} 
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
