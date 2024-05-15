import { Movie } from "@/types/common";
import PlayIcon from "#/icons/search/icon-play.svg";
import Image from "next/image";
interface SearchedMoviesProps {
  moviesData: Movie[];
}
const SearchedMovies = ({ moviesData }: SearchedMoviesProps) => {
  const posterBaseUrl = process.env.NEXT_PUBLIC_POSTER_BASE_URL;
  return (
    <>
      {moviesData?.map((movie) => (
        <div key={movie.id} className="flex h-76pxr cursor-pointer bg-gray-20">
          <div className="relative h-full min-w-146pxr">
            <Image src={`${posterBaseUrl}${movie.poster_path}`} className="object-cover" fill alt="미디어 이미지" />
          </div>
          <div className="flex flex-grow items-center justify-between px-10pxr py-21pxr">
            <p className="max-w-160pxr text-16pxr">{movie.title}</p>
            <PlayIcon alt="재생 아이콘" />
          </div>
        </div>
      ))}
    </>
  );
};

export default SearchedMovies;
