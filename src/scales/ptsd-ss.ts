import type { Scale } from '@/types/form';

const globalChoices = ['没有影响', '轻度', '中度', '重度', '极重'] as const;
const resultMap = {
  avoiding: [1, 2, 3, 4, 5, 7, 9, 12, 13, 16, 17, 18, 19],
  block: [14, 15, 20, 21, 22, 23, 24],
  anesthesia: [6, 8, 10, 11],
};
const nameMap = {
  avoiding: '重现／回避症状',
  block: '心理障碍／功能受损',
  anesthesia: '情感麻木／紧张敏感',
};
export const ptsdss: Scale = {
  id: 'ptsd-ss',
  name: '心理创伤后应激障碍自评量表 (PTSD-SS)',
  description:
    '心理创伤后应激障碍自评量表（PTSD-SS）由刘贤臣等依据 DSM-IV 和 CCMD-2-R 于1998年编制，共24项，包含重现／回避症状、心理障碍／功能受损、情感麻木／紧张敏感3个因子，用于创伤后应激症状的筛查、严重度评估及研究。结果不能单独用于诊断，须结合创伤经历、症状持续时间、功能受损及专业评估综合判断。',
  refer: [
    {
      title: '心理创伤后应激障碍自评量表的编制和信度效度研究',
      url: 'https://cnki.com.cn/Article/CJFDTOTAL-SDJB199801000.htm',
    },
  ],
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
      if (!(i in datas) || datas[i] === void 0) {
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
    const level =
      n < 50
        ? '未检出明显创伤后应激症状'
        : n < 60
          ? '轻度创伤后应激症状 (PTSS)'
          : '中重度创伤后应激症状 (PTSS)';
    return {
      ok: true,
      title: level,
      description: `总分：${n}分。下列为各因子平均分，分数越高表示相应症状越突出；本结果仅供筛查，不能作为独立诊断。${n >= 50 ? '建议向精神科或具备创伤相关经验的心理专业人员进一步咨询评估。' : ''}\n${Object.keys(
        nameMap
      )
        .map((key) => `${nameMap[key as never]}：${results[key]!.toFixed(2) || 0}`)
        .join('，')}`,
      score: [
        {
          type: 'pointer',
          value: n,
          part: [
            { start: 24, end: 50, color: '#007700' },
            { start: 50, end: 60, color: '#ACAC00' },
            { start: 60, end: 120, color: '#FF0000' },
          ],
        },
        {
          type: 'lines',
          min: 1,
          max: 5,
          minWidth: 25,
          splitLinesData: Object.keys(resultMap).map(
            (i) => `${nameMap[i as never]}\n${results[i]!.toFixed(2)}`
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
  tags: ['自评', 'PTSD', 'PTSS', '创伤', '筛查'],
};
export default ptsdss;
