import type { Scale } from '@/types/form';

const globalChoices = ['无症状', '轻', '中', '重', '极重'] as const;
const resultMap = {
  sa: [7, 8, 9, 10, 11, 12, 13],
  pa: [1, 2, 3, 4, 5, 6, 14],
} as const;
const nameMap = {
  sa: '躯体性焦虑',
  pa: '精神性焦虑',
} as const;
export const hama: Scale = {
  id: 'hama',
  name: '汉密尔顿焦虑量表 (HAMA)',
  description:
    '汉密尔顿焦虑量表（Hamilton Anxiety Scale，HAMA）由Hamilton于1959年编制。最早是精神科临床中常用的量表之一，包括14个项目。《CCMD-3中国精神疾病诊断标准》将其列为焦虑症的重要诊断工具。HAMA应由经过训练的2名评定员进行联合检查，一般采用交谈和观察的方法，待检查结束后，2名评定员独立评分',
  questions: [
    {
      id: '1',
      form: {
        type: 'choice',
        question: '焦虑心境：担心、担忧，感到有最坏的事情将要发生，容易被激惹',
        choices: globalChoices,
      },
    },
    {
      id: '2',
      form: {
        type: 'choice',
        question: '紧张：紧张感、易疲劳、不能放松，情绪反应，易哭、颤抖、感到不安',
        choices: globalChoices,
      },
    },
    {
      id: '3',
      form: {
        type: 'choice',
        question: '害怕：害怕黑暗、陌生人、一人独处、动物、乘车或旅行及人多的场合',
        choices: globalChoices,
      },
    },
    {
      id: '4',
      form: {
        type: 'choice',
        question: '失眠：难以入睡、易醒、睡得不深、多梦、梦魇、夜惊、睡醒后感到疲倦',
        choices: globalChoices,
      },
    },
    {
      id: '5',
      form: {
        type: 'choice',
        question: '认知功能：或称记忆力、注意力障碍。注意力不能集中，记忆力差',
        choices: globalChoices,
      },
    },
    {
      id: '6',
      form: {
        type: 'choice',
        question: '抑郁心境：丧失兴趣、对以往爱好的事务缺乏快感、忧郁、早醒、昼重夜轻',
        choices: globalChoices,
      },
    },
    {
      id: '7',
      form: {
        type: 'choice',
        question:
          '躯体性焦虑（肌肉系统症状）：肌肉酸痛、活动不灵活、肌肉经常抽动、肢体抽动、牙齿打颤、声音发抖',
        choices: globalChoices,
      },
    },
    {
      id: '8',
      form: {
        type: 'choice',
        question: '感觉系统症状：视物模糊、发冷发热、软弱无力感、浑身刺痛',
        choices: globalChoices,
      },
    },
    {
      id: '9',
      form: {
        type: 'choice',
        question: '心血管系统症状：心动过速、心悸、胸痛、血管跳动感、昏倒感、心博脱漏',
        choices: globalChoices,
      },
    },
    {
      id: '10',
      form: {
        type: 'choice',
        question: '呼吸系统症状：时常感到胸闷、窒息感、叹息、呼吸困难',
        choices: globalChoices,
      },
    },
    {
      id: '11',
      form: {
        type: 'choice',
        question:
          '胃肠消化道症状：吞咽困难、嗳气、食欲不佳、消化不良（进食后腹痛、胃部烧灼痛、腹胀、恶心、胃部饱胀感）、肠鸣、腹泻、体重减轻、便秘',
        choices: globalChoices,
      },
    },
    {
      id: '12',
      form: {
        type: 'choice',
        question: '生殖、泌尿系统症状：尿意频繁、尿急、停经、性冷淡、过早射精、勃起不能、阳痿',
        choices: globalChoices,
      },
    },
    {
      id: '13',
      form: {
        type: 'choice',
        question:
          '植物神经系统症状：口干、潮红、苍白、易出汗、易起"鸡皮疙瘩"、紧张性头痛、毛发竖起',
        choices: globalChoices,
      },
    },
    {
      id: '14',
      form: {
        type: 'choice',
        question:
          '与人谈话时的行为表现：\n一般表现（紧张、不能松弛、忐忑不安、咬手指、紧握拳、摸弄手帕、面肌抽动、不停顿足、手发抖、皱眉、表情僵硬、肌张力高、叹息样呼吸、面色苍白）\n生理表现（吞咽、频繁打呃、安静时心率快、呼吸加快、腱反射亢进、震颤、瞳孔放大、眼睑跳动、易出汗、眼球突出）',
        choices: globalChoices,
      },
    },
  ],
  result: (datas) => {
    let n = 0;
    const dataArray: number[] = [];
    for (let i = 1; i <= 14; i++) {
      if (!(i in datas)) {
        return {
          ok: false,
          require: String(i),
        };
      }
      dataArray[i] = Number(datas[i]);
      n += dataArray[i];
    }
    const results = {
      sa: 0,
      pa: 0,
    };
    for (const key in resultMap) {
      for (const i of resultMap[key as 'sa' | 'pa']) {
        results[key as 'sa' | 'pa'] += dataArray[i];
      }
    }

    return {
      ok: true,
      title:
        n < 7
          ? '无焦虑倾向'
          : n < 14
            ? '可能有焦虑'
            : n < 21
              ? '肯定有焦虑'
              : n < 29
                ? '肯定有明显焦虑'
                : '可能为重焦虑',
      description: `总分：${n}分，${Object.keys(resultMap)
        .map((key) => `${nameMap[key as never]}：${results[key as never]}分`)
        .join('，')}`,
      score: [
        {
          type: 'pointer',
          value: n,
          part: [
            { start: 0, end: 7, color: '#009400' },
            { start: 7, end: 14, color: '#ACAC00' },
            { start: 14, end: 21, color: '#FF7500' },
            { start: 21, end: 29, color: '#FF0000' },
            { start: 29, end: 56, color: '#8B0000' },
          ],
        },
      ],
    };
  },

  tags: ['祂评', '焦虑'],
};
export default hama;
