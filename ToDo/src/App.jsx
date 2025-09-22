import ToDo from "./components/ToDo/ToDo";
import styles from "./App.module.css";

export default function App() {
  return (
    <div className={styles.app}>
      <ToDo />
    </div>
  );
}
