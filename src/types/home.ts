import { Movie, MovieCategory } from "@/types/common";

export type GetMoviesParams = MovieCategory;

export interface GetMoviesResponse {
  page: number;
  results: Movie[] | [];
  total_pages: number;
  total_results: number;
}
