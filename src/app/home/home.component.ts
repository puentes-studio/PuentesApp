import { Component, OnInit, Renderer2, ElementRef } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  constructor(private renderer: Renderer2, private elementRef: ElementRef) {}

  ngOnInit(): void {
    this.renderer.listen('window', 'scroll', () => {
      const header = this.elementRef.nativeElement.querySelector('#main');
      const scrollPosition = window.pageYOffset;

      if (scrollPosition > 50) {
        this.renderer.addClass(header, 'black-bg');
      } else {
        this.renderer.removeClass(header, 'black-bg');
      }
    });
  }
}
