import { inject } from '@angular/core';
import { CanActivateFn, RedirectCommand, Router } from '@angular/router';

export const studentGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const userRol = sessionStorage.getItem('roles');

  switch (userRol) {
    
    case '["Admin"]':
      const adminDashboardPath = router.parseUrl('private/admin/dashboard');
      return new RedirectCommand(adminDashboardPath);
      break;
    
    case '["Teacher"]':
      const teacherDashboardPath = router.parseUrl('private/teacher/dashboard');
      return new RedirectCommand(teacherDashboardPath);
      break;
    
    case '["Student"]':
      return true;
      break;
    
    default:
      const loginPath = router.parseUrl('public/auth/login');
      return new RedirectCommand(loginPath);
      break;
  }
};
