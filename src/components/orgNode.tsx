import React from "react";
import { Employee } from "../data/orgTypes";

type Props = {
  node: Employee;
};

// Recursive component to render one node and its direct reports
const OrgNode: React.FunctionComponent<Props> = ({ node }) => (
  <div style={{ marginLeft: "20px" }}>
    <div>
      {node.name} - {node.title} (Influence Score: {node.influenceScore})
    </div>
    {node.directReports?.map((child: Employee) => (
      <OrgNode key={child.id} node={child} />
    ))}
  </div>
);

export default OrgNode;
