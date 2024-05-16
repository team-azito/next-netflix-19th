"use client";
import SearchIcon from "#/icons/search/icon-search.svg";
import CloseIcon from "#/icons/search/icon-close.svg";
import PlayIcon from "#/icons/search/icon-play.svg";
import Image from "next/image";
import { ChangeEvent, useState, useEffect } from "react";
import { getMovies } from "@/api/home";
import { Movie } from "@/types/common";

const posterBaseUrl = process.env.NEXT_PUBLIC_POSTER_BASE_URL;

const SearchPage = () => {
  const [searchInput, setSearchInput] = useState("");
  const [popularMovies, setPopularMovies] = useState<Movie[]>([]);

  const handleSearchInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchInput(e.target.value);
  };

  const fetchPopularMovies = async () => {
    const data = await getMovies("popular");
    setPopularMovies(data.results);
  };

  useEffect(() => {
    fetchPopularMovies();
  }, []);

  return (
    <>
      <div className="p-4 relative bg-gray-800">
        <SearchIcon className="left-4 absolute top-1/2 -translate-y-1/2 transform" alt="돋보기 모양 아이콘" />
        <input
          value={searchInput}
          onChange={handleSearchInputChange}
          className="h-12 pl-12 pr-10 py-2 w-full rounded-full bg-gray-700 text-white placeholder-gray-400 focus:outline-none"
          placeholder="Search for a show, movie, genre, e.t.c."
        />
        {searchInput && (
          <button onClick={() => setSearchInput("")} className="right-4 absolute top-1/2 -translate-y-1/2 transform">
            <CloseIcon className="text-gray-400" alt="검색 결과 되돌리기 아이콘" />
          </button>
        )}
      </div>

      <h1 className="px-4 py-4 text-27pxr font-bold text-white">Top Searches</h1>

      <div className="space-y-4 px-4">
        {popularMovies.map((movie) => (
          <div key={movie.id} className="flex h-76pxr w-full cursor-pointer overflow-hidden rounded-lg bg-gray-700">
            <div className="relative h-full min-w-146pxr">
              <Image src={`${posterBaseUrl}${movie.poster_path}`} fill alt="미디어 이미지" />
            </div>
            <div className="flex flex-grow items-center justify-between px-10pxr py-21pxr">
              <p className="max-w-160pxr truncate text-16pxr text-white">{movie.title}</p>
              <PlayIcon className="w-6 h-6 text-gray-400" alt="재생 아이콘" />
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default SearchPage;
