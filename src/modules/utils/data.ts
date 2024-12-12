import { ProjectType, SkillsCategoryType } from "../../types"
import frontendIcon from "../../assets/img/code.webp"
import designIcon from "../../assets/img/colorpalette.webp"
import backendIcon from "../../assets/img/serverconnection.webp"

import memeGeneratorImg from "../../assets/img/memegenerator.jpg"
import studentSpaceImg from "../../assets/img/studentspace.png"


export const marcosProjectData: ProjectType[] = [
  {
    previewImg: studentSpaceImg,
    name: 'StudentSpace',
    description: 'Agenda digitalizada, usando React TS, TailWind, SpringBoot Java, Docker,...',
    website: 'https://studentspace.lafoz.dev/',
    github: 'https://github.com/marcoslafoz/studentspace'
  },
  {
    previewImg: memeGeneratorImg,
    name: 'MemeGenerator',
    description: 'Simple editor de memes, usando React TypeScript, Next UI, y Bootstrap.',
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
