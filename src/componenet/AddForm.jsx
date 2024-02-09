import { useState } from "react";
import { useDispatch } from "react-redux";
import { addtodo } from "../features/todo/todoSlice";

export default function AddForm() {
  let [task, setTask] = useState(" ");
  const disptach = useDispatch();

  const handelSubmit = (event) => {
    event.preventDefault();
    disptach(addtodo(task));
    setTask("");

  };

  return (
    <>
      <form onSubmit={handelSubmit}>
        <input type="text" onChange={ (e) => setTask(e.target.value)} />
        <button type="submit">add</button>
      </form>
    </>
  );
}
