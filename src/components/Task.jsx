import React from "react";
import Button from "react-bootstrap/Button";

const Task = (props) => {
  return (
    <div>
      <h1>Lista de tareas</h1>
      <table>
        <thead>
          <tr>
            <th>id</th>
            <th>Description</th>
            <th>Pendiente</th>
            <th>Terminado</th>
            <th>Borrar</th>
          </tr>
        </thead>
        <tbody>
          {props.tasks.map((task, i) => {
            return (
              <tr key={i}>
                <td>{task.key}</td>
                <td>{task.description}</td>
                <td>{task.pendiente ? "Yes" : "No"}</td>
                <td>
                  <Button variant="success">Terminar</Button>
                </td>
                <td>
                  <Button variant="danger" onClick={props.delete}>
                    Borrar
                  </Button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Task;
