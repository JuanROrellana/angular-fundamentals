import {Component, Input} from "@angular/core";
import {IEvent} from "../models";

@Component({
  template: `
    <div [routerLink]="['/events', event!.id]"
      class="well hoverwell thumbnail">
      <h2> {{event?.name | uppercase}}</h2>
      <div>Date: {{event?.date | date:'shortDate'}}</div>
      <div [ngClass]="getStartTimeClass()"
           [ngSwitch]="event?.time">Time: {{event?.time}} -
        <span *ngSwitchCase="'8:00 am'">Early Start</span>
        <span *ngSwitchCase="'10:00 am'">Late Start</span>
        <span *ngSwitchDefault>Normal Start</span>
      </div>
      <div>Price: {{event?.price | currency:'USD'}}</div>
      <div [hidden]="!event?.location">
        <span>Location: {{event?.location?.address}}</span>
        <span class="pad-left">{{event?.location?.city}}, {{event?.location?.country}}</span>
      </div>
      <div *ngIf="event?.outlineUrl">
        Online URL: {{event?.onlineUrl}}
      </div>
    </div>
  `,
  selector: 'event-thumbnail',
  styles: [`
    .pad-left {margin-left: 10px;}
    .well div { color: #bbb; }
    .well div { color: #bbb; }
    .thumbnail { min-height: 210px; }
    .green { color: #003300 !important; }
    .bold { font-weight: bolder; }
  `]
})
export class EventThumbnailComponent{

  @Input()
  event: IEvent | null = null;

  getStartTimeClass(){
    // const isEarlyStart = this.event && this.event.time === '8:00 am'
    // return {green: isEarlyStart, bold: isEarlyStart};

    // if ( this.event && this.event.time === '8:00 am')
    //   return 'green bold';
    // return '';

    if ( this.event && this.event.time === '8:00 am')
      return ['green', 'bold'];
    return [];
  }
}
