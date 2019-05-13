import { NotifierService } from 'angular-notifier';
import { Injectable } from '@angular/core';
import {
    HttpInterceptor,
    HttpRequest,
    HttpResponse,
    HttpHandler,
    HttpEvent,
    HttpErrorResponse
} from '@angular/common/http';

import { Observable, throwError} from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable()
export class Interceptor implements HttpInterceptor {
    
    constructor(private notifierService: NotifierService) { }
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        return next.handle(request).pipe(
            map((event: HttpEvent<any>) => {
                if (event instanceof HttpResponse) {
                    if(event.status >= 200 && event.status < 300) {
                        return event;
                    } 
                    else {
                        this.notifierService.notify('default', event.statusText);
                    } 
                }
                return event;
            }),
            catchError((error: HttpErrorResponse) => {
                if(error.error instanceof ErrorEvent) {
                    this.notifierService.notify('warning', error.error.message);
                }
                
                if(error.error.internalCode == 601) {
                    this.notifierService.notify('error', 'Something very bad happened, blame the programmer!');
                }

                if(error.message === 'Http failure response for (unknown url): 0 Unknown Error') {
                    this.notifierService.notify('error', 'Server is sleeping or gone for a walk! Please try again later!');
                } else {
                    this.notifierService.notify('error', error.error.internalMessage);
                }
                return throwError(error);
            }));
    }
}