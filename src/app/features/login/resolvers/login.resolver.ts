import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { User } from '../../../core/services/user/user.model';
import { Observable } from 'rxjs';
import { UserService } from '../../../core/services/user/user.service';

@Injectable()
export class LoginResolver implements Resolve<Observable<User[]>> {
  constructor(private userService: UserService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<User[]> {
    return this.userService.getUsers();
  }
}
