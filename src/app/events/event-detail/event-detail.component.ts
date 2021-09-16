import {Component, OnInit} from "@angular/core";
import {EventService} from "../../event.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  templateUrl: './event-detail.component.html',
  selector: 'event-detail',
  styles: [`
    .container { padding-left: 20px; padding-right: 20px; }
    .event-image { height: 10px; }
  `]
})
export class EventDetailComponent implements OnInit{
  event: any;

  constructor(private eventService: EventService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.event = this.eventService.getEvent(+this.route.snapshot.params['id']);
  }
}