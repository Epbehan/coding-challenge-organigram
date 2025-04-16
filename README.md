# 🏢 Org Chart App

An interactive React application for visualizing and managing an organization chart. Add new employees, assign them to managers, and automatically calculate dynamic influence scores throughout the hierarchy.

---

## 📝 Project Brief

There is a company where there is a Leader (leader has no manager) and then the organization structure is pyramidal, where each person has a manager and may have direct reports.

Each person has an **influence score**.

- A manager's **total influence score** is their own influence score **plus the sum of their direct reports' influence scores**.

The app starts with the following data:

```ts
const organigram = [
  { index: 0, name: "Jon Hancok", influence: 100 },
  { index: 1, name: "Manager 1", influence: 50, manager: 0 },
  { index: 2, name: "Manager 2", influence: 50, manager: 0 },
  { index: 3, name: "Report 1 - 1", influence: 10, manager: 1 },
  { index: 4, name: "Report 1 - 2", influence: 10, manager: 1 },
  { index: 5, name: "Report 2 - 1", influence: 10, manager: 2 },
  { index: 6, name: "Report 2 - 2", influence: 10, manager: 2 },
  { index: 7, name: "Report 1 - 3", influence: 10, manager: 1 },
  { index: 8, name: "Report 2 - 3", influence: 10, manager: 2 },
];
```

### 💻 Objective

Create a React-based webpage that:

- Visually displays this organizational hierarchy as a table
- Calculates and displays total influence scores for each employee dynamically

### 🌟 Bonus Points

- ✅ Use TypeScript
- ✅ Add UI to allow adding a new employee and assigning them to an existing manager
- ⬜️ Optional: Unit tests for functions and components

---

## 💼 How It Works

1. The org chart is structured as a tree, where each `Employee` node can have `directReports`.
2. When a new employee is added via the modal form:
   - A unique ID is generated
   - The employee is attached to their selected manager
   - Influence scores are recalculated bottom-up using a **Depth-First Search (DFS)** algorithm
3. The chart updates automatically and renders employees grouped by their depth level.

---

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or newer)
- yarn

### Installation

```bash
git clone
cd coding-challenge/
yarn install
```

### Running the App

```bash
yarn start
```

The app will run on `http://localhost:3000`.

---

## 📁 Project Structure

```
src/
├── components/         # React components (OrgChart, Modal, Form, etc.)
├── data/               # Static org chart data & recursive utilities
├── styles/             # CSS styles
├── App.tsx             # Main app logic
└── index.tsx           # Entry point
```

---

## 🙌 Acknowledgments

Built with 💻 using React + TypeScript.
