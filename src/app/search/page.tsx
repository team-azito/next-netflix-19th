// "use client";
import SearchIcon from "#/icons/search/icon-search.svg";
import CloseIcon from "#/icons/search/icon-close.svg";
import PlayIcon from "#/icons/search/icon-play.svg";
import Image from "next/image";
import SampleImg from "#/images/sample.png";
import { ChangeEvent, useState } from "react";
import { getSearchMovie } from "@/api/search";
import { getMovies } from "@/api/home";

const SearchPage = async () => {
  const posterBaseUrl = process.env.NEXT_PUBLIC_POSTER_BASE_URL;

  const popularMovies = await getMovies("popular");
  return (
    <div className="w-full">
      <div className="relative">
        <SearchIcon className="absolute left-16pxr top-15pxr" alt="돋보기 모양 아이콘" />
        <input
          className="h-52pxr w-full bg-gray-20 px-50pxr py-20pxr text-gray-30"
          placeholder="Search for a show, movie, genre, e.t.c."
        />
        {/* <button onClick={() => setSearchInput("")}> */}
        <CloseIcon className="absolute right-16pxr top-18pxr" alt="검색 결과 되돌리기 아이콘" />
        {/* </button> */}
      </div>

      <h1 className=" px-12pxr py-24pxr text-27pxr font-bold">Top Searches</h1>

      {popularMovies.results.map((movie) => (
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
    </div>
  );
};

export default SearchPage;
