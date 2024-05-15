import { getMovies } from "@/api/home";
import SearchMovies from "@/components/search/SearchMovies";

const SearchPage = async () => {
  const { results: popularMoviesData } = await getMovies("popular");

  return <SearchMovies popularMoviesData={popularMoviesData} />;
};

export default SearchPage;
