import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DefaultAuthenticationService } from '../../../../shareable-lib/authentication/default-authentication.service';
import { DefaultUserContextService } from '../../../../shareable-lib/user-context/default-user-context.service';
import { UserContextWithCompositionService } from './user-context-with-composition.service';
import { AuthenticationWithCompositionService } from './authentication-with-composition.service';
import { UserContextService } from 'shareable-lib/user-context/user-context.service';
import { ShareableLibraryModule } from '../../../../shareable-lib/shareable-library.module';
import { AuthenticationService } from 'shareable-lib/authentication/authentication.service';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        ShareableLibraryModule.forRoot()
    ],
    providers: [
        { provide: UserContextService, useClass: UserContextWithCompositionService },
        { provide: AuthenticationService, useClass: AuthenticationWithCompositionService },
        DefaultAuthenticationService,
        DefaultUserContextService
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
