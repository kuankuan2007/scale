import type { Scale } from '@/types/form';

const doubles = [5, 6, 8, 9] as const;

export const ymrs: Scale = {
  id: 'ymrs',
  name: '杨氏躁狂状态评定量表 (YMRS)',
  description:
    '杨氏躁狂状态评定量表（Young Mania Rating Scale，YMRS）由 Young、Biggs、Ziegler、Meyer 于 1978 年编制，共 11 项，是结合半结构访谈与临床观察完成的临床他评量表，用于评估躁狂症状严重度及疗效变化。量表结果不能单独用于诊断，应由受过训练的专业人员结合病史、功能损害及其他临床资料解释。',
  refer: [
    {
      title: 'A Rating Scale for Mania: Reliability, Validity and Sensitivity',
      url: 'https://doi.org/10.1192/bjp.133.5.429',
    },
  ],
  questions: [
    {
      id: '1',
      form: {
        type: 'choice',
        question: '情绪高涨',
        choices: [
          '无',
          '询问时有轻度或可能的增加',
          '主观感到有肯定的心境高涨；乐观自信；愉悦；与内容相称',
          '心境高涨，与内容不相称；滑稽可笑',
          '欣快；不适当地发笑；唱歌',
        ],
      },
    },
    {
      id: '2',
      form: {
        type: 'choice',
        question: '活动-精力水平',
        choices: [
          '无',
          '主观上增加',
          '活跃；手势增多',
          '精力过剩；有时活动过多；坐立不安（可以安静下来）',
          '运动性兴奋；持续活动过多（无法安静下来）',
        ],
      },
    },
    {
      id: '3',
      form: {
        type: 'choice',
        question: '性欲',
        choices: [
          '正常；没有增加',
          '轻度或可能增加',
          '问及时主观感到增加',
          '自发性的性内容；详细阐述性问题；自我报告性欲亢进',
          '明显的性行为（针对患者、工作人员或检查者）',
        ],
      },
    },
    {
      id: '4',
      form: {
        type: 'choice',
        question: '睡眠',
        choices: [
          '报告没有睡眠减少',
          '睡眠比平时减少至多1小时',
          '睡眠比平时减少1小时以上',
          '报告睡眠需求减少',
          '否认需要睡眠',
        ],
      },
    },
    {
      id: '5',
      form: {
        type: 'choice',
        question: '易激惹',
        choices: [
          '无',
          '主观感到易激惹',
          '检查中有时易激惹；近期在病房中有愤怒或恼怒发作',
          '检查中经常不耐烦；自始至终回答简短、生硬',
          '敌意，不合作；检查无法进行',
        ],
      },
    },
    {
      id: '6',
      form: {
        type: 'choice',
        question: '言语（速度和数量）',
        choices: [
          '无增多',
          '感觉健谈',
          '时有语速语量增加或啰嗦',
          '言语紧迫；语速语量持续增加；难以打断',
          '急迫；无法打断，说个不停',
        ],
      },
    },
    {
      id: '7',
      form: {
        type: 'choice',
        question: '语言-思维障碍',
        choices: [
          '无',
          '迂回；轻微的离题；思维敏捷',
          '离题；缺乏思维目标；经常改变话题；思维加速',
          '思想奔逸；离题；难以跟上其思路；押韵，模仿他人说话',
          '语无伦次；无法交流',
        ],
      },
    },
    {
      id: '8',
      form: {
        type: 'choice',
        question: '内容',
        choices: [
          '正常',
          '可疑的计划，新的兴趣',
          '特殊的项目；超宗教观念',
          '夸大或偏执观念；牵连观念',
          '妄想；幻觉',
        ],
      },
    },
    {
      id: '9',
      form: {
        type: 'choice',
        question: '破坏性/攻击性',
        choices: [
          '无，合作',
          '好讥讽；时常提高嗓门，戒备',
          '要求过多；在病房中威胁',
          '威胁检查者；大声喊叫；检查困难',
          '好斗；破坏性；无法检查',
        ],
      },
    },
    {
      id: '10',
      form: {
        type: 'choice',
        question: '外貌',
        choices: [
          '穿戴修饰得体',
          '稍微不整洁',
          '仪容不佳；比较不整洁；穿着过度',
          '穿戴蓬乱；部分着装；艳俗的化妆',
          '极度邋遢；衣衫褴褛；奇装异服',
        ],
      },
    },
    {
      id: '11',
      form: {
        type: 'choice',
        question: '自知力',
        choices: [
          '有；承认有病；同意需要治疗',
          '承认可能有病',
          '承认有行为改变，但否认有病',
          '承认可能有行为改变，但否认有病',
          '否认有任何行为改变',
        ],
      },
    },
  ],
  result: (datas) => {
    let d = 0;

    for (let i = 1; i <= 11; i++) {
      if (!(i in datas) || datas[i] === void 0) {
        return {
          ok: false,
          require: String(i),
        };
      }
      const choiceIndex = Number(datas[i]);
      if (doubles.includes(i as never)) {
        d += choiceIndex * 2;
      } else {
        d += choiceIndex;
      }
    }

    return {
      ok: true,
      title:
        d <= 5
          ? '未见明显躁狂症状'
          : d <= 12
            ? '轻度躁狂'
            : d <= 19
              ? '中度躁狂'
              : d <= 29
                ? '重度躁狂'
                : '极重度躁狂',
      description: `总分：${d}/60分。按国内常用分级：0—5分未见明显躁狂症状，6—12分轻度，13—19分中度，20—29分重度，30—60分极重度。本结果用于严重度及疗效评定，不能替代诊断。${d >= 20 ? '当前评分达到重度或以上，建议尽快由精神卫生专业人员进一步评估；如出现明显冲动、攻击、危险行为或无法保证安全，请及时就近急诊。' : ''}`,
      score: [
        {
          type: 'pointer',
          value: d,
          part: [
            { start: 0, end: 6, color: '#007700' },
            { start: 6, end: 13, color: '#ACAC00' },
            { start: 13, end: 20, color: '#FFAA00' },
            { start: 20, end: 30, color: '#FF7500' },
            { start: 30, end: 60, color: '#FF0000' },
          ],
        },
      ],
    };
  },

  tags: ['躁狂', '祂评', '双相', '临床评定', '严重度'],
};
export default ymrs;
