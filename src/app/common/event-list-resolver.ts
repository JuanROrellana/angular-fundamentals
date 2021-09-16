import {Injectable} from "@angular/core";
import {Resolve} from "@angular/router";
import {EventService} from "./event.service";
import {map} from "rxjs/operators";

@Injectable()
export class EventListResolver implements Resolve<any>{

  constructor(private eventService: EventService) {
  }

  // recieben events on this function and returining back out
  resolve(): any {
    return this.eventService.getEvents().pipe(map(events => events));
  }

}
