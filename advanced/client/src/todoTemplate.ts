function todoTemplate(args: {
  id: number;
  name: string;
  done: boolean;
}): Element {
  const tmpElm = document.createElement("div");
  const doneString = args.done ? `checked="checked"` : "";
  const template = `
    <li class="todo-item">
        <label class="todo-toggle__container">
            <input
                data-todo-id="${args.id}"
                type="checkbox"
                class="todo-toggle"
                ${doneString}
            />
            <span class="todo-toggle__checkmark"></span>
        </label>
        <div class="todo-name">${args.name}</div>
        <div data-todo-id="${args.id}" class="todo-remove-button">x</div>
    </li>
    `;
  tmpElm.innerHTML = template;

  return tmpElm.firstElementChild!;
}

export default todoTemplate;
