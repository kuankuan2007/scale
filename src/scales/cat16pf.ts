import type { Scale } from '@/types/form';

const resultMap = {
  A: [3, 26, 27, 51, 52, 76, 101, 126, 151, 176],
  B: [28, 53, 54, 77, 78, 102, 103, 127, 128, 152, 153, 177, 178, 180],
  C: [4, 5, 29, 30, 55, 79, 80, 104, 105, 129, 130, 154, 179],
  E: [6, 7, 31, 32, 56, 57, 81, 106, 131, 155, 156, 180, 181],
  F: [8, 33, 58, 82, 83, 107, 108, 132, 133, 157, 158, 182, 183],
  G: [9, 34, 59, 84, 109, 134, 159, 160, 184, 185],
  H: [10, 35, 36, 60, 61, 85, 86, 110, 111, 135, 136, 161, 186],
  I: [11, 12, 37, 62, 87, 112, 137, 138, 162, 163],
  L: [13, 38, 63, 64, 88, 89, 113, 114, 139, 164],
  M: [14, 15, 39, 40, 65, 90, 91, 115, 116, 140, 141, 165, 166],
  N: [16, 17, 41, 42, 66, 67, 92, 117, 142, 167],
  O: [18, 19, 43, 44, 68, 69, 93, 94, 118, 119, 143, 144, 168],
  Q1: [20, 21, 45, 46, 70, 95, 120, 145, 169, 170],
  Q2: [22, 47, 71, 72, 96, 97, 121, 122, 146, 171],
  Q3: [23, 24, 48, 73, 98, 123, 147, 148, 172, 173],
  Q4: [25, 49, 50, 74, 75, 99, 100, 124, 125, 149, 150, 174, 175],
} as const;

const normalizationMap = {
  A: [1, 3, 5, 6, 8, 11, 13, 14, 16],
  B: [3, 4, 5, 6, 7, 8, 9, 10, 11],
  C: [5, 7, 9, 11, 13, 16, 18, 20, 22],
  E: [2, 4, 5, 7, 9, 12, 14, 16, 18],
  F: [3, 4, 6, 7, 9, 12, 14, 16, 18],
  G: [5, 7, 9, 10, 12, 14, 16, 17, 18],
  H: [1, 2, 3, 6, 8, 11, 14, 16, 19],
  I: [5, 6, 8, 9, 11, 13, 14, 16, 17],
  L: [3, 5, 6, 8, 10, 12, 13, 15, 16],
  M: [5, 7, 9, 11, 13, 15, 17, 19, 20],
  N: [2, 3, 4, 6, 8, 10, 11, 13, 14],
  O: [2, 4, 6, 8, 10, 12, 14, 16, 18],
  Q1: [4, 5, 7, 8, 10, 12, 13, 14, 15],
  Q2: [5, 7, 8, 10, 12, 14, 15, 17, 18],
  Q3: [4, 6, 8, 10, 12, 14, 15, 17, 18],
  Q4: [2, 4, 6, 7, 11, 14, 16, 19, 31],
} as const;
const ansInfo = {
  A: {
    name: '乐群性',
    description: '高分者外向、热情、乐群；低分者缄默、孤独、内向。',
    range: '1/10',
  },
  B: { name: '聪慧性', description: '高分者聪明、富有才识；低分者迟钝、学识浅薄。', range: '1/10' },
  C: { name: '稳定性', description: '高分者情绪稳定而成熟；低分者情绪激动不稳定。', range: '1/10' },
  E: { name: '恃强性', description: '高分者好强固执、支配攻击；低分者谦虚顺从。', range: '1/10' },
  F: {
    name: '兴奋性',
    description: '高分者轻松兴奋、逍遥放纵；低分者严肃审慎、沉默寡言。',
    range: '1/10',
  },
  G: {
    name: '有恒性',
    description: '高分者有恒负责、重良心；低分者权宜敷衍、原则性差。',
    range: '1/10',
  },
  H: {
    name: '敢为性',
    description: '高分者冒险敢为，少有顾忌，主动性强；低分者害羞、畏缩、退却。',
    range: '1/10',
  },
  I: {
    name: '敏感性',
    description: '高分者细心、敏感、好感情用事；低分者粗心、理智、着重实际。',
    range: '1/10',
  },
  L: {
    name: '怀疑性',
    description: '高分者怀疑、刚愎、固执己见；低分者真诚、合作、宽容、信赖随和。',
    range: '1/10',
  },
  M: {
    name: '幻想性',
    description: '高分者富于想像、狂放不羁；低分者现实、脚踏实地、合乎成规。',
    range: '1/10',
  },
  N: {
    name: '世故性',
    description: '高分者精明、圆滑、世故、人情练达、善于处世；低分者坦诚、直率、天真。',
    range: '1/10',
  },
  O: {
    name: '忧虑性',
    description: '高分者忧虑抑郁、沮丧悲观、自责、缺乏自信；低分者安详沉着、有自信心。',
    range: '1/10',
  },
  Q1: {
    name: '实验性',
    description: '高分者自由开放、批评激进；低分者保守、循规蹈矩、尊重传统。',
    range: '1/10',
  },
  Q2: {
    name: '独立性',
    description: '高分者自主、当机立断；低分者依赖、随群附众。',
    range: '1/10',
  },
  Q3: {
    name: '自律性',
    description: '高分者知己知彼、自律谨严；低分者不能自制、不守纪律、自我矛盾、松懈、随心所欲。',
    range: '1/10',
  },
  Q4: {
    name: '紧张性',
    description:
      '高分者紧张、有挫折感、常缺乏耐心、心神不定，时常感到疲乏；低分者心平气和、镇静自若、知足常乐。',
    range: '1/10',
  },
  X1: {
    name: '适应与焦虑性',
    description:
      '低分者生活适应顺利，通常感觉心满意足，但极端低分者可能缺乏毅力，事事知难而退，不肯艰苦奋斗与努力。高分者不一定有神经症，但通常易于激动、焦虑，对自己的境遇常常感到不满意；高度的焦虑不但减低工作的效率，而且也会影响身体的健康。',
    range: '-1.3/12.2',
  },
  X2: {
    name: '内外向性',
    description:
      '低分者内向，通常羞怯而审慎，与人相处多拘谨不自然；高分者外倾，通常善于交际，开朗，不拘小节。',
    range: '-1.7/12.7',
  },
  X3: {
    name: '感情用事与安详机警性',
    description:
      '低分者感情丰富，情绪多困扰不安，通常感觉挫折气馁，遇问题需经反复考虑才能决定，平时较为含蓄敏感，讲究生活艺术。高分者安详警觉，果断刚毅，进取精神，但常常过分现实，忽视了许多生活的情趣，遇到困难有时会不经考虑，不计后果，贸然行事。',
    range: '-3.5/14.5',
  },
  X4: {
    name: '怯懦与果敢性',
    description:
      '低分者常人云亦云，优柔寡断，受人驱使而不能独立，依赖性强，因而事事迁就，以获取别人的欢心。高分者独立、果敢、锋芒毕露，有气魄。常常自动寻找可以施展所长的环境或机会。',
    range: '-3.5/14.5',
  },
  Y1: { name: '心理健康者的人格因素', description: '人格层次的心理健康水平', range: '4/40' },
  Y2: {
    name: '专业而有成就者的人格因素',
    description: '总和67分以上者一般应有所成就',
    range: '10/100',
  },
  Y3: { name: '创造力强者的人格因素', description: '标准分越高，其创造力越强', range: '15/150' },
  Y4: {
    name: '在新环境中有成长能力的人格因素',
    description:
      '在新环境中有成长能力的人格因素总分介于4—40分间，均值为22分。17分以下者(约占10%)不太适应新环境，27分以上者有成功的希望',
    range: '4/40',
  },
};

