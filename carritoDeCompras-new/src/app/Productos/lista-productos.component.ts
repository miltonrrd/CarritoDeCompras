import { Component, EventEmitter, OnChanges, OnDestroy, OnInit, Output, SimpleChanges } from "@angular/core";
import { IProducto } from "./producto.component";
import { ProductoService } from "./producto.service";
import { Subscription } from "rxjs";
import { ProductosSeleccionadosService } from "./productos-selecciondos.service";

@Component({
    selector: 'pm-productos',
    templateUrl: './lista-productos.component.html',
    providers : [ProductoService]
})
export class ListaProductoComponent implements OnInit, OnDestroy{
    errorMessage: string = '';
    constructor(private productoService : ProductoService, private seleccionadosService:ProductosSeleccionadosService){};
    pageTitle : string = 'Lista de productos';
    productos : IProducto[] = [];
    productosSeleccionados: IProducto[] = [];
    productosSub! : Subscription;
    seleccionadosSub! : Subscription;
    
    agregarCarrito(producto : IProducto){
        const productoEncontrado = this.productosSeleccionados.find(elem => elem.productId === producto.productId);
        if (!productoEncontrado){
            this.productosSeleccionados.push(producto);
        }else{
            productoEncontrado.cantidad ++;
        }
            
    }
    ngOnInit(): void {
        this.productosSub = this.productoService.getProductos().subscribe({
            next: productos => this.productos = productos,
            error: err => this.errorMessage = err
        })
        this.seleccionadosSub = this.seleccionadosService.getArreglo().subscribe({
            next: seleccionados => this.productosSeleccionados = seleccionados,
            error: err => this.errorMessage = err 
        })
    }

    ngOnDestroy(): void {
        this.productosSub.unsubscribe();
        this.seleccionadosSub.unsubscribe();
    }

    
}