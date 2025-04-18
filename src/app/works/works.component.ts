import {
  Component,
  HostListener,
  Inject,
  Input,
  OnInit,
  PLATFORM_ID,
  Renderer2,
  ChangeDetectorRef,
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
            name: 'Unika HR ~ Unika HR',
            projectDescription: 'UX | Frontend',
            backgroundColor: 'bg-rose-600',
            fontColor: 'text-purple-200',
          },
          {
            type: 'WEB DVLP',
            name: 'Puentes Studio ~ Puentes Studio',
            projectDescription: 'UX | Frontend',
            backgroundColor: 'bg-orange-300',
            fontColor: 'text-lime-400',
          },
          {
            type: 'WEB DVLP',
            name: 'Your Cloud ~ Your Cloud',
            projectDescription: 'UX | Frontend | Backend',
            backgroundColor: 'bg-blue-600',
            fontColor: 'text-lime-200',
          },
          {
            type: 'WEB DVLP',
            name: 'Camm & Hooper ~ Camm & Hooper',
            projectDescription: 'UX | Frontend',
            backgroundColor: 'bg-fuchsia-500',
            fontColor: 'text-lime-100',
          },
          {
            type: 'WEB DVLP',
            name: 'Pokemon Desk ~ Pokemon Desk',
            projectDescription: 'UX | Frontend | Backend',
            backgroundColor: 'bg-teal-400',
            fontColor: 'text-orange-300',
          },
          {
            type: 'Art Direction',
            name: 'Molly The Kid ~ Molly The Kid',
            projectDescription: 'Design | Art Direction',
            backgroundColor: 'bg-lime-400',
            fontColor: 'text-orange-200',
          },
          {
            type: 'DSGN',
            name: 'Cube Editorial ~ Cube Editorial',
            projectDescription: 'Editorial',
            backgroundColor: 'bg-orange-500',
            fontColor: 'text-fuchsia-200',
          },
          {
            type: 'DSGN',
            name: 'Buen Corazon ~ Buen Corazon',
            projectDescription: 'Graphic Design',
            backgroundColor: 'bg-red-600',
            fontColor: 'text-lime-200',
          },
          {
            type: 'DSGN',
            name: 'OA Forum ~ OA Forum',
            projectDescription: 'Graphic Design',
            backgroundColor: 'bg-yellow-400',
            fontColor: 'text-orange-200',
          },
          {
            type: 'DSGN',
            name: 'Juntos 2015 ~ Juntos 2015',
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
    private router: Router,
    private renderer: Renderer2,
    private cdr: ChangeDetectorRef // Add ChangeDetectorRef for detecting changes
  ) {}

  ngOnInit(): void {
    const allProjects: Project[] = this.projects.data[0].list;
    console.log('maxProjects:', this.maxProjects);

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
    // Angular will handle class changes when hoveredIndex is toggled
    this.cdr.detectChanges(); // Force Angular to detect changes
  }
}
