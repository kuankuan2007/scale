import type { Scale } from '@/types/form';

const globalChoices = ['没有', '很轻', '中等', '偏重', '很重'] as const;

const resultMap = {
  somatization: [1, 4, 12, 27, 40, 42, 48, 49, 52, 53, 56, 58],
  obsessiveCompulsive: [3, 9, 10, 28, 38, 45, 46, 51, 55, 65],
  interpersonalSensitivity: [6, 21, 34, 36, 37, 41, 61, 69, 73],
  depression: [5, 14, 15, 20, 22, 26, 29, 30, 31, 32, 54, 71, 79],
  anxiety: [2, 17, 23, 33, 39, 57, 72, 78, 80, 86],
  hostility: [11, 24, 63, 67, 74, 81],
  phobicAnxiety: [13, 25, 47, 50, 70, 75, 82],
  paranoidIdeation: [8, 18, 43, 68, 76, 83],
  psychoticism: [7, 16, 35, 62, 77, 84, 85, 87, 88, 90],
  other: [19, 44, 59, 60, 64, 66, 89],
} as const;

const nameMap = {
  somatization: '躯体化',
  obsessiveCompulsive: ' 强迫',
  interpersonalSensitivity: '人际关系',
  depression: '抑郁',
  anxiety: '焦虑',
  hostility: '敌对',
  phobicAnxiety: '恐怖',
  paranoidIdeation: '偏执',
  psychoticism: '精神病性',
  other: '其他',
};

