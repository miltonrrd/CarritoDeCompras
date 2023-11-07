import { Injectable } from '@angular/core'
import { IProducto } from './producto.component';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, catchError, tap, throwError } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class ProductoService {
    private productosUrl = 'api/productos/productos.json';
    constructor(private http: HttpClient) { }

    getProductos(): Observable<IProducto[]> {
        return this.http.get<IProducto[]>(this.productosUrl).pipe(
            tap(data => console.log('All: ', JSON.stringify(data))),
            catchError(this.handleError)
        );
    }

    private handleError(err: HttpErrorResponse) {
        let errorMessage = '';
        if (err.error instanceof ErrorEvent) {
            errorMessage = `Un error ocurrió: ${err.error.message};`
        } else {
            errorMessage = `Servidor regresó el código: ${err.status}, mensaje de error es: ${err.message}`;
        }
        console.error(errorMessage);
        return throwError(() => errorMessage);
    }
}