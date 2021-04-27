import { Todo, TodoList } from "./type.js";

function addTodo(
  todoList: TodoList["todoList"],
  todo: Todo
): TodoList["todoList"] {
  const newList = [...todoList];
  newList.push(todo);
  return newList;
}

export default addTodo;
