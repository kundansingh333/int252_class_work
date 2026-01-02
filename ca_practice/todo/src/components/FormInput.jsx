import React, { useRef } from "react";

const FormInput = ({ handleAdd }) => {
  let taskRef = useRef();
  const addTask = () => {
    handleAdd(taskRef.current.value);
    taskRef.current.value = "";
  };
  return (
    <div className="flex items-center justify-center mt-16 gap-4">
      <input
        ref={taskRef}
        className="px-4 py-2 w-md border rounded-md text-lg "
        type="text"
        placeholder="Add Task"
      />
      <button
        onClick={addTask}
        className="px-4 py-2 w-sm border border-green-800 bg-green-50 rounded-md hover:bg-green-800 hover:border-green-50 hover:cursor-pointer hover:shadow text-green-800 hover:text-white"
      >
        Add Task
      </button>
    </div>
  );
};

export default FormInput;
