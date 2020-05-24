import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from '../../Service/service.service'
import { Pro } from 'src/app/Modelo/Pro';

@Component({
  selector: 'app-listdata',
  templateUrl: './listdata.component.html',
  styleUrls: ['./listdata.component.css']
})
export class ListdataComponent implements OnInit {

  pro: Pro[];
  constructor(private service: ServiceService, private router: Router) { }

  ngOnInit() {
    this.service.getPro()
      .subscribe(data => {
        this.pro = data;
      });
  }
  


  
}

