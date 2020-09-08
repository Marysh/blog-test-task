import {withRouter} from 'next/router'
import Layout from '../../components/Layout'
import React, {useEffect, useState} from "react";
import {PostCardImg, PostContent, PostTitle} from "@components/myStyledCcomponents";

const axios = require('axios');

interface Post {
    title: string,
    body: string
    id: number
}

type PostProps = {
    router?: any,
}
const Post: React.FunctionComponent<PostProps> = ({router}) => {

    const [post, setPost] = useState<Post>(null);

    useEffect(() => {
        let pid;

        if (router.query.pid) {
            pid = router.query.pid;
        } else {
            /**
             * Workaround the issue with empty query object
             * https://nextjs.org/docs/routing/dynamic-routes#caveats
             * https://github.com/vercel/next.js/issues/12988
             */
            const routePath = window.location.pathname;
            pid = routePath.slice(routePath.lastIndexOf('/') + 1, routePath.length);
        }

        axios(`https://simple-blog-api.crew.red/posts/${pid}?_embed=comments`)
            .then(res => {
                setPost(res.data);
            })
    }, [])


    return (
        <Layout>
                {post && (
                    <section>
                        <PostTitle>{post.title}</PostTitle>
                        <PostCardImg src={'https://picsum.photos/600/800?random=' + post.id}/>
                        <PostContent>{post.body}</PostContent>
                    </section>
                )}
        </Layout>
    )
}
export default withRouter(Post)