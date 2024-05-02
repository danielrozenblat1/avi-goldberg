import styles from "./FirstScreen.module.css"
import avi from "../images/אבי גולדברג.png"

const FirstScreen=()=>{
   

  return <>
  <div className={styles.center}><img className={styles.image} src={avi} alt="אבי גולדברג"/></div>
  <h1 className={styles.title}>Avi Goldberg</h1>
  <h2 className={styles.job}>Data Center Station Manager</h2>
  <h3 className={styles.place}>Jerusalem | Israel</h3>
  </>
}
export default FirstScreen