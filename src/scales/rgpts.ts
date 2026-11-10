import type { Scale } from '@/types/form';
import { DomainTag, PopulationTag, PurposeTag, RaterTag } from '@/types/scaleTags';

const choices = ['0 完全没有', '1', '2', '3', '4 完全如此'] as const;

const groups = [
  { id: 'A', title: '关系观念', count: 8 },
  { id: 'B', title: '被害观念', count: 10 },
] as const;

export const rgpts: Scale = {
  id: 'rgpts',
  name: '修订 Green 偏执想法量表 (R-GPTS)',
  summary: '用于评估偏执想法及相关信念的程度，区分想法内容与困扰影响。',
  description:
    '修订 Green 偏执想法量表（Revised Green et al. Paranoid Thoughts Scale，R-GPTS）由 Freeman 等人于 2021 年修订，用于自评过去一个月对他人的偏执想法，共 18 题（关系观念 8 题、被害观念 10 题），每项按 0～4 分计分，分数越高表示相应观念越强。本页译自原版附录，未经本地验证。',
  refer: [
    {
      title:
        'The revised Green et al., Paranoid Thoughts Scale (R-GPTS): psychometric properties, severity ranges, and clinical cut-offs（原始修订研究及问卷附录，CC BY 4.0）',
      url: 'https://doi.org/10.1017/S0033291719003155',
    },
    {
      title:
        'Measuring ideas of persecution and reference: the Green et al. Paranoid Thought Scales (G-PTS)（原始量表研究）',
      url: 'https://doi.org/10.1017/S0033291707001638',
    },
    {
      title:
        'Cross-cultural validation of the revised Green et al., paranoid thoughts scale（跨文化验证研究）',
      url: 'https://doi.org/10.1017/S0033291724000072',
    },
  ],
  guild:
    '请回想过去一个月中对他人的想法和感受，按每项符合自己的程度选择 0～4 分；0 表示完全没有，4 表示完全如此。请勿根据受药物影响时的体验评分。',
  questions: [
    { id: '.subtitleA', form: { type: 'subtitle', title: '关系观念' } },
    {
      id: 'A1',
      form: { type: 'choice', question: '我花时间想着朋友在背后议论我。', choices: choices },
    },
    { id: 'A2', form: { type: 'choice', question: '我经常听到别人在谈论我。', choices: choices } },
    {
      id: 'A3',
      form: { type: 'choice', question: '朋友和同事对我的批评性评价使我难过。', choices: choices },
    },
    { id: 'A4', form: { type: 'choice', question: '人们肯定在背后嘲笑我。', choices: choices } },
    {
      id: 'A5',
      form: { type: 'choice', question: '我一直在反复想着别人回避我。', choices: choices },
    },
    {
      id: 'A6',
      form: { type: 'choice', question: '人们一直在向我暗示一些事情。', choices: choices },
    },
    {
      id: 'A7',
      form: {
        type: 'choice',
        question: '我认为某些人并不像他们表面看起来的那样。',
        choices: choices,
      },
    },
    { id: 'A8', form: { type: 'choice', question: '别人背后议论我令我难过。', choices: choices } },
    { id: '.subtitleB', form: { type: 'subtitle', title: '被害观念' } },
    { id: 'B1', form: { type: 'choice', question: '某些人一直针对我。', choices: choices } },
    {
      id: 'B2',
      form: { type: 'choice', question: '人们盯着我看，想让我感到受到威胁。', choices: choices },
    },
    {
      id: 'B3',
      form: { type: 'choice', question: '我确信人们做一些事情是为了惹恼我。', choices: choices },
    },
    { id: 'B4', form: { type: 'choice', question: '我坚信有人在密谋对付我。', choices: choices } },
    { id: 'B5', form: { type: 'choice', question: '我确信有人想伤害我。', choices: choices } },
    {
      id: 'B6',
      form: { type: 'choice', question: '我无法停止想别人要让我困惑的事情。', choices: choices },
    },
    { id: 'B7', form: { type: 'choice', question: '受到迫害让我感到痛苦。', choices: choices } },
    {
      id: 'B8',
      form: {
        type: 'choice',
        question: '我很难停止想别人想让我感觉难受的事情。',
        choices: choices,
      },
    },
    {
      id: 'B9',
      form: { type: 'choice', question: '人们一直故意对我怀有敌意。', choices: choices },
    },
    {
      id: 'B10',
      form: { type: 'choice', question: '有人想伤害我，这让我很生气。', choices: choices },
    },
  ],
  result: (datas) => {
    const scores: Record<string, number> = {};
    for (const group of groups) {
      let total = 0;
      for (let index = 0; index < group.count; index++) {
        const id = `${group.id}${index + 1}`;
        const value = datas[id];
        if (typeof value !== 'number' || !Number.isInteger(value) || value < 0 || value > 4) {
          return { ok: false, require: id };
        }
        total += value;
      }
      scores[group.id] = total;
    }

    return {
      ok: true,
      title: `关系观念 ${scores.A}/32、被害观念 ${scores.B}/40`,
      description: `分数越高表示相应观念越强。原版参考（英文原版，本页译文未经本地验证）：被害观念 ≥18 提示可能存在被害妄想，≥11 提示临床水平的被害观念。如分数偏高或因此感到困扰，建议咨询精神心理专业人士。`,
      score: groups.map((group) => ({
        type: 'pointer' as const,
        title: `${group.title}：${scores[group.id]}/${group.count * 4}`,
        value: scores[group.id]!,
        part: [{ start: 0, end: group.count * 4, color: '#5B6B7A' }],
      })),
    };
  },
  tags: {
    rater: RaterTag.SELF,
    population: [PopulationTag.ADULT],
    purpose: [PurposeTag.SEVERITY],
    domain: [DomainTag.GENERAL],
  },
};

export default rgpts;
