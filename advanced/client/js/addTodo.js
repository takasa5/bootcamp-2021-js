function addTodo(todoList, todo) {
    const newList = [...todoList];
    newList.push(todo);
    return newList;
}

export default addTodo;