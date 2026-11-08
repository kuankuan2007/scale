import type { Scale } from '@/types/form';
import { DomainTag, PopulationTag, PurposeTag, RaterTag } from '@/types/scaleTags';

const auditoryChoices = [
  '0：无可确认的听觉反应',
  '1：听觉刺激引发惊跳反应',
  '2：可定位声音来源',
  '3：可重复地按指令动作',
  '4：稳定地按指令动作',
] as const;
const visualChoices = [
  '0：无可确认的视觉反应',
  '1：视觉刺激引发惊跳反应',
  '2：可注视或固定视线',
  '3：可追随视觉目标',
  '4：可伸手定位目标',
  '5：可识别物品',
] as const;
const motorChoices = [
  '0：无可确认的运动反应',
  '1：出现异常姿势反应',
  '2：出现屈曲回撤反应',
  '3：可定位刺激来源',
  '4：可操作物品',
  '5：出现自动运动反应',
  '6：可功能性使用物品',
] as const;
const oromotorVerbalChoices = [
  '0：无可确认的口腔或言语反应',
  '1：出现口腔反射反应',
  '2：出现发声或口腔运动',
  '3：出现可理解言语',
] as const;
const communicationChoices = [
  '0：无可确认的交流行为',
  '1：有意交流但反应不准确',
  '2：能准确回应是/否问题',
] as const;
const arousalChoices = [
  '0：未见睁眼反应',
  '1：刺激后睁眼',
  '2：无需刺激即可睁眼',
  '3：可维持注意',
] as const;

const subscales = [
  { id: '1', name: '听觉', max: 4 },
  { id: '2', name: '视觉', max: 5 },
  { id: '3', name: '运动', max: 6 },
  { id: '4', name: '口腔运动/言语', max: 3 },
  { id: '5', name: '交流', max: 2 },
  { id: '6', name: '觉醒', max: 3 },
] as const;

export const crsR: Scale = {
  id: 'crs-r',
  name: '昏迷恢复量表修订版 (CRS-R)',
  trusted: true,
  description:
    '昏迷恢复量表修订版（Coma Recovery Scale–Revised，CRS-R）由 Giacino 等人于 2004 年修订，用于对意识障碍者进行标准化行为评估，辅助判断意识水平及其变化，适用于 6 岁及以上人群（1～5 岁请用儿科版 CRS-P）。本页供专业人员在完成正式评定后录入六个分量表得分，不替代正式手册和施测流程。',
  refer: [
    {
      title:
        'The JFK Coma Recovery Scale-Revised: Measurement characteristics and diagnostic utility',
      url: 'https://doi.org/10.1016/j.apmr.2004.02.033',
    },
    {
      title: 'Validation of the Chinese version of the Coma Recovery Scale-Revised (CRS-R)',
      url: 'https://doi.org/10.1080/02699052.2019.1566832',
    },
    {
      title:
        'Coma Recovery Scale - Revised (instrument summary, manual, and administration resources)',
      url: 'https://www.sralab.org/rehabilitation-measures/coma-recovery-scale-revised',
    },
    {
      title: 'CRS-R Revised Manual (2020)',
      url: 'https://www.sralab.org/sites/default/files/downloads/2021-12/CRS-R_Manual20201210%5B2%5D.pdf',
    },
  ],
  guild:
    '请由受过训练的专业人员按正式 CRS-R 手册和标准化程序施测，再录入各分量表达到的最高分。本页仅作分数记录，总分不能脱离临床评估单独用于诊断。',
  questions: [
    {
      id: '.subtitle1',
      form: {
        type: 'subtitle',
        title: '分量表分数记录',
      },
    },
    {
      id: '1',
      form: {
        type: 'choice',
        question: '听觉功能',
        choices: auditoryChoices,
      },
    },
    {
      id: '2',
      form: {
        type: 'choice',
        question: '视觉功能',
        choices: visualChoices,
      },
    },
    {
      id: '3',
      form: {
        type: 'choice',
        question: '运动功能',
        choices: motorChoices,
      },
    },
    {
      id: '4',
      form: {
        type: 'choice',
        question: '口腔运动/言语功能',
        choices: oromotorVerbalChoices,
      },
    },
    {
      id: '5',
      form: {
        type: 'choice',
        question: '交流功能',
        choices: communicationChoices,
      },
    },
    {
      id: '6',
      form: {
        type: 'choice',
        question: '觉醒功能',
        choices: arousalChoices,
      },
    },
  ],
  result: (datas) => {
    for (const subscale of subscales) {
      const score = datas[subscale.id];
      if (!Number.isInteger(score) || score < 0 || score > subscale.max) {
        return { ok: false, require: subscale.id };
      }
    }

    const total = subscales.reduce((sum, subscale) => sum + datas[subscale.id], 0);
    const breakdown = subscales
      .map((subscale) => `${subscale.name} ${datas[subscale.id]}/${subscale.max}`)
      .join('；');

    return {
      ok: true,
      title: `CRS-R 总分 ${total} / 23`,
      description: `${breakdown}。总分仅供参考，不单独用于判断意识障碍；解释应结合各分量表表现和完整临床资料。`,
    };
  },
  tags: {
    rater: RaterTag.OTHER,
    population: [
      PopulationTag.CHILD,
      PopulationTag.ADOLESCENT,
      PopulationTag.ADULT,
      PopulationTag.ELDERLY,
    ],
    purpose: [PurposeTag.AUX_DIAGNOSIS, PurposeTag.SEVERITY],
    domain: [DomainTag.GENERAL],
  },
};

export default crsR;
