import type { Scale } from '@/types/form';

const globalChoices = ['无', '轻度', '中度，尚能忍受', '重度，勉强忍受'] as const;

export const sds: Scale = {
  id: 'bai',
  name: '贝克焦虑量表 (BAI)',
  description:
    '贝克焦虑量表(BAI)评分标准详解：贝克焦虑量表（BeckAnxietyInventory，BAI）是一种常用的焦虑症状自评量表，用于评估个体焦虑程度的严重程度。它由心理学家阿伦·贝克（AaronT.Beck）开发，并经过多次修订和改进。',
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
      if (!(i in datas)) {
        return {
          ok: false,
          require: String(i),
        };
      }
      n += Number(datas[i]);
    }
    return {
      ok: true,
      title:
        n <= 7 ? '几乎没有焦虑' : `有(${n <= 15 ? '轻度' : n <= 25 ? '中度' : '重度'})焦虑倾向`,
      description: `总分${n}`,
      score: [
        {
          type: 'pointer',
          value: n,
          part: [
            { start: 0, end: 7, color: '#009400' },
            { start: 6.5, end: 16, color: '#ACAC00' },

            { start: 15.5, end: 26, color: '#ff7b00' },
            { start: 25.5, end: 63, color: '#FF0000' },
          ],
        },
      ],
    };
  },

  tags: ['自评', '焦虑'],
};
export default sds;
