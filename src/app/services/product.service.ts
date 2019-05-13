import { Injectable, EventEmitter } from '@angular/core';
import { Product } from '../interfaces/product';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  list: Array<Product>;
  endpointBase: string = environment.apiUrl + "test"
  onLoadList: EventEmitter<Array<Product>> = new EventEmitter();

  constructor(
    private httpClient: HttpClient
  ) {
  }

  add(product: Product) {
    this.httpClient.post(this.endpointBase, product, this.getHttpOptions()).toPromise();
  }

  loadList(): Promise<void> {
    return new Promise((resolve, reject) => {
      this.httpClient.get(this.endpointBase, this.getHttpOptions()).subscribe(response => {
        //TODO: Problema de CORS
      })
    })
  }

  getHttpOptions(): any {
    return {
      headers: new HttpHeaders({
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Credentials': '*',
        'Access-Control-Allow-Methods': '*',
        'Access-Control-Allow-Headers': '*',
        'Content-Type': 'application/json'
      })
    }
  }
}
