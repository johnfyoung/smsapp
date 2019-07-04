import React from "react";

export default function Debug(props) {
    return (
        <div className="debugPanel">
            <ul>
                {Object.keys(props.vals).map(item => <li key={item}>{item}: {props.vals[item]}</li>)}
            </ul>
        </div>
    )
}
