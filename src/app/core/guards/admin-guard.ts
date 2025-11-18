import { inject } from '@angular/core';
import { CanActivateFn, RedirectCommand, Router } from '@angular/router';

export const adminGuard: CanActivateFn = (route, state) => {

  const router = inject(Router);
  const userRol = sessionStorage.getItem('roles');

  switch (userRol) {
    
    case '["Admin"]':
      return true;
      break;
    
    case '["Teacher"]':
      const teacherDashboardPath = router.parseUrl('private/teacher/dashboard');
      return new RedirectCommand(teacherDashboardPath);
      break;
    
    case '["Student"]':
      const studentDashboardPath = router.parseUrl('private/student/dashboard');
      return new RedirectCommand(studentDashboardPath);
      break;
    
    default:
      const loginPath = router.parseUrl('public/auth/login');
      return new RedirectCommand(loginPath);
      break;
  }

};
