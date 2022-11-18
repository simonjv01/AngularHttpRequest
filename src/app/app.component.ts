import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  title = 'AngularHttpRequest';

  constructor(private http: HttpClient) {

  }

  onProductsCreate(products: {pName: string, desc: string, price: string}){
    console.log(products);
    this.http.post('https://angularrequest-51fca-default-rtdb.firebaseio.com/products.json', products)
    .subscribe((res) => {
      console.log(res);
    });
  }
}


