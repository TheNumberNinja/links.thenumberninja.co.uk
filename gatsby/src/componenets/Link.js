import React from "react";

export default function Link(props) {
    return (
        <div className="text-center px-4 py-2 m-2">
            <a
                className="
                block
                align-middle
                h-full
                w-full
                text-xl
                rounded
                bg-darkgreen
                text-white
                font-bold
                py-2 px-4
                border border-lightgreen
                "
                href={props.link}
            >
                {props.title}
            </a>
        </div>
    )
}
