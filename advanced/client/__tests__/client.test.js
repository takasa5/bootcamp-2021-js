import { addTodo } from "../js/addTodo";

describe('todoの追加', () => {
    let todoList;
    beforeEach(() => {
        todoList = [
            {
                "id": 1,
                "name": "todo",
                "done": false
            }
        ];
    });

    it('todoを追加する', () => {
        const newList = addTodo(todoList, {
            "id": 2,
            "name": "todo2",
            "done": false
        });
        expect(newList).toEqual([
            {
                "id": 1,
                "name": "todo",
                "done": false
            },
            {
                "id": 2,
                "name": "todo2",
                "done": false
            }
        ]);
    })
});


