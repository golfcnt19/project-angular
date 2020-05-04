import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/Service/service.service';
import { Customer } from 'src/app/Modelo/Customer';

@Component({
  selector: 'app-adds',
  templateUrl: './adds.component.html',
  styleUrls: ['./adds.component.css']
})
export class AddsComponent implements OnInit {

  customer:Customer=new Customer();
  constructor(private router:Router, private service:ServiceService) { }

  ngOnInit() {
  }

  Guardars(){
    this.service.createCustomer(this.customer)
    .subscribe(data=>{
      alert("Se Agrego con Exito...!!!");
      this.router.navigate(["lists"]);
    })
  }
}
