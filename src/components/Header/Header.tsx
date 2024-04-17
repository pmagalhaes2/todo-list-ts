import React from "react";

import styles from "./Header.module.scss";
import { StatsCard } from "../StatsCard/StatsCard";

export const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div>
          <h1>MyTodo</h1>

          <span>Bem-vinda, Patricia!</span>
        </div>
        <div>
          <StatsCard title={"Tarefa 1"} value={2} />
          <StatsCard title={"Tarefa 2"} value={2} />
          <StatsCard title={"Tarefa 3"} value={2} />
        </div>
      </div>
    </header>
  );
};
