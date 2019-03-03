import { Component, Inject } from '@angular/core';
import { UserContext, UserContextService } from '../../../../shareable-lib/user-context/user-context.service';
import { Observable } from 'rxjs';

@Component({
    selector: 'app-root',
    template: `
        <pre *ngIf="userContext$ | async as userContext">
            Web App 3
            Should be using DefaultUserContextService and CustomAuthenticationService
            
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
