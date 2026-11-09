import type { Scale } from '@/types/form';
import { DomainTag, PopulationTag, PurposeTag, RaterTag } from '@/types/scaleTags';

const frequencyChoices = ['从不', '很少', '有时', '经常', '总是'] as const;

const inattentionItems = ['1', '2', '3', '4', '7', '8', '9', '10', '11'] as const;
const hyperactivityItems = ['5', '6', '12', '13', '14', '15', '16', '17', '18'] as const;

function sumAnswers(datas: { [key: string]: unknown }, itemIds: readonly string[]) {
  return itemIds.reduce((total, id) => total + Number(datas[id]), 0);
}

export const asrsR: Scale = {
  id: 'asrs-r',
  name: '儿童青少年 ADHD 自评量表修订版 (ASRS-R)',
  trusted: true,
  description:
    '儿童青少年 ADHD 自评量表修订版（ASRS-R）由吴红梅团队依据 WHO 成人 ADHD 自评量表（Kessler 等，2005）修订，供 8～16 岁儿童青少年自评近 6 个月的注意缺陷和多动/冲动症状，用于初步筛查。已有中国儿童青少年样本的信效度验证；本页题目为自行翻译，结果仅作筛查参考，不能用于诊断。',
  refer: [
    {
      title:
        'The World Health Organization Adult ADHD Self-Report Scale (ASRS): A Short Screening Scale for Use in the General Population',
      url: 'https://doi.org/10.1017/S0033291704002892',
    },
    {
      title:
        'A Psychometric Evaluation of the Revised Version of the Adult ADHD Self-Report Scale in Chinese Adolescents',
      url: 'https://doi.org/10.1177/10870547241285971',
    },
    {
      title:
        'Diagnostic Accuracy and Proposed Cut-Off Values of the ASRS-R for Screening ADHD in Chinese Children and Adolescents: A Case-Control Study',
      url: 'https://doi.org/10.1177/13591045261499615',
    },
    {
      title:
        'Reliability and validity analysis of the attention deficit hyperactivity disorder self-report scale-revised among children aged 8–14',
      url: 'https://doi.org/10.3760/cma.j.cn371468-20240301-00097',
    },
  ],
  guild: '请根据过去 6 个月的实际情况，判断每句话是否与你相符，并选择最符合的一项。',
  questions: [
    {
      id: '1',
      form: {
        type: 'choice',
        question: '做作业或其他事情时，我容易忽略细节',
        choices: frequencyChoices,
      },
    },
    {
      id: '2',
      form: {
        type: 'choice',
        question: '需要组织安排一件事时，我很难把它做好',
        choices: frequencyChoices,
      },
    },
    {
      id: '3',
      form: {
        type: 'choice',
        question: '我常常记不住和别人约好的事情',
        choices: frequencyChoices,
      },
    },
    {
      id: '4',
      form: {
        type: 'choice',
        question: '需要持续动脑的事（比如作业），我会一直拖延着不去做',
        choices: frequencyChoices,
      },
    },
    {
      id: '5',
      form: {
        type: 'choice',
        question: '长时间坐着时，我会感到烦躁或扭动身体',
        choices: frequencyChoices,
      },
    },
    {
      id: '6',
      form: {
        type: 'choice',
        question: '我总觉得自己过于好动，像马达一样停不下来',
        choices: frequencyChoices,
      },
    },
    {
      id: '7',
      form: {
        type: 'choice',
        question: '做不感兴趣或困难的事情时，我容易粗心出错',
        choices: frequencyChoices,
      },
    },
    {
      id: '8',
      form: {
        type: 'choice',
        question: '做不感兴趣或重复的事情时，我很难集中注意力',
        choices: frequencyChoices,
      },
    },
    {
      id: '9',
      form: {
        type: 'choice',
        question: '即使别人直接对我说话，我也很难集中注意力听清对方在说什么',
        choices: frequencyChoices,
      },
    },
    {
      id: '10',
      form: {
        type: 'choice',
        question: '我在家里常常乱放东西，或很难找到需要的东西',
        choices: frequencyChoices,
      },
    },
    {
      id: '11',
      form: {
        type: 'choice',
        question: '我容易被周围的活动或声音分散注意力',
        choices: frequencyChoices,
      },
    },
    {
      id: '12',
      form: {
        type: 'choice',
        question: '需要安静坐着时，我总忍不住要离开座位',
        choices: frequencyChoices,
      },
    },
    {
      id: '13',
      form: {
        type: 'choice',
        question: '我会感到坐立不安或烦躁',
        choices: frequencyChoices,
      },
    },
    {
      id: '14',
      form: {
        type: 'choice',
        question: '即使一个人独处，我也很难放松下来',
        choices: frequencyChoices,
      },
    },
    {
      id: '15',
      form: {
        type: 'choice',
        question: '和人说话时，我会觉得自己话说得太多',
        choices: frequencyChoices,
      },
    },
    {
      id: '16',
      form: {
        type: 'choice',
        question: '和人交谈时，我会打断对方',
        choices: frequencyChoices,
      },
    },
    {
      id: '17',
      form: {
        type: 'choice',
        question: '我很难忍受等待',
        choices: frequencyChoices,
      },
    },
    {
      id: '18',
      form: {
        type: 'choice',
        question: '别人正忙的时候，我总忍不住去打扰他们',
        choices: frequencyChoices,
      },
    },
  ],
  result: (datas) => {
    for (let questionNumber = 1; questionNumber <= 18; questionNumber++) {
      const answer = datas[questionNumber];
      if (answer === undefined) {
        return {
          ok: false,
          require: String(questionNumber),
        };
      }
      if (!Number.isInteger(answer) || answer < 0 || answer > 4) {
        return {
          ok: false,
          message: `第 ${questionNumber} 题选项无效，请重新选择。`,
        };
      }
    }

    const inattentionScore = sumAnswers(datas, inattentionItems);
    const hyperactivityScore = sumAnswers(datas, hyperactivityItems);
    const totalScore = inattentionScore + hyperactivityScore;

    return {
      ok: true,
      title: `总分 ${totalScore} / 72`,
      description: `注意缺陷 ${inattentionScore} / 36；多动/冲动 ${hyperactivityScore} / 36。分数仅表示症状出现频率，不代表诊断。研究参考界值（本页未验证）：总分 ≥27.5、注意缺陷 ≥19.5、多动/冲动 ≥17.5；达到界值或症状已影响学习、家庭和人际时，建议由专业人员进一步评估。`,
    };
  },
  tags: {
    rater: RaterTag.SELF,
    population: [PopulationTag.CHILD, PopulationTag.ADOLESCENT],
    purpose: [PurposeTag.SCREENING],
    domain: [DomainTag.ADHD],
  },
};

export default asrsR;
