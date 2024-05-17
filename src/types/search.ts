import { GetMoviesResponse } from "@/types/home";

export interface getSearchMoviesParams {
  page: number;
  query: string;
}

export interface getSearchMoviessResponse extends GetMoviesResponse {}
