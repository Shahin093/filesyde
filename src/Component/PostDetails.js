import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const PostDetails = () => {
    const { id } = useParams();
    const [post, setPost] = useState({});
    useEffect(() => {
        const url = `https://dummyjson.com/posts/${id}`;

        fetch(url)
            .then(res => res.json())
            .then(data => setPost(data));
    }, [post]);
    return (
        <div class="hero min-h-screen bg-base-200">
            <div class="hero-content text-center">
                <div class="max-w-md">
                    <h1 class="text-5xl font-bold">{post.title}</h1>
                    <p class="py-6"><span className='text-2xl'>POST DESCRIPTION : </span>{post.body}</p>
                    <h1 class="text-3xl font-bold"> Tags :
                        {
                            post?.tags?.map(t => <>{t}, </>
                            )
                        }
                    </h1>
                    <h2 className='text-3xl font-bold'>reactions : {post?.reactions}</h2>
                    <button class="btn btn-primary">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default PostDetails;