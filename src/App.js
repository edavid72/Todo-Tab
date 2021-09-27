import React, { useEffect, useState } from 'react';
import Form from './components/Form';
import ToDoList from './components/ToDoList';
import empty from './img/empty.svg';

const App = () => {
  //Todo:::LocalStorage
  let initialTasks = JSON.parse(localStorage.getItem('todoList'));
  if (!initialTasks) {
    initialTasks = [];
  }
  const [todoList, setTodoList] = useState(initialTasks);

  const createTask = (task) => {
    setTodoList([...todoList, task]);
  };

  //!Delete task by ID
  const deleteTask = (id) => {
    const newTasks = todoList.filter((task) => task.id !== id);
    setTodoList(newTasks);
  };

  //Todo:::LocalStorage
  useEffect(() => {
    if (initialTasks) {
      localStorage.setItem('todoList', JSON.stringify(todoList));
    } else {
      localStorage.setItem('todoList', JSON.stringify([]));
    }
  }, [todoList, initialTasks]);

  return (
    <div className="bg-dark">
      <div className="container laptop:w-2/4 mx-auto bg-white h-screen">
        <h1 className="bg-navy py-3 text-white text-5xl tablet:text-6xl font-bold text-center">
          <i className="fas fa-clipboard-check text-red mr-2 text-center"></i>
          todo<span className="text-red">tab</span>
        </h1>

        <div>
          <Form createTask={createTask} />
        </div>

        <div className="mt-5">
          {todoList.length === 0 ? (
            <div className="mt-40">
              <p className="text-dark text-xl text-center mb-2 tablet:text-3xl laptop:text-2xl">
                You have no pending tasks on this list
              </p>
              <img src={empty} alt="hola" className="w-5/12 mx-auto" />
            </div>
          ) : (
            <ToDoList
              todoList={todoList}
              deleteTask={deleteTask}
              setTodoList={setTodoList}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default App;
