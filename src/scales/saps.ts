import type { Scale } from '@/types/form';
import { DomainTag, PopulationTag, PurposeTag, RaterTag } from '@/types/scaleTags';

const globalChoices = ['无', '可疑或极轻', '轻度', '中度', '重度', '极重'] as const;

const resultMap = {
  hallucinations: ['H1', 'H2', 'H3', 'H4', 'H5', 'H6'],
  delusions: ['D1', 'D2', 'D3', 'D4', 'D5', 'D6', 'D7', 'D8', 'D9', 'D10', 'D11', 'D12'],
  bizarreBehavior: ['B1', 'B2', 'B3', 'B4'],
  formalThoughtDisorder: ['T1', 'T2', 'T3', 'T4', 'T5', 'T6', 'T7', 'T8'],
} as const;

const globalIds = ['GH', 'GD', 'GB', 'GT'] as const;

const nameMap = {
  hallucinations: '幻觉',
  delusions: '妄想',
  bizarreBehavior: '怪异行为',
  formalThoughtDisorder: '阳性思维形式障碍',
} as const;

export const saps: Scale = {
  id: 'saps',
  trusted: false,
  name: '阳性症状评定量表参考记录 (SAPS)',
  summary: '用于评定精神病性阳性症状，包括幻觉、妄想、怪异行为与思维障碍。',
  description:
    '阳性症状评定量表（Scale for the Assessment of Positive Symptoms，SAPS）由 Andreasen 于 1984 年编制，用于由专业人员评定精神分裂症患者的幻觉、妄想、怪异行为和阳性思维形式障碍。本页症状描述为自行概括、未经本地验证，结果仅供记录参考，请以原版量表为准。',
  refer: [
    {
      title: 'Scale for the Assessment of Positive Symptoms（APA PsycTests 量表记录）',
      url: 'https://doi.org/10.1037/t48377-000',
    },
    {
      title:
        'Reliability and validity of the Chinese versions of the Scales for Assessment of Positive and Negative Symptoms（中文 SAPS/SANS 信效度研究）',
      url: 'https://pubmed.ncbi.nlm.nih.gov/1746289/',
    },
    {
      title:
        'Correlational studies of the Scale for the Assessment of Negative Symptoms and the Scale for the Assessment of Positive Symptoms: an overview and update（英文信效度综述）',
      url: 'https://pubmed.ncbi.nlm.nih.gov/7871123/',
    },
  ],
  guild:
    '请由受过训练的专业人员结合访谈、观察和临床资料填写。总体评定须独立判断，不能由症状项目分数相加或平均代替。',
  questions: [
    { id: '.subtitleH', form: { type: 'subtitle', title: '幻觉' } },
    {
      id: 'H1',
      form: {
        type: 'choice',
        question: '听幻觉',
        questionDescription: '评估在缺乏相应外界声音时听到声音或言语的体验。',
        choices: globalChoices,
      },
    },
    {
      id: 'H2',
      form: {
        type: 'choice',
        question: '声音交谈',
        questionDescription: '评估听到两个或多个声音彼此交谈的体验。',
        choices: globalChoices,
      },
    },
    {
      id: 'H3',
      form: {
        type: 'choice',
        question: '声音评论',
        questionDescription: '评估听到对自身行为或思想进行评论的声音。',
        choices: globalChoices,
      },
    },
    {
      id: 'H4',
      form: {
        type: 'choice',
        question: '躯体或触觉幻觉',
        questionDescription: '评估身体内部或皮肤上出现、但没有相应刺激的异常感觉。',
        choices: globalChoices,
      },
    },
    {
      id: 'H5',
      form: {
        type: 'choice',
        question: '嗅觉幻觉',
        questionDescription: '评估没有相应刺激时闻到异常气味的体验。',
        choices: globalChoices,
      },
    },
    {
      id: 'H6',
      form: {
        type: 'choice',
        question: '视觉幻觉',
        questionDescription: '评估在缺乏相应视觉刺激时看到人、物体、光影或场景。',
        choices: globalChoices,
      },
    },
    {
      id: 'GH',
      form: {
        type: 'choice',
        question: '幻觉总体评定',
        questionDescription: '结合授权手册，独立评定幻觉的总体严重程度。',
        choices: globalChoices,
      },
    },
    { id: '.subtitleD', form: { type: 'subtitle', title: '妄想' } },
    {
      id: 'D1',
      form: {
        type: 'choice',
        question: '被害妄想',
        questionDescription: '评估坚信自己受到监视、跟踪、陷害、伤害或被操纵等不符合事实的信念。',
        choices: globalChoices,
      },
    },
    {
      id: 'D2',
      form: {
        type: 'choice',
        question: '嫉妒妄想',
        questionDescription: '评估坚信伴侣或他人不忠，且缺乏足够事实依据并难以纠正。',
        choices: globalChoices,
      },
    },
    {
      id: 'D3',
      form: {
        type: 'choice',
        question: '罪恶或受罚妄想',
        questionDescription: '评估坚信自己犯下严重罪行、应受惩罚或应为灾难负责。',
        choices: globalChoices,
      },
    },
    {
      id: 'D4',
      form: {
        type: 'choice',
        question: '夸大妄想',
        questionDescription: '评估坚信自己拥有非凡身份、能力、财富、影响力或特殊使命。',
        choices: globalChoices,
      },
    },
    {
      id: 'D5',
      form: {
        type: 'choice',
        question: '宗教妄想',
        questionDescription: '评估具有妄想性质的宗教身份、使命或超自然信念。',
        choices: globalChoices,
      },
    },
    {
      id: 'D6',
      form: {
        type: 'choice',
        question: '躯体妄想',
        questionDescription: '评估对身体结构、功能或疾病状态持有不符合事实的坚定信念。',
        choices: globalChoices,
      },
    },
    {
      id: 'D7',
      form: {
        type: 'choice',
        question: '关系妄想',
        questionDescription: '评估坚信中性事件、言语、媒体内容或他人行为专门针对自己。',
        choices: globalChoices,
      },
    },
    {
      id: 'D8',
      form: {
        type: 'choice',
        question: '被控制妄想',
        questionDescription: '评估坚信自己的思想、感受或行为受到外力控制。',
        choices: globalChoices,
      },
    },
    {
      id: 'D9',
      form: {
        type: 'choice',
        question: '读心妄想',
        questionDescription: '评估坚信他人能够直接知道自己的思想。',
        choices: globalChoices,
      },
    },
    {
      id: 'D10',
      form: {
        type: 'choice',
        question: '思维广播',
        questionDescription: '评估坚信自己的思想会被传播出去并被他人听见或获得。',
        choices: globalChoices,
      },
    },
    {
      id: 'D11',
      form: {
        type: 'choice',
        question: '思维插入',
        questionDescription: '评估坚信某些思想是由外界植入自己头脑的。',
        choices: globalChoices,
      },
    },
    {
      id: 'D12',
      form: {
        type: 'choice',
        question: '思维被夺',
        questionDescription: '评估坚信自己的思想被外力从头脑中取走。',
        choices: globalChoices,
      },
    },
    {
      id: 'GD',
      form: {
        type: 'choice',
        question: '妄想总体评定',
        questionDescription: '结合授权手册，独立评定妄想的总体严重程度。',
        choices: globalChoices,
      },
    },
    { id: '.subtitleB', form: { type: 'subtitle', title: '怪异行为' } },
    {
      id: 'B1',
      form: {
        type: 'choice',
        question: '仪表或穿着怪异',
        questionDescription: '评估明显不合情境、古怪或异常的穿着、仪表和装饰。',
        choices: globalChoices,
      },
    },
    {
      id: 'B2',
      form: {
        type: 'choice',
        question: '社会或性行为怪异',
        questionDescription: '评估明显不合适、失礼、退缩或异常的社会和性行为。',
        choices: globalChoices,
      },
    },
    {
      id: 'B3',
      form: {
        type: 'choice',
        question: '攻击或激越行为',
        questionDescription: '评估无明显现实目的的激动、攻击或破坏性行为。',
        choices: globalChoices,
      },
    },
    {
      id: 'B4',
      form: {
        type: 'choice',
        question: '重复或刻板行为',
        questionDescription: '评估无目的、反复、仪式化或刻板的动作和行为。',
        choices: globalChoices,
      },
    },
    {
      id: 'GB',
      form: {
        type: 'choice',
        question: '怪异行为总体评定',
        questionDescription: '结合授权手册，独立评定怪异行为的总体严重程度。',
        choices: globalChoices,
      },
    },
    { id: '.subtitleT', form: { type: 'subtitle', title: '阳性思维形式障碍' } },
    {
      id: 'T1',
      form: {
        type: 'choice',
        question: '脱轨',
        questionDescription: '评估思路从一个主题逐渐或突然转向与原主题缺乏关联的内容。',
        choices: globalChoices,
      },
    },
    {
      id: 'T2',
      form: {
        type: 'choice',
        question: '切题性差',
        questionDescription: '评估回答逐渐偏离问题，且不能回到所问主题。',
        choices: globalChoices,
      },
    },
    {
      id: 'T3',
      form: {
        type: 'choice',
        question: '言语不连贯',
        questionDescription: '评估言语在句子或句子之间缺乏可理解的逻辑联系。',
        choices: globalChoices,
      },
    },
    {
      id: 'T4',
      form: {
        type: 'choice',
        question: '不合逻辑',
        questionDescription: '评估推理过程明显违背通常的逻辑规则。',
        choices: globalChoices,
      },
    },
    {
      id: 'T5',
      form: {
        type: 'choice',
        question: '迂回',
        questionDescription: '评估回答包含过多不必要细节，但最终仍能回到问题本身。',
        choices: globalChoices,
      },
    },
    {
      id: 'T6',
      form: {
        type: 'choice',
        question: '言语急迫',
        questionDescription: '评估言语量和语速明显增加，难以被打断。',
        choices: globalChoices,
      },
    },
    {
      id: 'T7',
      form: {
        type: 'choice',
        question: '言语易受干扰',
        questionDescription: '评估言语容易被环境刺激打断或转移到无关内容。',
        choices: globalChoices,
      },
    },
    {
      id: 'T8',
      form: {
        type: 'choice',
        question: '音联',
        questionDescription: '评估言语选择主要受押韵、谐音或相近音响影响，而非语义影响。',
        choices: globalChoices,
      },
    },
    {
      id: 'GT',
      form: {
        type: 'choice',
        question: '阳性思维形式障碍总体评定',
        questionDescription: '结合授权手册，独立评定阳性思维形式障碍的总体严重程度。',
        choices: globalChoices,
      },
    },
  ],
  result: (datas) => {
    const scores: Record<string, number> = {};
    for (const id of [...Object.values(resultMap).flat(), ...globalIds]) {
      if (!(id in datas) || datas[id] === void 0) {
        return { ok: false, require: id };
      }
      const score = datas[id];
      if (typeof score !== 'number' || !Number.isInteger(score) || score < 0 || score > 5) {
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
      title: `症状项目合计 ${total} / 150`,
      description: `幻觉 ${results.hallucinations}/30、妄想 ${results.delusions}/60、怪异行为 ${results.bizarreBehavior}/20、阳性思维形式障碍 ${results.formalThoughtDisorder}/40；总体评定（0～5）：幻觉 ${scores.GH}、妄想 ${scores.GD}、怪异行为 ${scores.GB}、思维形式障碍 ${scores.GT}。本页题目未经原版核对，以上仅供参考，请以原版量表为准解读。`,
      score: [
        {
          type: 'pointer',
          value: total,
          part: [{ start: 0, end: 150, color: '#5B6B7A' }],
        },
        {
          type: 'lines',
          min: 0,
          max: 5,
          minWidth: 25,
          splitLinesData: Object.entries(nameMap).map(
            ([key, name]) =>
              `${name}\n${(results[key as keyof typeof resultMap] / resultMap[key as keyof typeof resultMap].length).toFixed(2)}`
          ),
          values: [
            {
              values: Object.entries(resultMap).map(
                ([key, ids]) => results[key as keyof typeof resultMap] / ids.length
              ),
            },
          ],
        },
      ],
    };
  },
  tags: {
    rater: RaterTag.OTHER,
    population: [PopulationTag.ADULT],
    purpose: [PurposeTag.SCREENING, PurposeTag.SEVERITY],
    domain: [DomainTag.GENERAL],
  },
};

export default saps;
