import { legacy_createStore as createStore } from "redux";
import { taskReducer } from "./taskReducer";

const initialState = [
  { id: 1, title: "Task 1", complited: false },
  { id: 2, title: "Task 2", complited: false },
  { id: 3, title: "Task 3", complited: false },
  { id: 4, title: "Task 4", complited: false },
  { id: 5, title: "Task 5", complited: false },
  { id: 6, title: "Task 6", complited: false },
];

export function initiateStore() {
  return createStore(taskReducer, initialState);
}
