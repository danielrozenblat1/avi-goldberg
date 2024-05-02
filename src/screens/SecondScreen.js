import { useRef, useEffect } from "react";
import styles from "./SecondScreen.module.css";
import { Player } from '@lordicon/react';
import server from "../icons/wired-lineal-57-server.json";
import manager from "../icons/wired-lineal-1007-organization.json"
import data from "../icons/wired-lineal-2513-data.json"
import experience from "../icons/wired-lineal-977-internship.json"
const SecondScreen = () => {
    const playerRef1 = useRef(null);
    const playerRef2 = useRef(null);
    const playerRef3 = useRef(null);
    const playerRef4 = useRef(null);


useEffect(()=>{
    playerRef1?.current?.playFromBeginning();
    playerRef2?.current?.playFromBeginning();
    playerRef3?.current?.playFromBeginning();
    playerRef4?.current?.playFromBeginning();
},[])


    const handleComplete1 = () => {
        setTimeout(() => {
            playerRef1?.current?.playFromBeginning();
        }, 2500); // play again after 2.5 seconds
    };

    const handleComplete2 = () => {
        setTimeout(() => {
            playerRef2?.current?.playFromBeginning();
        }, 2500); // play again after 2.5 seconds
    };

    const handleComplete3 = () => {
        setTimeout(() => {
            playerRef3?.current?.playFromBeginning();
        }, 2500); // play again after 2.5 seconds
    };

    const handleComplete4 = () => {
        setTimeout(() => {
            playerRef4?.current?.playFromBeginning();
        }, 2500); // play again after 2.5 seconds
    };

    return (
        <>
            <div className={styles.container}>
                <div className={`${styles.square} ${styles.topLeft}`}>
                    <h1 className={styles.title}>Data Manager</h1>
                    <div className={styles.icon}>
                        <Player ref={playerRef1} size="100%" onComplete={handleComplete1} icon={manager} />
                    </div>
                    <div className={styles.description}>I have over 100 employees working around the clock to make sure your information is in good hands</div>
                </div>
                <div className={`${styles.square} ${styles.topRight}`}>
                    <h1 className={styles.title}>Data Storage</h1>
                    <div className={styles.icon}>
                        <Player ref={playerRef2} size="100%" onComplete={handleComplete2} icon={data} />
                    </div>
                    <div className={styles.description}>In the last 2 years I have been managing a data center woth more then 5000 servers </div>
                </div>
                <div className={`${styles.square} ${styles.bottomLeft}`}>
                    <h1 className={styles.title}>Data Center</h1>
                    <div className={styles.icon}>
                        <Player ref={playerRef3} size="100%" onComplete={handleComplete3} icon={server} />
                    </div>
                    <div className={styles.description}>My job is to make sure you have the exact quantity and quality of servers for your data</div>
                </div>
                <div className={`${styles.square} ${styles.bottomRight}`}>
                    <h1 className={styles.title}>Experience</h1>
                    <div className={styles.icon}>
                        <Player ref={playerRef4} size="100%" onComplete={handleComplete4} icon={experience} />
                    </div>
                    <div className={styles.description}>For the past 30 years I have been living and breathing programming, information security, computers and management</div>
                </div>
            </div>
        </>
    );
};

export default SecondScreen;
