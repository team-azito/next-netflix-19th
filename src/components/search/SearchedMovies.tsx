import { useState, useEffect } from "react";
import { Movie } from "@/types/common";
import PlayIcon from "#/icons/search/icon-play.svg";
import Image from "next/image";

import SkeletonMovies from "@/components/search/SkeletonMovies";

interface SearchedMoviesProps {
  moviesData: Movie[];
  isLoading: boolean;
}

const SearchedMovies = ({ moviesData, isLoading }: SearchedMoviesProps) => {
  if (isLoading) {
    return <SkeletonMovies />;
  }

  return <>{moviesData?.map((movie) => <MovieCard key={movie.id} movie={movie} />)}</>;
};

interface MovieCardProps {
  movie: Movie;
}

const MovieCard = ({ movie }: MovieCardProps) => {
  const posterBaseUrl = process.env.NEXT_PUBLIC_POSTER_BASE_URL;
  const noImageSrc = "/icons/search/icon-noImage.svg";

  const [imageSrc, setImageSrc] = useState(`${posterBaseUrl}${movie.poster_path}`);
  const [sizes, setSizes] = useState("40px");

  useEffect(() => {
    setSizes("146px");
  }, []);

  const handleImageError = () => {
    setImageSrc(noImageSrc);
  };

  return (
    <div className="flex h-76pxr cursor-pointer bg-gray-20">
      <div className="flex-center relative h-full min-w-146pxr">
        <Image
          sizes={sizes}
          src={imageSrc}
          className="object-cover"
          fill
          priority
          alt="미디어 이미지"
          onError={handleImageError}
        />
      </div>
      <div className="flex flex-grow items-center justify-between px-10pxr py-21pxr">
        <p className="max-w-160pxr overflow-hidden text-16pxr">{movie.title}</p>
        <PlayIcon alt="재생 아이콘" />
      </div>
    </div>
  );
};

export default SearchedMovies;
