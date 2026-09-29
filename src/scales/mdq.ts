import type { Scale } from '@/types/form';
const globalChoices = ['是', '否'] as const;

export const mdq: Scale = {
  id: 'mdq',
  name: '心境障碍问卷 (MDQ)',
  description:
    '心境障碍问卷（Mood Disorder Questionnaire，MDQ）由 Robert M.A. Hirschfeld 等于 2000 年编制，含 13 项躁狂／轻躁狂症状是／否条目及“是否同期出现”“困扰程度”两问，用于筛查双相障碍；中文版由杨海晨、刘铁榜等翻译验证（α=0.79，界值 7 分）。筛查结果不能单独用于诊断，须结合情绪发作史及专业评估综合判断。',
  refer: [
    {
      title:
        'Development and Validation of a Screening Instrument for Bipolar Spectrum Disorder: The Mood Disorder Questionnaire（原始编制与阳性判定规则）',
      url: 'https://doi.org/10.1176/appi.ajp.157.11.1873',
    },
    {
      title:
        'Validity of the Mood Disorder Questionnaire: A General Population Study（一般人群效度）',
      url: 'https://doi.org/10.1176/appi.ajp.160.1.178',
    },
    {
      title: 'Screening for Bipolar Disorder in the Community（社区人群筛查）',
      url: 'https://doi.org/10.4088/jcp.v64n0111',
    },
    {
      title:
        'Validity of the Chinese version Mood Disorder Questionnaire (MDQ) and the optimal cutoff screening bipolar disorders（中文版翻译与信效度、最佳界值）',
      url: 'https://doi.org/10.1016/j.psychres.2011.02.007',
    },
    {
      title:
        'Evaluation of Mood Disorder Questionnaire (MDQ) in Patients with Mood Disorders: A Multicenter Trial across China（中国 12 中心验证）',
      url: 'https://doi.org/10.1371/journal.pone.0091895',
    },
    {
      title:
        'Validation of the Chinese version of the Mood Disorder Questionnaire in a psychiatric population in Hong Kong（中文版港地区验证）',
      url: 'https://doi.org/10.1111/j.1440-1819.2008.01827.x',
    },
    // 题目文字的直接来源：中华医学期刊网【世界双相障碍日】双相障碍筛查利器——心境障碍问卷（MDQ）
    // https://www.medjournals.cn/journalContribute/getContributeInfo.do?bizId=6726
  ],
  questions: [
    {
      id: '.guild',
      form: {
        type: 'subtitle',
        title: '您是否曾经有一段时间与平时不一样，并且在那段时间里有下列表现：',
        level: 4,
      },
    },
    {
      id: '1',
      form: {
        type: 'choice',
        question:
          '您感到非常好或非常开心，但其他人认为与您平时的状态不一样，或者还由于这种特别开心、兴奋而带来麻烦？',
        choices: globalChoices,
      },
    },
    {
      id: '2',
      form: {
        type: 'choice',
        question: '您容易发脾气，经常大声指责别人、或与别人争吵或打架？',
        choices: globalChoices,
      },
    },
    {
      id: '3',
      form: { type: 'choice', question: '您比平时更自信？', choices: globalChoices },
    },
    {
      id: '4',
      form: {
        type: 'choice',
        question: '您睡觉比平时少，而且也不想睡？',
        choices: globalChoices,
      },
    },
    {
      id: '5',
      form: {
        type: 'choice',
        question: '您话比平时多，或说话速度比平时快？',
        choices: globalChoices,
      },
    },
    {
      id: '6',
      form: {
        type: 'choice',
        question: '您觉得脑子灵活、反应比平时快，或难以减慢您的思维？',
        choices: globalChoices,
      },
    },
    {
      id: '7',
      form: {
        type: 'choice',
        question: '您很容易被周围的事物干扰，以致不能集中注意力？',
        choices: globalChoices,
      },
    },
    {
      id: '8',
      form: { type: 'choice', question: '您的精力比平时好？', choices: globalChoices },
    },
    {
      id: '9',
      form: {
        type: 'choice',
        question: '您比平时积极主动，或比平时做了更多的事情？',
        choices: globalChoices,
      },
    },
    {
      id: '10',
      form: {
        type: 'choice',
        question: '您比平时喜欢社交或外出，如在半夜仍给朋友打电话？',
        choices: globalChoices,
      },
    },
    {
      id: '11',
      form: { type: 'choice', question: '您的性欲比平时强？', choices: globalChoices },
    },
    {
      id: '12',
      form: {
        type: 'choice',
        question: '您做了一些平时不会做的事情，别人认为那些事情有些过分、愚蠢或冒险？',
        choices: globalChoices,
      },
    },
    {
      id: '13',
      form: {
        type: 'choice',
        question: '您花钱太多，使自己或家庭陷入困境？',
        choices: globalChoices,
      },
    },
    {
      id: '.subtitle1',
      form: {
        type: 'subtitle',
        title: '附加问题',
        level: 4,
      },
    },
    {
      id: 'Q1',
      form: {
        type: 'choice',
        question: '如果有多条勾选“是”，这些症状是否在同一时间段内同时出现？(否则可不填）',
        choices: globalChoices,
      },
    },
    {
      id: 'Q2',
      form: {
        type: 'choice',
        question: '如果有任意一条勾选“是”，这些问题给你造成了多大的困扰？(否则可不填）',
        questionDescription: '如：无法工作，家庭矛盾，经济/法律纠纷等',
        choices: ['无', '轻微', '中等', '严重'],
      },
    },
    {
      id: 'Q3',
      form: {
        type: 'choice',
        question: '（选填）你的直系血亲（父母、兄弟姐妹、子女）是否有过躁郁症/双相障碍？',
        choices: globalChoices,
      },
    },
    {
      id: 'Q4',
      form: {
        type: 'choice',
        question: '（选填）是否有医护人员曾经诊断过你有双郁症/双相障碍？',
        choices: globalChoices,
      },
    },
  ],
  result: (datas) => {
    const result: number[] = [];
    for (let i = 1; i <= 13; i++) {
      if (!(i in datas) || datas[i] === void 0) {
        return {
          ok: false,
          require: String(i),
        };
      }
      result.push(1 - Number(datas[i]));
    }
    const sum = result.reduce((acc, cur) => acc + cur, 0);
    const q1 = datas['Q1'];
    if (sum > 1 && q1 === void 0) {
      return {
        ok: false,
        require: 'Q1',
      };
    }
    const q2 = datas['Q2'];
    if (sum > 1 && q2 === void 0) {
      return {
        ok: false,
        require: 'Q2',
      };
    }
    const scoreLevel = sum >= 7 ? '阳性分值' : sum >= 5 ? '临界值分值' : '阴性分值';
    const notSameTime = q1 !== 0;
    const notSerious = Number(q2) < 2;
    const isPositive = sum >= 7 && !notSameTime && !notSerious;
    let description = `总分 ${sum}/13，属于${scoreLevel}（≥7 分阳性，5～6 分临界值，≤4 分阴性）。`;
    if (isPositive) {
      description +=
        '\n症状同期出现且已造成中等及以上困扰，故判定为筛查阳性。建议由精神科或心理专业人员进一步评估；本结果不等同于诊断。';
    } else if (sum >= 7) {
      const reasons = [
        notSameTime ? '这些症状并非在同一时间段内同时出现' : '',
        notSerious ? '您自己认为这些问题没有造成太大影响' : '',
      ].filter(Boolean);
      description += `\n虽然分值已达阳性，但由于：${reasons
        .map((r, i) => `${i + 1}）${r}`)
        .join('；')}，故整体判定为筛查阴性。如有明显情绪波动或功能受损，建议进一步专业评估。`;
    } else {
      description +=
        '\n未达阳性界值，故判定为筛查阴性。如有明显情绪波动或功能受损，建议进一步专业评估。';
    }
    return {
      ok: true,
      title: isPositive ? '筛查阳性' : '筛查阴性',
      description,
      score: [
        {
          type: 'pointer',
          value: sum,
          part: [
            { start: 0, end: 4.5, color: '#007700' },
            { start: 4.5, end: 6.5, color: '#ACAC00' },
            { start: 6.5, end: 13, color: '#FF0000' },
          ],
        },
      ],
    };
  },

  tags: ['自评', '抑郁', '症状严重度'],
};
export default mdq;
