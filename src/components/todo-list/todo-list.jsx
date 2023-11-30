import { useContext } from "react";
import { Checkbox } from "../checkbox";
import { TodosContext } from "../../todo-context";
import "./todo-list.scss";

export const TodoList = () => {
  const { todos, setTodos } = useContext(TodosContext);

  const handleDelete = (id) => {
    // Görevi silme özelliğini düzeltin
    setTodos((preTodos) => preTodos.filter((todo) => todo.id !== id));
  };

  const toggleCheck = (id) => {
    // Görevi değiştirme yeteneğini düzeltin
    setTodos((preTodos) =>
      preTodos.map(
        (todo) => (todo.id === id ? { ...todo, checked: !todo.checked } : todo), // tıkladığımızda checked durumunu değiştiriyoruz
      ),
    );
  };

  const handleKeyUp = (e, id) => {
    if (e.keyCode === 13) {
      toggleCheck(id);
    }
  };

  return (
    <div className="todo-list">
      <span className="todo-list-title">Yapılacak Görevler:</span>
      {todos.length ? (
        <div className="todo-list-content">
          {todos.map((todoItem) => (
            <Checkbox
              key={todoItem.id}
              label={todoItem.label}
              checked={todoItem.checked}
              onClick={() => toggleCheck(todoItem.id)}
              onKeyUp={(e) => handleKeyUp(e, todoItem.id)}
              onDelete={() => handleDelete(todoItem.id)}
            />
          ))}
        </div>
      ) : (
        <div className="no-todos">Görünüşe göre bugün özgürsün</div>
      )}
    </div>
  );
};
