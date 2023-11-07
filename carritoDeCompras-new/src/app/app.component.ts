import { Component } from '@angular/core';
import { IProducto } from './Productos/producto.component';

@Component({
  selector: 'pm-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'carritoDeCompras-new';
  productosSeleccionados : IProducto[] =[];
}
