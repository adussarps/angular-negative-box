import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-sender-form',
  templateUrl: './sender-form.component.html',
  styleUrls: ['./sender-form.component.css']
})
export class SenderFormComponent implements OnInit {
  constructor(private formBuilder: FormBuilder) {}

  senderForm = this.formBuilder.group({
    senderEmail: '',
    receiverEmail: ''
  });

  onSubmit(): void {
    console.warn('Your order has been submitted', this.senderForm.value);
    this.senderForm.reset();
  }

  ngOnInit() {}
}
