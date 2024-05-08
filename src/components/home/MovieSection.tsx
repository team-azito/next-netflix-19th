import { getMovies } from "@/api/home";
import { GetMoviesParams } from "@/types/home";
import Image from "next/image";

const MovieSection = async ({ category }: { category: GetMoviesParams }) => {
  const moviesData = await getMovies(category);
  const posterBaseUrl = process.env.NEXT_PUBLIC_POSTER_BASE_URL;

  return (
    <section className="flex-column w-full gap-14px">
      {/* <p className="text-21pxr font-bold">{movieSectionTitle[category]}</p> */}
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
