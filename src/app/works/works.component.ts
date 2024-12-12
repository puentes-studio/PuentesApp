import {
  Component,
  HostListener,
  Inject,
  OnInit,
  PLATFORM_ID,
} from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

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
            projectLink: 'https://unikahr.vercel.app/',
            projectDescription: 'UX | Frontend',
            repositoryLink: '',
            backgroundColor: 'bg-purple-800',
            fontColor: 'text-purple-200',
          },
          {
            type: 'WEB DVLP',
            name: 'Camm & Hopper',
            projectLink: '',
            projectDescription: 'UX | Frontend',
            repositoryLink: '',
            backgroundColor: 'bg-purple-800',
            fontColor: 'text-purple-200',
          },
          {
            type: 'WEB DVLP',
            name: 'Your Cloud',
            projectDescription: 'UX | Frontend | Backend',
            projectLink: '',
            repositoryLink: '',
            backgroundColor: 'bg-yellow-500',
            fontColor: 'text-lime-200',
          },
          {
            type: 'WEB DVLP',
            name: 'Pokemon Desk',
            projectDescription: 'UX | Frontend | Backend',
            projectLink: 'https://pokemon-black-sable.vercel.app/',
            repositoryLink: 'https://github.com/puentes-studio/PokemonBlack',
            backgroundColor: 'bg-orange-700',
            fontColor: 'text-orange-200',
          },
          {
            type: 'Art Direction',
            name: 'Molly The Kid',
            projectDescription: 'Design | Art Direction',
            projectLink: 'https://pokemon-black-sable.vercel.app/',
            repositoryLink: '',
            backgroundColor: 'bg-orange-700',
            fontColor: 'text-orange-200',
          },
          {
            type: 'DSGN',
            name: 'Cube Editorial',
            projectDescription: 'Editorial',
            projectLink: '',
            repositoryLink: '',
            backgroundColor: 'bg-fuchsia-900',
            fontColor: 'text-fuchsia-200',
          },
          {
            type: 'DSGN',
            name: 'Sanofi Toujeo',
            projectDescription: 'Graphic Design | Editorial',
            projectLink: '',
            repositoryLink: '',
            backgroundColor: 'bg-red-500',
            fontColor: 'text-red-100',
          },
          {
            type: 'DSGN',
            name: 'OA Forum',
            projectDescription: 'Graphic Design',
            projectLink: '',
            repositoryLink: '',
            backgroundColor: 'bg-red-500',
            fontColor: 'text-red-100',
          },
          {
            type: 'DSGN',
            name: 'Juntos 2015',
            projectDescription: 'Graphic Design | Logotype Design',
            projectLink: '',
            repositoryLink: '',
            backgroundColor: 'bg-red-500',
            fontColor: 'text-red-100',
          },
        ],
      },
    ],
  };

  hoveredIndex: boolean[] = [];
  isMobileView: boolean = false;

  constructor(@Inject(PLATFORM_ID) private platformId: any) {}

  ngOnInit(): void {
    this.hoveredIndex = this.projects.data[0].list.map(() => false);

    if (isPlatformBrowser(this.platformId)) {
      this.isMobileView = window.innerWidth < 500; // Detect mobile view
    }
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: Event): void {
    if (isPlatformBrowser(this.platformId)) {
      this.isMobileView = (event.target as Window).innerWidth < 500;
    }
  }

  toggleDescription(index: number, show: boolean): void {
    this.hoveredIndex[index] = show;
  }
}
