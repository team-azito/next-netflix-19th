import MovieSection from "@/components/home/MovieSection";
import { getMovies } from "@/api/home";
import { MovieCategory } from "@/types/common";

const HomePage = async () => {
  const categories: MovieCategory[] = ["upcoming", "now_playing", "popular", "top_rated"];
  const fetchPromises = categories.map((category) => getMovies(category));

  const moviesResults = await Promise.all(fetchPromises);

  const moviesData = categories.map((category, index) => ({
    category,
    data: moviesResults[index],
  }));

  return (
    <>
      <div>테스트</div>
      <div className="flex-column gap-22pxr w-full pl-16pxr">
        {moviesData.map(({ category, data }) => (
          <MovieSection key={category} category={category} movieData={data} />
        ))}
      </div>
    </>
  );
};

export default HomePage;
