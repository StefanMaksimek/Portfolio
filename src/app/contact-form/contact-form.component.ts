import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import {
  FormControl,
  FormGroup,
  Validators,
  FormGroupDirective,
  NgForm,
} from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';

/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(
    control: FormControl | null,
    form: FormGroupDirective | NgForm | null
  ): boolean {
    const isSubmitted = form && form.submitted;
    return !!(
      control &&
      control.invalid &&
      (control.dirty || control.touched || isSubmitted)
    );
  }
}

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss'],
})
export class ContactFormComponent implements OnInit {
  @ViewChild('nameField') nameField!: ElementRef;
  @ViewChild('emailField') emailField!: ElementRef;
  @ViewChild('messageField') messageField!: ElementRef;
  @ViewChild('sendBtn') sendBtn!: ElementRef;

  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);
  matcher = new MyErrorStateMatcher();

  myform!: FormGroup;
  name!: FormControl;
  email!: FormControl;
  message!: FormControl;

  emailPosted = true;
  emaiIsSending = false;

  ngOnInit(): void {
    this.createFormControls();
    this.createForm();
  }

  createForm() {
    this.myform = new FormGroup({
      name: this.name,
      email: this.email,
      message: this.message,
    });
  }

  createFormControls() {
    this.name = new FormControl('', Validators.required);
    this.email = new FormControl('', [
      Validators.required,
      Validators.pattern('[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,4}$'),
    ]);
    this.message = new FormControl('', [
      Validators.required,
      Validators.minLength(20),
    ]);
  }

  async sendMail() {
    let messageField = this.messageField.nativeElement;
    let emailField = this.emailField.nativeElement;
    let nameField = this.nameField.nativeElement;
    this.emaiIsSending = true;

    //this.formDisableEnable(nameField, emailField, messageField, sendBtn, true);

    //ftp://f0148537@stefan-maksimek.developerakademie.net/send_mail/send_mail.php
    //https://stefan-maksimek.developerakademie.net/send_mail/send_mail.php
    let fd = new FormData();
    fd.append('name', nameField.value);
    fd.append('message', messageField.value);
    fd.append('email', emailField.value);
    try {
      await fetch(
        'https://stefan-maksimek.developerakademie.net/send_mail/send_mail.php',
        {
          method: 'POST',
          body: fd,
        }
      );

      //this.formDisableEnable(nameField, emailField, messageField, sendBtn, false);

      this.emaiIsSending = false;
      this.emailPosted = true;
    } catch (error) {
      console.log(error);
    }
    this.emaiIsSending = false;
    this.emailPosted = true;
  }

  formDisableEnable(
    nameField: any,
    emailField: any,
    messageField: any,
    sendBtn: any,
    i: boolean
  ) {
    sendBtn.disabled = i;
    messageField.disabled = i;
    emailField.disabled = i;
    nameField.disabled = i;
  }

  closeEmailInfo() {
    let messageField = this.messageField.nativeElement;
    let emailField = this.emailField.nativeElement;
    let nameField = this.nameField.nativeElement;

    nameField.value = '';
    messageField.value = '';
    emailField.value = '';
    this.emailPosted = false;
  }
}
