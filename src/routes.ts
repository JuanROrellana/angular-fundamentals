import {EventsListComponent} from "./app/events/events-list.component";
import {EventDetailComponent} from "./app/events/event-detail/event-detail.component";
import {CreateEventComponent} from "./app/events/create-event/create-event.component";
import {Error404Component} from "./app/errors/404.component";
import {EventRouteActivatorService} from "./app/common/event-route-activator.service";
import {EventListResolver} from "./app/common/event-list-resolver";

import {Routes} from "@angular/router";

// @ts-ignore
export const appRoutes: Routes = [
  { path: 'events/new', component: CreateEventComponent, canDeactivate: ['canDeactivateCreateEvent'] },
  // before resolving this route call the EventListResolver
  // after resolver finish and returns data
  // send this data to the route as a property named events
  { path: 'events', component: EventsListComponent, resolve: { events: EventListResolver } },
  { path: 'events/:id', component: EventDetailComponent, canActivate: [EventRouteActivatorService] },
  { path: '404', component: Error404Component },
  { path: '', redirectTo: '/events', pathMatch: 'full' },
  {
    path: 'user',
    loadChildren: () =>  import('./app/user/user.module')
      .then(m => m.UserModule)
  }
];
