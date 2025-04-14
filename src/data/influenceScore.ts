import { Employee } from "./orgTypes";

// Recursively calculate total influence (base + reports) and store in newInfluenceScore
export function calculateInfluence(node: Employee): number {
  const base = node.influenceScore ?? 0; // Use the base score, default to 0 if missing

  // Sum all influence scores of direct reports
  const reportSum =
    node.directReports?.reduce((sum, report) => {
      return sum + calculateInfluence(report); // Depth First Search traversal (exploring the tree by going as deep as possible before backing up.)
    }, 0) ?? 0;

  const total = base + reportSum; // Total influence = self + reports
  node.newInfluenceScore = total; // Store result for rendering

  return total;
}
