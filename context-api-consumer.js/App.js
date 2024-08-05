import React from "react";
import { MyContext } from "./MyContext";
import ChildrenComp from "./ChildrenComp";

const App = () => {

    return (
        <MyContext.Provider value={"Hello world"}>
            <ChildrenComp />
        </MyContext.Provider>
    );
}

export default App;
