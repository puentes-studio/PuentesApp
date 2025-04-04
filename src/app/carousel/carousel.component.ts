import {
  Component,
  AfterViewInit,
  ViewChild,
  ElementRef,
  Inject,
  PLATFORM_ID,
} from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css'],
})
export class CarouselComponent implements AfterViewInit {
  @ViewChild('carousel', { static: false }) carousel!: ElementRef;
  @ViewChild('carousel', { read: ElementRef }) inputsContainer!: ElementRef;

  isDragging = false;
  startX = 0;
  currentPosition = 3; // Set initial position to 3 (third slide)
  totalSlides = 9;
  dragThreshold = 50; // Customize drag threshold

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  certificates = {
    list: [
      {
        name: 'Figma',
        year: '2025',
        imageUrl: '../../assets/png-cert/Cert_09.png',
      },
      {
        name: 'Mysql',
        year: '2024',
        imageUrl: '../../assets/png-cert/Cert_08.png',
      },
      {
        name: 'Javascript Udemy',
        year: '2024',
        imageUrl: '../../assets/png-cert/Cert_07.png',
      },
      {
        name: 'Fullstack Developer',
        year: '2024',
        imageUrl: '../../assets/png-cert/Cert_06.png',
      },
      {
        name: 'Web design certificate',
        year: '2019',
        imageUrl: '../../assets/png-cert/Cert_05.png',
      },
      {
        name: 'Yamaha Music School',
        year: '2019',
        imageUrl: '../../assets/png-cert/Cert_04.png',
      },
      {
        name: 'Adobe certificate',
        year: '2011',
        imageUrl: '../../assets/png-cert/Cert_03.png',
      },
      {
        name: 'SENA prepress',
        year: '2011',
        imageUrl: '../../assets/png-cert/Cert_02.png',
      },
      {
        name: 'Taller 5 diploma Graphic Design',
        year: '2019',
        imageUrl: '../../assets/png-cert/Cert_01.png',
      },
    ],
  };

  ngAfterViewInit() {
    if (isPlatformBrowser(this.platformId)) {
      const carouselElement = this.carousel.nativeElement;

      // Update carousel to reflect the 3rd slide at the start
      this.updateCarousel();

      // Mouse events
      carouselElement.addEventListener('mousedown', (e: MouseEvent) =>
        this.onDragStart(e)
      );
      document.addEventListener('mousemove', (e: MouseEvent) =>
        this.onDragMove(e)
      );
      document.addEventListener('mouseup', () => this.onDragEnd());

      // Touch events (for mobile)
      carouselElement.addEventListener('touchstart', (e: TouchEvent) =>
        this.onDragStart(e)
      );
      document.addEventListener('touchmove', (e: TouchEvent) =>
        this.onDragMove(e)
      );
      document.addEventListener('touchend', () => this.onDragEnd());
    }
  }

  onDragStart(event: MouseEvent | TouchEvent) {
    if (!isPlatformBrowser(this.platformId)) return;

    this.isDragging = true;
    this.startX = this.getClientX(event);
    this.carousel.nativeElement.style.cursor = 'grabbing';
  }

  onDragMove(event: MouseEvent | TouchEvent) {
    if (!this.isDragging || !isPlatformBrowser(this.platformId)) return;

    event.preventDefault(); // Prevents scrolling on mobile

    let diff = this.getClientX(event) - this.startX;

    if (diff > this.dragThreshold && this.currentPosition > 1) {
      this.currentPosition--;
      this.updateCarousel();
      this.isDragging = false;
    }

    if (diff < -this.dragThreshold && this.currentPosition < this.totalSlides) {
      this.currentPosition++;
      this.updateCarousel();
      this.isDragging = false;
    }
  }

  onDragEnd() {
    if (!isPlatformBrowser(this.platformId)) return;

    this.isDragging = false;
    this.carousel.nativeElement.style.cursor = 'grab';
  }

  updateCarousel() {
    if (!isPlatformBrowser(this.platformId)) return;

    // Find all input radio buttons
    const inputs = this.inputsContainer.nativeElement.querySelectorAll(
      "input[name='position']"
    );

    // Check the radio button corresponding to the current position
    if (inputs[this.currentPosition - 1]) {
      inputs[this.currentPosition - 1].checked = true;

      // Immediately update the carousel position
      requestAnimationFrame(() => {
        this.carousel.nativeElement.style.setProperty(
          '--position',
          this.currentPosition.toString()
        );
      });
    }
  }

  getClientX(event: MouseEvent | TouchEvent): number {
    return event instanceof MouseEvent
      ? event.clientX
      : event.touches[0].clientX;
  }
}
