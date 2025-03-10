import { Component, OnInit, Renderer2, ElementRef } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  cv = {
    list: [
      {
        name: 'cv-developer-designer',
        year: '2025',
        pdfCvUrl: '../../assets/C_V-Vlad_Beltran-EN.pdf',
      },
    ],
  };

  // boolean variable to track the mobile menu state
  isMobileMenuOpen = false;

  // method to toggle the mobile menu state
  toggleMobileMenu() {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }

  constructor(private renderer: Renderer2, private elementRef: ElementRef) {}

  ngOnInit(): void {
    this.renderer.listen('window', 'scroll', () => {
      const header = this.elementRef.nativeElement.querySelector('#header');
      const scrollPosition = window.pageYOffset;

      if (scrollPosition > 50) {
        this.renderer.addClass(header, 'transparent');
      } else {
        this.renderer.removeClass(header, 'transparent');
      }
    });
  }
}
