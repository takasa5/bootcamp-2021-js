import fetchTodo from "./fetchTodo.js"

const main = async () => {
  const todoList = await fetchTodo();
};

main();
