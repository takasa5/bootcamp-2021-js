import todoTemplate from "./todoTemplate.js"

// View
function reloadListView(todoList) {
    const ul = document.getElementById("todo-list");
    const lis = document.getElementsByClassName("todo-item");
    // 現在のリストを消去
    for (const li of [...lis]) {
        ul.removeChild(li);
    }
    // 新しいリストを追加
    for (const todo of todoList) {
        ul.appendChild(todoTemplate(todo));
    }
}

export default reloadListView;