let URL;

if (process.env.NODE_ENV === 'development'){
    URL = process.env.REACT_APP_LOCAL_URI;
} else{
    URL = process.env.REACT_APP_PROD_URI;
}

export const registerEndpoint = `${URL}/register`;
export const loginEndpoint = `${URL}/login`;
export const forgotPasswordEndpoint = `${URL}/forgot/password`;
export const resetPasswordEndpoint = `${URL}/reset`;
export const updatePasswordEndpoint = `${URL}/update/password`;
export const logoutEndpoint = `${URL}/logout`;