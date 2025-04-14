import React, { useState } from "react";
import { Employee } from "../data/orgTypes";
import Modal from "./Modal";

type NewEmployeeFormProps = {
  onSubmit: (
    newEmployee: Omit<Employee, "directReports" | "id">,
    managerId: string
  ) => void;
  close: () => void;
};

const NewEmployeeForm: React.FC<NewEmployeeFormProps> = ({
  onSubmit,
  close,
}) => {
  // Local state for form fields
  const [name, setName] = useState("");
  const [title, setRole] = useState("");
  const [managerId, setManagerId] = useState("");
  const [influenceScore, setScore] = useState(0);

  // Role selection handler: set the influence score based on role type
  const roleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const seletedRole = e.target.value;
    setRole(seletedRole);
    if (seletedRole === "Report") {
      setScore(10);
    } else if (seletedRole === "Manager") {
      setScore(80);
    } else {
      setScore(0);
    }
  };

  // Form submission handler
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (
      !name.trim() ||
      !title.trim() ||
      !managerId.trim() ||
      influenceScore === 0
    ) {
      close(); // Prevent submission if data is invalid
      return;
    }

    const newEmployee = { name, title, influenceScore };
    onSubmit(newEmployee, managerId); // Pass data to parent
    close();
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* Name input */}
      <div className="form-group">
        <label htmlFor="new-employee">New Employee</label>
        <input
          id="new-employee"
          name="new-employee"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>

      {/* Role selector */}
      <div className="form-group">
        <label htmlFor="role">Role</label>
        <select
          id="role"
          name="role"
          value={title}
          onChange={roleChange}
          required
        >
          <option hidden value="">
            {"Choose a Role"}
          </option>
          <option value="Report">Report</option>
          <option value="Manager">Manager</option>
        </select>
      </div>

      {/* Influence score is read-only */}
      <div className="form-group">
        <label htmlFor="influenceScore">Influence Score</label>
        <input
          id="influenceScore"
          name="influenceScore"
          value={influenceScore}
          readOnly
          className="influenceScore"
          disabled
        />
      </div>

      {/* Hardcoded manager select (can be dynamic) */}
      <div className="form-group">
        <label htmlFor="Manager">Manager</label>
        <select
          id="manager"
          name="manager"
          value={managerId}
          onChange={(e) => setManagerId(e.target.value)}
          required
        >
          <option hidden value="">
            {"Select a Manager"}
          </option>
          <option value={0}>Jon Hancok</option>
          <option value={1}>Manager 1</option>
          <option value={2}>Manager 2</option>
        </select>
      </div>

      <button type="submit" className="btn">
        Submit
      </button>
    </form>
  );
};

export default NewEmployeeForm;
