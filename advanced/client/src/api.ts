import {Todo, TodoList} from "./type.js";

const url: string = "http://localhost:3000";

async function getAPI(path: string): Promise<TodoList> {
    try {
        const resp = await fetch(url + path, {
            method: "GET"
        });
        return await resp.json();
    } catch (err) {
        throw new Error(err);
    }
}

async function postAPI(path: string, data: {name?: string, done?: boolean}): Promise<Todo> {
    try {
        const resp = await fetch(url + path, {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        })
        return await resp.json();
    } catch (err) {
        throw new Error(err);
    }
}

async function patchAPI(path: string, data: {name?: string, done?: boolean}): Promise<Todo> {
    try {
        const resp = await fetch(url + path, {
            method: "PATCH",
            body: JSON.stringify(data),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        });
        return await resp.json();
    } catch (err) {
        throw new Error(err);
    }
}

export {getAPI, postAPI, patchAPI};