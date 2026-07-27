import type { Scale } from '@/types/form';

const globalChoices = ['是', '否'] as const;

export const hcl32: Scale = {
  id: 'hcl32',
  name: '轻躁狂症状清单 (HCL-32)',
  description:
    '轻躁狂症状清单（Hypomania Checklist-32，HCL-32）由 Jules Angst、Thomas D. Meyer 等于2005年编制，共32项，用于筛查既往轻躁狂症状，辅助识别双相谱系障碍。筛查结果不能单独用于诊断，须结合情绪发作史、持续时间、功能变化及专业评估综合判断。',
  refer: [
    {
      title: 'The HCL-32: Towards a Self-assessment Tool for Hypomanic Symptoms in Outpatients',
      url: 'https://doi.org/10.1016/j.jad.2005.05.011',
    },
  ],
  questions: [
    {
      id: '1',
      form: {
        type: 'choice',
        question: '我睡眠的时间比平时少',
        choices: globalChoices,
      },
    },
    {
      id: '2',
      form: {
        type: 'choice',
        question: '我感觉精力充沛或活动增多',
        choices: globalChoices,
      },
    },
    {
      id: '3',
      form: {
        type: 'choice',
        question: '我更自信',
        choices: globalChoices,
      },
    },
    {
      id: '4',
      form: {
        type: 'choice',
        question: '我更喜欢我的工作',
        choices: globalChoices,
      },
    },
    {
      id: '5',
      form: {
        type: 'choice',
        question: '我更喜欢交际(打更多的电话,更多外出)',
        choices: globalChoices,
      },
    },
    {
      id: '6',
      form: {
        type: 'choice',
        question: '我想旅行并且确实旅行了很多次',
        choices: globalChoices,
      },
    },
    {
      id: '7',
      form: {
        type: 'choice',
        question: '我倾向于开快点开车时或者承担更大的风险',
        choices: globalChoices,
      },
    },
    {
      id: '8',
      form: {
        type: 'choice',
        question: '我花更多的钱或者太多的钱',
        choices: globalChoices,
      },
    },
    {
      id: '9',
      form: {
        type: 'choice',
        question: '我在日常生活中更冒险',
        choices: globalChoices,
      },
    },
    {
      id: '10',
      form: {
        type: 'choice',
        question: '我活动量会增多',
        choices: globalChoices,
      },
    },
    {
      id: '11',
      form: {
        type: 'choice',
        question: '我计划更多的活动或项目',
        choices: globalChoices,
      },
    },
    {
      id: '12',
      form: {
        type: 'choice',
        question: '我有更多的想法,更有创造力，才思敏捷',
        choices: globalChoices,
      },
    },
    {
      id: '13',
      form: {
        type: 'choice',
        question: '我不再害羞，不再前怕狼后怕虎',
        choices: globalChoices,
      },
    },
    {
      id: '14',
      form: {
        type: 'choice',
        question: '我穿得更五彩缤纷、更奢侈的衣服/化妆',
        choices: globalChoices,
      },
    },
    {
      id: '15',
      form: {
        type: 'choice',
        question: '我想接触很多人，并的确认识了更多的人',
        choices: globalChoices,
      },
    },
    {
      id: '16',
      form: {
        type: 'choice',
        question: '我更感兴趣的是,性,或增加性欲',
        choices: globalChoices,
      },
    },
    {
      id: '17',
      form: {
        type: 'choice',
        question: '我更喜欢找异性聊天，或更频繁的性行为',
        choices: globalChoices,
      },
    },
    {
      id: '18',
      form: {
        type: 'choice',
        question: '我更加健谈',
        choices: globalChoices,
      },
    },
    {
      id: '19',
      form: {
        type: 'choice',
        question: '我思维更加敏捷',
        choices: globalChoices,
      },
    },
    {
      id: '20',
      form: {
        type: 'choice',
        question: '当我讲话时我更爱讲笑话和/或开更多的玩笑',
        choices: globalChoices,
      },
    },
    {
      id: '21',
      form: {
        type: 'choice',
        question: '我更容易分心',
        choices: globalChoices,
      },
    },
    {
      id: '22',
      form: {
        type: 'choice',
        question: '我从事很多新事物',
        choices: globalChoices,
      },
    },
    {
      id: '23',
      form: {
        type: 'choice',
        question: '我的想法从一个话题跳到另一个话题',
        choices: globalChoices,
      },
    },
    {
      id: '24',
      form: {
        type: 'choice',
        question: '我感到做事情更加迅速和/或更容易',
        choices: globalChoices,
      },
    },
    {
      id: '25',
      form: {
        type: 'choice',
        question: '我更没有耐心和/或更容易急躁',
        choices: globalChoices,
      },
    },
    {
      id: '26',
      form: {
        type: 'choice',
        question: '我常常令他人疲惫不堪或恼怒',
        choices: globalChoices,
      },
    },
    {
      id: '27',
      form: {
        type: 'choice',
        question: '我进入更多的争吵',
        choices: globalChoices,
      },
    },
    {
      id: '28',
      form: {
        type: 'choice',
        question: '我的情绪激昂,更加乐观',
        choices: globalChoices,
      },
    },
    {
      id: '29',
      form: {
        type: 'choice',
        question: '我喝更多的咖啡或茶',
        choices: globalChoices,
      },
    },
    {
      id: '30',
      form: {
        type: 'choice',
        question: '我抽更多的烟',
        choices: globalChoices,
      },
    },
    {
      id: '31',
      form: {
        type: 'choice',
        question: '我喝更多的酒',
        choices: globalChoices,
      },
    },
    {
      id: '32',
      form: {
        type: 'choice',
        question: '我服用更多的药物(镇静剂、抗焦虑药、兴奋剂)',
        choices: globalChoices,
      },
    },
  ],
  result: (datas) => {
    let n = 0;
    for (let i = 1; i <= 32; i++) {
      if (!(i in datas) || datas[i] === void 0) {
        return {
          ok: false,
          require: String(i),
        };
      }
      n += Number(datas[i]) === 0 ? 1 : 0;
    }
    const positive = n >= 14;
    return {
      ok: true,
      title: positive ? '轻躁狂筛查阳性' : '轻躁狂筛查阴性',
      description: positive
        ? `共检出${n}/32项轻躁狂症状，达到阳性筛查界值（≥14项）。建议由精神科或心理专业人员结合既往情绪发作史进一步评估；本结果不等同于诊断。`
        : `共检出${n}/32项轻躁狂症状，未达到阳性筛查界值（≥14项）。本结果不排除相关问题，如有明显情绪波动或功能受损，建议进一步专业评估。`,
      score: [
        {
          type: 'pointer',
          value: n,
          part: [
            { start: 0, end: 14, color: '#007700' },
            { start: 14, end: 32, color: '#FF0000' },
          ],
        },
      ],
    };
  },

  tags: ['躁狂', '轻躁狂', '自评', '筛查', '双相'],
};
export default hcl32;
