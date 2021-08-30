// TO GET blog posts
export const FETCH_BLOG_POSTS_SUCCESS='FETCH_BLOG_POSTS_SUCCESS';
export const FETCH_BLOG_POSTS_ERROR='FETCH_BLOG_POSTS_ERROR';
export function fetchBlogPostsSuccess(blogPosts) {
    return {
        type: FETCH_BLOG_POSTS_SUCCESS,
        blogPosts: blogPosts
    }
}

export function fetchBlogPostsError(error) {
    return {
        type: FETCH_BLOG_POSTS_ERROR,
        error: error
    }
}
// TO GET blog comments
export const FETCH_BLOG_COMMENTS_SUCCESS='FETCH_BLOG_COMMENTS_SUCCESS';
export const FETCH_BLOG_COMMENTS_ERROR='FETCH_BLOG_COMMENTS_ERROR';
export function fetchBlogCommentsSuccess(blogComments) {
    return {
        type: FETCH_BLOG_COMMENTS_SUCCESS,
        blogComments: blogComments
    }
}

export function fetchBlogCommentsError(error) {
    return {
        type: FETCH_BLOG_COMMENTS_ERROR,
        error: error
    }
}
