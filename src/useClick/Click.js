import React, { useEffect, useRef } from "react";

const Reftest = () => {
  const reftest = useRef();
  //누군가 element를 클릭하였을때 알려줌
  //react에 있는 모든 component는 reference element를 가지고 있음
  //ref reference 는 기본적으로 우리으 component의 어떤 부분을 선택할 수 있는 방법
  setTimeout(() => reftest.current.focus(), 2000);

  return (
    <>
      <input placeholder="test" ref={reftest} />
    </>
  );
};

const useClick = (onClick) => {
  const element = useRef();
  useEffect(() => {
    //useEffect Didmount,Didupdate 시 if문을 콜함
    if (element.current) {
      element.current.addEventListener("click", onClick);
    }
    //willUnmount시 발생할 return
    //mount되지 않았을 때 eventListner가 배치되지 않도록 하기위함
    return () => {
      if (element.current)
        element.current.removeEventListener("click", onClick);
    };
  }, []);
  return element;
};

const Click = () => {
  const sayHello = () => console.log("say Hello");
  const title = useClick(sayHello);
  return (
    <div>
      <h1 ref={title}>Hi</h1>
      <br />
      <Reftest />
    </div>
  );
};

export default Click;
