import React, {useEffect, useState} from 'react'
import Layout from '../components/Layout'
import Link from 'next/link'
import {PostSection, PostCard, PostCardImg, PostTitle} from "@components/myStyledCcomponents";


const axios = require('axios');

interface Post {
    id: Number,
    title?: string
}

interface PostLinkProps {
    post: Post
}

const PostLink: React.FunctionComponent<PostLinkProps> = ({post}) => {
    return (
        <PostCard>
            <Link href={`/posts/${post.id}`}>
                <a style={{display: 'block'}}>
                    <PostCardImg src={'https://picsum.photos/600/800?random=' + post.id}/>
                    <PostTitle>
                        {post.title ? post.title : 'No title in this post'}
                    </PostTitle>
                </a>
            </Link>
        </PostCard>
    )
}
const Posts = () => {
    const [posts, setPosts] = useState([]);


    useEffect(() => {
        axios('https://simple-blog-api.crew.red/posts')
            .then(function (res: { data: Array<Post> }) {
                setPosts(res.data);
            })

    }, [])

    return (
        <Layout title="Post">
            <section>
                <PostSection>
                    {posts.map(post => {
                        return <PostLink key={post.id} post={post}/>
                    })}
                </PostSection>
            </section>
        </Layout>
    )
}

export default Posts;
