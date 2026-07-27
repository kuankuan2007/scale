import type { Scale } from '@/types/form';
import asrsA, { calcApart } from './asrs-a';

const globalChoices = ['从不', '很少', '有时', '经常', '总是'] as const;

export const asrs: Scale = {
  id: 'asrs',
  name: '成人 ADHD 自填量表症状检核表 (ASRS-v1.1)',
  description: [
    '成人 ADHD 自填量表症状检核表（ASRS-v1.1）由世界卫生组织（WHO）成人 ADHD 工作组与 Adler、Kessler、Spencer 等于 2005 年制定，依据 DSM-IV 回顾过去 6 个月的 18 项症状；前 6 项为',
    {
      type: 'link',
      content: 'A部分 (前6题)',
      to: '/scale/asrs-a',
    },
    '，可单独用于快速筛查。量表结果不能独立诊断；筛查阳性或症状持续影响生活时，建议接受专业评估。',
  ],
  refer: [
    {
      title: 'Adult ADHD Self-Report Scale–V1.1 (ASRS–V1.1) Symptom Checklist',
      url: 'https://www.hcp.med.harvard.edu/ncs/ftpdir/adhd/18Q_ASRS_English.pdf',
    },
    {
      title:
        'The World Health Organization Adult ADHD Self-Report Scale (ASRS): A Short Screening Scale for Use in the General Population',
      url: 'https://doi.org/10.1017/S0033291704002892',
    },
  ],
  questions: [
    ...asrsA.questions,
    {
      id: '7',
      form: {
        type: 'choice',
        choices: globalChoices,
        question: '当需要完成枯燥或困难的任务时，你是否经常出现粗心错误？',
      },
    },
    {
      id: '8',
      form: {
        type: 'choice',
        choices: globalChoices,
        question: '当从事枯燥或重复性工作时，你是否经常难以保持注意力？',
      },
    },
    {
      id: '9',
      form: {
        type: 'choice',
        choices: globalChoices,
        question: '即使别人直接和你说话，你是否经常难以集中注意力听进去？',
      },
    },
    {
      id: '10',
      form: {
        type: 'choice',
        choices: globalChoices,
        question: '你是否经常在家或工作中弄丢东西，或难以找到物品？',
      },
    },
    {
      id: '11',
      form: {
        type: 'choice',
        choices: globalChoices,
        question: '你是否经常被周围的活动或噪音分心？',
      },
    },
    {
      id: '12',
      form: {
        type: 'choice',
        choices: globalChoices,
        question: '在会议或其他需要久坐的场合，你是否经常起身离开座位？',
      },
    },
    {
      id: '13',
      form: {
        type: 'choice',
        choices: globalChoices,
        question: '你是否经常感到心神不宁或坐立不安？',
      },
    },
    {
      id: '14',
      form: {
        type: 'choice',
        choices: globalChoices,
        question: '当你有属于自己的时间时，是否经常难以放松下来？',
      },
    },
    {
      id: '15',
      form: {
        type: 'choice',
        choices: globalChoices,
        question: '在社交场合中，你是否经常发现自己话说得太多？',
      },
    },
    {
      id: '16',
      form: {
        type: 'choice',
        choices: globalChoices,
        question: '在与人交谈时，对方还没说完，你是否经常抢先帮对方把话说完？',
      },
    },
    {
      id: '17',
      form: {
        type: 'choice',
        choices: globalChoices,
        question: '在需要轮流等待的场合，你是否经常难以耐心等待轮到自己？',
      },
    },
    {
      id: '18',
      form: {
        type: 'choice',
        choices: globalChoices,
        question: '当别人正在忙碌时，你是否经常打断他们？',
      },
    },
  ],
  result: (datas) => {
    const values: number[] = [0];
    for (let i = 1; i <= 18; i++) {
      if (datas[i] === void 0) {
        return {
          ok: false,
          require: String(i),
        };
      }
      values.push(Number(datas[i]));
    }
    const res = calcApart(values);
    const reached = res.flags.filter((item) => item).length;
    const total = values.reduce((pre, cur) => pre + cur, 0);
    return {
      ok: true,
      title: `A 部分筛查${res.state ? '阳性' : '阴性'}`,
      description:
        `A 部分 6 项中有 ${reached} 项达到相应筛查阈值，${
          res.state
            ? '达到至少 4 项，提示成人 ADHD 的可能性较高，建议结合功能影响接受专业评估。'
            : '未达到 4 项，但不能完全排除成人 ADHD；如症状持续或影响生活，仍建议接受专业评估。'
        }\n` + `18 项频次总分：${total}（仅作为症状频次的补充信息，不用于判定严重程度）。`,
    };
  },

  tags: ['自评', 'ADHD', '成人', '筛查'],
};
export default asrs;
