import type { Scale } from '@/types/form';
import { DomainTag, PopulationTag, PurposeTag, RaterTag } from '@/types/scaleTags';

const globalChoices = ['0', '1', '2', '3', '4'] as const;

const resultMap = {
  hallucinations: ['H1', 'H2', 'H3', 'H4', 'H5', 'H6', 'H7', 'H8', 'H9', 'H10', 'H11'],
  delusions: ['D1', 'D2', 'D3', 'D4', 'D5', 'D6'],
} as const;

const nameMap = {
  hallucinations: '听幻觉维度',
  delusions: '妄想维度',
} as const;

export const psyrats: Scale = {
  id: 'psyrats',
  trusted: false,
  name: '精神病性症状评定量表参考记录 (PSYRATS)',
  summary: '用于评估幻听与妄想体验的特征、频率及困扰程度，辅助症状追踪。',
  description:
    '精神病性症状评定量表（Psychotic Symptom Rating Scales，PSYRATS）由 Haddock 等人于 1999 年编制，用于由专业人员评定听幻觉和妄想的多个维度。本页题目为自行概括、未经本地验证，结果仅供记录参考，请以原版量表为准。',
  refer: [
    {
      title:
        'Scales to measure dimensions of hallucinations and delusions: the psychotic symptom rating scales (PSYRATS)（原始英文论文）',
      url: 'https://doi.org/10.1017/S0033291799008661',
    },
    {
      title:
        'A Chinese version of the Psychotic Symptom Rating Scales: psychometric properties in recent-onset and chronic psychosis（中文版及信效度研究）',
      url: 'https://doi.org/10.2147/NDT.S131174',
    },
    {
      title:
        'The Psychotic Symptom Rating Scales (PSYRATS): their usefulness and properties in first episode psychosis（英文信度、效度与结构研究）',
      url: 'https://doi.org/10.1016/j.schres.2006.04.024',
    },
    {
      title:
        'Are measures of voice hearing distinct from measures of emotional states, recovery and well-being? A factor analysis study',
      url: 'https://doi.org/10.1371/journal.pone.0333069',
    },
  ],
  guild:
    '请由受过训练的专业人员完成。听幻觉与妄想各维度的 0～4 分锚点各不相同，本页仅记录数字，具体锚点请以原版量表为准。',
  questions: [
    { id: '.subtitleH', form: { type: 'subtitle', title: '听幻觉维度' } },
    {
      id: 'H1',
      form: {
        type: 'choice',
        question: '出现频率',
        questionDescription: '评估幻觉出现的频繁程度；无幻觉记 0 分，越频繁分数越高。',
        choices: globalChoices,
      },
    },
    {
      id: 'H2',
      form: {
        type: 'choice',
        question: '持续时间',
        questionDescription: '评估每次幻觉通常持续多久；持续时间越长分数越高。',
        choices: globalChoices,
      },
    },
    {
      id: 'H3',
      form: {
        type: 'choice',
        question: '出现位置',
        questionDescription: '记录听到声音的位置；具体评分依据请参照授权手册。',
        choices: globalChoices,
      },
    },
    {
      id: 'H4',
      form: {
        type: 'choice',
        question: '声音强度',
        questionDescription: '评估听到的声音相对于正常谈话的响度；越响亮、越压倒其他声音分数越高。',
        choices: globalChoices,
      },
    },
    {
      id: 'H5',
      form: {
        type: 'choice',
        question: '对来源的信念',
        questionDescription: '评估对幻觉来源的判断；越坚信来自外部真实来源，分数越高。',
        choices: globalChoices,
      },
    },
    {
      id: 'H6',
      form: {
        type: 'choice',
        question: '负性内容数量',
        questionDescription: '评估幻觉内容中威胁、侮辱、命令或其他负性内容的多少。',
        choices: globalChoices,
      },
    },
    {
      id: 'H7',
      form: {
        type: 'choice',
        question: '负性内容程度',
        questionDescription: '评估负性内容带来的情绪冲击、威胁性或伤害性程度。',
        choices: globalChoices,
      },
    },
    {
      id: 'H8',
      form: {
        type: 'choice',
        question: '困扰数量',
        questionDescription: '评估听到的声音造成困扰的多少，与困扰强度分别记录。',
        choices: globalChoices,
      },
    },
    {
      id: 'H9',
      form: {
        type: 'choice',
        question: '困扰强度',
        questionDescription: '评估幻觉造成困扰时的强烈程度和难以忍受程度。',
        choices: globalChoices,
      },
    },
    {
      id: 'H10',
      form: {
        type: 'choice',
        question: '对生活的影响',
        questionDescription: '评估幻觉对工作、学习、人际关系和日常活动的干扰程度。',
        choices: globalChoices,
      },
    },
    {
      id: 'H11',
      form: {
        type: 'choice',
        question: '控制能力',
        questionDescription: '评估能否通过注意转移、意志或其他方式减少或停止幻觉。',
        choices: globalChoices,
      },
    },
    { id: '.subtitleD', form: { type: 'subtitle', title: '妄想维度' } },
    {
      id: 'D1',
      form: {
        type: 'choice',
        question: '先占观念程度',
        questionDescription: '评估妄想占据注意力和思维的程度，以及其他思想进入的困难程度。',
        choices: globalChoices,
      },
    },
    {
      id: 'D2',
      form: {
        type: 'choice',
        question: '先占观念持续时间',
        questionDescription: '评估每天被妄想占据的时间比例和持续时间。',
        choices: globalChoices,
      },
    },
    {
      id: 'D3',
      form: {
        type: 'choice',
        question: '确信程度',
        questionDescription: '评估对妄想信念的确信程度，以及面对相反证据时改变信念的可能性。',
        choices: globalChoices,
      },
    },
    {
      id: 'D4',
      form: {
        type: 'choice',
        question: '困扰程度',
        questionDescription: '评估妄想本身造成的主观困扰程度。',
        choices: globalChoices,
      },
    },
    {
      id: 'D5',
      form: {
        type: 'choice',
        question: '困扰强度',
        questionDescription: '评估妄想造成困扰时的强烈程度和难以忍受程度。',
        choices: globalChoices,
      },
    },
    {
      id: 'D6',
      form: {
        type: 'choice',
        question: '对生活的影响',
        questionDescription: '评估妄想对工作、学习、人际关系和日常活动的干扰程度。',
        choices: globalChoices,
      },
    },
  ],
  result: (datas) => {
    const scores: Record<string, number> = {};
    for (const id of Object.values(resultMap).flat()) {
      if (!(id in datas) || datas[id] === void 0) {
        return { ok: false, require: id };
      }
      const score = datas[id];
      if (typeof score !== 'number' || !Number.isInteger(score) || score < 0 || score > 4) {
        return { ok: false, require: id };
      }
      scores[id] = score;
    }

    const results = Object.fromEntries(
      Object.entries(resultMap).map(([key, ids]) => [
        key,
        ids.reduce((sum, id) => sum + scores[id]!, 0),
      ])
    ) as Record<keyof typeof resultMap, number>;
    const total = Object.values(results).reduce((sum, score) => sum + score, 0);

    return {
      ok: true,
      title: `听幻觉 ${results.hallucinations}/44、妄想 ${results.delusions}/24`,
      description: `分数越高表示相应维度越严重。本页题目未经原版核对，以上仅为参考记录，请以原版量表为准解读。`,
      score: [
        {
          type: 'pointer',
          value: total,
          part: [{ start: 0, end: 68, color: '#5B6B7A' }],
        },
        ...Object.entries(resultMap).map(([key, ids]) => {
          const value = results[key as keyof typeof resultMap] / ids.length;
          return {
            type: 'pointer' as const,
            title: `${nameMap[key as keyof typeof nameMap]}：${value.toFixed(2)}/4`,
            value,
            valueLabel: value.toFixed(2),
            part: [{ start: 0, end: 4, color: '#5B6B7A' }],
          };
        }),
      ],
    };
  },
  tags: {
    rater: RaterTag.OTHER,
    population: [PopulationTag.ADULT],
    purpose: [PurposeTag.SEVERITY],
    domain: [DomainTag.GENERAL],
  },
};

export default psyrats;
