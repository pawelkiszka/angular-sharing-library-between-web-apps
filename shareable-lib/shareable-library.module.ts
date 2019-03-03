import { ModuleWithProviders, NgModule } from '@angular/core';
import { DefaultUserContextService } from './user-context/default-user-context.service';
import { DefaultAuthenticationService } from './authentication/default-authentication.service';
import { UserContextService } from './user-context/user-context.service';
import { AuthenticationService } from './authentication/authentication.service';

@NgModule({})
export class ShareableLibraryModule {
    public static forRoot(): ModuleWithProviders {
        return {
            ngModule: ShareableLibraryModule,
            providers: [
                {provide: UserContextService, useClass: DefaultUserContextService},
                {provide: AuthenticationService, useClass: DefaultAuthenticationService},
            ]
        };
    }
}
