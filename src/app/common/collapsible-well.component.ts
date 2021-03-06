import {Component, Input} from "@angular/core";

@Component({
  selector: 'collapsible-well',
  template: `
    <div (click)="toggleContent()" class="well pointable">
      <h4>
        <ng-content select="[well-title]"></ng-content>
      </h4>
      <ng-content select="[well-body]" *ngIf="visible">
      </ng-content>
    </div>
  `
})
export class CollapsibleWellComponent{
  @Input() title: string | undefined;
  visible: boolean = false;
  toggleContent(){
    this.visible = !this.visible;
  }
}
