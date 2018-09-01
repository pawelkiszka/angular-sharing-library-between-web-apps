import {Component, Inject, OnInit} from '@angular/core';
import {UserContextServiceToken} from '../../../../common-lib/user-context/user-context.service';
import {Observable} from 'rxjs';
import {CustomUserContext, CustomUserContextService} from './custom-user-context.service';

@Component({
    selector: 'app-root',
    template: `
        <div *ngIf="userContext$ | async as userContext">
            Web App 2<br/>
            Should be using CustomUserContextService and DefaultAuthenticationService<br/><br/>
            Name: {{userContext.name}} <br/>
            Is Authenticated: {{userContext.isAuthenticated}} <br/>
            Custom Property: {{userContext.customProperty}} <br/>
        </div>
    `
})
export class AppComponent implements OnInit {
    public userContext$: Observable<CustomUserContext>;

    constructor(@Inject(UserContextServiceToken) private readonly userContextService: CustomUserContextService) {
    }

    public ngOnInit() {
        this.userContext$ = this.userContextService.getUserContext();
    }
}
