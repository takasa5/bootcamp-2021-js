function todoTemplate({id, name, done}) {
    const tmpElm = document.createElement("div");
    const doneString = done ? `value="checked"` : "";
    const template = `
    <li class="todo-item">
        <label class="todo-toggle__container">
            <input
                data-todo-id="${id}"
                type="checkbox"
                class="todo-toggle"
                ${doneString}
            />
            <span class="todo-toggle__checkmark"></span>
        </label>
        <div class="todo-name">${name}</div>
        <div data-todo-id="1" class="todo-remove-button">x</div>
    </li>
    `;
    tmpElm.innerHTML = template;

    return tmpElm.firstElementChild;
}

export default todoTemplate;