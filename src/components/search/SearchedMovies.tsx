import { Movie } from "@/types/common";
import PlayIcon from "#/icons/search/icon-play.svg";
import Image from "next/image";

import NoImageIcon from "#/icons/search/icon-noImage.svg";
import SkeletonMovies from "@/components/search/SkeletonMovies";
interface SearchedMoviesProps {
  moviesData: Movie[];
  isLoading: boolean;
}
const SearchedMovies = ({ moviesData, isLoading }: SearchedMoviesProps) => {
  const posterBaseUrl = process.env.NEXT_PUBLIC_POSTER_BASE_URL;

  if (isLoading) {
    return <SkeletonMovies />;
  }
  return (
    <>
      {moviesData?.map((movie) => (
        <div key={movie.id} className="flex h-76pxr cursor-pointer bg-gray-20">
          <div className="flex-center relative h-full min-w-146pxr">
            {movie.poster_path ? (
              <Image
                sizes="146px"
                src={`${posterBaseUrl}${movie.poster_path}`}
                className="object-cover"
                fill
                priority
                alt="미디어 이미지"
              />
            ) : (
              <NoImageIcon alt="없는 이미지" />
            )}
          </div>
          <div className="flex flex-grow items-center justify-between px-10pxr py-21pxr">
            <p className="max-w-160pxr overflow-hidden text-16pxr">{movie.title}</p>
            <PlayIcon alt="재생 아이콘" />
          </div>
        </div>
      ))}
    </>
  );
};

export default SearchedMovies;
