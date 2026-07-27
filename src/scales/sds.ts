import type { Scale } from '@/types/form';

const globalChoices = ['没有或很少时间', '小部分时间', '相当多时间', '绝大部分或全部时间'] as const;
const reverse = [2, 5, 6, 11, 12, 14, 16, 17, 18, 20] as const;

export const sds: Scale = {
  id: 'sds',
  name: '抑郁自评量表 (SDS)',
  description:
    '抑郁自评量表（Self-rating Depression Scale，SDS）由 William W. K. Zung 于 1965 年编制，共 20 项，其中 10 项反向计分，用于成年人近期抑郁症状的筛查、严重度评估及疗效变化观察。各题按 1—4 分计分，粗分相加后乘以 1.25 并取整数部分得到标准分；本页采用中国常用的 53、63、73 分界。该量表不能替代临床诊断，且对严重精神运动性迟滞者，以及文化程度较低或理解能力受限者，评定可能存在困难。',
  refer: [
    {
      title: 'A Self-Rating Depression Scale',
      url: 'https://doi.org/10.1001/archpsyc.1965.01720310065008',
    },
  ],
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
      if (!(i in datas) || datas[i] === void 0) {
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
    const level =
      r < 53
        ? '未达抑郁症状筛查界值'
        : r < 63
          ? '轻度抑郁症状（筛查阳性）'
          : r < 73
            ? '中度抑郁症状（筛查阳性）'
            : '重度抑郁症状（筛查阳性）';
    const advice =
      r < 53
        ? '结果仅反映近期自评；如症状持续或已影响生活，仍可咨询专业人员。'
        : r < 63
          ? '建议结合症状持续时间和功能影响，适时向心理或精神卫生专业人员咨询。'
          : '建议尽快向心理或精神卫生专业人员寻求进一步评估与帮助。';
    const safetyReminder =
      Number(datas['19']) >= 2
        ? '\n第19题提示较频繁的死亡相关想法，请尽快告诉可信任的人并寻求专业评估；如当前有强烈或迫切的自伤／自杀想法，请让可信任者陪同并就近急诊，紧急时拨打120或110。'
        : '';
    return {
      ok: true,
      title: level,
      description: `粗分：${n}，标准分：${r}。${advice}本结果为筛查及严重度参考，不能作为诊断。${safetyReminder}`,
      score: [
        {
          type: 'pointer',
          value: r,
          part: [
            { start: 25, end: 53, color: '#007700' },
            { start: 53, end: 63, color: '#ACAC00' },
            { start: 63, end: 73, color: '#FF7500' },
            { start: 73, end: 100, color: '#FF0000' },
          ],
        },
      ],
    };
  },

  tags: ['自评', '抑郁', '筛查', '成人'],
};
export default sds;
