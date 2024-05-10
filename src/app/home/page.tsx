import MovieSection from "@/components/home/MovieSection";
import HomeHeader from "@/components/home/HomeHeader";
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
    <div className="flex-column w-full pl-16pxr">
      <HomeHeader />
      <div className="flex-column gap-22pxr">
        {moviesData.map(({ category, data }) => (
          <MovieSection key={category} category={category} movieData={data} />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
