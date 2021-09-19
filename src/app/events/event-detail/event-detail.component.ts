import {Component, OnInit} from "@angular/core";
import {EventService} from "../../common/event.service";
import {ActivatedRoute} from "@angular/router";
import {IEvent} from "../../models";

@Component({
  templateUrl: './event-detail.component.html',
  selector: 'event-detail',
  styles: [`
    .container { padding-left: 20px; padding-right: 20px; }
    .event-image { height: 10px; }
  `]
})
export class EventDetailComponent implements OnInit{
  event: IEvent | null = null;

  constructor(private eventService: EventService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.event = this.eventService.getEvent(+this.route.snapshot.params['id'])!;
  }
}
