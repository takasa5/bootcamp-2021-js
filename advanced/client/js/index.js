import {getAPI, postAPI} from "./api.js";
import reloadListView from "./viewController.js";
import addTodo from "./addTodo.js"

let todoList;

const main = async () => {
  // todo の初期化
  todoList = (await getAPI("/todo"))["todoList"];
  reloadListView(todoList);
  // todo を追加する
  document.getElementById("add-todo-button").onclick = async () => {
    const todoData = await postAPI("/todo", {
      "name": document.getElementById("name").value
    });
    console.log(todoData);
    todoList = addTodo(todoList, todoData);
    reloadListView(todoList);
  }
};

main();
