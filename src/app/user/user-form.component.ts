import { Component, Input } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { User } from './user.interface';

@Component({
    selector: 'app-user-form',
    template:'
    <from [formGroup]="userForm" (ngSubmit)="onSubmit()">
        <div class="form-group">
            <label for="firstname"> Firstname:</label>
            <input type="text" formControlName="firstname" class="form-control"/>
            <div *ngIf="userForm.get('firstname').hasError('required')">
                 FirstName is required.
             </div>
        <div *ngIf="userForm.get('firstname').hasError('minlength')">
            Firstname must be at least 3 characters.
        </div>

        <button type="submit" class="btn btn-primary" [disabled]="userForm.invalid">Submit</button>
    </from>
    ',
})

export class UserFormComponent {
    userForm: FormGroup;

    constructor(private fb: FormBuilder) {
        this.userForm = this.fb.group ({
            Id: [null], Firstname:[null,[Validators.required, Validators.minLength(3)]],
        });

    }
    onSubmit() {
        const newUser: User = this.userForm.value;
        console.log('Submit User:', newUser);
    }
    }
}