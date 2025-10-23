import axios from "axios";

export interface IPost {
    id: number;
    title: string;
    body: string
}

export interface IComment {
    id: number;
    email: string;
    body: string
}

export default class PostService {
    static async getAll(limit: number = 10, page: number = 1) {
        return await axios.get<IPost[]>('https://jsonplaceholder.typicode.com/posts', {
            params: {
                _limit: limit,
                _page: page
            }
        })
    }

    static async getById(id: number) {
        return await axios.get<IPost>(`https://jsonplaceholder.typicode.com/posts/${id}`)
    }

    static async getCommentsByPostId(id: number) {
        return await axios.get<IComment[]>(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
    }
}