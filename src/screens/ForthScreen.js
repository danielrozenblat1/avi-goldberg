import Knowledge from "../components/Knowledge/Knowledge";
import styles from "./ForthScreen.module.css"
import { FaPython, FaJs, FaCode, FaLinux, FaHtml5, FaDatabase, FaPhp, FaJava, FaCPlusPlus, FaBash } from 'react-icons/fa';
const ForthScreen=()=>{


return <>
<h1 className={styles.title}>KnowLedge</h1>
<div className={styles.row}>
      {/* Passing FaJs component as a prop */}
      <Knowledge icon={FaPython} text="Python" />
        <Knowledge icon={FaJs} text="JavaScript" />
        <Knowledge icon={FaCode} text="Other Language" />
        <Knowledge icon={FaLinux} text="Linux" />
        <Knowledge icon={FaHtml5} text="HTML" />
        <Knowledge icon={FaDatabase} text="SQL" />
        <Knowledge icon={FaPhp} text="PHP" />
        <Knowledge icon={FaJava} text="Java" />
 

    </div>

</>


}
export default ForthScreen