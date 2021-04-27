export type Todo = {
  id: number;
  name: string;
  done: boolean;
};

export type TodoList = {
  todoList: Todo[];
};
