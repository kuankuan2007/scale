export type ChoiceFormConfig = Readonly<{
  type: 'choice';
  question: string;
  choices: Readonly<string[]>;
}>;
export type ChkeckBoxFormConfig = Readonly<{
  type: 'checkbox';
  question: string;
  choices: Readonly<string[]>;
}>;

export type FormConfig = ChoiceFormConfig | ChkeckBoxFormConfig;

export type Question = Readonly<{
  id: string;
  form: FormConfig;
}>;
export type PointerScore = Readonly<{
  type: 'pointer';
  value: number;
  part: Readonly<{
    start: number;
    end: number;
    color: string;
  }>[];
}>;
export type RadarMapScore = Readonly<{
  type: 'radar';
  values: Readonly<
    Readonly<{
      value: number;
      name: string;
    }>[]
  >;
}>;
export type ScoreShower = PointerScore | RadarMapScore;
export type ScaleOKResult = Readonly<{
  ok: true;
  title: string;
  description: string;
  score?: ScoreShower;
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
