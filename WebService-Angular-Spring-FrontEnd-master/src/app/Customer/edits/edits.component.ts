import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/Service/service.service';
import { Customer } from 'src/app/Modelo/Customer';

@Component({
  selector: 'app-edits',
  templateUrl: './edits.component.html',
  styleUrls: ['./edits.component.css']
})
export class EditsComponent implements OnInit {

  customer :Customer=new Customer();
  constructor(private router:Router,private service:ServiceService) { }

  ngOnInit() {
    this.Edits();
  }

  Edits(){
    let id=localStorage.getItem("id");
    this.service.getCustomerId(+id)
    .subscribe(data=>{
      this.customer=data;
    })

  }
  Actualizars(customer:Customer){
    this.service.updateCustomer(customer)
    .subscribe(data=>{
      this.customer=data;
      alert("Se Actualizo con Exito...!!!");
      this.router.navigate(["lists"]);
    })
  }
}
