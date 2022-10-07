import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent implements OnInit {
  @ViewChild('myForm') myForm!: ElementRef;
  @ViewChild('nameField') nameField!: ElementRef;
  @ViewChild('emailField') emailField!: ElementRef;
  @ViewChild('textField') textField!: ElementRef;

  name: any;
  email: any;
  message: any;
  /** 
  nameInput = this.nameField.nativeElement.validity.valid;
  emailInput = this.emailField.nativeElement.validity.valid;
  textLength = this.textField.nativeElement.textLength;
*/

  constructor() {}

  ngOnInit(): void {}

  sendMail() {
    if (this.proofForSend()) {
      console.log('Sending mail DONE', this.myForm);
    } else {
      console.log('Sending mail', this.myForm);
      console.log('Sending mail', this.nameField.nativeElement.validity.valid);
      console.log('Sending mail', this.emailField.nativeElement.validity.valid);
      console.log('Sending mail', this.textField.nativeElement.textLength);
    }
    console.log('nameField', this.nameField);
  }

  proofForSend() {
    return (
      this.nameField.nativeElement.validity.valid &&
      this.emailField.nativeElement.validity.valid &&
      this.textField.nativeElement.textLength > 20
    );
  }
}
