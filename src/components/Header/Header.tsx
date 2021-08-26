import React, {useState} from "react";
import style from './Header.module.css'
import {NavLink} from "react-router-dom";
import {PATH} from '../../Routes'

function Header() {

    const [activeMenu, setActiveMenu] = useState<boolean>(false);
    const toggle = () => {
        setActiveMenu(!activeMenu)
    }

    return (
        <div className={style.menuWrapper}>
            <div className={style.burgerMenu} onClick={toggle}>&#9776;</div>
            <div className={`${style.containerMenuLinks} ${activeMenu && style.activeMenu}`}>
                <NavLink to={PATH.MAIN} activeClassName={style.active} className={style.menuLinks}> Main</NavLink>
                <NavLink to={PATH.EMPLOYEES} activeClassName={style.active} className={style.menuLinks}> Employees</NavLink>
            </div>
        </div>
    );
}

export default Header;