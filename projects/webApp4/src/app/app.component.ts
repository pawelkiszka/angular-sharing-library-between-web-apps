import { Component, Inject } from '@angular/core';
import { Observable } from 'rxjs';
import { UserContext, UserContextService } from '../../../../shareable-lib/user-context/user-context.service';
import { USER_CONTEXT_SERVICE_TOKEN } from '../../../../shareable-lib/shareable-library.tokens';

@Component({
    selector: 'app-root',
    template: `
        <pre *ngIf="userContext$ | async as userContext">
            Web App 4
            Should be using UserContextWithCompositionService and AuthenticationWithCompositionService
            
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
