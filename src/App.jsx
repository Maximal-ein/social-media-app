import {useMemo, useState} from 'react';
import './styles/App.css';
import PostList from "./components/PostList.jsx";
import PostForm from "./components/PostForm.jsx";
import PostFilter from "./components/PostFilter.jsx";
import MyModal from "./components/UI/modal/MyModal.jsx";
import MyButton from "./components/UI/button/MyButton.jsx";

function App() {

    const [posts, setPosts] = useState([
        {id: 1, title: 'JS 1', body: 'Description'},
        {id: 2, title: 'JS 2', body: 'Description'},
        {id: 3, title: 'JS 3', body: 'Description'},
    ])

    const [filter, setFilter] = useState({sort: '', query: ''})

    const[modal, setModal] = useState(false)

    const sortedPosts = useMemo(() => {
        if(filter.sort) {
            return posts.toSorted((a, b) => a[filter.sort].localeCompare(b[filter.sort]))
        }
        return posts
    }, [filter.sort, posts])

    const sortedAndSearchedPosts = useMemo(() => {
        return sortedPosts.filter((p) => p.title.toLowerCase().includes(filter.query))
    }, [filter.query, sortedPosts])

    const createPost = (newPost) => {
        setPosts([...posts, newPost])
        setModal(false)
    }

    const removePost = (post) => {
        setPosts(posts.filter(p => p.id !== post.id))
    }

    return (
        <div className="App">
            <MyButton style={{marginTop: 30}}  onClick={() => setModal(true)}>
                Create post
            </MyButton>
            <MyModal visible={modal} setVisible={setModal}>
                <PostForm create={createPost}/>
            </MyModal>
            <hr style={{margin: '15px 0'}}/>
            <PostFilter filter={filter}
                        setFilter={setFilter}
            />
            <PostList posts={sortedAndSearchedPosts} title="List of posts" remove={removePost}/>
        </div>
    )
}

export default App
