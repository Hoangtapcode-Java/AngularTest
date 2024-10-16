import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Posts } from '../model/posts';
@Injectable({
  providedIn: 'root'
})
export class ProductService {
  
  constructor(private httpClient: HttpClient) { }

  findAll(): Observable<Posts[]>{
    return this.httpClient.get<Posts[]>("http://localhost:3000/posts");
  }
}
