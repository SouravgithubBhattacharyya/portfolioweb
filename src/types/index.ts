import { IconType } from "react-icons";

// General Info Types
export type TGeneralInfo = {
  hero_info: {
    greeting: string;
    name: string;
    role: string;
    intro: string;
    stats: {
      projects: number;
      frameworks: number;
    };
  };
  about_info: {
    bio: {
      intro: string;
      main: string;
      outro: string;
    };
  };
  contact_info: {
    email: string;
    mobile: number;
  };
};

// Skills Types
type TSkillLabel = "BEGINNER" | "INTERMEDIATE" | "ADVANCED" | "PRO";
type TSkillValue = 22 | 44 | 66 | 88;
type TSkill = {
  name: string;
  level: {
    label: TSkillLabel;
    value: TSkillValue;
  };
};

// Field Types
export type TField = {
  title: string;
  description: string;
  icon: IconType;
  skills: TSkill[];
};

// Projects Types
export type TProject = {
  id: string;
  title: string;
  description: string;
  technologies: string[];
};
