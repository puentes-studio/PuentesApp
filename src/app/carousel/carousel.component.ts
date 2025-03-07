import {
  Component,
  AfterViewInit,
  ViewChild,
  ElementRef,
  HostListener,
} from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css'],
})
export class CarouselComponent implements AfterViewInit {
  @ViewChild('slider1', { static: false }) slider1!: ElementRef;

  certificates = {
    list: [
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

  currentIndex = 0;
  isDragging = false;
  startY = 0;
  scrollTop = 0;

  ngAfterViewInit() {
    this.updateCarouselPosition();
  }

  // Mouse down event to start dragging
  @HostListener('mousedown', ['$event'])
  onMouseDown(event: MouseEvent) {
    // Type assertion to ensure target is an HTMLElement
    const target = event.target as HTMLElement;

    // Only initialize dragging if the mouse is inside the carousel container
    if (target.closest('.carousel__container')) {
      this.isDragging = true;
      this.startY = event.pageY;
      const container = this.slider1.nativeElement.querySelector(
        '.carousel__container'
      );
      this.scrollTop = container.scrollTop;
      this.slider1.nativeElement.style.cursor = 'grabbing'; // Change cursor on drag
    }
  }

  // Mouse move event to drag
  @HostListener('mousemove', ['$event'])
  onMouseMove(event: MouseEvent) {
    if (!this.isDragging) return;

    const container = this.slider1.nativeElement.querySelector(
      '.carousel__container'
    );
    const y = event.pageY;
    const walk = (this.startY - y) * 2; // Adjust the speed of drag (sensitivity)
    container.scrollTop = this.scrollTop + walk;
  }

  // Mouse up event to stop dragging
  @HostListener('mouseup')
  onMouseUp() {
    this.isDragging = false;
    this.slider1.nativeElement.style.cursor = 'grab'; // Reset cursor after dragging
  }

  // Mouse leave event to stop dragging if mouse leaves the area
  @HostListener('mouseleave')
  onMouseLeave() {
    this.isDragging = false;
    this.slider1.nativeElement.style.cursor = 'grab'; // Reset cursor if mouse leaves
  }

  // Update carousel position
  updateCarouselPosition() {
    const container = this.slider1.nativeElement.querySelector(
      '.carousel__container'
    );
    const slideHeight =
      container.querySelector('.carousel__slide')?.clientHeight || 0;
    container.style.transform = `translateY(-${
      this.currentIndex * slideHeight
    }px)`;
  }

  // Method to move to the next slide
  nextSlide() {
    this.currentIndex = (this.currentIndex + 1) % this.certificates.list.length;
    this.updateCarouselPosition();
  }

  // Method to move to the previous slide
  prevSlide() {
    this.currentIndex =
      (this.currentIndex - 1 + this.certificates.list.length) %
      this.certificates.list.length;
    this.updateCarouselPosition();
  }
}
