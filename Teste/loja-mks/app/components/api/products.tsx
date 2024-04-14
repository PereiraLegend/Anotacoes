import axios from "axios";
import { useQuery } from "react-query";

const API = `https://mks-frontend-challenge-04811e8151e6.herokuapp.com/api/v1/products?page=1&rows=8&sortBy=id&orderBy=DESC`;

const fetchProducts = async () => {
  const { data } = await axios.get(API);
  return data.products; // Retornando apenas a lista de produtos
};

export default function Products() {
  const { data, isLoading, isError } = useQuery("products", fetchProducts);

  return { data, isLoading, isError };
}
