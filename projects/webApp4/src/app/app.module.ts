import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DefaultAuthenticationService } from '../../../../shareable-lib/authentication/default-authentication.service';
import { DefaultUserContextService } from '../../../../shareable-lib/user-context/default-user-context.service';
import { UserContextWithCompositionService } from './user-context-with-composition.service';
import { AuthenticationWithCompositionService } from './authentication-with-composition.service';
import { AUTHENTICATION_SERVICE_TOKEN, USER_CONTEXT_SERVICE_TOKEN } from '../../../../shareable-lib/shareable-library.tokens';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule
    ],
    providers: [
        {provide: USER_CONTEXT_SERVICE_TOKEN, useClass: UserContextWithCompositionService},
        {provide: AUTHENTICATION_SERVICE_TOKEN, useClass: AuthenticationWithCompositionService},
        DefaultAuthenticationService,
        DefaultUserContextService
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
