import React from 'react';
import { Link } from 'react-router-dom';

const Post = ({ post }) => {
    // console.log(post);
    const { id, title, body } = post;
    return (
        <div class="card max:w-90:lg bg-primary text-primary-content">
            <div class="card-body">
                <h2 class="card-title">{title}</h2>
                <p>{body}</p>
                <div class="card-actions justify-center">
                    <Link to={`/post/${id}`} className='btn btn-secondary' >POST DETAILS</Link>
                </div>
            </div>
        </div>
    );
};

export default Post;