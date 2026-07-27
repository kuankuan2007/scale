import type { Scale } from '@/types/form';

const globalChoices = ['没有或很少时间', '小部分时间', '相当多时间', '绝大部分或全部时间'] as const;
const reverse = [5, 9, 13, 17, 19] as const;
export const sas: Scale = {
  id: 'sas',
  name: '焦虑自评量表 (SAS)',
  description:
    '焦虑自评量表（Self-rating Anxiety Scale，SAS）由 W. K. Zung 于1971年编制，共20项，其中5项为反向计分，适用于成人近期焦虑症状评估。粗分范围20～80，乘以1.25并取整得到标准分，用于评估症状严重度及疗效变化。结果不能作为独立诊断，须结合临床访谈、病史和功能受损情况综合判断。',
  refer: [
    {
      title: 'A Rating Instrument for Anxiety Disorders',
      url: 'https://doi.org/10.1016/S0033-3182(71)71479-0',
    },
  ],
  questions: [
    {
      id: '1',
      form: { type: 'choice', question: '我觉得比平常容易紧张或着急', choices: globalChoices },
    },
    { id: '2', form: { type: 'choice', question: '我无缘无故地感到害怕', choices: globalChoices } },
    {
      id: '3',
      form: { type: 'choice', question: '我容易心里烦乱或觉得惊恐', choices: globalChoices },
    },
    { id: '4', form: { type: 'choice', question: '我觉得我可能将要发疯', choices: globalChoices } },
    {
      id: '5',
      form: {
        type: 'choice',
        question: '我觉得一切都好，也不会发生什么不幸',
        choices: globalChoices,
      },
    },
    { id: '6', form: { type: 'choice', question: '我手脚发抖打颤', choices: globalChoices } },
    {
      id: '7',
      form: { type: 'choice', question: '我因为头痛、颈痛和背痛而苦恼', choices: globalChoices },
    },
    { id: '8', form: { type: 'choice', question: '我感觉容易衰弱和疲乏', choices: globalChoices } },
    {
      id: '9',
      form: {
        type: 'choice',
        question: '我觉得心平气和，并且容易安静坐着',
        choices: globalChoices,
      },
    },
    { id: '10', form: { type: 'choice', question: '我觉得心跳很快', choices: globalChoices } },
    {
      id: '11',
      form: { type: 'choice', question: '我因为一阵阵头晕而苦恼', choices: globalChoices },
    },
    {
      id: '12',
      form: { type: 'choice', question: '我有晕倒发作或觉得要晕倒的感觉', choices: globalChoices },
    },
    {
      id: '13',
      form: { type: 'choice', question: '我呼气吸气都感到很容易', choices: globalChoices },
    },
    { id: '14', form: { type: 'choice', question: '我的手脚麻木和刺痛', choices: globalChoices } },
    {
      id: '15',
      form: { type: 'choice', question: '我因为胃痛和消化不良而苦恼', choices: globalChoices },
    },
    { id: '16', form: { type: 'choice', question: '我常常要小便', choices: globalChoices } },
    {
      id: '17',
      form: { type: 'choice', question: '我的手脚常常是干燥温暖的', choices: globalChoices },
    },
    { id: '18', form: { type: 'choice', question: '我脸红发热', choices: globalChoices } },
    {
      id: '19',
      form: { type: 'choice', question: '我容易入睡，并且一夜睡得很好', choices: globalChoices },
    },
    { id: '20', form: { type: 'choice', question: '我做恶梦', choices: globalChoices } },
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
    const level = r <= 49 ? '正常范围' : r <= 59 ? '轻度焦虑' : r <= 69 ? '中度焦虑' : '重度焦虑';
    return {
      ok: true,
      title: level,
      description: `粗分：${n}分，标准分：${r}分。${
        r >= 60
          ? '结果提示中度或重度焦虑症状，建议及时向精神科或心理专业人员咨询评估；本结果不能作为独立诊断。'
          : r >= 50
            ? '结果提示轻度焦虑症状，如症状持续或影响生活，建议向精神科或心理专业人员咨询；本结果不能作为独立诊断。'
            : '结果处于中国常用标准分正常范围；如仍有明显不适或功能受损，建议寻求专业评估。'
      }`,
      score: [
        {
          type: 'pointer',
          value: r,
          part: [
            { start: 25, end: 50, color: '#007700' },
            { start: 50, end: 60, color: '#ACAC00' },
            { start: 60, end: 70, color: '#FF7500' },
            { start: 70, end: 100, color: '#FF0000' },
          ],
        },
      ],
    };
  },

  tags: ['自评', '焦虑', '症状严重度'],
};
export default sas;
