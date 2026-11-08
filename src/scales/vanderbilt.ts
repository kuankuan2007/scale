import type { Scale } from '@/types/form';
import { DomainTag, PopulationTag, PurposeTag, RaterTag } from '@/types/scaleTags';

const symptomChoices = ['从不', '偶尔', '经常', '非常频繁'] as const;
const performanceChoices = ['优秀', '高于平均', '平均', '有些问题', '问题明显'] as const;

const symptomGroups = {
  inattention: ['1', '2', '3', '4', '5', '6', '7', '8', '9'],
  hyperactivity: ['10', '11', '12', '13', '14', '15', '16', '17', '18'],
  oppositional: ['19', '20', '21', '22', '23', '24', '25', '26'],
  conduct: ['27', '28', '29', '30', '31', '32', '33', '34', '35', '36', '37', '38', '39', '40'],
  anxietyDepression: ['41', '42', '43', '44', '45', '46', '47'],
} as const;

export const vanderbilt: Scale = {
  id: 'vanderbilt',
  name: '范德比尔特 ADHD 家长评定量表 (VADPRS)',
  trusted: true,
  description:
    '范德比尔特 ADHD 家长评定量表（Vanderbilt ADHD Diagnostic Parent Rating Scale，VADPRS）由美国国家儿童健康质量研究所（NICHQ）于 2002 年发布，供家长评定 6～12 岁儿童近 6 个月的 ADHD 症状及相关行为、情绪问题和功能表现，用于辅助筛查与评估。已有中文版家长量表的信效度研究；本页为依据英文版独立简译，未与研究译本逐题校订，结果不能单独用于诊断。',
  refer: [
    {
      title: 'NICHQ Vanderbilt Assessment Scales (2002; official resource page)',
      url: 'https://nichq.org/resource/nichq-vanderbilt-assessment-scales/',
    },
    {
      title: 'ADHD-Packet Chinese (Vanderbilt Parent Rating Scale)',
      url: 'https://capp.ucsf.edu/sites/g/files/tkssra6871/f/ADHD%20Vanderbilt%20Parent%20-%20Chinese.pdf',
    },
    {
      title:
        'Psychometric Properties of the Vanderbilt ADHD Diagnostic Parent Rating Scale in a Referred Population',
      url: 'https://doi.org/10.1093/jpepsy/jsg046',
    },
    {
      title: 'Vanderbilt ADHD诊断评定量表父母版的信效度分析 (2024)',
      url: 'https://www.sinomed.ac.cn/article.do?ui=2024428285',
    },
    {
      title: 'National Norms for the Vanderbilt ADHD Diagnostic Parent Rating Scale in Children',
      url: 'https://doi.org/10.1093/jpepsy/jsab132',
    },
    {
      title:
        'Defining a minimal clinically important difference for the Vanderbilt ADHD Parent Rating Scale in children with Attention-Deficit/Hyperactivity Disorder',
      url: 'https://doi.org/10.1186/s12888-026-08462-7',
    },
  ],
  guild:
    '请家长根据孩子过去 6 个月的日常表现作答。前 47 项按发生频率选择，后 8 项评价学习、关系和活动中的表现；请尽量依据持续观察，不要仅凭单次事件判断。',
  questions: [
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
        question: '做事时忽略细节或出现疏忽',
        choices: symptomChoices,
      },
    },
    {
      id: '2',
      form: {
        type: 'choice',
        question: '难以持续专注于任务或游戏',
        choices: symptomChoices,
      },
    },
    {
      id: '3',
      form: {
        type: 'choice',
        question: '别人直接说话时似乎没有在听',
        choices: symptomChoices,
      },
    },
    {
      id: '4',
      form: {
        type: 'choice',
        question: '难以按要求完成作业、家务或任务',
        choices: symptomChoices,
      },
    },
    {
      id: '5',
      form: {
        type: 'choice',
        question: '组织任务和活动有困难',
        choices: symptomChoices,
      },
    },
    {
      id: '6',
      form: {
        type: 'choice',
        question: '回避或不愿做需要持续动脑的任务',
        choices: symptomChoices,
      },
    },
    {
      id: '7',
      form: {
        type: 'choice',
        question: '经常遗失完成任务所需的物品',
        choices: symptomChoices,
      },
    },
    {
      id: '8',
      form: {
        type: 'choice',
        question: '容易被外界刺激或无关想法分散注意',
        choices: symptomChoices,
      },
    },
    {
      id: '9',
      form: {
        type: 'choice',
        question: '日常活动中容易忘事',
        choices: symptomChoices,
      },
    },
    {
      id: '.subtitle2',
      form: {
        type: 'subtitle',
        title: '多动/冲动症状',
      },
    },
    {
      id: '10',
      form: {
        type: 'choice',
        question: '坐着时手脚不停或身体扭动',
        choices: symptomChoices,
      },
    },
    {
      id: '11',
      form: {
        type: 'choice',
        question: '需要坐着时擅自离开座位',
        choices: symptomChoices,
      },
    },
    {
      id: '12',
      form: {
        type: 'choice',
        question: '在不适当场合跑动或攀爬',
        choices: symptomChoices,
      },
    },
    {
      id: '13',
      form: {
        type: 'choice',
        question: '难以安静地进行游戏或休闲活动',
        choices: symptomChoices,
      },
    },
    {
      id: '14',
      form: {
        type: 'choice',
        question: '经常忙个不停，像停不下来',
        choices: symptomChoices,
      },
    },
    {
      id: '15',
      form: {
        type: 'choice',
        question: '说话过多',
        choices: symptomChoices,
      },
    },
    {
      id: '16',
      form: {
        type: 'choice',
        question: '问题尚未问完就抢先回答',
        choices: symptomChoices,
      },
    },
    {
      id: '17',
      form: {
        type: 'choice',
        question: '需要排队或轮候时难以等待',
        choices: symptomChoices,
      },
    },
    {
      id: '18',
      form: {
        type: 'choice',
        question: '打断或插入他人的谈话、活动',
        choices: symptomChoices,
      },
    },
    {
      id: '.subtitle3',
      form: {
        type: 'subtitle',
        title: '对立违抗表现',
      },
    },
    {
      id: '19',
      form: {
        type: 'choice',
        question: '容易发脾气',
        choices: symptomChoices,
      },
    },
    {
      id: '20',
      form: {
        type: 'choice',
        question: '与成年人争辩',
        choices: symptomChoices,
      },
    },
    {
      id: '21',
      form: {
        type: 'choice',
        question: '拒绝遵守规则或成人要求',
        choices: symptomChoices,
      },
    },
    {
      id: '22',
      form: {
        type: 'choice',
        question: '故意惹恼他人',
        choices: symptomChoices,
      },
    },
    {
      id: '23',
      form: {
        type: 'choice',
        question: '把自己的错误或不当行为归咎于别人',
        choices: symptomChoices,
      },
    },
    {
      id: '24',
      form: {
        type: 'choice',
        question: '容易被激怒或感到受冒犯',
        choices: symptomChoices,
      },
    },
    {
      id: '25',
      form: {
        type: 'choice',
        question: '生气、怨恨或怀有敌意',
        choices: symptomChoices,
      },
    },
    {
      id: '26',
      form: {
        type: 'choice',
        question: '有报复或故意伤害他人的表现',
        choices: symptomChoices,
      },
    },
    {
      id: '.subtitle4',
      form: {
        type: 'subtitle',
        title: '品行问题',
      },
    },
    {
      id: '27',
      form: {
        type: 'choice',
        question: '欺负、威胁或恐吓他人',
        choices: symptomChoices,
      },
    },
    {
      id: '28',
      form: {
        type: 'choice',
        question: '主动挑起肢体冲突',
        choices: symptomChoices,
      },
    },
    {
      id: '29',
      form: {
        type: 'choice',
        question: '说谎以逃避责任或获得想要的东西',
        choices: symptomChoices,
      },
    },
    {
      id: '30',
      form: {
        type: 'choice',
        question: '未经允许逃课或离开学校',
        choices: symptomChoices,
      },
    },
    {
      id: '31',
      form: {
        type: 'choice',
        question: '故意伤害或虐待他人',
        choices: symptomChoices,
      },
    },
    {
      id: '32',
      form: {
        type: 'choice',
        question: '偷取有价值物品或实施盗窃',
        choices: symptomChoices,
      },
    },
    {
      id: '33',
      form: {
        type: 'choice',
        question: '故意破坏他人财物',
        choices: symptomChoices,
      },
    },
    {
      id: '34',
      form: {
        type: 'choice',
        question: '曾使用可能造成严重伤害的器具',
        choices: symptomChoices,
      },
    },
    {
      id: '35',
      form: {
        type: 'choice',
        question: '故意伤害动物',
        choices: symptomChoices,
      },
    },
    {
      id: '36',
      form: {
        type: 'choice',
        question: '故意纵火或造成严重火灾风险',
        choices: symptomChoices,
      },
    },
    {
      id: '37',
      form: {
        type: 'choice',
        question: '未经允许闯入他人住所或车辆',
        choices: symptomChoices,
      },
    },
    {
      id: '38',
      form: {
        type: 'choice',
        question: '年龄较小时也经常在夜间外出不归',
        choices: symptomChoices,
      },
    },
    {
      id: '39',
      form: {
        type: 'choice',
        question: '曾离家出走或夜不归宿',
        choices: symptomChoices,
      },
    },
    {
      id: '40',
      form: {
        type: 'choice',
        question: '曾强迫他人发生性行为',
        choices: symptomChoices,
      },
    },
    {
      id: '.subtitle5',
      form: {
        type: 'subtitle',
        title: '焦虑/抑郁表现',
      },
    },
    {
      id: '41',
      form: {
        type: 'choice',
        question: '感到害怕、担忧或焦虑',
        choices: symptomChoices,
      },
    },
    {
      id: '42',
      form: {
        type: 'choice',
        question: '因担心出错而不敢尝试新事物',
        choices: symptomChoices,
      },
    },
    {
      id: '43',
      form: {
        type: 'choice',
        question: '觉得自己没有价值或不如别人',
        choices: symptomChoices,
      },
    },
    {
      id: '44',
      form: {
        type: 'choice',
        question: '遇到问题时过度自责',
        choices: symptomChoices,
      },
    },
    {
      id: '45',
      form: {
        type: 'choice',
        question: '感到孤独、不被需要或不被关爱',
        choices: symptomChoices,
      },
    },
    {
      id: '46',
      form: {
        type: 'choice',
        question: '感到悲伤或情绪低落',
        choices: symptomChoices,
      },
    },
    {
      id: '47',
      form: {
        type: 'choice',
        question: '容易害羞或因他人关注而难为情',
        choices: symptomChoices,
      },
    },
    {
      id: '.subtitle6',
      form: {
        type: 'subtitle',
        title: '功能表现',
      },
    },
    {
      id: '48',
      form: {
        type: 'choice',
        question: '整体学习表现',
        choices: performanceChoices,
      },
    },
    {
      id: '49',
      form: {
        type: 'choice',
        question: '阅读表现',
        choices: performanceChoices,
      },
    },
    {
      id: '50',
      form: {
        type: 'choice',
        question: '书写表现',
        choices: performanceChoices,
      },
    },
    {
      id: '51',
      form: {
        type: 'choice',
        question: '数学表现',
        choices: performanceChoices,
      },
    },
    {
      id: '52',
      form: {
        type: 'choice',
        question: '与家长的关系',
        choices: performanceChoices,
      },
    },
    {
      id: '53',
      form: {
        type: 'choice',
        question: '与兄弟姐妹的关系',
        choices: performanceChoices,
      },
    },
    {
      id: '54',
      form: {
        type: 'choice',
        question: '与同伴的关系',
        choices: performanceChoices,
      },
    },
    {
      id: '55',
      form: {
        type: 'choice',
        question: '参加有组织的活动',
        choices: performanceChoices,
      },
    },
  ],
  result: (datas) => {
    const ratings: Record<string, number> = {};
    for (let item = 1; item <= 55; item++) {
      const id = String(item);
      const choiceIndex = datas[id];
      const choiceCount = item <= 47 ? symptomChoices.length : performanceChoices.length;
      if (!Number.isInteger(choiceIndex) || choiceIndex < 0 || choiceIndex >= choiceCount) {
        return { ok: false, require: id };
      }
      ratings[id] = choiceIndex;
    }

    const symptomCounts = Object.fromEntries(
      Object.entries(symptomGroups).map(([group, ids]) => [
        group,
        ids.filter((id) => ratings[id]! >= 2).length,
      ])
    ) as Record<keyof typeof symptomGroups, number>;
    const impairedAreas = Array.from({ length: 8 }, (_, index) => String(index + 48)).filter(
      (id) => ratings[id]! >= 3
    ).length;
    const inattentionThreshold = symptomCounts.inattention >= 6;
    const hyperactivityThreshold = symptomCounts.hyperactivity >= 6;
    const reachesCoreThresholds = Number(inattentionThreshold) + Number(hyperactivityThreshold);
    const hasFunctionalImpairment = impairedAreas > 0;

    return {
      ok: true,
      title: `核心症状 ${symptomCounts.inattention + symptomCounts.hyperactivity} / 18 项`,
      description:
        `注意缺陷 ${symptomCounts.inattention}/9、多动/冲动 ${symptomCounts.hyperactivity}/9、对立违抗 ${symptomCounts.oppositional}/8、品行问题 ${symptomCounts.conduct}/14、焦虑/抑郁 ${symptomCounts.anxietyDepression}/7 项评为“经常”或“非常频繁”；功能表现中 ${impairedAreas}/8 项有问题。` +
        `按英文原版规则作参考（本页未验证）：注意缺陷 ${inattentionThreshold ? '达到' : '未达到'}、多动/冲动 ${hyperactivityThreshold ? '达到' : '未达到'} 6/9 的筛查阈值。` +
        `${reachesCoreThresholds > 0 && hasFunctionalImpairment ? '存在达到阈值的核心症状且功能受影响，建议带孩子接受专业评估。' : '暂未同时满足核心症状与功能影响的条件；如症状持续或影响生活，仍建议咨询专业人员。'}`,
    };
  },
  tags: {
    rater: RaterTag.OTHER,
    population: [PopulationTag.CHILD],
    purpose: [PurposeTag.SCREENING, PurposeTag.AUX_DIAGNOSIS],
    domain: [DomainTag.ADHD],
  },
};

export default vanderbilt;
