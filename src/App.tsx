import { Header } from "./components/Header/Header";
import { Tasks } from "./components/Tasks/Tasks";
import { TasksContextProvider } from "./context/TasksContext";

import "./styles/Global.css";

function App() {
  return (
    <TasksContextProvider>
      <Header />
      <Tasks />
    </TasksContextProvider>
  );
}

export default App;
