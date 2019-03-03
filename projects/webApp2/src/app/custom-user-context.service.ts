import { UserContext, UserContextService } from '../../../../shareable-lib/user-context/user-context.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AuthenticationService } from '../../../../shareable-lib/authentication/authentication.service';
import { Injectable } from '@angular/core';

@Injectable()
export class CustomUserContextService implements UserContextService {

    constructor(private readonly authenticationService: AuthenticationService) {
    }

    public getUserContext(): Observable<UserContext> {
        return this.authenticationService.isAuthenticated().pipe(
            map((isAuthenticated: string) => <UserContext>{
                name: 'Bill => from CustomUserContextService',
                isAuthenticated: isAuthenticated
            })
        );
    }
}
