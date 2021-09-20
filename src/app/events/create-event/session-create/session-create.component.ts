import {Component, OnInit, Output, EventEmitter} from "@angular/core";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ISession} from "../../../models";

@Component({
  templateUrl: './session-create.component.html',
  selector: 'create-session'
})
export class SessionCreateComponent implements OnInit {

  @Output() saveNewSession = new EventEmitter();
  @Output() cancelAddSession = new EventEmitter();

  public name: FormControl | undefined;
  public duration: FormControl | undefined;
  public presenter: FormControl | undefined;
  public abstract: FormControl | undefined;
  public level: FormControl | undefined;

  public newSessionForm: FormGroup = new FormGroup({
    name: new FormControl(''),
    duration: new FormControl(''),
    presenter: new FormControl(''),
    abstract: new FormControl(''),
    level: new FormControl(''),
  });

  ngOnInit(): void {
    this.name = new FormControl('', Validators.required);
    this.duration = new FormControl('', Validators.required);
    this.presenter = new FormControl('', Validators.required);
    this.abstract = new FormControl('', Validators.required);
    this.level = new FormControl('', [Validators.required, Validators.maxLength(400) ]);

    this.newSessionForm = new FormGroup({
      name: this.name,
      duration: this.duration,
      presenter: this.presenter,
      abstract: this.abstract,
      level: this.level,
    });
  }

  saveSession(formData: any){
    let session: ISession = {
      id: undefined,
      name: formData.name,
      duration: +formData.duration,
      level: formData.level,
      presenter: formData.presenter,
      abstract: formData.abstract,
      voters : []
    };
    this.saveNewSession.emit(session);
  }

  cancel(){
    this.cancelAddSession.emit();
  }

}
