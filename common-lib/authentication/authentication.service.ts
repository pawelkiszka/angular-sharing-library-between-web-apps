import {InjectionToken} from '@angular/core';
import {Observable} from 'rxjs';

export const AuthenticationServiceToken = new InjectionToken<AuthenticationService>('authentication-service');

export interface AuthenticationService {
    isAuthenticated(): Observable<string>;
}
