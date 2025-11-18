import { inject } from '@angular/core';
import { CanActivateFn, RedirectCommand, Router } from '@angular/router';

export const teacherGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const userRol = sessionStorage.getItem('roles');

  switch (userRol) {
    
    case '["Admin"]':
      const adminDashboardPath = router.parseUrl('private/admin/dashboard');
      return new RedirectCommand(adminDashboardPath);
      break;
      
    case '["Teacher"]':
      return true;
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
