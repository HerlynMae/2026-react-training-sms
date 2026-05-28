import React from "react";
import { StoreReducer } from "./StoreReducer";

const initVal = {
  isAdd: false, //store boolean to show modal add
  isError: false, //store boolean to show modal message
  isSuccess: false, //store boolean value to show success msg
  isArchive: false, //store boolean value to show success msg
  isRestore: false, //store boolean value to show success msg
  isDelete: false, //store boolean value to show success msg
  message: "", //store string value to show error msg
};

const StoreContext = React.createContext();

const StoreProvider = (props) => {
  const [store, dispatch] = React.useReducer(StoreReducer, initVal);
  return (
    <StoreContext.Provider value={{ store, dispatch }}>
      {props.children}
    </StoreContext.Provider>
  );
};
export { StoreContext, StoreProvider };
