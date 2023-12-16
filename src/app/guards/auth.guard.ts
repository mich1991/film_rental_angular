import {CanActivateFn, UrlTree, UrlSegmentGroup, UrlSegment, Router} from '@angular/router';
import {AuthService} from "../services/auth.service";
import {inject} from "@angular/core";
import {take} from "rxjs";

export const authGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  const router = inject(Router)
  let isAdmin;
  authService.getIsAdminObs().pipe(take(1)).subscribe(data => isAdmin = data)
  if (isAdmin) {
    return true;
  } else {
    router.navigate(['actors'])
    return false;
  }
};
