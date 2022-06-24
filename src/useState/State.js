import React, { useState } from "react";

const State = () => {
  const [item, setItem] = useState("");
  const incrementItem = () => setItem(item + 1);
  const decrementItem = () => setItem(item - 1);
  //useState은 항상 2개의 value를 return 함
  //[첫번째값, 두번째값]
  //첫번째값은 설정된 초기값을 지니고, 두번째값은 변경된 값을 설정
  //useState(initialState) init안에 초기값을 지정
  return (
    <>
      <div>
        useState {item}
        <button onClick={incrementItem}>Incre</button>
        <button onClick={decrementItem}>Decre</button>
      </div>
    </>
  );
};

export default State;
