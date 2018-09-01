import {Component, Inject, OnInit} from '@angular/core';
import {UserContext, UserContextService, UserContextServiceToken} from '../../../../common-lib/user-context/user-context.service';
import {Observable} from 'rxjs';

@Component({
    selector: 'app-root',
    template: `
        <div *ngIf="userContext$ | async as userContext">
            Web App 3<br/>
            Should be using DefaultUserContextService and CustomAuthenticationService<br/><br/>
            Name: {{userContext.name}} <br/>
            Is Authenticated: {{userContext.isAuthenticated}} <br/>
        </div>
    `
})
export class AppComponent implements OnInit {
    public userContext$: Observable<UserContext>;

    constructor(@Inject(UserContextServiceToken) private readonly userContextService: UserContextService) {
    }

    public ngOnInit() {
        this.userContext$ = this.userContextService.getUserContext();
    }
}
