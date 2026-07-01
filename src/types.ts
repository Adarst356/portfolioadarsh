export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  bullets: string[];
  tech: string[];
  category: string; // 'fintech' | 'crm' | 'utility' | 'work'
  github?: string;
  playstore?: string;
  demoUrl?: string;
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  period: string;
  bullets: string[];
}

export interface SkillGroup {
  category: string;
  skills: string[];
}
