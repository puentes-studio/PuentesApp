import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css',
})
export class ContactComponent {
  contact = {
    name: '',
    email: '',
    message: '',
  };

  submitForm() {
    if (this.contact.name && this.contact.email && this.contact.message) {
      console.log('Contact Form Submitted:', this.contact);
      alert('Thank you for reaching out! I will get back to you soon.');
      this.contact = { name: '', email: '', message: '' }; // Reset form
    } else {
      alert('Please fill in all fields before submitting.');
    }
  }
}
