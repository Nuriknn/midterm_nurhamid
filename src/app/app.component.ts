import { Component } from '@angular/core';
import { ParentUser } from './parents-user.interfce';
import { ChildUser } from './child-user.interface';

@Component({
  selector: 'app-root',
  template: `
    <div>
      <app-user [parentUsers]="parentUsers" (childUsersEvent)="receiveChildUsers($event)"></app-user>
    </div>
  `,
})
  export class AppComponent {
    parentUsers: ParentUser[] = [
  { firstname: 'John', lastname: 'Doy', age: 26 },
  { firstname: 'Alix', lastname: 'Smith', age: 19 },
  { firstname: 'Bob', lastname: 'John', age: 30 },
  { firstname: 'Eve', lastname: 'Williams', age: 21 },
  { firstname: 'Charlie', lastname: 'Dick', age: 18 }
  ];
  receiveChildUsers(childUsers: ChildUser[]){
    console.log('Array from child component', childUsers);
  }
  }
  