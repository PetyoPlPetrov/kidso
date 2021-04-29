
import {Helmet} from "react-helmet";


function View({content,title}){

    return <>
        <Helmet>
            <meta charSet="utf-8" />
            <title>{title}</title>
            <meta name="title" content="Helmet app title" />
            <meta name="description" content="Helmet application desc" />

            <link rel="canonical" href="http://mysite.com/example" />
        </Helmet>
        <div dangerouslySetInnerHTML={{__html: content}}>
        </div>
    </>

}

export default View