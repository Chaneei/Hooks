import React, { useEffect, useState } from "react";
//useEffect 는 componentWillUnmount , componentDidMount, componentWillUpdate과 유사함
//첫번쨰 인자는 function으로서의 effect가 되고 두번째 인자 dependency array[deps]
//deps 리스트에 있는 값일 때만 값이 변하도록 활성화시킴
function Effect() {
  const sayHello = () => console.log("Hello");
  //최초 componentDidMount시 한번 실행
  useEffect(() => {
    sayHello(); //componentDidMount
  }, [number]);
  //componentWillUpdate number업데이트시에만 실행
  const [number, setNumber] = useState(0);
  const [anumber, setAnumber] = useState(0);

  return (
    <div>
      Effect
      <div>
        Number
        <button onClick={() => setNumber(number + 1)}>{number}</button>
        <button onClick={() => setAnumber(anumber + 1)}>{anumber}</button>
      </div>
    </div>
  );
}

export default Effect;
