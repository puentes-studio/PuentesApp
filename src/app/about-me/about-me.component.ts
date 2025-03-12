import { Component } from '@angular/core';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrl: './about-me.component.css',
})
export class AboutMeComponent {
  // Method to change the image on hover or touch start
  changeImage(newSrc: string) {
    const imgElement = document.querySelector(
      'img.about-img'
    ) as HTMLImageElement;
    if (imgElement) {
      imgElement.src = newSrc;
    }
  }

  // Method to reset the image on mouseout or touchend
  resetImage() {
    const imgElement = document.querySelector(
      'img.about-img'
    ) as HTMLImageElement;
    if (imgElement) {
      imgElement.src = 'assets/img/dev-img02.png'; // Reset to original image
    }
  }
}
