import React, { useEffect, useState } from "react";

const useTitle = (init) => {
  const [title, setTitle] = useState(init);
  const updateTitle = () => {
    const htmlTitle = document.querySelector("title");
    htmlTitle.innerText = title;
  };
  useEffect(() => {
    updateTitle();
  }, [title]);
  return setTitle;
};

function Title() {
  const titleUpdater = useTitle("Loading");
  setTimeout(() => titleUpdater("Home"), 2000);
  return <div>Hi</div>;
}

export default Title;
