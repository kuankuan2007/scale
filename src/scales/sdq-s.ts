import type { Scale } from '@/types/form';
import { buildSelfQuestions, calcSdqResult, sdqRefer } from './sdq';

export const sdqS: Scale = {
  id: 'sdq-s',
  name: '长处和困难问卷学生自评版 (SDQ)',
  description: [
    '长处和困难问卷（Strengths and Difficulties Questionnaire，SDQ）由 Robert N. Goodman 编制，1997 年发表主量表，1998 年报告自评版效度。量表含 25 项，涵盖情绪症状、品行问题、多动、同伴交往问题和亲社会行为五个维度，并附影响补充题；学生自评版主要适用于约 11—17 岁青少年，用于情绪与行为问题筛查，不能替代临床诊断。结果保留传统正常／边缘／异常阈值，影响分为 0—10 分（0 正常、1 边缘、2 分及以上异常）。如需家长／教师版，请使用',
    {
      type: 'link',
      content: '家长/教师版',
      to: '/scale/sdq',
    },
    '。',
  ],
  refer: [
    ...sdqRefer,
    {
      title:
        'The Strengths and Difficulties Questionnaire: A Pilot Study on the Validity of the Self-Report Version',
      url: 'https://doi.org/10.1007/s007870050057',
    },
  ],
  questions: buildSelfQuestions(),
  result: (datas) => calcSdqResult(datas, 2),
  tags: ['自评', '筛查', '青少年'],
};

export default sdqS;
