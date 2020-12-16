import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Salarie} from "../model/salarie";
import {Observable} from "rxjs";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class SalarieService {

  private url = environment.apiUrl;

  constructor(private httpClient : HttpClient) { }

  public addSalarie(salarie:Salarie):Observable<any>{
    return this.httpClient.post(this.url+'addSalarie',salarie);
  }
  public getSalarieById(cin:string):Observable<any>{
    return this.httpClient.get(this.url+"getSalarie?cin="+cin);
  }
  public findAll():Observable<any>{
    return this.httpClient.get(this.url+"findAll");
  }
}
