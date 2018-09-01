import {UserContext, UserContextService} from '../../../../common-lib/user-context/user-context.service';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {AuthenticationService, AuthenticationServiceToken} from '../../../../common-lib/authentication/authentication.service';
import {Inject, Injectable} from '@angular/core';

@Injectable()
export class CustomUserContextService implements UserContextService {

    constructor(@Inject(AuthenticationServiceToken) private readonly authenticationService: AuthenticationService) {
    }

    public getUserContext(): Observable<CustomUserContext> {
        return this.authenticationService.isAuthenticated().pipe(
            map((isAuthenticated: boolean) => <CustomUserContext> {
                name: 'Bill - from CustomUserContextService',
                isAuthenticated: isAuthenticated,
                customProperty: 'this is custom property, that comes from CustomUserContext'
            })
        );
    }
}

export interface CustomUserContext extends UserContext {
    customProperty: string
}
