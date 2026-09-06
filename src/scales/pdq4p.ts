import type { Scale } from '@/types/form';

const globalChoices = ['否', '是'] as const;
export const resultMap = {
  PPD: [11, 24, 37, 50, 62, 85, 96],
  SPD: [9, 22, 34, 47, 60, 71, 95],
  STPD: [10, 23, 36, 48, 60, 61, 72, 74, 86],
  HPD: [4, 17, 30, 43, 55, 102, 67, 80, 90],
  NPD: [5, 18, 31, 44, 57, 68, 73, 79, 92, 103],
  ASPD: [8, 20, 33, 46, 59, 75, 94, 107],
  BPD: [100, 101, 32, 45, 58, 69, 78, 93, 106],
  AvPD: [98, 13, 26, 39, 52, 83, 87],
  DPD: [2, 15, 27, 40, 53, 65, 82, 88],
  OCPD: [99, 16, 29, 41, 54, 66, 81, 105, 89],
  DEPPD: [14, 28, 42, 56, 70, 84, 97],
  PAPD: [7, 21, 35, 49, 63, 77, 91],
  TG: [12, 25, 38, 51],
  SUS: [64, 76],
} as const;
const reverse = [12, 25, 38] as const;
export const extMap = {
  PPD: [],
  SPD: [],
  STPD: [],
  HPD: [],
  NPD: [],
  ASPD: [],
  BPD: [6, 19],
  AvPD: [1],
  DPD: [],
  OCPD: [3],
  DEPPD: [],
  PAPD: [],
  TG: [],
  SUS: [],
} as const;
export const nameMap = {
  PPD: '偏执型',
  SPD: '分离型',
  STPD: '分裂型',
  HPD: '表演型',
  NPD: '自恋型',
  ASPD: '反社会型',
  BPD: '边缘型',
  AvPD: '回避型',
  DPD: '依赖型',
  OCPD: '强迫型',
  DEPPD: '抑郁型',
  PAPD: '被动攻击型',
  TG: '掩饰',
  SUS: '怀疑',
} as const;
export const scoresKeys = [
  'PPD', 'SPD', 'STPD',
  'HPD', 'NPD', 'ASPD',
  'BPD', 'AvPD', 'DPD',
  'OCPD', 'DEPPD', 'PAPD',
] as const;
export const allScoreKeys = [...scoresKeys, 'TG', 'SUS'] as const;
export const thresholds = {
  PPD: 4,
  SPD: 4,
  STPD: 5,
  HPD: 5,
  NPD: 5,
  ASPD: 3,
  BPD: 5,
  AvPD: 4,
  DPD: 5,
  OCPD: 4,
  DEPPD: 5,
  PAPD: 4,
} as const;
export const extraThresholds = {
  TG: 2,
  SUS: 1,
} as const;
export const pdq4p: Scale = {
  id: 'pdq4p',
  name: '人格障碍诊断问卷 (PDQ4+)',
  description:
    '人格障碍诊断问卷(PDQ4+)在线测试。PDQ4+人格障碍测试包含12种类型的人格障碍，分别为偏执型、分离型、分裂型、反社会型、边缘型、表演型、自恋型、回避型、依赖型、强迫型、被动攻击型、抑郁型人格障碍。该问卷曾被作为评估各种精神疾病人群的工具之一，可用于自我检查或团体筛查。',
  refer: [
    {
      title:
        'Hyler SE. Personality Diagnostic Questionnaire-4+ (PDQ-4+) [Assessment instrument]. New York, NY: New York State Psychiatric Institute; 1994. DOI: 10.1037/t07759-000',
      url: 'https://doi.org/10.1037/t07759-000',
    },
    {
      title:
        'Hyler SE, Rieder RO, et al. The Personality Diagnostic Questionnaire: development and preliminary results. Journal of Personality Disorders. 1988;2(3):229-237. DOI: 10.1521/pedi.1988.2.3.229',
      url: 'https://doi.org/10.1521/pedi.1988.2.3.229',
    },
  ],
  questions: [
    {
      id: '1',
      form: { type: 'choice', question: '我尽量避免与可能批评我的人一块工作。', choices: globalChoices },
    },
    {
      id: '2',
      form: {
        type: 'choice',
        question: '没有得到别人的建议和再三宽心，我难以作出决定。',
        choices: globalChoices,
      },
    },
    {
      id: '3',
      form: {
        type: 'choice',
        question: '我常常将功夫花在细节上而忽略了大目标。',
        choices: globalChoices,
      },
    },
    { id: '4', form: { type: 'choice', question: '我希望能引人注目。', choices: globalChoices } },
    {
      id: '5',
      form: { type: 'choice', question: '我所作出的成绩远比别人所认为的要多。', choices: globalChoices },
    },
    {
      id: '6',
      form: {
        type: 'choice',
        question: '为了使我所爱的人不离开我，我会走极端。',
        choices: globalChoices,
      },
    },
    {
      id: '7',
      form: {
        type: 'choice',
        question: '别人抱怨我没有能够完成我的工作任务和所承诺的事情。',
        choices: globalChoices,
      },
    },
    {
      id: '8',
      form: {
        type: 'choice',
        question: '我曾几次遇到过法律上的麻烦(或如果我当时被抓住，我将会有这类麻烦)。',
        choices: globalChoices,
      },
    },
    {
      id: '9',
      form: {
        type: 'choice',
        question: '与家人或朋友一起消磨时间并不使我感到有趣。',
        choices: globalChoices,
      },
    },
    {
      id: '10',
      form: {
        type: 'choice',
        question: '我从周围所发生的事中接受到特殊的信息。',
        choices: globalChoices,
      },
    },
    {
      id: '11',
      form: {
        type: 'choice',
        question: '我知道如果我任别人怎样待我，他们将会从我身上乘机得利或试图欺骗我。',
        choices: globalChoices,
      },
    },
    { id: '12', form: { type: 'choice', question: '我有时心情不好。', choices: globalChoices } },
    {
      id: '13',
      form: {
        type: 'choice',
        question: '只有当我确信对方喜欢我，我才会与他们交朋友。',
        choices: globalChoices,
      },
    },
    { id: '14', form: { type: 'choice', question: '我通常心情抑郁。', choices: globalChoices } },
    {
      id: '15',
      form: {
        type: 'choice',
        question: '我让我的家人和朋友为我生活中的重要事情作出决定。',
        choices: globalChoices,
      },
    },
    {
      id: '16',
      form: {
        type: 'choice',
        question: '我做事过份追求完美，因此花费不少时间。',
        choices: globalChoices,
      },
    },
    {
      id: '17',
      form: { type: 'choice', question: '我比一般人对于异性更具有吸引力。', choices: globalChoices },
    },
    {
      id: '18',
      form: {
        type: 'choice',
        question: '我经常发现自己在想我是一个怎样重要的人，或将会成为这样的人。',
        choices: globalChoices,
      },
    },
    {
      id: '19',
      form: {
        type: 'choice',
        question: '我要么喜欢和佩服某人，要么怨恨他们，没有介于两者之间的感受。',
        choices: globalChoices,
      },
    },
    { id: '20', form: { type: 'choice', question: '我与别人打过许多次架。', choices: globalChoices } },
    {
      id: '21',
      form: { type: 'choice', question: '我觉得别人并不理解和赏识我。', choices: globalChoices },
    },
    {
      id: '22',
      form: { type: 'choice', question: '我宁可独自工作而不愿与他人一块工作。', choices: globalChoices },
    },
    {
      id: '23',
      form: {
        type: 'choice',
        question: '我能够在一些事情发生之前便知道他们会要发生。',
        choices: globalChoices,
      },
    },
    {
      id: '24',
      form: {
        type: 'choice',
        question: '我常常寻思我所认识的人是否真正信得过。',
        choices: globalChoices,
      },
    },
    { id: '25', form: { type: 'choice', question: '我偶尔在背后议论别人。', choices: globalChoices } },
    {
      id: '26',
      form: {
        type: 'choice',
        question: '因为我希望不受到别人的奚落或取笑，所以在与我有亲密关系的人面前压抑自己的情感。',
        choices: globalChoices,
      },
    },
    {
      id: '27',
      form: {
        type: 'choice',
        question: '我担心如果我表示与别人不一致的看法，便会失去他们的支持实施。',
        choices: globalChoices,
      },
    },
    { id: '28', form: { type: 'choice', question: '我为自卑感而苦恼。', choices: globalChoices } },
    {
      id: '29',
      form: {
        type: 'choice',
        question: '我将工作置于与家人或朋友相聚或娱乐之前。',
        choices: globalChoices,
      },
    },
    { id: '30', form: { type: 'choice', question: '我容易显露出自己的情绪。', choices: globalChoices } },
    {
      id: '31',
      form: {
        type: 'choice',
        question: '只有某些特别的人才能真正赏识和理解我。',
        choices: globalChoices,
      },
    },
    {
      id: '32',
      form: { type: 'choice', question: '我常想弄清自己究竟是何人。', choices: globalChoices },
    },
    {
      id: '33',
      form: {
        type: 'choice',
        question: '我常缺勤，也比我所认识到大多数人更多的调换工作。',
        choices: globalChoices,
      },
    },
    {
      id: '34',
      form: { type: 'choice', question: '性方面的事不能引起我的兴趣。', choices: globalChoices },
    },
    {
      id: '35',
      form: { type: 'choice', question: '别人认为我心情易变及脾气暴躁。', choices: globalChoices },
    },
    {
      id: '36',
      form: { type: 'choice', question: '我常能觉察和感受别人感受不到的事情。', choices: globalChoices },
    },
    {
      id: '37',
      form: {
        type: 'choice',
        question: '别人会把我向他们所说的话当作将来使我处于不利的把柄。',
        choices: globalChoices,
      },
    },
    { id: '38', form: { type: 'choice', question: '有一些人我不怎么喜欢。', choices: globalChoices } },
    {
      id: '39',
      form: { type: 'choice', question: '我比大多数人对于批评或拒绝更敏感。', choices: globalChoices },
    },
    {
      id: '40',
      form: {
        type: 'choice',
        question: '一旦事情需要我独自去干，我便感到难以开展。',
        choices: globalChoices,
      },
    },
    {
      id: '41',
      form: { type: 'choice', question: '我比别人有更强的道德观念。', choices: globalChoices },
    },
    {
      id: '42',
      form: { type: 'choice', question: '我是我自己最严厉的批评者。', choices: globalChoices },
    },
    {
      id: '43',
      form: { type: 'choice', question: '我用自己外貌来得到我所需要的注意。', choices: globalChoices },
    },
    {
      id: '44',
      form: { type: 'choice', question: '我很需要别人注意我或称赞我。', choices: globalChoices },
    },
    { id: '45', form: { type: 'choice', question: '我曾试过伤害自己或自杀。', choices: globalChoices } },
    {
      id: '46',
      form: { type: 'choice', question: '我做过很多不考虑后果的事情。', choices: globalChoices },
    },
    {
      id: '47',
      form: { type: 'choice', question: '很少有什么活动能够使我感兴趣。', choices: globalChoices },
    },
    {
      id: '48',
      form: { type: 'choice', question: '人们常常难以理解我谈话中的内容。', choices: globalChoices },
    },
    {
      id: '49',
      form: {
        type: 'choice',
        question: '我不喜欢上级交待我应该怎样干活的工作。',
        choices: globalChoices,
      },
    },
    {
      id: '50',
      form: {
        type: 'choice',
        question: '我时常留意与捉摸别人话中所隐含的意思。',
        choices: globalChoices,
      },
    },
    { id: '51', form: { type: 'choice', question: '我从未说过一次谎。', choices: globalChoices } },
    {
      id: '52',
      form: {
        type: 'choice',
        question: '我害怕陌生人，因为那会使我感到不自在。',
        choices: globalChoices,
      },
    },
    {
      id: '53',
      form: {
        type: 'choice',
        question: '我很需要别人喜欢我，以致为此作出许多我不情愿做的事情。',
        choices: globalChoices,
      },
    },
    {
      id: '54',
      form: {
        type: 'choice',
        question: '我积累了不少我不再需要而又不忍心扔掉的东西。',
        choices: globalChoices,
      },
    },
    {
      id: '55',
      form: {
        type: 'choice',
        question: '我虽然说得很多，但别人说我难以抓住要点。',
        choices: globalChoices,
      },
    },
    { id: '56', form: { type: 'choice', question: '我有很多的忧虑。', choices: globalChoices } },
    {
      id: '57',
      form: {
        type: 'choice',
        question: '当店员或营业员使我在柜台前和排队等待较长时间，我容易感到受到怠慢而生气。',
        choices: globalChoices,
      },
    },
    { id: '58', form: { type: 'choice', question: '我是一个情绪不稳定的人。', choices: globalChoices } },
    {
      id: '59',
      form: { type: 'choice', question: '对我来说说谎很容易，我常常这样做。', choices: globalChoices },
    },
    {
      id: '60',
      form: { type: 'choice', question: '我对于拥有亲密朋友没有什么兴趣。', choices: globalChoices },
    },
    {
      id: '61',
      form: { type: 'choice', question: '我常常保持警惕以防被别人乘机利用。', choices: globalChoices },
    },
    {
      id: '62',
      form: { type: 'choice', question: '我不会忘记和原谅那些待我不好的人。', choices: globalChoices },
    },
    {
      id: '63',
      form: { type: 'choice', question: '我对那些比我“走运”的人感到不满。', choices: globalChoices },
    },
    {
      id: '64',
      form: { type: 'choice', question: '核战争也许不是一个那么坏的想法。', choices: globalChoices },
    },
    {
      id: '65',
      form: {
        type: 'choice',
        question: '我会在独处时感到无能为力和无法照顾自己。',
        choices: globalChoices,
      },
    },
    {
      id: '66',
      form: {
        type: 'choice',
        question:
          '我常常不愿与他人合作或将事情托付给别人干，只是因为我不放心他们是否真正会按我的要求和方式去干。',
        choices: globalChoices,
      },
    },
    { id: '67', form: { type: 'choice', question: '我有一种表演天赋。', choices: globalChoices } },
    { id: '68', form: { type: 'choice', question: '有些人认为我利用别人。', choices: globalChoices } },
    { id: '69', form: { type: 'choice', question: '我觉得我的生活乏味。', choices: globalChoices } },
    {
      id: '70',
      form: { type: 'choice', question: '我对周围的人甚为挑剔与苛求。', choices: globalChoices },
    },
    { id: '71', form: { type: 'choice', question: '我不在乎别人会怎么说我。', choices: globalChoices } },
    {
      id: '72',
      form: {
        type: 'choice',
        question: '我难以在一种只有两人的场合单独与对方打交道。',
        choices: globalChoices,
      },
    },
    {
      id: '73',
      form: { type: 'choice', question: '人们常怪我没能意识到他们心情不好。', choices: globalChoices },
    },
    {
      id: '74',
      form: {
        type: 'choice',
        question: '我看上去可能会使别人认为我有些古怪和离奇。',
        choices: globalChoices,
      },
    },
    { id: '75', form: { type: 'choice', question: '我喜欢干冒险的事。', choices: globalChoices } },
    {
      id: '76',
      form: { type: 'choice', question: '我在回答了这份问卷时说了不少谎。', choices: globalChoices },
    },
    {
      id: '77',
      form: { type: 'choice', question: '我诉说许多我的苦楚和不幸。', choices: globalChoices },
    },
    { id: '78', form: { type: 'choice', question: '我难以控制恼怒或脾气。', choices: globalChoices } },
    { id: '79', form: { type: 'choice', question: '有的人嫉妒我。', choices: globalChoices } },
    { id: '80', form: { type: 'choice', question: '我易受别人的影响。', choices: globalChoices } },
    {
      id: '81',
      form: { type: 'choice', question: '我认为自己节约，而别人认为我吝啬。', choices: globalChoices },
    },
    {
      id: '82',
      form: {
        type: 'choice',
        question: '一旦我与别人的亲密关系终止，我便需要很快与其他人建立起这种关系。',
        choices: globalChoices,
      },
    },
    { id: '83', form: { type: 'choice', question: '我为自卑感而苦恼。', choices: globalChoices } },
    { id: '84', form: { type: 'choice', question: '我是一个悲观的人。', choices: globalChoices } },
    {
      id: '85',
      form: { type: 'choice', question: '当别人中伤我时，我毫不犹豫给予还击。', choices: globalChoices },
    },
    {
      id: '86',
      form: { type: 'choice', question: '别人围在我身旁会使我感到紧张不安。', choices: globalChoices },
    },
    {
      id: '87',
      form: {
        type: 'choice',
        question: '在没有经历过的新场合，我害怕自己会发窘。',
        choices: globalChoices,
      },
    },
    {
      id: '88',
      form: {
        type: 'choice',
        question: '我时常很害怕别人会离开我而让我自己照顾自己的一切事情。',
        choices: globalChoices,
      },
    },
    { id: '89', form: { type: 'choice', question: '人们说我相当固执。', choices: globalChoices } },
    {
      id: '90',
      form: {
        type: 'choice',
        question: '与跟我交往的人相比，我总是很快变成与别人建立起亲密关系。',
        choices: globalChoices,
      },
    },
    {
      id: '91',
      form: { type: 'choice', question: '我能在对别人发火之后很快向他们道歉。', choices: globalChoices },
    },
    { id: '92', form: { type: 'choice', question: '别人觉得我傲慢。', choices: globalChoices } },
    {
      id: '93',
      form: {
        type: 'choice',
        question: '遇到紧张的事情时，我会变得敏感多疑或记不起刚刚发生过的事情。',
        choices: globalChoices,
      },
    },
    {
      id: '94',
      form: {
        type: 'choice',
        question: '只要我能得到我所需要的，我不会在乎别人会受到什么伤害。',
        choices: globalChoices,
      },
    },
    { id: '95', form: { type: 'choice', question: '我与别人保持相当的距离。', choices: globalChoices } },
    {
      id: '96',
      form: {
        type: 'choice',
        question: '我常想弄明白我的妻子(丈夫、女朋友或男朋友)是否有过不忠实的行为。',
        choices: globalChoices,
      },
    },
    { id: '97', form: { type: 'choice', question: '我常有内疚感。', choices: globalChoices } },
    {
      id: '98',
      form: {
        type: 'choice',
        question:
          '我回避做许多我应做但需人际接触的事情，因为我害怕会得不到别人的赞许或遭到拒绝与批评。',
        choices: globalChoices,
      },
    },
    {
      id: '99',
      form: {
        type: 'choice',
        question:
          '必须承认，我做事时总是要花许多时间考虑细节、规则或程序以至于我感到难以象别人那样迅速和有效地完成事情。',
        choices: globalChoices,
      },
    },
    {
      id: '100',
      form: {
        type: 'choice',
        question: '一旦我发现与我关系亲密的人不再接近我，我便会感到十分烦恼并作出各种强烈的反应。',
        choices: globalChoices,
      },
    },
    {
      id: '101',
      form: {
        type: 'choice',
        question: '我与别人的关系有时变得很亲密，有时则变得充满怨恨。',
        choices: globalChoices,
      },
    },
    {
      id: '102',
      form: {
        type: 'choice',
        question: '我在表达自己的感受和情绪时比一般人更为兴奋和强烈。',
        choices: globalChoices,
      },
    },
    {
      id: '103',
      form: {
        type: 'choice',
        question: '我常常禁不住要对我周围人们的一些毛病作些否定性的评价。',
        choices: globalChoices,
      },
    },
    {
      id: '104',
      form: {
        type: 'choice',
        question: '我无论对别人还是对自己都很注意节省，尽管有人会认为我很吝惜。',
        choices: globalChoices,
      },
    },
    {
      id: '105',
      form: {
        type: 'choice',
        question: '我习惯于按自己的方式行事，难以因别人的建议而改变，即使是这些建议看来很有道理。',
        choices: globalChoices,
      },
    },
    {
      id: '106-subtitle',
      form: {
        type: "subtitle",
        title: "我凭一时冲动干过以下的事情以至给我带来麻烦",
      }
    },
    {
      id: '106.1',
      form: {
        type: 'choice',
        question:
          '花费的金钱超前了我自己所容有的数额。',
        choices: globalChoices,
      },
    }, {
      id: '106.2',
      form: {
        type: 'choice',
        question:
          '与我不熟悉的人发生性关系。',
        choices: globalChoices,
      },
    },
    {
      id: '106.3',
      form: {
        type: 'choice',
        question:
          '喝酒过多。',
        choices: globalChoices,
      },
    }, {
      id: '106.4',
      form: {
        type: 'choice',
        question:
          '服用成瘾药物。',
        choices: globalChoices,
      },
    }, {
      id: '106.5',
      form: {
        type: 'choice',
        question:
          '无节制的大吃。',
        choices: globalChoices,
      },
    },
    {
      id: '106.6',
      form: {
        type: 'choice',
        question:
          '莽撞骑车或驾驶。',
        choices: globalChoices,
      },
    }, {
      id: "107.subtitle",
      form: {
        type: "subtitle",
        title: "我小时候(15岁以前)干过以下事情："
      }
    },
    {
      id: '107.1',
      form: {
        type: 'choice',
        question:
          '我被认为是一个霸道的人。',
        choices: globalChoices,
      },
    },
    {
      id: '107.2',
      form: {
        type: 'choice',
        question:
          '我曾先动手打别的小孩。',
        choices: globalChoices,
      },
    },
    {
      id: '107.3',
      form: {
        type: 'choice',
        question:
          '我曾用我手头的武器打架。',
        choices: globalChoices,
      },
    },
    {
      id: '107.4',
      form: {
        type: 'choice',
        question:
          '我曾对别人进行抢劫。',
        choices: globalChoices,
      },
    },
    {
      id: '107.5',
      form: {
        type: 'choice',
        question:
          '我曾对别人进行身体上的虐待。',
        choices: globalChoices,
      },
    },
    {
      id: '107.6',
      form: {
        type: 'choice',
        question:
          '我曾虐待动物。',
        choices: globalChoices,
      },
    },
    {
      id: '107.7',
      form: {
        type: 'choice',
        question:
          '我曾强迫别人与我发生性关系。',
        choices: globalChoices,
      },
    },
    {
      id: '107.8',
      form: {
        type: 'choice',
        question:
          '我曾多次说慌。',
        choices: globalChoices,
      },
    },
    {
      id: '107.9',
      form: {
        type: 'choice',
        question:
          '我曾没经父母的允许而在外面过夜。',
        choices: globalChoices,
      },
    },
    {
      id: '107.10',
      form: {
        type: 'choice',
        question:
          '我偷过别人的东西。',
        choices: globalChoices,
      },
    },
    {
      id: '107.11',
      form: {
        type: 'choice',
        question:
          '我纵过火。',
        choices: globalChoices,
      },
    },
    {
      id: '107.12',
      form: {
        type: 'choice',
        question:
          '我曾打破窗户或捣坏财物。',
        choices: globalChoices,
      },
    },
    {
      id: '107.13',
      form: {
        type: 'choice',
        question:
          '我曾不止一次离家在外过夜。',
        choices: globalChoices,
      },
    },
    {
      id: '107.14',
      form: {
        type: 'choice',
        question:
          '我在13岁之前经常逃学。',
        choices: globalChoices,
      },
    },
    {
      id: '107.15',
      form: {
        type: 'choice',
        question:
          '我曾撬门窗而入别人的家，房子或汽车。',
        choices: globalChoices,
      },
    },
  ],
  result: (datas) => {
    const _data = [NaN,]
    for (let i = 1; i <= 105; i++) {
      if (datas[i] === void 0) {
        return {
          ok: false,
          require: String(i),
        }
      }
      _data[i] = datas[i];
    }
    const data106 = [NaN];
    let sum106 = 0;
    for (let i = 1; i <= 6; i++) {
      const id = `106.${i}`
      if (datas[id] === void 0) {
        return {
          ok: false,
          require: id,
        }
      }
      data106[i] = datas[id];
      sum106 += datas[id];
    }
    _data['106'] = sum106 >= 2 ? 1 : 0;

    const data107 = [NaN];
    let sum107 = 0;
    for (let i = 1; i <= 15; i++) {
      const id = `107.${i}`
      if (datas[id] === void 0) {
        return {
          ok: false,
          require: id,
        }
      }
      data107[i] = datas[id];
      sum107 += datas[id];
    }
    _data['107'] = sum107 >= 2 ? 1 : 0;


    const getValue = (id: number): number => {
      if (reverse.includes(id as never)) {
        return 1 - _data[id];
      }
      return _data[id];
    }
    const results = {} as Record<keyof typeof resultMap, number>;

    for (const key in resultMap) {
      results[key as keyof typeof resultMap] = 0;
      for (const id of resultMap[key as keyof typeof resultMap]) {
        results[key as keyof typeof resultMap] += getValue(id);
      }
    }
    const sum = scoresKeys.map((key) => results[key as keyof typeof resultMap] || 0).reduce((a, b) => a + b, 0) - _data[60];
    const getThreshold = (key: keyof typeof nameMap) => {
      if (key === 'TG' || key === 'SUS') {
        return extraThresholds[key];
      }
      return thresholds[key as keyof typeof thresholds];
    };
    const detailLines = allScoreKeys.map((key) => {
      const score = results[key as keyof typeof resultMap] || 0;
      const threshold = getThreshold(key);
      const status = score >= threshold ? '阳性' : '阴性';
      return `${nameMap[key as keyof typeof nameMap]}：${score}分（${status}，阈值≥${threshold}）`;
    });
    const tgScore = results.TG || 0;
    const susScore = results.SUS || 0;
    const description = [
      `总分：${sum}分`,
      ...detailLines,
      tgScore >= extraThresholds.TG ? `掩饰分：${tgScore}分，达到或超过阈值≥${extraThresholds.TG}，量表结果可信度低。` : `掩饰分：${tgScore}分，未达到阈值≥${extraThresholds.TG}。`,
      susScore >= extraThresholds.SUS ? `怀疑分：${susScore}分，达到或超过阈值≥${extraThresholds.SUS}。` : `怀疑分：${susScore}分，未达到阈值≥${extraThresholds.SUS}。`,
    ].join('\n');
    return {
      ok: true,
      title: 'PDQ-4+ 评分结果',
      description,
      score: [
        {
          type: "lines",
          min: 0,
          max: 9,
          splitLinesData: scoresKeys.map(
            (key) => `${nameMap[key as keyof typeof resultMap]}\n${results[key]! || 0}`
          ),
          values: [{
            values: scoresKeys.map((key) => results[key as keyof typeof resultMap] || 0),
          }],
        }
      ],
    };
  },

  tags: ['自评', '焦虑'],
};
export default pdq4p;
