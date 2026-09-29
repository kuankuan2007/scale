type ScaleIndexItem = {
  name: string;
  description: string;
  id: string;
  trusted: boolean;
  tags: string[];
};
type ScaleIndex = {
  [key: string]: ScaleIndexItem;
};

declare module 'visual:scales-index' {
  declare const index: ScaleIndex;
  export default index;
}
