"use client";

import SearchIcon from "#/icons/search/icon-search.svg";
import CloseIcon from "#/icons/search/icon-close.svg";
import SkeletonMovies from "@/components/search/SkeletonMovies";
import { useInfiniteQuery, useQuery } from "@tanstack/react-query";
import { getMovies } from "@/api/home";
import { ChangeEvent, useCallback, useEffect, useState } from "react";
import { getSearchMovies } from "@/api/search";
import useInfiniteScroll from "@/hooks/useInfiniteScroll";
import SearchedMovies from "@/components/search/SearchedMovies";
import { debounce } from "lodash";

const SearchMovies = () => {
  const { data: popularMoviesData, isLoading: isLoadingPopularMovies } = useQuery({
    queryKey: ["popularMovies"],
    queryFn: () => getMovies("popular"),
  });

  const [inputValue, setInputValue] = useState("");
  const [debouncedInputValue, setDebouncedInputValue] = useState("");

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  // 디바운스 함수
  const debouncedSearch = useCallback(
    debounce((value: string) => {
      setDebouncedInputValue(value);
    }, 700),
    [],
  );

  // inputValue가 변경될 때마다 디바운스 함수 호출
  useEffect(() => {
    debouncedSearch(inputValue);
  }, [inputValue, debouncedSearch]);

  const { isVisible, targetRef } = useInfiniteScroll();

  const { isFetching, data, fetchNextPage, hasNextPage } = useInfiniteQuery({
    queryKey: ["searchMovies", debouncedInputValue],
    queryFn: ({ pageParam }) => {
      return getSearchMovies({ page: pageParam, query: debouncedInputValue });
    },
    initialPageParam: 1,
    getNextPageParam: (lastPage) => {
      if (lastPage.page < lastPage.total_pages) {
        return lastPage.page + 1;
      }
      return undefined;
    },
    enabled: !!debouncedInputValue,
  });

  const searchMovies = data?.pages.flatMap((page) => page.results) || [];

  useEffect(() => {
    if (isVisible && hasNextPage) {
      fetchNextPage();
    }
  }, [isVisible, hasNextPage, fetchNextPage]);

  return (
    <div className="h-full w-full">
      <div className="relative">
        <SearchIcon className="absolute left-16pxr top-15pxr" alt="돋보기 모양 아이콘" />
        <input
          value={inputValue}
          onChange={handleInputChange}
          className="h-52pxr w-full bg-gray-20 px-50pxr py-20pxr text-gray-30"
          placeholder="Search for a show, movie, genre, e.t.c."
        />
        <button onClick={() => setInputValue("")}>
          <CloseIcon className="absolute right-16pxr top-18pxr" alt="검색 결과 되돌리기 아이콘" />
        </button>
      </div>

      {inputValue ? (
        <>
          {isFetching && searchMovies.length === 0 ? (
            <SkeletonMovies />
          ) : searchMovies.length > 0 ? (
            <SearchedMovies moviesData={searchMovies} />
          ) : (
            !isFetching && <p className="flex flex-grow">검색 결과 없어요.</p>
          )}
          <div ref={targetRef}></div>
        </>
      ) : (
        <>
          <h1 className="px-12pxr py-24pxr text-27pxr font-bold">Top Searches</h1>
          {isLoadingPopularMovies ? (
            <SkeletonMovies />
          ) : (
            popularMoviesData?.results && <SearchedMovies moviesData={popularMoviesData.results} />
          )}
        </>
      )}
    </div>
  );
};

export default SearchMovies;
