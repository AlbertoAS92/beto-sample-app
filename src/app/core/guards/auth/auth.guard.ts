import { Injectable } from '@angular/core';
import { CanLoad, Router } from '@angular/router';

import { AuthService } from '../../services/auth/auth.service';

@Injectable()
export class AuthGuard implements CanLoad {
  private readonly loginUrl = ['login'];

  constructor(private authService: AuthService,
              private router: Router) {}

  canLoad(): boolean {
    if (!this.getAppUser()) {
      this.router.navigate(this.loginUrl);
      return false;
    }
    return true;
  }

  private getAppUser(): boolean {
    return localStorage.getItem('appUser') !== null;
  }
}
