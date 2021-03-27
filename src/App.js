import "./App.css";
import Task from "./components/Task";
import CreateTask from "./components/CreateTask";
import { tasks } from "./tasks";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const onDelete = () => {
    console.log("Hola");
  };

  return (
    <>
      <h1 className="">Lista de tareas</h1>
      <CreateTask />
      <Task tasks={tasks} delete={onDelete} />
    </>
  );
}

export default App;
