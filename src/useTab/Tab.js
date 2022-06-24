import React, { useState } from "react";

const content = [
  {
    tab: "Section1",
    content: "I`m the content of the Section1",
  },
  {
    tab: "Section2",
    content: "I`m the content of the Section2",
  },
];

const useTabs = (initialTab, allTabs) => {
  const [currentIndex, setCurrentIndex] = useState(initialTab);
  //에러 발생시 최상단으로 이동
  if (!allTabs || !Array.isArray(allTabs)) {
    //allTabs가 아니거나 배열이 아닐 경우 함수 정지
    return;
  }
  return {
    currentItem: allTabs[currentIndex],
    changeItem: setCurrentIndex,
  };
};
function Tab() {
  const { currentItem, changeItem } = useTabs(0, content);
  return (
    <div>
      {content.map((section, index) => (
        <button onClick={() => changeItem(index)} key={index}>
          {section.tab}
        </button>
      ))}
      <div>{currentItem.content}</div>
    </div>
  );
}

export default Tab;
