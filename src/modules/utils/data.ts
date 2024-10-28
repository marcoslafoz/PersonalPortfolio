import { ProjectType, SkillsCategoryType } from "../../types"
import frontendIcon from "../../assets/img/code.webp"
import designIcon from "../../assets/img/colorpalette.webp"
import backendIcon from "../../assets/img/serverconnection.webp"

import vintedBotImg from "../../assets/img/VINTEDBOT.png"
import fasfuImg from "../../assets/img/FASFUBURGUERS.png"
import zgzAppImg from "../../assets/img/ZGZAPP.png"
import memeGeneratorImg from "../../assets/img/MEMEGENERATOR.jpg"


export const marcosProjectData: ProjectType[] = [
  {
    previewImg: memeGeneratorImg,
    name: 'MemeGenerator (2024)',
    description: 'This project is a simple meme editor using React TypeScript, Next UI, and Bootstrap.',
    website: 'https://meme-generator.lafoz.dev/',
    github: 'https://github.com/marcoslafoz/meme-generator'
  },
]

export const marcosSkillsData: SkillsCategoryType[] = [
  {
    icon: frontendIcon,
    name: "Frontend Developer",
    skills: [
      { name: "HTML / CSS / Bootstrap", percentage: 95 },
      { name: "React", percentage: 75 },
      { name: "Typescript", percentage: 65 },
    ],
  },
  {
    icon: backendIcon,
    name: "Backend Developer",
    skills: [
      { name: "Java", percentage: 65 },
      { name: "MySQL", percentage: 60 },
      { name: "Python", percentage: 30 },
    ],
  },
  {
    icon: designIcon,
    name: "Design",
    skills: [
      { name: "Photoshop", percentage: 90 },
      { name: "Illustrator", percentage: 35 },
    ],
  },
]
