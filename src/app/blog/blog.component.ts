import { Component } from '@angular/core';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent {

  toggleMenu(): void {
    const navLinks = document.getElementById("nav-links");
    
    if (navLinks) {
        navLinks.classList.toggle("hidden");
    }
  }

}
