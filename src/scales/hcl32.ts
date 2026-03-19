import type { Scale } from '@/types/form';

const globalChoices = ['是', '否'] as const;

export const hcl32: Scale = {
  id: 'hcl32',
  name: '轻躁狂症自评表(HCL-32)',
  description:
    '轻躁狂症状评定量表HCL-32属于自评量表，由32项轻躁狂症状组成，在各综合医院门诊中测试结果显示信效度较好。',
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
      if (!(i in datas)) {
        return {
          ok: false,
          require: String(i),
        };
      }
      n += Number(datas[i]) === 0 ? 1 : 0;
    }
    return {
      ok: true,
      title: n >= 14 ? '筛查阳性（轻躁狂症状较多）' : '筛查阴性（轻躁狂症状较少）',
      description: `积分：${n}/32`,
      score: [
        {
          type: 'pointer',
          value: n,
          part: [
            { start: 0, end: 14, color: '#009400' },
            { start: 14, end: 32, color: '#FF0000' },
          ],
        },
      ],
    };
  },

  tags: ['躁狂', '自评', '双相'],
};
export default hcl32;
