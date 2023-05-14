import React from "react";
import Child from "./child";
const Parent = () => {
    const {first, setfirst} = useState("Chalapathi")
    return (
        <div>
            <p>Parent</p>
            <Child name = {first} setName = {setfirst} />
        </div>
    );
};

export default Parent;