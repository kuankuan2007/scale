import type { Scale } from '@/types/form';

const globalChoices = ['完全没有', '有一点点', '还不算少', '非常的多'] as const;

export const asrsA: Scale = {
  id: 'snapiv',
  name: '儿童注意力缺陷多动症评定量表(SNAP-IV)',
  description:
    'SNAP-IV评定量表（Swanson,Nolan,and Pelham Rating Scale-IV），是目前国际上广泛应用于儿童注意力缺陷多动障碍（ADHD，俗称多动症）筛选、辅助诊断及治疗疗效评估的标准化工具，其编制与修订始终围绕权威诊断标准，兼具科学性、实用性和针对性，被各大医院及科研机构广泛采用。',
  questions: [
    {
      id: '.subtitle1',
      form: {
        type: 'subtitle',
        level: 4,
        title: '关于注意力不集中',
      },
    },
    {
      id: '1',
      form: {
        type: 'choice',
        choices: globalChoices,
        question: '在做作业或其他活动时，不能密切关注细节或犯粗心大意的错误',
        questionDescription: '例如，读题时容易忽视或遗漏细节',
      },
    },
    {
      id: '2',
      form: {
        type: 'choice',
        choices: globalChoices,
        question: '在任务或游戏活动中难以维持注意力',
        questionDescription: '例如，在听课、对话或长时间的阅读活动中难以维持注意力',
      },
    },
    {
      id: '3',
      form: {
        type: 'choice',
        choices: globalChoices,
        question: '当别人对其直接讲话时，好像看起来没有在听',
        questionDescription: '例如，即使在没有任何明显干扰的情况下，也会显得心不在焉',
      },
    },
    {
      id: '4',
      form: {
        type: 'choice',
        choices: globalChoices,
        question: '不能始终遵循家长/老师的指示以至于最终无法按照要求完成作业、任务或家务中的职责',
        questionDescription:
          '例如，一开始可以按要求执行任务，但很快就忘记家长/老师的要求，随心所欲去做',
      },
    },
    {
      id: '5',
      form: {
        type: 'choice',
        choices: globalChoices,
        question: '难以组织/规划任务和活动',
        questionDescription:
          '例如，难以完成有条理的任务;做事凌乱、没头绪;不良的时间管理;不能遵守截止日期;难以把材料和物品放得整整齐齐',
      },
    },
    {
      id: '6',
      form: {
        type: 'choice',
        choices: globalChoices,
        question: '回避、厌恶或不情愿从事那些需要持续用脑的任务',
        questionDescription:
          '例如，不愿意做学校作业或家庭作业;若为年龄较大的青少年，可能是不愿意准备报告、完成表格或阅读冗长的文章',
      },
    },
    {
      id: '7',
      form: {
        type: 'choice',
        choices: globalChoices,
        question: '丢失任务或活动所必需的物品',
        questionDescription: '例如，丢失学校作业、铅笔、书、工具、钱包、钥匙、文件、眼镜、手机等',
      },
    },
    {
      id: '8',
      form: {
        type: 'choice',
        choices: globalChoices,
        question: '容易被外界的刺激分神',
        questionDescription: '若为年龄较大的青少年，可能是容易产生一些不相关的想法',
      },
    },
    {
      id: '9',
      form: {
        type: 'choice',
        choices: globalChoices,
        question: '在日常活动中忘记事情',
        questionDescription:
          '例如，忘记做家务、外出办事，若为年龄较大的青少年，可能是忘记回电话、付账单、约会',
      },
    },
    {
      id: '.subtitle2',
      form: {
        type: 'subtitle',
        level: 4,
        title: '关于多动、冲动',
      },
    },
    {
      id: '10',
      form: {
        type: 'choice',
        choices: globalChoices,
        question: '手脚动个不停或在座位上扭动',
        questionDescription: '',
      },
    },
    {
      id: '11',
      form: {
        type: 'choice',
        choices: globalChoices,
        question: '当被期待坐在座位上时却离座',
        questionDescription: '例如，离开教室或是在其他情况下需要保持原地的位置',
      },
    },
    {
      id: '12',
      form: {
        type: 'choice',
        choices: globalChoices,
        question: '在不适当的场合跑来跑去或爬上爬下',
        questionDescription: '若为青少年，可仅表现为感到坐立不安',
      },
    },
    {
      id: '13',
      form: {
        type: 'choice',
        choices: globalChoices,
        question: '很难安静地玩耍或从事休闲活动',
        questionDescription: '例如，吵吵闹闹的，总要发出声音',
      },
    },
    {
      id: '14',
      form: {
        type: 'choice',
        choices: globalChoices,
        question: '一直“忙个不停”，好像“被发动机驱动着”',
        questionDescription:
          '例如，餐厅、会议中无法长时间保持不动，不能消停，可能被他人感受为坐立不安或难以跟上',
      },
    },
    {
      id: '15',
      form: {
        type: 'choice',
        choices: globalChoices,
        question: '讲话过多',
        questionDescription: '例如，多言多语，一直说个不停',
      },
    },
    {
      id: '16',
      form: {
        type: 'choice',
        choices: globalChoices,
        question: '在提问还没有讲完之前就把答案脱口而出',
        questionDescription: '例如，抢话、抢答;不能等待交谈的顺序',
      },
    },
    {
      id: '17',
      form: {
        type: 'choice',
        choices: globalChoices,
        question: '在排队等待时，难以等待轮到他/她',
        questionDescription: '',
      },
    },
    {
      id: '18',
      form: {
        type: 'choice',
        choices: globalChoices,
        question: '打断或侵扰他人',
        questionDescription:
          '例如，插入别人的对话、游戏或活动;没有询问或未经允许就开始使用他人的东西;对于青少年，则可能是侵扰或接管他人正在做的事情',
      },
    },
    {
      id: '.subtitle3',
      form: {
        type: 'subtitle',
        level: 4,
        title: '关于对立、违抗',
      },
    },
    {
      id: '19',
      form: {
        type: 'choice',
        choices: globalChoices,
        question: '发脾气',
        questionDescription: '',
      },
    },
    {
      id: '20',
      form: {
        type: 'choice',
        choices: globalChoices,
        question: '与大人争论',
        questionDescription: '',
      },
    },
    {
      id: '21',
      form: {
        type: 'choice',
        choices: globalChoices,
        question: '倾向于对抗或拒绝遵守大人的要求与规定',
        questionDescription: '',
      },
    },
    {
      id: '22',
      form: {
        type: 'choice',
        choices: globalChoices,
        question: '故意惹恼别人',
        questionDescription: '',
      },
    },
    {
      id: '23',
      form: {
        type: 'choice',
        choices: globalChoices,
        question: '自己有错误或不当行为却怪罪于别人',
        questionDescription: '',
      },
    },
    {
      id: '24',
      form: {
        type: 'choice',
        choices: globalChoices,
        question: '敏感的，容易被惹恼的',
        questionDescription: '',
      },
    },
    {
      id: '25',
      form: {
        type: 'choice',
        choices: globalChoices,
        question: '愤怒的和怨恨的',
        questionDescription: '',
      },
    },
    {
      id: '26',
      form: {
        type: 'choice',
        choices: globalChoices,
        question: '怀恨的或有报复心的',
        questionDescription: '',
      },
    },
  ],
  result: (datas) => {
    const results: number[] = [0];
    for (let i = 1; i <= 26; i++) {
      if (datas[i] === void 0) {
        return {
          ok: false,
          require: i.toString(),
        };
      }
      results.push(datas[i]);
    }
    let partA = 0,
      partB = 0,
      partC = 0;
    for (let i = 1; i <= 9; i++) {
      partA += results[i];
    }
    for (let i = 10; i <= 18; i++) {
      partB += results[i];
    }
    for (let i = 19; i <= 26; i++) {
      partC += results[i];
    }
    const total = partA + partB + partC;
    const getStatue = (avg: number) => {
      if (avg <= 1) {
        return '正常';
      }
      if (avg < 2) {
        return '轻度异常';
      }
      return '异常';
    };
    return {
      ok: true,
      title: getStatue(total / 26),
      description: `注意力：${getStatue(partA / 9)}
多动：${getStatue(partB / 9)}
对抗：${getStatue(partC / 8)}`,
      score: [
        {
          type: 'pointer',
          value: total,
          part: [
            { start: 0, end: 26, color: '#007700' },
            { start: 26, end: 52, color: '#ACAC00' },
            { start: 52, end: 78, color: '#FF0000' },
          ],
        },
        {
          type: 'pointer',
          value: partA,
          part: [
            { start: 0, end: 9, color: '#007700' },
            { start: 9, end: 18, color: '#ACAC00' },
            { start: 18, end: 27, color: '#FF0000' },
          ],
        },
        {
          type: 'pointer',
          value: partB,
          part: [
            { start: 0, end: 9, color: '#007700' },
            { start: 9, end: 18, color: '#ACAC00' },
            { start: 18, end: 27, color: '#FF0000' },
          ],
        },
        {
          type: 'pointer',
          value: partC,
          part: [
            { start: 0, end: 8, color: '#007700' },
            { start: 8, end: 16, color: '#ACAC00' },
            { start: 16, end: 24, color: '#FF0000' },
          ],
        },
      ],
    };
  },
  tags: ['祂评', '儿童', '青少年', 'ADHD'],
};
export default asrsA;
