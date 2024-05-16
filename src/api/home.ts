import { instance } from "@/api/axiosInstance";
import { GetMoviesParams, GetMoviesResponse } from "@/types/home";

export const getMovies = async (category: GetMoviesParams): Promise<GetMoviesResponse> => {
  return await instance.get(`/movie/${category}?language=en-US&page=1`);
};
