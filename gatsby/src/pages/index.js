import React from "react"
import {Helmet} from "react-helmet"
import Link from '../componenets/Link';
import Facebook from "../componenets/Facebook";
import Instagram from "../componenets/Instagram";
import {graphql} from "gatsby";

const Home = ({data}) => {
    const links = data.sanityLinktree?.links || [];
    const linkElements = links.map((item) => <Link key={item.url} link={item.url} title={item.title}/>);

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
export default Home


export const query = graphql`
    query {
        sanityLinktree(_id: {eq: "links"}) {
            links {
                title
                url
            }
        }
    }

`
