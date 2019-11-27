import { Component, OnInit } from '@angular/core';
import {ClientService} from '../../../core/services/client/client.service';
import {Router, ActivatedRoute, Params} from '@angular/router';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-client-edit',
  templateUrl: './client-edit.component.html',
  styleUrls: ['./client-edit.component.css']
})
export class ClientEditComponent implements OnInit {

  form: FormGroup;
  id: number;
  labelPosition = '1';
  constructor(
    private formBuilder: FormBuilder,
    private clientService: ClientService,
    private router: Router,
    private activatedRoute: ActivatedRoute

  ) {
    this.buildForm();
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe((params: Params) => {
      this.id = params.id;
      this.clientService.getClient(this.id)
        .subscribe( client => {
          this.form.patchValue(client);
        });
    });
  }
  saveClient(event: Event) {
    event.preventDefault();
    if (this.form.valid) {
      const client = this.form.value;
      this.clientService.updateClient(this.id, client)
        .subscribe((newClient) => {
          console.log(newClient);
          this.router.navigate(['./admin/clients']);
        });
    }
  }

  private buildForm() {
    this.form = this.formBuilder.group({
      firstName: ['', [Validators.required]],
      secondName: ['', ],
      lastName: ['', [Validators.required]],
      motherLastName: ['', ],
      ci: ['', [Validators.required]],
      phone: ['', ],
      active: ['', ]
    });
  }

}
