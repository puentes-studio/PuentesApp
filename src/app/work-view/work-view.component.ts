import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-work-view',
  templateUrl: './work-view.component.html',
  styleUrl: './work-view.component.css',
})
export class WorkViewComponent implements OnInit {
  project: any;
  projects = {
    data: [
      {
        list: [
          {
            type: 'WEB DVLP',
            name: 'Unika HR',
            imageUrl: '../../assets/full-project-imgs/unika-preview.png',
            fullImageUrl: '../../assets/full-project-imgs/unika_optimizado.png',
            projectLink: 'https://unikahr.vercel.app/',
            projectDescription: 'UX | Frontend',
            repositoryLink: '',
            backgroundColor: 'bg-purple-800',
            fontColor: 'text-purple-200',
          },
          {
            type: 'WEB DVLP',
            name: 'Your Cloud',
            imageUrl: '../../assets/projects/logotype.png',
            projectDescription: 'UX | Frontend | Backend',
            projectLink: '',
            repositoryLink: '',
            backgroundColor: 'bg-yellow-500',
            fontColor: 'text-lime-200',
          },
          {
            type: 'WEB DVLP',
            name: 'Pokemon Desk',
            imageUrl: '../../assets/projects/pokemon.webp',
            projectDescription: 'UX | Frontend | Backend',
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
            projectDescription: 'Editorial',
            projectLink: '',
            repositoryLink: '',
            backgroundColor: 'bg-fuchsia-900',
            fontColor: 'text-fuchsia-200',
          },
          {
            type: 'DSGN',
            name: 'OA Forum',
            imageUrl: '../../assets/projects/prev_oaforum_optimizado.png',
            projectDescription: 'Graphic Design',
            projectLink: '',
            repositoryLink: '',
            backgroundColor: 'bg-red-500',
            fontColor: 'text-red-100',
          },
        ],
      },
    ],
  };

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id')); // Get the project ID from the URL
    this.project = this.projects.data[0].list[id]; // Fetch the project using the ID
  }
}
