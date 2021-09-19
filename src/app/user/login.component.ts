import {Component} from "@angular/core";
import {AuthService} from "./services/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'login-user',
  templateUrl: './login.component.html'
})
export class LoginComponent{
  userName: undefined;
  password: undefined;

  constructor(private authService: AuthService, private router: Router) {
  }

  login(formValues: any){
    this.authService.loginUser(formValues.userName, formValues.password);
    this.router.navigate(['/events']);
  }

  cancel(){
    this.router.navigate(['/events']);
  }
}
