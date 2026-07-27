import type { Scale } from '@/types/form';

const globalChoices = ['从不', '很少', '有时', '经常', '总是'] as const;

export function calcApart(values: number[]) {
  const flags = [
    false,
    values[1] >= 2,
    values[2] >= 2,
    values[3] >= 2,
    values[4] >= 3,
    values[5] >= 3,
    values[6] >= 3,
  ] as const;
  const state = flags.filter((item) => item).length >= 4;
  return {
    flags,
    state,
  };
}

export const asrsA: Scale = {
  id: 'asrs-a',
  name: '成人 ADHD 自填量表症状检核表 A 部分 (ASRS-v1.1 Part A)',
  description: [
    '成人 ADHD 自填量表症状检核表（ASRS-v1.1）由世界卫生组织（WHO）成人 ADHD 工作组与 Adler、Kessler、Spencer 等于 2005 年制定。A 部分依据 DSM-IV，回顾过去 6 个月的 6 项症状，可用于成人 ADHD 快速筛查，但不能独立诊断；筛查阳性或症状持续影响生活时，建议接受专业评估。其他部分参见',
    {
      type: 'link',
      content: '完整版',
      to: '/scale/asrs',
    },
    '。',
  ],
  refer: [
    {
      title:
        'The World Health Organization Adult ADHD Self-Report Scale (ASRS): A Short Screening Scale for Use in the General Population',
      url: 'https://doi.org/10.1017/S0033291704002892',
    },
    {
      title: 'Adult ADHD Self-Report Scale–V1.1 (ASRS–V1.1) Screener',
      url: 'https://www.hcp.med.harvard.edu/ncs/ftpdir/adhd/6Q_ASRS_English.pdf',
    },
  ],
  questions: [
    {
      id: '1',
      form: {
        type: 'choice',
        choices: globalChoices,
        question: '当项目中具有挑战性的部分完成后，你在处理收尾细节时经常遇到困难吗？',
      },
    },
    {
      id: '2',
      form: {
        type: 'choice',
        choices: globalChoices,
        question: '当需要完成一项需要条理安排的任务时，你是否经常难以把事情整理得井井有条？',
      },
    },
    {
      id: '3',
      form: {
        type: 'choice',
        choices: globalChoices,
        question: '你是否经常忘记预约或需要履行的义务？',
      },
    },
    {
      id: '4',
      form: {
        type: 'choice',
        choices: globalChoices,
        question: '当面对一项需要大量思考的任务时，你是否经常回避或拖延开始？',
      },
    },
    {
      id: '5',
      form: {
        type: 'choice',
        choices: globalChoices,
        question: '当需要长时间坐着时，你是否经常手脚不停乱动或坐立不安？',
      },
    },
    {
      id: '6',
      form: {
        type: 'choice',
        choices: globalChoices,
        question: '你是否经常感觉精力异常旺盛，被一股动力驱使着不停地做事？',
      },
    },
  ],
  result: (datas) => {
    const values: number[] = [0];
    for (let i = 1; i <= 6; i++) {
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
    return {
      ok: true,
      title: `筛查${res.state ? '阳性' : '阴性'}`,
      description: `6 项中有 ${reached} 项达到相应筛查阈值。${
        res.state
          ? '达到至少 4 项，A 部分筛查阳性，提示成人 ADHD 的可能性较高，建议结合功能影响接受专业评估；该结果不能独立诊断。'
          : '未达到 4 项，A 部分筛查阴性，但不能完全排除成人 ADHD；如症状持续或影响生活，仍建议接受专业评估。'
      }`,
    };
  },

  tags: ['自评', 'ADHD', '成人', '筛查'],
};
export default asrsA;
