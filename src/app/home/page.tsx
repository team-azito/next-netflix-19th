import MovieSection from "@/components/home/MovieSection";
import { getMovies } from "@/api/home";

const HomePage = async () => {
  // Explicitly fetch data for each category
  const nowPlayingMovies = await getMovies("now_playing");
  const popularMovies = await getMovies("popular");
  const topRatedMovies = await getMovies("top_rated");
  const upcomingMovies = await getMovies("upcoming");

  return (
    <div className="flex-column gap-22pxr w-full pl-16pxr">
      <MovieSection key="now_playing" category="now_playing" movieData={nowPlayingMovies} />
      <MovieSection key="popular" category="popular" movieData={popularMovies} />
      <MovieSection key="top_rated" category="top_rated" movieData={topRatedMovies} />
      <MovieSection key="upcoming" category="upcoming" movieData={upcomingMovies} />
    </div>
  );
};

export default HomePage;
