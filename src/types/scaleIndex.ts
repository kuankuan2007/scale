export type ScaleIndexItem = {
  name: string;
  description: string;
  id: string;
  tags: string[];
};
export type ScaleIndex = {
  [key: string]: ScaleIndexItem;
};
