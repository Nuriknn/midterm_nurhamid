import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ParentUser } from './parent-user.interface';
import { ChildUser } from './child-user.interface';

@Component({
  selector: 'app-user',
  template: `
    <h1>Array from parent component</h1>
    <ul>
      <li *ngFor="let user of parentUsers">{{ user.Firstname }} {{ user.Lastname }}</li>
    </ul>

    <h1>Array from child component</h1>
    <ul>
      <li *ngFor="let user of childUsers"> {{user.Firstname}} {{user.Lastname}}</li>
    </ul>
  `,
})
export class UserComponent {
  @Input() parentUsers: ParentUser[] = [];
  @Output() childUsersEvent = new EventEmitter<ChildUser[]>();
  childUsers: ChildUser[] =[
  ];

  ngOnInit() {
    this.childUsersEvent.emit(this.childUsers);
  }
}

