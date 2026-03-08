import type { Props } from "astro";

export interface TechnologyType {
  title: string;
  image: string;
}

export interface ListTechnologiesType {
  id: string;
  title: string;
  technologies: Array<TechnologyType>;
}

export interface MyServicesType {
  id: string;
  title: string;
  content: string;
}

export interface MyProjectType {
  title: string;
  image: string;
  content: string;
  technologies: string;
  type: string;
  urlDemo?: string;
  urlCode?: string;
  urlCodeBe?: string;
}

export interface ListExperiencesType {
  time: string;
  title: string;
  content: string;
}

export interface SocialType {
  name: string;
  href: string;
  linkTitle: string;
  icon: (_props: Props) => Element;
}
