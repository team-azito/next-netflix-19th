import { instance } from "@/api/axiosInstance";
import { getSearchMoviessParams, getSearchMoviessResponse } from "@/types/search";

export const getSearchMovies = async ({
  page = 1,
  query,
}: getSearchMoviessParams): Promise<getSearchMoviessResponse> => {
  return await instance.get(`search/movie?&language=en-US&page=${page}&include_adult=false&query=${query}`);
};
