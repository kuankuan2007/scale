import type { Question, Scale, ScaleErrorResult, ScaleOKResult } from '@/types/form';

const globalChoices = ['不符合', '有点符合', '完全符合'] as const;
const globalChoices2 = ['没有', '轻微', '非常'] as const;
const ask26Choices = ['否', '有少许困难', '有困难', '有很大的困难'] as const;
const ask27Choices = ['少于一个月', '1-5个月', '6-11个月', '一年以上'] as const;
const resultTypeChoices = ['家长', '教师', '学生'] as const;

const nameMap = {
  A: '情绪症状',
  B: '品行问题',
  C: '多动',
  D: '同伴交往问题',
  E: '亲社会行为',
  SUM: '总分',
} as const;

const resultMap: Record<'A' | 'B' | 'C' | 'D' | 'E', readonly number[]> = {
  A: [3, 8, 13, 16, 24],
  B: [5, 7, 12, 18, 22],
  C: [2, 10, 15, 21, 25],
  D: [6, 11, 14, 19, 23],
  E: [1, 4, 9, 17, 20],
} as const;

const reverseScoreItems = new Set([7, 11, 14, 21, 25]);

const resultRange = {
  A: [[4], [5], [6]],
  B: [[3], [3], [4]],
  C: [[6], [6], [6]],
  D: [[3], [4], [4, 5]],
  E: [[5], [5], [5]],
  SUM: [
    [14, 16],
    [12, 15],
    [16, 19],
  ],
} as const;

export const parentTeacherChoices = ['家长', '教师'] as const;

export const sdqRefer = [
  {
    title: 'SDQ 官方说明',
    url: 'https://www.sdqinfo.org/a0.html',
  },
  {
    title: 'SDQ 官方评分说明',
    url: 'https://www.sdqinfo.org/py/sdqinfo/c0.py',
  },
];

const parentTeacherQuestionTexts = [
  '乐于体贴别人，关心别人的感受。',
  '坐立不安，不能长时间安静下来。',
  '经常抱怨头痛、肚子痛或身体不适。',
  '乐于与别人分享东西（食物、玩具、文具等）。',
  '经常发脾气，或者容易动怒。',
  '经常独处，通常独自玩耍。',
  '通常愿意服从要求。',
  '常常担心，显得心事重重。',
  '如果别人受伤、难过或身体不适，会主动帮忙。',
  '经常坐立不安或显得不耐烦。',
  '至少有一个好朋友。',
  '经常与别人争吵，或会强迫别人按自己的意思做。',
  '经常不快乐、情绪低落或流泪。',
  '一般来说，受到其他同龄孩子的喜欢。',
  '容易分心，难以集中精神。',
  '在新环境中会紧张，容易失去信心。',
  '会友善地对待比自己年幼的孩子。',
  '常被指责撒谎或不老实。',
  '经常被其他儿童或青少年欺负。',
  '经常主动帮助别人。',
  '做事前会先想清楚。',
  '会从家里、学校或别处拿不属于自己的东西。',
  '与成人相处比与同龄人相处更融洽。',
  '心中有许多恐惧，而且容易受惊吓。',
  '总能把手头上的事情做完，注意力良好。',
] as const;

const selfQuestionTexts = [
  '我尝试对别人友善，我关心别人的感受。',
  '我不能安定，不能长时间保持安静。',
  '我经常头痛、肚子痛或身体不舒服。',
  '我常与他人分享东西（食物、玩具、笔）。',
  '我觉得非常愤怒及常发脾气。',
  '我经常独处，我通常独自玩耍。',
  '我通常依照吩咐做事。',
  '我经常担忧，心事重重。',
  '如果有人受伤、难过或不适，我都乐意帮忙。',
  '我经常坐立不安或感到不耐烦。',
  '我有一个或几个好朋友。',
  '我经常与别人争执，我能使别人依我的想法行事。',
  '我经常不快乐、心情沉重或流泪。',
  '一般来说，其他与我年龄相近的人都喜欢我。',
  '我容易分心，我觉得难以集中精神。',
  '我在新的环境中会感到紧张，我很容易失去自信。',
  '我会友善地对待比我年少的孩子。',
  '我常被指责撒谎或不老实。',
  '其他小孩或青少年常欺负我。',
  '我常自愿帮助别人。',
  '我做事前会先想清楚。',
  '我会从家里、学校或别处拿取不属于我的东西。',
  '我与大人相处比与同辈相处融洽。',
  '我心中有许多恐惧，我很容易受惊吓。',
  '我总能把手头上的事情办妥，我的注意力良好。',
] as const;

