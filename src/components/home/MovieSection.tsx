import { getMovies } from "@/api/home";
import { movieSectionTitle } from "@/constants/movies";
import Image from "next/image";

const MovieSection = async ({ category }: { category: keyof typeof movieSectionTitle }) => {
  const moviesData = await getMovies(category);
  const posterBaseUrl = process.env.NEXT_PUBLIC_POSTER_BASE_URL;

  return (
    <section className="flex-column w-full gap-14pxr">
      <h2 className="text-21pxr font-bold">{movieSectionTitle[category]}</h2>
      <div className="flex gap-7pxr overflow-scroll">
        {moviesData.results.map((movie) => {
          if (!movie.poster_path) return null;
          return (
            <div key={movie.id} className="min-w-103pxr h-161pxr relative">
              <Image
                alt={`영화 포스터 이미지: ${movie.title}`}
                fill
                className="rounded-sm"
                src={`${posterBaseUrl}${movie.poster_path}`}
              />
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default MovieSection;
