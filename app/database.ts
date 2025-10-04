import { id } from "zod/v4/locales";

const tickets = [
  {
    id: 1,
    name: "Fix login bug",
    status: "open",
    type: "bug",
  },
  {
    id: 2,
    name: "Add user profile page",
    status: "in progress",
    type: "feature",
  },
  {
    id: 3,
    name: "Improve performance on dashboard",
    status: "closed",
    type: "improvement",
  },
  {
    id: 4,
    name: "Update dependencies",
    status: "open",
    type: "maintenance",
  },
  {
    id: 5,
    name: "Redesign landing page",
    status: "in progress",
    type: "design",
  },
];

export default tickets;
