// estilos css
import styles from "../Home/Home.module.css";

// subcomponentes
import Header from "./Header";

// zustand
import useStore from "../../zustand/useStore";

export default function Home() {
  const { diseñoInStore } = useStore();
  return (
    <section className={`${styles.home} ${diseñoInStore}`}>
      <Header />
    </section>
  );
}