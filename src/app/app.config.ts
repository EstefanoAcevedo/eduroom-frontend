import { ApplicationConfig, provideBrowserGlobalErrorListeners, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { app_routes } from './app.routes';
import { admin_routes } from './features/admin/admin.routes';
import { auth_routes } from './features/auth/auth.routes';
import { student_routes } from './features/student/student.routes';
import { teacher_routes } from './features/teacher/teacher.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(app_routes),
    provideRouter(admin_routes),
    provideRouter(auth_routes),
    provideRouter(student_routes),
    provideRouter(teacher_routes),
  ]
};
