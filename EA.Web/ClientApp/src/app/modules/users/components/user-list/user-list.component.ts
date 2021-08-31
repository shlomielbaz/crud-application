import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Observable, of, BehaviorSubject } from 'rxjs';

import { User } from '../../models/user.class';
import { UsersService } from '../../services/users.service';

@Component({
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit, AfterViewInit {

  users$ = new Observable<User[]>();

  users: User[] | undefined;

  rows = 10;

  constructor(private service: UsersService, private route: ActivatedRoute, private router: Router) { }

  delete(id: number): void {
    this.service.delete(id).subscribe(() => {
      this.users$ = this.service.load();
    })
  }

  ngAfterViewInit(): void {
    // Workaround: fix ExpressionChangedAfterItHasBeenCheckedError
    setTimeout(() => {
      this.route.data.subscribe(data => {
        this.service.Title = data.title;
      })
    }, 0)
  }

  ngOnInit(): void {
    this.users$ = this.service.load();
  }
}
