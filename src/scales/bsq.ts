import type { Scale } from '@/types/form';
import { DomainTag, RaterTag } from '@/types/scaleTags';

const globalChoices = [
  '完全不符合或几乎不符合',
  '稍微符合',
  '有点符合',
  '比较符合',
  '较多符合',
  '非常符合或完全符合',
] as const;
export const bsq: Scale = {
  id: 'bsq',
  trusted: false,
  name: '双相情感障碍自评量表 (BSQ)',
  seo: {
    summary: '用于记录双相相关情绪与行为表现；本版本来源和评分解释有限，需谨慎参考。',
    keywords: ['双相情感障碍自评量表', 'BSQ量表', '双相情绪自评', '双相障碍筛查', '情绪波动记录'],
  },
  description: [
    '国内流传的「双相情感障碍自评量表（BSQ）」没有可核实的正式编制者或发表文献；本页按流传版本整理，仅供自我觉察参考，不用于筛查或诊断。该版本的名称、作者归属、条目和作答时间框架均有勘误，也没有可考据的信效度或划界分，详见',
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
    // 原版无期刊论文，故只能引用 Psych Central 授权刊载页的互联网档案馆存档；
    // 本流传版的讹传路径、成因与逐条差异详见 /research/gbsq。
  ],
  questions: [
    {
      id: '1',
      form: {
        type: 'choice',
        question: '有时我突然变得非常健谈而且语速非常快。',
        choices: globalChoices,
      },
    },
    {
      id: '2',
      form: {
        type: 'choice',
        question: '有时我突然变得特别主动，做一些平时都不做的事情。',
        choices: globalChoices,
      },
    },
    {
      id: '3',
      form: {
        type: 'choice',
        question: '有时候我觉得时间过得很快，这种时候我感到有些生气！',
        choices: globalChoices,
      },
    },
    {
      id: '4',
      form: {
        type: 'choice',
        question: '我有时候会一方面觉得自己情绪高涨，另一方面又觉得有些沮丧。',
        choices: globalChoices,
      },
    },
    {
      id: '5',
      form: {
        type: 'choice',
        question: '别人对我的评价经常提到，有段时间显得过于自卑，有段时间又显得过于自信。',
        choices: globalChoices,
      },
    },
    {
      id: '6',
      form: {
        type: 'choice',
        question:
          '我的工作业绩（学习成绩）不是很稳定，一段时间能做很多事情，也能出成果，另外一段时间却什么都做不出来。',
        choices: globalChoices,
      },
    },
    {
      id: '7',
      form: {
        type: 'choice',
        question: '有时候，我会有不明原因的愤怒，甚至想打人。',
        choices: globalChoices,
      },
    },
    {
      id: '8',
      form: {
        type: 'choice',
        question:
          '我在某段时间觉得脑中空空如也，什么都想不出；而在另外一段时间的想法又特别多，很有创意。',
        choices: globalChoices,
      },
    },
    {
      id: '9',
      form: {
        type: 'choice',
        question: '我在一些时间喜欢和别人黏在一起玩耍，而在另外一段时间我却只想单独呆着。',
        choices: globalChoices,
      },
    },
    {
      id: '10',
      form: {
        type: 'choice',
        question: '我在某段时间觉得特别乐观；另外一段时间我又觉得特别悲观。',
        choices: globalChoices,
      },
    },
    {
      id: '11',
      form: {
        type: 'choice',
        question: '我在某段时间感到食欲不振；另外一段时间却情不自禁地暴饮暴食。',
        choices: globalChoices,
      },
    },
    {
      id: '12',
      form: {
        type: 'choice',
        question: '我在某段时间觉得特别想哭哭不出来；另外一段时间却特别幽默搞笑。',
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
      title:
        n <= 6
          ? '双相谱系可能性较低'
          : n <= 15
            ? '结果较符合重性或单相抑郁范围'
            : n <= 24
              ? '可能为重性抑郁或双相谱系障碍'
              : '双相谱系障碍可能性较高',
      description:
        n <= 6
          ? `总分：${n}。当前结果提示双相谱系相关表现较少，但不能排除临床问题。`
          : n <= 15
            ? `总分：${n}。该范围可见于重性或单相抑郁等情况，不能据此确定诊断；如症状持续或影响生活，建议接受专业评估。`
            : n <= 24
              ? `总分：${n}。结果提示需鉴别重性抑郁与双相谱系障碍，建议由精神科或心理专业人员进一步评估。`
              : `总分：${n}。结果提示双相谱系障碍可能性较高，但不等同于诊断；建议尽快接受精神科专业评估。`,
      score: [
        {
          type: 'pointer',
          value: n,
          part: [
            { start: 0, end: 6, color: '#007700' },
            { start: 6, end: 15, color: '#ACAC00' },
            { start: 15, end: 24, color: '#FF7500' },
            { start: 24, end: 60, color: '#FF0000' },
          ],
        },
      ],
    };
  },

  tags: {
    rater: RaterTag.SELF,
    domain: [DomainTag.BIPOLAR],
  },
};
export default bsq;
