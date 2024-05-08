import MovieSection from "@/components/home/MovieSection";

const HomePage = () => {
  return (
    <div className="flex-column gap-22pxr w-full">
      <MovieSection category="upcoming" />
      <MovieSection category="popular" />
      <MovieSection category="top_rated" />
      <MovieSection category="now_playing" />
    </div>
  );
};

export default HomePage;
