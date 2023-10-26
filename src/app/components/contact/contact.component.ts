import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  firstName: string = '';
  lastName: string = '';
  email: string = '';
  message: string = '';

  submitForm() {
    // Handle form submission logic here
    console.log('Form submitted!', this.firstName, this.lastName, this.email, this.message);
    // You can send this data to your server or perform other actions
  }
}
