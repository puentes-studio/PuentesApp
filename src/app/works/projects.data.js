import yourCloudImage from "../../assets/img/projects/logotype.png";
import unikaImage from "../../assets/img/projects/unika.png";
import puentesStudioImage from "../../assets/img/projects/logo_puentes_studio.png";
import pokemonImage from "../../assets/img/projects/pokemon.webp";
import drumAppImage from "../../assets/img/projects/DrumApp.png";

const projectsData = [
  {
    id: "1",
    title: "Projects",
    list: [
      {
        name: "Your Cloud",
        imageUrl: yourCloudImage,
        projectDescription: "UX design, front end and back end developement. Your Cloudd is an interface to host archives protected buy password".,
        projectLink: "",
        repositoryLink: "",
      },
      {
        name: "Unika HR",
        imageUrl: unikaImage,
        projectLink: "https://unikahr.com/",
        repositoryLink: "",
      },
      {
        name: "Puentes Studio",
        imageUrl: puentesStudioImage,
        projectLink: "https://puentesstudio.com/",
        repositoryLink: "",
      },

      {
        name: "Pokemon Desk",
        imageUrl: pokemonImage,
        projectLink: "https://pokemon-black-sable.vercel.app/",
        repositoryLink: "https://github.com/puentes-studio/PokemonBlack",
      },
      {
        name: "Desktop Drumpad",
        imageUrl: drumAppImage,
        projectLink: "https://drumpaddd.netlify.app/",
        repositoryLink: "https://github.com/puentes-studio/Drumpad/branches",
      },
    ],
  },
];

export default projectsData;
