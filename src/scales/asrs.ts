import type { Scale } from '@/types/form';
import asrsA, { calcApart } from './asrs-a';

const globalChoices = ['从不', '很少', '有时', '经常', '总是'] as const;

export const asrs: Scale = {
  id: 'asrs',
  name: '成人ADHD自评量表 (ASRS)',
  description: [
    'ASRS量表（Adult ADHD Self-Report Scale）是世界卫生组织（WHO）开发的筛查工具，主要用于评估成年人是否存在注意力缺陷多动障碍（ADHD）的核心症状。其中A部分',
    {
      type: 'link',
      content: 'A部分 (前6题)',
      to: '/scale/asrs-a',
    },
    '可单独用于快速筛查，结果仅供参考，不作为临床诊断依据。',
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
    const total = values.reduce((pre, cur) => pre + cur, 0);
    return {
      ok: true,
      title: `筛查${res.state ? '阳性' : '阴性'}`,
      description: `A部分:${res.state ? '高可能性' : '低可能性'}\n总分：${total}`,
    };
  },

  tags: ['自评', 'ADHD'],
};
export default asrs;
