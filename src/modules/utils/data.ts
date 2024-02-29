import { SkillsCategoryType } from "../../types";
import frontendIcon from "../../assets/img/code.webp";
import designIcon from "../../assets/img/colorpalette.webp";
import backendIcon from "../../assets/img/serverconnection.webp";

export const marcosSkillsData: SkillsCategoryType[] = [
  {
    icon: frontendIcon,
    name: "Frontend Developer",
    skills: [
      { name: "HTML", percentage: 95 },
      { name: "CSS", percentage: 75 },
      { name: "Typescript", percentage: 65 },
      { name: "JavaScript", percentage: 50 },
    ],
  },
  {
    icon: backendIcon,
    name: "Backend Developer",
    skills: [
      { name: "Java", percentage: 55 },
      { name: "MySQL", percentage: 50 },
      { name: "PHP", percentage: 15 },
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
