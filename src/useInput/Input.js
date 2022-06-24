import React, { useState } from "react";

const useInput = (init, validator) => {
  const [value, setValue] = useState(init);
  const onChange = (e) => {
    const value = e.target.value;
    let willUpdate = true;
    //validator value의 길이에 따른 검사
    if (typeof validator === "function") {
      willUpdate = validator(value);
    }
    //willUpdate가 true면 value 세팅
    if (willUpdate) {
      setValue(value);
    }
  };
  return { value, onChange };
  //value를 리턴해줌
};

const Input = () => {
  const maxLen = (value) => value.length < 10;
  const name = useInput("Mr.", maxLen);
  return (
    <div>
      Input
      <br />
      <input placeholder="Name" {...name} />
      {
        // input에서 value를 리턴해줌으로써 name.value로 값을 가져올 수 있음
        //shortcut === {...name} 안에 있는 모든것들을 풀어줌
        //이벤트 핸들링을 완전히 분리된 파일에 다른 entity에 연결하여 처리할 수 있음
      }
    </div>
  );
};

export default Input;
