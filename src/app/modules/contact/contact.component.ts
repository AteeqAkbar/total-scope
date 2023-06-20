import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent implements OnInit {
  contactForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.contactForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', Validators.required],
      message: ['', Validators.required],
    });
  }

  onSubmit() {
    if (this.contactForm.valid) {
      // Handle form submission here
      console.log(this.contactForm.value);
    } else {
      // Form is invalid, display validation errors
      // You can mark form controls as touched to trigger validation messages
      Object.keys(this.contactForm.controls).forEach((field) => {
        const control = this.contactForm.get(field);
        control?.markAsTouched({ onlySelf: true });
      });
    }
  }
}
