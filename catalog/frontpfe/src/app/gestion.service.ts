import { pfe } from './../model/Pfe';
import { typepfe } from './../model/TypePfe';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GestionService {

  constructor( private http:HttpClient) { }
  getPfetype()
  {return this.http.get<typepfe[]>("http://127.0.0.1:8080/rest/type")}
  getAllPfe()
  {return this.http.get("http://127.0.0.1:8080/rest/pfe")}
  deletepfe(id:number)
  {return this.http.delete("http://127.0.0.1:8080/rest/deletepfe/"+id)}
  gettypepfe(id:number)
  {return this.http.get("http://127.0.0.1:8080/rest/typepfe/"+id)}
  add(pfe:pfe)
  {return this.http.post("http://127.0.0.1:8080/rest/addpfe/",pfe)}
  type()
  { return this.http.get("http://127.0.0.1:8080/rest/type") }
}
