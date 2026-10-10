export enum RaterTag {
  SELF = 'SELF',
  OTHER = 'OTHER',
}
export enum PopulationTag {
  CHILD = 'CHILD',
  ADOLESCENT = 'ADOLESCENT',
  ADULT = 'ADULT',
  ELDERLY = 'ELDERLY',
}
export enum PurposeTag {
  SCREENING = 'SCREENING',
  AUX_DIAGNOSIS = 'AUX_DIAGNOSIS',
  SEVERITY = 'SEVERITY',
  TRAIT = 'TRAIT',
}
export enum DomainTag {
  GENERAL = 'GENERAL',
  DEPRESSION = 'DEPRESSION',
  MANIA = 'MANIA',
  BIPOLAR = 'BIPOLAR',
  ANXIETY = 'ANXIETY',
  ADHD = 'ADHD',
  AUTISM = 'AUTISM',
  TRAUMA = 'TRAUMA',
  SUICIDE = 'SUICIDE',
  PERSONALITY = 'PERSONALITY',
  EMOTION_BEHAVIOR = 'EMOTION_BEHAVIOR',
}

export type ScaleTags = Readonly<{
  rater: RaterTag;
  population?: PopulationTag[];
  purpose?: PurposeTag[];
  domain?: DomainTag[];
}>;

export const RATER_LABEL = {
  [RaterTag.SELF]: '自评',
  [RaterTag.OTHER]: '祂评',
} as const satisfies Record<RaterTag, string>;

export const POPULATION_LABEL = {
  [PopulationTag.CHILD]: '儿童',
  [PopulationTag.ADOLESCENT]: '青少年',
  [PopulationTag.ADULT]: '成人',
  [PopulationTag.ELDERLY]: '老年',
} as const satisfies Record<PopulationTag, string>;

export const PURPOSE_LABEL = {
  [PurposeTag.SCREENING]: '初筛',
  [PurposeTag.AUX_DIAGNOSIS]: '辅助诊断',
  [PurposeTag.SEVERITY]: '程度评定',
  [PurposeTag.TRAIT]: '特质评估',
} as const satisfies Record<PurposeTag, string>;

export const DOMAIN_LABEL = {
  [DomainTag.GENERAL]: '综合',
  [DomainTag.DEPRESSION]: '抑郁',
  [DomainTag.MANIA]: '躁狂',
  [DomainTag.BIPOLAR]: '双相',
  [DomainTag.ANXIETY]: '焦虑',
  [DomainTag.ADHD]: '注意缺陷多动',
  [DomainTag.AUTISM]: '孤独症',
  [DomainTag.TRAUMA]: '创伤应激',
  [DomainTag.SUICIDE]: '自杀相关',
  [DomainTag.PERSONALITY]: '人格',
  [DomainTag.EMOTION_BEHAVIOR]: '情绪与行为',
} as const satisfies Record<DomainTag, string>;

export const TAG_GROUPS = [
  { key: 'rater', name: '评定方式', label: RATER_LABEL },
  { key: 'population', name: '适用人群', label: POPULATION_LABEL },
  { key: 'purpose', name: '用途', label: PURPOSE_LABEL },
  { key: 'domain', name: '测量维度', label: DOMAIN_LABEL },
] as const;

export type TagGroupKey = (typeof TAG_GROUPS)[number]['key'];
export type TagFilterState = 'OPTIONAL' | 'REQUIRED' | 'EXCLUDED';

export type TagGroupItem = { value: string; label: string };
export type TagGroupView = { key: TagGroupKey; name: string; items: TagGroupItem[] };

export const TAG_GROUP_VIEWS: TagGroupView[] = TAG_GROUPS.map((group) => ({
  key: group.key,
  name: group.name,
  items: Object.entries(group.label).map(([value, label]) => ({ value, label })),
}));

export const ALL_TAG_VALUES: string[] = TAG_GROUP_VIEWS.flatMap((group) =>
  group.items.map((item) => item.value)
);

export type TagEntry = { value: string; label: string };

export function tagEntriesOf(tags: ScaleTags): TagEntry[] {
  return [
    { value: tags.rater, label: RATER_LABEL[tags.rater] },
    ...(tags.population ?? []).map((i) => ({ value: i, label: POPULATION_LABEL[i] })),
    ...(tags.purpose ?? []).map((i) => ({ value: i, label: PURPOSE_LABEL[i] })),
    ...(tags.domain ?? []).map((i) => ({ value: i, label: DOMAIN_LABEL[i] })),
  ];
}

export function tagValuesOf(tags: ScaleTags): string[] {
  return tagEntriesOf(tags).map((i) => i.value);
}

export function tagLabelsOf(tags: ScaleTags): string[] {
  return tagEntriesOf(tags).map((i) => i.label);
}
