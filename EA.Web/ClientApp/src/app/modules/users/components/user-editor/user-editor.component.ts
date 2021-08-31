import { AfterViewInit, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, of, BehaviorSubject } from 'rxjs';

import { User } from '../../models/user.class';
import { UsersService } from '../../services/users.service';

@Component({
  templateUrl: './user-editor.component.html',
  styleUrls: ['./user-editor.component.scss']
})
export class UserEditorComponent implements OnInit,  AfterViewInit  {

  user!: User;
  states: any[] = this.service.States;
  mode: string = 'new';

  constructor(private service: UsersService, private route: ActivatedRoute) {

  }

  ngAfterViewInit(): void {
    // Workaround: fix ExpressionChangedAfterItHasBeenCheckedError
    setTimeout(() => {
      this.route.data.subscribe(data => {
        this.service.Title = data.title;
      })
    }, 0)
  }

  save(): void {
    this.service.post({...this.user, state: (this.user.state as any).code}).subscribe(() => {
      debugger;
    })
  }

  update(): void {
    this.service.put({...this.user, state: (this.user.state as any).code}).subscribe(() => {
      debugger;
    })
  }


  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.user = new User();
    if (id) {
      this.service.get(id).subscribe(user => {
        this.user = user;
      });
      this.mode = 'edit'
    }
  }
}
