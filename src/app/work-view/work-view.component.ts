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
            imageUrl: '../../assets/banner-projects/banner-unika.png',
            fullImageUrls: [
              '../../assets/full-project-imgs/unika/projectUnika-1.png',
              '../../assets/full-project-imgs/unika/projectUnika-2.png',
              '../../assets/full-project-imgs/unika/projectUnika-3.png',
              '../../assets/full-project-imgs/unika/projectUnika-4.png',
              '../../assets/full-project-imgs/unika/projectUnika-5.png',
              '../../assets/full-project-imgs/unika/projectUnika-6.png',
              '../../assets/full-project-imgs/unika/projectUnika-7.png',
              '../../assets/full-project-imgs/unika/projectUnika-8.png',
              '../../assets/full-project-imgs/unika/projectUnika-9.png',
            ],
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
            name: 'Puentes Studio',
            year: '2022',
            imageUrl: '../../assets/banner-projects/banner-puentes.png',
            fullImageUrls: [
              '../../assets/full-project-imgs/puentes/projectPuentes-01.png',
              '../../assets/full-project-imgs/puentes/projectPuentes-02.png',
              '../../assets/full-project-imgs/puentes/projectPuentes-03.png',
              '../../assets/full-project-imgs/puentes/projectPuentes-04.png',
              '../../assets/full-project-imgs/puentes/projectPuentes-05.png',
              '../../assets/full-project-imgs/puentes/projectPuentes-06.png',
              '../../assets/full-project-imgs/puentes/projectPuentes-07.png',
              '../../assets/full-project-imgs/puentes/projectPuentes-08.png',
            ],

            projectDescription: 'UX | Frontend',
            projectLink: '',
            repositoryLink: '',
            projectAbout:
              'Unika HR is a performance HR entreperneur based in London. The company has been active in the britanic market since 2016 and is an official Premier Partner of Camm & Hooper.',
            projectChallengue:
              'As a Designer and Developer, I was assigned the task of updating their visual identity and build their entire website',
            projectSolution:
              'In alignment with Unika HR brand, which emphasizes people, transformation, and professional growth, we crafted brand elements and seamlessly integrated a refreshed look and feel into the corporate website.',
            backgroundColor: 'bg-orange-300',
            fontColor: 'text-lime-400',
          },

          {
            type: 'WEB DVLP',
            name: 'Your Cloud',
            year: '2024',
            imageUrl: '../../assets/banner-projects/banner-your-cloud.png',
            fullImageUrls: [
              '../../assets/full-project-imgs/your-cloud/yourCloud-01.png',
              '../../assets/full-project-imgs/your-cloud/yourCloud-02.png',
              '../../assets/full-project-imgs/your-cloud/yourCloud-03.png',
              '../../assets/full-project-imgs/your-cloud/yourCloud-04.png',
              '../../assets/full-project-imgs/your-cloud/yourCloud-05.png',
              '../../assets/full-project-imgs/your-cloud/yourCloud-06.png',
              '../../assets/full-project-imgs/your-cloud/yourCloud-07.png',
            ],

            projectDescription: 'UX | Frontend | Backend',
            projectLink: '',
            repositoryLink: '',
            projectAbout:
              'Unika HR is a performance HR entreperneur based in London. The company has been active in the britanic market since 2016 and is an official Premier Partner of Camm & Hooper.',
            projectChallengue:
              'As a Designer and Developer, I was assigned the task of updating their visual identity and build their entire website',
            projectSolution:
              'In alignment with Unika HR brand, which emphasizes people, transformation, and professional growth, we crafted brand elements and seamlessly integrated a refreshed look and feel into the corporate website.',
            backgroundColor: 'bg-yellow-500',
            fontColor: 'text-lime-200',
          },
          {
            type: 'WEB DVLP',
            name: 'Camm & Hooper',
            year: '2023',
            imageUrl: '../../assets/banner-projects/banner-c&m.png',
            fullImageUrls: [
              '../../assets/full-project-imgs/camm-hooper/c_m-1.png',
              '../../assets/full-project-imgs/camm-hooper/c_m-2.png',
              '../../assets/full-project-imgs/camm-hooper/c_m-3.png',
              '../../assets/full-project-imgs/camm-hooper/c_m-4.png',
              '../../assets/full-project-imgs/camm-hooper/c_m-5.png',
            ],

            projectDescription: 'UX | Frontend | Backend',
            projectLink: '',
            repositoryLink: '',
            projectAbout:
              'Unika HR is a performance HR entreperneur based in London. The company has been active in the britanic market since 2016 and is an official Premier Partner of Camm & Hooper.',
            projectChallengue:
              'As a Designer and Developer, I was assigned the task of updating their visual identity and build their entire website',
            projectSolution:
              'In alignment with Unika HR brand, which emphasizes people, transformation, and professional growth, we crafted brand elements and seamlessly integrated a refreshed look and feel into the corporate website.',
            backgroundColor: 'bg-yellow-500',
            fontColor: 'text-lime-200',
          },
          {
            type: 'WEB DVLP',
            name: 'Pokemon Desk',
            year: '2024',
            imageUrl: '../../assets/banner-projects/banner-pokemon-desk.png',
            fullImageUrls: [
              '../../assets/full-project-imgs/pokemon/pokemon-1.png',
              '../../assets/full-project-imgs/pokemon/pokemon-2.png',
              '../../assets/full-project-imgs/pokemon/pokemon-3.png',
              '../../assets/full-project-imgs/pokemon/pokemon-4.png',
            ],
            projectDescription: 'UX | Frontend | Backend',
            projectLink: 'https://pokemon-black-sable.vercel.app/',
            repositoryLink: 'https://github.com/puentes-studio/PokemonBlack',
            projectAbout:
              'Unika HR is a performance HR entreperneur based in London. The company has been active in the britanic market since 2016 and is an official Premier Partner of Camm & Hooper.',
            projectChallengue:
              'As a Designer and Developer, I was assigned the task of updating their visual identity and build their entire website',
            projectSolution:
              'In alignment with Unika HR brand, which emphasizes people, transformation, and professional growth, we crafted brand elements and seamlessly integrated a refreshed look and feel into the corporate website.',
            backgroundColor: 'bg-orange-700',
            fontColor: 'text-orange-200',
          },
          {
            type: 'Art Direction',
            name: 'Molly The Kid',
            year: '2021',
            imageUrl: '../../assets/banner-projects/banner-molly.png',
            fullImageUrls: [
              '../../assets/full-project-imgs/molly/projectMolly-01.png',
              '../../assets/full-project-imgs/molly/projectMolly-02.png',
              '../../assets/full-project-imgs/molly/projectMolly-03.png',
              '../../assets/full-project-imgs/molly/projectMolly-04.png',
              '../../assets/full-project-imgs/molly/projectMolly-05.png',
            ],
            projectDescription: 'Design | Art Direction',
            projectLink: '',
            repositoryLink: '',
            projectAbout:
              'Unika HR is a performance HR entreperneur based in London. The company has been active in the britanic market since 2016 and is an official Premier Partner of Camm & Hooper.',
            projectChallengue:
              'As a Designer and Developer, I was assigned the task of updating their visual identity and build their entire website',
            projectSolution:
              'In alignment with Unika HR brand, which emphasizes people, transformation, and professional growth, we crafted brand elements and seamlessly integrated a refreshed look and feel into the corporate website.',
            backgroundColor: 'bg-fuchsia-900',
            fontColor: 'text-fuchsia-200',
          },
          {
            type: 'DSGN',
            name: 'Cube Editorial',
            year: '2024',
            imageUrl: '../../assets/banner-projects/banner-cube-editorial.png',
            fullImageUrls: [
              '../../assets/full-project-imgs/cubeProjects/cubeProject-01.png',
              '../../assets/full-project-imgs/cubeProjects/cubeProject-02.png',
              '../../assets/full-project-imgs/cubeProjects/cubeProject-03.png',
              '../../assets/full-project-imgs/cubeProjects/cubeProject-04.png',
            ],
            projectDescription: 'Editorial',
            projectLink: '',
            repositoryLink: '',
            projectAbout:
              'Unika HR is a performance HR entreperneur based in London. The company has been active in the britanic market since 2016 and is an official Premier Partner of Camm & Hooper.',
            projectChallengue:
              'As a Designer and Developer, I was assigned the task of updating their visual identity and build their entire website',
            projectSolution:
              'In alignment with Unika HR brand, which emphasizes people, transformation, and professional growth, we crafted brand elements and seamlessly integrated a refreshed look and feel into the corporate website.',
            backgroundColor: 'bg-fuchsia-900',
            fontColor: 'text-fuchsia-200',
          },
          {
            type: 'DSGN',
            name: 'Buen Corazon',
            year: '2017',
            imageUrl: '../../assets/banner-projects/banner-dbc.png',
            fullImageUrls: [
              '../../assets/full-project-imgs/dbc/projectDBC-01.png',
              '../../assets/full-project-imgs/dbc/projectDBC-02.png',
              '../../assets/full-project-imgs/dbc/projectDBC-03.png',
            ],
            projectDescription: 'Graphic Design',
            projectLink: '',
            repositoryLink: '',
            projectAbout:
              'Unika HR is a performance HR entreperneur based in London. The company has been active in the britanic market since 2016 and is an official Premier Partner of Camm & Hooper.',
            projectChallengue:
              'As a Designer and Developer, I was assigned the task of updating their visual identity and build their entire website',
            projectSolution:
              'In alignment with Unika HR brand, which emphasizes people, transformation, and professional growth, we crafted brand elements and seamlessly integrated a refreshed look and feel into the corporate website.',
            backgroundColor: 'bg-red-500',
            fontColor: 'text-red-100',
          },
          {
            type: 'DSGN',
            name: 'OA Forum',
            year: '2016',
            imageUrl: '../../assets/banner-projects/banner-oa-forum.png',
            fullImageUrls: [
              '../../assets/full-project-imgs/OAForum/OAForum-01.png',
              '../../assets/full-project-imgs/OAForum/OAForum-02.png',
            ],
            projectDescription: 'Graphic Design',
            projectLink: '',
            repositoryLink: '',
            projectAbout:
              'Unika HR is a performance HR entreperneur based in London. The company has been active in the britanic market since 2016 and is an official Premier Partner of Camm & Hooper.',
            projectChallengue:
              'As a Designer and Developer, I was assigned the task of updating their visual identity and build their entire website',
            projectSolution:
              'In alignment with Unika HR brand, which emphasizes people, transformation, and professional growth, we crafted brand elements and seamlessly integrated a refreshed look and feel into the corporate website.',
            backgroundColor: 'bg-red-500',
            fontColor: 'text-red-100',
          },
          {
            type: 'DSGN',
            name: 'Juntos Biocirugia',
            year: '2015',
            imageUrl: '../../assets/banner-projects/banner-Juntos.png',
            projectDescription: 'Graphic Design | Logotype Design',
            projectLink: '',
            repositoryLink: '',
            projectAbout:
              'Unika HR is a performance HR entreperneur based in London. The company has been active in the britanic market since 2016 and is an official Premier Partner of Camm & Hooper.',
            projectChallengue:
              'As a Designer and Developer, I was assigned the task of updating their visual identity and build their entire website',
            projectSolution:
              'In alignment with Unika HR brand, which emphasizes people, transformation, and professional growth, we crafted brand elements and seamlessly integrated a refreshed look and feel into the corporate website.',
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

  getProjectFullImages(): string[] {
    return this.project.fullImageUrls || [];
  }
}
