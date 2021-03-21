import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'fe-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss'],
})
export class ContactUsComponent implements OnInit {
  public form: FormGroup;
  get formControls(): any {
    return this.form.controls;
  }

  constructor(private fb: FormBuilder) {}

  public initializeForm(): void {
    this.form = this.fb.group({
      fullName: [
        null,
        [Validators.required, Validators.pattern("[a-zA-z ']{2,50}")],
      ],
      email: [null, [Validators.required, Validators.email]],
      phone: [
        null,
        [Validators.required, Validators.pattern('^[+]{0,1}380([0-9]{9})$')],
      ],
    });
  }

  public onSubmit(): void {
    if (this.form.valid) {
      // send data
      this.form.reset();
    }
  }

  ngOnInit(): void {
    this.initializeForm();
  }
}
