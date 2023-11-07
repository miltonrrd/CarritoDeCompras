import { Injectable } from "@angular/core";
import { IProducto } from "./producto.component";
import { BehaviorSubject, Observable } from "rxjs";

@Injectable({
    providedIn :'root'
})
export class ProductosSeleccionadosService{
    private productosSeleccionados : BehaviorSubject<IProducto[]> = new BehaviorSubject<IProducto[]>([]);

    getArreglo():Observable<IProducto[]>{
        return this.productosSeleccionados.asObservable();
      }
    
      setArreglo(nuevoArreglo: IProducto[]): void {
        this.productosSeleccionados.next(nuevoArreglo);
      }
    }