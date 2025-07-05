// src/types/Project.ts
export type ComplexityLevel = 'Beginner' | 'Intermediate' | 'Advanced';

export interface Project {
  id: number; // Add unique identifier
  name: string;
  complexity: ComplexityLevel;
  time: string;
  features: string[];
  skills: string[];
  learning: string;
  imageUrl?: string; // For project thumbnails
  githubUrl?: string; // Link to code repository
  liveDemoUrl?: string; // Link to live demo
  tags?: string[]; // For filtering
  prerequisites?: string[]; // Suggested knowledge before starting
}