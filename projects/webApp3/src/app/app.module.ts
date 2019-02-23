import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CustomAuthenticationService } from './custom-authentication.service';
import { AUTHENTICATION_SERVICE_TOKEN } from '../../../../shareable-lib/shareable-library.tokens';
import { ShareableLibraryModule } from '../../../../shareable-lib/shareable-library.module';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        ShareableLibraryModule.forRoot()
    ],
    providers: [
        {provide: AUTHENTICATION_SERVICE_TOKEN, useClass: CustomAuthenticationService}
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
