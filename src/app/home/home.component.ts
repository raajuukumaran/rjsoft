import { Component, OnInit, AfterViewInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, AfterViewInit {
  images: string[] = [
    'assets/2.jpg',
    'assets/3.jpg', // Add more image paths here
  ];
  currentImageIndex: number = 0;
  slideInterval: any;

  ngOnInit() {
    this.startImageSlider();
  }

  ngAfterViewInit() {
    this.addScrollEventListener();
  }

  startImageSlider(): void {
    this.slideInterval = setInterval(() => {
      this.currentImageIndex = (this.currentImageIndex + 1) % this.images.length;
    }, 5000); // Change image every 5 seconds
  }

  toggleMenu(): void {
    const navLinks = document.getElementById("nav-links");
    if (navLinks) {
      navLinks.classList.toggle("hidden");
    }
  }

  @HostListener('window:scroll', ['$event'])
  onScroll(event: Event): void {
    this.checkPosition();
  }

  private addScrollEventListener(): void {
    // Ensure animation is checked on initial load
    this.checkPosition();
    // Set up a listener for scroll events
    window.addEventListener('scroll', this.checkPosition.bind(this));
  }

  private checkPosition(): void {
    const sections = document.querySelectorAll('section');
    const triggerBottom = window.innerHeight * 0.8;

    sections.forEach(section => {
      const sectionTop = section.getBoundingClientRect().top;
      if (sectionTop < triggerBottom) {
        section.classList.add('animate');
      } else {
        section.classList.remove('animate');
      }
    });
  }
}
