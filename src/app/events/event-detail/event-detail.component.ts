import {Component, OnInit} from "@angular/core";
import {EventService} from "../../common/event.service";
import {ActivatedRoute} from "@angular/router";
import {IEvent, ISession} from "../../models";

@Component({
  templateUrl: './event-detail.component.html',
  selector: 'event-detail',
  styles: [`
    .container { padding-left: 20px; padding-right: 20px; }
    .event-image { height: 10px; }
    a { cursor: pointer }
  `]
})
export class EventDetailComponent implements OnInit{
  event: IEvent | null = null;
  public addMode: boolean = false;

  constructor(private eventService: EventService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.event = this.eventService.getEvent(+this.route.snapshot.params['id'])!;
  }

  addSession(){
    this.addMode = true;
  }

  saveNewSession(session: ISession){
    const nextId = Math.max.apply(null, this.event!.sessions!.map(s => s.id!));

    session.id = nextId +1;
    this.event?.sessions.push(session);
    this.eventService.updateEvent(this.event!);
    this.addMode = false;
  }
  cancelAddSession(){
    this.addMode = false;
  }
}
