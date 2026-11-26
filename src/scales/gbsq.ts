import type { Scale } from '@/types/form';
import { DomainTag, PopulationTag, RaterTag } from '@/types/scaleTags';

const globalChoices = [
  '完全没有',
  '稍微有一点',
  '有一些',
  '中等程度',
  '相当明显',
  '非常明显',
] as const;

export const gbsq: Scale = {
  id: 'gbsq',
  trusted: false,
  name: '戈德堡双相筛查问卷 (GBSQ)',
  seo: {
    summary: '用于筛查双相情感障碍相关表现，辅助识别躁狂或轻躁狂发作史。',
    keywords: ['戈德堡双相筛查问卷', 'GBSQ量表', '双相情感障碍筛查', '躁狂发作筛查', '轻躁狂评估'],
  },
  description: [
    '戈德堡双相筛查问卷（Goldberg Bipolar Screening Quiz，GBSQ）由 Ivan Goldberg 于 1993 年编制。本页依据存档英文原版重译 12 项题目，询问一生大部分时间的表现；原版没有信效度或划界分依据，结果仅供自我觉察，不用于筛查或诊断。国内流传版的名称、作者归属、条目及作答时间框架存在勘误，详见',
    {
      type: 'link',
      content: '《戈德堡双相筛查问卷（GBSQ）来源考证》',
      to: '/research/gbsq',
    },
    '。如需经过信效度验证的相关工具，可参考',
    {
      type: 'link',
      content: '心境障碍问卷（MDQ）',
      to: '/scale/mdq',
    },
    '或',
    {
      type: 'link',
      content: '轻躁狂症状清单（HCL-32）',
      to: '/scale/hcl32',
    },
    '。',
  ],
  refer: [
    {
      title:
        'Goldberg Bipolar Screening Quiz — By Ivan Goldberg, M.D.（原始问卷全文、六级选项与“Copyright 1993 Ivan Goldberg”版权声明；Psych Central 经授权刊载，此处为互联网档案馆 2017 年存档）',
      url: 'https://web.archive.org/web/20171218231612/https://psychcentral.com/quizzes/bipolar-quiz/',
    },
    {
      title:
        'Goldberg Bipolar Screening Quiz（Psych Central 2006 年存档，含 John M. Grohol 审阅记录与“改编自 Goldberg Bipolar Screening Inventory 印刷版”的说明）',
      url: 'https://web.archive.org/web/20060512182259/http://psychcentral.com/quizzes/bipolarquiz.htm',
    },
    // 原版无期刊论文，故只能引用 Psych Central 授权刊载页的互联网档案馆存档；考证过程详见 /research/gbsq。
  ],
  guild:
    '以下条目描述的是你在自己一生大部分时间里的感受与行为。如果你一贯是某种样子、只是近期发生了变化，请按你一贯的样子作答。为使结果最有参考价值，受测者宜年满 18 岁且至少经历过一次抑郁发作。',
  questions: [
    {
      id: '1',
      form: {
        type: 'choice',
        question: '有时我比平时健谈得多，或者说话速度快得多。',
        choices: globalChoices,
      },
    },
    {
      id: '2',
      form: {
        type: 'choice',
        question: '有些时候我比平时活跃得多，或者做的事情比平时多得多。',
        choices: globalChoices,
      },
    },
    {
      id: '3',
      form: {
        type: 'choice',
        question:
          '我会陷入某种心境，感觉自己整个人明显被「加速」（思维与活动都变快），或者变得很容易烦躁、易怒。',
        choices: globalChoices,
      },
    },
    {
      id: '4',
      form: {
        type: 'choice',
        question: '有些时候我同时感到情绪高涨（欣快）和情绪低落（抑郁）。',
        choices: globalChoices,
      },
    },
    {
      id: '5',
      form: {
        type: 'choice',
        question: '有时我对性的兴趣比平时强烈得多。',
        choices: globalChoices,
      },
    },
    {
      id: '6',
      form: {
        type: 'choice',
        question: '我的自信程度起伏很大，从极度的自我怀疑，到同等程度的过度自信。',
        choices: globalChoices,
      },
    },
    {
      id: '7',
      form: {
        type: 'choice',
        question: '我工作的数量或质量曾出现过极大的波动。',
        choices: globalChoices,
      },
    },
    {
      id: '8',
      form: {
        type: 'choice',
        question: '有时我会毫无明显原因地非常愤怒，或充满敌意。',
        choices: globalChoices,
      },
    },
    {
      id: '9',
      form: {
        type: 'choice',
        question: '我有些时期思维迟钝，另一些时期却思维极富创造力。',
        choices: globalChoices,
      },
    },
    {
      id: '10',
      form: {
        type: 'choice',
        question: '有时我非常喜欢和人待在一起，另一些时候却只想独自一人沉浸在自己的思绪里。',
        choices: globalChoices,
      },
    },
    {
      id: '11',
      form: {
        type: 'choice',
        question: '我有些时期极其乐观，另一些时期却同等程度地悲观。',
        choices: globalChoices,
      },
    },
    {
      id: '12',
      form: {
        type: 'choice',
        question: '我有些时期频繁想哭、容易流泪，另一些时期却过度地大笑和开玩笑。',
        choices: globalChoices,
      },
    },
  ],
  result: (datas) => {
    let n = 0;
    for (let i = 1; i <= 12; i++) {
      if (!(i in datas) || datas[i] === void 0) {
        return {
          ok: false,
          require: String(i),
        };
      }
      n += Number(datas[i]);
    }
    return {
      ok: true,
      title: `总分 ${n} / 60`,
      description:
        `总分：${n}（满分 60）。原版 Goldberg Bipolar Screening Quiz 从未公布任何划界分或分数段解释，因此这里只给出总分，不划分等级、不作诊断性推断。分数越高，说明你在自己一生大部分时间里符合双相谱系相关描述的程度越高。` +
        '若这些表现已经影响你的情绪、工作、学业、人际或睡眠，或你曾有过至少一次抑郁发作，建议前往精神科或心理科接受正式评估。' +
        '原版另建议受测者年满 18 岁且至少经历过一次抑郁发作；若不符合这两条，本结果的参考价值有限。',
    };
  },

  tags: {
    rater: RaterTag.SELF,
    population: [PopulationTag.ADULT],
    domain: [DomainTag.BIPOLAR],
  },
};
export default gbsq;
