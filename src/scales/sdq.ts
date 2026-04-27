import type { Scale } from '@/types/form';

const globalChoices = ['不符合', '有点符合', '完全符合'];
const globalChoices2 = ['没有', '轻微', '非常'];
const typeChoices = ['家长', '教师', '学生'];
const ask26Choices = ['否', '有少许困难', '有困难', '有很大的困难'];
const ask27Choices = ['少于一个月', '1-5个月', '6-11个月', '一年以上'];

const nameMap = {
  A: '情绪症状',
  B: '品行问题',
  C: '多动',
  D: '同伴交往问题',
  E: '亲社会行为',
  SUM: '总分',
};

const resultMap = {
  A: [3, 8, 13, 16, 24],
  B: [5, 7, 12, 18, 22],
  C: [2, 10, 15, 21, 25],
  D: [1, 6, 11, 16, 20],
  E: [1, 4, 9, 17, 20],
};

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
};

export const sdq: Scale = {
  id: 'sdq',
  name: '长处和困难问卷 (SDQ)',
  description:
    '长处和困难问卷（SDQ）是由美国心理学家Goodman R 于1997年根据《精神病诊断和统计手册-IV》和《精神与行为分类第10版》诊断标准专门设计和编制的。问卷分家长、老师和学生自评3个版本，分别由家长、老师和学生评定。',
  questions: [
    {
      id: '0',
      form: {
        type: 'choice',
        question: '你的身份是',
        choices: typeChoices,
      },
    },
    {
      id: '1',
      form: {
        type: 'choice',
        question: '我尝试对别人友善，我关心别人的感受。',
        choices: globalChoices,
      },
    },
    {
      id: '2',
      form: {
        type: 'choice',
        question: '我不能安定，不能长时间保持安静。',
        choices: globalChoices,
      },
    },
    {
      id: '3',
      form: {
        type: 'choice',
        question: '我经常头痛、肚子痛或身体不舒服。',
        choices: globalChoices,
      },
    },
    {
      id: '4',
      form: {
        type: 'choice',
        question: '我常与他人分享东西（食物、玩具、笔）。',
        choices: globalChoices,
      },
    },
    {
      id: '5',
      form: {
        type: 'choice',
        question: '我觉得非常愤怒及常发脾气。',
        choices: globalChoices,
      },
    },
    {
      id: '6',
      form: {
        type: 'choice',
        question: '我经常独处，我通常独自玩耍。',
        choices: globalChoices,
      },
    },
    {
      id: '7',
      form: {
        type: 'choice',
        question: '我通常依照吩咐做事。',
        choices: globalChoices,
      },
    },
    {
      id: '8',
      form: {
        type: 'choice',
        question: '我经常担忧，心事重重。',
        choices: globalChoices,
      },
    },
    {
      id: '9',
      form: {
        type: 'choice',
        question: '如果有人受伤、难过或不适，我都乐意帮忙。',
        choices: globalChoices,
      },
    },
    {
      id: '10',
      form: {
        type: 'choice',
        question: '我经常坐立不安或感到不耐烦。',
        choices: globalChoices,
      },
    },
    {
      id: '11',
      form: {
        type: 'choice',
        question: '我有一个或几个好朋友。',
        choices: globalChoices,
      },
    },
    {
      id: '12',
      form: {
        type: 'choice',
        question: '我经常与别人争执，我能使别人依我的想法行事。',
        choices: globalChoices,
      },
    },
    {
      id: '13',
      form: {
        type: 'choice',
        question: '我经常不快乐、心情沉重或流泪。',
        choices: globalChoices,
      },
    },
    {
      id: '14',
      form: {
        type: 'choice',
        question: '一般来说，其他与我年龄相近的人都喜欢我。',
        choices: globalChoices,
      },
    },
    {
      id: '15',
      form: {
        type: 'choice',
        question: '我容易分心，我觉得难以集中精神。',
        choices: globalChoices,
      },
    },
    {
      id: '16',
      form: {
        type: 'choice',
        question: '我在新的环境中会感到紧张，我很容易失去自信。',
        choices: globalChoices,
      },
    },
    {
      id: '17',
      form: {
        type: 'choice',
        question: '我会友善地对待比我年少的孩子。',
        choices: globalChoices,
      },
    },
    {
      id: '18',
      form: {
        type: 'choice',
        question: '我常被指责撒谎或不老实。',
        choices: globalChoices,
      },
    },
    {
      id: '19',
      form: {
        type: 'choice',
        question: '其他小孩或青少年常欺负我。',
        choices: globalChoices,
      },
    },
    {
      id: '20',
      form: {
        type: 'choice',
        question: '我常自愿帮助别人。',
        choices: globalChoices,
      },
    },
    {
      id: '21',
      form: {
        type: 'choice',
        question: '我做事前会先想清楚。',
        choices: globalChoices,
      },
    },
    {
      id: '22',
      form: {
        type: 'choice',
        question: '我会从家里、学校或别处拿取不属于我的东西。',
        choices: globalChoices,
      },
    },
    {
      id: '23',
      form: {
        type: 'choice',
        question: '我与大人相处比与同辈相处融洽。',
        choices: globalChoices,
      },
    },
    {
      id: '24',
      form: {
        type: 'choice',
        question: '我心中有许多恐惧，我很容易受惊吓。',
        choices: globalChoices,
      },
    },
    {
      id: '25',
      form: {
        type: 'choice',
        question: '我总能把手头上的事情办妥，我的注意力良好。',
        choices: globalChoices,
      },
    },
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
        question:
          '概括而言，你认为自己在以下这些方面是否有困难？情绪方面、注意力方面、行为方面、还是和别人相处方面？',
        choices: ask26Choices,
      },
    },
    {
      id: '27',
      form: {
        type: 'choice',
        question: '这些困难持续了多久？',
        choices: ask27Choices,
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
        question: '这些困难是否困扰着你的孩子、学生或自己？',
        choices: globalChoices2,
      },
    },
    {
      id: '29',
      form: {
        type: 'choice',
        question: '这些困难是否在“家庭生活”中对你造成干扰',
        choices: globalChoices2,
      },
    },
    {
      id: '30',
      form: {
        type: 'choice',
        question: '这些困难是否在“与朋友的关系”中对你造成干扰',
        choices: globalChoices2,
      },
    },
    {
      id: '31',
      form: {
        type: 'choice',
        question: '这些困难是否在“上课学习”中对你造成干扰',
        choices: globalChoices2,
      },
    },
    {
      id: '32',
      form: {
        type: 'choice',
        question: '这些困难是否在“课外休闲活动”中对你造成干扰',
        choices: globalChoices2,
      },
    },
  ],
  result: (datas) => {
    if (datas['0'] === void 0) {
      return {
        ok: false,
        require: '0',
      };
    }
    const type = datas['0']; // 0: parent, 1: teacher, 2: self
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
      for (const j in resultMap) {
        if (resultMap[j as keyof typeof resultMap].includes(i)) {
          results1[j as keyof typeof results1] += Number(datas[i]);
        }
      }
    }
    results1.SUM = results1.A + results1.B + results1.C + results1.D;
    for (let i = 26; i <= 27; i++) {
      if (datas[i] === void 0) {
        return {
          ok: false,
          require: String(i),
        };
      }
    }
    const results2 = {
      26: Number(datas['26']),
      27: Number(datas['27']),
    };
    let results3 = 0;
    for (let i = 28; i <= 32; i++) {
      if (datas[i] === void 0) {
        return {
          ok: false,
          require: String(i),
        };
      }
      results3 += Number(datas[i]);
    }
    return {
      ok: true,
      title: `填写版本：${typeChoices[type]}`,
      description:
        results2[26] === 0
          ? '无特指的困难造成了困扰'
          : `${ask26Choices[results2[26]]}造成了困扰，持续时间${ask27Choices[results2[27]]}`,
      score: [
        ...(['SUM', 'A', 'B', 'C', 'D'] as const).map(
          (i) =>
            ({
              type: 'pointer',
              title: `${nameMap[i]}: ${results1[i]}, ${results1[i] < resultRange[i][type][0] ? '正常' : results1[i] <= resultRange[i][type][resultRange[i][type].length - 1] ? '边缘' : '异常'}`,
              value: results1[i],
              part: [
                { start: 0, end: resultRange[i][type][0], color: '#009400' },
                {
                  start: resultRange[i][type][0],
                  end: resultRange[i][type][resultRange[i][type].length - 1] + 1,
                  color: '#ff7b00',
                },
                {
                  start: resultRange[i][type][resultRange[i][type].length - 1] + 1,
                  end: i === 'SUM' ? 40 : 10,
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
              color: '#009400',
            },
          ],
        },
        {
          type: 'pointer',
          title: `影响因子: ${results3}, ${results3 === 0 ? '正常' : results3 === 2 ? '边缘' : '异常'}`,
          value: results3,
          part: [
            { start: 0, end: 1, color: '#009400' },
            { start: 1, end: 2, color: '#ff7b00' },
            { start: 2, end: 10, color: '#FF0000' },
          ],
        },
      ],
    };
  },

  tags: ['自评', '抑郁'],
};
export default sdq;
