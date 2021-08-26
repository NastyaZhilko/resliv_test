import React, {FC} from "react";
import {useDispatch} from "react-redux";
import {EmployeeType} from "../../../api/api";
import {deleteUser} from "../../../redux/employeesReducer";
import style from "./Employee.module.css"
import profile from "../../../common/images/profile.png"

const Employee: FC<EmployeeType> = React.memo(({id, avatar, first_name, last_name}) => {

    const dispatch = useDispatch();

    const removeEmployee = () => {
        dispatch(deleteUser(id))
    }

    return (
        <div className={style.container}>
            <div className={style.block}>
                <img src={!!avatar ? avatar : profile} alt=""/>
               <div> {first_name} {last_name} </div>
            </div>
            <div>
                <button onClick={removeEmployee}>Delete</button>
            </div>
        </div>
    )
})
export default Employee