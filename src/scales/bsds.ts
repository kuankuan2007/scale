import type { Scale } from '@/types/form';
import { DomainTag, PurposeTag, RaterTag } from '@/types/scaleTags';

const globalChoices = ['是', '否'] as const;

export const bsds: Scale = {
  id: 'bsds',
  name: '双相谱系诊断量表 (BSDS)',
  description: [
    '双相谱系诊断量表（Bipolar Spectrum Diagnostic Scale，BSDS）由美国精神科医生 Ronald W. Pies 创制，Ghaemi 等于 2005 年完成首个验证，用于筛查双相谱系障碍（含双相 II 型等较轻亚型）。阴性结果基本可排除双相谱系障碍，阳性结果则不能确诊，须结合情绪发作史及专业评估综合判断。可与',
    {
      type: 'link',
      content: '心境障碍问卷（MDQ）',
      to: '/scale/mdq',
    },
    '、',
    {
      type: 'link',
      content: '轻躁狂症状清单（HCL-32）',
      to: '/scale/hcl32',
    },
    '等工具互相参照。',
  ],
  refer: [
    {
      title:
        'Sensitivity and specificity of a new bipolar spectrum diagnostic scale（首个信效度验证研究；载明量表由 Ronald Pies 创制，界值 ≥13 时灵敏度 0.76、特异度 0.85，调整界值后特异度可升至 0.93）',
      url: 'https://doi.org/10.1016/S0165-0327(03)00196-4',
    },
    {
      title:
        'Is seasonal affective disorder a bipolar variant?（Box 3 经 Elsevier 授权转载 BSDS 全文、计分规则与 0～6／7～12／13～19／20～25 判读表，为本页题目文字与计分的直接依据）',
      url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC2874241/',
    },
    {
      title:
        'Psychometric properties of the Chinese version of the Bipolar Spectrum Diagnostic Scale（中文版信效度：内部一致性 0.81、重测信度 0.85，最佳界值 12）',
      url: 'https://doi.org/10.1111/j.1365-2702.2010.03390.x',
    },
    {
      title:
        'Performance of the Bipolar Spectrum Diagnostic Scale in psychiatric outpatients（961 名精神科门诊患者：AUC 0.80，最佳界值 11～12；阴性预测值高、阳性预测值低）',
      url: 'https://doi.org/10.1111/j.1399-5618.2010.00840.x',
    },
    {
      title:
        'Improving the diagnosis of bipolar disorder: predictive value of screening tests（MDQ 与 BSDS 预测值的贝叶斯分析：低患病率场景下假阳性风险高）',
      url: 'https://doi.org/10.1016/j.jad.2006.01.029',
    },
  ],
  questions: [
    {
      id: '.guild',
      form: {
        type: 'subtitle',
        title: '以下 19 句话出自同一段描述。若某句肯定符合你的情况，选「是」，否则选「否」',
        level: 4,
      },
    },
    {
      id: '1',
      form: {
        type: 'choice',
        question: '有些人注意到，他们的情绪和/或精力水平不时发生剧烈变化。',
        choices: globalChoices,
      },
    },
    {
      id: '2',
      form: {
        type: 'choice',
        question: '这些人注意到，有时他们的情绪和/或精力水平非常低落，而另一些时候又非常高涨。',
        choices: globalChoices,
      },
    },
    {
      id: '3',
      form: {
        type: 'choice',
        question:
          '在“低落期”，这些人常感到精力不足，需要卧床休息或增加睡眠，且几乎没有动力去做该做的事情。',
        choices: globalChoices,
      },
    },
    {
      id: '4',
      form: {
        type: 'choice',
        question: '在这些时期，他们的体重常会增加。',
        choices: globalChoices,
      },
    },
    {
      id: '5',
      form: {
        type: 'choice',
        question: '在低落期，这些人常感到“忧郁”、持续悲伤或抑郁。',
        choices: globalChoices,
      },
    },
    {
      id: '6',
      form: {
        type: 'choice',
        question: '有时，在低落期，他们会感到绝望，甚至产生自杀念头。',
        choices: globalChoices,
      },
    },
    {
      id: '7',
      form: {
        type: 'choice',
        question: '他们在工作或社交方面的功能会受到损害。',
        choices: globalChoices,
      },
    },
    {
      id: '8',
      form: {
        type: 'choice',
        question: '通常，低落期会持续数周，但有时仅持续数日。',
        choices: globalChoices,
      },
    },
    {
      id: '9',
      form: {
        type: 'choice',
        question:
          '具有这种模式的个体，在两次情绪波动之间可能会经历一段“正常”情绪期，此时他们的情绪和精力水平感觉“如常”，且功能未受影响。',
        choices: globalChoices,
      },
    },
    {
      id: '10',
      form: {
        type: 'choice',
        question: '他们可能会注意到自己的感觉方式发生了明显的变化或“转变”。',
        choices: globalChoices,
      },
    },
    {
      id: '11',
      form: {
        type: 'choice',
        question: '他们的精力会增加到超过自己平时的水平，并且常能完成许多平时无法完成的事情。',
        choices: globalChoices,
      },
    },
    {
      id: '12',
      form: {
        type: 'choice',
        question: '有时在这些“高涨期”，这些人会感到精力过剩或“亢奋”。',
        choices: globalChoices,
      },
    },
    {
      id: '13',
      form: {
        type: 'choice',
        question: '有些人在高涨期可能会感到易怒、“紧张不安”或好斗。',
        choices: globalChoices,
      },
    },
    {
      id: '14',
      form: {
        type: 'choice',
        question: '有些人在高涨期会一次承担过多的活动。',
        choices: globalChoices,
      },
    },
    {
      id: '15',
      form: {
        type: 'choice',
        question: '在高涨期，有些人的花钱方式可能会给自己带来麻烦。',
        choices: globalChoices,
      },
    },
    {
      id: '16',
      form: {
        type: 'choice',
        question: '在这些时期，他们可能会变得更健谈、更外向或性欲更强。',
        choices: globalChoices,
      },
    },
    {
      id: '17',
      form: {
        type: 'choice',
        question: '有时，他们在高涨期的行为在他人看来很奇怪或令人反感。',
        choices: globalChoices,
      },
    },
    {
      id: '18',
      form: {
        type: 'choice',
        question: '有时，这些人在高涨期会与同事或警察发生纠纷。',
        choices: globalChoices,
      },
    },
    {
      id: '19',
      form: {
        type: 'choice',
        question: '有时，他们在高涨期会增加饮酒，或使用未经医生处方的药物。',
        questionDescription:
          '原文为 “non-prescription drug use”，指未经医生处方自行使用的药物（常为成瘾物质），而非一般非处方药（OTC）',
        choices: globalChoices,
      },
    },
    {
      id: '20',
      form: {
        type: 'choice',
        question: '读完上面这段描述后，请从以下四项中勾选一项，评价整段描述与你自己的相符程度：',
        choices: [
          '这段描述非常符合我，或几乎完美地描述了我',
          '这段描述相当符合我',
          '这段描述在一定程度上符合我，但大部分不符合',
          '这段描述完全不符合我',
        ],
      },
    },
  ],
  result: (datas) => {
    let sum = 0;
    for (let i = 1; i <= 19; i++) {
      if (!(i in datas) || datas[i] === void 0) {
        return {
          ok: false,
          require: String(i),
        };
      }
      sum += 1 - Number(datas[i]);
    }
    if (datas[20] === void 0) {
      return {
        ok: false,
        require: '20',
      };
    }
    sum += (3 - Number(datas[20])) * 2;
    const positive = sum >= 13;
    const band = sum >= 20 ? '高' : sum >= 13 ? '中等' : sum >= 7 ? '低' : '很低';
    const description =
      `总分 ${sum}/25，符合双相谱系障碍描述的可能性「${band}」（≥13 分为筛查阳性）。` +
      (positive
        ? '阳性结果假阳性较多，不能确诊，建议由精神科医生进一步评估。'
        : '如有明显情绪起伏或功能受损，仍建议寻求专业评估。');
    return {
      ok: true,
      title: positive ? '筛查阳性' : '筛查阴性',
      description,
      score: [
        {
          type: 'pointer',
          value: sum,
          part: [
            { start: 0, end: 6.5, color: '#007700' },
            { start: 6.5, end: 12.5, color: '#ACAC00' },
            { start: 12.5, end: 19.5, color: '#FF7500' },
            { start: 19.5, end: 25, color: '#FF0000' },
          ],
        },
      ],
    };
  },

  tags: {
    rater: RaterTag.SELF,
    purpose: [PurposeTag.SCREENING, PurposeTag.AUX_DIAGNOSIS],
    domain: [DomainTag.BIPOLAR],
  },
};
export default bsds;
