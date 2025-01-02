// enrutado- wouter
// import { useLocation } from "wouter";

import { useState } from "react";

// zustand
import useStore from "../../../zustand/useStore";

// estilos css
import styles from "../Home.module.css";

// hooks
import { useRandomColor } from "../../../hooks/useRandomColor";

export default function Home() {
  // const [, navigate] = useLocation();
  const { diseñoInStore } = useStore();

  // estado de diseño
  const [diseño] = useState<string>(diseñoInStore);

  return (
    <section className={`${styles.home} ${diseño}`}>
      <header>
        <h1
          className={`${styles[diseño]}`}
          style={diseño === "light" ? { color: useRandomColor() } : undefined}
        >
          Ariel GonzAgüer
        </h1>
        <h2 className={styles[diseñoInStore]}
          style={diseño === "light" ? { color: useRandomColor() } : undefined}>
          Neat Web Development</h2>
      </header>
    </section>
  );
}