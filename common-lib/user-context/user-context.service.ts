import {Observable} from 'rxjs';
import {InjectionToken} from '@angular/core';

export const UserContextServiceToken = new InjectionToken('user-context-service');

export interface UserContextService {
    getUserContext(): Observable<UserContext>;
}

export interface UserContext {
    name: string,
    isAuthenticated: boolean
}
