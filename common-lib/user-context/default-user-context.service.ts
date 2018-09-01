import {Inject, Injectable} from '@angular/core';
import {UserContext, UserContextService} from './user-context.service';
import {AuthenticationService, AuthenticationServiceToken} from '../authentication/authentication.service';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

@Injectable()
export class DefaultUserContextService implements UserContextService {

    constructor(@Inject(AuthenticationServiceToken) private readonly authenticationService: AuthenticationService) {
    }

    getUserContext(): Observable<UserContext> {
        return this.authenticationService.isAuthenticated().pipe(
            map((isAuthenticated: boolean) => <UserContext> {
                name: 'John - from DefaultUserContextService',
                isAuthenticated: isAuthenticated
            })
        );
    }
}
