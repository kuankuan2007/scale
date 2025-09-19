import type { Scale } from '@/types/form';

export const hamd: Scale = {
  id: 'hamd',
  name: '汉密尔顿抑郁量表 (HAMD)',
  description:
    '汉密顿抑郁量表（Hamilton Depression Scale，HAMD）是由Hamilton于1960年编制，是临床上评定抑郁状态时应用得最为普遍的量表。本量表有17项、21项和24项等3种版本。这项量表由经过培训的两名评定者对患者进行HAMD联合检查，一般采用交谈与观察的方式，检查结束后，两名评定者分别独立评分',
  questions: [
    {
      id: '1',
      form: {
        type: 'choice',
        question: '抑郁情绪',
        choices: [
          '无',
          '只在问到时才诉述',
          '在言语中自发地表达',
          '不用言语也可从表情、姿势、声音或欲哭中流露出这种情绪',
          '病人的自发和非自发语言（表情、动作），几乎完全表现为这种情绪',
        ],
      },
    },
    {
      id: '2',
      form: {
        type: 'choice',
        question: '有罪感',
        choices: [
          '无',
          '责备自己，感到自己已连累他人',
          '认为自己犯了罪，或反复思考以往的过失和错误',
          '认为目前的疾病，是对自己错误的惩罚，或有罪恶妄想',
          '罪恶妄想伴有指责或威胁性幻觉',
        ],
      },
    },
    {
      id: '3',
      form: {
        type: 'choice',
        question: '自杀',
        choices: [
          '无',
          '觉得活着没有意义',
          '希望自己已经死去，或常想到与死有关的事',
          '消极观念（自杀念头）',
          '有严重自杀行为',
        ],
      },
    },
    {
      id: '4',
      form: {
        type: 'choice',
        question: '入睡困难',
        choices: ['无', '主诉有时有入睡困难，即上床后半小时仍不能入睡', '主诉每晚均有入睡困难'],
      },
    },
    {
      id: '5',
      form: {
        type: 'choice',
        question: '睡眠不深',
        choices: ['无', '睡眠浅多恶梦', '半夜（晚上12点以前）曾醒来（不包括上厕所）'],
      },
    },
    {
      id: '6',
      form: {
        type: 'choice',
        question: '早醒',
        choices: ['无', '有早醒，比平时早醒1小时，但能重新入睡', '早醒后无法重新入睡'],
      },
    },
    {
      id: '7',
      form: {
        type: 'choice',
        question: '工作和兴趣',
        choices: [
          '无异常',
          '提问时才诉述',
          '自发地直接或间接表达对活动、工作或学习失去兴趣，如感到没精打采，犹豫不决，不能坚持或需强迫自己去工作或活动',
          '病室劳动或娱乐不满3小时',
          '因目前的疾病而停止工作，住院患者不参加任何活动或者没有他人帮助便不能完成病室日常事务',
        ],
      },
    },
    {
      id: '8',
      form: {
        type: 'choice',
        question: '迟缓：指思维和语言缓慢，注意力难以集中，主动性减退',
        choices: [
          '无',
          '精神检查中发现轻度迟缓',
          '精神检查中发现明显迟缓',
          '精神检查进行困难',
          '完全不能回答问题（木僵）',
        ],
      },
    },
    {
      id: '9',
      form: {
        type: 'choice',
        question: '激越',
        choices: [
          '无',
          '检查时表现的有些心神不定',
          '明显的心神不定或小动作多',
          '不能静坐，检查中曾站立',
          '搓手，咬手指，扯头发，咬嘴唇',
        ],
      },
    },
    {
      id: '10',
      form: {
        type: 'choice',
        question: '精神性焦虑',
        choices: ['无', '问到时才诉述', '自发地表达', '表情和言谈流露明显忧虑', '明显惊恐'],
      },
    },
    {
      id: '11',
      form: {
        type: 'choice',
        question:
          '躯体性焦虑：指焦虑的生理症状，包括口干、腹胀、腹泻、打呃、腹绞痛、心悸、头痛、过度换气和叹息、以及尿频和出汗等',
        choices: [
          '无',
          '轻度',
          '中度，有肯定的上述症状',
          '重度，上述症状严重，影响生活或需加处理',
          '严重影响生活和活动',
        ],
      },
    },
    {
      id: '12',
      form: {
        type: 'choice',
        question: '胃肠道症状',
        choices: [
          '无',
          '食欲减退，但不需他人鼓励便自行进食',
          '进食需他人催促或请求或需要应用泻药或助消化药',
        ],
      },
    },
    {
      id: '13',
      form: {
        type: 'choice',
        question: '全身症状',
        choices: [
          '无',
          '四肢、背部或颈部沉重感，背痛，头痛，肌肉疼痛，全身乏力或疲倦',
          '上述症状明显',
        ],
      },
    },
    {
      id: '14',
      form: {
        type: 'choice',
        question: '性症状：指性欲减退、月经紊乱等',
        choices: ['无症状，或者不能肯定，或者该项对被评者不适合', '轻度', '重度'],
      },
    },
    {
      id: '15',
      form: {
        type: 'choice',
        question: '疑病',
        choices: ['无', '对身体过分关注', '反复考虑健康问题', '有疑病妄想', '伴幻觉的疑病妄想'],
      },
    },
    {
      id: '16',
      form: {
        type: 'choice',
        question: '体重减轻',
        choices: ['无', '一周内体重减轻1斤以上', '一周内体重减轻2斤以上'],
      },
    },
    {
      id: '17',
      form: {
        type: 'choice',
        question: '自知力',
        choices: [
          '知道自己有病，表现为忧郁',
          '知道自己有病，但归于伙食太差、环境问题、工作过忙、病毒感染或需要休息等',
          '完全否认有病',
        ],
      },
    },
    {
      id: '18',
      form: {
        type: 'choice',
        question: '日夜变化（如果症状在早晨或傍晚加重，先指出哪一种，然后按其变化程度评分）',
        choices: ['无', '轻度变化', '重度变化'],
      },
    },
    {
      id: '19',
      form: {
        type: 'choice',
        question: '人格解体或现实解体：指非真实感或虚无妄想',
        choices: ['无', '问及时才诉述', '自发诉述', '有虚无妄想', '伴幻觉的虚无妄想'],
      },
    },
    {
      id: '20',
      form: {
        type: 'choice',
        question: '偏执症状',
        choices: [
          '无',
          '有猜疑',
          '有关系观念',
          '有关系妄想或被害妄想',
          '伴有幻觉的关系妄想或被害妄想',
        ],
      },
    },
    {
      id: '21',
      form: {
        type: 'choice',
        question: '强迫症状：指强迫思维和强迫行为',
        choices: ['无', '问及时才诉述', '自发诉述'],
      },
    },
    {
      id: '22',
      form: {
        type: 'choice',
        question: '能力减退感',
        choices: [
          '无',
          '仅于提问时方引出主观体验',
          '病人主动表示能力减退感',
          '需鼓励、指导和安慰才能完成病室日常事务或个人卫生',
          '穿衣、梳洗、进食、铺床或个人卫生均需他人协助',
        ],
      },
    },
    {
      id: '23',
      form: {
        type: 'choice',
        question: '绝望感',
        choices: [
          '无',
          '有时怀疑"情况是否会好转"，但解释后能接受',
          '持续感到"没有希望"，但解释后能接受',
          '对未来感到灰心、悲观和绝望，解释后不能排除',
          '自动反复诉述"我的病不会好了"或诸如此类的情况',
        ],
      },
    },
    {
      id: '24',
      form: {
        type: 'choice',
        question: '自卑感',
        choices: [
          '无',
          '仅在询问时诉述有自卑感（我不如他人）',
          '自动诉述有自卑感（我不如他人）',
          '病人主动诉述："我一无是处"或"低人一等"，与评2分者只是程度的差别',
          '自卑感达妄想的程度，例如"我是废物"或类似情况',
        ],
      },
    },
  ],
  result: (datas) => {
    let n = 0;
    for (let i = 1; i <= 24; i++) {
      if (!(i in datas)) {
        return {
          ok: false,
          require: String(i),
        };
      }
      n += Number(datas[i]);
    }

    let level = '';
    if (n <= 7) {
      level = '正常';
    } else if (n <= 20) {
      level = '可能有抑郁症';
    } else if (n <= 35) {
      level = '肯定有抑郁症';
    } else {
      level = '严重抑郁症';
    }

    return {
      ok: true,
      title: level,
      description: `总分：${n}分`,
      score: [
        {
          type: 'pointer',
          value: n,
          part: [
            { start: 0, end: 8, color: '#009400' },
            { start: 8, end: 20, color: '#ACAC00' },
            { start: 20, end: 35, color: '#FF7500' },
            { start: 35, end: 76, color: '#FF0000' },
          ],
        },
      ],
    };
  },

  tags: ['祂评', '抑郁'],
};
export default hamd;
