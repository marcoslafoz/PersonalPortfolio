import { SkillsCategoryType } from "../../types";
import frontendIcon from "../../assets/img/code.webp";
import designIcon from "../../assets/img/colorpalette.webp";
import backendIcon from "../../assets/img/serverconnection.webp";

export const marcosSkillsData: SkillsCategoryType[] = [
  {
    icon: frontendIcon,
    name: "Frontend Developer",
    skills: [
      { name: "HTML / CSS", percentage: 95 },
      { name: "React", percentage: 75 },
      { name: "Typescript", percentage: 65 },
      { name: "Bootstrap", percentage: 80 },
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
];
