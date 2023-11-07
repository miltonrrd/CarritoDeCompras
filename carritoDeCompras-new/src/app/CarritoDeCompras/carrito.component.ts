import { Component, OnChanges, OnInit, SimpleChanges } from "@angular/core";
import { IProducto } from "../Productos/producto.component";
import { ProductosSeleccionadosService } from "../Productos/productos-selecciondos.service";
import { Subscription } from "rxjs";


@Component({
    selector: 'pm-carrito',
    templateUrl: './carrito.component.html'
})
export class CarritoComponent implements OnInit{
   pageTitle : string = "Carrito";
   productosSeleccionados: IProducto[] = [];
   totalProducto: number = 0;
   sumatoriaTotal : number= 0;
   seleccionadosSub! : Subscription;
   errorMessage : string ='';
   cantidad : number = 1;
    constructor(private seleccionadosService: ProductosSeleccionadosService){}

    quitarProducto(producto :IProducto){
        this.productosSeleccionados = this.productosSeleccionados.filter(p => p.productCode !== producto.productCode);
        this.seleccionadosService.setArreglo(this.productosSeleccionados);
        this.actualizarCantidad();
    }
    actualizarCantidad() {
        this.sumatoriaTotal = 0;
        this.productosSeleccionados.forEach(producto =>this.sumatoriaTotal += producto.price* producto.cantidad);
      }

   ngOnInit(): void {
    this.seleccionadosSub = this.seleccionadosService.getArreglo().subscribe({
        next: seleccionados => this.productosSeleccionados = seleccionados,
        error: err => this.errorMessage = err 
    })
    this. sumatoriaTotal = 0;
    this.productosSeleccionados.forEach(producto =>this.sumatoriaTotal += producto.price* producto.cantidad)
   }

  
}