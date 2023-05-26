import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import { initiateStore } from "./store/store";
import * as actions from "./store/actions";

const store = initiateStore();

const App = (params) => {
  const [state, setState] = useState(store.getState());

  useEffect(() => {
    store.subscribe(() => {
      setState(store.getState());
    });
  }, []);
  const compliteTask = (taskId) => {
    store.dispatch(actions.taskCompleted(taskId));
  };
  const changeTitle = (taskId) => {
    store.dispatch(actions.titleChange(taskId));
  };
  const deleteTask = (taskId) => {
    store.dispatch(actions.taskDeleted(taskId));
  };
  return (
    <>
      <h1>APP</h1>
      <ul>
        {state.map((el) => (
          <li key={el.id}>
            <p>{el.title}</p>
            <p>{`Complited: ${el.complited}`}</p>
            <button onClick={() => compliteTask(el.id)}>complited</button>
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
    <App />
  </React.StrictMode>
);
