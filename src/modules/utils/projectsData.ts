import { ProjectType } from "../../types"
import vintedBotImg from "../../assets/img/VINTEDBOT.png"
import fasfuImg from "../../assets/img/FASFUBURGUERS.png"
import zgzAppImg from "../../assets/img/ZGZAPP.png";


export const marcosProjectData: ProjectType[] = [
  {
    previewImg: vintedBotImg,
    name: 'VINTED-BOT (2023)',
    description: 'This project is a Vinted bot that enhances product visibility and sales success by adding custom visits. It utilizes JavaScript and Node.js for implementation.',
    website: 'https://github.com/marcoslafoz/VintedBot/blob/master/README.md',
    github: 'https://github.com/marcoslafoz/VintedBot'
  },
  {
    previewImg: zgzAppImg,
    name: 'ZGZAPP (2023)',
    description: 'This page is a web application project that offers Zaragoza city services. (unfinished)',
    website: 'https://zgzapp.lafoz.dev/',
    github: 'https://github.com/marcoslafoz/zgzApp'
  },
  {
    previewImg: fasfuImg,
    name: 'FASFÚ BURGUERS (2022)',
    description: 'This website is a simple project from January 2022 about a fast-food restaurant called Fasfu.',
    website: 'https://fasfu.lafoz.dev/',
    github: 'https://github.com/marcoslafoz/Fasfu'
  }
]