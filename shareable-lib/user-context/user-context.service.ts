import {Observable} from 'rxjs';
import {InjectionToken} from '@angular/core';

export abstract class UserContextService {
    abstract getUserContext(): Observable<UserContext>;
}

export interface UserContext {
    name: string,
    isAuthenticated: string
}
