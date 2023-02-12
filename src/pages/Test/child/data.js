export const form = {
  "Software Engineer": [
    {
      question: "what is javascript?",
      option: ["java", "sis"],
    },
  ],

  "Quality Analyst": [
    {
      question: "what is data analyst?",
      option: ["good evil", "bad"],
    },
  ],
};

const questions = [
  {
    question: "why is data analyst good evil?",
    option: ["good evil is love", " good evil is bad"],
  },
  {
    question: "why is data analyst bad?",
    option: ["bad is worse", " good is worse"],
  },
];

const dat = {
  "good evil": questions[0],
  bad: questions[1],
};

export const getMyQuestion = (data) => dat[data];
export const type = Object.keys(form);
