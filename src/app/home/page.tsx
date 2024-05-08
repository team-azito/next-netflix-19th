import MovieSection from "@/components/home/MovieSection";
import { MovieCategory } from "@/types/home";

const HomePage = () => {
  const categories: MovieCategory[] = ["upcoming", "popular", "top_rated", "now_playing"];

  return (
    <div className="flex-column gap-22pxr w-full pl-16pxr">
      {categories.map((category) => (
        <MovieSection key={category} category={category} />
      ))}
    </div>
  );
};

export default HomePage;
