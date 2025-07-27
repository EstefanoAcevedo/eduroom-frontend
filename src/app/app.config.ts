import { ApplicationConfig, provideBrowserGlobalErrorListeners, provideZoneChangeDetection } from '@angular/core';
import { provideRouter, withViewTransitions } from '@angular/router';

import { app_routes } from './app.routes';
import { admin_routes } from './features/admin/admin.routes';
import { auth_routes } from './features/auth/auth.routes';
import { student_routes } from './features/student/student.routes';
import { teacher_routes } from './features/teacher/teacher.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(app_routes, withViewTransitions()),
    provideRouter(auth_routes, withViewTransitions()),
    provideRouter(admin_routes, withViewTransitions()),
    provideRouter(student_routes, withViewTransitions()),
    provideRouter(teacher_routes, withViewTransitions()),
  ]
};
