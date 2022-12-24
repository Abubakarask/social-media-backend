let URL;

if (process.env.NODE_ENV === 'development') {
    URL = process.env.REACT_APP_LOCAL_URI;
} else {
    URL = process.env.REACT_APP_PROD_URI;
}

export const getAllUsersEndpoint = `${URL}/users`;
export const myProfileEndpoint = `${URL}/me`;
export const updateProfileEndpoint = `${URL}/update/profile`;
export const followUserEndpoint = `${URL}/follow`;
export const deleteMyProfileEndpoint = `${URL}/delete/me`;
export const userPostsEndpoint = `${URL}/userposts`;
export const userProfileEndpoint = `${URL}/user`;