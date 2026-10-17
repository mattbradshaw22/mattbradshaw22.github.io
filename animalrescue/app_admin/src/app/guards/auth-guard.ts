import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

import { Authentication } from '../services/authentication';

export const authGuard: CanActivateFn = () => {
  const authentication = inject(Authentication);
  const router = inject(Router);

  if (authentication.isLoggedIn()) {
    return true;
  }

  return router.createUrlTree(['/login']);
};