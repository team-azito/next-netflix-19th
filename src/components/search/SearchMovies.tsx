"use client";

import SearchIcon from "#/icons/search/icon-search.svg";
import CloseIcon from "#/icons/search/icon-close.svg";

import { useInfiniteQuery, useQuery } from "@tanstack/react-query";
import { getMovies } from "@/api/home";
import { ChangeEvent, useCallback, useEffect, useState } from "react";
import { getSearchMovies } from "@/api/search";
import useInfiniteScroll from "@/hooks/useInfiniteScroll";
import SearchedMovies from "@/components/search/SearchedMovies";
import { debounce } from "lodash";

const SearchMovies = () => {
  const { data: popularMoviesData } = useQuery({ queryKey: ["popularMovies"], queryFn: () => getMovies("popular") });

  const [inputValue, setInputValue] = useState("");
  const [debouncedInputValue, setDebouncedInputValue] = useState("");

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  // 디바운스 함수 생성
  const debouncedSearch = useCallback(
    debounce((value: string) => {
      setDebouncedInputValue(value);
    }, 300),
    [],
  );

  // inputValue가 변경될 때마다 디바운스된 함수 호출
  useEffect(() => {
    debouncedSearch(inputValue);
  }, [inputValue, debouncedSearch]);

  const { data: searchMovies } = useQuery({
    queryKey: ["searchMovies", debouncedInputValue],
    queryFn: () => getSearchMovies({ page: 1, query: debouncedInputValue }),
    enabled: !!inputValue,
  });

  const { isVisible, targetRef } = useInfiniteScroll();

  return (
    <div className="w-full">
      <div className="relative">
        <SearchIcon className="absolute left-16pxr top-15pxr" alt="돋보기 모양 아이콘" />
        <input
          value={inputValue}
          onChange={handleInputChange}
          className="h-52pxr w-full bg-gray-20 px-50pxr py-20pxr text-gray-30"
          placeholder="Search for a show, movie, genre, e.t.c."
        />
        <button>
          <CloseIcon className="absolute right-16pxr top-18pxr" alt="검색 결과 되돌리기 아이콘" />
        </button>
      </div>

      {inputValue ? (
        <>{searchMovies?.results && <SearchedMovies moviesData={searchMovies?.results} />}</>
      ) : (
        <>
          <h1 className="px-12pxr py-24pxr text-27pxr font-bold">Top Searches</h1>
          {popularMoviesData?.results && <SearchedMovies moviesData={popularMoviesData?.results} />}
        </>
      )}

      <div ref={targetRef}></div>
    </div>
  );
};

export default SearchMovies;
