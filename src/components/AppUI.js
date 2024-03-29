import React from "react";
import { TodoContext } from "./TodoContext";
import { TodoCounter } from "./TodoCounter";
import { TodoItem } from "./TodoItem";
import { CreateTodoButton } from "./CreateTodoButton";
import { TodoList } from "./TodoList";
import { TodoSearch } from "./TodoSearch";
import { Modal } from "./Modal.js";
import { TodoForm } from "./TodoForm.js";
import { TodosError } from "./TodosError";
import { TodosLoading } from "./TodosLoading";
import { EmptyTodos } from "./EmptyTodos";

function AppUI() {
  const {
    error,
    loading,
    searchedTodos,
    completeTodo,
    deleteTodo,
    openModal,
    setOpenModal,
  } = React.useContext(TodoContext);
  return (
    <div className="App">
      <TodoCounter />
      <div className="bk">
        <TodoSearch />
        <TodoList>
          {error && <TodosError error={error} />}
          {loading && <TodosLoading />}
          {!loading && !searchedTodos.length && <EmptyTodos />}
          {searchedTodos.map((todo) => (
            <TodoItem
              key={todo.text}
              text={todo.text}
              completed={todo.completed}
              onComplete={() => completeTodo(todo.text)}
              onDelete={() => deleteTodo(todo.text)}
            />
          ))}
        </TodoList>
      </div>
      {!!openModal && (
        <Modal>
          <TodoForm />
        </Modal>
      )}

      <CreateTodoButton setOpenModal={setOpenModal} />
    </div>
  );
}

export { AppUI };