function normalize(name: keyof typeof normalizationMap, value: number): number {
  const map = normalizationMap[name];
  for (const i in map) {
    if (value <= map[i]) {
      return Number(i) + 1;
    }
  }
  return map.length + 1;
}

const Afirst = [2, 1, 0] as const;
const Cfirst = [0, 1, 2] as const;
const AOnly = [1, 0, 0] as const;
const BOnly = [0, 1, 0] as const;
const COnly = [0, 0, 1] as const;
const Empty = [0, 0, 0] as const;

const source = [
  Empty,
  Empty,
  Cfirst,
  Cfirst,
  Afirst,
  Afirst,
  Cfirst,
  Afirst,
  Afirst,
  Cfirst,
  Afirst,
  Afirst,
  Cfirst,
  Afirst,
  Afirst,
  Afirst,
  Cfirst,
  Cfirst,
  Afirst,
  Cfirst,
  Cfirst,
  Afirst,
  Afirst,
  Afirst,
  Cfirst,
  Afirst,
  Cfirst,
  BOnly,
  Empty,
  Cfirst,
  Afirst,
  Afirst,
  Cfirst,
  Afirst,
  Afirst,
  Cfirst,
  Cfirst,
  Cfirst,
  Cfirst,
  Cfirst,
  Afirst,
  Cfirst,
  Cfirst,
  Afirst,
  Afirst,
  Cfirst,
  Cfirst,
  Cfirst,
  Cfirst,
  Cfirst,
  Afirst,
  Cfirst,
  BOnly,
  BOnly,
  Cfirst,
  Cfirst,
  Afirst,
  Cfirst,
  Cfirst,
  Afirst,
  Afirst,
  Afirst,
  Afirst,
  Afirst,
  Cfirst,
  Afirst,
  Afirst,
  Afirst,
  Cfirst,
  Cfirst,
  Cfirst,
  Cfirst,
  Cfirst,
  Cfirst,
  Afirst,
  Afirst,
  COnly,
  BOnly,
  Afirst,
  Afirst,
  Afirst,
  Afirst,
  Afirst,
  Afirst,
  Afirst,
  Afirst,
  Afirst,
  Cfirst,
  Afirst,
  Afirst,
  Cfirst,
  Afirst,
  Afirst,
  Afirst,
  Afirst,
  Afirst,
  Afirst,
  Cfirst,
  Cfirst,
  Cfirst,
  Cfirst,
  COnly,
  BOnly,
  Cfirst,
  Cfirst,
  Afirst,
  Cfirst,
  Cfirst,
  Cfirst,
  Cfirst,
  Cfirst,
  Cfirst,
  Cfirst,
  Cfirst,
  Cfirst,
  Cfirst,
  Cfirst,
  Cfirst,
  Cfirst,
  Afirst,
  Afirst,
  Afirst,
  Afirst,
  Cfirst,
  Afirst,
  Cfirst,
  COnly,
  BOnly,
  Cfirst,
  Cfirst,
  Cfirst,
  Cfirst,
  Cfirst,
  Cfirst,
  Afirst,
  Cfirst,
  Afirst,
  Cfirst,
  Afirst,
  Cfirst,
  Afirst,
  Cfirst,
  Cfirst,
  Afirst,
  Cfirst,
  Cfirst,
  Cfirst,
  Cfirst,
  Cfirst,
  Cfirst,
  Afirst,
  BOnly,
  COnly,
  Afirst,
  Cfirst,
  Cfirst,
  Afirst,
  Afirst,
  Afirst,
  Cfirst,
  Afirst,
  Afirst,
  Cfirst,
  Cfirst,
  Afirst,
  Afirst,
  Cfirst,
  Cfirst,
  Cfirst,
  Afirst,
  Cfirst,
  Afirst,
  Cfirst,
  Cfirst,
  Afirst,
  Cfirst,
  AOnly,
  AOnly,
  Cfirst,
  Cfirst,
  Cfirst,
  Cfirst,
  Cfirst,
  Cfirst,
  Cfirst,
  Cfirst,
  Empty,
];

