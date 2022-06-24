import React, { useEffect } from "react";

const useBeforeLeave = (onBefore) => {
  if (typeof onBefore !== "function") {
    return;
  }
  const handle = (e) => {
    console.log(e);
    onBefore();
  };
  useEffect(() => {
    document.addEventListener("mouseleave", handle);
    return () => document.removeEventListener("mouseleave", handle);
  }, []);
};

function Page() {
  const begforLife = () => console.log("Pls don`t leave ");
  useBeforeLeave(begforLife);
  return <div>Page</div>;
}

export default Page;
