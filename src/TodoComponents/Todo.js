import react from "react";
import AddTodo from "./AddTodo";
import TodoList from "./TodoList";

class Todo extends react.Component {
  constructor(props) {
    super(props);
    this.state = {
      todoList: [],
    };
    this.updateTodoState = this.updateTodoState.bind(this);
  }
  updateTodoState(todoText) {
    this.setState({
      todoList: [
        ...this.state.todoList,
        {
          id: Date.Now,
          todo: todoText,
        },
      ],
    });
  }

  render() {
    return (
      <div className="Todo-main">
        <AddTodo update={this.updateTodoState} />
        <TodoList todoList={this.state.todoList} />
      </div>
    );
  }
}

export default Todo;
