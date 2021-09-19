import {Component} from "@angular/core";
import {Router} from "@angular/router";
import {EventService} from "../../common/event.service";

@Component({
  templateUrl: './create-event.component.html',
  styles: [`
  `]
})
export class CreateEventComponent {
  isDirty: boolean = true;
  event: any;
  constructor(private router: Router, private eventService: EventService) {
  }

  ngOnInit(){
    this.event = {
      name: 'NG Spectacular',
      date: '08/08/2020',
      time: '10am',
      price: 799.99,
      location: {
        address: '456 Happy Street',
        city: 'Felicity',
        country: 'Anularistan'
      },
      onlineUrl: 'http://localhost:4200/events/1',
      imageUrl: 'https://www.howtogeek.com/wp-content/uploads/2018/06/shutterstock_1006988770.png'
    };
  }

  cancel(){
    this.router.navigate(['/events']);
  }

  saveEvent(formValues: any){
    this.eventService.saveEvent(formValues);
    this.isDirty = false;
    this.router.navigate(['/events']);
  }
}
