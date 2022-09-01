import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Book } from '../models/book';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  apiUrl: string = `${environment.baseUrl}/book`;
  constructor(private httpClient:HttpClient) { }

  getBooks () {
    return this.httpClient
      .get<any>(this.apiUrl)
      .pipe(map(result => result.data));
  }

  getBookById(id: string) {
    return this.httpClient
      .get<any>(`${this.apiUrl}/${id}`)
      .pipe(map(result => result.data));
  }

  getBooksByCategoryId(categoryId: string) {
    return this.httpClient
      .get<any>(`${environment.baseUrl}/books/${categoryId}`)
      .pipe(map(result => result.data));
  }

  addBook(book: Book) {
    return this.httpClient.post<any>(this.apiUrl, book);
  }

  updateBook(bookId: string, book: Book) {
    return this.httpClient.put<any>(`${this.apiUrl}/${bookId}`, book);
  }

  deleteBook(bookId: string) {
    return this.httpClient.delete<any>(`${this.apiUrl}/${bookId}`);
  }

  saveBookImage(image) {
    return this.httpClient.post<any>(`${this.apiUrl}/saveImage`, image);
  }
}