export function buildParentTeacherQuestions(): Question[] {
  return [
    {
      id: '0',
      form: {
        type: 'choice',
        question: '你的身份是',
        choices: [...parentTeacherChoices],
      },
    },
    ...buildAttributeQuestions(parentTeacherQuestionTexts),
    ...buildSupplementQuestions(false),
  ];
}

export function buildSelfQuestions(): Question[] {
  return [...buildAttributeQuestions(selfQuestionTexts), ...buildSupplementQuestions(true)];
}

function buildAttributeQuestions(questionTexts: readonly string[]): Question[] {
  return questionTexts.map((question, index) => ({
    id: String(index + 1),
    form: {
      type: 'choice',
      question,
      choices: [...globalChoices],
    },
  }));
}

function buildSupplementQuestions(selfReport: boolean): Question[] {
  return [
    {
      id: 'subtitle1',
      form: {
        type: 'subtitle',
        title: '回答问题:',
      },
    },
    {
      id: '26',
      form: {
        type: 'choice',
        question: selfReport
          ? '概括而言，你认为自己在情绪、注意力、行为或与别人相处这些方面是否存在困难？'
          : '概括而言，你认为该儿童或青少年在情绪、注意力、行为或与别人相处这些方面是否存在困难？',
        questionDescription: '如果本题选择“否”，则后续第27-32题可跳过。',
        choices: [...ask26Choices],
      },
    },
    {
      id: '27',
      form: {
        type: 'choice',
        question: '这些困难持续了多久？',
        choices: [...ask27Choices],
      },
    },
    {
      id: 'subtitle2',
      form: {
        type: 'subtitle',
        title: '影响因子:',
      },
    },
    {
      id: '28',
      form: {
        type: 'choice',
        question: selfReport
          ? '这些困难是否让你自己感到苦恼？'
          : '这些困难是否让该儿童或青少年感到苦恼？',
        choices: [...globalChoices2],
      },
    },
    {
      id: '29',
      form: {
        type: 'choice',
        question: selfReport
          ? '这些困难是否在“家庭生活”中对你造成干扰？'
          : '这些困难是否在“家庭生活”方面造成干扰？',
        choices: [...globalChoices2],
      },
    },
    {
      id: '30',
      form: {
        type: 'choice',
        question: selfReport
          ? '这些困难是否在“与朋友的关系”中对你造成干扰？'
          : '这些困难是否在“与朋友的关系”方面造成干扰？',
        choices: [...globalChoices2],
      },
    },
    {
      id: '31',
      form: {
        type: 'choice',
        question: selfReport
          ? '这些困难是否在“上课学习”中对你造成干扰？'
          : '这些困难是否在“课堂学习”方面造成干扰？',
        choices: [...globalChoices2],
      },
    },
    {
      id: '32',
      form: {
        type: 'choice',
        question: selfReport
          ? '这些困难是否在“课外休闲活动”中对你造成干扰？'
          : '这些困难是否在“课外休闲活动”方面造成干扰？',
        choices: [...globalChoices2],
      },
    },
  ];
}

