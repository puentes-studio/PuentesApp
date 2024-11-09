import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-works',
  templateUrl: './works.component.html',
  styleUrls: ['./works.component.css'],
})
export class WorksComponent implements OnInit {
  projects = {
    data: [
      {
        list: [
          {
            type: 'WEB DVLP',
            name: 'Unika HR',
            imageUrl: '../../assets/projects/unika.png',
            projectLink: 'https://unikahr.vercel.app/',
            repositoryLink: '',
            backgroundColor: 'bg-purple-800',
            fontColor: 'text-purple-200',
          },
          {
            type: 'WEB DVLP',
            name: 'Your Cloud',
            imageUrl: '../../assets/projects/logotype.png',
            projectLink: '',
            repositoryLink: '',
            backgroundColor: 'bg-lime-800',
            fontColor: 'text-lime-200',
          },
          {
            type: 'WEB DVLP',
            name: 'Pokemon Desk',
            imageUrl: '../../assets/projects/pokemon.webp',
            projectLink: 'https://pokemon-black-sable.vercel.app/',
            repositoryLink: 'https://github.com/puentes-studio/PokemonBlack',
            backgroundColor: 'bg-orange-700',
            fontColor: 'text-orange-200',
          },
          {
            type: 'DSGN',
            name: 'Cube Editorial',
            imageUrl:
              '../../assets/projects/prev_editorial_moda_optimizado.png',
            projectLink: '',
            repositoryLink: '',
            backgroundColor: 'bg-fuchsia-900',
            fontColor: 'text-fuchsia-200',
          },
          {
            type: 'DSGN',
            name: 'OA Forum',
            imageUrl: '../../assets/projects/prev_oaforum_optimizado.png',
            projectLink: '',
            repositoryLink: '',
            backgroundColor: 'bg-red-500',
            fontColor: 'text-red-100',
          },
        ],
      },
    ],
  };

  constructor() {}

  ngOnInit(): void {}

  showImage(index: number): void {
    const img = document.getElementById('project-img-' + index);
    if (img) {
      img.classList.remove('hidden');
      img.classList.add('visible');
    }
  }

  hideImage(index: number): void {
    const img = document.getElementById('project-img-' + index);
    if (img) {
      img.classList.remove('visible');
      img.classList.add('hidden');
    }
  }
}
