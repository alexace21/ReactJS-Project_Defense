import { useState, useContext, useEffect } from "react";
import styles from './Clock.module.css';
import AuthContext from "../../context/AuthContext";

const Clock = () => {
    const {user} = useContext(AuthContext);
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
            {user._id
            ?   <div><h2 className={styles.topTitles}>Your Products...</h2></div>
            :   <div><h2 className={styles.topTitles}>No Products yet...</h2></div>
            }
            
        </div>
        

    )
}

export default Clock;