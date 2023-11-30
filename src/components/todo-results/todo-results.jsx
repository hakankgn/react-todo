import { useContext } from "react";
import { TodosContext } from "../../todo-context";
import "./todo-results.scss";

export const TodoResults = () => {
  const { todos } = useContext(TodosContext);

  const calculateChecked = () => {
    // Tamamlanan görevleri hesaplama
    const completedTodos = todos.filter((todo) => todo.checked);
    return completedTodos.length;
  };

  return <div className="todo-results">Yapılanlar: {calculateChecked()}</div>;
};
