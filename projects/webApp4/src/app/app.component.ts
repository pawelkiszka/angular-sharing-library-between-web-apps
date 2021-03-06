import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { UserContext, UserContextService } from '../../../../shareable-lib/user-context/user-context.service';

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

    constructor(private readonly userContextService: UserContextService) {
        this.userContext$ = this.userContextService.getUserContext();
    }
}
