import React, { useState } from 'react';
import MsgError from './MsgError';
import { v4 as uuidv4 } from 'uuid';

const Form = ({ createTask }) => {
  const [taskList, setTaskList] = useState({ task: '' });
  const [error, setError] = useState(false);

  const handleChangeInput = (e) => {
    setTaskList({
      ...taskList,
      [e.target.name]: e.target.value,
    });
  };

  //*extract values from state
  const { task } = taskList;

  const handleSubmit = (e) => {
    e.preventDefault();

    //!Validate
    if (task.trim() === '') {
      setError(true);
      return;
    }
    setError(false);

    //! Add a ID
    taskList.id = uuidv4();
    taskList.status = false;

    //!Create the task

    createTask(taskList);

    //!Restart Form
    setTaskList({ task: '' });
  };

  return (
    <>
      <form className="flex flex-row mt-2 p-4" onSubmit={handleSubmit}>
        <input
          type="text"
          name="task"
          placeholder="add task"
          className="w-2/3 py-1 border-2 border-grey mr-1 text-dark tablet:p-2 tablet:text-3xl laptop:text-xl"
          onChange={handleChangeInput}
          value={task}
        />
        <button className="w-1/3 bg-navy p-1" type="submit">
          <i className="fas fa-plus text-white tablet:text-3xl laptop:text-2xl"></i>
        </button>
      </form>
      {error ? (
        <MsgError message="Empty field, write your pending task here !" />
      ) : null}
    </>
  );
};

export default Form;
