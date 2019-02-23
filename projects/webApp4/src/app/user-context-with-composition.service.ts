import { UserContext, UserContextService } from '../../../../shareable-lib/user-context/user-context.service';
import { Injectable } from '@angular/core';
import { DefaultUserContextService } from '../../../../shareable-lib/user-context/default-user-context.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class UserContextWithCompositionService implements UserContextService {
    constructor(private readonly defaultUserContextService: DefaultUserContextService) {
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