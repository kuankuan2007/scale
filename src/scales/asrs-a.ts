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
  name: '成人ADHD自评量表 (ASRS) A部分',
  description: [
    '成人ADHD自评量表 (ASRS) 的A部分（前6题），可单独用于快速快速筛查，结果仅供参考，不作为临床诊断依据。其他部分参见',
    {
      type: 'link',
      content: '完整版',
      to: '/scale/asrs',
    },
    '。',
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
    return {
      ok: true,
      title: `筛查${res.state ? '阳性' : '阴性'}`,
      description: `A部分：${res.state ? '高可能性' : '低可能性'}`,
    };
  },

  tags: ['自评', 'ADHD'],
};
export default asrsA;
