import type { Scale } from '@/types/form';

export const brms: Scale = {
  id: 'brms',
  name: '贝克-拉范森躁狂量表 (BRMS)',
  description:
    '贝克-拉范森躁狂量表（Bech-Rafaelsen Mania Rating Scale，BRMS）由Bech和Rafaelsen于1978年编制，主要用于评估成年躁郁症患者或分裂情感性精神病患者的躁狂症状。',
  questions: [
    {
      id: '1',
      form: {
        type: 'choice',
        question: '动作',
        choices: [
          '无症状',
          '动作稍多，表情活跃',
          '动作多，姿势活跃',
          '动作极多，会谈时曾起立活动',
          '动个不停，虽予劝说仍坐不安宁',
        ],
      },
    },
    {
      id: '2',
      form: {
        type: 'choice',
        question: '言语',
        choices: ['无症状', '话较多', '话多，几乎无停顿', '很难打断', '无法打断'],
      },
    },
    {
      id: '3',
      form: {
        type: 'choice',
        question: '意念飘忽',
        choices: [
          '无症状',
          '描述、修饰或解释的词句过多',
          '内容稍散漫或离题，有意联、音联或双关语',
          '思维散漫无序',
          '思维不连贯，内容无法理解',
        ],
      },
    },
    {
      id: '4',
      form: {
        type: 'choice',
        question: '语音/喧闹程度',
        choices: [
          '无症状',
          '说话声音高',
          '大声说话，隔开一段距离仍能听到',
          '语音极高，夹带歌声或噪音',
          '呼喊或尖叫',
        ],
      },
    },
    {
      id: '5',
      form: {
        type: 'choice',
        question: '敌意/破坏行为',
        choices: [
          '无症状',
          '稍急躁或易激惹，能控制',
          '明显急躁，易激惹或易怒',
          '有威胁性行为，但能被安抚',
          '狂暴，冲动和破坏行为',
        ],
      },
    },
    {
      id: '6',
      form: {
        type: 'choice',
        question: '情绪',
        choices: [
          '无症状',
          '略高涨，乐观',
          '高涨，爱开玩笑，易笑',
          '明显高涨，洋洋自得',
          '极高涨，和环境不协调',
        ],
      },
    },
    {
      id: '7',
      form: {
        type: 'choice',
        question: '自我评价',
        choices: [
          '无症状',
          '略高',
          '高，常自诩自夸',
          '有不合实际的夸大观念',
          '有难以纠正的夸大妄想',
        ],
      },
    },
    {
      id: '8',
      form: {
        type: 'choice',
        question: '接触',
        choices: [
          '无症状',
          '稍有爱管闲事或指手划脚倾向',
          '爱管闲事，好争辩',
          '爱发号施令，指挥他人',
          '专横，与环境不协调',
        ],
      },
    },
    {
      id: '9',
      form: {
        type: 'choice',
        question: '睡眠',
        choices: ['无症状', '睡眠时间减少25％', '睡眠时间减少50％', '睡眠时间减少75％', '整夜不眠'],
      },
    },
    {
      id: '10',
      form: {
        type: 'choice',
        question: '性兴趣',
        choices: [
          '无症状',
          '兴趣稍增强，有些轻浮言行',
          '性兴趣增强，有明显轻浮言行',
          '性兴趣显著增强，有严重调戏异性，或卖弄风情等言行',
          '整日专注于性活动',
        ],
      },
    },
    {
      id: '11',
      form: {
        type: 'choice',
        question: '工作',
        choices: [
          '无症状',
          '工作质量略有下降',
          '工作质量明显下降，工作时间争吵',
          '无法继续工作，或在医院内尚能参加活动数小时',
          '日常活动不能自理，或不能参加病房活动',
        ],
      },
    },
    {
      id: '12',
      form: {
        type: 'choice',
        question: '幻觉',
        choices: ['无症状', '偶有或可疑', '肯定存在，每天≥3次', '经常出现', '行为受幻觉支配'],
      },
    },
    {
      id: '13',
      form: {
        type: 'choice',
        question: '妄想',
        choices: [
          '无症状',
          '偶有或可疑（不包括夸大妄想，下同）',
          '妄想肯定，可用情绪解释',
          '妄想肯定，难以用情绪解释',
          '出现幻觉的妄想',
        ],
      },
    },
  ],
  result: (datas) => {
    let n = 0;
    for (let i = 1; i <= 13; i++) {
      if (!(i in datas) || datas[i] === void 0) {
        return {
          ok: false,
          require: String(i),
        };
      }
      n += Number(datas[i]);
    }
    return {
      ok: true,
      title:
        n <= 5 ? '无明显躁狂症状' : `有(${n <= 10 ? '轻度' : n <= 22 ? '中度' : '重度'})躁狂症状`,
      description: `总分${n}`,
      score: [
        {
          type: 'pointer',
          value: n,
          part: [
            { start: 0, end: 5.5, color: '#007700' },
            { start: 5.5, end: 10.5, color: '#ACAC00' },
            { start: 10.5, end: 22.5, color: '#ff7b00' },
            { start: 22.5, end: 52, color: '#FF0000' },
          ],
        },
      ],
    };
  },

  tags: ['躁狂', '祂评', '双相'],
};
export default brms;
