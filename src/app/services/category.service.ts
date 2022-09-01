import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { environment } from '../../environments/environment';
import { Category } from '../models/category';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private httpclient:HttpClient) { }
  apiUrl:string=`${environment.baseUrl}/category`;

  getCategories() {
    return this.httpclient
      .get<any>(this.apiUrl)
      .pipe(map(result => result.data));
  }

  getCategoryById(id: string) {
    return this.httpclient
      .get<any>(`${this.apiUrl}/${id}`)
      .pipe(map(result => result.data));
  }

  addCategory(category: Category) {
    return this.httpclient.post<any>(this.apiUrl, category);
  }


  updateCategory(categoryId: string, category: Category) {
    console.log(categoryId);
    console.log(category);
    return this.httpclient.put<any>(`${this.apiUrl}/${categoryId}`, category);
  }

  deleteCategory(categoryId: string) {
    return this.httpclient.delete<any>(`${this.apiUrl}/${categoryId}`);
  }
}
