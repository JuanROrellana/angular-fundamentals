import {Component} from "@angular/core";
import {AuthService} from "../user/services/auth.service";

@Component({
  selector: 'nav-bar',
  templateUrl: './nav-bar.component.html',
  styles: [`
    .nav.navbar-nav { font-size: 15px; }
    #searchForm { margin-right: 100px; }
    li > a.active { color: #F97924 }
  `]
})
export class NavbarComponent{
  constructor(public authService: AuthService) {
  }
}
