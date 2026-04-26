import type { Scale } from '@/types/form';

const globalChoices = ['是', '否'] as const;

const listNames = ['S', 'R', 'B', 'L', 'S'];
const listTitle = ['感觉', '交往', '运动', '语言', '自理'];

const resultMap: [number, number, number, number, number][] = [
  [0, 0, 4, 0, 0],
  [0, 0, 0, 0, 2],
  [4, 0, 0, 0, 0],
  [0, 0, 0, 1, 0],
  [0, 0, 2, 0, 0],
  [2, 0, 0, 0, 0],
  [0, 2, 0, 0, 0],
  [0, 0, 0, 3, 0],
  [0, 0, 3, 0, 0],
  [3, 0, 0, 0, 0],
  [0, 0, 0, 4, 0],
  [0, 0, 2, 0, 0],
  [0, 3, 0, 0, 0],
  [0, 0, 0, 0, 3],
  [0, 0, 0, 2, 0],
  [0, 0, 4, 0, 0],
  [0, 3, 0, 0, 0],
  [0, 0, 0, 2, 0],
  [0, 0, 0, 0, 4],
  [0, 0, 0, 1, 0],
  [3, 0, 0, 0, 0],
  [0, 0, 4, 0, 0],
  [0, 0, 0, 0, 3],
  [0, 4, 0, 0, 0],
  [0, 4, 0, 0, 0],
  [3, 0, 0, 0, 0],
  [0, 3, 0, 0, 0],
  [0, 2, 0, 0, 0],
  [0, 0, 0, 2, 0],
  [0, 0, 2, 0, 0],
  [0, 0, 0, 0, 2],
  [0, 0, 0, 3, 0],
  [0, 3, 0, 0, 0],
  [1, 0, 0, 0, 0],
  [0, 0, 2, 0, 0],
  [0, 0, 0, 0, 2],
  [0, 0, 0, 1, 0],
  [0, 4, 0, 0, 0],
  [4, 0, 0, 0, 0],
  [0, 0, 4, 0, 0],
  [0, 0, 0, 0, 1],
  [0, 0, 0, 2, 0],
  [0, 3, 0, 0, 0],
  [3, 0, 0, 0, 0],
  [0, 0, 0, 0, 1],
  [0, 0, 0, 3, 0],
  [0, 4, 0, 0, 0],
  [0, 0, 0, 4, 0],
  [0, 0, 0, 0, 2],
  [0, 0, 0, 0, 4],
  [0, 3, 0, 0, 0],
  [3, 0, 0, 0, 0],
  [0, 4, 0, 0, 0],
  [0, 2, 0, 0, 0],
  [0, 0, 0, 0, 1],
  [0, 0, 0, 3, 0],
  [4, 0, 0, 0, 0],
];

