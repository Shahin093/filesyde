import React, { useEffect, useState } from 'react';
import Post from './Post';

const Posts = () => {
    // https://dummyjson.com/posts
    const [posts, SetPosts] = useState([]);
    useEffect(() => {
        fetch('https://dummyjson.com/posts/')
            .then(res => res.json())
            .then(data => SetPosts(data));
    }, []);
    // console.log(posts?.posts?.slice(0, 10));
    return (
        <div className=''>
            <h2 className='text-3xl my-10 text-center'>POSTS</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>

                {
                    posts?.posts?.slice(0, 10)?.map(post => <Post key={post.id} post={post}></Post>)
                }
            </div>
        </div>
    );
};

export default Posts;