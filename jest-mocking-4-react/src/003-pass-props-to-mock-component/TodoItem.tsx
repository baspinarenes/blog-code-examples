import React from "react";

const TodoItem: React.FC<TodoItemProps> = ({ title, isCompleted }) => {
  if (isCompleted) {
    return null;
  }

  return <div>{title}</div>;
};

export interface TodoItemProps {
  title: string;
  isCompleted: boolean;
}

export default TodoItem;
