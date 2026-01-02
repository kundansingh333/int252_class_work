import React, { use, useRef, useState } from "react";

const Reminder = () => {
  let task = useRef();
  let [data, setData] = useState([]);

  const changeHandle = () => {
    setData([...data, task.current.value]);
    task.current.value = "";
    console.log(data);
  };
  return (
    <div>
      <input type="text" placeholder="Add task" ref={task} />
      <button onClick={changeHandle}> Add New Task</button>
      <div>
        {data.map((item, index) => {
          return <div key={index}>{item}</div>;
        })}
      </div>
    </div>
  );
};

export default Reminder;
