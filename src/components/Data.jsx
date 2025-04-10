export const initialData = {
  personal: {
    name: "Ballerina Capuccina",
    email: "mimimi@mail.com",
    phone: "+39 347 912 3456",
    photo: "./public/ballerina.png",
  },
  education: [
    {
      name: "University of Bologna",
      title: "Theatre Arts",
      startDate: "2021-01-01",
      endDate: "2025-06-06",
      id: "entry-1",
    },
  ],
  work: [
    {
      title: "Prima Ballerina",
      place: "Italian Opera",
      responsibilities: ["dancing", "drinking capuccino"],
      startDate: "2025-10-01",
      endDate: null,
      id: "entry-1",
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
    name: "",
    title: "",
    responsibilities: [],
    startDate: "",
    endDate: "",
  },
};
