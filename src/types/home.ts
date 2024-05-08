import { movieSectionTitle } from "@/constants/movies";
import { Movie } from "@/types/common";

export type MovieCategory = keyof typeof movieSectionTitle;

export type GetMoviesParams = MovieCategory;

export interface GetMoviesResponse {
  page: number;
  results: Movie[];
  total_pages: number;
  total_results: number;
}
