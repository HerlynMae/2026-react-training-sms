import React from "react";

//It receives a value called title
const useDocumentTitle = (title) => {
  //Do something when the component loads OR when title changes
  React.useEffect(() => {
    //It changes the text in the browser tab.
    document.title = title;
  }, [title]); //Run this again only if title changes
};

export default useDocumentTitle;

//Every time the page name changes, update the name im the browser tab