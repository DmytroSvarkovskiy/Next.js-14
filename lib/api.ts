import axios from 'axios';

const baseURL = process.env.NEXT_PUBLIC_URL_USER;

export const privateInstance = axios.create({
  baseURL,
});
