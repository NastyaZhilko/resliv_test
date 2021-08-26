import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import styles from './Employees.module.css';
import {AppStateType} from '../../redux/store';
import {EmployeeType} from "../../api/api";
import AddEmployee from './AddingEmployee/AddEmpoyee';
import {getUsersTC} from "../../redux/employeesReducer";
import Employee from "./Employee/Employee";

const Employees = () => {

    const dispatch = useDispatch();

    const employees = useSelector<AppStateType, EmployeeType[]>(state => state.employees.users);


    useEffect(() => {
        dispatch(getUsersTC())
    }, [dispatch])

    return (
        <div className={styles.container}>
            <h2>Employees</h2>
            <div className={styles.usersPanel}>
                <div className={styles.usersSetBox}>

                    <AddEmployee/>
                </div>
            </div>
            <div className={styles.box}>
                {employees.map(user => (
                    <Employee key={user.id}
                              id={user.id}
                              email={user.email}
                              avatar={user.avatar}
                              first_name={user.first_name}
                              last_name={user.last_name}
                    />
                ))}
            </div>
        </div>
    )

}

export default Employees