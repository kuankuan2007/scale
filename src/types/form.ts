type DeepReadonly<T> = T extends object
  ? {
      readonly [K in keyof T]: DeepReadonly<T[K]>;
    }
  : T;

export type ChoiceFormConfig = DeepReadonly<{
  type: 'choice';
  question: string;
  choices: string[];
}>;
export type ChkeckBoxFormConfig = DeepReadonly<{
  type: 'checkbox';
  question: string;
  choices: string[];
}>;

export type FormConfig = ChoiceFormConfig | ChkeckBoxFormConfig;

export type Question = Readonly<{
  id: string;
  form: FormConfig;
}>;
export type PointerScore = DeepReadonly<{
  type: 'pointer';
  value: number;
  part: {
    start: number;
    end: number;
    color: string;
  }[];
}>;
export type RadarMapScore = DeepReadonly<{
  type: 'radar';
  values: {
    value: number;
    name: string;
  }[];
}>;
export type LinesScore = DeepReadonly<{
  type: 'lines';
  min: number;
  max: number;
  step?: number; // default 1
  splitLines?: number; // default  values
  splitLinesData?: string[];
  values: {
    fill?: string;
    stroke?: string;
    values: number[];
  }[];
}>;
export type ScoreShower = (PointerScore | RadarMapScore | LinesScore) & {
  title?: string;
};
export type ScaleOKResult = Readonly<{
  ok: true;
  title: string;
  description: string;
  score?: Readonly<Readonly<ScoreShower>[]>;
}>;
export type ScaleErrorResult = Readonly<{
  ok: false;
  require?: string;
  message?: string;
}>;

export type Scale = Readonly<{
  id: string;
  name: string;
  description: string;
  questions: Question[];
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  result: (datas: { [key: string]: any }) => ScaleOKResult | ScaleErrorResult;
  tags: string[];
}>;
