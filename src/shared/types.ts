export interface project {
  id: string;
  title: string;
  description: string;
  technologies: {
    title: string;
    url: string;
  }[];
  image: string;
  url: {
    appstore?: string;
    playstore?: string;
    web?: string;
  };
  index?: number;
}

export interface allDataType {
  skills: {
    image: string;
    title: string;
    link: string;
  }[];
  projects: project[];
  smallProjects: {
    id: string;
    title: string;
    description: string;
    link: string;
    icon: {
      url: string;
    };
  }[];
}
