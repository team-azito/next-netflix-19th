import { GetMoviesResponse } from "@/types/home";

export interface getSearchMoviessParams {
  page: number;
  query: string;
}

export interface getSearchMoviessResponse extends GetMoviesResponse {}
