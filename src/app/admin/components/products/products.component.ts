import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { BaseComponent, SpinnerType } from 'src/app/base/base.component';
import { Create_Product } from 'src/app/contracts/create_product';
import { HttpClientService } from 'src/app/services/common/http-client.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent extends BaseComponent implements OnInit {

  constructor(spinner: NgxSpinnerService, private httpClientService:HttpClientService) {
    super(spinner)
   }

  ngOnInit(): void {
    this.showSpinner(SpinnerType.CubeTransition);
    // this.httpClientService.get<Product[]>(
    //   {
    //     controller:"Products"
    //   }).subscribe(data=>console.log(data));

// 
      

      // this.httpClientService.put(
      //   {controller:"Products"},
      //   {
      //   id:"2ef45c85-f526-4185-b068-1bf8f361188e",
      //   name:"Faysalmııııaaaaaaa",
      //   price:99,
      //   stock:500}).subscribe();



      // this.httpClientService.post(
      //   { controller:"Products" },
      //   {
      //     name:"Mahmut2",
      //     price:250,
      //     stock:25
      //   }
      // ).subscribe();
      

      // this.httpClientService.delete({controller:"products"},"5e5b3a30-b102-4bcb-b0ba-991e8da66e20").subscribe();



      

// this.httpClientService.get({fullEndpoint:"https://jsonplaceholder.typicode.com/posts"}).subscribe(data=>console.log(data));
     
  }

}


