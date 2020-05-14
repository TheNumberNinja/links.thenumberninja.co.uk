import React from "react";

export default props => (
    <a href={props.href} title={props.title} className="mx-3 my-2">
        <svg viewBox="0 0 24 24" className="fill-current h-10" style={{color: props.color}}>
            <path d={props.path}/>
        </svg>
    </a>
);
