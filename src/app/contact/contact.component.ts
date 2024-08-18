import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  contactForm: FormGroup;

  constructor(private http: HttpClient, private fb: FormBuilder) {
    // Initialize the form group with validation
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      subject: ['', Validators.required],
      message: ['', Validators.required]
    });
  }

  ngOnInit(): void {}

  toggleMenu(): void {
    const navLinks = document.getElementById("nav-links");
    if (navLinks) {
      navLinks.classList.toggle("hidden");
    }
  }

  async sendMessage(): Promise<void> {
    if (this.contactForm.invalid) {
      alert('Please fill out the form correctly.');
      return;
    }

    try {
      const response = await this.http.post('http://localhost:3000/send', this.contactForm.value).toPromise();
      alert('Message sent successfully!');
      this.contactForm.reset(); // Reset the form after successful submission
    } catch (error) {
      console.error('Error sending message:', error);
      alert('An error occurred while sending the message.');
    }
  }
}
