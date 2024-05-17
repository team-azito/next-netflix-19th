"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import PlusIcon from "#/icons/home/plus.svg";
import PlayIcon from "#/icons/home/play.svg";
import InfoIcon from "#/icons/home/info.svg";
import { GetMoviesResponse } from "@/types/home";

interface MoviePlayProps {
  movieData: GetMoviesResponse;
}
const MoviePlay = ({ movieData }: MoviePlayProps) => {
  const posterBaseUrl = process.env.NEXT_PUBLIC_POSTER_BASE_URL;
  const [randomIndex, setRandomIndex] = useState<number>(0);

  useEffect(() => {
    const index = Math.floor(Math.random() * movieData.results.length);
    setRandomIndex(index);
  }, [movieData]);
  const data = movieData.results[randomIndex];

  return (
    <section className="flex-column mb-43pxr items-center gap-11pxr">
      <div className="relative h-375pxr w-full">
        {randomIndex ? (
          <Link href={`/media/${data.id}`} className="cursor-pointer">
            <Image
              src={`${posterBaseUrl}${data.poster_path}`}
              alt={`영화 포스터 이미지: ${data.title}`}
              fill
              priority
            />
            <div className="absolute inset-0pxr bg-gradient-to-b"></div>
          </Link>
        ) : (
          <span className="flex-center h-full text-gray-10">Loading...</span>
        )}
      </div>
      <div>
        {randomIndex ? <span className="text-13pxr font-bold">#{randomIndex + 1} in Korea Today</span> : undefined}
      </div>
      <div className="flex gap-50pxr">
        <div className="flex-center flex-column gap-3pxr text-13pxr">
          <PlusIcon alt="plus 아이콘" />
          My List
        </div>
        <Link href={`/media/${data.id}`}>
          <div className="flex-center h-45pxr w-110pxr rounded-md bg-gray-30">
            <div className="flex-center gap-13pxr text-18pxr font-semibold text-black">
              <PlayIcon alt="play 아이콘" />
              Play
            </div>
          </div>
        </Link>
        <div className="flex-center flex-column gap-3pxr text-13pxr">
          <InfoIcon alt="info 아이콘" />
          Info
        </div>
      </div>
    </section>
  );
};

export default MoviePlay;
