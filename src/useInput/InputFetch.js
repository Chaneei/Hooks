import React, { useState, useEffect } from "react";
import Axios from "axios";
function useInput(defaultValue) {
  const [value, setValue] = useState(defaultValue);

  const onChange = (e) => {
    const {
      target: { value },
    } = e;
    setValue(value);
  };

  return { value, onChange };
}

//url을 가져오기 위함
function useFetch(url) {
  //url에서 가져온 정보
  const [payload, setPayload] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const callUrl = async () => {
    try {
      const data = await Axios.get(url);
      setPayload(data);
      //axios는 response안에 데이터를 줌 API응답을 데이터 안에 준다.
    } catch {
      setError("😂");
    } finally {
      setLoading(false);
      //에러 유뮤상관없이 실행됨
    }
  };

  useEffect(() => {
    callUrl();
  }, []);
  return { payload, loading, error };
}

function InputFetch() {
  const name = useInput("");
  const { payload, loading, error } = useFetch(
    "https://jsonplaceholder.typicode.com/todos/1"
  );
  return (
    <div className="App">
      <h1>Use Hooks</h1>
      <br />
      <input {...name} placeholder="What`s your name?" />
      {/* {...name} 은 value={name.value} onChange={name.onChange} 와 동일함 비구조화할당 */}
      <br />
      {loading && <span>Loading your cat</span>}
      {!error && error && <span>{error}</span>}
      {!loading && payload && <span>{payload.data.title}</span>}
    </div>
  );
}

export default InputFetch;
