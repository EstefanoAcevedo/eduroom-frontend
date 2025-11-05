import { HttpErrorResponse, HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, throwError } from 'rxjs';
import { environment } from '../../../enviroments/enviroment';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const router = inject(Router);

  // Obtener token del sessionStorage
  const getToken = (): string | null => {
    try {
      return sessionStorage.getItem('authToken');
    } catch {
      return null;
    }
  };

  // Verificar si es una request a la API
  const isApiRequest = req.url.includes(`${environment.apiUrl}`);

  // URLs que no requieren token
  const publicEndpoints = [
    '/login',
    '/register',
    '/roles',
  ];

  const isPublicEndpoint = publicEndpoints.some(endpoint =>
    req.url.includes(endpoint)
  );

  const token = getToken();

  // Si no es request a la API o es endpoint público, continuar sin token
  if (!isApiRequest || isPublicEndpoint) {
    return next(req);
  }

  // Si es request a la API pero no hay token
  if (!token) {
    router.navigate(['/login']);
    return throwError(() => new Error('No authentication token found'));
  }

  // Clonar request y agregar headers de autorización
  const authReq = req.clone({
    setHeaders: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json'
    }
  });

  return next(authReq).pipe(
    catchError((error: HttpErrorResponse) => {
      if (error.status === 401) {
        // Token expirado o inválido
        handleUnauthorized(router);
      } else if (error.status === 403) {
        // Sin permisos
        console.log('Sin permisos');
      }
      return throwError(() => error);
    })
  );
};

// Función para manejar errores de autenticación
function handleUnauthorized(router: Router): void {
  // Limpiar sessionStorage
  sessionStorage.removeItem('authToken');
  sessionStorage.removeItem('user_name');
  sessionStorage.removeItem('roles');

  // Redirigir al login
  router.navigate(['/login'], {
    queryParams: {
      sessionExpired: 'true',
      returnUrl: router.url
    }
  });
};
