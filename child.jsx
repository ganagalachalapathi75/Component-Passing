import React from "react";

const Child = (props) => {
    console.log(props);
    return(
        <div>
            <p>Child {props.name} </p>
            <button onClick ={() => props.setName("Lavanya")} >Click me</button>
        </div>
    );
};

export default Child;