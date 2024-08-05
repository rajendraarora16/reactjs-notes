import React from "react";
import { MyContext } from "./MyContext";

const ChildrenComp = () => {

    return <>
    <MyContext.Consumer>
        { value => <h1>{value}</h1> }
    </MyContext.Consumer>
    </>
}

export default ChildrenComp;
