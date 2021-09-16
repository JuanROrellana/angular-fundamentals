import {EventsListComponent} from "./app/events/events-list.component";
import {EventDetailComponent} from "./app/events/event-detail/event-detail.component";
import {Routes} from "@angular/router";
import {CreateEventComponent} from "./app/events/create-event/create-event.component";

export const appRoutes: Routes = [
  { path: 'events/new', component: CreateEventComponent },
  { path: 'events', component: EventsListComponent },
  { path: 'events/:id', component: EventDetailComponent },
  { path: '', redirectTo: '/events', pathMatch: 'full' },
];
