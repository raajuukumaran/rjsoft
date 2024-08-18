import { Component } from '@angular/core';

@Component({
  selector: 'app-carrers',
  templateUrl: './carrers.component.html',
  styleUrls: ['./carrers.component.scss']
})
export class CarrersComponent {

  toggleMenu(): void {
    const navLinks = document.getElementById("nav-links");
    
    if (navLinks) {
        navLinks.classList.toggle("hidden");
    }
  }

}