export const bai: Scale = {
  id: 'abc',
  name: '孤独症儿童行为评定量表 (ABC)',
  description:
    '孤独症儿童行为量表（ABC量表） 是目前国内应用最广泛的孤独症评估量表之一。ABC量表（Autism Behavior Checklist）由Krug于1978年编制，表中列出57项自闭症儿童的行为特征，包括感觉(Sensory)、交往(Relating)、躯体和物体使用 (Body and object use)、语言(Language)、社会生活自理(Social and self-help)五个方面，用于2-14岁儿童，由家长或老师评分。',
  questions: [
    {
      id: '1',
      form: {
        type: 'choice',
        question: '喜欢长时间的自身旋转',
        choices: globalChoices,
      },
    },
    {
      id: '2',
      form: {
        type: 'choice',
        question: '学会做一件简单的事，但很快就忘记',
        choices: globalChoices,
      },
    },
    {
      id: '3',
      form: {
        type: 'choice',
        question: '经常没有接触环境或进行交往的要求',
        choices: globalChoices,
      },
    },
    {
      id: '4',
      form: {
        type: 'choice',
        question: '往往不能接受简单的指令（如坐下、过来等）',
        choices: globalChoices,
      },
    },
    {
      id: '5',
      form: {
        type: 'choice',
        question: '不会玩玩具（如没完没了地转动、乱扔、揉等）',
        choices: globalChoices,
      },
    },
    {
      id: '6',
      form: {
        type: 'choice',
        question: '视觉辨别能力差（如对一种物体的特征、其大小、颜色、位置等的辨别能力差）',
        choices: globalChoices,
      },
    },
    {
      id: '7',
      form: {
        type: 'choice',
        question: '无交往性微笑（即不会与人点头、招呼、微笑）',
        choices: globalChoices,
      },
    },
    {
      id: '8',
      form: {
        type: 'choice',
        question: '代词运用的颠倒或混乱（你我分不清）',
        choices: globalChoices,
      },
    },
    {
      id: '9',
      form: {
        type: 'choice',
        question: '长时间地总拿着某种东西',
        choices: globalChoices,
      },
    },
    {
      id: '10',
      form: {
        type: 'choice',
        question: '似乎不在听人说话，以至有人怀疑他有听力问题',
        choices: globalChoices,
      },
    },
    {
      id: '11',
      form: {
        type: 'choice',
        question: '说话不合音调，无节奏',
        choices: globalChoices,
      },
    },
    {
      id: '12',
      form: {
        type: 'choice',
        question: '长时间摇摆身体',
        choices: globalChoices,
      },
    },
    {
      id: '13',
      form: {
        type: 'choice',
        question: '要去拿什么东西，但又不是身体所能达到的地方（即对自身与物体的距离估计不足）',
        choices: globalChoices,
      },
    },
    {
      id: '14',
      form: {
        type: 'choice',
        question: '对环境和日常生活规律的改变产生强烈反应',
        choices: globalChoices,
      },
    },
    {
      id: '15',
      form: {
        type: 'choice',
        question: '当与其他人在一起时，呼唤他的名字他没有反应',
        choices: globalChoices,
      },
    },
    {
      id: '16',
      form: {
        type: 'choice',
        question: '经常做出前冲、旋转、脚尖行走、手指轻掐轻弹等动作',
        choices: globalChoices,
      },
    },
    {
      id: '17',
      form: {
        type: 'choice',
        question: '对其他人的面部表情没有反应',
        choices: globalChoices,
      },
    },
    {
      id: '18',
      form: {
        type: 'choice',
        question: '说话时很少用“是”或“我”等词',
        choices: globalChoices,
      },
    },
    {
      id: '19',
      form: {
        type: 'choice',
        question: '有某一方面的特殊能力，似乎与智力低不相符合',
        choices: globalChoices,
      },
    },
    {
      id: '20',
      form: {
        type: 'choice',
        question: '不能执行简单的含有介词语句的指令（如把球放在盒子上或放在盒子里）',
        choices: globalChoices,
      },
    },
    {
      id: '21',
      form: {
        type: 'choice',
        question: '有时对很大的声音不产生吃惊的反应（可能让人想到儿童是聋子）',
        choices: globalChoices,
      },
    },
    {
      id: '22',
      form: {
        type: 'choice',
        question: '经常拍打手',
        choices: globalChoices,
      },
    },
    {
      id: '23',
      form: {
        type: 'choice',
        question: '发大脾气或经常发点脾气',
        choices: globalChoices,
      },
    },
    {
      id: '24',
      form: {
        type: 'choice',
        question: '主动回避与别人的眼光接触',
        choices: globalChoices,
      },
    },
    {
      id: '25',
      form: {
        type: 'choice',
        question: '拒绝别人接触或拥抱',
        choices: globalChoices,
      },
    },
    {
      id: '26',
      form: {
        type: 'choice',
        question: '有时对很痛苦的刺激如摔伤、割破或注射不引起反应',
        choices: globalChoices,
      },
    },
    {
      id: '27',
      form: {
        type: 'choice',
        question: '身体表现很僵硬很难抱住',
        choices: globalChoices,
      },
    },
    {
      id: '28',
      form: {
        type: 'choice',
        question: '当抱着他时，感到他肌肉松弛（即使他不紧贴着抱他的人）',
        choices: globalChoices,
      },
    },
    {
      id: '29',
      form: {
        type: 'choice',
        question: '以姿势、手势表示所渴望得到的东西（而不倾向于用语言表示）',
        choices: globalChoices,
      },
    },
    {
      id: '30',
      form: {
        type: 'choice',
        question: '常用脚尖走路',
        choices: globalChoices,
      },
    },
    {
      id: '31',
      form: {
        type: 'choice',
        question: '用咬人、撞人、踢人等行为伤害他人',
        choices: globalChoices,
      },
    },
    {
      id: '32',
      form: {
        type: 'choice',
        question: '不断地重复短句',
        choices: globalChoices,
      },
    },
    {
      id: '33',
      form: {
        type: 'choice',
        question: '游戏时不模仿其他儿童',
        choices: globalChoices,
      },
    },
    {
      id: '34',
      form: {
        type: 'choice',
        question: '当强光直接照射眼睛时常常不眨眼',
        choices: globalChoices,
      },
    },
    {
      id: '35',
      form: {
        type: 'choice',
        question: '以撞头、咬手等行为自伤',
        choices: globalChoices,
      },
    },
    {
      id: '36',
      form: {
        type: 'choice',
        question: '想要什么东西不能等待（一想要什么就马上要得到）',
        choices: globalChoices,
      },
    },
    {
      id: '37',
      form: {
        type: 'choice',
        question: '不能指出 5 个以上物体的名称',
        choices: globalChoices,
      },
    },
    {
      id: '38',
      form: {
        type: 'choice',
        question: '不能发展任何友谊（不会和小朋友来往交朋友）',
        choices: globalChoices,
      },
    },
    {
      id: '39',
      form: {
        type: 'choice',
        question: '有许多声音的时候常常捂耳朵',
        choices: globalChoices,
      },
    },
    {
      id: '40',
      form: {
        type: 'choice',
        question: '经常旋转碰撞物体',
        choices: globalChoices,
      },
    },
    {
      id: '41',
      form: {
        type: 'choice',
        question: '在训练大小便方面有困难（不会控制大小便）',
        choices: globalChoices,
      },
    },
    {
      id: '42',
      form: {
        type: 'choice',
        question: '一天只能提出 5 个以内的要求',
        choices: globalChoices,
      },
    },
    {
      id: '43',
      form: {
        type: 'choice',
        question: '经常受到惊吓或非常焦虑不安',
        choices: globalChoices,
      },
    },
    {
      id: '44',
      form: {
        type: 'choice',
        question: '在正常光线下斜眼、闭眼、皱眉',
        choices: globalChoices,
      },
    },
    {
      id: '45',
      form: {
        type: 'choice',
        question: '不是经常被帮助的话，不会自己给自己穿衣',
        choices: globalChoices,
      },
    },
    {
      id: '46',
      form: {
        type: 'choice',
        question: '一遍遍重复一些声音或词',
        choices: globalChoices,
      },
    },
    {
      id: '47',
      form: {
        type: 'choice',
        question: '瞪着眼看人，好象要看穿似的',
        choices: globalChoices,
      },
    },
    {
      id: '48',
      form: {
        type: 'choice',
        question: '重复别人的问话或回答',
        choices: globalChoices,
      },
    },
    {
      id: '49',
      form: {
        type: 'choice',
        question: '经常不能意识所处的环境，并且可能对危险的环境不在意',
        choices: globalChoices,
      },
    },
    {
      id: '50',
      form: {
        type: 'choice',
        question:
          '特别喜欢摆弄着迷于单调的东西或游戏、活动等（如来回地走或跑，没完没了地蹦、跳、拍、敲）',
        choices: globalChoices,
      },
    },
    {
      id: '51',
      form: {
        type: 'choice',
        question: '对周围东西喜欢嗅、摸或尝',
        choices: globalChoices,
      },
    },
    {
      id: '52',
      form: {
        type: 'choice',
        question: '对生人常无视觉反应（对来人不看）',
        choices: globalChoices,
      },
    },
    {
      id: '53',
      form: {
        type: 'choice',
        question:
          '纠缠在一些复杂的仪式行为上，就像缠在魔圈里（如走路一定要走一定的路线；饭前或睡前或干什么事前一定要把什么东西摆在什么地方或做什么动作，否则就不睡不吃）',
        choices: globalChoices,
      },
    },
    {
      id: '54',
      form: {
        type: 'choice',
        question: '经常毁坏东西（如家具、家里的一切用具很快就弄坏了）',
        choices: globalChoices,
      },
    },
    {
      id: '55',
      form: {
        type: 'choice',
        question: '在2岁以前就发现该儿童发育延迟',
        choices: globalChoices,
      },
    },
    {
      id: '56',
      form: {
        type: 'choice',
        question: '在日常生活中至少用 15 个但又不超过 30 个短句进行交往（注：不到 15 句也选是）',
        choices: globalChoices,
      },
    },
    {
      id: '57',
      form: {
        type: 'choice',
        question: '长期凝视一个地方（呆呆地看一处）',
        choices: globalChoices,
      },
    },
  ],
  result: (datas) => {
    const result = [0, 0, 0, 0, 0];

    for (let i = 1; i <= 57; i++) {
      if (datas[i] === void 0) {
        return {
          ok: false,
          require: String(i),
        };
      }
      if (datas[i] === 0) {
        for (let j = 0; j < 5; j++) {
          result[j] += resultMap[i - 1][j];
        }
      }
    }
    const sum = result.reduce((a, b) => a + b, 0);
    return {
      ok: true,
      title: sum >= 31 ? (sum >= 62 ? '明显自闭症迹象' : '怀疑患有自闭症') : '未发现自闭症迹象',
      description:
        `总分：${sum}\n` +
        [0, 1, 2, 3, 4].map((i) => `${listTitle[i]}(${listNames[i]})：${result[i]}`).join('\n'),
      score: [
        {
          type: 'pointer',
          value: sum,
          part: [
            { start: 0, end: 31, color: '#009400' },
            { start: 31, end: 62, color: '#ff7b00' },
            { start: 62, end: 157, color: '#FF0000' },
          ],
        },
      ],
    };
  },

  tags: ['祂评', '孤独症', '儿童'],
};
export default bai;
