import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import EmblaCarousel, { EmblaOptionsType } from 'embla-carousel';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css'],
})
export class CarouselComponent implements AfterViewInit {
  projects = {
    data: [
      {
        list: [
          {
            name: 'Taller Cinco Degree',
            year: '2005',
            imageUrl: '../../assets/png-cert/Cert-01.png',
          },
          {
            name: 'SENA Diploma',
            year: '2008',
            imageUrl: '../../assets/png-cert/Cert-02.png',
          },
          {
            name: 'Adobe Creative',
            year: '2011',
            imageUrl: '../../assets/png-cert/Cert-03.png',
          },
          {
            name: 'Yamaha Music School',
            year: '2019',
            imageUrl: '../../assets/png-cert/Cert-04.png',
          },
        ],
      },
    ],
  };

  @ViewChild('emblaViewport', { static: false }) emblaViewport!: ElementRef;
  embla: any; // Reference to the Embla carousel instance

  options: EmblaOptionsType = {
    loop: true,
    speed: 10, // Use numbers between 0-100 for smoother behavior
  };

  ngAfterViewInit() {
    if (this.emblaViewport?.nativeElement) {
      this.embla = EmblaCarousel(
        this.emblaViewport.nativeElement,
        this.options
      );
    }
  }
}
