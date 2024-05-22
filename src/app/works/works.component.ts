import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-works',
  templateUrl: './works.component.html',
  // styleUrls:   // Corrected property name
})
export class WorksComponent implements OnInit {
  projects = {
    data: [
      {
        list: [
          {
            name: 'Your Cloud',
            imageUrl: '../../assets/projects/logotype.png', // Ensure you provide the correct path
            projectLink: '',
            repositoryLink: '',
          },
          {
            name: 'Unika HR',
            imageUrl: '../../assets/projects/unika.png', // Ensure you provide the correct path
            projectLink: 'https://unikahr.vercel.app/',
            repositoryLink: '',
          },
        ],
      },
      {
        list: [
          {
            name: 'Pokemon Desk',
            imageUrl: '../../assets/projects/pokemon.webp',
            projectLink: 'https://pokemon-black-sable.vercel.app/',
            repositoryLink: 'https://github.com/puentes-studio/PokemonBlack',
          },
        ],
      },
    ],
  };

  constructor() {}

  ngOnInit(): void {}
}
