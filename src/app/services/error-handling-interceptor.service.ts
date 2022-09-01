import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ErrorHandlingInterceptorService implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    return next.handle(req).pipe(
      catchError(error => {
        return Observable.throw(Error);   
      console.log(error);
      if(error.status=="404")
      {
        alert("sayfa bulunamadı")
      } else {
        alert("Bir hata meydana geldi. Daha sonra tekrar deneyiniz.")
      }
      this.router.navigateByUrl("/");
    })
    
    );
    

    throw new Error('Method not implemented.');
  }

  constructor(private router: Router) { }
}
