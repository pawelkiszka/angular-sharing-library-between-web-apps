import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CustomAuthenticationService } from './custom-authentication.service';
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
        {provide: AuthenticationService, useClass: CustomAuthenticationService}
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
