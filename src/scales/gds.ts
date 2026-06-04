import type { Scale } from '@/types/form';

const globalChoices = ['是', '否'] as const;
const reverse = [
  2, 3, 4, 6, 8, 10, 11, 12, 13, 14, 16, 17, 18, 20, 22, 23, 24, 25, 26, 28,
] as const;

export const gds: Scale = {
  id: 'gds',
  name: '老年抑郁量表 (GDS)',
  description:
    '老年抑郁量表(GDS)在线测试，是由 Yesavage 等人于 1983 年开发的专业抑郁筛查工具，专为老年人设计。',
  questions: [
    {
      id: '1',
      form: {
        type: 'choice',
        question: '你对生活基本上满意吗？',
        choices: globalChoices,
      },
    },
    {
      id: '2',
      form: {
        type: 'choice',
        question: '你是否已放弃了许多活动与兴趣？',
        choices: globalChoices,
      },
    },
    {
      id: '3',
      form: {
        type: 'choice',
        question: '你是否觉得生活空虚？',
        choices: globalChoices,
      },
    },
    {
      id: '4',
      form: {
        type: 'choice',
        question: '你是否常感到厌倦？',
        choices: globalChoices,
      },
    },
    {
      id: '5',
      form: {
        type: 'choice',
        question: '你觉得未来有希望吗？',
        choices: globalChoices,
      },
    },
    {
      id: '6',
      form: {
        type: 'choice',
        question: '你是否因为脑子里一些想法摆脱不掉而烦恼？',
        choices: globalChoices,
      },
    },
    {
      id: '7',
      form: {
        type: 'choice',
        question: '你是否大部分时间精力充沛？',
        choices: globalChoices,
      },
    },
    {
      id: '8',
      form: {
        type: 'choice',
        question: '你是否害怕会有不幸的事落到你头上？',
        choices: globalChoices,
      },
    },
    {
      id: '9',
      form: {
        type: 'choice',
        question: '你是否大部分时间感到幸福？',
        choices: globalChoices,
      },
    },
    {
      id: '10',
      form: {
        type: 'choice',
        question: '你是否常感到孤立无援？',
        choices: globalChoices,
      },
    },
    {
      id: '11',
      form: {
        type: 'choice',
        question: '你是否经常坐立不安，心烦意乱？',
        choices: globalChoices,
      },
    },
    {
      id: '12',
      form: {
        type: 'choice',
        question: '你是否希望呆在家里而不愿去做些新鲜事？',
        choices: globalChoices,
      },
    },
    {
      id: '13',
      form: {
        type: 'choice',
        question: '你是否常常担心将来？',
        choices: globalChoices,
      },
    },
    {
      id: '14',
      form: {
        type: 'choice',
        question: '你是否觉得记忆力比以前差？',
        choices: globalChoices,
      },
    },
    {
      id: '15',
      form: {
        type: 'choice',
        question: '你觉得现在活着很惬意吗？',
        choices: globalChoices,
      },
    },
    {
      id: '16',
      form: {
        type: 'choice',
        question: '你是否常感到心情沉重，郁闷？',
        choices: globalChoices,
      },
    },
    {
      id: '17',
      form: {
        type: 'choice',
        question: '你是否觉得象现在这样活着毫无意义？',
        choices: globalChoices,
      },
    },
    {
      id: '18',
      form: {
        type: 'choice',
        question: '你是否总为过去的事忧愁？',
        choices: globalChoices,
      },
    },
    {
      id: '19',
      form: {
        type: 'choice',
        question: '你觉得生活很令人兴奋吗？',
        choices: globalChoices,
      },
    },
    {
      id: '20',
      form: {
        type: 'choice',
        question: '你开始一件新的工作很困难吗？',
        choices: globalChoices,
      },
    },
    {
      id: '21',
      form: {
        type: 'choice',
        question: '你觉得生活充满活力吗？',
        choices: globalChoices,
      },
    },
    {
      id: '22',
      form: {
        type: 'choice',
        question: '你是否觉得你的处境已毫无希望？',
        choices: globalChoices,
      },
    },
    {
      id: '23',
      form: {
        type: 'choice',
        question: '你是否觉得大多数人比你强得多？',
        choices: globalChoices,
      },
    },
    {
      id: '24',
      form: {
        type: 'choice',
        question: '你是否常为些小事伤心？',
        choices: globalChoices,
      },
    },
    {
      id: '25',
      form: {
        type: 'choice',
        question: '你是否常觉得想哭？',
        choices: globalChoices,
      },
    },
    {
      id: '26',
      form: {
        type: 'choice',
        question: '你集中精力有困难吗？',
        choices: globalChoices,
      },
    },
    {
      id: '27',
      form: {
        type: 'choice',
        question: '你早晨起来很快活吗？',
        choices: globalChoices,
      },
    },
    {
      id: '28',
      form: {
        type: 'choice',
        question: '你希望避开聚会吗？',
        choices: globalChoices,
      },
    },
    {
      id: '29',
      form: {
        type: 'choice',
        question: '你做决定很容易吗？',
        choices: globalChoices,
      },
    },
    {
      id: '30',
      form: {
        type: 'choice',
        question: '你的头脑象往常一样清晰吗？',
        choices: globalChoices,
      },
    },
  ],
  result: (datas) => {
    let n = 0;
    for (let i = 1; i <= 30; i++) {
      if (!(i in datas) || datas[i] === void 0) {
        return {
          ok: false,
          require: String(i),
        };
      }
      if (reverse.includes(i as never)) {
        n += 1 - Number(datas[i]);
      } else {
        n += Number(datas[i]);
      }
    }
    return {
      ok: true,
      title: n <= 10 ? '正常' : `有(${n <= 20 ? '轻度' : '中重度'})抑郁倾向`,
      description: `粗分:${n}分`,
      score: [
        {
          type: 'pointer',
          value: n,
          part: [
            { start: 0, end: 10, color: '#007700' },
            { start: 10, end: 20, color: '#FF7500' },
            { start: 20, end: 30, color: '#FF0000' },
          ],
        },
      ],
    };
  },

  tags: ['自评', '抑郁', '老年'],
};
export default gds;
