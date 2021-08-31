import { Component, OnInit } from '@angular/core';
import { UsersService } from '../services/users.service';

@Component({
  templateUrl: 'shell.component.html'
})
export class ShellComponent implements OnInit{
  title!: string;

  constructor(private service: UsersService) {

  }

  ngOnInit(): void {
    this.service.title.subscribe((title: string) => {
      this.title = title
    })
  }
}
