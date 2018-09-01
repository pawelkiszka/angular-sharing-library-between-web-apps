import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {UserContextServiceToken} from '../../../../common-lib/user-context/user-context.service';
import {CustomAuthenticationService} from './custom-authentication.service';
import {AuthenticationServiceToken} from '../../../../common-lib/authentication/authentication.service';
import {DefaultUserContextService} from '../../../../common-lib/user-context/default-user-context.service';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule
    ],
    providers: [
        {provide: UserContextServiceToken, useClass: DefaultUserContextService},
        {provide: AuthenticationServiceToken, useClass: CustomAuthenticationService}
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
