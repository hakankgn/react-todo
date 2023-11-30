import { useState } from "react";
import { TodoForm } from "./components/todo-form";
import { TodoList } from "./components/todo-list";
import { TodoResults } from "./components/todo-results";
import { TodosContext } from "./todo-context";
import "./index.scss";

const todosTemplate = [
  {
    id: 0,
    label: "Tüm görevleri görüntüleme özelliğini düzeltin",
    checked: false,
  },
  {
    id: 1,
    label: "Sayfa düzenini düzeltin, onay kutuları sütunda listelenmelidir",
    checked: false,
  },
  {
    id: 2,
    label: "Yeni bir görev ekleme yeteneğini düzeltin",
    checked: false,
  },
  {
    id: 3,
    label: "Görevi değiştirme yeteneğini düzeltin",
    checked: false,
  },
  {
    id: 4,
    label: "Görevi silme özelliğini düzeltin",
    checked: false,
  },
  {
    id: 5,
    label: "Tamamlanan görevleri sayma özelliğini düzeltin",
    checked: false,
  },
];

export const App = () => {
  const [todos, setTodos] = useState(todosTemplate);

  return (
    <div className="root">
      <TodosContext.Provider value={{ todos, setTodos }}>
        <TodoList />
        <TodoResults />
        <TodoForm />
      </TodosContext.Provider>
    </div>
  );
};
