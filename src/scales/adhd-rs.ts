import type { Scale } from '@/types/form';
import { DomainTag, PopulationTag, PurposeTag, RaterTag } from '@/types/scaleTags';

const symptomChoices = ['从不或很少', '有时', '经常', '非常频繁'] as const;
const impairmentChoices = ['没有问题', '轻微问题', '中度问题', '严重问题'] as const;
const raterChoices = ['家长（家庭版）', '教师（学校版）'] as const;

const symptomGroups = {
  inattention: ['1', '2', '3', '4', '5', '6', '7', '8', '9'],
  hyperactivityImpulsivity: ['10', '11', '12', '13', '14', '15', '16', '17', '18'],
} as const;

export const adhdRs: Scale = {
  id: 'adhd-rs',
  name: 'ADHD 评定量表第 5 版',
  trusted: true,
  description:
    'ADHD 评定量表第 5 版（ADHD Rating Scale–5，ADHD-RS-5）由 DuPaul 等人于 2016 年编制，依据 DSM-5 由家长或教师评定 5～17 岁儿童青少年的注意缺陷、多动/冲动症状及相关功能影响，用于筛查和疗效观察。本页题干为自行翻译，未经中文版验证，结果不能单独用于诊断。',
  refer: [
    {
      title:
        'ADHD Rating Scale—5 for Children and Adolescents: Checklists, Norms, and Clinical Interpretation',
      url: 'https://www.guilford.com/books/ADHD-Rating-Scale-5/DuPaul-Power-Anastopoulos-Reid/9781462516245',
    },
    {
      title: 'Parent and Teacher Ratings of ADHD Symptoms: Factor Structure and Normative Data',
      url: 'https://doi.org/10.1037/pas0000166',
    },
    {
      title:
        'Psychometric Properties of ADHD Rating Scale—5 for Children and Adolescents in Sudan—School Version',
      url: 'https://doi.org/10.3389/fpsyg.2022.883578',
    },
    {
      title:
        'The psychometric properties of the ADHD rating scale—5 for children and adolescents, home version for Sudan',
      url: 'https://doi.org/10.3389/fpsyt.2024.1365189',
    },
    {
      title:
        'Psychometrics of rating scales for externalizing disorders in Japanese outpatients: The ADHD-Rating Scale-5 and the Disruptive Behavior Disorders Rating Scale',
      url: 'https://doi.org/10.1002/mpr.2015',
    },
  ],
  guild:
    '请家长或教师根据孩子过去 6 个月在家庭或学校中的通常表现作答：先评定 18 项症状的发生频率，再分别评价注意缺陷和多动/冲动造成的影响。',
  questions: [
    {
      id: '0',
      form: {
        type: 'choice',
        question: '填表者身份',
        questionDescription: '请按当前评价的场景选择家长家庭版或教师学校版。',
        choices: raterChoices,
      },
    },
    {
      id: '.subtitle1',
      form: {
        type: 'subtitle',
        title: '注意缺陷症状',
      },
    },
    {
      id: '1',
      form: {
        type: 'choice',
        question: '做作业或其他活动时容易漏看细节',
        choices: symptomChoices,
      },
    },
    {
      id: '2',
      form: {
        type: 'choice',
        question: '难以持续专注于任务或活动',
        choices: symptomChoices,
      },
    },
    {
      id: '3',
      form: {
        type: 'choice',
        question: '别人直接和其说话时，常显得没有听进去',
        choices: symptomChoices,
      },
    },
    {
      id: '4',
      form: {
        type: 'choice',
        question: '难以按要求完成作业、家务或其他任务',
        choices: symptomChoices,
      },
    },
    {
      id: '5',
      form: {
        type: 'choice',
        question: '安排任务、物品或活动步骤时容易遇到困难',
        choices: symptomChoices,
      },
    },
    {
      id: '6',
      form: {
        type: 'choice',
        question: '回避需要长时间集中思考的任务',
        choices: symptomChoices,
      },
    },
    {
      id: '7',
      form: {
        type: 'choice',
        question: '经常找不到完成任务所需的物品',
        choices: symptomChoices,
      },
    },
    {
      id: '8',
      form: {
        type: 'choice',
        question: '容易被周围事物或声音带走注意力',
        choices: symptomChoices,
      },
    },
    {
      id: '9',
      form: {
        type: 'choice',
        question: '经常忘记日常需要完成的事情',
        choices: symptomChoices,
      },
    },
    {
      id: '.subtitle2',
      form: {
        type: 'subtitle',
        title: '注意缺陷相关的功能影响',
      },
    },
    {
      id: '19',
      form: {
        type: 'choice',
        question: '注意缺陷对其与家长或教师相处的影响',
        choices: impairmentChoices,
      },
    },
    {
      id: '20',
      form: {
        type: 'choice',
        question: '注意缺陷对其同伴关系的影响',
        choices: impairmentChoices,
      },
    },
    {
      id: '21',
      form: {
        type: 'choice',
        question: '注意缺陷对其学业表现的影响',
        choices: impairmentChoices,
      },
    },
    {
      id: '22',
      form: {
        type: 'choice',
        question: '注意缺陷对其行为表现的影响',
        choices: impairmentChoices,
      },
    },
    {
      id: '23',
      form: {
        type: 'choice',
        question: '注意缺陷对其完成作业的影响',
        choices: impairmentChoices,
      },
    },
    {
      id: '24',
      form: {
        type: 'choice',
        question: '注意缺陷对其自我评价的影响',
        choices: impairmentChoices,
      },
    },
    {
      id: '.subtitle3',
      form: {
        type: 'subtitle',
        title: '多动/冲动症状',
      },
    },
    {
      id: '10',
      form: {
        type: 'choice',
        question: '坐着时手脚常动个不停或身体扭动',
        choices: symptomChoices,
      },
    },
    {
      id: '11',
      form: {
        type: 'choice',
        question: '需要坐着时经常离开座位',
        choices: symptomChoices,
      },
    },
    {
      id: '12',
      form: {
        type: 'choice',
        question: '在不适合的情境中跑动或攀爬；青少年可能主要表现为坐立不安',
        choices: symptomChoices,
      },
    },
    {
      id: '13',
      form: {
        type: 'choice',
        question: '难以安静地参与游戏或休闲活动',
        choices: symptomChoices,
      },
    },
    {
      id: '14',
      form: {
        type: 'choice',
        question: '常像一直在活动，难以停下来',
        choices: symptomChoices,
      },
    },
    {
      id: '15',
      form: {
        type: 'choice',
        question: '说话常常过多',
        choices: symptomChoices,
      },
    },
    {
      id: '16',
      form: {
        type: 'choice',
        question: '问题尚未问完就抢着回答',
        choices: symptomChoices,
      },
    },
    {
      id: '17',
      form: {
        type: 'choice',
        question: '在需要轮流的场合难以等待',
        choices: symptomChoices,
      },
    },
    {
      id: '18',
      form: {
        type: 'choice',
        question: '经常打断他人或插入他人的活动',
        choices: symptomChoices,
      },
    },
    {
      id: '.subtitle4',
      form: {
        type: 'subtitle',
        title: '多动/冲动相关的功能影响',
      },
    },
    {
      id: '25',
      form: {
        type: 'choice',
        question: '多动/冲动对其与家长或教师相处的影响',
        choices: impairmentChoices,
      },
    },
    {
      id: '26',
      form: {
        type: 'choice',
        question: '多动/冲动对其同伴关系的影响',
        choices: impairmentChoices,
      },
    },
    {
      id: '27',
      form: {
        type: 'choice',
        question: '多动/冲动对其学业表现的影响',
        choices: impairmentChoices,
      },
    },
    {
      id: '28',
      form: {
        type: 'choice',
        question: '多动/冲动对其行为表现的影响',
        choices: impairmentChoices,
      },
    },
    {
      id: '29',
      form: {
        type: 'choice',
        question: '多动/冲动对其完成作业的影响',
        choices: impairmentChoices,
      },
    },
    {
      id: '30',
      form: {
        type: 'choice',
        question: '多动/冲动对其自我评价的影响',
        choices: impairmentChoices,
      },
    },
  ],
  result: (datas) => {
    if (!Number.isInteger(datas['0']) || datas['0'] < 0 || datas['0'] >= raterChoices.length) {
      return { ok: false, require: '0' };
    }

    const ratings: Record<string, number> = {};
    for (let item = 1; item <= 30; item++) {
      const id = String(item);
      const choiceIndex = datas[id];
      if (!Number.isInteger(choiceIndex) || choiceIndex < 0 || choiceIndex >= 4) {
        return { ok: false, require: id };
      }
      ratings[id] = choiceIndex;
    }

    const inattentionScore = symptomGroups.inattention.reduce((sum, id) => sum + ratings[id]!, 0);
    const hyperactivityImpulsivityScore = symptomGroups.hyperactivityImpulsivity.reduce(
      (sum, id) => sum + ratings[id]!,
      0
    );
    const inattentionCount = symptomGroups.inattention.filter((id) => ratings[id]! >= 2).length;
    const hyperactivityImpulsivityCount = symptomGroups.hyperactivityImpulsivity.filter(
      (id) => ratings[id]! >= 2
    ).length;
    const inattentionImpairment = Array.from({ length: 6 }, (_, index) => String(index + 19));
    const hyperactivityImpulsivityImpairment = Array.from({ length: 6 }, (_, index) =>
      String(index + 25)
    );
    const inattentionImpairmentScore = inattentionImpairment.reduce(
      (sum, id) => sum + ratings[id]!,
      0
    );
    const hyperactivityImpulsivityImpairmentScore = hyperactivityImpulsivityImpairment.reduce(
      (sum, id) => sum + ratings[id]!,
      0
    );

    return {
      ok: true,
      title: `症状频次总分 ${inattentionScore + hyperactivityImpulsivityScore} / 54`,
      description:
        `注意缺陷 ${inattentionScore}/27（9 项中有 ${inattentionCount} 项评为“经常”或“非常频繁”）；` +
        `多动/冲动 ${hyperactivityImpulsivityScore}/27（9 项中有 ${hyperactivityImpulsivityCount} 项为“经常”或“非常频繁”）。` +
        `功能影响：注意缺陷相关 ${inattentionImpairmentScore}/18，多动/冲动相关 ${hyperactivityImpulsivityImpairmentScore}/18。` +
        '以上为原始分，未套用常模，不能据此诊断；如症状频繁且已影响学习、同伴或家庭生活，建议由专业人员进一步评估。',
    };
  },
  tags: {
    rater: RaterTag.OTHER,
    population: [PopulationTag.CHILD, PopulationTag.ADOLESCENT],
    purpose: [PurposeTag.SCREENING, PurposeTag.SEVERITY],
    domain: [DomainTag.ADHD],
  },
};

export default adhdRs;
