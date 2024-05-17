import { instance } from "@/api/axiosInstance";
import { getSearchMoviesParams, getSearchMoviessResponse } from "@/types/search";

export const getSearchMovies = async ({
  page = 1,
  query,
}: getSearchMoviesParams): Promise<getSearchMoviessResponse> => {
  return await instance.get(`search/movie?&language=en-US&page=${page}&include_adult=false&query=${query}`);
};
