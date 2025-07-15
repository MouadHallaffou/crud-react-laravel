import axios from "axios";
import type { Post } from "../types/Post";
const APP_URL = "http://localhost:8000/api";

export const getPosts = () => axios.get<Post[]>(APP_URL + "/posts");
export const createPost = (data: Omit<Post, "id">) => axios.post<Post>(APP_URL + "/posts", data);
export const updatePost = (id: number, data: Omit<Post, "id">) => axios.put<Post>(`${APP_URL}/posts/${id}`, data);
export const deletePost = (id: number) => axios.delete(`${APP_URL}/posts/${id}`);   
