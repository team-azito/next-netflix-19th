import { Movie } from "@/types/common";

export type GetMoviesParams = "popular" | "top_rated" | "now_playing" | "upcoming";

export interface GetMoviesResponse {
  page: number;
  results: Movie[];
  total_pages: number;
  total_results: number;
}
