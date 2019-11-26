import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {RimService} from '../../../../core/services/rim/rim.service';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {Rim} from '../../../../core/models/rim.model';

@Component({
  selector: 'app-tire-edit',
  templateUrl: './tire-edit.component.html',
  styleUrls: ['./tire-edit.component.css'],
  providers: [RimService]
})
export class TireEditComponent implements OnInit {
  form: FormGroup;
  id: string;
  rim: Rim;

  constructor(
    private rimService: RimService,
    private formBuilder: FormBuilder,
    private activateRoute: ActivatedRoute,
    private router: Router
  ) {

    this.buildForm();
  }

  private buildForm() {
    this.form = this.formBuilder.group({
      brand: ['', [Validators.required]],
      hoop: ['',],
      price: ['', [Validators.required]],
      amountAvailable: ['',],
      description: ['', [Validators.required]],
      active: [''],
      id: [this.id, ]
    });
  }

  ngOnInit() {
    this.activateRoute.params.subscribe((params: Params) => {
      this.id = params.id;
    });

    this.rimService.getAllRims().subscribe(data => {
      data.forEach(rim => {
        if (rim.id.toString() === this.id) {
          this.rim = rim;
          this.form.patchValue(this.rim);
        }
      });
    });
  }

  onSubmit() {
    const selectedRim = this.form.value;
    console.log(selectedRim);
    this.rimService.updateRim(selectedRim).subscribe(data => {
      console.log(data);
    });
    this.router.navigate(['admin/tires']);
  }
}
