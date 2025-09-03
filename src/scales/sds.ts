import type { Scale } from '@/types/form';

const globalChoices = ['没有或很少时间', '小部分时间', '相当多时间', '绝大部分或全部时间'] as const;
const reverse = [2, 5, 6, 11, 12, 14, 16, 17, 18, 20] as const;

export const sds: Scale = {
  id: 'sds',
  name: '抑郁自评量表 (SDS)',
  description:
    '抑郁自评量表（Self-rating depression scale，SDS），又称Zung宗氏抑郁自评量表，是含有20个项目，分为4级评分的自评量表，原型是W.K.Zung编制的抑郁量表（1965）。其特点是使用简便，并能相当直观地反映抑郁患者的主观感受及其在治疗中的变化。主要适用于具有抑郁症状的成年人，包括门诊及住院患者。只是对严重迟缓症状的抑郁，评定有困难。同时，SDS对于文化程度较低或智力水平稍差的人使用效果不佳。',
  questions: [
    {
      id: '1',
      form: {
        type: 'choice',
        question: '我觉得闷闷不乐，情绪低沉',
        choices: globalChoices,
      },
    },
    {
      id: '2',
      form: {
        type: 'choice',
        question: '我觉得一天之中早晨心情最好',
        choices: globalChoices,
      },
    },
    {
      id: '3',
      form: {
        type: 'choice',
        question: '我一阵阵哭出来或者觉得想哭',
        choices: globalChoices,
      },
    },
    {
      id: '4',
      form: {
        type: 'choice',
        question: '我晚上睡眠不好',
        choices: globalChoices,
      },
    },
    {
      id: '5',
      form: {
        type: 'choice',
        question: '我吃得跟平常一样多',
        choices: globalChoices,
      },
    },
    {
      id: '6',
      form: {
        type: 'choice',
        question: '我与异性亲密接触时和以往一样感到愉快',
        choices: globalChoices,
      },
    },
    {
      id: '7',
      form: {
        type: 'choice',
        question: '我发觉我的体重在下降',
        choices: globalChoices,
      },
    },
    {
      id: '8',
      form: {
        type: 'choice',
        question: '我有便秘的苦恼',
        choices: globalChoices,
      },
    },
    {
      id: '9',
      form: {
        type: 'choice',
        question: '我心跳比平时快',
        choices: globalChoices,
      },
    },
    {
      id: '10',
      form: {
        type: 'choice',
        question: '我无缘无故感到疲乏',
        choices: globalChoices,
      },
    },
    {
      id: '11',
      form: {
        type: 'choice',
        question: '我的头脑跟平常一样清楚',
        choices: globalChoices,
      },
    },
    {
      id: '12',
      form: {
        type: 'choice',
        question: '我觉得做以前经常做的事并没有困难',
        choices: globalChoices,
      },
    },
    {
      id: '13',
      form: {
        type: 'choice',
        question: '我坐立不安，难以保持平静',
        choices: globalChoices,
      },
    },
    {
      id: '14',
      form: {
        type: 'choice',
        question: '我对将来抱有希望',
        choices: globalChoices,
      },
    },
    {
      id: '15',
      form: {
        type: 'choice',
        question: '我比平常容易激动',
        choices: globalChoices,
      },
    },
    {
      id: '16',
      form: {
        type: 'choice',
        question: '我容易做出决定',
        choices: globalChoices,
      },
    },
    {
      id: '17',
      form: {
        type: 'choice',
        question: '我觉得自己是个有用的人，有人需要我',
        choices: globalChoices,
      },
    },
    {
      id: '18',
      form: {
        type: 'choice',
        question: '我的生活过得很有意思',
        choices: globalChoices,
      },
    },
    {
      id: '19',
      form: {
        type: 'choice',
        question: '我认为如果我死了别人会生活得好些',
        choices: globalChoices,
      },
    },
    {
      id: '20',
      form: {
        type: 'choice',
        question: '平常感兴趣的事我仍然照样感兴趣',
        choices: globalChoices,
      },
    },
  ],
  result: (datas) => {
    let n = 0;
    for (let i = 1; i <= 20; i++) {
      if (!(i in datas)) {
        return {
          ok: false,
          require: String(i),
        };
      }
      if (reverse.includes(i as never)) {
        n += 4 - Number(datas[i]);
      } else {
        n += Number(datas[i]) + 1;
      }
    }
    const r = Math.floor(n * 1.25);
    return {
      ok: true,
      title: r <= 52 ? '正常' : `有(${r <= 62 ? '轻度' : r <= 72 ? '中度' : '重度'})抑郁倾向`,
      description: `粗分：${n}，标准分值：${r}。`,
      score: [
        {
          type: 'pointer',
          value: r,
          part: [
            { start: 25, end: 53, color: '#009400' },
            { start: 52.5, end: 63, color: '#ACAC00' },
            { start: 62.5, end: 73, color: '#FF7500' },
            { start: 72.5, end: 100, color: '#FF0000' },
          ],
        },
      ],
    };
  },
  dataIsValid: (data) => {
    for (let i = 1; i <= 20; i++) {
      if (
        !(i in data) ||
        typeof data[i as never] !== 'number' ||
        data[i as never] < 1 ||
        data[i as never] > 4 ||
        Math.floor(data[i as never]) !== data[i as never]
      )
        return false;
    }
    return true;
  },
  tags: ['自评', '抑郁'],
};
export default sds;
