import {Injectable} from "@angular/core";
import {UserModel} from "../model/user.model";

@Injectable()
export class AuthService{
  public currentUser: UserModel | undefined;

  loginUser(userName: string, password: string){
    this.currentUser = {
      id: 1,
      firstName: 'Juan',
      lastName: 'Ramirez',
      userName: userName
    }
  }

  isAuthenticated(): boolean{
    return !!this.currentUser;
  }

  updateUser(firstName: string, lastName: string){
    this.currentUser!.firstName = firstName;
    this.currentUser!.lastName = lastName;
  }
}
