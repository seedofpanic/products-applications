import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-application-form',
  templateUrl: './application-form.component.html',
  styleUrls: ['./application-form.component.css']
})
export class ApplicationFormComponent implements OnInit {
  @Output() formInited = new EventEmitter<FormGroup>();
  form: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.form = this.formBuilder.group({
      name: ['', Validators.required],
      phone: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]]
    });

    this.formInited.emit(this.form);
  }

}
