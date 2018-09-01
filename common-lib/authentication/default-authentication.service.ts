import {Injectable} from '@angular/core';
import {AuthenticationService} from './authentication.service';
import {Observable, of} from 'rxjs';

@Injectable()
export class DefaultAuthenticationService implements AuthenticationService {

    public isAuthenticated(): Observable<string> {
        return of('True - from DefaultAuthenticationService');
    }
}
