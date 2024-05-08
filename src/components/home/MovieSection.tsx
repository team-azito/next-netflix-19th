import { getMovies } from "@/api/home";
import { movieSectionTitle } from "@/constants/movies";
import Image from "next/image";
import Link from "next/link";

const MovieSection = async ({ category }: { category: keyof typeof movieSectionTitle }) => {
  const moviesData = await getMovies(category);
  const posterBaseUrl = process.env.NEXT_POSTER_BASE_URL;

  // 조건부 스타일 적용을 위한 변수
  const isPreview = category === "upcoming";
  const titleStyle = isPreview ? "text-26pxr font-bold" : "text-21pxr font-bold"; // 글씨 크기 조정
  const imageWrapperStyle = isPreview ? "min-w-102pxr h-102pxr" : "min-w-103pxr h-161pxr"; // 이미지 스타일 조정
  const imageStyle = isPreview ? "rounded-full" : "rounded-sm"; // 이미지 스타일 조정

  return (
    <section className="flex-column w-full gap-14pxr">
      <h2 className={titleStyle}>{movieSectionTitle[category]}</h2>
      <div className="flex gap-7pxr overflow-auto">
        {moviesData.results.map((movie) => {
          if (!movie.poster_path) return null;
          return (
            <Link href={`/media/${movie.id}`} key={movie.id} className={`${imageWrapperStyle} relative`}>
              <Image
                alt={`영화 포스터 이미지: ${movie.title}`}
                fill
                className={imageStyle}
                src={`${posterBaseUrl}${movie.poster_path}`}
              />
            </Link>
          );
        })}
      </div>
    </section>
  );
};

export default MovieSection;
