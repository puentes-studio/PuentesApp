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
            year: '2024',
            imageUrl: '../../assets/full-project-imgs/unika-preview.png',
            fullImageUrl: '../../assets/full-project-imgs/unika_optimizado.png',
            projectLink: 'https://unikahr.vercel.app/',
            projectDescription: 'UX | Frontend',
            repositoryLink: '',
            projectAbout:
              'Unika HR is a performance HR entreperneur based in London. The company has been active in the britanic market since 2016 and is an official Premier Partner of Camm & Hooper.',
            projectChallengue:
              'As a Designer and Developer, I was assigned the task of updating their visual identity and build their entire website',
            projectSolution:
              'In alignment with Unika HR brand, which emphasizes people, transformation, and professional growth, we crafted brand elements and seamlessly integrated a refreshed look and feel into the corporate website.',
            backgroundColor: 'bg-purple-800',
            fontColor: 'text-purple-200',
          },
          {
            type: 'WEB DVLP',
            name: 'Your Cloud',
            year: '2024',
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
            year: '2024',
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
            year: '2024',
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
            year: '2024',
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
    this.route.paramMap.subscribe((params) => {
      const id = Number(params.get('id'));
      this.project = this.projects.data[0].list[id];
    });
  }

  getNextProjectId(): number {
    const currentId = this.projects.data[0].list.indexOf(this.project);
    return (currentId + 1) % this.projects.data[0].list.length;
  }
}
