import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/Service/service.service';
import { Product } from 'src/app/Modelo/Product';
@Component({
  selector: 'app-a',
  templateUrl: './a.component.html',
  styleUrls: ['./a.component.css']
})

export class AComponent implements OnInit {

  product:Product = new Product();
  constructor(private router:Router, private service:ServiceService) { }

  ngOnInit() {
  }

  GG(){
    this.service.createProduct(this.product)
    .subscribe(data=>{
      alert("Se Agrego con Exito...!!!");
      this.router.navigate(["L"]);
    })
  }

}
