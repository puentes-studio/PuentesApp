import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-works',
  templateUrl: './works.component.html',
  styleUrl: './works.component.css',
})
export class WorksComponent implements OnInit {
  projects = {
    data: [
      {
        list: [
          {
            name: 'Unika HR',
            imageUrl: '../../assets/projects/unika.png',
            projectLink: 'https://unikahr.vercel.app/',
            repositoryLink: '',
          },
          {
            name: 'Your Cloud',
            imageUrl: '../../assets/projects/logotype.png',
            projectLink: '',
            repositoryLink: '',
          },
          {
            name: 'Pokemon Desk',
            imageUrl: '../../assets/projects/pokemon.webp',
            projectLink: 'https://pokemon-black-sable.vercel.app/',
            repositoryLink: 'https://github.com/puentes-studio/PokemonBlack',
          },
          {
            name: 'Cube Editorial',
            imageUrl:
              '../../assets/projects/prev_editorial_moda_optimizado.png',
            projectLink: '',
            repositoryLink: '',
          },
          {
            name: 'OA Forum',
            imageUrl: '../../assets/projects/prev_oaforum_optimizado.png',
            projectLink: '',
            repositoryLink: '',
          },
        ],
      },
    ],
  };

  constructor() {}

  ngOnInit(): void {}
}
