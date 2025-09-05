import type { Scale } from '@/types/form';

export const bdi: Scale = {
  id: 'bdi',
  name: '贝克抑郁量表 (BDI)',
  description:
    '贝克抑郁自评量表（Beck Depression Inventory）是专门评测抑郁程度的。整个量表包括下面21组项目，每组有4句陈述。',
  questions: [
    {
      id: '1',
      form: {
        type: 'choice',
        question: '心情',
        choices: [
          '我不感到忧郁',
          '我感到忧郁',
          '我整天都感到忧愁，且不能改变这种情绪',
          '我非常忧伤或不愉快，以至我不能忍受',
        ],
      },
    },
    {
      id: '2',
      form: {
        type: 'choice',
        question: '悲观',
        choices: [
          '对于将来我不感到悲观',
          '我对将来感到悲观',
          '我感到没有什么可指望的',
          '我感到将来无望，事事都不能变好',
        ],
      },
    },
    {
      id: '3',
      form: {
        type: 'choice',
        question: '失败感',
        choices: [
          '我不像一个失败者',
          '我觉得我比一般人失败的次数多些',
          '当我回首过去我看到的是许多失败',
          '我感到自己是一个彻底失败的人',
        ],
      },
    },
    {
      id: '4',
      form: {
        type: 'choice',
        question: '不满',
        choices: [
          '我对事物像往常一样满意',
          '我对食物不像往常一样满意',
          '我不再对任何事情感到真正的满意',
          '我对每件事都不满意或讨厌',
        ],
      },
    },
    {
      id: '5',
      form: {
        type: 'choice',
        question: '自罪感',
        choices: [
          '我没有特别感到内疚',
          '一部分时间里我感到内疚',
          '在相当一部分时间里我感到内疚',
          '我时刻感到内疚',
        ],
      },
    },
    {
      id: '6',
      form: {
        type: 'choice',
        question: '惩罚感',
        choices: [
          '我没有感到我正在受惩罚',
          '我感到我可能受惩罚',
          '我预感我会受惩罚',
          '我感到我正在受惩罚',
        ],
      },
    },
    {
      id: '7',
      form: {
        type: 'choice',
        question: '自厌',
        choices: ['我感到我并不使人失望', '我对自己失望', '我讨厌自己', '我痛恨自己'],
      },
    },
    {
      id: '8',
      form: {
        type: 'choice',
        question: '自责',
        choices: [
          '我感到我并不比别人差',
          '我对自己的缺点和错误常自我反省',
          '我经常责备自己的过失',
          '每次发生糟糕的事情我都责备自己',
        ],
      },
    },
    {
      id: '9',
      form: {
        type: 'choice',
        question: '自杀倾向',
        choices: [
          '我没有任何自杀想法',
          '我有自杀的念头但不会真的去自杀',
          '我很想自杀',
          '如果有机会我就会自杀',
        ],
      },
    },
    {
      id: '10',
      form: {
        type: 'choice',
        question: '痛苦',
        choices: [
          '我并不比以往爱哭',
          '我现在比以前爱哭',
          '现在我经常苦',
          '我以往能哭，但现在即使我想哭也哭不出来',
        ],
      },
    },
    {
      id: '11',
      form: {
        type: 'choice',
        question: '易激动',
        choices: [
          '我并不比以往容易激怒',
          '我比以往容易激怒或生气',
          '我现在经常容易发火',
          '以往能激怒我的哪那些事情现在则完全不能激怒我了',
        ],
      },
    },
    {
      id: '12',
      form: {
        type: 'choice',
        question: '社会退缩',
        choices: [
          '我对其他人的兴趣没有减少',
          '我对他人的兴趣比以往减少了',
          '我对他人丧失了大部分兴趣',
          '我对他人现在毫无兴趣',
        ],
      },
    },
    {
      id: '13',
      form: {
        type: 'choice',
        question: '犹豫不决',
        choices: [
          '我与以往一样能做决定',
          '我现在做决定没有以前果断',
          '我现在做决定比以往困难的多',
          '我现在完全不能做决定',
        ],
      },
    },
    {
      id: '14',
      form: {
        type: 'choice',
        question: '形象歪曲',
        choices: [
          '我觉得自己看上去和以前差不多',
          '我担心自己看上去老了或没有以前好看了',
          '我觉得自己的外貌变得不好看了，而且是永久性改变',
          '我认为自己看上去很丑了',
        ],
      },
    },
    {
      id: '15',
      form: {
        type: 'choice',
        question: '活动受抑制',
        choices: [
          '我能像以往一样工作',
          '我需要经一番特别努力才能开始做事',
          '我做任何事情都需要做很大的努力，强迫自己去做',
          '我完全不能工作',
        ],
      },
    },
    {
      id: '16',
      form: {
        type: 'choice',
        question: '睡眠障碍',
        choices: [
          '我睡眠像以往一样好',
          '我睡眠没有以往那么好',
          '我比往常早醒1-2小时，再入睡有困难',
          '我比往常早醒几个小时，且不能再次入睡',
        ],
      },
    },
    {
      id: '17',
      form: {
        type: 'choice',
        question: '疲劳',
        choices: [
          '我现在并不比以往感到容易疲劳',
          '我现在比以往容易疲劳',
          '我做任何事情都容易疲劳',
          '我太疲惫了，以至我不能做任何事情',
        ],
      },
    },
    {
      id: '18',
      form: {
        type: 'choice',
        question: '食欲下降',
        choices: [
          '我的食欲和以前一样好',
          '我现在食欲没有往常那样好',
          '我的食欲现在差多了',
          '我完全没有食欲了',
        ],
      },
    },
    {
      id: '19',
      form: {
        type: 'choice',
        question: '体重减轻',
        choices: [
          '我最近没有明显的体重减轻',
          '我体重下降超过2.5kg',
          '我体重下降超过5kg',
          '我体重下降超过7.5kg，我用控制饮食来减轻体重',
        ],
      },
    },
    {
      id: '20',
      form: {
        type: 'choice',
        question: '有关躯体的健康观念',
        choices: [
          '与以往比，我并不怎么担心身体健康',
          '我担心自己身体的毛病，如疼痛，反胃及便秘',
          '我很着急身体出毛病而妨碍我思考其他问题',
          '我非常着急身体疾病，以至不能思考任何其他事情',
        ],
      },
    },
    {
      id: '21',
      form: {
        type: 'choice',
        question: '性欲减退',
        choices: [
          '我的性欲最近没有什么变化',
          '我的性欲比以往差些',
          '现在我的性欲比以往减退了许多',
          '我完全丧失了性欲',
        ],
      },
    },
  ],
  result: (datas) => {
    let n = 0;
    for (let i = 1; i <= 21; i++) {
      if (!(i in datas)) {
        return {
          ok: false,
          require: String(i),
        };
      }
      n += Number(datas[i]);
    }
    return {
      ok: true,
      title: n <= 10 ? '正常' : `有(${n <= 15 ? '轻度' : n <= 25 ? '中度' : '重度'})抑郁倾向`,
      description: `总分${n}`,
      score: [
        {
          type: 'pointer',
          value: n,
          part: [
            { start: 0, end: 9.5, color: '#009400' },
            { start: 9.5, end: 15.5, color: '#ACAC00' },
            { start: 15.5, end: 25.5, color: '#FF7500' },
            { start: 25.5, end: 63, color: '#FF0000' },
          ],
        },
      ],
    };
  },

  tags: ['自评', '抑郁'],
};
export default bdi;
