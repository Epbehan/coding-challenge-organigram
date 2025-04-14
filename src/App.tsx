import React, { useState } from "react";
import OrgChart from "./components/orgChart";
import { orgData } from "./data/orgData";
import { calculateInfluence } from "./data/influenceScore";
import Modal from "./components/Modal";
import { Employee } from "./data/orgTypes";
import { newId } from "./data/idGenerator";
import "./App.css";

calculateInfluence(orgData);

function App() {
  // org chart structure
  const [data, setData] = useState<Employee>({ ...orgData });
  const [modalOpen, setModalOpen] = useState(false); // Modal visibility toggle

  // Add a new employee to the org chart
  const addEmployee = (
    newEmployee: Omit<Employee, "directReports" | "id">,
    managerId: string
  ) => {
    const updated = structuredClone(data); // Clone current state to avoid mutation

    // DFS traversal to locate manager and insert new employee
    const addToManager = (node: Employee): boolean => {
      if (node.id.toString() === managerId) {
        if (!node.directReports) node.directReports = [];

        node.directReports.push({
          id: newId(), // generate a unique employee ID
          ...newEmployee,
          directReports: [], // no reports at creation
        });
        return true;
      }
      // Continue searching in children if not found
      return node.directReports?.some(addToManager) ?? false;
    };

    const found = addToManager(updated);
    if (!found) {
      console.warn("No manager found with id:", managerId);
    }

    calculateInfluence(updated); // Recalculate scores based on new org
    setData(updated); // Update state to trigger UI refresh
  };

  return (
    <div>
      <h1 className="heading"> Org Chart</h1>
      <OrgChart data={data} />

      {/* Open modal button */}
      <button className="btn" onClick={() => setModalOpen(true)}>
        Add
      </button>

      {/* Conditionally show modal */}
      {modalOpen && (
        <Modal close={() => setModalOpen(false)} onSubmit={addEmployee} />
      )}
    </div>
  );
}

export default App;
