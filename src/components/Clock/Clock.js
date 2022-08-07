import { useState } from "react";
import styles from './Clock.module.css';




const Clock = () => {
    let time = new Date().toLocaleTimeString();

    const [currentTime, setCurrentTime] = useState(time);

    const updateTime = () => {
        time = new Date().toLocaleTimeString();
        setCurrentTime(time);
    };

    setInterval(updateTime, 1000)

    return (
        <div className={styles.clock}>
            <h1>Time: {currentTime}</h1>
            <div><h2 className={styles.topTitles}>Top 5 Products</h2></div>
        </div>
        

    )
}

export default Clock;