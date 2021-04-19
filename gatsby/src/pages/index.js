import React from "react"
import {Helmet} from "react-helmet"
import Link from '../componenets/Link';
import Facebook from "../componenets/Facebook";
import Instagram from "../componenets/Instagram";

export default function Home() {
    const links = require('../links.json')
    const linkElements = links.map((item) => <Link key={item.link} link={item.link} title={item.title}/>);

    return (
        <>
            <Helmet>
                <meta charSet="utf-8"/>
                <title>The Number Ninja links</title>
            </Helmet>

            <img className="h-32 mx-auto" src={'/logo_512.png'} alt="The Number Ninja Logo"/>
            <div className="flex flex-col">
                {linkElements}
            </div>
            <div id="social" className="flex flex-row justify-center">
                <Facebook/>
                <Instagram/>
            </div>
        </>
    )
}
