import React, { createContext, useEffect, useState } from "react";

interface TasksContextProviderProps {
  children: React.ReactNode;
}

interface ITask {
  title: string;
  done: boolean;
  id: number;
}

interface TasksContextData {
  tasks: ITask[];
  setTasks: React.Dispatch<React.SetStateAction<ITask[]>>;
}

export const TasksContext = createContext({} as TasksContextData);

export const TasksContextProvider: React.FC<TasksContextProviderProps> = ({
  children,
}) => {
  const [tasks, setTasks] = useState<ITask[]>([]);

  useEffect(() => {
    const existingTasks = localStorage.getItem("tasks");
    existingTasks && setTasks(JSON.parse(existingTasks));
  }, []);

  return (
    <TasksContext.Provider value={{ tasks, setTasks }}>
      {children}
    </TasksContext.Provider>
  );
};
