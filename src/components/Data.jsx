export const initialData = {
  personal: {
    name: "Ballerina Capuccina",
    email: "mimimi@mail.com",
    phone: "+39 347 912 3456",
    photo: "/ballerina.png",
    summary:
      "Ballerina Capuccina, mi mi mi miiii. È la moglie di Capuccino Assassino. E ama la musica, la la la la! La sua passione e il ballerino lololo.",
  },
  education: [
    {
      school: "University of Bologna",
      degree: "Bachelor of Arts in Theatre Arts",
      startDate: "2015-01-01",
      endDate: "2020-06-06",
      id: "entry-1",
    },
    {
      school: "University of Milan",
      degree: "Master of Arts (MA) in Theatre Studies",
      startDate: "2020-07-02",
      endDate: "2023-02-03",
      id: "entry-2",
    },
  ],
  work: [
    {
      title: "Prima Ballerina",
      company: "Italian Opera",
      responsibilities: [
        { id: "item-1", text: "dancing with ballerino lololo" },
        { id: "item-2", text: "drinking cappuccino" },
        {
          id: "item-3",
          text: "convincing the audience I'm actually floating",
        },
      ],
      startDate: "2023-01-01",
      endDate: null,
      id: "entry-1",
    },
    {
      title: "Dance Teacher",
      company: "Italian Opera",
      responsibilities: [
        {
          id: "item-1",
          text: "teaching Espressona Seniora to dance with passion",
        },
        {
          id: "item-2",
          text: "encouraging students to embrace their inner pasta twirls",
        },
      ],
      startDate: "2017-07-08",
      endDate: "2022-05-10",
      id: "entry-2",
    },
  ],
};

export const sectionTemplates = {
  education: {
    name: "",
    title: "",
    startDate: "",
    endDate: "",
  },
  work: {
    title: "",
    company: "",
    responsibilities: [],
    startDate: "",
    endDate: "",
  },
};
