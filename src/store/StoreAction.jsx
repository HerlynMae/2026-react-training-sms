export const setIsAdd = (val) => {
  return {
    type: "IS_ADD", // to used as key to storereducer file
    payload: val, //set the new value
  };
};

export const setIsError = (val) => {
  return {
    type: "IS_ERROR", // to used as key to storereducer file
    payload: val, //set the new value
  };
};

export const setIsSuccess = (val) => {
  return {
    type: "IS_SUCCESS", // to used as key to storereducer file
    payload: val, //set the new value
  };
};

export const setIsArchive = (val) => {
  return {
    type: "IS_ARCHIVE", // to used as key to storereducer file
    payload: val, //set the new value
  };
};

export const setIsRestore = (val) => {
  return {
    type: "IS_RESTORE", // to used as key to storereducer file
    payload: val, //set the new value
  };
};

export const setIsDelete = (val) => {
  return {
    type: "IS_DELETE", // to used as key to storereducer file
    payload: val, //set the new value
  };
};

export const setMessage = (val) => {
  return {
    type: "MESSAGE", // to used as key to storereducer file
    payload: val, //set the new value
  };
};
