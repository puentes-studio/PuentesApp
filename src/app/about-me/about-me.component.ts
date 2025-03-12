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

  applyTouchStyles() {
    const titleElement = document.querySelector(
      'h2.hello-title'
    ) as HTMLElement;
    if (titleElement) {
      titleElement.classList.add('italic', 'text-yellow-300', 'no-underline');
    }
  }

  // Method to remove styles on touchend or mouseout
  removeTouchStyles() {
    const titleElement = document.querySelector(
      'h2.hello-title'
    ) as HTMLElement;
    if (titleElement) {
      titleElement.classList.remove(
        'italic',
        'text-yellow-300',
        'no-underline'
      );
    }
  }

  applyParagraphStyles() {
    const paragraphElement = document.querySelector('p') as HTMLElement;
    if (paragraphElement) {
      paragraphElement.classList.add('bg-white', 'text-white');
    }
  }

  // Method to remove styles on touchend or mouseout
  removeParagraphStyles() {
    const paragraphElement = document.querySelector('p') as HTMLElement;
    if (paragraphElement) {
      paragraphElement.classList.remove('bg-white', 'text-white');
    }
  }
}
