let URL;

if (process.env.NODE_ENV === 'development') {
    URL = URL;
} else {
    URL = process.env.REACT_APP_PROD_URI;
}


export const newPostEndpoint = `${URL}/post/upload`;
export const postOfFollowingEndpoint = `${URL}/posts`;
export const myPostsEndpoint = `${URL}/my/posts`;
export const likePostEndpoint = `${URL}/post`;
export const deletePostEndpoint = `${URL}/post`;
export const updateCaptionEndpoint = `${URL}/post`;
export const commentEndpoint = `${URL}/post/comment`;