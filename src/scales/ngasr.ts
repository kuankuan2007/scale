import type { Scale } from '@/types/form';
import { DomainTag, PopulationTag, PurposeTag, RaterTag } from '@/types/scaleTags';

const globalChoices = ['否', '是'] as const;
const scores = [3, 1, 1, 3, 1, 1, 3, 1, 3, 1, 1, 3, 1, 1, 1] as const;

export const ngasr: Scale = {
  id: 'ngasr',
  name: '护士用自杀风险评估量表 (NGASR)',
  summary: '供专业人员评估患者自杀风险相关因素，辅助临床风险识别与处置。',
  description:
    "护士用自杀风险评估量表（Nurses' Global Assessment of Suicide Risk，NGASR）由 John R. Cutcliffe 与 Phil Barker 编制，2004 年发表，共 15 项，供护士（包括经验较少的护理人员）在精神科等临床场景中通过访谈与观察对患者的自杀风险进行结构化评定。各项按「否/是」作答：第 1（绝望感）、4（情绪低落）、7（计划采取自杀行动）、9（近期亲人死亡或重要亲密关系丧失）、12（自杀未遂史）题答「是」计 3 分，其余各题答「是」计 1 分，总分 0～25 分：≤5 分为低风险，6～8 分为中风险，9～11 分为高风险，≥12 分为极高风险。原文注明量表发表时尚未完成大规模量化验证，此后各语言版本的信效度指标不一（内部一致性普遍不高，对未来自杀行为的预测效度证据有限），结果须结合临床访谈、病史与社会心理状况综合判读，不能替代临床判断与诊断。",
  refer: [
    {
      title:
        "The Nurses' Global Assessment of Suicide Risk (NGASR): developing a tool for clinical practice（原始编制文献：载明量表的研制背景、证据基础、15 个条目与加权计分方法；原文注明发表时尚未完成大规模量化验证）",
      url: 'https://doi.org/10.1111/j.1365-2850.2003.00721.x',
    },
    {
      title:
        "护士用自杀风险评估量表(NGASR)在住院精神分裂症患者中应用的信效度研究（中文版信效度：86 例住院精神分裂症患者，Cronbach's α 0.815，一周重测信度 0.91，评定者间信度 0.82，与贝克绝望量表的效标关联效度 0.83）",
      url: 'https://cnki.com.cn/Article/CJFDTOTAL-ZMYX201103007.htm',
    },
    {
      title:
        "Validation of the Spanish Version of the Nurses' Global Assessment of Suicide Risk Scale (NGASR) in Nonclinical Settings（开放获取；正文及附录载明 15 个条目中第 1、4、7、9、12 题计 3 分、其余计 1 分、总分 0～25 与四级风险判读，为本页计分的直接依据；KR20 信度 0.83，与 BDI 相关 0.55、与 SBQ 相关 0.46）",
      url: 'https://doi.org/10.1002/nop2.70057',
    },
    {
      title:
        'Content Validation for the Brazilian Version of the Nurses Global Assessment of Suicide Risk Index（开放获取；明确 5 个 3 分条目为绝望感、抑郁症状、自杀计划、哀伤过程与自杀未遂史，并载明 ≤5 低、6～8 中、9～11 高、≥12 极高的风险分级；内容效度指数 >0.78）',
      url: 'https://doi.org/10.1590/1980-265X-TCE-2019-0330',
    },
    {
      title:
        "Structured assessment of suicide risk in a psychiatric emergency service: Psychometric evaluation of the Nurses' Global Assessment of Suicide Risk scale (NGASR)（252 例精神科急诊求助者：评定者间信度 ICC 0.92，与自杀意图量表关联显著（β=0.66）；但内部一致性偏低（α=0.45），对 6 个月后自杀行为的预测效度不佳）",
      url: 'https://doi.org/10.1177/0020764014543311',
    },
    {
      title:
        "Psychometric properties of the Italian version of the Nurses' Global Assessment of Suicide Risk (NGASR) scale（121 例急性精神科住院患者：内容效度指数 96.7%，与自杀意念量表相关 r=0.98，评定者间信度 ρ=0.97，重测稳定性满意）",
      url: 'https://doi.org/10.1708/3104.30938',
    },
  ],
  guild:
    '本量表由护士等医务人员根据对被评者的访谈、观察及病历信息评定；请针对被评者近期情况，对下列 15 项逐项选择「否」或「是」',
  questions: [
    {
      id: '1',
      form: { type: 'choice', question: '绝望感', choices: globalChoices },
    },
    {
      id: '2',
      form: { type: 'choice', question: '近期负性生活事件', choices: globalChoices },
    },
    {
      id: '3',
      form: { type: 'choice', question: '被害妄想或有被害内容的幻听', choices: globalChoices },
    },
    {
      id: '4',
      form: { type: 'choice', question: '情绪低落/兴趣丧失或愉快感缺乏', choices: globalChoices },
    },
    {
      id: '5',
      form: { type: 'choice', question: '人际和社会功能退缩', choices: globalChoices },
    },
    {
      id: '6',
      form: { type: 'choice', question: '言语流露自杀意图', choices: globalChoices },
    },
    {
      id: '7',
      form: { type: 'choice', question: '计划采取自杀行动', choices: globalChoices },
    },
    {
      id: '8',
      form: {
        type: 'choice',
        question: '自杀家族史',
        questionDescription:
          '英文原文为 family history of serious psychiatric problems or suicide（家族中有严重精神科问题和/或自杀史）',
        choices: globalChoices,
      },
    },
    {
      id: '9',
      form: {
        type: 'choice',
        question: '近期亲人死亡或重要的亲密关系丧失',
        choices: globalChoices,
      },
    },
    {
      id: '10',
      form: {
        type: 'choice',
        question: '精神病史',
        questionDescription: '英文原文为 history of psychotic symptoms（精神病性症状史）',
        choices: globalChoices,
      },
    },
    {
      id: '11',
      form: { type: 'choice', question: '鳏夫/寡妇', choices: globalChoices },
    },
    {
      id: '12',
      form: { type: 'choice', question: '自杀未遂史', choices: globalChoices },
    },
    {
      id: '13',
      form: { type: 'choice', question: '社会-经济地位低下', choices: globalChoices },
    },
    {
      id: '14',
      form: { type: 'choice', question: '饮酒史或酒滥用', choices: globalChoices },
    },
    {
      id: '15',
      form: { type: 'choice', question: '罹患晚期疾病', choices: globalChoices },
    },
  ],
  result: (datas) => {
    let n = 0;
    for (let i = 1; i <= 15; i++) {
      if (!(i in datas) || datas[i] === void 0) {
        return {
          ok: false,
          require: String(i),
        };
      }
      n += Number(datas[i]) * scores[i - 1];
    }

    const title = n <= 5 ? '低风险' : n <= 8 ? '中风险' : n <= 11 ? '高风险' : '极高风险';
    const descriptions = [
      `总分：${n}/25，自杀风险等级为「${title}」（≤5 分低风险，6～8 分中风险，9～11 分高风险，≥12 分极高风险）。`,
      '本量表结果仅供专业人员结构化评定风险时参考，须结合临床访谈、病史与社会心理状况综合判读，不能作为干预决策的唯一依据。',
    ];
    if (n >= 9) {
      descriptions.push(
        '高风险及以上：应立即报告相关风险因素、提高监护与干预级别，并尽快安排专业人员进一步评估。如被评者当前有伤害自己的想法、计划或迫切危险，请立即联系当地急救或危机干预资源，并确保其不独处。'
      );
    }

    return {
      ok: true,
      title,
      description: descriptions.join('\n'),
      score: [
        {
          type: 'pointer',
          title: `NGASR 总分：${n}/25`,
          value: n,
          part: [
            { start: 0, end: 5.5, color: '#007700' },
            { start: 5.5, end: 8.5, color: '#ACAC00' },
            { start: 8.5, end: 11.5, color: '#FF7500' },
            { start: 11.5, end: 25, color: '#FF0000' },
          ],
        },
      ],
    };
  },

  tags: {
    rater: RaterTag.OTHER,
    population: [PopulationTag.ADULT],
    purpose: [PurposeTag.SCREENING, PurposeTag.SEVERITY],
    domain: [DomainTag.SUICIDE],
  },
};
export default ngasr;
