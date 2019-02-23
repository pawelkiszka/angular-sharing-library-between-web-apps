import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ShareableLibraryModule } from '../../../../shareable-lib/shareable-library.module';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        ShareableLibraryModule.forRoot(),
    ],
    bootstrap: [
        AppComponent
    ]
})
export class AppModule {
}
