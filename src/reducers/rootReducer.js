import { combineReducers } from 'redux';
import { fetchBlogPostsReducer,fetchBlogCommentsReducer } from "./blogPostReducers";

export default combineReducers({
    fetchBlogPostsReducer,
    fetchBlogCommentsReducer
});