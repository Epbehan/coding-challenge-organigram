import React from "react";
import { Employee } from "../data/orgTypes";

type Props = {
  data: Employee; // Root of the org chart tree
};

// Traverse the org chart and group employees by depth level
function buildLevels(data: Employee): Employee[][] {
  const levels: Employee[][] = [];

  const groupByLevel = (node: Employee, depth = 0) => {
    if (!levels[depth]) levels[depth] = []; // Create level array if missing
    levels[depth].push(node); // Add employee to their level

    // Recurse into direct reports
    if (node.directReports) {
      for (const child of node.directReports) {
        groupByLevel(child, depth + 1); // Increase depth as we go down
      }
    }
  };

  groupByLevel(data); // Start from root node
  return levels;
}

const OrgChart: React.FunctionComponent<Props> = ({ data }) => {
  const levels = buildLevels(data); // Group employees by level
  const maxWidth = Math.max(...levels.map((level) => level.length)); // Used for colspan spacing

  return (
    <table style={{ width: "100%", textAlign: "center" }}>
      <tbody>
        {levels.map((level, i) => (
          <tr key={i}>
            {level.map((employee) => (
              <td
                key={employee.id}
                colSpan={Math.round(maxWidth / level.length)}
                data-testid={`employee-cell-${employee.id}`}
                role="cell"
                aria-label={`employee-${employee.id}`}
              >
                <div
                  style={{
                    border: "1px solid #ccc",
                    padding: "10px",
                    margin: "5px",
                    borderRadius: "8px",
                    background: "#D3D3D3",
                  }}
                >
                  <strong>{employee.name}</strong>
                  <br />
                  <small>{employee.title}</small>
                  <br />
                  Score: {employee.newInfluenceScore}
                </div>
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default OrgChart;
