export interface ExperienceEntry {
  company: string;
  role: string;
  period: string;
  location: string;
  summary: string;
  responsibilities: string[];
  technologies: string[];
  lessonLearned: string;
}

export interface ProjectEntry {
  slug: string;
  title: string;
  summary: string;
  technologies: string[];
  status: string;
  progress?: number;
  featured?: boolean;
  hasCaseStudy?: boolean;
}

export interface CapabilityGroup {
  title: string;
  description: string;
  items: string[];
  businessImpact: string;
}

export interface SnapshotCard {
  label: string;
  value: string;
  detail: string;
}
