import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from '../../Service/service.service'
import { Customer } from 'src/app/Modelo/Customer';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  
  customer: Customer[];
  constructor(private service: ServiceService, private router: Router) { }

  ngOnInit() {
    this.service.getCustomer()
      .subscribe(data => {
        this.customer = data;
      });
  }

  Edits(customer:Customer):void{
    localStorage.setItem("id",customer.id.toString());
    this.router.navigate(["edits"]);
  }

  Deletes(customer:Customer){
    this.service.deleteCustomer(customer)
    .subscribe(data=>{
      this.customer=this.customer.filter(p=>p!==customer);
      alert("Usuario eliminado...");
    })
  }


}
