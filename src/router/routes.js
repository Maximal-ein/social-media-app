import About from "../pages/About.jsx";
import Posts from "../pages/Posts.jsx";
import PostIdPage from "../pages/PostIdPage.jsx";
import Login from "../pages/Login.jsx";

export const privateRoutes = [
    {path: '/about', component: About},
    {path: '/posts', component: Posts},
    {path: '/posts/:id', component: PostIdPage},
]

export const publicRoutes = [
    {path: '/login', component: Login},
]