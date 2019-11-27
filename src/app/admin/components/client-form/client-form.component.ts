import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {ClientService} from '../../../core/services/client/client.service';

@Component({
  selector: 'app-client-form',
  templateUrl: './client-form.component.html',
  styleUrls: ['./client-form.component.css']
})
export class ClientFormComponent implements OnInit {
  checked = true;
  indeterminate = false;
  labelPosition = '1';
  disabled = false;
  form: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private clientService: ClientService,
    private router: Router
  ) {
    this.buildForm();
  }

  ngOnInit() {
  }

  saveClient(event: Event) {
    event.preventDefault();
    if (this.form.valid) {
      const client = this.form.value;
      this.clientService.createClient(client)
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
