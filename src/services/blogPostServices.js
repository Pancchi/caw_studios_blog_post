import { fetchBlogPostsError,fetchBlogPostsSuccess,fetchBlogCommentsError,fetchBlogCommentsSuccess } from "../actions/blogPostActions";
import axios from 'axios';
export  function fetchBlogPostServices() {
 return (dispatch) => {
      

        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(res => res.data)
            .then(res => {
                dispatch(fetchBlogPostsSuccess(res));
            })
            .catch(error => {
                dispatch(fetchBlogPostsError(error));
            })

    }
};


export  function fetchBlogCommentsServices(id) {
    return (dispatch) => {
        axios.get('https://jsonplaceholder.typicode.com/comments?postId='+id)
               .then(res => res.data)
               .then(res => {
                   dispatch(fetchBlogCommentsSuccess(res));
               })
               .catch(error => {
                   dispatch(fetchBlogCommentsError(error));
               })
   
       }
   };
   