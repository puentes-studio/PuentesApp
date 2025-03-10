import { Component } from '@angular/core';

@Component({
  selector: 'app-client-carousel',
  templateUrl: './client-carousel.component.html',
  styleUrl: './client-carousel.component.css',
})
export class ClientCarouselComponent {
  clientsLogo = {
    list: [
      {
        name: 'Amnick',
        imageUrl: '../../assets/logos-carousel/Amnick_Logo.png',
      },
      {
        name: 'Beaumont',
        imageUrl: '../../assets/logos-carousel/beaumont-logo.png',
      },
      {
        name: 'Sanofi',
        imageUrl: '../../assets/logos-carousel/Logo_Sanofi.png',
      },
      {
        name: 'Louder',
        imageUrl: '../../assets/logos-carousel/louder.png',
      },
      {
        name: 'Sym',
        imageUrl: '../../assets/logos-carousel/sym-motor-seeklogo-01.png',
      },
      {
        name: 'Unika',
        imageUrl: '../../assets/logos-carousel/Logo-unika.png',
      },
      {
        name: 'Cala Viuda',
        imageUrl: '../../assets/logos-carousel/logo-cala-viuda.png',
      },
      {
        name: 'Cube Projects',
        imageUrl: '../../assets/logos-carousel/cube-logo.png',
      },
      {
        name: 'Juntos Biocirugia',
        imageUrl: '../../assets/logos-carousel/Juntos-logo.png',
      },
      {
        name: 'Bicigirl',
        imageUrl: '../../assets/logos-carousel/logo_bicigirl.png',
      },
      {
        name: 'Cardio Hospotal',
        imageUrl: '../../assets/logos-carousel/Logo-Cardio-hospitalaria.png',
      },
      {
        name: 'Mans Cruz',
        imageUrl: '../../assets/logos-carousel/logo-mc.png',
      },
    ],
  };
}