export function calcSdqResult(
  datas: { [key: string]: unknown },
  type: 0 | 1 | 2
): ScaleOKResult | ScaleErrorResult {
  const results1 = {
    A: 0,
    B: 0,
    C: 0,
    D: 0,
    E: 0,
    SUM: 0,
  };
  for (let i = 1; i <= 25; i++) {
    if (datas[i] === void 0) {
      return {
        ok: false,
        require: String(i),
      };
    }
    const questionScore = reverseScoreItems.has(i) ? 2 - Number(datas[i]) : Number(datas[i]);
    for (const key in resultMap) {
      if (resultMap[key as keyof typeof resultMap].includes(i)) {
        results1[key as keyof typeof results1] += questionScore;
      }
    }
  }
  results1.SUM = results1.A + results1.B + results1.C + results1.D;
  if (datas['26'] === void 0) {
    return {
      ok: false,
      require: '26',
    };
  }
  const hasDifficulties = Number(datas['26']) > 0;
  const results2 = {
    26: Number(datas['26']),
    27: hasDifficulties ? Number(datas['27']) : 0,
  };
  if (hasDifficulties && datas['27'] === void 0) {
    return {
      ok: false,
      require: '27',
    };
  }
  let results3 = 0;
  if (hasDifficulties) {
    for (let i = 28; i <= 32; i++) {
      if (datas[i] === void 0) {
        return {
          ok: false,
          require: String(i),
        };
      }
      results3 += Number(datas[i]);
    }
  }
  return {
    ok: true,
    title: `填写版本：${resultTypeChoices[type]}`,
    description:
      results2[26] === 0
        ? '无特指的困难造成了困扰'
        : `${ask26Choices[results2[26]]}造成了困扰，持续时间${ask27Choices[results2[27]]}`,
    score: [
      ...(['SUM', 'A', 'B', 'C', 'D'] as const).map(
        (key) =>
          ({
            type: 'pointer',
            title: `${nameMap[key]}: ${results1[key]}, ${results1[key] < resultRange[key][type][0] ? '正常' : results1[key] <= resultRange[key][type][resultRange[key][type].length - 1] ? '边缘' : '异常'}`,
            value: results1[key],
            part: [
              { start: 0, end: resultRange[key][type][0], color: '#007700' },
              {
                start: resultRange[key][type][0],
                end: resultRange[key][type][resultRange[key][type].length - 1] + 1,
                color: '#ff7b00',
              },
              {
                start: resultRange[key][type][resultRange[key][type].length - 1] + 1,
                end: key === 'SUM' ? 40 : 10,
                color: '#FF0000',
              },
            ],
          }) as const
      ),
      {
        type: 'pointer',
        title: `${nameMap.E}: ${results1.E}, ${results1.E < resultRange.E[type][0] ? '异常' : results1.E <= resultRange.E[type][resultRange.E[type].length - 1] ? '边缘' : '正常'}`,
        value: results1.E,
        part: [
          { start: 0, end: resultRange.E[type][0], color: '#FF0000' },
          {
            start: resultRange.E[type][0],
            end: resultRange.E[type][resultRange.E[type].length - 1] + 1,
            color: '#ff7b00',
          },
          {
            start: resultRange.E[type][resultRange.E[type].length - 1] + 1,
            end: 10,
            color: '#007700',
          },
        ],
      },
      {
        type: 'pointer',
        title: `影响因子: ${results3}, ${results3 === 0 ? '正常' : results3 === 1 ? '边缘' : '异常'}`,
        value: results3,
        part: [
          { start: 0, end: 1, color: '#007700' },
          { start: 1, end: 2, color: '#ff7b00' },
          { start: 2, end: 10, color: '#FF0000' },
        ],
      },
    ],
  };
}

export const sdq: Scale = {
  id: 'sdq',
  name: '长处和困难问卷 (SDQ) 家长/教师版',
  description: [
    '长处和困难问卷（SDQ）由 Robert Goodman 于 1997 年提出，是用于儿童青少年行为与情绪问题筛查的简明问卷。当前页面为家长/教师版；如需学生自评版，请使用',
    {
      type: 'link',
      content: '学生自评版',
      to: '/scale/sdq-s',
    },
    '。',
  ],
  refer: [...sdqRefer],
  questions: buildParentTeacherQuestions(),
  result: (datas) => {
    if (datas['0'] === void 0) {
      return {
        ok: false,
        require: '0',
      };
    }
    const type = Number(datas['0']);
    if (!Number.isInteger(type) || type < 0 || type >= parentTeacherChoices.length) {
      return {
        ok: false,
        require: '0',
      };
    }
    return calcSdqResult(datas, type as 0 | 1);
  },

  tags: ['祂评', '筛查', '青少年'],
};
export default sdq;
