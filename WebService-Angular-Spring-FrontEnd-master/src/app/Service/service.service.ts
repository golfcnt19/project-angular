import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Persona } from '../Modelo/Persona';
import { Product } from '../Modelo/Product';
import { Customer } from '../Modelo/Customer';

@Injectable()
export class ServiceService {

  
  constructor(private http:HttpClient) { }

  Url='http://localhost:8080/ejemplo01/personas';
  Url2='http://localhost:8081/products';
  Url3='http://localhost:8082/customer';
  getPersonas(){
    return this.http.get<Persona[]>(this.Url);
  }
  createPersona(persona:Persona){
    return this.http.post<Persona>(this.Url,persona);
  }
  getPersonaId(id:number){
    return this.http.get<Persona>(this.Url+"/"+id);
  }
  updatePersona(persona:Persona){
    return this.http.put<Persona>(this.Url+"/"+persona.id,persona);
  }
  deletePersona(persona:Persona){
    return this.http.delete<Persona>(this.Url+"/"+persona.id);
  }

  getProduct(){
    return this.http.get<Product[]>(this.Url2);
  }
  deleteProduct(product:Product){
    return this.http.delete<Persona>(this.Url2+"/"+product.id);
  }
  createProduct(product:Product){
    return this.http.post<Product>(this.Url2,product);
  }
  getProductId(id:number){
    return this.http.get<Product>(this.Url2+"/"+id);
  }
  updateProduct(product:Product){
    return this.http.put<Product>(this.Url2+"/"+product.id,product);
  }

  getCustomer(){
    return this.http.get<Customer[]>(this.Url3);
  }

  deleteCustomer(customer:Customer){
    return this.http.delete<Customer>(this.Url3+"/"+customer.id);
  }
  getCustomerId(id:number){
    return this.http.get<Customer>(this.Url3+"/"+id);
  }
  updateCustomer(customer:Customer){
    return this.http.put<Customer>(this.Url3+"/"+customer.id,customer);
  }
  createCustomer(customer:Customer){
    return this.http.post<Customer>(this.Url3,customer);
  }

}
