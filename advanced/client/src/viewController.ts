import { Todo } from "./type.js";
import {patchAPI} from "./api.js";
import todoTemplate from "./todoTemplate.js";

// View
function reloadListView(todoList: Todo[]): void {
    const ul = document.getElementById("todo-list");
    if (ul == null) {
        throw Error("#todo-list が見つかりませんでした");
    }
    const lis = document.getElementsByClassName("todo-item");
    let checkedCounter = 0;
    // 現在のリストを消去
    for (const li of [...lis]) {
        ul.removeChild(li);
    }
    // 新しいリストを追加
    for (const todo of todoList) {
        if (todo["done"]) {
            checkedCounter = checkedCounter + 1;
        };
        const tmpl = todoTemplate(todo);
        ul.appendChild(tmpl);
        // イベントリスナーを追加
        const ckBtn = tmpl.getElementsByClassName("todo-toggle__checkmark")[0] as HTMLElement;
        const ck = tmpl.getElementsByClassName("todo-toggle")[0] as HTMLInputElement;
        ckBtn.onclick = async () => {
            await patchAPI(`/todo/${todo["id"]}`,{
                name: todo["name"],
                done: !ck.checked
            });
            // TODO: 下部の数字を更新
        }
    }

    document.getElementsByClassName("done-items-num__value")[0].innerHTML = String(checkedCounter);

}

export default reloadListView;