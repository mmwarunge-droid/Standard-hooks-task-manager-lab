# Task Manager Application

A **React Task Manager** that allows users to add, complete, and search tasks.  
This application uses **React Hooks** (`useState`, `useContext`, `useRef`, `useId`) for state management, global state, and unique IDs. Tasks are persisted via a **JSON backend**.

---

## Features

- **Render Initial Tasks:** Fetches tasks from backend on page load.
- **Add Tasks:** Users can submit new tasks via a form.
- **Mark Complete/Incomplete:** Toggle task completion with a button click.
- **Search Tasks:** Dynamic filtering of tasks based on search input.
- **Global State Management:** Uses `useContext` to share task state across components.
- **Unique IDs for Accessibility:** Uses `useId` for form inputs.
- **Persistent Input Ref:** Uses `useRef` for search input without unnecessary re-renders.

---

## Tech Stack

- **Frontend:** React (Hooks)
- **Backend:** JSON server (`db.json`)
- **State Management:** `useContext`, `useState`
- **Utilities:** `useRef`, `useId`
- **Testing:** Optional: Vitest / React Testing Library

---

## Installation

1. **Clone the repository**

```bash
git clone <your-repo-url>
cd task-manager-app

```

## Author

Mark Warunge
