import type { Scale } from '@/types/form';

const globalChoices = ['没有或很少时间', '小部分时间', '相当多时间', '绝大部分或全部时间'] as const;

export const sds: Scale = {
  id: 'sas',
  name: '焦虑自评量表 (SAS)',
  description:
    'SAS量表（Self-rating Anxiety Scale，焦虑自评量表），又称Zung宗氏焦虑自评量表，是由W.K. Zung于1971年编制的一种用于评估焦虑状态的自评量表。它包含20个项目，采用4级评分方式，主要用于评估患者在过去一周内的主观焦虑感受及其严重程度。SAS量表的特点是简便易用，适合门诊和住院患者，尤其是具有焦虑症状的成年人。',
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
      if (!(i in datas)) {
        return {
          ok: false,
          require: String(i),
        };
      }
      n += Number(datas[i]) + 1;
    }
    const r = Math.floor(n * 1.25);
    return {
      ok: true,
      title: r <= 49 ? '正常' : `有(${r <= 59 ? '轻度' : r <= 69 ? '中度' : '重度'})焦虑倾向`,
      description: `粗分：${n}，标准分值：${r}。`,
      score: {
        type: 'pointer',
        value: r,
        part: [
          { start: 25, end: 50, color: '#009400' },
          { start: 49.5, end: 60, color: '#ACAC00' },
          { start: 59.5, end: 70, color: '#FF7500' },
          { start: 69.5, end: 100, color: '#FF0000' },
        ],
      },
    };
  },
  tags: ['自评', '焦虑'],
};
export default sds;
