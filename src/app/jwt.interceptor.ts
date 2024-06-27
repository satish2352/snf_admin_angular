import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse,
  HttpErrorResponse,
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
// import { HelperService } from './helper.service';
import { Router } from '@angular/router';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {
  constructor(
    // private helperService: HelperService,
    private router: Router
  ) {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const authToken = localStorage.getItem('access_token');
    if (authToken) {
      request = request.clone({
        setHeaders: {
          authorization: 'Bearer ' + authToken,
        },
      });
    }

    return next.handle(request).pipe(
      catchError((error: HttpErrorResponse) => {
        console.log(error);
        if (error.status === 401) {
          // Token is invalid or expired, redirect to logout API
          // this.helperService.logout();
          // this.router.navigate(['/login']);
        }
        // Pass the error along to the calling code
        return throwError(error);
      })
    );
  }
}
