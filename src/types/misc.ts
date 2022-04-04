export interface IMobileMenu {
  [group: string]: {
    name?: string;
    label: string,
    link?: string
  }[]
}