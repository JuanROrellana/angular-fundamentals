import {Component, OnInit} from "@angular/core";
import {EventService} from "../event.service";
import {ToastrService} from "../common/toastr.service";

@Component({
  templateUrl: './events-list.component.html',
  styles: [`
    .well div {color: red;}
  `]
})
export class EventsListComponent implements OnInit{
  events: any[] = [];

  constructor(private eventService: EventService, private toastrService: ToastrService) {}

  ngOnInit(){
    this.events = this.eventService.getEvents();
  }

  handleThumbnailClick(eventName: string){
    this.toastrService.success(eventName);
  }
}
