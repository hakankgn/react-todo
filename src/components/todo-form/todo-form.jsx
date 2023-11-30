import { useContext, useState } from "react";
import { TodosContext } from "../../todo-context";
import "./todo-form.scss";

export const TodoForm = () => {
  const { setTodos } = useContext(TodosContext);
  const [task, setTask] = useState("");

  const handleAddTodo = () => {
    // Yeni görev ekleme yeteneğini düzeltin
    if (task.trim() !== "") {
      setTodos((prevTodos) => [
        ...prevTodos,
        {
          id: crypto.randomUUID(),
          label: task,
          checked: false
        }
      ]);
      setTask("");
    } else {
      alert("Yapılacak bir şey yazmadınız!!");
    }
  };

  const handleKeyUp = (e) => {
    if (e.keyCode === 13) {
      handleAddTodo();
    }
  };

  return (
    <div className="todo-form">
      <input
        placeholder="Yeni Görev Giriniz"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        onKeyUp={handleKeyUp}
      />
      <button type="button" onClick={handleAddTodo}>
        EKLE
      </button>
    </div>
  );
};
