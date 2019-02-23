import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CustomUserContextService } from './custom-user-context.service';
import { USER_CONTEXT_SERVICE_TOKEN } from '../../../../shareable-lib/shareable-library.tokens';
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
        {provide: USER_CONTEXT_SERVICE_TOKEN, useClass: CustomUserContextService},
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
