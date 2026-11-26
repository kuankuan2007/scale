import type { Scale } from '@/types/form';
import { DomainTag, PopulationTag, PurposeTag, RaterTag } from '@/types/scaleTags';

const choices = ['完全没有', '有几天', '一半以上的天数', '几乎每天'] as const;

export const phq9: Scale = {
  id: 'phq9',
  name: '患者健康问卷抑郁量表 (PHQ-9)',
  seo: {
    summary: '用于自评过去两周的抑郁症状及严重程度，辅助筛查和观察症状变化。',
    keywords: ['PHQ-9', '患者健康问卷', '抑郁筛查', '抑郁自测', '抑郁症状评估'],
  },
  description:
    '患者健康问卷抑郁量表（Patient Health Questionnaire-9，PHQ-9）由 Kurt Kroenke、Robert L. Spitzer 与 Janet B. W. Williams 于 2001 年发表，共 9 项，对应抑郁症状标准，评估过去两周的发生频率，适用于成人筛查及症状严重程度评估。本页中文题干依据官方中文版，附英文原题；中文版已在中国普通人群中完成信效度检验。结果仅供筛查和症状观察，不能替代临床诊断。',
  trusted: true,
  refer: [
    {
      title:
        'The PHQ-9: Validity of a Brief Depression Severity Measure（原始量表与严重度分级研究）',
      url: 'https://doi.org/10.1046/j.1525-1497.2001.016009606.x',
    },
    {
      title: 'PHQ Screeners: PHQ-9 英文原版及中文等官方译本（问卷下载与使用说明）',
      url: 'https://www.phqscreeners.com/select-screener',
    },
    {
      title:
        'Reliability and validity of the Chinese version of the Patient Health Questionnaire (PHQ-9) in the general population（中国普通人群中文版信效度研究）',
      url: 'https://doi.org/10.1016/j.genhosppsych.2014.05.021',
    },
  ],
  guild:
    '请根据过去两周（包括今天），选择每种情况困扰你的频率。若第 9 题有任何非零回答，请认真对待并考虑尽快联系专业人员；如当前有迫切的自伤或自杀危险，请立即寻求身边可信任者及急诊帮助。',
  questions: [
    {
      id: '1',
      form: {
        type: 'choice',
        question: '做事时提不起劲或没有兴趣',
        questionDescription: 'English: Little interest or pleasure in doing things',
        choices,
      },
    },
    {
      id: '2',
      form: {
        type: 'choice',
        question: '感到心情低落、沮丧或绝望',
        questionDescription: 'English: Feeling down, depressed, or hopeless',
        choices,
      },
    },
    {
      id: '3',
      form: {
        type: 'choice',
        question: '入睡困难、睡不安稳或睡眠过多',
        questionDescription: 'English: Trouble falling or staying asleep, or sleeping too much',
        choices,
      },
    },
    {
      id: '4',
      form: {
        type: 'choice',
        question: '感觉疲倦或没有活力',
        questionDescription: 'English: Feeling tired or having little energy',
        choices,
      },
    },
    {
      id: '5',
      form: {
        type: 'choice',
        question: '食欲不振或吃太多',
        questionDescription: 'English: Poor appetite or overeating',
        choices,
      },
    },
    {
      id: '6',
      form: {
        type: 'choice',
        question: '觉得自己很糟，或觉得自己很失败，或让自己或家人失望',
        questionDescription:
          'English: Feeling bad about yourself, or that you are a failure or have let yourself or your family down',
        choices,
      },
    },
    {
      id: '7',
      form: {
        type: 'choice',
        question: '做事时很难集中注意力，例如阅读报纸或看电视时',
        questionDescription:
          'English: Trouble concentrating on things, such as reading the newspaper or watching television',
        choices,
      },
    },
    {
      id: '8',
      form: {
        type: 'choice',
        question: '动作或说话速度缓慢到别人已经察觉？或相反，烦躁不安、动来动去，比平常更多',
        questionDescription:
          'English: Moving or speaking so slowly that other people could have noticed? Or the opposite, being so fidgety or restless that you have been moving around a lot more than usual',
        choices,
      },
    },
    {
      id: '9',
      form: {
        type: 'choice',
        question: '有不如死掉或用某种方式伤害自己的念头',
        questionDescription:
          'English: Thoughts that you would be better off dead or of hurting yourself in some way',
        choices,
      },
    },
  ],
  result: (datas) => {
    let total = 0;
    for (let i = 1; i <= 9; i++) {
      if (!(i in datas) || datas[i] === void 0) {
        return {
          ok: false,
          require: String(i),
        };
      }
      const answer = datas[i];
      if (typeof answer !== 'number' || !Number.isInteger(answer) || answer < 0 || answer > 3) {
        return {
          ok: false,
          message: `第 ${i} 题答案无效，请重新作答。`,
        };
      }
      total += answer;
    }

    const level =
      total < 5
        ? '抑郁症状极轻或无'
        : total < 10
          ? '轻度抑郁症状'
          : total < 15
            ? '中度抑郁症状'
            : total < 20
              ? '中重度抑郁症状'
              : '重度抑郁症状';
    const advice =
      total < 5
        ? '分数处于极轻或无症状范围；若仍感困扰或症状持续，请结合实际情况咨询专业人员。'
        : total < 10
          ? '如症状持续或影响日常生活，可考虑向专业人员咨询。'
          : '建议联系心理或精神卫生专业人员进行进一步评估。';
    const safetyReminder =
      Number(datas['9']) > 0
        ? '第 9 题有非零回答，建议尽快告诉可信任的人并寻求专业评估；如当前有迫切的自伤或自杀想法，请让可信任者陪同并立即就近急诊，紧急时拨打 120 或 110。'
        : '';

    return {
      ok: true,
      title: `${level}（${total} / 27）`,
      description: `${advice}PHQ-9 常用严重度范围为 0–4、5–9、10–14、15–19、20–27 分；本结果仅供筛查和症状严重度参考，不能作为诊断。${safetyReminder}`,
      score: [
        {
          type: 'pointer',
          value: total,
          part: [
            { start: 0, end: 5, color: '#007700' },
            { start: 5, end: 10, color: '#ACAC00' },
            { start: 10, end: 15, color: '#FFB000' },
            { start: 15, end: 20, color: '#FF7500' },
            { start: 20, end: 27, color: '#FF0000' },
          ],
        },
      ],
    };
  },
  tags: {
    rater: RaterTag.SELF,
    population: [PopulationTag.ADULT],
    purpose: [PurposeTag.SCREENING, PurposeTag.SEVERITY],
    domain: [DomainTag.DEPRESSION],
  },
};

export default phq9;
