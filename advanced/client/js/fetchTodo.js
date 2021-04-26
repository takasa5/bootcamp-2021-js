import api from "./util.js"

async function fetchTodo() {
    try {
        const resp = await fetch(api + "/todo", {
            method: "GET"
        });
        const body = await resp.json();
        return body["todoList"];
    } catch (err){
        // TODO: error handling
        console.log(err);
    }
}

export default fetchTodo;