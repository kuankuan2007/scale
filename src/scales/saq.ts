import type { Scale } from '@/types/form';

const globalChoices = ['完全赞同', '赞同', '中立', '不赞同', '完全不赞同'] as const;

const reverses = [1, 3, 7, 8, 10, 11, 12, 14, 15, 18, 20, 22, 25] as const;

const resultMap = {
  f1: [1, 7, 12, 17, 19, 22, 23, 26, 29],
  f2: [2, 3, 8, 9, 13, 14, 18, 20, 24, 25],
  f3: [4, 6, 10, 15, 28],
  f4: [5, 11, 16, 21, 27],
} as const;

const nameMap = {
  f1: '对自杀行为性质的认识',
  f2: '对自杀者的态度',
  f3: '对自杀者家属的态度',
  f4: '对安乐死的态度',
} as const;

export const saq: Scale = {
  id: 'saq',
  name: '自杀态度问卷 (QSA)',
  description:
    '自杀态度问卷（Questionnaire of Suicide Attitude，QSA）由肖水源、杨洪、董群惠等于1999年编制，共29项，采用5级评分，从对自杀行为性质的认识、对自杀者的态度、对自杀者家属的态度和对安乐死的态度4个维度开展态度调查与研究。本问卷评估的是对相应对象或议题的态度，不用于评估自杀意念或自杀风险。',
  refer: [
    {
      title: '自杀态度问卷的编制及信度与效度研究：自杀系列研究之一',
      url: 'https://qolpsy.gdmu.edu.cn/info/1096/1310.htm',
    },
  ],
  questions: [
    {
      id: '1',
      form: {
        type: 'choice',
        question: '自杀是一种疯狂的行为',
        choices: globalChoices,
      },
    },
    {
      id: '2',
      form: {
        type: 'choice',
        question: '自杀死亡者应与自然死亡者享受同样的待遇',
        choices: globalChoices,
      },
    },
    {
      id: '3',
      form: {
        type: 'choice',
        question: '一般情况下，我不愿意和有过自杀行为的人深交',
        choices: globalChoices,
      },
    },
    {
      id: '4',
      form: {
        type: 'choice',
        question: '在整个自杀事件中，最痛苦的是自杀者的家属',
        choices: globalChoices,
      },
    },
    {
      id: '5',
      form: {
        type: 'choice',
        question:
          '对于身患绝症又极度痛苦的病人，可由医务人员在法律的支持下帮助病人结束生命（主动安乐死）',
        choices: globalChoices,
      },
    },
    {
      id: '6',
      form: {
        type: 'choice',
        question: '在处理自杀事件过程中，应该对其家属表示同情和关心，并尽可能为他们提供帮助',
        choices: globalChoices,
      },
    },
    {
      id: '7',
      form: {
        type: 'choice',
        question: '自杀是对人生命尊严的践踏',
        choices: globalChoices,
      },
    },
    {
      id: '8',
      form: {
        type: 'choice',
        question: '不应为自杀死亡者开追悼会',
        choices: globalChoices,
      },
    },
    {
      id: '9',
      form: {
        type: 'choice',
        question: '如果我的朋友自杀未遂，我会比以前更关心他（她）',
        choices: globalChoices,
      },
    },
    {
      id: '10',
      form: {
        type: 'choice',
        question: '如果我的邻居家里有人自杀，我会逐渐疏远和他们的关系',
        choices: globalChoices,
      },
    },
    {
      id: '11',
      form: {
        type: 'choice',
        question: '安乐死是对人生命尊严的践踏',
        choices: globalChoices,
      },
    },
    {
      id: '12',
      form: {
        type: 'choice',
        question: '自杀是对家庭和社会一种不负责任的行为',
        choices: globalChoices,
      },
    },
    {
      id: '13',
      form: {
        type: 'choice',
        question: '人们不应该对自杀死亡者评头论足',
        choices: globalChoices,
      },
    },
    {
      id: '14',
      form: {
        type: 'choice',
        question: '我对那些反复自杀者很反感，因为他们常常将自杀作为一种控制别人的手段',
        choices: globalChoices,
      },
    },
    {
      id: '15',
      form: {
        type: 'choice',
        question: '对于自杀，自杀者的家属在不同程度上都应负有一定的责任',
        choices: globalChoices,
      },
    },
    {
      id: '16',
      form: {
        type: 'choice',
        question: '假如我自己身患绝症又处于极度痛苦之中，我希望医务人员能帮助我结束自己的生命',
        choices: globalChoices,
      },
    },
    {
      id: '17',
      form: {
        type: 'choice',
        question: '个体为某种伟大的、超过人生命价值的目的而自杀是值得赞许的',
        choices: globalChoices,
      },
    },
    {
      id: '18',
      form: {
        type: 'choice',
        question: '一般情况下，我不愿意去看望自杀未遂者，即使是亲人或好朋友也不例外',
        choices: globalChoices,
      },
    },
    {
      id: '19',
      form: {
        type: 'choice',
        question: '自杀只是一种生命现象，无所谓道德上的好与坏',
        choices: globalChoices,
      },
    },
    {
      id: '20',
      form: {
        type: 'choice',
        question: '自杀未遂者不值得同情',
        choices: globalChoices,
      },
    },
    {
      id: '21',
      form: {
        type: 'choice',
        question: '对于身患绝症又极度痛苦的病人，可不再为其进行维持生命的治疗（被动安乐死）',
        choices: globalChoices,
      },
    },
    {
      id: '22',
      form: {
        type: 'choice',
        question: '自杀是对亲人、朋友的背叛',
        choices: globalChoices,
      },
    },
    {
      id: '23',
      form: {
        type: 'choice',
        question: '人有时为了尊严和荣誉而不得不自杀',
        choices: globalChoices,
      },
    },
    {
      id: '24',
      form: {
        type: 'choice',
        question: '在交友时，我不太在意对方是否有过自杀行为',
        choices: globalChoices,
      },
    },
    {
      id: '25',
      form: {
        type: 'choice',
        question: '对自杀未遂者应给予更多的关心与帮助',
        choices: globalChoices,
      },
    },
    {
      id: '26',
      form: {
        type: 'choice',
        question: '当生命已无欢乐可言时，自杀是可以理解的',
        choices: globalChoices,
      },
    },
    {
      id: '27',
      form: {
        type: 'choice',
        question: '假如我自己身患绝症又处于极度痛苦之中，我不愿再接受维持生命的治疗',
        choices: globalChoices,
      },
    },
    {
      id: '28',
      form: {
        type: 'choice',
        question: '一般情况下，我不会和家中有过自杀者的人结婚',
        choices: globalChoices,
      },
    },
    {
      id: '29',
      form: {
        type: 'choice',
        question: '人有选择自杀的权利',
        choices: globalChoices,
      },
    },
  ],
  result: (datas) => {
    const arrayData: number[] = [];
    for (let i = 1; i <= 29; i++) {
      if (!(i in datas) || datas[i] === void 0) {
        return {
          ok: false,
          require: String(i),
        };
      }
      if (reverses.includes(i as never)) {
        arrayData[i] = 5 - datas[i];
      } else {
        arrayData[i] = datas[i] + 1;
      }
    }

    const results = {} as Record<keyof typeof resultMap, number>;

    for (const key of Object.keys(resultMap)) {
      let res = 0;
      resultMap[key as keyof typeof resultMap].forEach((i) => {
        res += arrayData[i]!;
      });
      results[key as keyof typeof resultMap] =
        res / resultMap[key as keyof typeof resultMap].length;
    }

    const getAttitude = (score: number) => {
      if (score <= 2.5) return '肯定';
      if (score < 3.5) return '矛盾或中立';
      return '否定';
    };

    return {
      ok: true,
      title: '自杀态度问卷结果（分维度解释）',
      description: `各维度均分1～2.5表示对对应对象或议题持肯定态度，>2.5且<3.5表示矛盾或中立态度，3.5～5表示否定态度；结果反映态度，不代表自杀意念或风险。\n对自杀行为性质的认识：${results.f1.toFixed(2)}（对自杀行为性质持${getAttitude(results.f1)}态度）\n对自杀者的态度：${results.f2.toFixed(2)}（对自杀者持${getAttitude(results.f2)}态度）\n对自杀者家属的态度：${results.f3.toFixed(2)}（对自杀者家属持${getAttitude(results.f3)}态度）\n对安乐死的态度：${results.f4.toFixed(2)}（对安乐死议题持${getAttitude(results.f4)}态度）`,
      score: Object.keys(nameMap).map((key) => ({
        type: 'pointer',
        title: nameMap[key as never],
        value: results[key as keyof typeof results],
        part: [
          {
            start: 1,
            end: 2.5,
            color: 'red',
          },
          {
            start: 2.5,
            end: 3.5,
            color: 'orange',
          },
          {
            start: 3.5,
            end: 5,
            color: 'green',
          },
        ],
      })),
    };
  },

  tags: ['自评', '自杀', '态度', '安乐死'],
};
export default saq;
