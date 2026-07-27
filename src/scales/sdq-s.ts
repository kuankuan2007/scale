import type { Scale } from '@/types/form';
import { buildSelfQuestions, calcSdqResult, sdqRefer } from './sdq';

export const sdqS: Scale = {
  id: 'sdq-s',
  name: '长处和困难问卷 (SDQ) 学生自评版',
  description: [
    '长处和困难问卷（SDQ）由 Robert Goodman 于 1997 年提出，是用于儿童青少年行为与情绪问题筛查的简明问卷。当前页面为学生自评版；如需家长/教师版，请使用',
    {
      type: 'link',
      content: '家长/教师版',
      to: '/scale/sdq',
    },
    '。',
  ],
  refer: [...sdqRefer],
  questions: buildSelfQuestions(),
  result: (datas) => calcSdqResult(datas, 2),
  tags: ['自评', '筛查', '青少年'],
};

export default sdqS;
