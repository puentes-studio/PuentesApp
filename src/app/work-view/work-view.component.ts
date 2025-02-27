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
              'As a Designer and Developer, I was assigned the task of create their visual identity and build their entire website',
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
              'Puentes Studio is a creative agency specializing in graphic design and video editing, the studio brings bold ideas to life through stunning visuals and compelling motion content.',
            projectChallengue:
              'As the sole Designer and Developer, I was responsible for building the brand from the ground up—creating the logo, defining the visual identity, and developing the entire website.',
            projectSolution:
              'From branding to web development, I designed a cohesive and dynamic look that reflects Puentes Studio’s creative spirit. The website seamlessly integrates the brand’s aesthetic, providing a visually engaging and intuitive user experience.',

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
              'Your Cloud is a prototype for a cloud-based hard drive solution, designed to provide seamless file storage and access with an user-friendly interface.',
            projectChallengue:
              'As a UX/UI Designer and Developer, I was responsible for designing the entire interface and user experience, while also collaborating heavily on both the front-end and back-end development, including API integration.',
            projectSolution:
              'By focusing on intuitive design and smooth functionality, I crafted a modern and efficient interface that enhances user interaction. The project also involved API fetching and backend collaboration, ensuring a seamless and responsive cloud storage experience.',

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
              'Camm & Hooper Intranet is a private social portal designed for company employees, providing a space for communication, collaboration, and internal engagement.',
            projectChallengue:
              'As the UX/UI Designer and Developer, I was responsible for designing the entire interface and user experience, as well as developing the full front-end, including a secure password-protected login system.',
            projectSolution:
              'By creating an intuitive and engaging design, I built a social platform that enhances employee interaction and connectivity. The intranet seamlessly integrates Camm & Hooper’s brand identity while ensuring smooth navigation and accessibility for users.',
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
              'Pokémon Desk is a fun and interactive web app designed for Pokémon enthusiasts, allowing users to search and explore their favorite Pokémon with a sleek and engaging interface.',
            projectChallengue:
              'As the sole UX/UI Designer and Developer, I designed and built the entire interface from scratch, ensuring a playful and intuitive experience while integrating API fetching for real-time Pokémon search.',
            projectSolution:
              'With a vibrant and dynamic design, I created an immersive experience that captures the essence of the Pokémon world. The app seamlessly fetches data from the Pokémon API, providing smooth and responsive interactions for users.',

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
              'Molly The Kid is a music artist with a bold and unique identity, blending visuals and sound to create a strong presence across digital platforms.',
            projectChallengue:
              'I was tasked with redesigning the artist’s logo, creating a visually striking Spotify banner with photo editing, and designing the cover art for a single release on streaming platforms.',
            projectSolution:
              'By refining the brand identity with a fresh, modern logo and crafting high-quality visuals, I enhanced Molly The Kid’s digital presence. The redesigned elements seamlessly align with the artist’s style, creating a cohesive and impactful aesthetic for music streaming platforms.',
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
              'Cube Editorial is a fashion publication showcasing cutting-edge trends and artistic photography, highlighting the vibrant fashion scene in Bogotá, Colombia.',
            projectChallengue:
              'As an editor for a special fashion issue, I was responsible for photo editing and post-production, refining visuals to align with the magazine’s high-end aesthetic.',
            projectSolution:
              'Through meticulous editing and post-production work, I enhanced the imagery to ensure a polished and visually striking final product. The result was a cohesive and dynamic fashion issue that captured the essence of contemporary style in Bogotá.',

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
              'De Buen Corazón was a campaign by Sanofi focused on raising awareness and promoting heart health through impactful visual storytelling.',
            projectChallengue:
              'As the lead designer, I created the entire visual identity from scratch, including the logo and all campaign materials, ensuring a cohesive and engaging design language.',
            projectSolution:
              'By crafting a strong, heart-centered brand identity, I developed a visually compelling campaign that effectively communicated Sanofi’s message. The design elements were tailored to resonate with the audience, reinforcing the importance of cardiovascular health.',

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
              'OA Forum was a campaign by Sanofi Aventis, designed to foster discussion and awareness around osteoarthritis, providing valuable insights for healthcare professionals and patients.',
            projectChallengue:
              'As the lead designer, I was responsible for creating the entire visual identity from scratch, including the logo and all supporting materials, ensuring a professional and engaging aesthetic.',
            projectSolution:
              'By developing a clean and informative design, I crafted a cohesive brand identity that effectively communicated the campaign’s message. The visuals were designed to be both accessible and impactful, aligning with Sanofi Aventis’ mission of education and healthcare awareness.',

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
              'Juntos en Biocirugía was a Sanofi campaign aimed at promoting innovation and collaboration in the field of biotherapy and surgical care.',
            projectChallenge:
              'I was responsible for designing the campaign’s logos, ensuring they visually represented the core values of precision, innovation, and medical excellence.',
            projectSolution:
              'Through thoughtful design, I created logos that seamlessly aligned with Sanofi’s branding while reinforcing the campaign’s message. The final visuals captured the essence of collaboration and advancement in biotherapy and surgery.',

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
