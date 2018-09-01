import {UserContext, UserContextService} from '../../../../common-lib/user-context/user-context.service';
import {Inject, Injectable} from '@angular/core';
import {DefaultUserContextService} from '../../../../common-lib/user-context/default-user-context.service';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

@Injectable()
export class UserContextWithCompositionService implements UserContextService {
    constructor(@Inject(DefaultUserContextService) private readonly defaultUserContextService: DefaultUserContextService) {
    }

    public getUserContext(): Observable<UserContext> {
        return this.defaultUserContextService.getUserContext().pipe(
            map((userContextFromDefault: UserContext) => <UserContext>({
                name: `${userContextFromDefault.name}  but enriched with UserContextWithCompositionService`,
                isAuthenticated: userContextFromDefault.isAuthenticated
            }))
        );
    }
}