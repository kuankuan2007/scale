import type { Scale } from '@/types/form';

const globalChoices = ['没有', '有时有', '经常有'] as const;
const reverse = [1, 2, 4, 7, 8, 9, 11, 12, 13, 16] as const;

export const dsrsc: Scale = {
  id: 'dsrsc',
  name: '儿童抑郁障碍自评量表 (DSRS-C)',
  description:
    '儿童抑郁障碍自评量表（Depression Self-Rating Scale for Children，DSRS-C）由 Peter Birleson 于1981年编制，含18个条目，用于了解学龄儿童过去一周的抑郁相关表现。适用年龄应依据具体版本及本地验证资料确定，不宜断言唯一年龄范围。该量表用于筛查，不能单独诊断抑郁障碍。',
  refer: [
    {
      title:
        'The Validity of Depressive Disorder in Childhood and the Development of a Self-Rating Scale: A Research Report',
      url: 'https://doi.org/10.1111/j.1469-7610.1981.tb00533.x',
    },
  ],
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
      if (!(i in datas) || datas[i] === void 0) {
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
      title: n <= 14 ? '低于抑郁筛查界值' : '抑郁筛查阳性',
      description:
        n <= 14
          ? `总分：${n}。结果低于常用筛查界值；若相关表现持续、加重或影响学习生活，仍建议咨询儿童专业人员。`
          : `总分：${n}。结果达到常用抑郁筛查界值，但不等同于诊断；建议由儿童青少年精神心理专业人员进一步评估。`,
      score: [
        {
          type: 'pointer',
          value: n,
          part: [
            { start: 0, end: 15, color: '#ACAC00' },
            { start: 15, end: 36, color: '#FF0000' },
          ],
        },
      ],
    };
  },

  tags: ['自评', '抑郁', '儿童', '筛查'],
};
export default dsrsc;