export const sds: Scale = {
  id: 'scl90',
  name: '症状自评量表 (SCL-90)',
  description:
    'SCL-90只是一个90题的症状校核表，其项目主要来自于精神病症状学，涉及感觉、思维、情感、行为、人际关系、生活习惯、饮食、睡眠等方面。主要目的是用于评定一个人是否有某种心理症状，及严重程度如何，临床上常用作精神科、咨询门诊的一个筛选量表。',
  questions: [
    {
      id: '1',
      form: {
        type: 'choice',
        question: '头痛',
        choices: globalChoices,
      },
    },
    {
      id: '2',
      form: {
        type: 'choice',
        question: '神经过敏，心中不踏实',
        choices: globalChoices,
      },
    },
    {
      id: '3',
      form: {
        type: 'choice',
        question: '头脑中有不必要的想法或字句盘旋',
        choices: globalChoices,
      },
    },
    {
      id: '4',
      form: {
        type: 'choice',
        question: '头昏或昏倒',
        choices: globalChoices,
      },
    },
    {
      id: '5',
      form: {
        type: 'choice',
        question: '对异性的兴趣减退',
        choices: globalChoices,
      },
    },
    {
      id: '6',
      form: {
        type: 'choice',
        question: '对旁人求全责备',
        choices: globalChoices,
      },
    },
    {
      id: '7',
      form: {
        type: 'choice',
        question: '感到别人能控制你的思想',
        choices: globalChoices,
      },
    },
    {
      id: '8',
      form: {
        type: 'choice',
        question: '责怪别人制造麻烦',
        choices: globalChoices,
      },
    },
    {
      id: '9',
      form: {
        type: 'choice',
        question: '忘性大',
        choices: globalChoices,
      },
    },
    {
      id: '10',
      form: {
        type: 'choice',
        question: '担心自己的衣饰整齐及仪态的端正',
        choices: globalChoices,
      },
    },
    {
      id: '11',
      form: {
        type: 'choice',
        question: '容易烦恼和激动',
        choices: globalChoices,
      },
    },
    {
      id: '12',
      form: {
        type: 'choice',
        question: '胸痛',
        choices: globalChoices,
      },
    },
    {
      id: '13',
      form: {
        type: 'choice',
        question: '害怕空旷的场所或街道',
        choices: globalChoices,
      },
    },
    {
      id: '14',
      form: {
        type: 'choice',
        question: '感到自己的精力下降，活动减慢',
        choices: globalChoices,
      },
    },
    {
      id: '15',
      form: {
        type: 'choice',
        question: '想结束自己的生命',
        choices: globalChoices,
      },
    },
    {
      id: '16',
      form: {
        type: 'choice',
        question: '听到旁人听不到的声音',
        choices: globalChoices,
      },
    },
    {
      id: '17',
      form: {
        type: 'choice',
        question: '发抖',
        choices: globalChoices,
      },
    },
    {
      id: '18',
      form: {
        type: 'choice',
        question: '感到大多数人都不可信任',
        choices: globalChoices,
      },
    },
    {
      id: '19',
      form: {
        type: 'choice',
        question: '胃口不好',
        choices: globalChoices,
      },
    },
    {
      id: '20',
      form: {
        type: 'choice',
        question: '容易哭泣',
        choices: globalChoices,
      },
    },
    {
      id: '21',
      form: {
        type: 'choice',
        question: '同异性相处时感到害羞不自在',
        choices: globalChoices,
      },
    },
    {
      id: '22',
      form: {
        type: 'choice',
        question: '感到受骗，中了圈套或有人想抓住自己',
        choices: globalChoices,
      },
    },
    {
      id: '23',
      form: {
        type: 'choice',
        question: '无缘无故地突然感到害怕',
        choices: globalChoices,
      },
    },
    {
      id: '24',
      form: {
        type: 'choice',
        question: '自己不能控制地大发脾气',
        choices: globalChoices,
      },
    },
    {
      id: '25',
      form: {
        type: 'choice',
        question: '怕单独出门',
        choices: globalChoices,
      },
    },
    {
      id: '26',
      form: {
        type: 'choice',
        question: '经常责怪自己',
        choices: globalChoices,
      },
    },
    {
      id: '27',
      form: {
        type: 'choice',
        question: '腰痛',
        choices: globalChoices,
      },
    },
    {
      id: '28',
      form: {
        type: 'choice',
        question: '感到难以完成任务',
        choices: globalChoices,
      },
    },
    {
      id: '29',
      form: {
        type: 'choice',
        question: '感到孤独',
        choices: globalChoices,
      },
    },
    {
      id: '30',
      form: {
        type: 'choice',
        question: '感到苦闷',
        choices: globalChoices,
      },
    },
    {
      id: '31',
      form: {
        type: 'choice',
        question: '过分担忧',
        choices: globalChoices,
      },
    },
    {
      id: '32',
      form: {
        type: 'choice',
        question: '对事物不感兴趣',
        choices: globalChoices,
      },
    },
    {
      id: '33',
      form: {
        type: 'choice',
        question: '感到害怕',
        choices: globalChoices,
      },
    },
    {
      id: '34',
      form: {
        type: 'choice',
        question: '我的感情容易受到伤害',
        choices: globalChoices,
      },
    },
    {
      id: '35',
      form: {
        type: 'choice',
        question: '旁人能知道我的私下想法',
        choices: globalChoices,
      },
    },
    {
      id: '36',
      form: {
        type: 'choice',
        question: '感到别人不理解我或不同情我',
        choices: globalChoices,
      },
    },
    {
      id: '37',
      form: {
        type: 'choice',
        question: '感到别人对我不友好，不喜欢我',
        choices: globalChoices,
      },
    },
    {
      id: '38',
      form: {
        type: 'choice',
        question: '做事必须做得很慢以保证做得准确',
        choices: globalChoices,
      },
    },
    {
      id: '39',
      form: {
        type: 'choice',
        question: '心跳得很厉害',
        choices: globalChoices,
      },
    },
    {
      id: '40',
      form: {
        type: 'choice',
        question: '恶心或胃部不舒服',
        choices: globalChoices,
      },
    },
    {
      id: '41',
      form: {
        type: 'choice',
        question: '感到比不上他人',
        choices: globalChoices,
      },
    },
    {
      id: '42',
      form: {
        type: 'choice',
        question: '肌肉酸痛',
        choices: globalChoices,
      },
    },
    {
      id: '43',
      form: {
        type: 'choice',
        question: '感到有人在监视我谈论我',
        choices: globalChoices,
      },
    },
    {
      id: '44',
      form: {
        type: 'choice',
        question: '难以入睡',
        choices: globalChoices,
      },
    },
    {
      id: '45',
      form: {
        type: 'choice',
        question: '做事必须反复检查',
        choices: globalChoices,
      },
    },
    {
      id: '46',
      form: {
        type: 'choice',
        question: '难以做出决定',
        choices: globalChoices,
      },
    },
    {
      id: '47',
      form: {
        type: 'choice',
        question: '怕乘电车、公共汽车、地铁或火车',
        choices: globalChoices,
      },
    },
    {
      id: '48',
      form: {
        type: 'choice',
        question: '呼吸有困难',
        choices: globalChoices,
      },
    },
    {
      id: '49',
      form: {
        type: 'choice',
        question: '一阵阵发冷或发热',
        choices: globalChoices,
      },
    },
    {
      id: '50',
      form: {
        type: 'choice',
        question: '因为感到害怕而避开某些东西、场合或活动',
        choices: globalChoices,
      },
    },
    {
      id: '51',
      form: {
        type: 'choice',
        question: '脑子变空了',
        choices: globalChoices,
      },
    },
    {
      id: '52',
      form: {
        type: 'choice',
        question: '身体发麻或刺痛',
        choices: globalChoices,
      },
    },
    {
      id: '53',
      form: {
        type: 'choice',
        question: '喉咙有梗塞感',
        choices: globalChoices,
      },
    },
    {
      id: '54',
      form: {
        type: 'choice',
        question: '感到前途没希望',
        choices: globalChoices,
      },
    },
    {
      id: '55',
      form: {
        type: 'choice',
        question: '不能集中注意力',
        choices: globalChoices,
      },
    },
    {
      id: '56',
      form: {
        type: 'choice',
        question: '感到身体某一部分软弱无力',
        choices: globalChoices,
      },
    },
    {
      id: '57',
      form: {
        type: 'choice',
        question: '感到紧张或容易紧张',
        choices: globalChoices,
      },
    },
    {
      id: '58',
      form: {
        type: 'choice',
        question: '感到手或脚发重',
        choices: globalChoices,
      },
    },
    {
      id: '59',
      form: {
        type: 'choice',
        question: '想到死亡的事',
        choices: globalChoices,
      },
    },
    {
      id: '60',
      form: {
        type: 'choice',
        question: '吃得太多',
        choices: globalChoices,
      },
    },
    {
      id: '61',
      form: {
        type: 'choice',
        question: '当别人看着我或谈论我时感到不自在',
        choices: globalChoices,
      },
    },
    {
      id: '62',
      form: {
        type: 'choice',
        question: '有一些不属于你自己的想法',
        choices: globalChoices,
      },
    },
    {
      id: '63',
      form: {
        type: 'choice',
        question: '有想打人或伤害他人的冲动',
        choices: globalChoices,
      },
    },
    {
      id: '64',
      form: {
        type: 'choice',
        question: '醒得太早',
        choices: globalChoices,
      },
    },
    {
      id: '65',
      form: {
        type: 'choice',
        question: '必须反复洗手、点数目或触摸某些东西',
        choices: globalChoices,
      },
    },
    {
      id: '66',
      form: {
        type: 'choice',
        question: '睡得不稳不深',
        choices: globalChoices,
      },
    },
    {
      id: '67',
      form: {
        type: 'choice',
        question: '有想摔坏或破坏东西的冲动',
        choices: globalChoices,
      },
    },
    {
      id: '68',
      form: {
        type: 'choice',
        question: '有一些别人没有的想法或念头',
        choices: globalChoices,
      },
    },
    {
      id: '69',
      form: {
        type: 'choice',
        question: '感到对别人神经过敏',
        choices: globalChoices,
      },
    },
    {
      id: '70',
      form: {
        type: 'choice',
        question: '在商店或电影院等人多的地方感到不自在',
        choices: globalChoices,
      },
    },
    {
      id: '71',
      form: {
        type: 'choice',
        question: '感到任何事情都很困难',
        choices: globalChoices,
      },
    },
    {
      id: '72',
      form: {
        type: 'choice',
        question: '一阵阵恐惧或惊恐',
        choices: globalChoices,
      },
    },
    {
      id: '73',
      form: {
        type: 'choice',
        question: '感到在公共场合吃东西很不舒服',
        choices: globalChoices,
      },
    },
    {
      id: '74',
      form: {
        type: 'choice',
        question: '经常与人争论',
        choices: globalChoices,
      },
    },
    {
      id: '75',
      form: {
        type: 'choice',
        question: '单独一人时神经很紧张',
        choices: globalChoices,
      },
    },
    {
      id: '76',
      form: {
        type: 'choice',
        question: '别人对我的成绩没有作出恰当的评价',
        choices: globalChoices,
      },
    },
    {
      id: '77',
      form: {
        type: 'choice',
        question: '即使和别人在一起也感到孤单',
        choices: globalChoices,
      },
    },
    {
      id: '78',
      form: {
        type: 'choice',
        question: '感到坐立不安心神不定',
        choices: globalChoices,
      },
    },
    {
      id: '79',
      form: {
        type: 'choice',
        question: '感到自己没有什么价值',
        choices: globalChoices,
      },
    },
    {
      id: '80',
      form: {
        type: 'choice',
        question: '感到熟悉的东西变得陌生或不像是真的',
        choices: globalChoices,
      },
    },
    {
      id: '81',
      form: {
        type: 'choice',
        question: '大叫或摔东西',
        choices: globalChoices,
      },
    },
    {
      id: '82',
      form: {
        type: 'choice',
        question: '害怕会在公共场合昏倒',
        choices: globalChoices,
      },
    },
    {
      id: '83',
      form: {
        type: 'choice',
        question: '感到别人想占我的便宜',
        choices: globalChoices,
      },
    },
    {
      id: '84',
      form: {
        type: 'choice',
        question: '为一些有关"性"的想法而很苦恼',
        choices: globalChoices,
      },
    },
    {
      id: '85',
      form: {
        type: 'choice',
        question: '我认为应该因为自己的过错而受到惩罚',
        choices: globalChoices,
      },
    },
    {
      id: '86',
      form: {
        type: 'choice',
        question: '感到要赶快把事情做完',
        choices: globalChoices,
      },
    },
    {
      id: '87',
      form: {
        type: 'choice',
        question: '感到自己的身体有严重问题',
        choices: globalChoices,
      },
    },
    {
      id: '88',
      form: {
        type: 'choice',
        question: '从未感到和其他人很亲近',
        choices: globalChoices,
      },
    },
    {
      id: '89',
      form: {
        type: 'choice',
        question: '感到自己有罪',
        choices: globalChoices,
      },
    },
    {
      id: '90',
      form: {
        type: 'choice',
        question: '感到自己的脑子有毛病',
        choices: globalChoices,
      },
    },
  ],
  result: (datas) => {
    const arrayData = [];
    for (let i = 1; i <= 90; i++) {
      if (!(i in datas)) {
        return {
          ok: false,
          require: String(i),
        };
      }
      arrayData.push(datas[i] as number);
    }
    const sum = arrayData.reduce((a, b) => a + b + 1, 0);
    const activeNum = arrayData.filter((i) => i > 1).length;
    const inactiveNum = arrayData.filter((i) => i === 0).length;
    const activeAverageScore =
      arrayData.filter((i) => i > 1).reduce((a, b) => a + b + 1, 0) / activeNum;

    const average = sum / 90;

    const results: { [key: string]: number } = {};
    for (const [key, value] of Object.entries(resultMap)) {
      results[key] =
        value.map((i) => datas[i] as number).reduce((a, b) => a + b + 1, 0) / value.length;
    }
    return {
      ok: true,
      title: '',
      description: `总分：${sum}，平均分：${average.toFixed(2)}，阳性项目数：${activeNum}，阳性平均分：${activeAverageScore.toFixed(2)}，阴性项目数：${inactiveNum}\n${Object.keys(
        nameMap
      )
        .map((key) => `${nameMap[key as never]}：${results[key].toFixed(2) || 0}`)
        .join('，')}`,
      score: [
        {
          type: 'lines',
          min: 1,
          max: 5,
          splitLinesData: Object.keys(nameMap).map(
            (key) => `${nameMap[key as never]}\n${results[key].toFixed(2) || 0}`
          ),
          values: [
            {
              values: Object.keys(nameMap).map((key) => results[key] || 0),
            },
          ],
        },
      ],
    };
  },

  tags: ['自评', '焦虑', '抑郁', '躯体化', '强迫', '敌对', '恐怖', '偏执'],
};
export default sds;
