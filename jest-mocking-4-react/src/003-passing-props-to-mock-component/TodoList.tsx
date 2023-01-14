import React from "react";
import TodoItem from "./TodoItem";

const TodoList: React.FC<TodoListProps> = ({ todos }) => {
  return (
    <div>
      <p>Todos:</p>
      {todos.map((todo) => (
        <TodoItem
          title={todo.title}
          isCompleted={todo.isCompleted}
        />
      ))}
    </div>
  );
};

interface TodoListProps {
  todos: Array<{
    title: string;
    isCompleted: boolean;
  }>;
}

export default TodoList;
