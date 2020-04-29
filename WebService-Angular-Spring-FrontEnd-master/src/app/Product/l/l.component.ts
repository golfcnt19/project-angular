import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from '../../Service/service.service'
import { Product } from 'src/app/Modelo/Product';
@Component({
  selector: 'app-l',
  templateUrl: './l.component.html',
  styleUrls: ['./l.component.css']
})
export class LComponent implements OnInit {

  product: Product[];
  constructor(private service: ServiceService, private router: Router) { }

  ngOnInit() {
    this.service.getProduct()
      .subscribe(data => {
        this.product = data;
      });
  }
  Ed(product:Product):void{
    localStorage.setItem("id",product.id.toString());
    this.router.navigate(["E"]);
  }

  D(product:Product){
    this.service.deleteProduct(product)
    .subscribe(data=>{
      this.product=this.product.filter(p=>p!==product);
      alert("Usuario eliminado...");
    })
  }

 
  
}
