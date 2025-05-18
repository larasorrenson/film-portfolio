import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FooterComponent } from '../../footer/footer.component';

@Component({
  selector: 'app-contact',
  imports: [CommonModule, FormsModule, FooterComponent],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent {
  contactModel = {
    name: '',
    email: '',
    message: '',
  };

  formStatus: { message: string; success: boolean } | null = null;

  // To reset the form
  resetForm() {
    this.contactModel = { name: '', email: '', message: '' };
    this.formStatus = null;
  }

  onSubmit() {
    // In a real-world application, you would send this data to the back-end API for processing
    // This example just shows a success message after form submission

    if (this.contactModel.name && this.contactModel.email && this.contactModel.message) {
      this.formStatus = {
        message: 'Thank you for your message! I will get back to you soon.',
        success: true,
      };

      // Reset the form after 2 seconds
      setTimeout(() => this.resetForm(), 2000);
    } else {
      this.formStatus = {
        message: 'There was an error with your submission. Please try again.',
        success: false,
      };
    }
  }
}
