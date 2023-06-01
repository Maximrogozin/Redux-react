import React, { useEffect } from "react";
import ReactDOM from "react-dom/client";
import { Provider, useSelector, useDispatch } from "react-redux";
import { getError } from "./store/errors";
import configureStore from "./store/store";
import {
  completeTask,
  getTasks,
  taskDeleted,
  titleChange,
  loadTasks,
  getTasksLoadingStatus,
  taskCreated,
  createTasks,
} from "./store/task";

const store = configureStore();

const App = (params) => {
  const state = useSelector(getTasks());
  const isLoading = useSelector(getTasksLoadingStatus());
  const error = useSelector(getError());
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadTasks());
  }, []);
  const changeTitle = (taskId) => {
    dispatch(titleChange(taskId));
  };
  const deleteTask = (taskId) => {
    dispatch(taskDeleted(taskId));
  };

  const taskCreated = () => {
    dispatch(createTasks({ completed: true, title: "text", userId: 1 }));
  };

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <>
      <h1>APP</h1>
      <ul>
        {state.map((el) => (
          <li key={el.id}>
            <button onClick={taskCreated}>Create Task</button>
            <p>{el.title}</p>
            <p>{`Complited: ${el.completed}`}</p>
            <button onClick={() => dispatch(completeTask(el.id))}>
              complited
            </button>
            <button onClick={() => changeTitle(el.id)}>Change title</button>
            <button onClick={() => deleteTask(el.id)}>Delete</button>
            <hr />
          </li>
        ))}
      </ul>
    </>
  );
};
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
