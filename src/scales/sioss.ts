import type { Scale } from '@/types/form';

const globalChoices = ['是', '否'] as const;
// 反向计分题目：积极/正面题目需要反向计分
const reverse = [1, 5, 6, 7, 9, 10, 13, 15, 21, 25] as const;

const resultMap = {
  despair: [2, 3, 4, 8, 11, 14, 16, 17, 19, 20, 23, 26],
  optimistic: [1, 7, 10, 21, 22],
  sleep: [5, 12, 18, 24],
  conceal: [6, 9, 13, 15, 25],
} as const;

const nameMap = {
  despair: '绝望',
  optimistic: '乐观',
  sleep: '睡眠',
  conceal: '掩饰',
} as const;

export const sioss: Scale = {
  id: 'sioss',
  name: '自杀意念自评量表 (SIOSS)',
  description:
    '自杀意念自评量表（Self-rating Idea of Suicide Scale，SIOSS）由夏朝云、王东波、吴素琴、叶剑辉编制，2002 年发表，共 26 项，包含绝望、乐观、睡眠和掩饰四个因子；前三个因子相加形成自杀意念总分，掩饰因子用于判断结果效度。本量表仅用于自杀意念筛查，不是完整的自杀风险评估，不能替代专业人员对当前意念、计划、手段、既往行为及保护因素的综合评估。',
  refer: [
    {
      title: '自杀意念自评量表的初步制定',
      url: 'https://cnki.com.cn/Article/CJFDTotal-LCJS200202026.htm',
    },
  ],
  questions: [
    {
      id: '1',
      form: {
        type: 'choice',
        question: '在我的日常生活中，充满了使我感兴趣的事情。',
        choices: globalChoices,
      },
    },
    {
      id: '2',
      form: {
        type: 'choice',
        question: '我深信生活对我是残酷的。',
        choices: globalChoices,
      },
    },
    {
      id: '3',
      form: {
        type: 'choice',
        question: '我时常感到悲观失望。',
        choices: globalChoices,
      },
    },
    {
      id: '4',
      form: {
        type: 'choice',
        question: '我容易哭或想哭。',
        choices: globalChoices,
      },
    },
    {
      id: '5',
      form: {
        type: 'choice',
        question: '我容易入睡并且一夜睡得很好。',
        choices: globalChoices,
      },
    },
    {
      id: '6',
      form: {
        type: 'choice',
        question: '有时我也讲假话。',
        choices: globalChoices,
      },
    },
    {
      id: '7',
      form: {
        type: 'choice',
        question: '生活在这个丰富多彩的时代里是多么美好。',
        choices: globalChoices,
      },
    },
    {
      id: '8',
      form: {
        type: 'choice',
        question: '我确实缺少自信心。',
        choices: globalChoices,
      },
    },
    {
      id: '9',
      form: {
        type: 'choice',
        question: '我有时发脾气。',
        choices: globalChoices,
      },
    },
    {
      id: '10',
      form: {
        type: 'choice',
        question: '我总觉得人生是有价值的。',
        choices: globalChoices,
      },
    },
    {
      id: '11',
      form: {
        type: 'choice',
        question: '大部分时间，我觉得我还是死了的好。',
        choices: globalChoices,
      },
    },
    {
      id: '12',
      form: {
        type: 'choice',
        question: '我睡得不安、很容易被吵醒。',
        choices: globalChoices,
      },
    },
    {
      id: '13',
      form: {
        type: 'choice',
        question: '有时我也会说人家的闲话。',
        choices: globalChoices,
      },
    },
    {
      id: '14',
      form: {
        type: 'choice',
        question: '有时我觉得我真是毫无用处。',
        choices: globalChoices,
      },
    },
    {
      id: '15',
      form: {
        type: 'choice',
        question: '偶尔我听了下流的笑话也会发笑。',
        choices: globalChoices,
      },
    },
    {
      id: '16',
      form: {
        type: 'choice',
        question: '我的前途似乎没有希望。',
        choices: globalChoices,
      },
    },
    {
      id: '17',
      form: {
        type: 'choice',
        question: '我想结束自己的生命。',
        choices: globalChoices,
      },
    },
    {
      id: '18',
      form: {
        type: 'choice',
        question: '我醒得太早。',
        choices: globalChoices,
      },
    },
    {
      id: '19',
      form: {
        type: 'choice',
        question: '我觉得我的生活是失败的。',
        choices: globalChoices,
      },
    },
    {
      id: '20',
      form: {
        type: 'choice',
        question: '我总是将事情看得严重些。',
        choices: globalChoices,
      },
    },
    {
      id: '21',
      form: {
        type: 'choice',
        question: '我对将来抱有希望。',
        choices: globalChoices,
      },
    },
    {
      id: '22',
      form: {
        type: 'choice',
        question: '我曾经自杀过。',
        choices: globalChoices,
      },
    },
    {
      id: '23',
      form: {
        type: 'choice',
        question: '有时我觉得我就要垮了。',
        choices: globalChoices,
      },
    },
    {
      id: '24',
      form: {
        type: 'choice',
        question: '有些时期我因忧虑而失眠。',
        choices: globalChoices,
      },
    },
    {
      id: '25',
      form: {
        type: 'choice',
        question: '我曾损坏或遗失过别人的东西。',
        choices: globalChoices,
      },
    },
    {
      id: '26',
      form: {
        type: 'choice',
        question: '有时我想一死了之，但又矛盾重重。',
        choices: globalChoices,
      },
    },
  ],
  result: (datas) => {
    const dataArray: number[] = [];
    for (let i = 1; i <= 26; i++) {
      if (!(i in datas) || datas[i] === void 0) {
        return {
          ok: false,
          require: String(i),
        };
      }
      if (reverse.includes(i as never)) {
        dataArray[i] = Number(datas[i]);
      } else {
        dataArray[i] = 1 - Number(datas[i]);
      }
    }
    const result = {} as Record<keyof typeof resultMap, number>;
    for (const key in resultMap) {
      result[key as keyof typeof resultMap] = resultMap[key as keyof typeof resultMap].reduce(
        (acc, cur) => acc + dataArray[cur]!,
        0
      );
    }
    const n = result.despair + result.sleep + result.optimistic;
    const invalid = result.conceal >= 4;
    const positive = n >= 12;
    const keyItemPositive = Number(datas['17']) === 0 || Number(datas['22']) === 0;
    const safetyReminder = keyItemPositive
      ? '\n关键题报告了直接自杀意念或既往自杀行为，请尽快接受专业风险评估；如当前意念强烈或迫切，请立即联系可信任者陪同并就近急诊，紧急时拨打120或110。'
      : '';
    const interpretation = invalid
      ? '掩饰因子达到4分，按量表规则本次结果无效，不同时作阳性或阴性解释；如仍有担忧，应接受专业风险评估。'
      : positive
        ? '总分达到12分阳性界值，建议尽快接受心理或精神卫生专业人员的自杀风险评估。'
        : '总分未达到12分阳性界值；筛查阴性不能排除风险，如存在当前意念、计划或明显担忧，仍应及时接受专业风险评估。';
    return {
      ok: true,
      title: invalid
        ? '结果无效：掩饰倾向较高'
        : positive
          ? '自杀意念筛查阳性'
          : '未达自杀意念阳性界值',
      description: `总分：${n}分，${Object.keys(resultMap)
        .map((key) => `${nameMap[key as never]}：${result[key as never]}`)
        .join('，')}。${interpretation}${safetyReminder}`,
      score: invalid
        ? undefined
        : [
            {
              type: 'pointer',
              title: `自杀意念总分：${n}/21`,
              value: n,
              part: [
                { start: 0, end: 12, color: '#007700' },
                { start: 12, end: 21, color: '#FF0000' },
              ],
            },
          ],
    };
  },

  tags: ['自评', '自杀', '筛查', '自杀风险'],
};
export default sioss;
