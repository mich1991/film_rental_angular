import {CanActivateFn, UrlTree, UrlSegmentGroup, UrlSegment, Router} from '@angular/router';
import {AuthService} from "../services/auth.service";
import {inject} from "@angular/core";

export const authGuard: CanActivateFn = (route, state) => {
  console.log(route)
  console.log(state)
  const authService = inject(AuthService);
  const router = inject(Router)
  if (authService.isAdmin.getValue()) {
    return true;
  } else {
    router.navigate(['actors'])
    return false;
  }
};
