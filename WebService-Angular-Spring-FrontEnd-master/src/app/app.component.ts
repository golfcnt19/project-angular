import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Ejemplo';

  constructor(private router:Router){}

  Listar(){
    this.router.navigate(["listar"]);
  }
  Nuevo(){
    this.router.navigate(["add"]);
  }
  L(){
    this.router.navigate(["L"]);
  }
  A(){
    this.router.navigate(["A"]);
  }
  Lists(){
    this.router.navigate(["lists"]);
  }
  Adds(){
    this.router.navigate(["adds"]);
  }
  PList(){
    this.router.navigate(["plist"]);
  }

}
