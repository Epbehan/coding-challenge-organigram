import { Employee } from "./orgTypes";

export const orgData: Employee = {
  id: 0,
  name: "Jon Hancok",
  title: "CEO",
  influenceScore: 100,
  directReports: [
    {
      id: 1,
      name: "Manager 1",
      title: "Manager",
      influenceScore: 50,
      directReports: [
        { id: 3, name: "Report 1-1", title: "Report", influenceScore: 10 },
        { id: 4, name: "Report 1-2", title: "Report", influenceScore: 10 },
        { id: 7, name: "Report 1-3", title: "Report", influenceScore: 10 },
      ],
    },

    {
      id: 2,
      name: "Manager 2",
      title: "Manager",
      influenceScore: 50,
      directReports: [
        { id: 5, name: "Report 2-1", title: "Report", influenceScore: 10 },
        { id: 6, name: "Report 2-2", title: "Report", influenceScore: 10 },
        { id: 8, name: "Report 2-3", title: "Report", influenceScore: 10 },
      ],
    },
  ],
};
