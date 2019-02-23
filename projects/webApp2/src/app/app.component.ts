import { Component, Inject } from '@angular/core';
import { Observable } from 'rxjs';
import { CustomUserContext, CustomUserContextService } from './custom-user-context.service';
import { USER_CONTEXT_SERVICE_TOKEN } from '../../../../shareable-lib/shareable-library.tokens';

@Component({
    selector: 'app-root',
    template: `
        <pre *ngIf="userContext$ | async as userContext">
            Web App 2
            Should be using CustomUserContextService (with it's own, custom model) and DefaultAuthenticationService
            
            Name: {{userContext.name}} 
            Is Authenticated: {{userContext.isAuthenticated}} 
            Custom UserContext Property: {{userContext.customProperty}} 
        </pre>
    `
})
export class AppComponent {
    public readonly userContext$: Observable<CustomUserContext>;

    constructor(@Inject(USER_CONTEXT_SERVICE_TOKEN) private readonly userContextService: CustomUserContextService) {
        this.userContext$ = this.userContextService.getUserContext();
    }
}
