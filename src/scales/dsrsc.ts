import type { Scale } from '@/types/form';

const globalChoices = ['没有', '有时有', '经常有'] as const;
const reverse = [1, 2, 4, 7, 8, 9, 11, 12, 13, 16] as const;

export const dsrsc: Scale = {
  id: 'dsrsc',
  name: '儿童抑郁自评量表 (DSRSC)',
  description:
    '儿童抑郁自评量表（Depression Self-Rating Scale for Children，DSRSC）由伯莱森（P.Birleson）于1981年基于成人抑郁症诊断标准编制，适用于7-13岁儿童群体。该量表包含18个自评条目，采用三级计分系统',
  questions: [
    {
      id: '1',
      form: {
        type: 'choice',
        question: '盼望美好事物',
        choices: globalChoices,
      },
    },
    {
      id: '2',
      form: {
        type: 'choice',
        question: '睡得很香',
        choices: globalChoices,
      },
    },
    {
      id: '3',
      form: {
        type: 'choice',
        question: '总是想哭',
        choices: globalChoices,
      },
    },
    {
      id: '4',
      form: {
        type: 'choice',
        question: '喜欢出去玩',
        choices: globalChoices,
      },
    },
    {
      id: '5',
      form: {
        type: 'choice',
        question: '想离家出走',
        choices: globalChoices,
      },
    },
    {
      id: '6',
      form: {
        type: 'choice',
        question: '肚子痛',
        choices: globalChoices,
      },
    },
    {
      id: '7',
      form: {
        type: 'choice',
        question: '精力充沛',
        choices: globalChoices,
      },
    },
    {
      id: '8',
      form: {
        type: 'choice',
        question: '吃东西香',
        choices: globalChoices,
      },
    },
    {
      id: '9',
      form: {
        type: 'choice',
        question: '对自己有信心',
        choices: globalChoices,
      },
    },
    {
      id: '10',
      form: {
        type: 'choice',
        question: '生活没意思',
        choices: globalChoices,
      },
    },
    {
      id: '11',
      form: {
        type: 'choice',
        question: '做事令人满意',
        choices: globalChoices,
      },
    },
    {
      id: '12',
      form: {
        type: 'choice',
        question: '喜欢各种事物',
        choices: globalChoices,
      },
    },
    {
      id: '13',
      form: {
        type: 'choice',
        question: '爱与家人交谈',
        choices: globalChoices,
      },
    },
    {
      id: '14',
      form: {
        type: 'choice',
        question: '做噩梦',
        choices: globalChoices,
      },
    },
    {
      id: '15',
      form: {
        type: 'choice',
        question: '感到孤独',
        choices: globalChoices,
      },
    },
    {
      id: '16',
      form: {
        type: 'choice',
        question: '容易高兴起来',
        choices: globalChoices,
      },
    },
    {
      id: '17',
      form: {
        type: 'choice',
        question: '感到悲哀',
        choices: globalChoices,
      },
    },
    {
      id: '18',
      form: {
        type: 'choice',
        question: '感到烦恼',
        choices: globalChoices,
      },
    },
  ],
  result: (datas) => {
    let n = 0;
    for (let i = 1; i <= 18; i++) {
      if (!(i in datas)) {
        return {
          ok: false,
          require: String(i),
        };
      }
      if (reverse.includes(i as never)) {
        n += 2 - Number(datas[i]);
      } else {
        n += Number(datas[i]);
      }
    }
    return {
      ok: true,
      title: n <= 12 ? '无明显抑郁倾向' : n <= 14 ? '有可能伴有抑郁倾向' : '有明显抑郁倾向',
      description: `总分：${n}。`,
      score: [
        {
          type: 'pointer',
          value: n,
          part: [
            { start: 0, end: 13, color: '#ACAC00' },
            { start: 13, end: 15, color: '#FF7500' },
            { start: 15, end: 36, color: '#FF0000' },
          ],
        },
      ],
    };
  },

  tags: ['自评', '抑郁', '儿童'],
};
export default dsrsc;
