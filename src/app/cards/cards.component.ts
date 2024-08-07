import { Component, OnInit } from '@angular/core';
import {AbstractControl, FormBuilder, FormGroup, ValidationErrors, Validators} from "@angular/forms";

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent implements OnInit {

  form!: FormGroup;
  formSubmitted: boolean = false;

  cardHolderName: string = "JANE APPLESEED";
  cardNumberValue: string = "0000 0000 0000 0000";
  cardDateMonth: string = "00";
  cardDateYear: string = "00";
  cardCvc: string = "000";

  constructor(private fb: FormBuilder) {
  }

  ngOnInit(): void {
    this.form = this.fb.group({
      cardHolderName: ['', Validators.required],
      cardNumber: ['', [Validators.required, this.cardNumberValidator]],
      cardDateMonth: ['', Validators.required],
      cardDateYear: ['', Validators.required],
      cardCvc: ['', Validators.required],
    });

    this.form.get('cardHolderName')?.valueChanges.subscribe(value => {
      this.cardHolderName = value;
    });
    this.form.get('cardNumber')?.valueChanges.subscribe(value => {
      this.cardNumberValue = value;
    });
    this.form.get('cardDateMonth')?.valueChanges.subscribe(value => {
      this.cardDateMonth = value;
    });
    this.form.get('cardDateYear')?.valueChanges.subscribe(value => {
      this.cardDateYear = value;
    });
    this.form.get('cardCvc')?.valueChanges.subscribe(value => {
      this.cardCvc = value;
    });

  }

  cardNumberValidator(control: AbstractControl): ValidationErrors | null {
    const value = control.value;
    const regex = /^\d{4} \d{4} \d{4} \d{4}$/;
    if (!regex.test(value)) {
      return { invalidCardNumber: true };
    }
    return null;
  }

  onSubmit() {
    if (this.form.valid) {
      this.formSubmitted = true;
      console.log(this.form.value);
    } else {
      this.form.markAsTouched();
    }
  }

}
