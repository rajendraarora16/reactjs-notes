import React, { useContext } from "react";
import { MyContext } from "./MyContext";

const ChildrenComp = () => {

    const { text, setText } = useContext(MyContext);

    return <>
        Text is : {text}
        <button onClick={() => setText("Hello world!")}>Click me</button>
    </>
}

export default ChildrenComp;
