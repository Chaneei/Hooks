import React, { useState, useEffect } from "react";

const useConfirm = (message = "", onConfirm, onCancel) => {
  if (typeof onConfirm !== "function") return;
  //onConfirm의 타입이 function 이 아니라면 함수정지
  if (onCancel && typeof onCancel !== "function") return;
  //onCancel의 타입이 function 이 아니라면 함수정지

  const confirmAction = () => {
    if (window.confirm(message)) {
      onConfirm();
    } else {
      onCancel();
    }
  };
  return confirmAction;
};

function Confirm() {
  //사용자가 버튼을 클릭하는 작업을 하면(이벤트를 실행하기 전에)메세지를 보여주기 위해 사용
  const deleteWorld = () => console.log("Delete the world");
  const abort = () => console.log("Aborted");
  const confirmDelete = useConfirm("Are you sure?", deleteWorld, abort);
  return (
    <div>
      Confirm
      <br />
      <button onClick={confirmDelete}>Delete the world</button>
    </div>
  );
}

export default Confirm;
