import type { ScaleTags } from './scaleTags';

export type ScaleIndexItem = {
  name: string;
  description: string;
  id: string;
  trusted: boolean;
  tags: ScaleTags;
};
export type ScaleIndex = {
  [key: string]: ScaleIndexItem;
};
