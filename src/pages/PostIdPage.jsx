import React, {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom'
import PostService from "../API/PostService.js";
import {useFetching} from "../hooks/useFetching.js";
import Loader from "../components/UI/Loader/Loader.jsx";

const PostIdPage = () => {
    const params = useParams()
    const [post, setPost] = useState({})
    const [fetchPostById, isLoading, error] = useFetching(async (id) => {
        const response = await PostService.getById(id)
        setPost(response.data)
    })

    useEffect(() => {
        fetchPostById(params.id)
    }, [])

    return (
        <div>
            <h1>Page for post with ID = {params.id}</h1>
            {error &&
                <h2>Error: {error}</h2>
            }
            {isLoading
                ? <div style={{display: 'flex', justifyContent: 'center', marginTop: 50}}><Loader/></div>
                : <div>{post.id}. {post.title}</div>
            }
        </div>
    );
};

export default PostIdPage;