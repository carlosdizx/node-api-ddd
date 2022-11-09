import axiosInstance from "../AxiosInstance";

const getAllPokemonAndRegister = async () => {
  const result = await axiosInstance.get("");
  console.log(result.data.results);
};

const userAxiosInit = async () => {
  await getAllPokemonAndRegister();
};

export default userAxiosInit;
