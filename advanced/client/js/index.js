import fetchTodo from "./fetchTodo.js"
import reloadListView from "./viewController.js";
import {fetchAddAPI, addTodo} from "./addTodo.js"

let todoList;

const main = async () => {
  // todo の初期化
  todoList = await fetchTodo();
  reloadListView(todoList);
  // todo を追加する
  document.getElementById("add-todo-button").onclick = async () => {
    const todoData = await fetchAddAPI(document.getElementById("name").value);
    console.log(todoData);
    todoList = addTodo(todoList, todoData);
    reloadListView(todoList);
  }
};

main();
