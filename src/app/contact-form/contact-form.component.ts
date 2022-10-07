import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

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

  myform!: FormGroup;
  name!: FormControl;
  email!: FormControl;
  message!: FormControl;

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
    let sendBtn = this.sendBtn.nativeElement;
    let messageField = this.messageField.nativeElement;
    let emailField = this.emailField.nativeElement;
    let nameField = this.nameField.nativeElement;

    this.formDisableEnable(nameField, emailField, messageField, sendBtn, true);
    //https://stefan-maksimek.developerakademie.net/send_mail/send_mail.php
    let fd = new FormData();
    fd.append('name', nameField.value);
    fd.append('message', messageField.value);
    fd.append('email', emailField.value);
    await fetch(
      'https://stefan-maksimek.developerakademie.net/send_mail/send_mail.php',
      {
        method: 'POST',
        body: fd,
      }
    );

    this.formDisableEnable(nameField, emailField, messageField, sendBtn, false);
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
}
