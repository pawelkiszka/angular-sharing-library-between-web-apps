import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CustomUserContextService } from './custom-user-context.service';
import { ShareableLibraryModule } from '../../../../shareable-lib/shareable-library.module';
import { UserContextService } from 'shareable-lib/user-context/user-context.service';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        ShareableLibraryModule.forRoot()
    ],
    providers: [
        {provide: UserContextService, useClass: CustomUserContextService},
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
