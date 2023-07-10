export interface ImageValues {
  url: string;
  description: string;
  text?: string;
}

export interface QuiltedImageData {
  img: string;
  title: string;
  rows?: number;
  cols?: number;
}
