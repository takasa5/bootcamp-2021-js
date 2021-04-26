import api from "./util.js";

// API
async function fetchAddAPI(name) {
    try {
        console.log(name);
        const resp = await fetch(api + "/todo", {
            method: "POST",
            body: JSON.stringify({
                "name": encodeURIComponent(String(name))
            }),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        });
        const body = await resp.json();
        return body;
    } catch (err) {
        // TODO: err handling
        console.log(err);
    }
}
// ロジック
function addTodo(todoList, todo) {
    const newList = [...todoList];
    newList.push(todo);
    return newList;
}

export {fetchAddAPI, addTodo};