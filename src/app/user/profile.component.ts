import {Component, OnInit} from '@angular/core'
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "./services/auth.service";
import {Router} from "@angular/router";

@Component({
  templateUrl: './profile.component.html',
  styles: [`
    em { float: right; color: #E05C65; padding-left: 10px; }
    .error input { background-color: #E3C3C5 }
    .error ::-webkit-input-placeholder {color: #999 }
  `]
})
export class ProfileComponent implements OnInit{

  constructor(public authService: AuthService, private router: Router) {
  }

  profileForm: FormGroup = new FormGroup({
    firstName: new FormControl(this.authService.currentUser?.firstName),
    lastName: new FormControl(this.authService.currentUser?.lastName)
  });
  
  firstName: FormControl = new FormControl();
  lastName: FormControl= new FormControl();

  ngOnInit(): void {
    this.firstName = new FormControl(
      this.authService.currentUser?.firstName,
      Validators.required
    );
    this.lastName = new FormControl(
      this.authService.currentUser?.lastName,
      Validators.required);
    this.profileForm = new FormGroup({
      firstName: this.firstName,
      lastName: this.lastName
    });
  }

  cancel(){
    this.router.navigate(['events']);
  }

  saveProfile(formValues: any){
    if (this.profileForm.valid){
      this.authService.updateUser(formValues.firstName, formValues.lastName);
      this.router.navigate(['events']);
    }
  }

  validateLastName(){
    return this.lastName.invalid || this.lastName.untouched;
  }

  validateFirstName(){
    return this.firstName.invalid || this.firstName.untouched;
  }
}
