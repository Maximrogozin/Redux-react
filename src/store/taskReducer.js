import { taskDelete, taskUpdated } from "./actionTypes";

export function taskReducer(state = [], action) {
  switch (action.type) {
    case taskUpdated: {
      const newArray = [...state];
      const elementIndex = newArray.findIndex(
        (el) => el.id === action.payload.id
      );
      newArray[elementIndex] = { ...newArray[elementIndex], ...action.payload };
      console.log(newArray);
      console.log(action.payload.id);
      return newArray;
    }

    case taskDelete: {
      const newArray = [...state];
      const elementIndex = newArray.findIndex(
        (el) => el.id === action.payload.id
      );
      newArray.splice(elementIndex, 1);
      return newArray;
    }
    default:
      return state;
  }
}

// import { taskDelete, taskUpdated } from "./actionTypes";

// export function taskReducer(state = [], action) {
//   switch (action.type) {
//     case taskUpdated: {
//       const newArray = [...state];
//       const elementIndex = newArray.findIndex(
//         (el) => el.id === action.payload.id
//       );
//       newArray[elementIndex] = { ...newArray[elementIndex], ...action.payload };
//       return newArray;
//     }
//     default:
//       return state;
//   }
// }
