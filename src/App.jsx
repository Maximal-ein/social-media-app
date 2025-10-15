import {useState} from 'react';
import './styles/App.css';
import PostList from "./components/PostList.jsx";
import PostForm from "./components/PostForm.jsx";
import PostFilter from "./components/PostFilter.jsx";
import MyModal from "./components/UI/modal/MyModal.jsx";
import MyButton from "./components/UI/button/MyButton.jsx";
import {usePosts} from "./hooks/usePosts.js";

function App() {

    const [posts, setPosts] = useState([])
    const [filter, setFilter] = useState({sort: '', query: ''})
    const[modal, setModal] = useState(false)
    const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query)

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
