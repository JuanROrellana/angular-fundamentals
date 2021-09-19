import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {EventsAppComponent} from "./events-app.component";
import {EventsListComponent} from "./events/events-list.component";
import {EventThumbnailComponent} from "./events/event-thumbnail.component";
import {NavbarComponent} from "./nav/navbar.component";
import {EventService} from "./common/event.service";
import {ToastrService} from "./common/toastr.service";
import {EventDetailComponent} from "./events/event-detail/event-detail.component";
import {RouterModule} from "@angular/router";
import {appRoutes} from "../routes";
import {CreateEventComponent} from "./events/create-event/create-event.component";
import {Error404Component} from "./errors/404.component";
import {EventRouteActivatorService} from "./common/event-route-activator.service";
import {EventListResolver} from "./common/event-list-resolver";

@NgModule({
  declarations: [
    EventsAppComponent,
    EventsListComponent,
    EventThumbnailComponent,
    NavbarComponent,
    EventDetailComponent,
    CreateEventComponent,
    Error404Component,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [
    EventService,
    ToastrService,
    EventRouteActivatorService,
    {provide: 'canDeactivateCreateEvent', useValue: checkDirtyState},
    EventListResolver
  ],
  bootstrap: [EventsAppComponent]
})
export class AppModule { }

export function checkDirtyState(component:CreateEventComponent){
  if (component.isDirty)
    return window.confirm('You have not saved this event, cancel anyway?');
  return true;
}
