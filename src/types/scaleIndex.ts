export type ScaleIndexItem = {
  name: string;
  description: string;
  id: string;
  trusted: boolean;
  tags: string[];
};
export type ScaleIndex = {
  [key: string]: ScaleIndexItem;
};
