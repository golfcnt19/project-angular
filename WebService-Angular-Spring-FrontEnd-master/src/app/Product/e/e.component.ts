import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/Service/service.service';
import { Product } from 'src/app/Modelo/Product';
@Component({
  selector: 'app-e',
  templateUrl: './e.component.html',
  styleUrls: ['./e.component.css']
})
export class EComponent implements OnInit {

  product :Product=new Product();
  constructor(private router:Router,private service:ServiceService) { }

  ngOnInit() {
    this.Ed();
  }

  Ed(){
    let id=localStorage.getItem("id");
    this.service.getProductId(+id)
    .subscribe(data=>{
      this.product=data;
    })

  }
  Ac(product:Product){
    this.service.updateProduct(product)
    .subscribe(data=>{
      this.product=data;
      alert("Se Actualizo con Exito...!!!");
      this.router.navigate(["L"]);
    })
  }
}
