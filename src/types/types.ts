export interface SkillType {
  name: string;
  percentage: number
}

export interface SkillsCategoryType {
  name: string;
  icon: any;
  skills: SkillType[];
}