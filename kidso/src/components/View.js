
import {Helmet} from "react-helmet";

function View({content,title,metaTitle,metaDescription}){

    return <>
        <Helmet>
            <meta charSet="utf-8" />
            <title> {title}</title>
            <meta name="title" content={metaTitle} />
            <meta name="description" content={metaDescription} />
        </Helmet>
        <div dangerouslySetInnerHTML={{__html: content}}>
        </div>
    </>

}

export default View