export const cat16pf: Scale = {
  id: 'cat16pf',
  name: '卡特尔16种人格因素问卷(16PF)',
  description:
    '16种人格因素问卷是美国伊利诺州立大学人格及能力测验研究所卡特尔教授编制的用于人格检测的一种问卷，简称16PF。根据一项研究，1971—1978年间被研究文献引用最多的测验中，16PF仅次于MMPI排居第二。\n注意：卡特尔十六型人格测试和mbti十六型性格测试是不同的两个测验，前者比后者更权威，后者虽然很流行（不排除是盲目跟风），但是其信效度很低，并不被主流心理学术界所认可。',
  questions: [
    {
      id: '1',
      form: {
        type: 'choice',
        question: '我很明了本测试的说明：',
        choices: ['是的', '不一定', '不是的'],
      },
    },
    {
      id: '2',
      form: {
        type: 'choice',
        question: '我对本测试的每一个问题，都能做到诚实地回答：',
        choices: ['是的', '不一定', '不同意'],
      },
    },
    {
      id: '3',
      form: {
        type: 'choice',
        question: '如果我有机会的话，我愿意：',
        choices: ['到一个繁华的城市去旅行', '介于（A）,(C)之间', '浏览清静的山区'],
      },
    },
    {
      id: '4',
      form: {
        type: 'choice',
        question: '我有能力应付各种困难：',
        choices: ['是的', '不一定', '不是的'],
      },
    },
    {
      id: '5',
      form: {
        type: 'choice',
        question: '即使是关在铁笼里的猛兽，我见了也会感到惴惴不安：',
        choices: ['是的', '不一定', '不是的'],
      },
    },
    {
      id: '6',
      form: {
        type: 'choice',
        question: '我总是不敢大胆批评别人的言行：',
        choices: ['是的', '有时如此', '不是的'],
      },
    },
    {
      id: '7',
      form: {
        type: 'choice',
        question: '我的思想似乎：',
        choices: ['比较先进', '一般', '比较保守'],
      },
    },
    {
      id: '8',
      form: {
        type: 'choice',
        question: '我不擅长说笑话，讲有趣的事：',
        choices: ['是的', '介于（A）,(C)之间', '不是的'],
      },
    },
    {
      id: '9',
      form: {
        type: 'choice',
        question: '当我见到邻居或新友争吵时，我总是：',
        choices: ['任其自己解决', '介于（A）,(C)之间', '予以劝解'],
      },
    },
    {
      id: '10',
      form: {
        type: 'choice',
        question: '在群众集会时，我：',
        choices: ['谈吐自如', '介于（A）,(C)之间', '保持沉默'],
      },
    },
    {
      id: '11',
      form: {
        type: 'choice',
        question: '我愿意作一个：',
        choices: ['建筑工程师', '不确定', '社会科学研究者'],
      },
    },
    {
      id: '12',
      form: {
        type: 'choice',
        question: '阅读时，我喜欢选读：',
        choices: ['自然科学书籍', '不确定', '政治理论书籍'],
      },
    },
    {
      id: '13',
      form: {
        type: 'choice',
        question: '我认为很多人都有些心里不正常，只是他们不愿承认：',
        choices: ['是的', '介于（A）,(C)之间', '不是的'],
      },
    },
    {
      id: '14',
      form: {
        type: 'choice',
        question: '我希望我的爱人擅长交际，无须具有文艺才能：',
        choices: ['是的', '不一定', '不是的'],
      },
    },
    {
      id: '15',
      form: {
        type: 'choice',
        question: '对于性情急躁，爱发脾气的人，我仍能以礼相待：',
        choices: ['是的', '介于（A）,(C)之间', '不是的'],
      },
    },
    {
      id: '16',
      form: {
        type: 'choice',
        question: '受人侍奉时我常常局促不安：',
        choices: ['是的', '介于（A）,(C)之间', '不是的'],
      },
    },
    {
      id: '17',
      form: {
        type: 'choice',
        question: '在从事体力或脑力劳动之后，我总是需要有别人更多的休息时间，才能保持工作效率：',
        choices: ['是的', '介于（A）,(C)之间', '不是的'],
      },
    },
    {
      id: '18',
      form: {
        type: 'choice',
        question: '半夜醒来，我常常为种种不安而不能入睡：',
        choices: ['常常如此', '有时如此', '极少如此'],
      },
    },
    {
      id: '19',
      form: {
        type: 'choice',
        question: '事情进行的不顺利时，我常常急得涕泪交流：',
        choices: ['常常如此', '有时如此', '极少如此'],
      },
    },
    {
      id: '20',
      form: {
        type: 'choice',
        question: '我以为只要双方同意可离婚，可以不受传统观念的束缚：',
        choices: ['是的', '介于（A）,(C)之间', '不是的'],
      },
    },
    {
      id: '21',
      form: {
        type: 'choice',
        question: '我对人或物的兴趣都很容易改变：',
        choices: ['是的', '介于（A）,(C)之间', '不是的'],
      },
    },
    {
      id: '22',
      form: {
        type: 'choice',
        question: '工作中，我愿意：',
        choices: ['和别人合作', '不确定', '自己单独进行'],
      },
    },
    {
      id: '23',
      form: {
        type: 'choice',
        question: '我常常无缘无故的自言自语：',
        choices: ['常常如此', '偶尔如此', '从不如此'],
      },
    },
    {
      id: '24',
      form: {
        type: 'choice',
        question: '无论是工作，饮食或外出游览，我总是：',
        choices: ['匆匆忙忙不能尽兴', '介于（A）,(C)之间', '从容不迫'],
      },
    },
    {
      id: '25',
      form: {
        type: 'choice',
        question: '这又使我怀疑别人是否对我的言行真正有兴趣：',
        choices: ['是的', '介于（A）,(C)之间', '不是的'],
      },
    },
    {
      id: '26',
      form: {
        type: 'choice',
        question: '如果我在工厂里工作，我愿做：',
        choices: ['技术科的工作', '介于（A）,(C)之间', '宣传科的工作'],
      },
    },
    {
      id: '27',
      form: {
        type: 'choice',
        question: '在阅读时我愿阅读：',
        choices: ['有关太空旅行的书籍', '不太确定', '有关家庭教育的书籍'],
      },
    },
    {
      id: '28',
      form: {
        type: 'choice',
        question: '本题后面列出三个单词，那个与其他两个单词不同类',
        choices: ['狗', '石头', '牛'],
      },
    },
    {
      id: '29',
      form: {
        type: 'choice',
        question: '如果我能到一个新的环境，我要：',
        choices: ['把生活安排的和从前不一样', '不确定', '和从前相仿'],
      },
    },
    {
      id: '30',
      form: {
        type: 'choice',
        question: '在一生中，我总觉得我能达到我所预期的目标：',
        choices: ['是的', '不一定', '不是的'],
      },
    },
    {
      id: '31',
      form: {
        type: 'choice',
        question: '当我说谎时总觉得内心羞愧不敢正视对方：',
        choices: ['是的', '不一定', '不是的'],
      },
    },
    {
      id: '32',
      form: {
        type: 'choice',
        question: '假使我手里拿着一颗装着子弹的手枪，我必须把子弹拿出来才能安心：',
        choices: ['是的', '介于（A）,(C)之间', '不是的'],
      },
    },
    {
      id: '33',
      form: {
        type: 'choice',
        question: '多数人认为我是一个说话风趣的人：',
        choices: ['是的', '不一定', '不是的'],
      },
    },
    {
      id: '34',
      form: {
        type: 'choice',
        question: '如果人们知道我内心的成见，他们会大吃一惊：',
        choices: ['是的', '不一定', '不是的'],
      },
    },
    {
      id: '35',
      form: {
        type: 'choice',
        question: '在公共场合，如果我突然成为大家注意的中心，就会感到局促不安：',
        choices: ['是的', '介于（A）,(C)之间', '不是的'],
      },
    },
    {
      id: '36',
      form: {
        type: 'choice',
        question: '我总喜欢参加规模庞大的晚会或集会：',
        choices: ['是的', '介于（A）,(C)之间', '不是的'],
      },
    },
    {
      id: '37',
      form: {
        type: 'choice',
        question: '在学科中，我喜欢：',
        choices: ['音乐', '不一定', '手工劳动'],
      },
    },
    {
      id: '38',
      form: {
        type: 'choice',
        question: '我常常怀疑那些出乎我意料的对我过于友善的人的动机是否诚实：',
        choices: ['是的', '介于（A）,(C)之间', '不是的'],
      },
    },
    {
      id: '39',
      form: {
        type: 'choice',
        question: '我愿意把我的生活安排得像一个：',
        choices: ['艺术家', '不确定', '会计师'],
      },
    },
    {
      id: '40',
      form: {
        type: 'choice',
        question: '我认为目前所需要的是：',
        choices: ['多出现一些改造世界的理想家', '不确定', '脚踏实地的实干家'],
      },
    },
    {
      id: '41',
      form: {
        type: 'choice',
        question: '有时候我觉得我需要剧烈的体力劳动：',
        choices: ['是的', '介于（A）,(C)之间', '不是的'],
      },
    },
    {
      id: '42',
      form: {
        type: 'choice',
        question: '我愿意跟有教养的人来往而不愿意同粗鲁的人交往：',
        choices: ['是的', '介于（A）,(C)之间', '不是的'],
      },
    },
    {
      id: '43',
      form: {
        type: 'choice',
        question: '在处理一些必须凭借智慧的事务中：',
        choices: ['我的亲人表现的比一般人差', '普通', '我的亲人表现的超人一等'],
      },
    },
    {
      id: '44',
      form: {
        type: 'choice',
        question: '当领导召见我时，我：',
        choices: ['觉得可以趁机提出建议', '介于（A）,(C)之间', '总怀疑自己做错事'],
      },
    },
    {
      id: '45',
      form: {
        type: 'choice',
        question: '如果待遇优厚，我愿意做护理精神病人的工作：',
        choices: ['是的', '介于（A）,(C)之间', '不是的'],
      },
    },
    {
      id: '46',
      form: {
        type: 'choice',
        question: '读报时，我喜欢读：',
        choices: ['当今世界的基本问题', '介于（A）,(C)之间', '地方新闻'],
      },
    },
    {
      id: '47',
      form: {
        type: 'choice',
        question: '在接受困难任务时，我总是：',
        choices: ['有独立完成的信心', '不确定', '希望有别人帮助和指导'],
      },
    },
    {
      id: '48',
      form: {
        type: 'choice',
        question: '在游览时，我宁愿观看一个画家的写生，也不愿听大家的辩论：',
        choices: ['是的', '不一定', '不是的'],
      },
    },
    {
      id: '49',
      form: {
        type: 'choice',
        question: '我的神经脆弱，稍有点刺激就会战栗：',
        choices: ['时常如此', '有时如此', '从不如此'],
      },
    },
    {
      id: '50',
      form: {
        type: 'choice',
        question: '早晨起来，常常感到疲乏不堪：',
        choices: ['是的', '介于（A）,(C)之间', '不是的'],
      },
    },
    {
      id: '51',
      form: {
        type: 'choice',
        question: '如果待遇相同，我愿选做：',
        choices: ['森林管理员', '不一定', '中小学教员'],
      },
    },
    {
      id: '52',
      form: {
        type: 'choice',
        question: '每逢过年过节或亲友结婚时，我：',
        choices: ['喜欢赠送礼品', '不太确定', '不愿相互送礼'],
      },
    },
    {
      id: '53',
      form: {
        type: 'choice',
        question: '本题后列有三个数字，那个数字与其他两个数字不同类：',
        choices: ['5', '2', '7'],
      },
    },
    {
      id: '54',
      form: {
        type: 'choice',
        question: '猫和鱼就像牛和：',
        choices: ['牛奶', '牧草', '盐'],
      },
    },
    {
      id: '55',
      form: {
        type: 'choice',
        question: '我在小学时敬佩的老师，到现在仍然值得我敬佩：',
        choices: ['是的', '不一定', '不是的'],
      },
    },
    {
      id: '56',
      form: {
        type: 'choice',
        question: '我觉得我确实有一些别人所不及的优良品质：',
        choices: ['是的', '不一定', '不是的'],
      },
    },
    {
      id: '57',
      form: {
        type: 'choice',
        question: '根据我的能力，即使让我做一些平凡的工作，我也会安心的：',
        choices: ['是的', '不太确定', '不是的'],
      },
    },
    {
      id: '58',
      form: {
        type: 'choice',
        question: '我喜欢看电影或参加其他娱乐活动的次数：',
        choices: ['比一般人多', '和一般人相同', '比一般人少'],
      },
    },
    {
      id: '59',
      form: {
        type: 'choice',
        question: '我喜欢从事需要精密技术的工作：',
        choices: ['是的', '介于（A）,(C)之间', '不是的'],
      },
    },
    {
      id: '60',
      form: {
        type: 'choice',
        question: '在有威望有地位的人面前，我总是较为居促谨慎：',
        choices: ['是的', '介于（A）,(C)之间', '不是的'],
      },
    },
    {
      id: '61',
      form: {
        type: 'choice',
        question: '对于我来说在大众面前演讲或表演，是一件难事：',
        choices: ['是的', '介于（A）,(C)之间', '不是的'],
      },
    },
    {
      id: '62',
      form: {
        type: 'choice',
        question: '我愿意：',
        choices: ['指挥几个人工作', '不确定', '和同志们一起工作'],
      },
    },
    {
      id: '63',
      form: {
        type: 'choice',
        question: '即使我做了一件让别人笑话的事，我也能坦然处之：',
        choices: ['是的', '介于（A）,(C)之间', '不是的'],
      },
    },
    {
      id: '64',
      form: {
        type: 'choice',
        question: '我认为没有人会幸灾乐祸的希望我遇到困难：',
        choices: ['是的', '不确定', '不是的'],
      },
    },
    {
      id: '65',
      form: {
        type: 'choice',
        question: '一个人应该考虑人生的真正意义：',
        choices: ['是的', '不确定', '不是的'],
      },
    },
    {
      id: '66',
      form: {
        type: 'choice',
        question: '我喜欢去处理被别人弄得一塌糊涂的工作：',
        choices: ['是的', '介于A、C之间', '不是的'],
      },
    },
    {
      id: '67',
      form: {
        type: 'choice',
        question: '当我非常高兴时，总有一种“好景不长”的感受：',
        choices: ['是的', '介于（A）,(C)之间', '不是的'],
      },
    },
    {
      id: '68',
      form: {
        type: 'choice',
        question: '在一般困难情境中，我总能保持乐观：',
        choices: ['是的', '不一定', '不是的'],
      },
    },
    {
      id: '69',
      form: {
        type: 'choice',
        question: '迁居是一件极不愉快的事：',
        choices: ['是的', '介于（A）,(C)之间', '不是的'],
      },
    },
    {
      id: '70',
      form: {
        type: 'choice',
        question: '在年轻的时候，当我和父母的意见不同时：',
        choices: ['保留自己的意见', '介于（A）,(C)之间', '接受父母的意见'],
      },
    },
    {
      id: '71',
      form: {
        type: 'choice',
        question: '我希望把我的家庭：',
        choices: [
          '建设成适合自身活动和娱乐的地方',
          '介于（A）,(C)之间',
          '成为邻里交往活动的一部分',
        ],
      },
    },
    {
      id: '72',
      form: {
        type: 'choice',
        question: '我解决问题时，多借助于：',
        choices: ['个人独立思考', '介于（A）,(C)之间', '和别人互相讨论'],
      },
    },
    {
      id: '73',
      form: {
        type: 'choice',
        question: '在需要当机立断时，我总是：',
        choices: ['镇静地运用理智', '介于（A），（C）之间', '常常紧张兴奋'],
      },
    },
    {
      id: '74',
      form: {
        type: 'choice',
        question: '最近在一两件事情上，我觉得我是无辜受累的：',
        choices: ['是的', '介于（A）,(C)之间', '不是的'],
      },
    },
    {
      id: '75',
      form: {
        type: 'choice',
        question: '我善于控制我的表情：',
        choices: ['是的', '介于（A）,(C)之间', '不是的'],
      },
    },
    {
      id: '76',
      form: {
        type: 'choice',
        question: '如果待遇相同，我愿做一个：',
        choices: ['化学研究工作者', '不确定', '旅行社经理'],
      },
    },
    {
      id: '77',
      form: {
        type: 'choice',
        question: '以“惊讶”与“新奇”搭配为例，认为“惧怕”与（  ）搭配：',
        choices: ['勇敢', '焦虑', '恐怖'],
      },
    },
    {
      id: '78',
      form: {
        type: 'choice',
        question: '本题后面列出三个分数，哪一个数与其他两个分数不同类：',
        choices: ['3/7', '3/9', '3/11'],
      },
    },
    {
      id: '79',
      form: {
        type: 'choice',
        question: '不知为什么，有些人总是回避或冷淡我：',
        choices: ['是的', '不一定', '不是的'],
      },
    },
    {
      id: '80',
      form: {
        type: 'choice',
        question: '我虽然好意待人，但常常得不到好报：',
        choices: ['是的', '不一定', '不是的'],
      },
    },
    {
      id: '81',
      form: {
        type: 'choice',
        question: '我不喜欢争强好胜的人：',
        choices: ['是的', '介于（A）,(C)之间', '不是的'],
      },
    },
    {
      id: '82',
      form: {
        type: 'choice',
        question: '和一般人相比，我的朋友的确太少：',
        choices: ['是的', '介于（A）,(C)之间', '不是的'],
      },
    },
    {
      id: '83',
      form: {
        type: 'choice',
        question: '不在万不得已的情况下，我总是回避参加应酬性的活动：',
        choices: ['是的', '不一定', '不是的'],
      },
    },
    {
      id: '84',
      form: {
        type: 'choice',
        question: '我认为对领导逢迎得当比工作表现更重要：',
        choices: ['是的', '介于（A）,(C)之间', '不是的'],
      },
    },
    {
      id: '85',
      form: {
        type: 'choice',
        question: '参加竞赛时，我总是着重在竞赛的活动，而不计较其成败：',
        choices: ['总是如此', '一般如此', '偶然如此'],
      },
    },
    {
      id: '86',
      form: {
        type: 'choice',
        question: '按照我个人的意愿，我希望做的工作是：',
        choices: [
          '有固定而可靠的工资收入',
          '介于（A）,(C)之间',
          '工资高低应随我的工作表现而随时调整',
        ],
      },
    },
    {
      id: '87',
      form: {
        type: 'choice',
        question: '我愿意阅读：',
        choices: ['军事与政治的实事记载', '不一定', '富有情感的幻想的作品'],
      },
    },
    {
      id: '88',
      form: {
        type: 'choice',
        question: '我认为有许多人之所以不敢犯罪，其主要原因是怕被惩罚：',
        choices: ['是的', '介于（A）,(C)之间', '不是的'],
      },
    },
    {
      id: '89',
      form: {
        type: 'choice',
        question: '我的父母从来不严格要求我事事顺从：',
        choices: ['是的', '不一定', '不是的'],
      },
    },
    {
      id: '90',
      form: {
        type: 'choice',
        question: '“百折不挠，再接再厉”的精神常常被人们所忽略：',
        choices: ['是的', '不一定', '不是的'],
      },
    },
    {
      id: '91',
      form: {
        type: 'choice',
        question: '当有人对我发火时，我总是：',
        choices: ['设法使他镇静下来', '不太确定', '自己也会发起火来'],
      },
    },
    {
      id: '92',
      form: {
        type: 'choice',
        question: '我希望人们都要友好相处：',
        choices: ['是的', '不一定', '不是的'],
      },
    },
    {
      id: '93',
      form: {
        type: 'choice',
        question: '不论是在极高的屋顶上，还是在极深的隧道中，我很少感到胆怯不安：',
        choices: ['是的', '介于（A）,(C)之间', '不是的'],
      },
    },
    {
      id: '94',
      form: {
        type: 'choice',
        question: '只要没有过错，不管别人怎么说，我总能心安理得：',
        choices: ['是的', '不一定', '不是的'],
      },
    },
    {
      id: '95',
      form: {
        type: 'choice',
        question: '我认为凡是无法用理智来解决的问题，有时就不得不靠强权处理：',
        choices: ['是的', '介于（A）,(C)之间', '不是的'],
      },
    },
    {
      id: '96',
      form: {
        type: 'choice',
        question: '我在年轻的时候，和异性朋友交往：',
        choices: ['和异性朋友交往较别人多', '介于A、C之间', '和异性朋友交往较别人少'],
      },
    },
    {
      id: '97',
      form: {
        type: 'choice',
        question: '我在社团活动中，是一个活跃分子：',
        choices: ['是的', '介于（A）,(C)之间', '不是的'],
      },
    },
    {
      id: '98',
      form: {
        type: 'choice',
        question: '在人声嘈杂中，我仍能不受干扰，专心工作：',
        choices: ['是的', '介于（A）,(C)之间', '不是的'],
      },
    },
    {
      id: '99',
      form: {
        type: 'choice',
        question: '在某些心境下，我常常因为困惑陷入空想而将工作搁置下来：',
        choices: ['是的', '介于（A）,(C)之间', '不是的'],
      },
    },
    {
      id: '100',
      form: {
        type: 'choice',
        question: '我很少用难堪的语言去刺伤别人的感情：',
        choices: ['是的', '不太确定', '不是的'],
      },
    },
    {
      id: '101',
      form: {
        type: 'choice',
        question: '如果让我选择，我宁愿选做：',
        choices: ['列车员', '不确定', '描图员'],
      },
    },
    {
      id: '102',
      form: {
        type: 'choice',
        question: '“理不胜词”的意思是：',
        choices: ['理不如词', '理多而词少', '词藻华丽而理不足'],
      },
    },
    {
      id: '103',
      form: {
        type: 'choice',
        question: '以“铁锹”与“挖掘”搭配为例，我认为“刀子”与（    ）搭配：',
        choices: ['琢磨', '切割', '铲除'],
      },
    },
    {
      id: '104',
      form: {
        type: 'choice',
        question: '我在大街上，常常避开我所不愿意打招呼的人：',
        choices: ['极不如此', '偶然如此', '有时如此'],
      },
    },
    {
      id: '105',
      form: {
        type: 'choice',
        question: '当我聚精会神的听音乐时，假使有人在旁边高谈阔论：',
        choices: ['我仍能专心听音乐', '介于（A）,(C)之间', '不能专心而感到恼怒'],
      },
    },
    {
      id: '106',
      form: {
        type: 'choice',
        question: '在课堂上，如果我的意见与老师不同，我常常：',
        choices: ['保持沉默', '不一定', '表明自己的看法'],
      },
    },
    {
      id: '107',
      form: {
        type: 'choice',
        question: '我单独跟异性谈话时，总显得不自然：',
        choices: ['是的', '介于（A）,(C)之间', '不是的'],
      },
    },
    {
      id: '108',
      form: {
        type: 'choice',
        question: '我在待人接物方面，的确不太成功：',
        choices: ['是的', '不完全这样', '不是的'],
      },
    },
    {
      id: '109',
      form: {
        type: 'choice',
        question: '每当作一件困难工作时，我总是：',
        choices: ['预先做好准备', '介于（A）,（C）之间', '相信到时候总会有办法解决的'],
      },
    },
    {
      id: '110',
      form: {
        type: 'choice',
        question: '在我结交朋友中，男女各占一半：',
        choices: ['是的', '介于（A）,(C)之间', '不是的'],
      },
    },
    {
      id: '111',
      form: {
        type: 'choice',
        question: '我在结交朋友方面：',
        choices: ['结识很多的人', '不一定', '维持几个深交的朋友'],
      },
    },
    {
      id: '112',
      form: {
        type: 'choice',
        question: '我愿意作一个社会科学家，而不愿作一个机械工程师：',
        choices: ['是的', '不太确定', '不是的'],
      },
    },
    {
      id: '113',
      form: {
        type: 'choice',
        question: '如果我发现别人的缺点，我常常不顾一切的提出指责：',
        choices: ['是的', '介于（A）,(C)之间', '不是的'],
      },
    },
    {
      id: '114',
      form: {
        type: 'choice',
        question: '我喜欢设法影响和我一起工作的同志，使他们能协助我所计划的目的：',
        choices: ['是的', '介于（A）,(C)之间', '不是的'],
      },
    },
    {
      id: '115',
      form: {
        type: 'choice',
        question: '我喜欢做音乐，或跳舞，或新闻采访等工作：',
        choices: ['是的', '不一定', '不是的'],
      },
    },
    {
      id: '116',
      form: {
        type: 'choice',
        question: '当人们表扬我的时候，我总觉得羞愧窘促：',
        choices: ['是的', '介于（A）,(C)之间', '不是的'],
      },
    },
    {
      id: '117',
      form: {
        type: 'choice',
        question: '我认为一个国家最需要解决的问题是：',
        choices: ['政治问题', '不太确定', '道德问题'],
      },
    },
    {
      id: '118',
      form: {
        type: 'choice',
        question: '有时我会无故的产生一种面临大祸的恐惧：',
        choices: ['是的', '有时如此', '不是的'],
      },
    },
    {
      id: '119',
      form: {
        type: 'choice',
        question: '我在童年时，害怕黑暗的次数：',
        choices: ['很多', '不太多', '几乎没有'],
      },
    },
    {
      id: '120',
      form: {
        type: 'choice',
        question: '在闲暇的时候，我喜欢：',
        choices: ['看一部历史性的探险小说', '不一定', '读一本科学性的幻想小说'],
      },
    },
    {
      id: '121',
      form: {
        type: 'choice',
        question: '当人们批评我古怪不正常时，我：',
        choices: ['非常气恼', '有些气恼', '无所谓'],
      },
    },
    {
      id: '122',
      form: {
        type: 'choice',
        question: '当来到一个新城市里找地址时，我常常：',
        choices: ['找人问路', '介于（A）,(C)之间', '参考地图'],
      },
    },
    {
      id: '123',
      form: {
        type: 'choice',
        question: '当朋友声明她要在家休息时，我总是设法怂恿她同我一起到外面去玩：',
        choices: ['是的', '不一定', '不是的'],
      },
    },
    {
      id: '124',
      form: {
        type: 'choice',
        question: '在就寝时，我常常：',
        choices: ['不易入睡', '介于（A）,(C)之间', '极易入睡'],
      },
    },
    {
      id: '125',
      form: {
        type: 'choice',
        question: '有人烦扰我时，我：',
        choices: ['能不露声色', '介于（A）,(C)之间', '总要说给别人听，以泄愤怒'],
      },
    },
    {
      id: '126',
      form: {
        type: 'choice',
        question: '如果待遇相同，我愿做一个：',
        choices: ['律师', '不确定', '航海员'],
      },
    },
    {
      id: '127',
      form: {
        type: 'choice',
        question: '“时间变成了永恒”这是比喻：',
        choices: ['时间过得快', '忘了时间', '光阴一去不复返'],
      },
    },
    {
      id: '128',
      form: {
        type: 'choice',
        question: '本题后的哪一项应接在“╳0000╳╳00╳╳╳”的后面',
        choices: ['╳0╳', '00╳', '0╳╳'],
      },
    },
    {
      id: '129',
      form: {
        type: 'choice',
        question: '我不论到什么地方，都能清楚的辨别方向：',
        choices: ['是的', '介于（A）,(C)之间', '不是的'],
      },
    },
    {
      id: '130',
      form: {
        type: 'choice',
        question: '我热爱我所学的专业和所从事的工作：',
        choices: ['是的', '不一定', '不是的'],
      },
    },
    {
      id: '131',
      form: {
        type: 'choice',
        question: '如果我急于想借朋友的东西，而朋友又不在家时，我认为不告而取也没有关系：',
        choices: ['是的', '介于（A）,(C)之间', '不是的'],
      },
    },
    {
      id: '132',
      form: {
        type: 'choice',
        question: '我喜欢给朋友讲述一些我个人有趣的经历：',
        choices: ['是的', '介于（A）,(C)之间', '不是的'],
      },
    },
    {
      id: '133',
      form: {
        type: 'choice',
        question: '我宁愿做一个：',
        choices: ['演员', '不确定', '建筑师'],
      },
    },
    {
      id: '134',
      form: {
        type: 'choice',
        question: '业余时间，我总是做好安排，不使时间浪费：',
        choices: ['是的', '介于（A）,(C)之间', '不是的'],
      },
    },
    {
      id: '135',
      form: {
        type: 'choice',
        question: '在和别人交往中，我常常会无缘无故的产生一种自卑感：',
        choices: ['是的', '介于（A）,(C)之间', '不是的'],
      },
    },
    {
      id: '136',
      form: {
        type: 'choice',
        question: '和不熟识的人交谈，对我来说：',
        choices: ['毫不困难', '介于（A）,(C)之间', '是一件难事'],
      },
    },
    {
      id: '137',
      form: {
        type: 'choice',
        question: '我所喜欢的音乐是：',
        choices: ['轻松活泼的', '介于（A）,(C)之间', '富有感情的'],
      },
    },
    {
      id: '138',
      form: {
        type: 'choice',
        question: '我爱想入非非：',
        choices: ['是的', '不一定', '不是的'],
      },
    },
    {
      id: '139',
      form: {
        type: 'choice',
        question: '我认为未来二十年的世界局势，定将好转：',
        choices: ['是的', '不一定', '不是的'],
      },
    },
    {
      id: '140',
      form: {
        type: 'choice',
        question: '在童年时，我喜欢阅读：',
        choices: ['神话幻想故事', '不确定', '战争故事'],
      },
    },
    {
      id: '141',
      form: {
        type: 'choice',
        question: '我向来对机械，汽车等发生兴趣：',
        choices: ['是的', '介于（A）,(C)之间', '不是的'],
      },
    },
    {
      id: '142',
      form: {
        type: 'choice',
        question: '即使让我做一个缓刑释放的罪犯的管理人，我也会把工作搞得很好：',
        choices: ['是的', '介于（A）,(C)之间', '不是的'],
      },
    },
    {
      id: '143',
      form: {
        type: 'choice',
        question: '我仅仅被认为是一个能够苦干而稍有成就的人而已：',
        choices: ['是的', '介于（A）,(C)之间', '不是的'],
      },
    },
    {
      id: '144',
      form: {
        type: 'choice',
        question: '就是在不顺利的情况下，我仍能保持精神振奋：',
        choices: ['是的', '介于（A）,(C)之间', '不是的'],
      },
    },
    {
      id: '145',
      form: {
        type: 'choice',
        question: '我认为节制生育是解决经济与和平问题的重要条件：',
        choices: ['是的', '不太确定', '不是的'],
      },
    },
    {
      id: '146',
      form: {
        type: 'choice',
        question: '在工作中，我喜欢独自筹划，不愿受别人干涉：',
        choices: ['是的', '介于（A）,(C)之间', '不是的'],
      },
    },
    {
      id: '147',
      form: {
        type: 'choice',
        question: '尽管有的同志和我的意见不和，但仍能跟她搞好团结：',
        choices: ['是的', '介于（A）,(C)之间', '不是的'],
      },
    },
    {
      id: '148',
      form: {
        type: 'choice',
        question: '我在工作和学习上，总是使自己不粗心大意，不忽略细节：',
        choices: ['是的', '介于（A）,(C)之间', '不是的'],
      },
    },
    {
      id: '149',
      form: {
        type: 'choice',
        question: '在和人争辩或险遭事故后，我常常表现出震颤，筋疲力尽，不能安心工作：',
        choices: ['是的', '介于（A）,(C)之间', '不是的'],
      },
    },
    {
      id: '150',
      form: {
        type: 'choice',
        question: '未经医生处方，我是从不乱吃药的：',
        choices: ['是的', '介于（A）,(C)之间', '不是的'],
      },
    },
    {
      id: '151',
      form: {
        type: 'choice',
        question: '根据我个人的兴趣，我愿意参加：',
        choices: ['摄影组织活动', '不确定', '文娱队活动'],
      },
    },
    {
      id: '152',
      form: {
        type: 'choice',
        question: '以星火与燎原搭配为例，我认为姑息与（    ）搭配：',
        choices: ['同情', '养奸', '纵容'],
      },
    },
    {
      id: '153',
      form: {
        type: 'choice',
        question: '“钟表”与“时间”的关系犹如“裁缝”与（     ）的关系：',
        choices: ['服装', '剪刀', '布料'],
      },
    },
    {
      id: '154',
      form: {
        type: 'choice',
        question: '生动的梦境，常常干扰我的睡眠：',
        choices: ['经常如此', '偶然如此', '从不如此'],
      },
    },
    {
      id: '155',
      form: {
        type: 'choice',
        question: '我爱打抱不平：',
        choices: ['是的', '介于（A）,(C)之间', '不是的'],
      },
    },
    {
      id: '156',
      form: {
        type: 'choice',
        question: '如果我要到一个新城市，我将要：',
        choices: ['到处闲逛', '不确定', '避免去不安全的地方'],
      },
    },
    {
      id: '157',
      form: {
        type: 'choice',
        question: '我爱穿朴素的衣服，不愿穿华丽的服装：',
        choices: ['是的', '不太确定', '不是的'],
      },
    },
    {
      id: '158',
      form: {
        type: 'choice',
        question: '我认为安静的娱乐远远胜过热闹的宴会：',
        choices: ['是的', '不太确定', '不是的'],
      },
    },
    {
      id: '159',
      form: {
        type: 'choice',
        question: '我明知自己有缺点，但不愿接受别人的批评：',
        choices: ['偶然如此', '极少如此', '从不如此'],
      },
    },
    {
      id: '160',
      form: {
        type: 'choice',
        question: '我总是把“是，非，善，恶”作为处理问题的原则：',
        choices: ['是的', '介于（A）,(C)之间', '不是的'],
      },
    },
    {
      id: '161',
      form: {
        type: 'choice',
        question: '当我工作时，我不喜欢有许多人在旁边参观：',
        choices: ['是的', '介于（A）,(C)之间', '不是的'],
      },
    },
    {
      id: '162',
      form: {
        type: 'choice',
        question: '我认为，侮辱那些即使有错误但有文化教养的人，如医生，教师等也是不应该的：',
        choices: ['是的', '介于（A）,(C)之间', '不是的'],
      },
    },
    {
      id: '163',
      form: {
        type: 'choice',
        question: '在各种课程中，我喜欢：',
        choices: ['语文', '不确定', '数学'],
      },
    },
    {
      id: '164',
      form: {
        type: 'choice',
        question: '那些自以为是，道貌岸然的人使我生气：',
        choices: ['是的', '介于（A）,(C)之间', '不是的'],
      },
    },
    {
      id: '165',
      form: {
        type: 'choice',
        question: '和循规蹈矩的人交谈：',
        choices: ['很有兴趣，并有所获的', '介于（A）,(C)之间', '他们的思想简单，使我太厌烦'],
      },
    },
    {
      id: '166',
      form: {
        type: 'choice',
        question: '我喜欢：',
        choices: ['有几个有时对我很苛求但富有感情的朋友', '介于（A）,(C)之间', '不受别人的干扰'],
      },
    },
    {
      id: '167',
      form: {
        type: 'choice',
        question: '如果征求我的意见，我赞同：',
        choices: ['切实制止精神病患者和智能低下的人生育', '不确定', '杀人犯必须判处死刑'],
      },
    },
    {
      id: '168',
      form: {
        type: 'choice',
        question: '有时我会无缘无故的感到沮丧，痛哭：',
        choices: ['是的', '介于（A）,(C)之间', '不是的'],
      },
    },
    {
      id: '169',
      form: {
        type: 'choice',
        question: '当和立场相反的人争辩时，我主张：',
        choices: ['尽量找出基本概念的差异', '不一定', '彼此让步'],
      },
    },
    {
      id: '170',
      form: {
        type: 'choice',
        question: '我一向重感情而不重理智，因而我的观点常常动摇不定：',
        choices: ['是的', '不一定', '不是的'],
      },
    },
    {
      id: '171',
      form: {
        type: 'choice',
        question: '我的学习多赖于：',
        choices: ['阅读书刊', '介于（A）,（C）之间', '参加集体讨论'],
      },
    },
    {
      id: '172',
      form: {
        type: 'choice',
        question: '我宁愿选择一个工资较高的工作，不在乎是否有保障，而不愿做工资低固定工作：',
        choices: ['是的', '不一定', '不是的'],
      },
    },
    {
      id: '173',
      form: {
        type: 'choice',
        question: '在参加讨论时，我总是能把握自己的立场：',
        choices: ['经常如此', '一般如此', '必要时才如此'],
      },
    },
    {
      id: '174',
      form: {
        type: 'choice',
        question: '我常常被一些无所谓的小事所烦扰：',
        choices: ['是的', '介于（A）,(C)之间', '不是的'],
      },
    },
    {
      id: '175',
      form: {
        type: 'choice',
        question: '我宁愿住在嘈杂的闹市区，而不愿住在僻静的地区：',
        choices: ['是的', '不太确定', '不是的'],
      },
    },
    {
      id: '176',
      form: {
        type: 'choice',
        question: '下列工作如果任我挑选的话，我愿做：',
        choices: ['少先队辅导员', '不太确定', '修表工作'],
      },
    },
    {
      id: '177',
      form: {
        type: 'choice',
        question: '一人（    ）事，人人受累：',
        choices: ['偾', '愤', '喷'],
      },
    },
    {
      id: '178',
      form: {
        type: 'choice',
        question: '望子成龙的家长往往（      ）苗助长：',
        choices: ['揠', '堰', '偃'],
      },
    },
    {
      id: '179',
      form: {
        type: 'choice',
        question: '气候的变化并不影响我的情绪：',
        choices: ['是的', '介于（A）,(C)之间', '不是的'],
      },
    },
    {
      id: '180',
      form: {
        type: 'choice',
        question: '因为我对一切问题都有一些见解，所以大家都认为我是一个有头脑的人：',
        choices: ['是的', '介于（A）,(C)之间', '不是的'],
      },
    },
    {
      id: '181',
      form: {
        type: 'choice',
        question: '我讲话的声音：',
        choices: ['洪亮', '介于（A）,(C)之间', '低沉'],
      },
    },
    {
      id: '182',
      form: {
        type: 'choice',
        question: '一般人都认为我是一个活跃热情的人：',
        choices: ['是的', '介于（A）,(C)之间', '不是的'],
      },
    },
    {
      id: '183',
      form: {
        type: 'choice',
        question: '我喜欢做出差机会较多的工作：',
        choices: ['是的', '介于（A）,(C)之间', '不是的'],
      },
    },
    {
      id: '184',
      form: {
        type: 'choice',
        question: '我做事严格，力求把事情办得尽善尽美：',
        choices: ['是的', '介于（A）,(C)之间', '不是的'],
      },
    },
    {
      id: '185',
      form: {
        type: 'choice',
        question: '在取回或归还所借的东西时，我总是仔细检查，看是否保持原样：',
        choices: ['是的', '介于（A）,(C)之间', '不是的'],
      },
    },
    {
      id: '186',
      form: {
        type: 'choice',
        question: '我通常是精力充沛，忙碌多事：',
        choices: ['是的', '不一定', '不是的'],
      },
    },
    {
      id: '187',
      form: {
        type: 'choice',
        question: '我确信我没有遗漏或漫不经心回答上面的任何问题：',
        choices: ['是的', '不确定', '不是的'],
      },
    },
  ],
  result: (datas) => {
    const raw: number[] = [];
    for (let i = 1; i <= 187; i++) {
      if (!(i in datas) || datas[i] === void 0) {
        return {
          ok: false,
          require: String(i),
        };
      }
      raw.push(source[i - 1][Number(datas[i])]);
    }
    const results: { [key: string]: number } = {};
    for (const [key, value] of Object.entries(resultMap)) {
      results[key] = normalize(
        key as keyof typeof normalizationMap,
        value.map((i) => raw[i - 1] as number).reduce((a, b) => a + b, 0)
      );
    }
    results['X1'] =
      (38 +
        2 * results.L +
        3 * results.O +
        4 * results.Q4 -
        2 * results.C -
        2 * results.H -
        2 * results.Q3) /
      10;
    results['X2'] =
      (2 * results.A + 3 * results.E + 4 * results.F + 5 * results.H - 2 * results.Q2 - 11) / 10;
    results['X3'] =
      (77 +
        2 * results.C +
        2 * results.E +
        2 * results.F +
        2 * results.N -
        4 * results.A -
        6 * results.I -
        2 * results.M) /
      10;
    results['X4'] =
      (4 * results.E +
        3 * results.M +
        4 * results.Q1 +
        4 * results.Q2 -
        3 * results.A -
        2 * results.G) /
      10;
    results['Y1'] = results.C + results.F + (11 - results.O) + (11 - results.Q4);
    results['Y2'] =
      2 * results.Q3 +
      2 * results.G +
      2 * results.C +
      results.E +
      results.N +
      results.Q2 +
      results.Q1;
    results['Y3'] =
      2 * (11 - results.A) +
      2 * results.B +
      results.E +
      2 * (11 - results.F) +
      results.H +
      2 * results.I +
      results.M +
      (11 - results.N) +
      results.Q1 +
      2 * results.Q2;
    results['Y4'] = results.B + results.G + results.Q3 + (11 - results.F);

    const descriptionKeys = [
      'A',
      'B',
      'C',
      'E',
      'F',
      'G',
      'H',
      'I',
      'L',
      'M',
      'N',
      'O',
      'Q1',
      'Q2',
      'Q3',
      'Q4',
      'X1',
      'X2',
      'X3',
      'X4',
      'Y1',
      'Y2',
      'Y3',
      'Y4',
    ] as const;
    const formatScore = (n: number) => {
      if (Number.isFinite(n) && !Number.isInteger(n)) {
        return n.toFixed(1).replace(/\.0$/, '');
      }
      return String(n);
    };
    const description = descriptionKeys
      .map((key) => {
        const info = ansInfo[key];
        return `${info.name}(${key}): ${formatScore(results[key])}分(${info.range})\n${info.description}`;
      })
      .join('\n\n');
    return {
      ok: true,
      title: '',
      score: [
        {
          type: 'lines',
          min: 1,
          max: 10,
          minWidth: 25,
          splitLinesData: (['A', 'B', 'C', 'E', 'F', 'G', 'H', 'I'] as const).map(
            (i) => `${ansInfo[i].name}\n${results[i]}`
          ),
          values: [
            {
              values: (['A', 'B', 'C', 'E', 'F', 'G', 'H', 'I'] as const).map((i) => results[i]),
            },
          ],
        },
        {
          type: 'lines',
          min: 1,
          max: 10,
          minWidth: 25,
          splitLinesData: (['L', 'M', 'N', 'O', 'Q1', 'Q2', 'Q3', 'Q4'] as const).map(
            (i) => `${ansInfo[i].name}\n${results[i]}`
          ),
          values: [
            {
              values: (['L', 'M', 'N', 'O', 'Q1', 'Q2', 'Q3', 'Q4'] as const).map(
                (i) => results[i]
              ),
            },
          ],
        },
      ],
      description,
    };
  },

  tags: ['自评', '人格'],
};
export default cat16pf;
