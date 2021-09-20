import {Component, Input, OnChanges} from "@angular/core";
import {ISession} from "../../../models";

@Component({
  templateUrl: './session-list.component.html',
  selector: 'session-list'
})
export class SessionListComponent implements OnChanges {
  @Input()
  public sessions: ISession[] | undefined;
  visibleSessions: ISession[] = [];

  @Input()
  filterBy: string | undefined;

  ngOnChanges(): void {
    if (this.sessions){
      this.filterSessions(this.filterBy!);
    }
  }

  filterSessions(filterBy: string){
    if (filterBy === 'all'){
      this.visibleSessions = this.sessions!.slice(0);
    } else {
      this.visibleSessions = this.visibleSessions.filter(session => {
        return session.level.toLocaleLowerCase() === filterBy
      })
    }
  }
}
