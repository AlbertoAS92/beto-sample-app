import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../../../../core/services/user/user.model';
import { UserService } from '../../../../core/services/user/user.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'bsa-login-users-available',
  templateUrl: './login-users-available.component.html'
})
export class LoginUsersAvailableComponent implements OnInit {
  resolverName = 'usersAvailable';
  availableUsers$: Observable<User[]>;

  constructor(private userService: UserService,
              private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.availableUsers$ = this.route.data as Observable<User[]>;
  }
}
