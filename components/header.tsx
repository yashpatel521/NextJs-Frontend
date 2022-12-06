import styles from "../styles/index.module.css";
import Navbar from "./navbar";
const Header = () => {
  return (
    <div className={styles.brand_box}>
      <Navbar />
    </div>
  );
};

export default Header;
