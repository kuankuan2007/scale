import type { Scale } from '@/types/form';
import { DomainTag, PopulationTag, PurposeTag, RaterTag } from '@/types/scaleTags';

const globalChoices = ['无', '很轻', '轻度', '中度', '偏重', '重度', '极重'] as const;
const resultMap = {
  positive: ['P1', 'P2', 'P3', 'P4', 'P5', 'P6', 'P7'],
  negative: ['N1', 'N2', 'N3', 'N4', 'N5', 'N6', 'N7'],
  general: [
    'G1',
    'G2',
    'G3',
    'G4',
    'G5',
    'G6',
    'G7',
    'G8',
    'G9',
    'G10',
    'G11',
    'G12',
    'G13',
    'G14',
    'G15',
    'G16',
  ],
  aggression: ['S1', 'S2', 'S3'],
} as const;
const nameMap = {
  positive: '阳性症状',
  negative: '阴性症状',
  general: '一般精神病理',
  aggression: '补充攻击风险',
} as const;

export const panss: Scale = {
  id: 'panss',
  name: '阳性与阴性症状量表 (PANSS)',
  description:
    '阳性与阴性症状量表（Positive and Negative Syndrome Scale，PANSS）由 Kay 等人于 1987 年编制，共 30 项，每项按 1～7 分计分，用于评估精神分裂症患者近一周的阳性症状、阴性症状与一般精神病理症状的严重程度；中文版由司天梅等翻译并验证信效度。本量表为临床他评量表，需由受过训练的专业人员结合访谈、观察和临床资料完成，结果不能单独用于诊断。',
  refer: [
    {
      title: 'The Positive and Negative Syndrome Scale (PANSS) for Schizophrenia',
      url: 'https://doi.org/10.1093/schbul/13.2.261',
    },
    {
      title: '阳性和阴性症状量表（PANSS，中文版）的信、效度研究（司天梅等，中国心理卫生杂志 2004）',
      url: 'https://doi.org/10.3321/j.issn.1000-6729.2004.01.016',
    },
    {
      title:
        'The Swedish version of the Positive and Negative Syndrome Scale (PANSS) for schizophrenia: construct validity and interrater reliability',
      url: 'https://doi.org/10.1111/j.1600-0447.1992.tb03298.x',
    },
  ],
  guild:
    '请由受过训练的专业人员结合近一周的访谈、观察和临床资料评定。先判断症状是否存在，再根据严重程度、频率、持续时间和对功能的影响选择 1～7 分（1 分为无，7 分为极重）。补充攻击风险项目为选填，不计入总分。',
  questions: [
    {
      id: '.subtitle1',
      form: {
        type: 'subtitle',
        title: '阳性症状量表',
      },
    },
    {
      id: 'P1',
      form: {
        type: 'choice',
        question: '妄想',
        questionDescription:
          '评估固定、错误且不易被事实纠正的信念，包括被害、关系、夸大或躯体妄想。',
        choices: globalChoices,
      },
    },
    {
      id: 'P2',
      form: {
        type: 'choice',
        question: '联想障碍',
        questionDescription: '评估思维形式和言语表达的紊乱，如离题、逻辑松弛、思路中断或答非所问。',
        choices: globalChoices,
      },
    },
    {
      id: 'P3',
      form: {
        type: 'choice',
        question: '幻觉行为',
        questionDescription:
          '评估对不存在的声音、影像或其他感知刺激的体验，以及由此产生的言语或行为反应。',
        choices: globalChoices,
      },
    },
    {
      id: 'P4',
      form: {
        type: 'choice',
        question: '兴奋',
        questionDescription: '评估情绪高涨或易激惹、活动和精力增加、言语增多及难以安静等表现。',
        choices: globalChoices,
      },
    },
    {
      id: 'P5',
      form: {
        type: 'choice',
        question: '夸大',
        questionDescription: '评估不现实的优越感、特殊能力、身份、财富、影响力或使命感。',
        choices: globalChoices,
      },
    },
    {
      id: 'P6',
      form: {
        type: 'choice',
        question: '猜疑/被害',
        questionDescription:
          '评估对他人动机的不信任、警戒和被针对或伤害的感觉；与明确妄想的固定程度区分。',
        choices: globalChoices,
      },
    },
    {
      id: 'P7',
      form: {
        type: 'choice',
        question: '敌对性',
        questionDescription: '评估言语敌意、恼怒、争吵、威胁或针对他人的攻击性态度和行为。',
        choices: globalChoices,
      },
    },
    {
      id: '.subtitle2',
      form: {
        type: 'subtitle',
        title: '阴性症状量表',
      },
    },
    {
      id: 'N1',
      form: {
        type: 'choice',
        question: '情感迟钝',
        questionDescription: '评估情绪表达减少，包括面部表情、语音语调、眼神和姿势等非言语表现。',
        choices: globalChoices,
      },
    },
    {
      id: 'N2',
      form: {
        type: 'choice',
        question: '情绪退缩',
        questionDescription: '评估对人际和环境刺激缺乏兴趣、主动性或情绪反应，表现为与他人疏远。',
        choices: globalChoices,
      },
    },
    {
      id: 'N3',
      form: {
        type: 'choice',
        question: '交谈缺乏亲和力',
        questionDescription: '评估交谈时缺乏自然的情感联系和共鸣，回应冷淡、疏离或难以建立关系。',
        choices: globalChoices,
      },
    },
    {
      id: 'N4',
      form: {
        type: 'choice',
        question: '被动/淡漠社交退缩',
        questionDescription: '评估主动回避或被动接受社会隔离，缺乏交往需求和参与活动的意愿。',
        choices: globalChoices,
      },
    },
    {
      id: 'N5',
      form: {
        type: 'choice',
        question: '抽象思维困难',
        questionDescription:
          '评估理解比喻、概念、相似性和一般化意义的能力，以及是否过度拘泥具体含义。',
        choices: globalChoices,
      },
    },
    {
      id: 'N6',
      form: {
        type: 'choice',
        question: '交谈缺乏自发性和流畅性',
        questionDescription: '评估言语的主动性、数量、连贯流畅程度和维持交谈的能力。',
        choices: globalChoices,
      },
    },
    {
      id: 'N7',
      form: {
        type: 'choice',
        question: '刻板思维',
        questionDescription: '评估思维内容、表达或行为方式的重复、僵化和缺乏灵活变化。',
        choices: globalChoices,
      },
    },
    {
      id: '.subtitle3',
      form: {
        type: 'subtitle',
        title: '一般精神病理量表',
      },
    },
    {
      id: 'G1',
      form: {
        type: 'choice',
        question: '关注身体健康',
        questionDescription: '评估对身体疾病、健康状况或身体感觉的过度担忧，不仅限于客观身体症状。',
        choices: globalChoices,
      },
    },
    {
      id: 'G2',
      form: {
        type: 'choice',
        question: '焦虑',
        questionDescription: '评估主观紧张、担忧、恐惧以及相应的身体或行为表现。',
        choices: globalChoices,
      },
    },
    {
      id: 'G3',
      form: {
        type: 'choice',
        question: '自罪感',
        questionDescription: '评估不恰当或过度的内疚、自责、悔恨，以及认为自己应受惩罚的想法。',
        choices: globalChoices,
      },
    },
    {
      id: 'G4',
      form: {
        type: 'choice',
        question: '紧张',
        questionDescription: '评估身体和精神上的紧张、坐立不安、激越或难以放松的程度。',
        choices: globalChoices,
      },
    },
    {
      id: 'G5',
      form: {
        type: 'choice',
        question: '装相和作态',
        questionDescription: '评估不自然、矫揉造作、古怪或不恰当的姿势、表情、动作和行为方式。',
        choices: globalChoices,
      },
    },
    {
      id: 'G6',
      form: {
        type: 'choice',
        question: '抑郁',
        questionDescription: '评估悲伤、无望、兴趣减退、精力下降及与之相关的情绪和行为表现。',
        choices: globalChoices,
      },
    },
    {
      id: 'G7',
      form: {
        type: 'choice',
        question: '动作迟缓',
        questionDescription: '评估身体动作、反应、言语和思维速度减慢，以及活动量下降。',
        choices: globalChoices,
      },
    },
    {
      id: 'G8',
      form: {
        type: 'choice',
        question: '不合作',
        questionDescription: '评估对访谈、检查、治疗或合理要求的抵触、拒绝和不配合程度。',
        choices: globalChoices,
      },
    },
    {
      id: 'G9',
      form: {
        type: 'choice',
        question: '不寻常思维内容',
        questionDescription:
          '评估奇特、离奇或不寻常的思维内容，但尚未达到明确妄想或夸大条目的程度。',
        choices: globalChoices,
      },
    },
    {
      id: 'G10',
      form: {
        type: 'choice',
        question: '定向障碍',
        questionDescription: '评估对时间、地点、人物和处境的定向能力及相关的困惑程度。',
        choices: globalChoices,
      },
    },
    {
      id: 'G11',
      form: {
        type: 'choice',
        question: '注意障碍',
        questionDescription: '评估维持和集中注意的能力，包括容易分心、无法跟随谈话或任务的表现。',
        choices: globalChoices,
      },
    },
    {
      id: 'G12',
      form: {
        type: 'choice',
        question: '判断和自知力缺乏',
        questionDescription:
          '评估对自身精神状况、行为后果和现实处境的理解，以及接受帮助或治疗的能力。',
        choices: globalChoices,
      },
    },
    {
      id: 'G13',
      form: {
        type: 'choice',
        question: '意志障碍',
        questionDescription: '评估启动、维持和完成有目的活动的能力下降，包括缺乏动机和目标。',
        choices: globalChoices,
      },
    },
    {
      id: 'G14',
      form: {
        type: 'choice',
        question: '冲动控制缺乏',
        questionDescription: '评估抑制冲动和延迟行动的能力，包括冲动性言语、行为或攻击。',
        choices: globalChoices,
      },
    },
    {
      id: 'G15',
      form: {
        type: 'choice',
        question: '先占观念',
        questionDescription:
          '评估反复、过度占据注意力的思想、担忧、兴趣或情绪主题对其他活动的干扰。',
        choices: globalChoices,
      },
    },
    {
      id: 'G16',
      form: {
        type: 'choice',
        question: '主动回避社交',
        questionDescription: '评估因害怕、怀疑、兴趣缺乏或其他精神症状而主动回避社会关系和活动。',
        choices: globalChoices,
      },
    },
    {
      id: '.subtitle4',
      form: {
        type: 'subtitle',
        title: '补充攻击风险量表（选填）',
      },
    },
    {
      id: 'S1',
      form: {
        type: 'choice',
        question: '愤怒',
        questionDescription:
          '补充评估近期易怒、发怒和愤怒爆发的强度、频率及可控程度；不计入标准 PANSS 总分。',
        choices: globalChoices,
      },
    },
    {
      id: 'S2',
      form: {
        type: 'choice',
        question: '延迟满足困难',
        questionDescription:
          '补充评估为获得即时满足而难以等待、妥协或抑制要求的程度；不计入标准 PANSS 总分。',
        choices: globalChoices,
      },
    },
    {
      id: 'S3',
      form: {
        type: 'choice',
        question: '情感不稳',
        questionDescription:
          '补充评估情绪变化的突然性、幅度和稳定控制能力；不计入标准 PANSS 总分。',
        choices: globalChoices,
      },
    },
  ],
  result: (datas) => {
    const scores: Record<string, number> = {};
    const standardIds = [...resultMap.positive, ...resultMap.negative, ...resultMap.general];
    for (const id of [...standardIds, ...resultMap.aggression]) {
      if (!(id in datas) || datas[id] === void 0) {
        if (!standardIds.includes(id as (typeof standardIds)[number])) continue;
        return {
          ok: false,
          require: id,
        };
      }
      const choiceIndex = datas[id];
      if (
        typeof choiceIndex !== 'number' ||
        !Number.isInteger(choiceIndex) ||
        choiceIndex < 0 ||
        choiceIndex >= globalChoices.length
      ) {
        return {
          ok: false,
          require: id,
        };
      }
      scores[id] = choiceIndex + 1;
    }

    const results = {
      positive: resultMap.positive.reduce((sum, id) => sum + scores[id]!, 0),
      negative: resultMap.negative.reduce((sum, id) => sum + scores[id]!, 0),
      general: resultMap.general.reduce((sum, id) => sum + scores[id]!, 0),
    };
    const aggression = resultMap.aggression.every((id) => id in scores)
      ? resultMap.aggression.reduce((sum, id) => sum + scores[id]!, 0)
      : undefined;
    const total = results.positive + results.negative + results.general;
    return {
      ok: true,
      title: `总分 ${total} / 210`,
      description: `${nameMap.positive} ${results.positive}/49、${nameMap.negative} ${results.negative}/49、${nameMap.general} ${results.general}/112。${aggression === undefined ? '补充攻击风险项目未完成。' : `${nameMap.aggression} ${aggression}/21。`}分数越高表示症状越重，结果不能单独用于诊断，应由受训专业人员结合临床资料解读。`,
      score: [
        {
          type: 'pointer',
          value: total,
          part: [{ start: 30, end: 210, color: '#5B6B7A' }],
        },
        {
          type: 'lines',
          min: 1,
          max: 7,
          minWidth: 25,
          splitLinesData: [
            `${nameMap.positive}\n${(results.positive / 7).toFixed(2)}`,
            `${nameMap.negative}\n${(results.negative / 7).toFixed(2)}`,
            `${nameMap.general}\n${(results.general / 16).toFixed(2)}`,
            ...(aggression === undefined
              ? []
              : [`${nameMap.aggression}\n${(aggression / 3).toFixed(2)}`]),
          ],
          values: [
            {
              values: [
                results.positive / 7,
                results.negative / 7,
                results.general / 16,
                ...(aggression === undefined ? [] : [aggression / 3]),
              ],
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
export default panss;
