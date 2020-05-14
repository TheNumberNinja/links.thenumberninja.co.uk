import React from "react"
import Link from '../componenets/link';
import Twitter from "../componenets/twitter";
import Facebook from "../componenets/facebook";
import Instagram from "../componenets/instagram";

export default function Home() {
    const links = require('../links.json')

    const linkElements = links.map((item) => <Link key={item.link} link={item.link} title={item.title}/>);
    return (
        <>
            <img className="h-32 mx-auto" src={'/logo_512.png'} alt="The Number Ninja Logo"/>
            <div className="flex flex-col">
                {linkElements}
            </div>
            <div id="social" className="flex flex-row justify-center">
                <Twitter/>
                <Facebook/>
                <Instagram/>
            </div>
        </>
    )
}
