import { ModuleWithProviders, NgModule } from '@angular/core';
import { DefaultUserContextService } from './user-context/default-user-context.service';
import { AUTHENTICATION_SERVICE_TOKEN, USER_CONTEXT_SERVICE_TOKEN } from './shareable-library.tokens';
import { DefaultAuthenticationService } from './authentication/default-authentication.service';

@NgModule({})
export class ShareableLibraryModule {
    public static forRoot(): ModuleWithProviders {
        return {
            ngModule: ShareableLibraryModule,
            providers: [
                {provide: USER_CONTEXT_SERVICE_TOKEN, useClass: DefaultUserContextService},
                {provide: AUTHENTICATION_SERVICE_TOKEN, useClass: DefaultAuthenticationService},
            ]
        };
    }
}
