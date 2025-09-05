import type { Scale } from '@/types/form';

const globalChoices = ['没有影响', '轻度', '中度', '重度', '极重'] as const;
const resultMap = {
  avoiding: [1, 2, 3, 4, 5, 7, 9, 12, 13, 16, 17, 18, 19],
  block: [14, 15, 20, 21, 22, 23, 24],
  anesthesia: [6, 8, 10, 11],
};
const nameMap = {
  avoiding: '重现/回避',
  block: '心理障碍',
  anesthesia: '情感麻木',
};
export const ptsdss: Scale = {
  id: 'ptsd-ss',
  name: '创伤后应激障碍自评量表 (PTSD-SS)',
  description:
    'PTSD-SS由中国心理学家张明园等人编制，广泛应用于临床和科研领域，特别是在中国人群中对PTSD症状的筛查和评估。有较好的信度和效度, 易于实施, 评分简单',
  questions: [
    {
      id: '1',
      form: { type: 'choice', question: '灾害对精神的打击', choices: globalChoices },
    },
    {
      id: '2',
      form: { type: 'choice', question: '想起灾害恐惧害怕', choices: globalChoices },
    },
    {
      id: '3',
      form: { type: 'choice', question: '脑子里无法摆脱灾害发生时的情景', choices: globalChoices },
    },
    {
      id: '4',
      form: { type: 'choice', question: '反复考虑与灾害有关的事情', choices: globalChoices },
    },
    {
      id: '5',
      form: { type: 'choice', question: '做恶梦，梦见有关灾害的事情', choices: globalChoices },
    },
    {
      id: '6',
      form: { type: 'choice', question: '灾害后兴趣减少了', choices: globalChoices },
    },
    {
      id: '7',
      form: {
        type: 'choice',
        question: '看到或听到与灾害有关的事情担心灾害再度发生',
        choices: globalChoices,
      },
    },
    {
      id: '8',
      form: { type: 'choice', question: '变得与亲人感情疏远', choices: globalChoices },
    },
    {
      id: '9',
      form: { type: 'choice', question: '努力控制与灾害有关的想法', choices: globalChoices },
    },
    {
      id: '10',
      form: { type: 'choice', question: '对同事(学)、朋友变得冷淡', choices: globalChoices },
    },
    {
      id: '11',
      form: { type: 'choice', question: '紧张过敏或易受惊吓', choices: globalChoices },
    },
    {
      id: '12',
      form: { type: 'choice', question: '睡眠障碍', choices: globalChoices },
    },
    {
      id: '13',
      form: { type: 'choice', question: '内疚或有罪感', choices: globalChoices },
    },
    {
      id: '14',
      form: { type: 'choice', question: '学习或工作受影响', choices: globalChoices },
    },
    {
      id: '15',
      form: { type: 'choice', question: '注意力不集中', choices: globalChoices },
    },
    {
      id: '16',
      form: { type: 'choice', question: '回避灾难发生时的情景或活动', choices: globalChoices },
    },
    {
      id: '17',
      form: { type: 'choice', question: '烦躁不安', choices: globalChoices },
    },
    {
      id: '18',
      form: { type: 'choice', question: '出现虚幻感觉似灾害再度发生', choices: globalChoices },
    },
    {
      id: '19',
      form: { type: 'choice', question: '心悸、出汗、胸闷等不适', choices: globalChoices },
    },
    {
      id: '20',
      form: { type: 'choice', question: '无原因的攻击、冲动行为', choices: globalChoices },
    },
    {
      id: '21',
      form: { type: 'choice', question: '悲观失望', choices: globalChoices },
    },
    {
      id: '22',
      form: { type: 'choice', question: '遗忘某些情节', choices: globalChoices },
    },
    {
      id: '23',
      form: { type: 'choice', question: '易激惹、好发脾气', choices: globalChoices },
    },
    {
      id: '24',
      form: { type: 'choice', question: '记忆力下降', choices: globalChoices },
    },
  ],
  result: (datas) => {
    let n = 0;
    for (let i = 1; i <= 24; i++) {
      if (!(i in datas)) {
        return {
          ok: false,
          require: String(i),
        };
      }
      n += Number(datas[i]) + 1;
    }
    const results: { [key: string]: number } = {};
    for (const [key, value] of Object.entries(resultMap)) {
      results[key] =
        value.map((i) => datas[i] as number).reduce((a, b) => a + b + 1, 0) / value.length;
    }
    return {
      ok: true,
      title: n < 50 ? '正常' : `有(${n < 60 ? '轻度' : '中重度'})PTSD症状`,
      description: `总分：${n}\n${Object.keys(nameMap)
        .map((key) => `${nameMap[key as never]}：${results[key].toFixed(2) || 0}`)
        .join('，')}`,
      score: [
        {
          type: 'pointer',
          value: n,
          part: [
            { start: 0, end: 49.5, color: '#009400' },
            { start: 49.5, end: 59.5, color: '#ACAC00' },
            { start: 59.5, end: 120, color: '#FF0000' },
          ],
        },
        {
          type: 'lines',
          min: 1,
          max: 5,
          splitLinesData: Object.keys(resultMap).map(
            (i) => `${nameMap[i as never]}\n${results[i].toFixed(2)}`
          ),
          values: [
            {
              values: Object.values(results),
            },
          ],
        },
      ],
    };
  },
  tags: ['自评', 'PTSD', '创伤'],
};
export default ptsdss;
