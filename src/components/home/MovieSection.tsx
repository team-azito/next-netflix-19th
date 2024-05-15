"use client";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { movieSectionTitle } from "@/constants/movies";
import { MovieCategory } from "@/types/common";
import { GetMoviesResponse } from "@/types/home";
import ArrowIcon from "#/icons/home/icon-left-arrow.svg";

interface MovieSectionProps {
  category: MovieCategory;
  movieData: GetMoviesResponse;
}

const MovieSection = ({ category, movieData }: MovieSectionProps) => {
  const posterBaseUrl = process.env.NEXT_PUBLIC_POSTER_BASE_URL;

  const isPreview = category === "upcoming";
  const titleStyle = isPreview ? "text-26pxr font-bold" : "text-21pxr font-bold";
  const imageWrapperStyle = isPreview ? "min-w-102pxr h-102pxr" : "min-w-103pxr h-161pxr";
  const imageStyle = isPreview ? "rounded-full" : "rounded-sm";

  // 스크롤을 위한 ref
  const containerRef = useRef<HTMLDivElement>(null);

  // 슬라이더 버튼 클릭 이벤트 핸들러
  const handleScroll = (direction: "left" | "right") => {
    if (containerRef.current) {
      const { scrollLeft, clientWidth } = containerRef.current;
      const scrollTo = direction === "left" ? scrollLeft - clientWidth : scrollLeft + clientWidth;
      containerRef.current.scrollTo({ left: scrollTo, behavior: "smooth" });
    }
  };

  return (
    <section className="flex-center relative w-full">
      <button onClick={() => handleScroll("left")} aria-label="Scroll Left">
        <ArrowIcon alt="왼쪽 화살표" className="left-0 absolute z-10" />
      </button>

      <div className="flex-column w-full gap-14pxr">
        <h2 className={titleStyle}>{movieSectionTitle[category]}</h2>
        <div className="flex gap-7pxr overflow-auto scroll-smooth" ref={containerRef}>
          {movieData.results.map((movie) => {
            if (!movie.poster_path) return null;
            return (
              <Link href={`/media/${movie.id}`} key={movie.id} className={`${imageWrapperStyle} relative`}>
                <Image
                  alt={`영화 포스터 이미지: ${movie.title}`}
                  fill
                  className={imageStyle}
                  sizes={isPreview ? "102px" : "103px"}
                  src={`${posterBaseUrl}${movie.poster_path}`}
                />
              </Link>
            );
          })}
        </div>
      </div>
      <button onClick={() => handleScroll("right")} aria-label="Scroll Right">
        <ArrowIcon className="absolute right-3pxr z-10 rotate-180" alt="오른쪽 화살표" />
      </button>
    </section>
  );
};

export default MovieSection;
