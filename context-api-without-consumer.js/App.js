import React from "react";
import { MyContext } from "./MyContext";
import ChildrenComp from "./ChildrenComp";

const App = () => {
    const [text, setText] = React.useState("");

    return (
        <MyContext.Provider value={{ text, setText }}>
            <ChildrenComp />
        </MyContext.Provider>
    );
}

export default App;
