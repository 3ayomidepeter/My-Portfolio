export interface Project {
  id: number;
  title: string;
  desc: string;
  overview: string;
  tags: string[];
  link: string;
  demo?: string;
  screenshot?: string;
}

export interface Skill {
  name: string;
  category?: string;
}
