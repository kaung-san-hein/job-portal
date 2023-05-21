// used two localstorage for register data like database and to save token for login

const CACHE_REGISTER = "JobPortalRegister";
const CACHE_TOKEN = "JobPortalToken";

export const setRegister = (data) => localStorage.setItem(CACHE_REGISTER, data);

export const getRegister = () => localStorage.getItem(CACHE_REGISTER);

export const setToken = (token) => localStorage.setItem(CACHE_TOKEN, token);

export const getToken = () => localStorage.getItem(CACHE_TOKEN);

export const removeToken = () => localStorage.removeItem(CACHE_TOKEN)
