// Define the shape of an employee node in the org chart

export type Employee = {
  id: number;
  name: string;
  title: string;
  influenceScore: number;
  newInfluenceScore?: number; //original score, plus the score of direct reports
  directReports?: Employee[]; //optional since not all employies will have reports
  manager?: [];
};
