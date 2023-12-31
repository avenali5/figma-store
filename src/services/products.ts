import axios from "axios";
const url = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5555/api";

export const getAllProducts = (type?: string) => {
  return axios
    .get(`${url}/products/${type}`)
    .then((res: any) => res.data.data)
    .catch(err => {
      console.log(err);
      throw err;
    });
};

export const getProductById = (id: string) => {
  return axios
    .get(`${url}/products/${id}`)
    .then((res: any) => res.data)
    .catch(err => {
      console.log(err);
      throw err;
    });
};

export const searchProduct = (term: string) => {
  return axios
    .get(`${url}/search?term=${term}`)
    .then((res: any) => res.data.data)
    .catch(err => {
      console.log(err);
      throw err;
    });
};
