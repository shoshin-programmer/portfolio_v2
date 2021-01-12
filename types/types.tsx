export interface LinkType {
  name: string;
  url: string;
}
export interface Project {
  title: string;
  subtitle: string;
  year: number;
  links: LinkType[];
}
export interface ProjectList {
  projects: Array<Project>;
}