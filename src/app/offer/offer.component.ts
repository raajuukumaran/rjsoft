import { Component } from '@angular/core';

@Component({
  selector: 'app-offer',
  templateUrl: './offer.component.html',
  styleUrls: ['./offer.component.scss']
})
export class OfferComponent {

  toggleMenu(): void {
    const navLinks = document.getElementById("nav-links");
    
    if (navLinks) {
        navLinks.classList.toggle("hidden");
    }
  }

}
