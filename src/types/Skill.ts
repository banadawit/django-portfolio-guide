// src/types/Skill.ts
export type SkillLevel = 'Beginner' | 'Intermediate' | 'Advanced' | 'Expert';

export interface Skill {
  id: number;
  title: string;
  content: string;
  level: SkillLevel;
  icon?: string; // For visual representation
  category: 'Backend' | 'Frontend' | 'DevOps' | 'Database' | 'Security';
  projects?: number[]; // Related project IDs
  resources?: {
    documentation?: string;
    tutorials?: string[];
    cheatsheets?: string;
  };
}