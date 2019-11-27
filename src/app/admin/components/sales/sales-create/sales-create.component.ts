import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: 'app-sales-create',
  templateUrl: './sales-create.component.html',
  styleUrls: ['./sales-create.component.css']
})
export class SalesCreateComponent implements OnInit {
  form: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
  ) {
    this.buildForm();
  }

  ngOnInit() {
  }
  private buildForm() {
    this.form = this.formBuilder.group({
      firstName: ['', [Validators.required]],
      secondName: ['', ],
      lastName: ['', [Validators.required]],
      motherLastName: ['', ],
      roleId: ['', [Validators.required]],
      nick: ['', ],
      password: ['', ]
    });
  }

}
