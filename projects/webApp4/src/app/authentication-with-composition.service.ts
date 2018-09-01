import {AuthenticationService} from '../../../../common-lib/authentication/authentication.service';
import {Observable} from 'rxjs';
import {DefaultAuthenticationService} from '../../../../common-lib/authentication/default-authentication.service';
import {Inject, Injectable} from '@angular/core';
import {map} from 'rxjs/operators';

@Injectable()
export class AuthenticationWithCompositionService implements AuthenticationService {
    constructor(@Inject(DefaultAuthenticationService) private readonly defaultAuthenticationService: DefaultAuthenticationService) {
    }

    public isAuthenticated(): Observable<string> {
        return this.defaultAuthenticationService.isAuthenticated().pipe(
            map((isAuthenticatedFromDefault: string) => `${isAuthenticatedFromDefault} but enriched with AuthenticationWithCompositionService`)
        );
    }
}