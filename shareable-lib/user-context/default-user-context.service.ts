import { Inject, Injectable } from '@angular/core';
import { UserContext, UserContextService } from './user-context.service';
import { AuthenticationService } from '../authentication/authentication.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class DefaultUserContextService implements UserContextService {

    constructor(private readonly authenticationService: AuthenticationService) {
    }

    public getUserContext(): Observable<UserContext> {
        return this.authenticationService.isAuthenticated().pipe(
            map((isAuthenticated: string) => <UserContext> {
                name: 'John  => from DefaultUserContextService',
                isAuthenticated: isAuthenticated
            })
        );
    }
}
