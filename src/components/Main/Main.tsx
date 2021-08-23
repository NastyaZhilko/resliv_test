import React from "react";
import {PATH} from "../../Routes";
import styles from "./Main.module.css"

const Main = () =>{
    return (
        <div className={styles.wrapper}>
            <h2>Главная страница</h2>
            <p>Раздел в разработке...<br/>Перейти к <a href={PATH.EMPLOYEES}>списку</a> сотрудников</p>

        </div>
    )
}
export default Main