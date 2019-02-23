import {AuthenticationService} from '../../../../shareable-lib/authentication/authentication.service';
import {Observable, of} from 'rxjs';
import {Injectable} from '@angular/core';

@Injectable()
export class CustomAuthenticationService implements AuthenticationService {

    public isAuthenticated(): Observable<string> {
        return of('Called isAuthenticated() method from CustomAuthenticationService');
    }
}
