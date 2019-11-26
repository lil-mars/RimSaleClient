import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {RimService} from '../../../core/services/rim/rim.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-tire-form',
  templateUrl: './tire-form.component.html',
  styleUrls: ['./tire-form.component.css'],
  providers: [RimService]
})
export class TireFormComponent implements OnInit {

  form: FormGroup;

  constructor(
    private rimService: RimService,
    private formBuilder: FormBuilder,
    private router: Router
  ) {
    this.buildForm();
  }

  ngOnInit() {
  }
  onSubmit() {
    this.rimService.addRim(this.form.value).subscribe(data =>{
      console.log(data);
    });
    this.router.navigate(['admin/tires']);
  }
  private buildForm() {
    this.form = this.formBuilder.group({
      brand: ['', [Validators.required]],
      hoop: ['', ],
      price: ['', [Validators.required]],
      amountAvailable: ['', ],
      description: ['', [Validators.required]],
      active: ['1', ],
    });
  }

}
