import { Todo } from "./type.js";
import {getAPI, postAPI} from "./api.js";
import reloadListView from "./viewController.js";
import addTodo from "./addTodo.js"

let todoList: Todo[];

const main = async () => {
  // todo の初期化
  todoList = (await getAPI("/todo"))["todoList"];
  reloadListView(todoList);

  // todo を追加する
  const addBtn = document.getElementById("add-todo-button");
  if (addBtn != null) {
    addBtn.onclick = async () => {
        const name = document.getElementById("name") as HTMLInputElement;
        const todoData = await postAPI("/todo", {
            "name": name.value
        });
        todoList = addTodo(todoList, todoData);
        reloadListView(todoList);
    }
  }
};

main();
