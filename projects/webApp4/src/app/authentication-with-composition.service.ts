import { AuthenticationService } from '../../../../shareable-lib/authentication/authentication.service';
import { Observable } from 'rxjs';
import { DefaultAuthenticationService } from '../../../../shareable-lib/authentication/default-authentication.service';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable()
export class AuthenticationWithCompositionService implements AuthenticationService {
    constructor(private readonly defaultAuthenticationService: DefaultAuthenticationService) {
    }

    public isAuthenticated(): Observable<string> {
        return this.defaultAuthenticationService.isAuthenticated().pipe(
            map((isAuthenticatedFromDefault: string) =>
                `${isAuthenticatedFromDefault} but enriched with AuthenticationWithCompositionService`
            )
        );
    }
}