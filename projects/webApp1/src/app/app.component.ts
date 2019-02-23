import { Component, Inject } from '@angular/core';
import { UserContext, UserContextService } from '../../../../shareable-lib/user-context/user-context.service';
import { Observable } from 'rxjs';
import { USER_CONTEXT_SERVICE_TOKEN } from '../../../../shareable-lib/shareable-library.tokens';

@Component({
    selector: 'app-root',
    template: `
        <pre *ngIf="userContext$ | async as userContext">
            Web App 1
            Should be using DefaultUserContextService and DefaultAuthenticationService
                
            Name: {{userContext.name}}
            Is Authenticated: {{userContext.isAuthenticated}}
        </pre>
    `
})
export class AppComponent {
    public readonly userContext$: Observable<UserContext>;

    constructor(@Inject(USER_CONTEXT_SERVICE_TOKEN) private readonly userContextService: UserContextService) {
        this.userContext$ = this.userContextService.getUserContext();
    }
}
