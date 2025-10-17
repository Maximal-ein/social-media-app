import React from 'react';
import PostItem from "./PostItem.jsx";

const PostList = ({posts, title, remove}) => {

    if(!posts.length) {
        return (
            <h1 style={{textAlign: 'center'}}>
                No posts found!
            </h1>
        )
    }

    return (
        <>
            <h1 style={{textAlign: 'center'}}>
                {title}
            </h1>
            {posts.map((post) =>
                <PostItem post={post} key={post.id} remove={remove}/>
            )}
        </>
    );
};

export default PostList;