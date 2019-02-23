import { UserContext, UserContextService } from '../../../../shareable-lib/user-context/user-context.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AuthenticationService } from '../../../../shareable-lib/authentication/authentication.service';
import { Inject, Injectable } from '@angular/core';
import { AUTHENTICATION_SERVICE_TOKEN } from '../../../../shareable-lib/shareable-library.tokens';

@Injectable()
export class CustomUserContextService implements UserContextService {

    constructor(@Inject(AUTHENTICATION_SERVICE_TOKEN) private readonly authenticationService: AuthenticationService) {
    }

    public getUserContext(): Observable<CustomUserContext> {
        return this.authenticationService.isAuthenticated().pipe(
            map((isAuthenticated: string) => <CustomUserContext> {
                name: 'Bill => from CustomUserContextService',
                isAuthenticated: isAuthenticated,
                customProperty: 'this is custom property, specific only forCustomUserContext'
            })
        );
    }
}

export interface CustomUserContext extends UserContext {
    customProperty: string
}
