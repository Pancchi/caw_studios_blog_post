import {FETCH_BLOG_POSTS_ERROR,FETCH_BLOG_POSTS_SUCCESS,
    FETCH_BLOG_COMMENTS_ERROR,FETCH_BLOG_COMMENTS_SUCCESS

} from '../actions/blogPostActions'

// to get blog post details
const initialBlogPostsState = {

blogPosts: [],
error: null
}

export function fetchBlogPostsReducer (state = initialBlogPostsState, action)  {

switch (action.type) {
 
   case FETCH_BLOG_POSTS_SUCCESS:
       return { ...state, blogPosts:action.blogPosts }
   case FETCH_BLOG_POSTS_ERROR:
       return { ...state, error:action.error}
   default:
       return {...state}
}

};

// to get blog comment details
const initialBlogCommentsState = {

    blogComments: [],
    error: null
    }
    
    export function fetchBlogCommentsReducer (state = initialBlogCommentsState, action)  {
    
    switch (action.type) {
     
       case FETCH_BLOG_COMMENTS_SUCCESS:
           return { ...state, blogComments:action.blogComments }
       case FETCH_BLOG_COMMENTS_ERROR:
           return { ...state, error:action.error}
       default:
           return {...state}
    }
    
    };
    