import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';

import { Authentication } from './authentication';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const authentication = inject(Authentication);

  const token = authentication.getToken();

  if (token) {
    const authRequest = req.clone({
      setHeaders: {
        Authorization: `Bearer ${token}`
      }
    });

    return next(authRequest);
  }

  return next(req);
};