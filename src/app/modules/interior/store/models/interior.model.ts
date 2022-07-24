export interface Interior {
  id: string;
  model3D: string,
  article: {
    desc: string,
    planos: string[]
  },
  images: {
    day: string[],
    night: string[]
  },
  longDesc: string,
  shortDesc: string,
  title: string,
}
