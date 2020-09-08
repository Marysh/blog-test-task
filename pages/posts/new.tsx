import {withRouter} from 'next/router'
import Layout from '../../components/Layout'
import React from "react";
import PostForm from "../../components/PostForm/PostForm";

type PostProps = {
    router?: any
}
const NewPost: React.FunctionComponent<PostProps> = ({router}) => {

    return (
        <Layout>
            <PostForm/>
        </Layout>
    )
}
export default withRouter(NewPost)