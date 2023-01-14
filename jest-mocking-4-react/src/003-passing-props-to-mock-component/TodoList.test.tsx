import { render, screen } from "@testing-library/react";
import * as TodoItemModule from "./TodoItem";
import { TodoItemProps } from "./TodoItem";
import TodoList from "./TodoList";

describe("<TodoList> tests", () => {
  test("should render only incomplete todo items (wrong)", () => {
    jest.spyOn(TodoItemModule, "default").mockReturnValue(<div data-testid="todo-item" />);

    const mockTodos = [
      {
        title: "Complete the fatality task.",
        isCompleted: false,
      },
      {
        title: "Pretend to exercise.",
        isCompleted: false,
      },
      {
        title: "Complete all side quests of the Witcher.",
        isCompleted: true,
      },
      {
        title: "Kill time on social media.",
        isCompleted: true,
      },
    ];

    const { debug } = render(<TodoList todos={mockTodos} />);

    console.log("DOM:");
    debug();

    expect(screen.getAllByTestId("todo-item")).toHaveLength(2);
    expect(screen.getByText("Complete the fatality task.")).toBeInTheDocument();
    expect(screen.getByText("Pretend to exercise.")).toBeInTheDocument();
  });

  test("should render only incomplete todo items (correct)", () => {
    jest.spyOn(TodoItemModule, "default").mockImplementation(({ isCompleted, title }: TodoItemProps) => {
      return !isCompleted ? <div data-testid="todo-item">{title}</div> : null;
    });

    const mockTodos = [
      {
        title: "Complete the fatality task.",
        isCompleted: false,
      },
      {
        title: "Pretend to exercise.",
        isCompleted: false,
      },
      {
        title: "Complete all side quests of the Witcher.",
        isCompleted: true,
      },
      {
        title: "Kill time on social media.",
        isCompleted: true,
      },
    ];

    const { debug } = render(<TodoList todos={mockTodos} />);

    console.log("DOM:");
    debug();

    expect(screen.getAllByTestId("todo-item")).toHaveLength(2);
    expect(screen.getByText("Complete the fatality task.")).toBeInTheDocument();
    expect(screen.getByText("Pretend to exercise.")).toBeInTheDocument();
  });
});
