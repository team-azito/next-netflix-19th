import { dehydrate, QueryClient, HydrationBoundary } from "@tanstack/react-query";
import SearchMovies from "@/components/search/SearchMovies";
import { getMovies } from "@/api/home";

const SearchPage = async () => {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({ queryKey: ["popularMovies"], queryFn: () => getMovies("popular") });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <SearchMovies />
    </HydrationBoundary>
  );
};

export default SearchPage;
