export const StoreReducer = (state, action) => {
  switch (action.type) {
    case "IS_ADD":
      return {
        ...state, //store all initVal
        isAdd: action.payload, //overwrite the value
      };
    case "IS_ERROR":
      return {
        ...state, //store all initVal
        isError: action.payload, //overwrite the value
      };
    case "IS_SUCCESS":
      return {
        ...state, //store all initVal
        isSuccess: action.payload, //overwrite the value
      };
    case "IS_ARCHIVE":
      return {
        ...state, //store all initVal
        isArchive: action.payload, //overwrite the value
      };
    case "IS_RESTORE":
      return {
        ...state, //store all initVal
        isRestore: action.payload, //overwrite the value
      };
    case "IS_DELETE":
      return {
        ...state, //store all initVal
        isDelete: action.payload, //overwrite the value
      };
    case "MESSAGE":
      return {
        ...state, //store all initVal
        message: action.payload, //overwrite the value
      };
    //if action type are not existed return the initVal
    default:
      return state;
  }
};
