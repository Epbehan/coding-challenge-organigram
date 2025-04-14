import React, { useEffect, useRef } from "react";
import NewEmployeeForm from "./newEmployeeForm";
import { Employee } from "../data/orgTypes";
import "./modal.css";

type ModalProps = {
  close: () => void;
  onSubmit: (
    newEmployee: Omit<Employee, "directReports" | "id">,
    managerId: string
  ) => void;
};

const Modal: React.FC<ModalProps> = ({ close, onSubmit }) => {
  const modalRef = useRef<HTMLDivElement>(null); // reference to the modal div

  // Add event listener to detect clicks outside the modal
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
        close(); // close modal if click is outside
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [close]);

  return (
    <div className="modal-container">
      <div className="modal" ref={modalRef}>
        {/* Render the form inside the modal */}
        <NewEmployeeForm onSubmit={onSubmit} close={close} />
      </div>
    </div>
  );
};

export default Modal;
