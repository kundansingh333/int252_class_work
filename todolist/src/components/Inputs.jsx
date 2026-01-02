import { useState } from "react";

const Inputs = () => {
  const [actions, setActions] = useState(["play", "code", "sleep"]);
  const data = useRef(null);
  const [task, setTask] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(task);
    setActions([...actions, task]);
    setTask("");
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Add a new task"
        className="border p-2 rounded"
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      <button
        className="bg-blue-500 text-white p-2 rounded"
        onClick={handleSubmit}
      >
        Add
      </button>
      <div>
        {actions.map((action, index) => (
          <p key={index}>{action}</p>
        ))}
      </div>
    </div>
  );
};

export default Inputs;
