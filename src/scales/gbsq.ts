import type { Scale } from '@/types/form';

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
  description: [
    '戈德堡双相筛查问卷（Goldberg Bipolar Screening Quiz，缩写 GBSQ；其印刷版名为 Goldberg Bipolar Screening Inventory）由美国精神科医生 Ivan Goldberg 编制，问卷版权页标注“Copyright 1993 Ivan Goldberg”，后由 Psych Central 获授权刊载、John M. Grohol 审阅，自 20 世纪 90 年代起主要通过网络传播，原址现已改版下线。\n\n本页按互联网档案馆存档的英文原版逐条重译，12 个条目未作增删（包括中文流传版删去的第 5 题），指导语与六级选项按原文还原。请注意指导语要求作答的是“你一生大部分时间里的感受与行为”，而非最近一周或最近一个月；原版另建议受测者年满 18 岁且至少经历过一次抑郁发作，否则结果参考价值有限。需要强调的是，重译只解决文字对应问题，并不改变本问卷没有任何信度、效度与划界分依据的事实，本站本页并不比中文流传版更可信。\n\n该问卷从未以期刊论文形式发表，没有正式手册，也没有任何信度、效度或划界分研究，原版更从未公布过评分解释，因此本页只给出总分、不划分等级、不作任何诊断性推断。结果仅供自我觉察参考，不能用于筛查或诊断，更不应替代',
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
    '等经过验证的工具。\n\n需要特别说明：本问卷在国内各测评平台上被普遍误称为「双相情感障碍自评量表（BSQ）」，并被误传为「由 Robert M.A. Hirschfeld 医生及其同事研发」。这两个说法都不成立，它与 Hirschfeld 及 MDQ 没有任何关系；那个流传版还删改过条目、误译过第 3 题、并自行编造了分数段解释。本站将该流传版原样保留在',
    {
      type: 'link',
      content: '双相情感障碍自评量表 (BSQ)',
      to: '/scale/bsq',
    },
    '，方便按讹传名称检索的用户找到并比对。两版同样缺乏可考据的统计学指标，只可互为参考，本站不推荐其中任何一版。完整的来源考证、讹传传播路径与逐条差异，见',
    {
      type: 'link',
      content: '《戈德堡双相筛查问卷（GBSQ）来源考证》',
      to: '/research/gbsq',
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
  questions: [
    {
      id: '.guild',
      form: {
        type: 'subtitle',
        title:
          '以下条目描述的是你在自己一生大部分时间里的感受与行为。如果你一贯是某种样子、只是近期发生了变化，请按你一贯的样子作答。为使结果最有参考价值，受测者宜年满 18 岁且至少经历过一次抑郁发作。',
        level: 4,
      },
    },
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

  tags: ['自评', '双相', '筛查', '成人'],
};
export default gbsq;
