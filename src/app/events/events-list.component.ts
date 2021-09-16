import {Component, OnInit} from "@angular/core";
import {ToastrService} from "../common/toastr.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  templateUrl: './events-list.component.html',
  styles: [`
    .well div {color: red;}
  `]
})
export class EventsListComponent implements OnInit{
  events: any = [];

  constructor(private toastrService: ToastrService, private route: ActivatedRoute) {}

  ngOnInit(){
    this.events = this.route.snapshot.data['events'];
  }

  handleThumbnailClick(eventName: string){
    this.toastrService.success(eventName);
  }
}
