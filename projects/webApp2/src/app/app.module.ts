import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {DefaultAuthenticationService} from '../../../../common-lib/authentication/default-authentication.service';
import {UserContextServiceToken} from '../../../../common-lib/user-context/user-context.service';
import {AuthenticationServiceToken} from '../../../../common-lib/authentication/authentication.service';
import {CustomUserContextService} from './custom-user-context.service';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule
    ],
    providers: [
        {provide: UserContextServiceToken, useClass: CustomUserContextService},
        {provide: AuthenticationServiceToken, useClass: DefaultAuthenticationService}
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
