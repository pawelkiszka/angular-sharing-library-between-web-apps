import { Component, Inject } from '@angular/core';
import { Observable } from 'rxjs';
import { UserContext, UserContextService } from '../../../../shareable-lib/user-context/user-context.service';

@Component({
    selector: 'app-root',
    template: `
        <pre *ngIf="userContext$ | async as userContext">
            Web App 2
            Should be using CustomUserContextService and DefaultAuthenticationService
            
            Name: {{userContext.name}} 
            Is Authenticated: {{userContext.isAuthenticated}} 
        </pre>
    `
})
export class AppComponent {
    public readonly userContext$: Observable<UserContext>;

    constructor(private readonly userContextService: UserContextService) {
        this.userContext$ = this.userContextService.getUserContext();
    }
}
