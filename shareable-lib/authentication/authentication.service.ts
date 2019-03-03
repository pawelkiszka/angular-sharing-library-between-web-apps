import { Observable } from 'rxjs';

export abstract class AuthenticationService {
    abstract isAuthenticated(): Observable<string>;
}
