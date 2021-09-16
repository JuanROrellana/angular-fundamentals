import {Component} from "@angular/core";
import {Router} from "@angular/router";

@Component({
  templateUrl: './create-event.component.html',
  // selector: 'create-event',
  styles: [`
  `]
})
export class CreateEventComponent {
  constructor(private router: Router) {
  }

  cancel(){
    this.router.navigate(['/events']);
  }
}
