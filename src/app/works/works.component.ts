import {
  Component,
  HostListener,
  Inject,
  Input,
  OnInit,
  PLATFORM_ID,
} from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

interface Project {
  type: string;
  name: string;
  projectDescription: string;
  backgroundColor: string;
  fontColor: string;
}

@Component({
  selector: 'app-works',
  templateUrl: './works.component.html',
  styleUrls: ['./works.component.css'],
})
export class WorksComponent implements OnInit {
  @Input() maxProjects?: number;

  projects = {
    data: [
      {
        list: [
          {
            type: 'WEB DVLP',
            name: 'Unika HR',
            projectDescription: 'UX | Frontend',
            backgroundColor: 'bg-rose-600',
            fontColor: 'text-purple-200',
          },
          {
            type: 'WEB DVLP',
            name: 'Camm & Hopper',
            projectDescription: 'UX | Frontend',
            backgroundColor: 'bg-fuchsia-500',
            fontColor: 'text-lime-200',
          },
          {
            type: 'WEB DVLP',
            name: 'Your Cloud',
            projectDescription: 'UX | Frontend | Backend',
            backgroundColor: 'bg-blue-600',
            fontColor: 'text-lime-200',
          },
          {
            type: 'WEB DVLP',
            name: 'Pokemon Desk',
            projectDescription: 'UX | Frontend | Backend',
            backgroundColor: 'bg-teal-400',
            fontColor: 'text-orange-200',
          },
          {
            type: 'Art Direction',
            name: 'Molly The Kid',
            projectDescription: 'Design | Art Direction',
            backgroundColor: 'bg-lime-400',
            fontColor: 'text-orange-200',
          },
          {
            type: 'DSGN',
            name: 'Cube Editorial',
            projectDescription: 'Editorial',
            backgroundColor: 'bg-orange-500',
            fontColor: 'text-fuchsia-200',
          },
          {
            type: 'DSGN',
            name: 'Sanofi Toujeo',
            projectDescription: 'Graphic Design | Editorial',
            backgroundColor: 'bg-red-600',
            fontColor: 'text-lime-200',
          },
          {
            type: 'DSGN',
            name: 'OA Forum',
            projectDescription: 'Graphic Design',
            backgroundColor: 'bg-yellow-400',
            fontColor: 'text-orange-200',
          },
          {
            type: 'DSGN',
            name: 'Juntos 2015',
            projectDescription: 'Graphic Design | Logotype Design',
            backgroundColor: 'bg-emerald-500',
            fontColor: 'text-red-100',
          },
        ] as Project[],
      },
    ],
  };

  displayedProjects: Project[] = [];
  hoveredIndex: boolean[] = [];
  isMobileView: boolean = false;

  constructor(
    @Inject(PLATFORM_ID) private platformId: any,
    private router: Router
  ) {}

  ngOnInit(): void {
    const allProjects: Project[] = this.projects.data[0].list;

    this.displayedProjects = this.maxProjects
      ? allProjects.slice(0, this.maxProjects)
      : [...allProjects];

    this.hoveredIndex = this.displayedProjects.map(() => false);

    if (isPlatformBrowser(this.platformId)) {
      this.isMobileView = window.innerWidth < 500;

      this.router.events
        .pipe(filter((event) => event instanceof NavigationEnd))
        .subscribe(() => {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        });
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
