import { instance } from "@/api/axiosInstance";
import { GetDetailsResponse } from "@/types/media";

export const getMediaDetails = async (id: number): Promise<GetDetailsResponse> => {
  return await instance.get(`/movie/${id}?language=en-US&page=1`);
};
