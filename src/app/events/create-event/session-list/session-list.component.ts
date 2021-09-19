import {Component, Input} from "@angular/core";
import {ISession} from "../../../models";

@Component({
  templateUrl: './session-list.component.html',
  selector: 'session-list'
})
export class SessionListComponent{
  @Input()
  public sessions: ISession[] | undefined;
}
