import type { Scale } from '@/types/form';
import { DomainTag, PopulationTag, PurposeTag, RaterTag } from '@/types/scaleTags';

const yesNoChoices = ['是', '否'] as const;
const dimensionChoices = ['1', '2', '3', '4', '5'] as const;

const dimensions = {
  distress: '困扰程度',
  preoccupation: '先占程度',
  conviction: '确信程度',
} as const;

export const pdi: Scale = {
  id: 'pdi',
  name: '彼得斯妄想问卷 21 项版 (PDI-21)',
  description:
    '彼得斯妄想问卷（Peters et al. Delusions Inventory，PDI-21）由 Peters 等人编制，21 项版于 2004 年发表，用于评估一般人群中的妄想样观念，共 21 个是／否条目，并对认可的项目评定困扰、先占和确信程度。本页为英文原版自行翻译、未经本地验证，结果仅供了解自身观念倾向，不能用于诊断。',
  refer: [
    {
      title:
        'Measurement of delusional ideation in the normal population: introducing the PDI (Peters et al. Delusions Inventory)（PDI 原始英文版）',
      url: 'https://doi.org/10.1093/oxfordjournals.schbul.a033401',
    },
    {
      title:
        'Measuring delusional ideation: the 21-item Peters et al. Delusions Inventory (PDI)（PDI-21 英文版及心理测量研究）',
      url: 'https://doi.org/10.1093/oxfordjournals.schbul.a007116',
    },
    {
      title:
        'The psychometric properties of the Peters et al. delusions inventory (PDI) in Taiwan: reliability, validity, and utility（台湾版 PDI-T 信效度研究）',
      url: 'https://doi.org/10.1007/s00127-011-0428-y',
    },
  ],
  guild:
    '请根据你一生中是否曾有过题目所述的体验回答“是”或“否”。对回答“是”的条目，再分别按 1～5 级评定：困扰程度（1 完全不困扰～5 非常困扰）、先占程度（1 几乎不想～5 总是想）、确信程度（1 完全不信～5 完全相信）。',
  questions: [
    { id: '.subtitle1', form: { type: 'subtitle', title: '信念项目' } },
    {
      id: '1',
      form: {
        type: 'choice',
        question: '你是否曾经觉得别人似乎在向你暗示什么，或说话带有言外之意？',
        choices: yesNoChoices,
      },
    },
    {
      id: '1.1',
      indent: 1,
      show: (datas) => datas['1'] === 0,
      form: { type: 'choice', question: '困扰程度', choices: dimensionChoices },
    },
    {
      id: '1.2',
      indent: 1,
      show: (datas) => datas['1'] === 0,
      form: { type: 'choice', question: '先占程度', choices: dimensionChoices },
    },
    {
      id: '1.3',
      indent: 1,
      show: (datas) => datas['1'] === 0,
      form: { type: 'choice', question: '确信程度', choices: dimensionChoices },
    },
    {
      id: '2',
      form: {
        type: 'choice',
        question: '你是否曾经觉得杂志或电视上的内容是专门为你而写的？',
        choices: yesNoChoices,
      },
    },
    {
      id: '2.1',
      indent: 1,
      show: (datas) => datas['2'] === 0,
      form: { type: 'choice', question: '困扰程度', choices: dimensionChoices },
    },
    {
      id: '2.2',
      indent: 1,
      show: (datas) => datas['2'] === 0,
      form: { type: 'choice', question: '先占程度', choices: dimensionChoices },
    },
    {
      id: '2.3',
      indent: 1,
      show: (datas) => datas['2'] === 0,
      form: { type: 'choice', question: '确信程度', choices: dimensionChoices },
    },
    {
      id: '3',
      form: {
        type: 'choice',
        question: '你是否曾经觉得某些人并不是他们表面看起来的那样？',
        choices: yesNoChoices,
      },
    },
    {
      id: '3.1',
      indent: 1,
      show: (datas) => datas['3'] === 0,
      form: { type: 'choice', question: '困扰程度', choices: dimensionChoices },
    },
    {
      id: '3.2',
      indent: 1,
      show: (datas) => datas['3'] === 0,
      form: { type: 'choice', question: '先占程度', choices: dimensionChoices },
    },
    {
      id: '3.3',
      indent: 1,
      show: (datas) => datas['3'] === 0,
      form: { type: 'choice', question: '确信程度', choices: dimensionChoices },
    },
    {
      id: '4',
      form: {
        type: 'choice',
        question: '你是否曾经觉得有人以某种方式在迫害你？',
        choices: yesNoChoices,
      },
    },
    {
      id: '4.1',
      indent: 1,
      show: (datas) => datas['4'] === 0,
      form: { type: 'choice', question: '困扰程度', choices: dimensionChoices },
    },
    {
      id: '4.2',
      indent: 1,
      show: (datas) => datas['4'] === 0,
      form: { type: 'choice', question: '先占程度', choices: dimensionChoices },
    },
    {
      id: '4.3',
      indent: 1,
      show: (datas) => datas['4'] === 0,
      form: { type: 'choice', question: '确信程度', choices: dimensionChoices },
    },
    {
      id: '5',
      form: {
        type: 'choice',
        question: '你是否曾经觉得有针对你的阴谋？',
        choices: yesNoChoices,
      },
    },
    {
      id: '5.1',
      indent: 1,
      show: (datas) => datas['5'] === 0,
      form: { type: 'choice', question: '困扰程度', choices: dimensionChoices },
    },
    {
      id: '5.2',
      indent: 1,
      show: (datas) => datas['5'] === 0,
      form: { type: 'choice', question: '先占程度', choices: dimensionChoices },
    },
    {
      id: '5.3',
      indent: 1,
      show: (datas) => datas['5'] === 0,
      form: { type: 'choice', question: '确信程度', choices: dimensionChoices },
    },
    {
      id: '6',
      form: {
        type: 'choice',
        question: '你是否曾经觉得自己是，或注定会成为非常重要的人物？',
        choices: yesNoChoices,
      },
    },
    {
      id: '6.1',
      indent: 1,
      show: (datas) => datas['6'] === 0,
      form: { type: 'choice', question: '困扰程度', choices: dimensionChoices },
    },
    {
      id: '6.2',
      indent: 1,
      show: (datas) => datas['6'] === 0,
      form: { type: 'choice', question: '先占程度', choices: dimensionChoices },
    },
    {
      id: '6.3',
      indent: 1,
      show: (datas) => datas['6'] === 0,
      form: { type: 'choice', question: '确信程度', choices: dimensionChoices },
    },
    {
      id: '7',
      form: {
        type: 'choice',
        question: '你是否曾经觉得自己是一个非常特别或不寻常的人？',
        choices: yesNoChoices,
      },
    },
    {
      id: '7.1',
      indent: 1,
      show: (datas) => datas['7'] === 0,
      form: { type: 'choice', question: '困扰程度', choices: dimensionChoices },
    },
    {
      id: '7.2',
      indent: 1,
      show: (datas) => datas['7'] === 0,
      form: { type: 'choice', question: '先占程度', choices: dimensionChoices },
    },
    {
      id: '7.3',
      indent: 1,
      show: (datas) => datas['7'] === 0,
      form: { type: 'choice', question: '确信程度', choices: dimensionChoices },
    },
    {
      id: '8',
      form: {
        type: 'choice',
        question: '你是否曾经觉得自己与上帝（神）特别亲近？',
        choices: yesNoChoices,
      },
    },
    {
      id: '8.1',
      indent: 1,
      show: (datas) => datas['8'] === 0,
      form: { type: 'choice', question: '困扰程度', choices: dimensionChoices },
    },
    {
      id: '8.2',
      indent: 1,
      show: (datas) => datas['8'] === 0,
      form: { type: 'choice', question: '先占程度', choices: dimensionChoices },
    },
    {
      id: '8.3',
      indent: 1,
      show: (datas) => datas['8'] === 0,
      form: { type: 'choice', question: '确信程度', choices: dimensionChoices },
    },
    {
      id: '9',
      form: {
        type: 'choice',
        question: '你是否曾经认为人们能够通过心灵感应交流？',
        choices: yesNoChoices,
      },
    },
    {
      id: '9.1',
      indent: 1,
      show: (datas) => datas['9'] === 0,
      form: { type: 'choice', question: '困扰程度', choices: dimensionChoices },
    },
    {
      id: '9.2',
      indent: 1,
      show: (datas) => datas['9'] === 0,
      form: { type: 'choice', question: '先占程度', choices: dimensionChoices },
    },
    {
      id: '9.3',
      indent: 1,
      show: (datas) => datas['9'] === 0,
      form: { type: 'choice', question: '确信程度', choices: dimensionChoices },
    },
    {
      id: '10',
      form: {
        type: 'choice',
        question: '你是否曾经觉得电脑等电子设备能够影响你的思维方式？',
        choices: yesNoChoices,
      },
    },
    {
      id: '10.1',
      indent: 1,
      show: (datas) => datas['10'] === 0,
      form: { type: 'choice', question: '困扰程度', choices: dimensionChoices },
    },
    {
      id: '10.2',
      indent: 1,
      show: (datas) => datas['10'] === 0,
      form: { type: 'choice', question: '先占程度', choices: dimensionChoices },
    },
    {
      id: '10.3',
      indent: 1,
      show: (datas) => datas['10'] === 0,
      form: { type: 'choice', question: '确信程度', choices: dimensionChoices },
    },
    {
      id: '11',
      form: {
        type: 'choice',
        question: '你是否曾经觉得自己在某种程度上被上帝（神）选中？',
        choices: yesNoChoices,
      },
    },
    {
      id: '11.1',
      indent: 1,
      show: (datas) => datas['11'] === 0,
      form: { type: 'choice', question: '困扰程度', choices: dimensionChoices },
    },
    {
      id: '11.2',
      indent: 1,
      show: (datas) => datas['11'] === 0,
      form: { type: 'choice', question: '先占程度', choices: dimensionChoices },
    },
    {
      id: '11.3',
      indent: 1,
      show: (datas) => datas['11'] === 0,
      form: { type: 'choice', question: '确信程度', choices: dimensionChoices },
    },
    {
      id: '12',
      form: {
        type: 'choice',
        question: '你是否相信巫术、巫毒或神秘力量的存在？',
        choices: yesNoChoices,
      },
    },
    {
      id: '12.1',
      indent: 1,
      show: (datas) => datas['12'] === 0,
      form: { type: 'choice', question: '困扰程度', choices: dimensionChoices },
    },
    {
      id: '12.2',
      indent: 1,
      show: (datas) => datas['12'] === 0,
      form: { type: 'choice', question: '先占程度', choices: dimensionChoices },
    },
    {
      id: '12.3',
      indent: 1,
      show: (datas) => datas['12'] === 0,
      form: { type: 'choice', question: '确信程度', choices: dimensionChoices },
    },
    {
      id: '13',
      form: {
        type: 'choice',
        question: '你是否经常担心你的伴侣可能对你不忠？',
        choices: yesNoChoices,
      },
    },
    {
      id: '13.1',
      indent: 1,
      show: (datas) => datas['13'] === 0,
      form: { type: 'choice', question: '困扰程度', choices: dimensionChoices },
    },
    {
      id: '13.2',
      indent: 1,
      show: (datas) => datas['13'] === 0,
      form: { type: 'choice', question: '先占程度', choices: dimensionChoices },
    },
    {
      id: '13.3',
      indent: 1,
      show: (datas) => datas['13'] === 0,
      form: { type: 'choice', question: '确信程度', choices: dimensionChoices },
    },
    {
      id: '14',
      form: {
        type: 'choice',
        question: '你是否曾经觉得自己比一般人罪孽更重？',
        choices: yesNoChoices,
      },
    },
    {
      id: '14.1',
      indent: 1,
      show: (datas) => datas['14'] === 0,
      form: { type: 'choice', question: '困扰程度', choices: dimensionChoices },
    },
    {
      id: '14.2',
      indent: 1,
      show: (datas) => datas['14'] === 0,
      form: { type: 'choice', question: '先占程度', choices: dimensionChoices },
    },
    {
      id: '14.3',
      indent: 1,
      show: (datas) => datas['14'] === 0,
      form: { type: 'choice', question: '确信程度', choices: dimensionChoices },
    },
    {
      id: '15',
      form: {
        type: 'choice',
        question: '你是否曾经觉得人们因为你的外貌而奇怪地打量你？',
        choices: yesNoChoices,
      },
    },
    {
      id: '15.1',
      indent: 1,
      show: (datas) => datas['15'] === 0,
      form: { type: 'choice', question: '困扰程度', choices: dimensionChoices },
    },
    {
      id: '15.2',
      indent: 1,
      show: (datas) => datas['15'] === 0,
      form: { type: 'choice', question: '先占程度', choices: dimensionChoices },
    },
    {
      id: '15.3',
      indent: 1,
      show: (datas) => datas['15'] === 0,
      form: { type: 'choice', question: '确信程度', choices: dimensionChoices },
    },
    {
      id: '16',
      form: {
        type: 'choice',
        question: '你是否曾经觉得自己的头脑里完全没有想法？',
        choices: yesNoChoices,
      },
    },
    {
      id: '16.1',
      indent: 1,
      show: (datas) => datas['16'] === 0,
      form: { type: 'choice', question: '困扰程度', choices: dimensionChoices },
    },
    {
      id: '16.2',
      indent: 1,
      show: (datas) => datas['16'] === 0,
      form: { type: 'choice', question: '先占程度', choices: dimensionChoices },
    },
    {
      id: '16.3',
      indent: 1,
      show: (datas) => datas['16'] === 0,
      form: { type: 'choice', question: '确信程度', choices: dimensionChoices },
    },
    {
      id: '17',
      form: {
        type: 'choice',
        question: '你是否曾经觉得世界即将毁灭？',
        choices: yesNoChoices,
      },
    },
    {
      id: '17.1',
      indent: 1,
      show: (datas) => datas['17'] === 0,
      form: { type: 'choice', question: '困扰程度', choices: dimensionChoices },
    },
    {
      id: '17.2',
      indent: 1,
      show: (datas) => datas['17'] === 0,
      form: { type: 'choice', question: '先占程度', choices: dimensionChoices },
    },
    {
      id: '17.3',
      indent: 1,
      show: (datas) => datas['17'] === 0,
      form: { type: 'choice', question: '确信程度', choices: dimensionChoices },
    },
    {
      id: '18',
      form: {
        type: 'choice',
        question: '你的想法是否曾经让你觉得陌生、不像自己的？',
        choices: yesNoChoices,
      },
    },
    {
      id: '18.1',
      indent: 1,
      show: (datas) => datas['18'] === 0,
      form: { type: 'choice', question: '困扰程度', choices: dimensionChoices },
    },
    {
      id: '18.2',
      indent: 1,
      show: (datas) => datas['18'] === 0,
      form: { type: 'choice', question: '先占程度', choices: dimensionChoices },
    },
    {
      id: '18.3',
      indent: 1,
      show: (datas) => datas['18'] === 0,
      form: { type: 'choice', question: '确信程度', choices: dimensionChoices },
    },
    {
      id: '19',
      form: {
        type: 'choice',
        question: '你的想法是否曾经鲜明到让你担心别人能听见？',
        choices: yesNoChoices,
      },
    },
    {
      id: '19.1',
      indent: 1,
      show: (datas) => datas['19'] === 0,
      form: { type: 'choice', question: '困扰程度', choices: dimensionChoices },
    },
    {
      id: '19.2',
      indent: 1,
      show: (datas) => datas['19'] === 0,
      form: { type: 'choice', question: '先占程度', choices: dimensionChoices },
    },
    {
      id: '19.3',
      indent: 1,
      show: (datas) => datas['19'] === 0,
      form: { type: 'choice', question: '确信程度', choices: dimensionChoices },
    },
    {
      id: '20',
      form: {
        type: 'choice',
        question: '你是否曾经觉得自己的想法被回响、重复传回来？',
        choices: yesNoChoices,
      },
    },
    {
      id: '20.1',
      indent: 1,
      show: (datas) => datas['20'] === 0,
      form: { type: 'choice', question: '困扰程度', choices: dimensionChoices },
    },
    {
      id: '20.2',
      indent: 1,
      show: (datas) => datas['20'] === 0,
      form: { type: 'choice', question: '先占程度', choices: dimensionChoices },
    },
    {
      id: '20.3',
      indent: 1,
      show: (datas) => datas['20'] === 0,
      form: { type: 'choice', question: '确信程度', choices: dimensionChoices },
    },
    {
      id: '21',
      form: {
        type: 'choice',
        question: '你是否曾经觉得自己像机器人或僵尸一样，没有自己的意志？',
        choices: yesNoChoices,
      },
    },
    {
      id: '21.1',
      indent: 1,
      show: (datas) => datas['21'] === 0,
      form: { type: 'choice', question: '困扰程度', choices: dimensionChoices },
    },
    {
      id: '21.2',
      indent: 1,
      show: (datas) => datas['21'] === 0,
      form: { type: 'choice', question: '先占程度', choices: dimensionChoices },
    },
    {
      id: '21.3',
      indent: 1,
      show: (datas) => datas['21'] === 0,
      form: { type: 'choice', question: '确信程度', choices: dimensionChoices },
    },
  ],
  result: (datas) => {
    let endorsedCount = 0;
    const dimensionTotals: Record<keyof typeof dimensions, number> = {
      distress: 0,
      preoccupation: 0,
      conviction: 0,
    };

    for (let itemNumber = 1; itemNumber <= 21; itemNumber++) {
      const beliefId = String(itemNumber);
      if (!(beliefId in datas) || datas[beliefId] === void 0) {
        return { ok: false, require: beliefId };
      }
      const beliefAnswer = datas[beliefId];
      if (
        typeof beliefAnswer !== 'number' ||
        !Number.isInteger(beliefAnswer) ||
        ![0, 1].includes(beliefAnswer)
      ) {
        return { ok: false, require: beliefId };
      }
      const endorsed = beliefAnswer === 0;
      if (endorsed) endorsedCount++;

      if (!endorsed) continue;
      for (const [dimensionIndex, key] of (
        Object.keys(dimensions) as (keyof typeof dimensions)[]
      ).entries()) {
        const dimensionId = `${beliefId}.${dimensionIndex + 1}`;
        if (!(dimensionId in datas) || datas[dimensionId] === void 0) {
          return { ok: false, require: dimensionId };
        }
        const ratingIndex = datas[dimensionId];
        if (
          typeof ratingIndex !== 'number' ||
          !Number.isInteger(ratingIndex) ||
          ratingIndex < 0 ||
          ratingIndex > 4
        ) {
          return { ok: false, require: dimensionId };
        }
        dimensionTotals[key] += ratingIndex + 1;
      }
    }

    const averages = Object.fromEntries(
      Object.keys(dimensions).map((key) => [
        key,
        endorsedCount === 0 ? 0 : dimensionTotals[key as keyof typeof dimensions] / endorsedCount,
      ])
    ) as Record<keyof typeof dimensions, number>;

    const dimensionSummary =
      endorsedCount === 0
        ? '未认可任何项目，三个维度均无分数。'
        : `困扰程度均分 ${averages.distress.toFixed(2)}/5、先占程度均分 ${averages.preoccupation.toFixed(2)}/5、确信程度均分 ${averages.conviction.toFixed(2)}/5；分数越高表示相应的困扰、先占或确信程度越高。`;

    return {
      ok: true,
      title: `认可 ${endorsedCount} / 21 项`,
      description: `${dimensionSummary}本问卷反映观念倾向，不代表患病，也不能用于诊断；如因此感到困扰，建议咨询精神心理专业人士。`,
      score: [
        {
          type: 'pointer',
          title: `认可项目数：${endorsedCount}/21`,
          value: endorsedCount,
          part: [{ start: 0, end: 21, color: '#5B6B7A' }],
        },
        ...Object.keys(dimensions).map((key) => {
          const dimensionKey = key as keyof typeof dimensions;
          return {
            type: 'pointer' as const,
            title: `${dimensions[dimensionKey]}均分：${averages[dimensionKey].toFixed(2)}/5`,
            value: averages[dimensionKey],
            valueLabel: averages[dimensionKey].toFixed(2),
            part: [{ start: 0, end: 5, color: '#5B6B7A' }],
          };
        }),
      ],
    };
  },
  tags: {
    rater: RaterTag.SELF,
    population: [PopulationTag.ADULT],
    purpose: [PurposeTag.TRAIT],
    domain: [DomainTag.GENERAL],
  },
};

export default pdi;
