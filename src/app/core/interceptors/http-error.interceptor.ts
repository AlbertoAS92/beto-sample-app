import { Injectable } from '@angular/core';
import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable()
export class HttpErrorInterceptor implements HttpInterceptor {
  private readonly token = 'Authorized';

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log('Request intercepted');
    const authReq = request.clone({
      setHeaders: {
        Authorization: `Bearer ${this.token}`
      }
    });
    console.log('Sending request with new header');
    return next.handle(authReq).pipe(
      catchError(errorResponse => {
        if (errorResponse instanceof HttpErrorResponse) {
          console.log('Error ocurred');
          return throwError(errorResponse);
        }
      })
    );
  }

}
