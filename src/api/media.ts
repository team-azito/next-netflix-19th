import { instance } from "@/api/axiosInstance";
import { Movie } from "@/types/common";

// 타입 설정 필요
export const getMediaDetails = async (id: number): Promise<Movie> => {
  return await instance.get(`/movie/${id}?language=en-US&page=1`);
};
