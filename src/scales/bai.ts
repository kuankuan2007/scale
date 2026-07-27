import type { Scale } from '@/types/form';

const globalChoices = ['无', '轻度', '中度，尚能忍受', '重度，勉强忍受'] as const;

export const bai: Scale = {
  id: 'bai',
  name: '贝克焦虑量表 (BAI)',
  description:
    '贝克焦虑量表（Beck Anxiety Inventory，BAI）由 Aaron T. Beck、Norman Epstein、Gary Brown、Robert A. Steer 于 1988 年编制，包含 21 项，评估过去一周焦虑症状的严重程度，总分为 0—63 分，较侧重躯体和惊恐样症状。结果不能独立诊断焦虑障碍，应结合临床情况解释。',
  refer: [
    {
      title: 'An Inventory for Measuring Clinical Anxiety: Psychometric Properties',
      url: 'https://doi.org/10.1037/0022-006X.56.6.893',
    },
  ],
  questions: [
    {
      id: '1',
      form: {
        type: 'choice',
        question: '身体麻木或刺痛',
        choices: globalChoices,
      },
    },
    {
      id: '2',
      form: {
        type: 'choice',
        question: '感到发热',
        choices: globalChoices,
      },
    },
    {
      id: '3',
      form: {
        type: 'choice',
        question: '腿部颤抖',
        choices: globalChoices,
      },
    },
    {
      id: '4',
      form: {
        type: 'choice',
        question: '不能放松',
        choices: globalChoices,
      },
    },
    {
      id: '5',
      form: {
        type: 'choice',
        question: '害怕发生不好的事情',
        choices: globalChoices,
      },
    },
    {
      id: '6',
      form: {
        type: 'choice',
        question: '感到头晕目眩',
        choices: globalChoices,
      },
    },
    {
      id: '7',
      form: {
        type: 'choice',
        question: '心悸或心率加快',
        choices: globalChoices,
      },
    },
    {
      id: '8',
      form: {
        type: 'choice',
        question: '心神不宁',
        choices: globalChoices,
      },
    },
    {
      id: '9',
      form: {
        type: 'choice',
        question: '感到惊吓',
        choices: globalChoices,
      },
    },
    {
      id: '10',
      form: {
        type: 'choice',
        question: '紧张',
        choices: globalChoices,
      },
    },
    {
      id: '11',
      form: {
        type: 'choice',
        question: '有窒息感',
        choices: globalChoices,
      },
    },
    {
      id: '12',
      form: {
        type: 'choice',
        question: '手发抖',
        choices: globalChoices,
      },
    },
    {
      id: '13',
      form: {
        type: 'choice',
        question: '摇晃',
        choices: globalChoices,
      },
    },
    {
      id: '14',
      form: {
        type: 'choice',
        question: '害怕失控',
        choices: globalChoices,
      },
    },
    {
      id: '15',
      form: {
        type: 'choice',
        question: '呼吸困难',
        choices: globalChoices,
      },
    },
    {
      id: '16',
      form: {
        type: 'choice',
        question: '害怕快要死去',
        choices: globalChoices,
      },
    },
    {
      id: '17',
      form: {
        type: 'choice',
        question: '感到恐慌',
        choices: globalChoices,
      },
    },
    {
      id: '18',
      form: {
        type: 'choice',
        question: '消化不良或腹部不适',
        choices: globalChoices,
      },
    },
    {
      id: '19',
      form: {
        type: 'choice',
        question: '昏厥',
        choices: globalChoices,
      },
    },
    {
      id: '20',
      form: {
        type: 'choice',
        question: '脸发红',
        choices: globalChoices,
      },
    },
    {
      id: '21',
      form: {
        type: 'choice',
        question: '出汗（不是因为天气）',
        choices: globalChoices,
      },
    },
  ],
  result: (datas) => {
    let n = 0;
    for (let i = 1; i <= 21; i++) {
      if (!(i in datas) || datas[i] === void 0) {
        return {
          ok: false,
          require: String(i),
        };
      }
      n += Number(datas[i]);
    }
    const level = n <= 7 ? '极轻微' : n <= 15 ? '轻度' : n <= 25 ? '中度' : '重度';
    const advice =
      n <= 7
        ? '当前焦虑症状程度极轻微；如症状持续或影响生活，可进一步咨询专业人员。'
        : n <= 15
          ? '当前为轻度焦虑症状；如症状持续或影响生活，建议接受专业评估。'
          : n <= 25
            ? '当前为中度焦虑症状，建议接受心理或精神卫生专业评估。'
            : '当前为重度焦虑症状，建议尽快接受心理或精神卫生专业评估。';
    return {
      ok: true,
      title: `${level}焦虑症状`,
      description: `总分：${n}。${advice}量表结果不能独立诊断。`,
      score: [
        {
          type: 'pointer',
          value: n,
          part: [
            { start: 0, end: 7, color: '#007700' },
            { start: 7, end: 15, color: '#ACAC00' },

            { start: 15, end: 25, color: '#ff7b00' },
            { start: 25, end: 63, color: '#FF0000' },
          ],
        },
      ],
    };
  },

  tags: ['自评', '焦虑', '症状严重度'],
};
export default bai;
