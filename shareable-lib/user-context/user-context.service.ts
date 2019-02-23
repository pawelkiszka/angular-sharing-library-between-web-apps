import {Observable} from 'rxjs';
import {InjectionToken} from '@angular/core';

export interface UserContextService {
    getUserContext(): Observable<UserContext>;
}

export interface UserContext {
    name: string,
    isAuthenticated: string
}
