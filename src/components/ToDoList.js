import React from 'react';

const ToDoList = ({ todoList, deleteTask, setTodoList }) => {
 /*  console.log(todoList.length); */

  const style01 =
    'text-navy text-xl tablet:text-3xl laptop:text-2xl cursor-pointer';

  return (
    <>
      <div className="p-4 bg-grey w-11/12 mx-auto laptop:w-10/12">
        {todoList.map((task) => {
          return (
            <div
              key={task.id}
              className="flex justify-between border-b-2 border-darkgrey mb-2 p-1"
            >
              <div className="flex items-center">
                <p className={style01}>{task.task}</p>
                <p>{task.status}</p>
              </div>

              <button
                className=" text-navy p-1 tablet:text-2xl laptop:text-1xl"
                onClick={() => deleteTask(task.id)}
              >
                <i className="far fa-trash-alt"></i>
              </button>
            </div>
          );
        })}
        <div>
          <p className="text-navy text-md">
            Total Tasks<span className="ml-2">=</span>
            <span className="text-md ml-2 ">{todoList.length}</span>
          </p>
        </div>
      </div>
    </>
  );
};

export default ToDoList;
