import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {DefaultAuthenticationService} from '../../../../common-lib/authentication/default-authentication.service';
import {UserContextServiceToken} from '../../../../common-lib/user-context/user-context.service';
import {AuthenticationServiceToken} from '../../../../common-lib/authentication/authentication.service';
import {DefaultUserContextService} from '../../../../common-lib/user-context/default-user-context.service';
import {UserContextWithCompositionService} from './user-context-with-composition.service';
import {AuthenticationWithCompositionService} from './authentication-with-composition.service';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule
    ],
    providers: [
        {provide: UserContextServiceToken, useClass: UserContextWithCompositionService},
        {provide: AuthenticationServiceToken, useClass: AuthenticationWithCompositionService},
        DefaultAuthenticationService,
        DefaultUserContextService
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
