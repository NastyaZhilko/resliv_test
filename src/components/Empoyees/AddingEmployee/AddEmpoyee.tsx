import React, {ChangeEvent, useState} from "react";
import {useDispatch} from "react-redux";
import {addUser} from "../../../redux/employeesReducer";
import styles from "./AddEmpoyee.module.css"
import Modal from "../../../common/components/Modal/Modal";

const AddEmployee = () => {

    const dispatch = useDispatch();
    const [firstName, setFirstName] = useState<string>('');
    const [lastName, setLastName] = useState<string>('');
    const [open, setOpen] = useState(false)

    const addUserClickHandle = () => {
        if (firstName && lastName) {
            dispatch(addUser(firstName, lastName));
            setFirstName('')
            setLastName('')
            setOpen(false);
        }
        return;
    }

    const onFirstNameChangeHandle = (e: ChangeEvent<HTMLInputElement>) => {
        setFirstName(e.target.value);
    }
    const onLastNameChangeHandle = (e: ChangeEvent<HTMLInputElement>) => {
        setLastName(e.target.value);
    }

    return (
        <div>
            <div className={styles.btn}>
                <button onClick={() => {
                    setOpen(true)
                }}>Add User
                </button>
            </div>
            <Modal
                modal={open}
                setModal={setOpen}
            >
                <div className={styles.form}>
                    <h2>Fill out the form to add an employee</h2>
                    <input type={'text'}
                           placeholder={'First name'}
                           value={firstName}
                           id={'first-name'}
                           onChange={onFirstNameChangeHandle}
                    />
                    <input type={'text'}
                           placeholder={'Last name'}
                           value={lastName}
                           id={'last-name'}
                           onChange={onLastNameChangeHandle}
                    />
                    <div>
                        <button onClick={addUserClickHandle} disabled={!firstName || !lastName}>Accept</button>
                    </div>
                </div>
            </Modal>
        </div>
    )
}
export default AddEmployee
