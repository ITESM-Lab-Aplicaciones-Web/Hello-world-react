import React, { useState } from "react";

const CreateTask = () => {
  const [task, setTask] = useState({
    description: "",
    pendiente: false,
  });

  function submitTask(event) {
    setTask({ description: "", pendiente: false });
  }

  return (
    <>
      <form>
        <label>Escribe tu tarea</label>
        <input name="task" placeholder={"Mi primer tarea"} value={"hola"} />
        <button type="submit" onClick={submitTask}>
          Mandar tarea
        </button>
      </form>
    </>
  );
};

export default CreateTask;
