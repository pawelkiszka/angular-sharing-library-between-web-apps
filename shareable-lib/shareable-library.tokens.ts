import { AuthenticationService } from './authentication/authentication.service';
import { UserContextService } from './user-context/user-context.service';
import { InjectionToken } from '@angular/core';

export const AUTHENTICATION_SERVICE_TOKEN = new InjectionToken<AuthenticationService>('authentication-service');
export const USER_CONTEXT_SERVICE_TOKEN = new InjectionToken<UserContextService>('user-context-service');
