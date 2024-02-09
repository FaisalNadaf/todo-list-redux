import { useSelector } from "react-redux";
import AddForm from "./AddForm";
import { useDispatch } from "react-redux";
import { destroytodo } from "../features/todo/todoSlice";
import { useState } from "react";

export default function Todo() {
  const todos = useSelector((state) => state.todos);
  console.log(todos);

  // Check if todos is undefined before attempting to map over it
  if (!todos) {
    return null; // or you can return a loading indicator or an empty list
  }

  const disptach = useDispatch();


  const ondel = (id) => {
    disptach(destroytodo(id));
  };

  return (
    <>
      <AddForm />
      <h1>todo</h1>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            {todo.task} <button onClick={()=>ondel(todo.id)}>del</button>
          </li>
        ))}
      </ul>
    </>
  );
}
