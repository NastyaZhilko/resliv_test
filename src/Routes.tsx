import React from "react";
import {Switch, Route, Redirect} from 'react-router-dom';
import Employees from "./components/Empoyees/Employees";
import Main from "./components/Main/Main";
import NotFound from "./components/NotFound/NotFound";

export const PATH = {
    MAIN: "/main",
    EMPLOYEES: "/employees"
}

const Routes =()=>{
    return (
        <div>
            <Switch>
                <Route path={"/"} exact render={() => <Redirect to={'/main'}/>}/>
                <Route path={'/main'} exact render={() => <Main/>}/>
                <Route path={"/employees"} exact render={() => <Employees/>}/>
                <Route render={() => <NotFound/>}/>
            </Switch>
        </div>
    )
}
export default Routes