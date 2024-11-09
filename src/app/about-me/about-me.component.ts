import { Component } from '@angular/core';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrl: './about-me.component.css',
})
export class AboutMeComponent {
  // Method to change the image when mouse is over the img
  changeImage(newSrc: string) {
    const imgElement = document.querySelector(
      'img.about-img'
    ) as HTMLImageElement;
    if (imgElement) {
      imgElement.src = newSrc; // Change to the hover image
    }
  }

  // Method to reset the image when mouse leaves
  resetImage() {
    const imgElement = document.querySelector(
      'img.about-img'
    ) as HTMLImageElement;
    if (imgElement) {
      imgElement.src = 'assets/img/dev-img01.png'; // Reset to the original image
    }
  }
}
