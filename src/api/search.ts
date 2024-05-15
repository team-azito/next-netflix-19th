import { instance } from "@/api/axiosInstance";
import { GetMoviesParams, GetMoviesResponse } from "@/types/home";

export const getSearchMovie = async (page = 1, query: string): Promise<GetMoviesResponse> => {
  return await instance.get(`search/movie?&language=en-US&page=${page}&include_adult=false&query=${query}`);
};
