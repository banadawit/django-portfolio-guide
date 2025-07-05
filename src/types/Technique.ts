// src/types/Technique.ts
export type TechniqueDifficulty = 'Basic' | 'Intermediate' | 'Advanced' | 'Expert';

export interface Technique {
  id: number;
  title: string;
  content: string;
  relevance: string[];
  difficulty: TechniqueDifficulty;
  category: 'Database' | 'Admin' | 'Integration' | 'Testing' | 'Visualization' | 'Performance';
  icon?: string;
  codeExample?: string;
  useCases?: {
    title: string;
    description: string;
    implementationTips: string[];
  }[];
  relatedSkills?: number[]; // References to skill IDs
  resources?: {
    documentation?: string;
    tutorials?: string[];
    packages?: string[];
  };
}